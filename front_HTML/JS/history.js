const tbodyContent = document.querySelector("tbody")
const modalHistory = document.getElementById("modalHistory");
const modalBody = document.getElementById("modal-body");
const modalContent = document.getElementById("modal-content");
const cartModal = document.getElementById("cartModal");
const emplyCart = document.getElementById("alert-cart-emply")
const modalConfirm = document.getElementById("modalConfirm");
const contentCart = document.getElementById("contentCart");

const getHistory = () => JSON.parse(localStorage.getItem("dbHistory")) || [];
const getCart = () => JSON.parse(localStorage.getItem("dbCart")) || [];

const setHistory = (dbHistory) => localStorage.setItem("dbHistory", JSON.stringify(dbHistory));
const setCart = (dbCart) => localStorage.setItem("dbCart", JSON.stringify(dbCart));

const readHistory = () => getHistory();
const readCart = () => getCart();

const history = readHistory();
const cart = readCart();

const allProductsSection = document.getElementById("all-products");

const updateTable = () => {
    tbodyContent.innerHTML = "";
    history.forEach((tableItem) => {
        const tr = document.createElement("tr");
        const uniqueButtonId = `viewButton_${tableItem.id}`;
        tr.innerHTML = `
            <td>${tableItem.id}</td>
            <td>${tableItem.taxValue}</td>
            <td>${tableItem.total}</td>
            <td>
                <button id="${uniqueButtonId}">
                    View
                </button>
            </td>
        `;
        tbodyContent.appendChild(tr);

        document.getElementById(uniqueButtonId).addEventListener("click", () => {
            updateCard(tableItem.products, tableItem.parseTotal, tableItem.taxValue, tableItem.total);
            openView();
        });
    });
};

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

const cartToHistory = () => {
    history.push(Object.assign({
        id: Math.random().toString(16).slice(2),
        parseTotal: document.getElementById("parseTotal").value,
        total: document.getElementById("total").value,
        taxValue: document.getElementById("taxValueInput").value,
        products: cart
    }));
    setHistory(history);
    deleteCart()
}

const updateCardsCart = () => {
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
                <input disabled id="taxValueInput" value="${taxValue.toFixed(2)}" />
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


const updateCard = (products, total, taxValue, parseTotal) => {
    modalBody.innerHTML = "";
    products.map((i) => {
        const productsContent = document.createElement("div");
        productsContent.innerHTML = ` <div class="card">
                <div class="content">
                    <h3>${i.product}</h3>
                    <span>${i.tax} Tax</span>
                </div>
                <div class="btn-price-unid">
                    <div class="unid-price">
                        <span>${i.amount} (unds.)</span>
                        <span>$${i.unit}</span>
                    </div>

                </div>
            </div>`
        modalBody.appendChild(productsContent)
    })
    document.getElementById("totalValue").textContent = `Total: $${parseTotal}`;
    document.getElementById("taxValue").textContent = `Tax: $${taxValue}`;
    document.getElementById("totalTaxedValue").textContent = `Total sem taxa: $${total}`;
};

function openView() {
    modalHistory.classList.remove("hidden");
}

function closeView() {
    modalHistory.classList.add("hidden");
}

const updateScreen = () => {
    history.forEach(updateTable);
};



document.addEventListener("DOMContentLoaded", function () {
    updateScreen();
    updateTable();
    verifyEmptyCart();
    updateCardsCart();
});