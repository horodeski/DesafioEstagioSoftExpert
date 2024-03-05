const espaco = document.getElementById('espaco');
const form = document.querySelectorAll('form');
const url_products_get = "http://localhost/routers/products.php?op=GET"
const url_products_put = "http://localhost/routers/products.php?op=PUT"
console.log(url_products_get);


const select = document.querySelector("select")
const amntInput = document.getElementById("amount")
const ProductInput = document.getElementById("product")


const getProducts = fetch(url_products_get).then((res) => { return res.json(); });


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


async function reduceStock() {
    listProducts = await getProducts
    const product = ProductInput.value
    const amount = amntInput.value
    selectedProd = listProducts.find(item => item.code == product)
    if (amount <= selectedProd.amount) {
        const newStock = parseInt(selectedProd.amount) - amount
        updateCategory(newStock, product)
    }
    else {
        alert('ERRO')
    }
}

function objectToFormData(obj) {
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return formData;
}

async function updateCategory(newStock, product) {
    
    const data = {
        code: product,
        amount: newStock,
    }
    const f_data = objectToFormData(data)
    console.log(f_data.getAll("amount"))
    console.log(f_data.getAll("code"))
    try {
        const res = await fetch(url_products_put, {
            method: 'POST',
            body: f_data
        });
        const resData = await res.json();
        console.log(resData);
    } catch (error) {
        console.log(error);
    }
}



// async function updateInputs(code) {
//   const categories = await getCategories
//   const categoriesSelected = categories.find(i => i.code === code)

//   if (categoriesSelected) {
//     taxInput.value = categoriesSelected.tax
//     nameInput.value = categoriesSelected.name
//     codeInput.value = categoriesSelected.code
//   }
// }

async function updateTable() {
    let products = await getProducts

    espaco.innerHTML = "";
    products.forEach((product, index) => {
        const span = document.createElement("span");
        span.innerHTML = `
      <h3>${product.code}) ${product.name}</h3>
      <span>quantidade: ${product.amount}</span>
      <button class="buttonDelete" onclick="updateInputs(${product.code})">editar</button> <br/>
      `;
        espaco.appendChild(span);
    });
};

updateTable()