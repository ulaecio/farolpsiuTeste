import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='container py-5'>
        <h2 className='text-primary text-center text-uppercase display-flex mt-3 py-3'>
        Olá TIME!</h2>
          <div className='text-secondary text-center display-flex py-3 text-uppercase'>
            <h5 className=''>
              Seja bem vindo ao FAROL DE VENDAS PSIU!
            </h5>
            <h6 className='text-center text-secondary text-lowercase'>
              Aqui te mostraremos um pouco de resumo da empresa,
              para te ajudar a alavancar nas vendas!</h6>
          </div>

        <div className=' text-center display-flex'>
            <Link to='/auth/dashboard' className='btn home-btn-order'>Vamos começar?</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
