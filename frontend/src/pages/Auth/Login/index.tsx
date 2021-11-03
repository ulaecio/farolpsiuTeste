import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import {requestBackendLogin } from 'utils/request';
import { /*getAuthData,*/ saveAuthData } from 'utils/storage';
import ButtonIcon from '../../../components/ButtonIcon';
import './styles.css';

type FormData = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {
    const [hasError, setHasError] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const history = useHistory();

    let location = useLocation<LocationState>();

    const {from} = location.state || {from: { pathname: '/dashboard'}};

    const onSubmit = (formData: FormData) => {
        requestBackendLogin(formData)
            .then(response => {
                saveAuthData(response.data)
                // const tokenData = getAuthData(),
                setHasError(false);
               // console.log('SUCESSO', response);
                history.replace(from);
            })
            .catch(error => {
                setHasError(true)
                //console.log('ERRO', error);
            });
    };
    return (
        <div className='base-card text-center align-items-center'>

            <h1 className='text-primary text-center display-flex'>
                Login</h1>
            {hasError && (
                < div className='alert alert-danger mb-2'>
                    Usuário ou senha inválido!
                </div>
            )
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <input
                        {...register('username', {
                            required: '*Campo obrigatório'
                        })}
                        type='text'
                        className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
                        placeholder='usuário'
                        name='username'
                    />
                    <div className='invalid-feedback d-block'>{errors.username?.message}</div>
                </div>
                <div className='mb-2'>
                    <input
                        {...register('password', {
                            required: '*Campo obrigatório'
                        })}
                        type='password'
                        className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                        placeholder='senha'
                        name='password'
                    />
                    <div className='invalid-feedback d-block'>{errors.password?.message}</div>
                    <div>
                        <link>
                        </link>
                        <div className='login-submit'>
                            <ButtonIcon text='Fazer login' />
                            <span className='not-registered'>Não tem cadastro?</span>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Login;