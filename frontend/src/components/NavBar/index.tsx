import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated, Tokendata } from 'utils/auth';
import { removeAuthData} from 'utils/storage';
import React, { useEffect, useState } from 'react';
import history from './../../utils/history';
import './styles.css'

type AuthData = {
  authenticated: boolean,
  tokenData?: Tokendata
}

const NavBar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData()
      });

    }
    else {
      setAuthData({
        authenticated: false
      });
    }
  }, [])

  const logout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false
    });
    history.replace('/auth/login')
  }

  return (
    <nav className='nav main-nav bg-light shadow-sm flex-md-row align-items-center p-0 py-3'>
      <div className='container col-9 ' >
        <div className='logo'>
          <img src='https://github.com/ulaecio/dash-vendas/blob/main/frontend/src/assets/img/logo64px.png?raw=true'
            width='45rem' height='45rem' alt={''}
          />
        </div>
        <Link to='/' className='logo-text' >
          Farol de vendas
        </Link>
      </div>
      <div className='login col-3 container text-secondary'>
        {/* CONDIÇÃO DE LOGIN E LOGOUT */}
        <span className='nav-username'>{authData.tokenData?.user_name}</span>
        {authData.authenticated ? (
          <a
            href='#logout'
            className='a'
            onClick={logout}
          >
            {'-'}Logout
          </a>
        ) : (
          <Link
            to='/auth/login'
            className='a'
          >
            Login
          </Link>
        )}
        {/* CONDIÇÃO DE LOGIN E LOGOUT */}
      </div>
    </nav>
  );
};

export default NavBar;