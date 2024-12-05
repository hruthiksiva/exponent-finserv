import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './components/404Error';
import MainLayout from './layouts/MainLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={< HomePage />}/>
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Route>

));

const App = () => {
  // return <RouterProvider router = {router} />;
  return (
    <div>
      <div>Hello</div>
    </div>
  )
};


export default App;