import { createBrowserRouter } from "react-router-dom";
import { Categories, Comprar, Dashboard, Layout, NoPage } from "../../Pages";

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
        ]
    }
])

export default routes