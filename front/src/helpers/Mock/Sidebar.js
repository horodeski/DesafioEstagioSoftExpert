const optionsSideBar = [
    {
        name: "Comprar",
        path: "",
        icon: "ph ph-shopping-bag"
    },
    {
        name: "Histórico",
        path: "historico",
        icon: "ph ph-books"
    }
]

const dropdownOptions = [
    {
        name: "Cadastros",
        icon: "ph ph-table",
        options: [
            {
                name: "Produtos",
                path: "register/products",
            },
            {
                name: "Categories",
                path: "register/categories",
            }
        ]
    },
]

export {optionsSideBar, dropdownOptions}