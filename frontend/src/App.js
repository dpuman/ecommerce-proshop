
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import CartScreen from './components/CartScreen/CartScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductScreen from './components/ProductScreen/ProductScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import RegisterScreen from './components/RegisterScreen/RegisterScreen';
import ProfileScreen from './components/ProfileScreen/ProfileScreen';
import ShippingScreen from './components/ShippingScreen/ShippingScreen';
import PaymentScreen from './components/PaymentScreen/PaymentScreen';
import PlaceOrderScreen from './components/PlaceOrderScreen/PlaceOrderScreen';
import OrderScreen from './components/OrderScreen/OrderScreen';
import UserListScreen from './components/UserListScreen/UserListScreen';
import UserEditScreen from './components/UserEditScreen/UserEditScreen';

function App() {
  return (
    <BrowserRouter >
      <Header></Header>
      <main>
        <Container className='py-3'>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login/" element={<LoginScreen></LoginScreen>}></Route>
            <Route path="/register/" element={<RegisterScreen></RegisterScreen>}></Route>
            <Route path="/profile/" element={<ProfileScreen></ProfileScreen>}></Route>
            <Route path="login/shipping/" element={<ShippingScreen></ShippingScreen>}></Route>
            <Route path="/placeorder/" element={<PlaceOrderScreen></PlaceOrderScreen>}></Route>
            <Route path="/order/:id" element={<OrderScreen></OrderScreen>}></Route>
            <Route path="/payment/" element={<PaymentScreen></PaymentScreen>}></Route>
            <Route path="/product/:id" element={<ProductScreen></ProductScreen>} />
            <Route path="/cart">
              <Route index element={<CartScreen></CartScreen>}></Route>
              <Route path=":id" element={<CartScreen></CartScreen>}></Route>

            </Route>
            <Route path="/admin/userlist" element={<UserListScreen></UserListScreen>}></Route>
            <Route path="/admin/user/:id/edit" element={<UserEditScreen></UserEditScreen>}></Route>





            <Route path="*" element={<h1>404 ERROR!</h1>} />

          </Routes>
        </Container>


      </main>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
