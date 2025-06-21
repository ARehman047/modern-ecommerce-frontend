import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { AllRoutes } from './routes/AllRoutes';
import { Footer } from './components/footer/Footer'


function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
