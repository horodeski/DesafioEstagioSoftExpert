tbody = document.querySelector("tbody");
select = document.querySelector("select");
const emplyCart = document.getElementById("alert-cart-emply")
const form = document.getElementById("form-product");

const url_products_get = "http://localhost/routers/products.php?op=GET"
const url_products_post = "http://localhost/routers/products.php?op=POST"
const url_products_put = "http://localhost/routers/products.php?op=PUT"
const url_products_delete = "http://localhost/routers/products.php?op=DELETE"
const url_categories_get = "http://localhost/routers/categories.php?op=GET"


const getCart = () => JSON.parse(localStorage.getItem("dbCart")) || [];
const setCart = (dbCart) => localStorage.setItem("dbCart", JSON.stringify(dbCart));

const readCart = () => getCart();
const cart = readCart();

const getProducts = fetch(url_products_get).then((res) => {
    return res.json();
})
const getCategories = fetch(url_categories_get).then((res) => { return res.json(); });

async function postProducts() {
    const products = await getProducts
    form.addEventListener("submit", async event => {
        event.preventDefault();
        if (isValidFields()) {
            const data = new FormData(form);
            const nameProduct = data.getAll('name')
            const sameProduct = products.map(product => product.name == nameProduct)
            if (sameProduct.every(i => i === false)) {
                try {
                    const res = await fetch(url_products_post, {
                        method: 'POST',
                        body: data,
                    });
                } catch (error) {
                    console.log(error.message);
                }
            } else {
                alert("Este produto já existe")
            }
            window.location.reload() 
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


function objectToFormData(obj) {
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return formData;
}


const deleteProduct = async (code) => {
    const objCode = {
        code: code
    }
    const codeFormData = objectToFormData(objCode);

    const confirm = window.confirm("Você tem certeza que quer deletar esse produto?");
    if (confirm) {
        try {
            await fetch(url_products_delete, {
                method: "POST",
                body: codeFormData
            });
        } catch (error) {
            console.log(error);
        }
    }
    window.location.reload();
};


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

const calculateTaxedUnit = (taxPercentage, originalUnit) => {
    const tax = parseFloat(taxPercentage) / 100;
    const originalUnitValue = parseFloat(originalUnit);
    const taxedUnit = originalUnitValue + (originalUnitValue * tax);
    return taxedUnit.toFixed(2);
}

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
    console.log(products)
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
        <td><button class="buttonDelete" onclick="deleteProduct(${prod.code})"><i class='bx bxs-trash-alt' ></i></button></td>
        `;
        tbody.appendChild(tr);
    });
}


updateTable();
