import {createBrowserRouter} from "react-router-dom";
import ProtectedRoute from "./routes/protectedRoute.jsx";
import ProtectedPage from "./routes/protected-page.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        error: "/error-page",
        async lazy() {
            let Root = await import("./routes/root.jsx");
            return { Component: Root.default };
        },
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
        async lazy() {
            let LoginPage = await import("./routes/login-page.jsx");
            return { Component: LoginPage.default };
        },
    },
    {
        path: "/signup",
        async lazy() {
            let RegisterPage = await import("./routes/registerPage.jsx");
            return { Component: RegisterPage.default };
        },
    }
]);