import { BrowserRouter } from "react-router-dom";
import{
  About,
  Contact,
  Experience,
  Works,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
  Feedbacks
} from './components';

const App = () => {
  return (
    /* SPA routing context provider begins */
    <BrowserRouter>
        {/* page container */}
      <div className="relative z-0 bg-primary">        
        {/*  page header  */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>                              {/*         routing table          */}
        {/*  page body  */}                 {/**********************************/}
        <About />                           {/* <SPA_BASE_URL> + /about        */}
        <Experience />                      {/* <SPA_BASE_URL> + /experience   */}
        <Tech />                            {/* <SPA_BASE_URL> + /tech         */}
        <Works />                           {/* <SPA_BASE_URL> + /projects     */}
        <Feedbacks />                       {/* <SPA_BASE_URL> + /testimonials */}
                                            {/*                                */}
        {/* ext. page body */}              {/*                                */}
        <div className="relative z-0">      {/*                                */}
        {/* contact form */}                {/*                                */}
          <Contact />                       {/* <SPA_BASE_URL> + /contact      */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    /* SPA routing context provider ends */
  )
}
export default App