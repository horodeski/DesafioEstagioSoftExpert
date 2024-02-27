const cartModal = document.getElementById("cartModal");
const contentCart = document.getElementById("contentCart");
const modalConfirm = document.getElementById("modalConfirm");

const getCart = () => JSON.parse(localStorage.getItem("dbCart")) || [];
const getProduct = () => JSON.parse(localStorage.getItem("dbProduct")) || [];
const getCategory = () => JSON.parse(localStorage.getItem("dbCategory")) || [];

const setCart = (dbCart) => localStorage.setItem("dbCart", JSON.stringify(dbCart));
const setHistory = (dbHistory) => localStorage.setItem("dbHistory", JSON.stringify(dbHistory));

const readCart = () => getCart();
const readProduct = () => getProduct();
const readHistory = () => getHistory();

const products = readProduct();
const cart = readCart();
const history = readHistory();

const createCart = (product) => {
    cart.push(product);
    setCart(cart);
    updateCards();
}

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
    verifyEmptyCart();
    updateCards();
});