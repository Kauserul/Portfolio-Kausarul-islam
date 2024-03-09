import logo from './logo.svg';
import './App.css';
import HomeBannar from './Pages/HomeBannar/HomeBannar';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import ServiceProvide from './Pages/ServiceProvide/ServiceProvide';
import Experience from './Pages/Experience/Experience';
import MySkills from './Pages/MySkills/MySkills';
import Footer from './Pages/Footer/Footer';

function App() {
    return (
        <div className='bg-[#252b33] text-white'>
            <HomeBannar></HomeBannar>
            <About></About>
            <Projects></Projects>
            <ServiceProvide></ServiceProvide>
            <Experience></Experience>
            <MySkills></MySkills>
            <Footer></Footer>
        </div>
    );
}

export default App;
