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
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Book Now' element={<Booknow/>}></Route>
        <Route path='/Popular Places' element={<Popularplace/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/Logout' element={<Logout/>}></Route>
        <Route path='/Contactus' element={<Contact/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
