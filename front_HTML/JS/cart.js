const cartModal = document.getElementById("cartModal");
const emplyCart = document.getElementById("alert-cart-emply")
const modalConfirm = document.getElementById("modalConfirm");
const select = document.querySelector("select")
const unitPrice = document.getElementById("tax");
const contentCart = document.getElementById("contentCart");
const productsAllInput = document.getElementById("products-list");
productsAllInput.addEventListener("change", updateProductFields);

const url_products_get = "http://localhost/routers/products.php?op=GET"
const url_products_put = "http://localhost/routers/products.php?op=PUT"
const url_orders = "http://localhost/routers/order.php"
const url_order_item = "http://localhost/routers/order_item.php"

const getCart = () => JSON.parse(localStorage.getItem("dbCart")) || [];
const setCart = (dbCart) => localStorage.setItem("dbCart", JSON.stringify(dbCart));

const readCart = () => getCart();
const cart = readCart();

const getProducts = fetch(url_products_get).then((res) => {
    return res.json();
})
const getOrders = fetch(url_orders).then((res) => {
    return res.json();
})


async function updateStock(newStock, product) {
    const data = {
        code: product,
        amount: newStock,
    }

    const f_data = objectToFormData(data)
    try {
        const res = await fetch(url_products_put, {
            method: 'POST',
            body: f_data
        });
    } catch (error) {
        console.log(error);
    }
}

const postOrder = async (history) => {
    try {
        const res = await fetch(url_orders, {
            method: 'POST',
            body: history,
        })

    } catch (error) {
        console.log(error.message);
    };
}

const postOrderItem = async (orderItem) => {
    try {
        const res = await fetch(url_order_item, {
            method: 'POST',
            body: orderItem,
        })
    } catch (error) {
        console.log(error.message);
    };
}



async function reduceStock(cartItem) {
    const amount = document.getElementById("amount").value
    const products = await getProducts
    selectedProd = products.find(item => item.code == cartItem.code)
    console.log(selectedProd)
    const newStock = parseInt(selectedProd.amount) - amount
    updateStock(newStock, selectedProd.code)
}

async function allProductsSection() {
    const allProductsDiv = document.getElementById("all-products");
    let products = await getProducts;

    for (const productItem of products) {
        const card = document.createElement("div");
        card.classList.add("card");

        const content = document.createElement("div");
        content.classList.add("content");

        const title = document.createElement("h3");
        title.textContent = productItem.name;
        content.appendChild(title);

        const category = document.createElement("span");
        category.textContent = `${productItem.category} | ${productItem.tax} Tax`;
        content.appendChild(category);

        const unidPriceContainer = document.createElement("div");
        unidPriceContainer.classList.add("unid-price");

        const amountSpan = document.createElement("span");

        amountSpan.textContent = productItem.amount > 0 ? `${productItem.amount} (unds.)` : "Not available";

        unidPriceContainer.appendChild(amountSpan);

        const unitPriceSpan = document.createElement("span");
        unitPriceSpan.textContent = `$${productItem.price}`;
        unidPriceContainer.appendChild(unitPriceSpan);

        content.appendChild(unidPriceContainer);

        const btnPriceUnid = document.createElement("div");
        btnPriceUnid.classList.add("btn-price-unid");

        btnPriceUnid.appendChild(unidPriceContainer);

        card.appendChild(content);
        card.appendChild(btnPriceUnid);

        allProductsDiv.appendChild(card);
    }
}
allProductsSection()

async function productsOption() {
    let products = await getProducts;

    for (const product of products) {
        const option = document.createElement('option');
        option.textContent = product.name;
        option.value = product.code;
        select.appendChild(option);
    }
}
productsOption()


async function updateProductFields() {
    let products = await getProducts;

    const productNome = document.getElementById("products-list").value;
    const productSelected = products.find((p) => p.code == productNome)

    if (productSelected) {
        const taxedUnitPrice = (productSelected.price * (productSelected.tax / 100));
        document.getElementById("tax").value = (taxedUnitPrice).toFixed(2);
        document.getElementById("unit").value = productSelected.price;
    }

}

const createCart = (product) => {
    cart.push(product);
    setCart(cart);
}

function objectToFormData(obj) {
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return formData;
}


