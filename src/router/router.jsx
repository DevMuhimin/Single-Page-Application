import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Counter from "../pages/Counter";
import Team from "../pages/Team";
import About from "../pages/About";
import Blog from '../pages/Blog';
import NotFound from "../pages/404";
import SingleBlog from "../pages/SingleBlog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/team",
        element: <Team/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/blog",
        element: <Blog/>
    },
    {
        path: "/blog/:slug",
        element: <SingleBlog/>
    },
    {
        path: "/counter",
        element: <Counter/>
    },
    {
        path:"*",
        element: <NotFound/>
    }
])
//create react router

export default router;