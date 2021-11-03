import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
/* import Pagination from '../../components/Pagination'; */
import { springPage } from '../../types/vendor/springPage';
import { requestBackend } from '../../utils/request';
import * as ReactBootStrap from 'react-bootstrap';
import { sales } from '../../types/sales';
import { Tokendata } from 'utils/auth';

export type AuthData = {
    authenticated: boolean,
    tokenData?: Tokendata;
  }

const DataTable2 = () => {
    const [authData, /*setAuthData*/] = useState<AuthData>({authenticated: false});
    //const [activePage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState<springPage<sales>>();


    useEffect(() => {
        const params: AxiosRequestConfig = {
            url:`/vendas?size=50000`,
            withCredentials: true,
            params: {
                first: true,
                last: true,
                number: 0,
                totalElements: 0,
                totalPages: 0,
            },
        };

        requestBackend(params).then((response) => {
            setPage(response.data);
            setLoading(true);
        })
    }, []);

/*     const changePage = (index: number) => {
        setActivePage(index);
    } */

    return (
        <>
            {loading ? (
                <div className='table-responsive'>
                    {/* <Pagination page={page} onPageChange={changePage} /> */}
                    {authData.tokenData?.user_name}
                    <table className='table table-striped table-sm table-hover'>
                        <thead className='tfoot'>
                            <tr className='border-primary'>
                                <th className=''>FAMILIA</th>
                                <th></th>
                                <th>META</th>
                                <th></th>
                                <th> VDA REAL.</th>
                                <th></th>
                                <th>ANO ANT.</th>
                                <th></th>
                            </tr>
                            <tr className='border-primary'>
                                <th>Tipo</th>
                                <th>Embalagem</th>
                                <th>Qtde</th>
                                <th>Fat</th>
                                <th>Qtde</th>
                                <th>Fat</th>
                                <th>Qtde</th>
                                <th>Fat</th>
                            </tr>
                            <tr className='border-primary'>
                            </tr>
                        </thead>
                        <tbody>
                            {page?.content.map(item => 
                                <tr key={item.id}>
                                <td>{item.tipo_bebida}</td>
                                <td>{item.familia}</td>
                                <td>{item.qtde_venda}</td>
                                <td>{item.vlr_venda.toFixed(2)}</td>
                                <td>{item.qtde_venda}</td>
                                <td>{item.vlr_venda.toFixed(2)}</td>
                                <td>{item.qtde_venda}</td>
                                <td>{item.vlr_venda.toFixed(2)}</td>
                            </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            ) : (
                <div className='display-flex '>

                    <ReactBootStrap.Spinner className='spinner' animation='border' variant='warning' role='status ml'>
                        <span className='visually-hidden'>Loading...</span>
                    </ReactBootStrap.Spinner>
                </div>
            )}
            {/* <Pagination page={page} onPageChange={changePage} /> */}
        </>
    );
};

export default DataTable2;