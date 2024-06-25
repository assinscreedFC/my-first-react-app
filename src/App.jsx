import { createContext, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx';
import Cv from './components/Cv.jsx'
import Footer from './components/Footer.jsx';
 const Them=createContext([{
  fullName:"anis",
  email:"proute",
  phone:"000",
  adresse:"tunis"
}]);
const ContextEducation=createContext([{
  nameS:"anis",
  Degree:"anis",
  Start:"anis",
  End:"anis",
  adresse:"anis"
}]);
const ContextPro=createContext([{
  nameS:"anis",
  Position:"anis",
  Degree:"anis",
  Start:"anis",
  End:"anis",
  adresse:"anis"
}])
function App() {
  const [them,setthem]=useState([{
    fullName:"anis",
    email:"proute",
    phone:"000",
    adresse:"tunis"
  }]);
  const [education,seteducation]=useState([]);
const [pro,setpro]=useState([])

  return (
    <>
    <div className=' max-w-full bg-custom-gradient min-h-svh w-full px-4  flex flex-col  justify-start items-center overflow-x-hidden'>   
   
<Them.Provider value={{them,setthem}}>
  <ContextEducation.Provider value={{education,seteducation}}>
    <ContextPro.Provider value={{pro,setpro}}>
      <Navbar/>
       <Cv  />
    </ContextPro.Provider>
  </ContextEducation.Provider>
</Them.Provider>
<Footer/>
    
       </div>

    </>
  )
}

export {App,Them,ContextEducation,ContextPro}
