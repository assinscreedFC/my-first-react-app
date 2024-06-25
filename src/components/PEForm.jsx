import { useContext, useState } from "react";
import { ContextPro } from "../App.jsx";
import useLocalStorage from "./LocalStorageHook.js";

function PEForm() {
  const {setStoredValue}=useLocalStorage();
  const [on, setOn] = useState(false);
  const { pro, setpro } = useContext(ContextPro);
  const [formVisible, setFormVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const proArray = Object.keys(pro).map(key => pro[key]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const nameS = formData.get("nameS");
    const Position = formData.get("Position");
    const Degree = formData.get("Degree");
    const Start = formData.get("Start");
    const End = formData.get("End");
    const adresse = formData.get("adresse");

    const newPro = {
      nameS,
      Position,
      Degree,
      Start,
      End,
      adresse
    };
    let str =newPro.nameS;
    str=  str.replace(/\s+/g, '');
    if(str!==""){
       if (editIndex !== null) {
      const updatedPro = [...proArray];
      updatedPro[editIndex] = newPro;
      setStoredValue(3,updatedPro);
      setpro(updatedPro);
    } else {
      const lol=[...proArray, newPro];
      setStoredValue(3,lol);
      setpro(lol);
    }
    }

   
    
    toggleForm();
    setOn(true);
  };

  const handleDelete = () => {
    if (editIndex !== null) {
      const updatedPro = [...proArray];
      updatedPro.splice(editIndex, 1);
      setpro(updatedPro);
      toggleForm();
    }
  };

  const toggleForm = () => {
    setFormVisible(!formVisible);
    if (formVisible) {
      setEditIndex(null);
    }
  };

  const loadPro = (index) => {
    setEditIndex(index);
    toggleForm();
  };

  return (
    <div className={`w-full max-w-lg bg-transparent flex flex-col items-center ${on ? "hidden" : ""}`}>
      {formVisible ? (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center sticky z-10 w-full max-w-lg px-2 bg-slate-900 gap-3 rounded-md py-3 text-slate-200 items-center">
          <h1 className="text-3xl font-bold mb-4">Professional Experience</h1>
          <div className="flex flex-col gap-1 w-full px-4">
            <label htmlFor="nameS">Name of school:</label>
            <input
              className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm"
              type="text"
              id="nameS"
              name="nameS"
              placeholder="Abderahamn mira"
              defaultValue={editIndex !== null ? proArray[editIndex].nameS : ''}
            />
          </div>
          <div className="flex flex-col gap-1 w-full px-4">
            <label htmlFor="Position">Position:</label>
            <input
              className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm"
              type="text"
              name="Position"
              id="Position"
              placeholder="Position"
              defaultValue={editIndex !== null ? proArray[editIndex].Position : ''}
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
              defaultValue={editIndex !== null ? proArray[editIndex].Degree : ''}
            />
          </div>
          <div className="flex flex-col gap-1 w-full px-4">
            <label htmlFor="Start">Start day:</label>
            <input
              className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm"
              type="text"
              id="Start"
              name="Start"
              placeholder="04/04/2004"
              defaultValue={editIndex !== null ? proArray[editIndex].Start : ''}
            />
          </div>
          <div className="flex flex-col gap-1 w-full px-4">
            <label htmlFor="End">End day:</label>
            <input
              className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm"
              type="text"
              id="End"
              name="End"
              placeholder="04/04/2005"
              defaultValue={editIndex !== null ? proArray[editIndex].End : ''}
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
              defaultValue={editIndex !== null ? proArray[editIndex].adresse : ''}
            />
          </div>
          <div className="flex w-11/12 justify-between items-center text-slate-50">
            {editIndex !== null ? (
              <button type="button" className="w-fit bg-slate-500" onClick={handleDelete}>Delete</button>
            ) : null}
            <button type="button" className="w-fit bg-slate-500" onClick={toggleForm}>Cancel</button>
            <button type="submit" className="w-fit bg-red-500">Save</button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col justify-center fixed z-10 w-full max-w-sm px-2 bg-slate-900 gap-3 rounded-md py-3 text-slate-200 items-center">
          <ul className="flex flex-col gap-1 bg-base-200 rounded-box">
            {proArray.map((item, index) => (
              <li key={index} className="cursor-pointer bg-slate-600 p-2 rounded-md flex justify-center items-center" onClick={() => loadPro(index)}>
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

export default PEForm;
