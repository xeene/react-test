import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';
import { authStore } from '../store/authStore';

const ProtectedRoute = observer(({ children }) => {
    return authStore.isAuthenticated() ? children : <Navigate to="/login" />;
});

export default ProtectedRoute;