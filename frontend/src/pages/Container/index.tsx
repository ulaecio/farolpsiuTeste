import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Container = () => {
  return (
<BrowserRouter>
<Switch>
  <Route >
      <div className='container'>
        <h1 className='text-secondary py-3'>Dashboard</h1>         
      </div>
  </Route>
</Switch>
</BrowserRouter>
  );
};

export default Container;
