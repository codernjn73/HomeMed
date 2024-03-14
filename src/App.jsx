import Header from './components/header/Header'
import './App.css'
import Footer from './components/footer/Footer'
import ContactUs from './components/contact-us/ContactUs'
import AboutUs from './components/about-us/AboutUs'
import SearchBar from './components/search-bar/SearchBar'
import ModalPopUpTest from './components/modal-popup/ModalPopUpTest'
import Modal from './components/modal-popup/Modal'
import SignUp from './components/signup/SignUp'

function App() {

  return (
    <>
      <Header/>
      <SearchBar/>
      <SignUp/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
