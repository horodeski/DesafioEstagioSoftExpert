const url_products_get = "http://localhost/routers/products.php?op=GET"
const url_categories_get = "http://localhost/routers/categories.php?op=GET"
const url_categories_post = "http://localhost/routers/categories.php?op=POST"
const url_categories_put = "http://localhost/routers/categories.php?op=PUT"
const url_categories_delete = "http://localhost/routers/categories.php?op=DELETE"

const tbody = document.querySelector("tbody");
const cartModal = document.getElementById("cartModal");
const emplyCart = document.getElementById("alert-cart-emply")
const modalConfirm = document.getElementById("modalConfirm");
const contentCart = document.getElementById("contentCart");
const form = document.getElementById("form-category");

const setCart = (dbCart) => localStorage.setItem("dbCart", JSON.stringify(dbCart));

const getCart = () => JSON.parse(localStorage.getItem("dbCart")) || [];
const readCart = () => getCart();

const getCategories = fetch(url_categories_get).then((res) => { return res.json(); });
const getProducts = fetch(url_products_get).then((res) => { return res.json(); });

const cart = readCart();

const postCategory = () => {
    form.addEventListener("submit", async () => {
        if (isValidFields()) {
            const data = new FormData(form);
            try {
                const res = await fetch(url_categories_post, {
                    method: 'POST',
                    body: data
                });
            } catch (error) {
                console.log(error.message);
            }
        }
    })
}


const isValidFields = () => {
    const form = document.getElementById("form-category")

    if (!form.checkValidity()) {
        alert('Please, provide a valid response for the category name');
        return false;
    }

    return true;
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
    // window.location.reload();
}

const deleteCart = (index) => {
    cart.splice(index);
    setCart(cart);
    // window.location.reload();
}

const calculateTaxedUnit = (taxPercentage, originalUnit) => {
    const tax = parseFloat(taxPercentage) / 100;
    const originalUnitValue = parseFloat(originalUnit);
    const taxedUnit = originalUnitValue + (originalUnitValue * tax);
    return taxedUnit.toFixed(2);
}

const verifyEmptyCart = () => {
    if (cart.length > 0) {
        emplyCart.classList.add("hidden");
        contentCart.classList.remove("hidden");
    }
};

const cartToHistory = () => {
    history.push(Object.assign({
        id: Math.random().toString(16).slice(2),
        parseTotal: document.getElementById("parseTotal").value,
        total: document.getElementById("total").value,
        taxValue: document.getElementById("taxValue").value,
        products: cart
    }));

    setHistory(history);
    deleteCart()
}

async function updateTable() {
    let categories = await getCategories

    categories.forEach((category) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${category.code}</td>
        <td>${category.name}</td>
        <td>${category.tax}%</td>
        <td><button class="buttonDelete" onclick="deleteCategory(${category.code})"><i class='bx bxs-trash-alt' ></i></button></td>
        `;

        tbody.appendChild(tr);
    });
};

function objectToFormData(obj) {
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return formData;
}


const deleteCategory = async (code) => {
    const products = await getProducts;
    const categories = await getCategories;

    const objCode = {
        code: code
    }

    const codeFormData = objectToFormData(objCode);

    const findCategory = categories.find(i => i.code == code)
    const mapCategory = products.map(i => i.category === findCategory.name)

    if (mapCategory.find(i => i == true)) {
        const confirm = window.confirm("Você tem certeza que quer deletar essa categoria? Os produtos que tem essa categoria serão apagados.");
        if (confirm) {
            try {
                await fetch(url_categories_delete, {
                    method: "POST",
                    body: codeFormData
                });
            } catch (error) {
                console.log(error);
            }
        }
    } else {
        const confirm = window.confirm("Você tem certeza que quer deletar essa categoria?");
        if (confirm) {
            try {
                await fetch(url_categories_delete, {
                    method: "POST",
                    body: codeFormData
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
    window.location.reload();
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
        const totalAccount = productItem.amount * productItem.unit;

        div.innerHTML = `
        <div class="card">
        <div class="content">
        <h3>${productItem.product}</h3>
        <span>${productItem.tax} Tax</span>
        </div>
        <div class="btn-price-unid">
        <div class="unid-price">
        <span>${productItem.amount} (unds.)</span>
        <span>$${productItem.unit}</span>
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
            <button onclick="cartToHistory()"  class="primary-btn">Finish</button>
            </div>
            
            `;
    }
};

updateTable();
addEventListener("DOMContentLoaded", () => {
    verifyEmptyCart();
    updateCards();
});