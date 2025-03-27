import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PageNotFound from './components/PageNotFound';
import MainLayout from './layouts/MainLayout';
import ApplicationPage from './pages/ApplicationPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsofUse from './pages/TermsofUse';
import TradeMarkPolicy from './pages/TradeMarkPolicy'
import './styles/global.css'; // Import your CSS file here
import './styles/transition.css';
import ServicesContentPage from './pages/ServicesContentPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='about' element={<AboutPage />} />
      <Route path='service' element={<ServicesPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='application' element={<ApplicationPage />} />
      <Route path='terms-of-use' element={<TermsofUse />} />
      <Route path='trade-mark-policy' element={<TradeMarkPolicy />} />
      <Route path='privacy-policy' element={<PrivacyPolicy />} />

      {/* To optimal this to dynamic links */}
      <Route path='business-loan' element={<ServicesContentPage loanType = 'businessLoan'/>} />
      <Route path='home-loan' element={<ServicesContentPage loanType = 'homeLoan'/>} />
      <Route path='supply-chain' element={<ServicesContentPage loanType = 'supplyChainFinance' />} />
      <Route path='trade-Finance' element={<ServicesContentPage loanType = 'tradeFinance'/>} />
      <Route path='education-loan' element={<ServicesContentPage loanType = 'educationLoan' />} />
      <Route path='commercial-finance' element={<ServicesContentPage loanType = 'commercialFinance' />} />


      <Route path='*' element={<PageNotFound />} />
    </Route>

));

const App = () => {
  return <RouterProvider router={router} />;
};


export default App;
