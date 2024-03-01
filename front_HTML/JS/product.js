tbody = document.querySelector("tbody");
select = document.querySelector("select");
const emplyCart = document.getElementById("alert-cart-emply")
const form = document.getElementById("form-product");

const url_products = "http://localhost/routers/products.php"
const url_categories = "http://localhost/routers/categories.php"

const getProducts = fetch(url_products).then((res) => {
    return res.json();
})
const getCategories = fetch(url_categories).then((res) => { return res.json(); });

async function postProducts() {
    form.addEventListener("submit", async event => {
        event.preventDefault();
        if (isValidFields()) {
            const data = new FormData(form);
            
            try {
                const res = await fetch(url_products, {
                    method: 'POST',
                    body: data,
                });
                window.location.reload()
            } catch (error) {
                console.log(error.message);
            }
        }
    })
}

async function selectCategories() {
    let categories = await getCategories
    for (const i of categories) {
        const option = document.createElement('option');
        option.textContent = i.name;
        option.value = i.code;
        select.appendChild(option);
    }
}

selectCategories()


const isValidFields = () => {
    const form = document.getElementById("form-product")
    if (!form.checkValidity()) {
        alert('Please, provide a valid response for the form');
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
    window.location.reload();
}

const deleteCart = (index) => {
    cart.splice(index);
    setCart(cart);
    window.location.reload();
}

const calculateTaxedUnit = (taxPercentage, originalUnit) => {
    const tax = parseFloat(taxPercentage) / 100;
    const originalUnitValue = parseFloat(originalUnit);
    const taxedUnit = originalUnitValue + (originalUnitValue * tax);
    return taxedUnit.toFixed(2);
}

// const verifyEmptyCart = () => {
//     if (cart.length > 0) {
//         emplyCart.classList.add("hidden");
//         contentCart.classList.remove("hidden");
//     }
// };

// const cartToHistory = () => {
//     history.push(Object.assign({
//         id: Math.random().toString(16).slice(2),
//         parseTotal: document.getElementById("parseTotal").value,
//         total: document.getElementById("total").value,
//         taxValue: document.getElementById("taxValue").value,
//         products: cart
//     }));
//     setHistory(history);
//     deleteCart()
// }

// const updateCards = () => {
//     contentCart.innerHTML = "";
//     let taxValue = 0;
//     let total = 0;
//     let parseTotal = 0;
//     verifyEmptyCart();

//     cart.forEach((productItem) => {
//         const div = document.createElement("div");
//         const taxValueAccount = productItem.amount * productItem.tax;
//         const totalAccount = productItem.amount * productItem.unit;

//         div.innerHTML = `
//             <div class="card">
//                 <div class="content">
//                     <h3>${productItem.product}</h3>
//                     <span>${productItem.tax} Tax</span>
//                 </div>
//                 <div class="btn-price-unid">
//                     <div class="unid-price">
//                         <span>${productItem.amount} (unds.)</span>
//                         <span>$${productItem.unit}</span>
//                     </div>
//                     <button onclick="deleteItemCart(${cart.indexOf(productItem)})"><i class='bx bx-trash'></i></button>
//                 </div>
//             </div>
//         `;
//         contentCart.appendChild(div);
//         parseTotal += totalAccount;
//         taxValue += taxValueAccount;
//         total += totalAccount + taxValueAccount
//     });
//     if (cart.length > 0) {

//         const result = document.getElementById("result")
//         result.innerHTML = `
//             <div>
//                 <div class="group">
//                 <span>Total:</span>
//                 <input disabled id="parseTotal" value="${parseTotal.toFixed(2)}" />
//                 </div>
//                 <div class="group tax">
//                 <span>+ tax:</span>
//                 <input disabled id="taxValue" value="${taxValue.toFixed(2)}" />
//                 </div>
//                 <div class="group">
//                 <span>Final value:</span>
//                 <input disabled id="total" value="${total.toFixed(2)}" />
//                 </div>
//                 </div>
//             <div>
//                 <button class="secondary-btn" onclick="openModal()">Cancel</button>
//                 <button onclick="cartToHistory()"  class="primary-btn">Finish</button>
//             </div>

//         `;
//     }
// };



const saveProduct = () => {
    if (isValidFields()) {
        const categoryName = select.value;
        const category = categories.find(i => i.name === categoryName);
        const productName = document.getElementById("product-name").value

        if (category) {
            const product = {
                id: Math.random().toString(16).slice(2),
                name: productName.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                amount: document.getElementById("product-amount").value,
                unit: document.getElementById("product-unit").value,
                category: categoryName,
                taxedUnit: calculateTaxedUnit(category.tax, document.getElementById("product-unit").value)
            };
            createProduct(product);
            updateTable();
        }
    }
}


const updateTable = async () => {
    let products = await getProducts;

    tbody.innerHTML = "";
    products.forEach((prod, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${prod.code}</td>
        <td>${prod.name}</td>
        <td>${prod.amount}</td>
        <td>${prod.price}</td>
        <td>${prod.category}</td>
        <td>$${prod.tax}</td>
        <td><button class="buttonDelete" onclick="deleteProduct(${index})"><i class='bx bxs-trash-alt' ></i></button></td>
        `;
        tbody.appendChild(tr);
    });
}

const updateProduct = (index, newProduct) => {
    products[index] = newProduct;
    setProducts(products);
    updateTable();
}

const deleteProduct = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
        products.splice(index, 1);
        setProducts(products);
        updateTable();
    }
}

updateTable();
// document.addEventListener("DOMContentLoaded", function () {
//     verifyEmptyCart();
//     updateCards();
// });