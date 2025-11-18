import Navbar from '../components/Navbar';
import '../assets/styles/globals.css';  // Use relative path for testing
import Footer from '../components/Footer';
import {GlobalProvider} from '../Context/GlobalContext'
import AuthProvider from '../components/AuthProvider';  // Corrected AuthProvider import
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import 'photoswipe/dist/photoswipe.css'

 

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental , property , real estate',
  description: 'Find the perfect rental property',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer/>
        </body>
      </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
