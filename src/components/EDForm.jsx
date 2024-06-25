import { useContext, useState } from "react";
import { ContextEducation } from "../App.jsx";
import useLocalStorage from "./LocalStorageHook.js";
function EDForm(params) {
  const { getStoredValue, setStoredValue, removeStoredValue } = useLocalStorage();

    const [on, setOn] = useState(false);
    const { education, seteducation } = useContext(ContextEducation);
    const [formVisible, setFormVisible] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const educationArray = Object.keys(education).map(key => education[key]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const nameS = formData.get("nameS");
        const Degree = formData.get("Degree");
        const Start = formData.get("Start");
        const End = formData.get("End");
        const adresse = formData.get("adresse");

        const newEducation = {
          nameS,
          Degree,
          Start,
          End,
          adresse
        };
        let str =newEducation.nameS;
            str=  str.replace(/\s+/g, '');
        if(str!==""){
          if (editIndex !== null) {
          const updatedEducation = [...educationArray];
          updatedEducation[editIndex] = newEducation;
          setStoredValue(2,updatedEducation);
          seteducation(updatedEducation);
        } else { const lol= [...educationArray, newEducation]
          setStoredValue(2,lol);
          seteducation(lol);
        }
        }
      

        toggleForm();
        setOn(true);
    };

    const handleDelete = () => {
        if (editIndex !== null) {
            const updatedEducation = [...educationArray];
            updatedEducation.splice(editIndex, 1);
            seteducation(updatedEducation);
            toggleForm();
        }
    };

    const toggleForm = () => {
        setFormVisible(!formVisible);
        if (formVisible) {
            setEditIndex(null);
        }
    };

    const loadEducation = (index) => {
        setEditIndex(index);
        toggleForm();
    };

    return (
        <div className={`w-full max-w-lg bg-transparent flex flex-col items-center ${on ? "hidden" : ""}`}>
            {formVisible ? (
                <form onSubmit={handleSubmit} className="flex flex-col justify-center fixed z-10 w-full max-w-lg px-2 bg-slate-900 gap-3 rounded-md py-3 text-slate-200 items-center">
                    <h1 className="text-3xl font-bold mb-4">Education</h1>
                    <div className="flex flex-col gap-1 w-full px-4">
                        <label htmlFor="nameS">Name of school:</label>
                        <input 
                            className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" 
                            type="text" 
                            id="nameS" 
                            name="nameS" 
                            placeholder="Abderahamn mira" 
                            defaultValue={editIndex !== null ? educationArray[editIndex].nameS : ''} 
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full px-4">
                        <label htmlFor="Degree">Degree:</label>
                        <input 
                            className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" 
                            type="text" 
                            name="Degree" 
                            id="Degree" 
                            placeholder="Major" 
                            defaultValue={editIndex !== null ? educationArray[editIndex].Degree : ''} 
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full px-4">
                        <label htmlFor="Start">Start date:</label>
                        <input 
                            className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" 
                            type="text" 
                            id="Start" 
                            name="Start" 
                            placeholder="04/04/2004" 
                            defaultValue={editIndex !== null ? educationArray[editIndex].Start : ''} 
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full px-4">
                        <label htmlFor="End">End date:</label>
                        <input 
                            className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" 
                            type="text" 
                            id="End" 
                            name="End" 
                            placeholder="04/04/2005" 
                            defaultValue={editIndex !== null ? educationArray[editIndex].End : ''} 
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full px-4">
                        <label htmlFor="adresse">Enter your location:</label>
                        <input 
                            className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" 
                            type="text" 
                            name="adresse" 
                            id="adresse" 
                            placeholder="City, Country" 
                            defaultValue={editIndex !== null ? educationArray[editIndex].adresse : ''} 
                        />
                    </div>
                    <div className="flex w-11/12 justify-between items-center text-slate-50">
                       {editIndex!==null ?<button type="button" className="w-fit bg-slate-500" onClick={handleDelete}>Delete</button> : null}
                        <button type="button" className="w-fit bg-slate-500" onClick={toggleForm}>Cancel</button>
                        <button type="submit" className="w-fit bg-slate-500">Save</button>
                    </div>
                </form>
            ) : (
                <div className="flex flex-col justify-center fixed z-10 w-full max-w-sm px-2 bg-slate-900 gap-3 rounded-md py-3 text-slate-200 items-center">
                    <ul className="flex flex-col gap-1 bg-base-200 rounded-box">
                        {educationArray.map((item, index) => (
                            <li key={index} className="cursor-pointer bg-slate-600 p-2 rounded-md flex justify-center items-center" onClick={() => loadEducation(index)}>
                                <a>{item.nameS}</a>
                            </li>
                        ))}
                        <li onClick={toggleForm} className="cursor-pointer bg-slate-600 p-2 rounded-md">
                            <a>+ add new</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default EDForm;
