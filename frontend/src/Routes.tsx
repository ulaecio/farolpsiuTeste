import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import Auth from 'pages/Auth';
import history from 'utils/history';
import Rotas from './pages/Rotas';
import PrivateRoute from './components/PrivateRoute';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {

    //ROTAS DA PÁGINA PRINCIPAL    
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Redirect from='/auth' to='/auth/login' exact />
                <Route path='/auth/login'>
                    <Auth />
                </Route>
                {/*VERIFICA SE USUÁRIO ESTÁ AUTENTICADO*/}
                <Redirect from='/auth**' to='/auth/login' exact />
                {/*ROTA PRIVADA QUE PRECISA DE AUTENTICAÇÃO*/}
                <PrivateRoute path='/dashboard' allowedRoutes={['ROLE_ADMIN']}>
                    <Dashboard />
                </PrivateRoute>
                <PrivateRoute path='/rota' allowedRoutes={['ROLE_OPERATOR']}>
                    <Rotas />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

export default Routes;
