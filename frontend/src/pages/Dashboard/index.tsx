import BarChartSetor from '../../components/BarChatSetor';
import BarChartSetorFamilia from '../../components/BarChatSetorFamilia';
import DataTable2 from 'components/DataTable2';
import DonutChart from 'components/DonutChart';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import BarChartRota from 'components/BarChatRota';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className='text-secondary py-3'>Resumo setores</h1>
        <div className='row px-3'>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Familia/Volume</h5>
            <BarChartSetorFamilia />
          </div>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Familia/Faturado</h5>
            <BarChartRota />
          </div>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Vendas por setor</h5>
            <DonutChart />
          </div>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>Faturado mês atual</h5>
            <BarChartSetor />
          </div>
        </div>
        <div className='py-3'>
          <h2 className='text-secondary'>
            Resumo Setor
          </h2>
        </div>
          <h2>
        <DataTable2 />
          </h2>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
