import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../../../types/user';
import { springPage } from 'types/vendor/springPage';
import { requestBackend } from '../../../utils/request';

const Users = () => {
    const [page, setPage] = useState<springPage<User>>();

    useEffect(() => {
        const params : AxiosRequestConfig = {
            url: '/users',
            withCredentials: true,
            params: {
                page: 0,
                size: 12,
            },
        };
        requestBackend(params).then((response) => {
            setPage(response.data);
        });
    }, []);

    return (
        <div>
            {page?.content.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </div>
    );
};

export default Users;