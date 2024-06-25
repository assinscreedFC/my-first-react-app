import { useContext, useRef, useState } from "react";
import BarCv from "./BarCv.jsx";
import { Them } from "../App.jsx";
import useLocalStorage from "./LocalStorageHook.js"
function Form(val){
    const { setStoredValue } = useLocalStorage();

    const [on,seton]=useState(false);
    const [form,setform]=useState(0);
    const {them,setthem}=useContext(Them);

    const handellSubmit=(e)=>{
        e.preventDefault();
        console.log("Form submitted");
        const form=e.target;
        const data= new FormData(form);
        const email=data.get("email");
        const fullName=data.get("fullname");
        const phone=data.get("phone");
        const adresse=data.get("adresse");
        console.log({fullName,email,phone,adresse});
        setStoredValue(1,{fullName,email,phone,adresse});
        setthem({fullName,email,phone,adresse});
        seton(true);

    }
    const JSP=()=>{
        const thecopy= Object.keys(them).map(key => them[key]); 
        thecopy.pop();
        setthem(thecopy);
        seton(true);
    }



    return(
        <div className={`w-full max-w-lg bg-transparent flex flex-col items-center ${on ? "hidden" : null}`}>
    {true ? (
        <form action="" onSubmit={handellSubmit} className="w-full max-w-lg flex flex-col justify-center fixed z-10 px-2 bg-slate-900 gap-3 rounded-md py-3 text-slate-200 items-center">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <div className="flex flex-col gap-1 w-full px-4">
                <label htmlFor="fullname">Enter Your full Name:</label>
                <input 
                    className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" 
                    type="text" 
                    id="fullname" 
                    defaultValue={them.fullName} 
                    name="fullname" 
                    placeholder="Anis Hammouche" 
                />
            </div>
            <div className="flex flex-col gap-1 w-full px-4">
                <label htmlFor="email">Enter your email:</label>
                <input 
                    className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" 
                    type="email" 
                    name="email" 
                    defaultValue={them.email} 
                    id="email" 
                    placeholder="anishammouche@example.com" 
                />
            </div>
            <div className="flex flex-col gap-1 w-full px-4">
                <label htmlFor="phone">Enter your phone number:</label>
                <input 
                    className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="066666666" 
                    defaultValue={them.phone} 
                />
            </div>
            <div className="flex flex-col gap-1 w-full px-4">
                <label htmlFor="adresse">Enter your location:</label>
                <input 
                    className="text-slate-700 ring-slate-50 outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" 
                    type="text" 
                    defaultValue={them.adresse} 
                    name="adresse" 
                    id="adresse" 
                    placeholder="City, Country" 
                />
            </div>
            <div className="flex w-11/12 justify-between items-center text-slate-50">
                <button type="button" className="w-fit bg-slate-500" onClick={JSP}>Delete</button>
                <button type="submit" className="w-fit bg-slate-500">Save</button>
            </div>
        </form>
    ) : null}
</div>

    )
}
export default Form