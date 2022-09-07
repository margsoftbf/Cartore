import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home/Home';
import { Store } from './pages/Store/Store';
import { Contact } from './pages/Contact/Contact';
import { Navbar } from './components/Navbar/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
	return (
    <ShoppingCartProvider>
    <Navbar />
		<Container className='mb-4'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/store' element={<Store />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</Container>
    </ShoppingCartProvider>
	);
}

export default App;
