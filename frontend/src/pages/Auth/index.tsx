import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { Route, Switch } from 'react-router';
import Login from './Login';
import './styles.css';

const Auth = () => {
    return (
        <>
        <NavBar />
            <div className='text-center'>
                    <Switch>
                        <Route>
                            <Login />
                        </Route>
                    </Switch>
            </div>
            <Footer />
        </>
    )
}

export default Auth;