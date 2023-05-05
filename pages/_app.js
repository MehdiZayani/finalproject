import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import store from '../redux/store';
import '../styles/globals.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Head>
        <title>Lucci</title>
        <meta name="description" content="Lucci Design" />
        <link rel="icon" href="https://i.ibb.co/LYPkw62/lucci.jpg" />
      </Head>
      </div>

    </Provider>
    
  );
}

export default MyApp;
