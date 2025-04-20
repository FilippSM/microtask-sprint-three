import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
    children: ReactNode;  
}

export const ProtectedRoute = ({ children }: Props): JSX.Element => {
    const logged = false; // Измените это значение в зависимости от логики аутентификации

    return (
        logged ? <>{children}</> : <Navigate to={'/login'} />
    );
};