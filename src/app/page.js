import RootLayout from './layout.js'; 
import './globals.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/slick-carousel/slick/slick.css'
import './rra.js'
import { counters } from './rra';
import Header from './Header/header';
import Footer from './Footer/footer';
import Main from './Main/main.jsx';
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
  return (
    <RootLayout>
      <div>
        {/* Your page content goes here */}
        <Header/>
        {/* header section ends here */}
        <Main/>
        <Footer/>
        {/* footer section ends */}
      </div>
    </RootLayout>
  );
}
