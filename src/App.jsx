import { createContext, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx';
import Cv from './components/Cv.jsx'
 const Them=createContext({
  fullName:"anis",
  email:"proute",
  phone:"000",
  adresse:"tunis"
});
const ContextEducation=createContext([{
  nameS:"anis",
  Degree:"anis",
  Start:"anis",
  End:"anis",
  adresse:"anis"
}])
function App() {
  const [them,setthem]=useState(Them);
  const [education,seteducation]=useState([{
    nameS:"anis",
    Degree:"anis",
    Start:"anis",
    End:"anis",
    adresse:"anis"
}]);

  return (
    <>
    <div className=' max-w-full bg-black h-full w-full px-4  flex flex-col  justify-center items-center overflow-hidden min-h-svh'>   
   
<Them.Provider value={{them,setthem}}>
  <ContextEducation.Provider value={{education,seteducation}}>

      <Navbar/>
       <Cv  />
  </ContextEducation.Provider>
</Them.Provider>
    
       </div>

    </>
  )
}

export {App,Them,ContextEducation}