const cartToHistory = async () => {
    const order = {
        code: Math.random().toString(16).slice(2),
        total: document.getElementById("total").value,
        tax: document.getElementById("taxValue").value,
    }

    const orderFormData = objectToFormData(order)
    await postOrder(orderFormData);

    for (item of cart) {
        const order_item = {
            order_code: order.code,
            product_code: item.code,
            amount: item.amount,
            price: item.price,
            tax: item.tax,
        }
        let orderItemFormData = objectToFormData(order_item)
        await postOrderItem(orderItemFormData);
    }

    deleteCart()
}

const isValidFields = () => document.getElementById("form-carrinho").reportValidity();

const addToCart = async () => {
    let products = await getProducts;
    const amount = document.getElementById("amount").value

    const selectedProductId = document.getElementById("products-list").value;
    const selectedProduct = products.find(product => product.code == selectedProductId);
    if (isValidFields()) {
        if (selectedProduct && amount <= selectedProduct.amount) {
            const cartItem = {
                code: selectedProduct.code,
                name: selectedProduct.name,
                tax: document.getElementById("tax").value,
                amount: parseInt(document.getElementById("amount").value),
                price: document.getElementById("unit").value,
            };
            reduceStock(cartItem)
            createCart(cartItem);
            updateCards();
            window.location.reload();
        } else if (selectedProduct.amount > 0) {
            alert(`Quantidade indisponivel! Este produto tem apenas ${selectedProduct.amount} unidades `)
        } else if (selectedProduct.amount == 0) {
            alert(`Este produto não está mais disponivel em nosso sistema`)
        }
    }
}

function openModal() {
    modalConfirm.classList.remove("hidden");
}

function closeModal() {
    modalConfirm.classList.add("hidden");
}

function openCart() {
    cartModal.classList.remove("hidden");
}

function closeCart() {
    cartModal.classList.add("hidden");
}

const deleteItemCart = (index) => {
    cart.splice(index, 1);
    setCart(cart);
    window.location.reload();
}

const deleteCart = (index) => {
    cart.splice(index);
    setCart(cart);
    window.location.reload();
}

const verifyEmptyCart = () => {
    if (cart.length > 0) {
        emplyCart.classList.add("hidden");
        contentCart.classList.remove("hidden");
    }
};

const updateCards = () => {
    contentCart.innerHTML = "";
    let taxValue = 0;
    let total = 0;
    let parseTotal = 0;
    verifyEmptyCart();

    cart.forEach((productItem) => {
        const div = document.createElement("div");
        const taxValueAccount = productItem.amount * productItem.tax;
        const totalAccount = productItem.amount * productItem.price;

        div.innerHTML = `
        <div class="card">
            <div class="content">
                <h3>${productItem.name}</h3>
                <span>${productItem.tax} Tax</span>
            </div>
            <div class="btn-price-unid">
                <div class="unid-price">
                    <span>${productItem.amount} (unds.)</span>
                    <span>$${productItem.price}</span>
                </div>
                <button onclick="deleteItemCart(${cart.indexOf(productItem)})"><i class='bx bx-trash'></i></button>
            </div>
        </div>
    `;
        contentCart.appendChild(div);
        parseTotal += totalAccount;
        taxValue += taxValueAccount;
        total += totalAccount + taxValueAccount
    });
    if (cart.length > 0) {

        const result = document.getElementById("result")
        result.innerHTML = `
        <div>
            <div class="group">
            <span>Total:</span>
            <input disabled id="parseTotal" value="${parseTotal.toFixed(2)}" />
            </div>
            <div class="group tax">
            <span>+ tax:</span>
            <input disabled id="taxValue" value="${taxValue.toFixed(2)}" />
            </div>
            <div class="group">
            <span>Final value:</span>
            <input disabled id="total" value="${total.toFixed(2)}" />
            </div>
            </div>
        <div>
            <button class="secondary-btn" onclick="openModal()">Cancel</button>
            <button onclick="cartToHistory()" class="primary-btn">Finish</button>
        </div>

    `;
    }
};

const cancelCart = (event) => {
    event.preventDefault();
    for (const item of cart) {
        const product = products.find(p => p.name === item.product);
        if (product) {
            product.amount += item.amount;
        }
    }

    cart.length = 0;
    setCart(cart);
    updateCards();
    closeCart();

    setTimeout(() => {
        window.location.reload();
    }, 1000);

};

document.addEventListener("DOMContentLoaded", function () {
    verifyEmptyCart();
    updateCards();
});