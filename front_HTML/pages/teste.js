const espaco = document.getElementById('espaco');
const form = document.querySelectorAll('form');
const url_categories_get = "http://localhost/routers/categories.php?op=GET"
const url_categories_put = "http://localhost/routers/categories.php?op=PUT"
console.log(url_categories_get);

const nameInput = document.getElementById("name")
const taxInput = document.getElementById("tax")
const codeInput = document.getElementById("code")

const getCategories = fetch(url_categories_get).then((res) => { return res.json(); });

console.log(getCategories);

async function getCategoriesaaaaaaaa() {
  const aaaa = await getCategories
  console.log(aaaa);
}

getCategoriesaaaaaaaa()



// form.addEventListener('submit', async event => {
//   event.preventDefault();

//   const data = new FormData(form);

//   try {
//     const res = await fetch(
//       'http://localhost/routers/categories.php?op=POST',
//       {
//         method: 'POST',
//         body: data,
//       },
//     );

//     const resData = await res.json();
//     console.log(resData);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

function objectToFormData(obj) {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
      formData.append(key, value);
  });

  return formData;
}

async function updateCategory() {

  const data  = {
    code: codeInput.value,
    tax : taxInput.value,
    name : nameInput.value,
  }
  const f_data =  objectToFormData(data)
  try {
    const res = await fetch(url_categories_put, {
      method: 'POST',
      body: f_data
    });
    const resData = await res.json();
    console.log(resData);
  } catch (error) {
    console.log(error);
  }
}



async function updateInputs(code) {
  const categories = await getCategories
  const categoriesSelected = categories.find(i => i.code === code)
  
  if (categoriesSelected) {
    taxInput.value = categoriesSelected.tax
    nameInput.value = categoriesSelected.name
    codeInput.value = categoriesSelected.code
  }
}

const saveCategories = () => {
  if (isValidFields()) {

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

async function updateTable() {
  let categories = await getCategories

  espaco.innerHTML = "";
  categories.forEach((category, index) => {
    const span = document.createElement("span");
    span.innerHTML = `
      <span>${category.code}</span>
      <span>${category.name}</span>
      <span>${category.tax}%</span>
      <button class="buttonDelete" onclick="updateInputs(${category.code})">editar</button> <br/>
      `;
    espaco.appendChild(span);
  });
};

updateTable()