import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { Navbar, Footer, NewComponent } from '../components';
import '../styles/globals.css';

import { NFTProvider } from '../context/NFTContext';

const MyApp = ({ Component, pageProps }) => (

  <NFTProvider>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen flex justify-center">
        <Navbar />

        <div className="pt-65">

          <Component {...pageProps} />

          <Footer />
        </div>

      </div>

      <Script src="https://kit.fontawesome.com/39505310bd.js" crossOrigin="anonymous" />
    </ThemeProvider>
  </NFTProvider>

);

export default MyApp;
