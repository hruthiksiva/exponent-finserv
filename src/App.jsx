import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PageNotFound from './components/PageNotFound';
import MainLayout from './layouts/MainLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='about' element={<AboutPage />} />
      <Route path='services' element={<ServicesPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>

));

const App = () => {
  return <RouterProvider router={router} />;
};


export default App;
