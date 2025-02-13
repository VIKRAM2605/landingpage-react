import {Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/Aboutus';
import Contact from './components/pages/Contact';
import Navigation  from './components/Navigation/Navigate';
import Popularplace from './components/pages/Popularplace';
import Booknow from './components/pages/Booknow';
import Signin from './components/pages/Signin';
import Logout from './components/pages/Logout';
import "./styles/App.css"
function App() {
 

  return (
    <>
    <div className="mainpage">
    <Navigation></Navigation>
      <Routes>
        <Route path='/landingpage-react/' element={<Home/>}></Route>
        <Route path='/landingpage-react/Book Now' element={<Booknow/>}></Route>
        <Route path='/landingpage-react/Popular Places' element={<Popularplace/>}></Route>
        <Route path='/landingpage-react/Signin' element={<Signin/>}></Route>
        <Route path='/landingpage-react/Logout' element={<Logout/>}></Route>
        <Route path='/landingpage-react/Contactus' element={<Contact/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
