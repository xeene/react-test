import {createBrowserRouter} from "react-router-dom";
import RootPage from "./routes/root.jsx";
import ProtectedPage from "./routes/protected-page.jsx";
import ProtectedRoute from "./routes/protectedRoute.jsx";
import LoginPage from "./routes/login-page.jsx";
import RegisterPage from "./routes/registerPage.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage/>,        
        error: "/error-page"
    },
    {
        path: "/protected",
        element: (
            <ProtectedRoute>
                <ProtectedPage/>
            </ProtectedRoute>
        )
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/signup",
        element: <RegisterPage/>
    }

]);