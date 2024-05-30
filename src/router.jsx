import {createBrowserRouter} from "react-router-dom";
import RootPage from "./routes/root.jsx";
import ProtectedPage from "./routes/protected-page.jsx";
import ProtectedRoute from "./routes/protectedRoute.jsx";
import LoginPage from "./routes/login-page.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage/>,
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
    }
]);