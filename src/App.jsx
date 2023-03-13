import './App.css';

import NewCustomer from './components/NewCustomer';
import NewReview from './components/NewReview';
import NewOrders from './components/NewOrders';


function App() {
  
  return (
    <div className="container" >
      <NewOrders/>
      <NewReview/>
      <NewCustomer />
    </div>
  );
}

export default App;
