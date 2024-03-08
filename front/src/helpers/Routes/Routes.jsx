import { createBrowserRouter } from "react-router-dom";
import { Categories, Comprar, Dashboard, Layout, NoPage, ProductsRegister, CategoriesRegister } from "../../pages";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NoPage />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "categories",
                element: <Categories />
            },
            {
                path: "comprar",
                element: <Comprar />
            },
            {
                path: "register/products",
                element: <ProductsRegister />
            },
            {
                path: "register/categories",
                element: <CategoriesRegister />
            },
        ]
    }
])

export default routes