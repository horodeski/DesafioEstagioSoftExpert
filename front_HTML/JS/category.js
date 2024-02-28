const tbody = document.querySelector("tbody");
const cartModal = document.getElementById("cartModal");
const emplyCart = document.getElementById("alert-cart-emply")
const modalConfirm = document.getElementById("modalConfirm");
const contentCart = document.getElementById("contentCart");

const url = "http://localhost/routers/categories.php"

const getCategories = () =>
    JSON.parse(localStorage.getItem("dbCategory")) ?? [];
const setCategories = (dbCategory) =>
    localStorage.setItem("dbCategory", JSON.stringify(dbCategory));
const getCart = () => JSON.parse(localStorage.getItem("dbCart")) || [];
const getHistory = () => JSON.parse(localStorage.getItem("dbHistory")) || [];

const setCart = (dbCart) => localStorage.setItem("dbCart", JSON.stringify(dbCart));
const setHistory = (dbHistory) => localStorage.setItem("dbHistory", JSON.stringify(dbHistory));

const readCategory = () => getCategories();
const readCart = () => getCart();
const readHistory = () => getHistory();

const categories = readCategory();
const cart = readCart();
const history = readHistory();


fetch(url).then((response) => { return response.json(); }).then((data) => {
    const categories = data
})

const createCategory = (category) => {
    categories.push(category);
    setCategories(categories);
};

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

const verifyEmptyCart = () => {
    if (cart.length > 0) {
        emplyCart.classList.add("hidden");
        contentCart.classList.remove("hidden");
    }
};

const saveCategory = () => {
    const categoryNameInput = document.getElementById("category-title").value;
    
    if (isValidFields()) {
            const category = {
                id: Math.random().toString(16).slice(2),
                name: categoryNameInput.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                tax: document.getElementById("category-tax").value,
            };
            createCategory(category);
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

const updateTable = () => {
    tbody.innerHTML = "";
    categories.forEach((category, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${category.id}</td>
        <td>${category.name}</td>
        <td>${category.tax}%</td>
        <td><button class="buttonDelete" onclick="deleteCategory(${index})"><i class='bx bxs-trash-alt' ></i></button></td>
        `;
        tbody.appendChild(tr);
    });
};

const deleteCategory = (index) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
        categories.splice(index, 1);
        setCategories(categories);
        window.location.reload();
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

document.addEventListener("DOMContentLoaded", function () {
    updateTable();
    verifyEmptyCart();
    updateCards();
});