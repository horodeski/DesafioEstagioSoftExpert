import { createBrowserRouter } from "react-router-dom";
import { Categories, Comprar, Layout, NoPage, ProductsRegister, CategoriesRegister } from "../../pages";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NoPage />,
        children: [
            {
                path: "/",
                element: <Comprar />
            },
            {
                path: "categories",
                element: <Categories />
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