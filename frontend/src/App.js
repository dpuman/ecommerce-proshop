
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductScreen from './components/ProductScreen/ProductScreen';

function App() {
  return (
    <BrowserRouter >
      <Header></Header>
      <main>
        <Container className='py-3'>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen></ProductScreen>} />
            <Route path="*" element={<h1>404 ERROR!</h1>} />

          </Routes>
        </Container>


      </main>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
