const optionsSideBar = [
    {
        name: "Dashboard",
        path: "dashboard",
        icon: "ph ph-chart-pie-slice"
    },
    {
        name: "Comprar",
        path: "comprar",
        icon: "ph ph-shopping-bag"
    },
    {
        name: "Relatórios",
        icon: "ph ph-table",
        options: [
            {
                name: "Produtos",
                path: "produtos",
            },
            {
                name: "Categories",
                path: "compras",
            }
        ]
    },
    {
        name: "Histórico",
        path: "historico",
        icon: "ph ph-books"
    }
]

export default optionsSideBar