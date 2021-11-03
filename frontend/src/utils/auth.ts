import { getAuthData } from './storage';
import jwtDecode from 'jwt-decode';

export type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';

export type AuthData = {
    authenticated: boolean,
    tokenData?: Tokendata;
  }

export type Tokendata = {
    exp: number,
    user_name: string,
    authorities: Role[]
}

//DECODIFICA O TOKEN DE ACESSO PARA VERIFICAÇÃO DE VALIDADE
export const getTokenData = (): Tokendata | undefined => {
    try {
        return jwtDecode(getAuthData().access_token) as Tokendata;
    } catch (error) {
        return undefined;
    }
};


export const isAuthenticated = (): boolean => {
    const tokendata = getTokenData();

    return (tokendata && tokendata.exp * 1000 > Date.now()) ? true : false;
}

//VERIFICA SE USUÁRIO TEM PERMISSÃO DE ACESSO À ROTA
export const isAllowedByRole = (routeRoles: Role[] = []) => {
    if (routeRoles.length === 0) {
        return true;
    }
    //VERIFICA SE EXISTE PELO MEMOS UMA PERMISSÃO DE ACESSO À ROTA ATUAL
    const tokenData = getTokenData();
    return routeRoles.some(role => tokenData?.authorities.includes(role));
}