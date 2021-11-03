import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import BarChartRotaFamilia from '../../components/BarChatRotaFamilia';
import BarChartRota from '../../components/BarChatRota';
import DonutChart2 from 'components/DonutChart2';
import { getTokenData, isAuthenticated, Tokendata } from 'utils/auth';
import { useEffect, useState } from 'react';
import DonutChart3 from 'components/DonutChart3';
import axios from 'axios';
import { BASE_URL } from 'utils/request';
import { getAuthData } from 'utils/storage';
import { VendaTotalPorRota } from 'types/sales';

type AuthData = {
  authenticated: boolean,
  tokenData?: Tokendata
}

const Rotas = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });
  const [venda, setVenda] = useState<VendaTotalPorRota>();

  useEffect(() => {
    axios.get(`${BASE_URL}/vendas/total-vendas-rota?rota=${authData.tokenData?.user_name}`,
     { headers: { Authorization: "Bearer " + getAuthData().access_token } })
      .then((response) => {
        if (isAuthenticated())  {
          setAuthData({
            authenticated: true,
            tokenData: getTokenData()
          });
          setVenda(response.data[0])
        }
        else {
          setAuthData({
            authenticated: false
          });
        };
      });
  }, []);
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className='text-secondary py-3 border-bottom'>Resumo da rota <span className='text-primary'>{authData.tokenData?.user_name}</span></h1>
        <div className='row px-3'>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Volume por Familia</h5>
            <BarChartRotaFamilia />
          </div>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Faturado por Familia</h5>
            <BarChartRota />
          </div>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Volume por embalagem</h5>
            <DonutChart2 />
          </div>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Faturado por embalagem</h5>
            <DonutChart3 />
          </div>
          {venda?.totalvenda}
        </div>
        {/*///////////////////CONTAINER RESUMO DE VALORES/////////////*/}
        <div className='px-3 py-3 m-3'>
          <div className='container text-primary text-center'>
            {/*////////////////////TOTAL VENDAS//////////////////////*/}
            <div className='border-top px-3 py-3 m-3'>
              <div className="m-3 text-secondary mt-3">
                <h2 className=" text-primary">Total de vendas</h2>
                <p><strong>Nota:</strong> Os numeros aqui mostrados são referentes ao mês atual do ano corrente.</p>
                <h3>{"R$ "}{venda?.totalvenda} </h3>
              </div>
            </div>
            {/*/////////////////////////////METAS//////////////////////*/}
            <div className="border-top m-3 ">
              <div className="m-3 text-secondary mt-3">
                <h2 className=" text-primary">Metas</h2>
                <div id="accordion">

                  <div className="">
                    <div className="">
                      <a className="collapsed btn btn-primary" data-bs-toggle="collapse" href="#collapseThree">
                        Refrigerantes por embalagem
                      </a>
                    </div>
                    <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                      <div className="card-body d-md-flex justify-content-center">
                        {/*CONTEUDO DE REFRIGENRANTES*/}
                        <div className="card-body">
                          <div className="dropdown m-1">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                              4 - PET 2000ML
                            </button>
                            <ul className="dropdown-menu">
                              <li><span className="dropdown-item-text">Mensal <h5>{"R$ "}{"57.255,78 "}</h5></span></li>
                              <li><span className="dropdown-item-text">Diária <h5>{"R$ "}{"17.428,30 "}</h5></span></li>
                              <li><span className="dropdown-item-text">Realizado <h5>{"R$ "}{"3.574,80 "}</h5></span></li>
                            </ul>
                          </div>
                          <div className="dropdown m-1">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                              5 - PET 500ML
                            </button>
                            <ul className="dropdown-menu">
                              <li><span className="dropdown-item-text">Mensal <h5>{"R$ "}{"3.212,65 "}</h5></span></li>
                              <li><span className="dropdown-item-text">Diária <h5>{"R$ "}{"2.257,46 "}</h5></span></li>
                              <li><span className="dropdown-item-text">Realizado <h5>{"R$ "}{"955,18 "}</h5></span></li>
                            </ul>
                          </div>
                          <div className="dropdown m-1">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                              1 - PET 250ML
                            </button>
                            <ul className="dropdown-menu">
                              <li><span className="dropdown-item-text">Mensal <h5>{"R$ "}{"24.740,77 "}</h5></span></li>
                              <li><span className="dropdown-item-text">Diária <h5>{"R$ "}{"1.103,52 "}</h5></span></li>
                              <li><span className="dropdown-item-text">Realizado <h5>{"R$ "}{"23.637,25 "}</h5></span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*CONTEUDO DE OUTROS PRODUTOS*/}
              <div className="d-md-flex justify-content-center ">

                <div className="dropdown m-1">
                  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    Água
                  </button>
                  <ul className="dropdown-menu">
                    <li><span className="dropdown-item-text">Mensal <h5>{"R$ "}{"3.733,51"}</h5></span></li>
                    <li><span className="dropdown-item-text">Diária <h5>{"R$ "}{"158,71"}</h5></span></li>
                    <li><span className="dropdown-item-text">Realizado <h5>{"R$ "}{"4.637,24 "}</h5></span></li>
                  </ul>
                </div>

                <div className="dropdown m-1">
                  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    Sucos
                  </button>
                  <ul className="dropdown-menu">
                    <li><span className="dropdown-item-text">Mensal <h5>{"R$ "}{"3.733,51"}</h5></span></li>
                    <li><span className="dropdown-item-text">Diária <h5>{"R$ "}{"158,71"}</h5></span></li>
                    <li><span className="dropdown-item-text">Realizado <h5>{"R$ "}{"3.574,80 "}</h5></span></li>
                  </ul>
                </div>

                <div className="dropdown m-1">
                  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    Chiamuleira
                  </button>
                  <ul className="dropdown-menu">
                    <li><span className="dropdown-item-text">Mensal <h5>{" R$ 3.733,51"}</h5></span></li>
                    <li><span className="dropdown-item-text">Diária <h5>{" R$ 158,71"}</h5></span></li>
                    <li><span className="dropdown-item-text">Realizado <h5>{"R$ "}{"3.574,80 "}</h5></span></li>
                  </ul>
                </div>

                <div className="dropdown m-1">
                  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    Energético
                  </button>
                  <ul className="dropdown-menu">
                    <li><span className="dropdown-item-text">Mensal <h5>{"R$ "}{"1.314,28 "}</h5></span></li>
                    <li><span className="dropdown-item-text">Diária <h5>{"R$ "}{"921,35 "}</h5></span></li>
                    <li><span className="dropdown-item-text">Realizado <h5>{"R$ "}{"3.574,80 "}</h5></span></li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </div>
        {/* <DataTable3 />*/}
      </div>
      <Footer />
    </>
  );
};
export default Rotas;

