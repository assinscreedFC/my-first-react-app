import Form from "./Form.jsx";
import EDForm from "./EDForm.jsx";
import PEForm from "./PEForm.jsx";
import { useContext, useState } from "react";
import { Them } from "../App.jsx";

function Navbar(params) {
  const THem = useContext(Them);
  const [on, setOn] = useState(false);
  const [education, setEducation] = useState(false);
  const [prof, setProf] = useState(false);

  const handleSetOn = () => {
    setOn(!on);
    if (!on) {
      setEducation(false);
      setProf(false);
    }
  };

  const handleSetEducation = () => {
    setEducation(!education);
    if (!education) {
      setOn(false);
      setProf(false);
    }
  };

  const handleSetProf = () => {
    setProf(!prof);
    if (!prof) {
      setOn(false);
      setEducation(false);
    }
  };

  return (
    <>
      <div className="w-full h-20 py-2 flex flex-col gap-3 justify-center items-center">
        <div className="flex bg-white w-fit px-1.25 py-1.25 shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out">
          <div className="dark:shadow-buttons-box-dark rounded-2xl w-full px-1.5 py-1.5 md:px-3 md:py-3 cursor-pointer ">
            <a
              className={`text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed  hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0 group ${
                on ? "bg-light-primary" : ""
              }`}
              title="Set profil"
              onClick={handleSetOn}
            >
              Profil
            </a>
            <a
              className={`text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed  hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0 ${
                education ? "bg-light-primary" : ""
              }`}
              title="Set Education"
              onClick={handleSetEducation}
            >
              Education
            </a>
            <a
              className={`text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed  hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0 ${
                prof ? "bg-light-primary" : ""
              }`}
              title="Set Experience"
              onClick={handleSetProf}
            >
              Experience
            </a>
          </div>
        </div>{on && <Form />}{education && <EDForm />}
      </div>
{prof && <PEForm />}
      
      
      
    </>
  );
}

export default Navbar;
