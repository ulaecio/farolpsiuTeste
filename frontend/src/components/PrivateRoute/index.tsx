import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated, isAllowedByRole, Role } from '../../utils/auth';

type Props = {
    children: React.ReactNode;
    path: string;
    allowedRoutes?: Role[];

}

//VERIFICA SE USUÁRIO ESTÁ ATENTICADO CASO NÃO RETORNA PARA LOGIN.
const PrivateRoute = ({ children, path, allowedRoutes }: Props) => {
    return (
        <Route
            path={path}
            render={({ location }) => {
                if (!isAuthenticated()) {
                    return (
                        <Redirect to={{
                                pathname: '/auth/login',
                                state: { from: location }
                            }}
                        />
                    )
                } else if (isAuthenticated() && !isAllowedByRole(allowedRoutes)) {
                    return (
                        <Redirect to={{ pathname: '/rota'}}
                        />
                    )
                }
                return children;
            }}
        />
    )
}

export default PrivateRoute;