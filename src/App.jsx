import { createContext, useState } from 'react'
import useLocalStorage from './components/LocalStorageHook.js';

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
  const { getStoredValue, setStoredValue, removeStoredValue } = useLocalStorage();

  const [them,setthem]=useState(getStoredValue(1));
  const [education,seteducation]=useState(getStoredValue(2));
const [pro,setpro]=useState(getStoredValue(3));

  return (
    <>
    <div id="rot" className='  max-w-full bg-custom-gradient min-h-svh w-full px-4  flex flex-col  justify-start items-center overflow-x-hidden'>   
   
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
