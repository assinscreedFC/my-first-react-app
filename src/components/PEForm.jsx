import { useContext, useState } from "react";
import {ContextPro} from "../App.jsx"; // Assurez-vous que le chemin est correct

function PEForm() {
  const [on, setOn] = useState(false);
  const { setpro } = useContext(ContextPro);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const nameS = data.get("nameS");
    const Position = data.get("Position");
    const Degree = data.get("Degree");
    const Start = data.get("Start");
    const End = data.get("End");
    const adresse = data.get("adresse");

    setpro((prevProfile) => [
      ...prevProfile,
      { nameS, Position, Degree, Start, End, adresse }
    ]);

    setOn(true);
  };

  return (
    <div className={`w-screen bg-transparent flex flex-col items-center ${on ? "hidden" : ""}`}>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center sticky z-10 w-4/5 px-2 bg-slate-900 gap-3 rounded-md py-3 text-slate-200 items-center">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="flex flex-col gap-1 w-full px-4">
          <label htmlFor="nameS">Name of school:</label>
          <input className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" type="text" id="nameS" name="nameS" placeholder="Abderahamn mira" />
        </div>
        <div className="flex flex-col gap-1 w-full px-4">
          <label htmlFor="Position">Position:</label>
          <input className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" type="text" name="Position" id="Position" placeholder="Position" />
        </div>
        <div className="flex flex-col gap-1 w-full px-4">
          <label htmlFor="Degree">Degree:</label>
          <input className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" type="text" name="Degree" id="Degree" placeholder="Major" />
        </div>
        <div className="flex flex-col gap-1 w-full px-4">
          <label htmlFor="Start">Start day:</label>
          <input className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" type="text" id="Start" name="Start" placeholder="04/04/2004" />
        </div>
        <div className="flex flex-col gap-1 w-full px-4">
          <label htmlFor="End">End day:</label>
          <input className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" type="text" id="End" name="End" placeholder="04/04/2005" />
        </div>
        <div className="flex flex-col gap-1 w-full px-4">
          <label htmlFor="adresse">Enter your location:</label>
          <input className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" type="text" name="adresse" id="adresse" placeholder="City, Country" />
        </div>
        <div className="flex w-11/12 justify-between items-center text-slate-50">
          <button type="button" className="w-fit bg-slate-500">Delete</button>
          <button type="submit" className="w-fit bg-slate-500">Save</button>
        </div>
      </form>
    </div>
  );
}

export default PEForm;
