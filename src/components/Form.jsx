import { useContext, useRef, useState } from "react";
import BarCv from "./BarCv.jsx";
import { Them } from "../App.jsx";
function Form(val){
    const [on,seton]=useState(false);
    const {setthem}=useContext(Them);
    const handellSubmit=(e)=>{
        e.preventDefault();
        console.log("Form submitted");
        const form=e.target;
        const data= new FormData(form);
        const email=data.get("email");
        const fullName=data.get("fullname");
        const phone=data.get("phone");
        const adresse=data.get("adresse");
        setthem({fullName,email,phone,adresse});
        seton(true);

    }



    return(
        <div className= {` w-screen bg-transparent flex flex-col items-center ${on ? "hidden" : null } `}>
            
            <form action="" onSubmit={handellSubmit} className="flex flex-col justify-center fixed z-10 w-4/5 px-2 bg-slate-900 gap-3 rounded-md py-3 text-slate-200 items-center">
            <h1 className="text-3xl font-bold mb-4 ">Pofile</h1>
            <div className="flex flex-col gap-1 w-full px-4">
                <label htmlFor="fullname">Enter Your full Name:</label>
                <input className=" text-slate-700 ring-slate-50  outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" type="text" id="fullname" name="fullname" placeholder="Anis hammouche"/></div>
                <div className="flex flex-col gap-1 w-full px-4"><label htmlFor="email">Enter your email: </label>
                <input className=" text-slate-700 ring-slate-50  outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" type="email" name="email" id="email" placeholder="anishammouche@exemple.com" /></div>
                <div className="flex flex-col gap-1 w-full px-4"><label htmlFor="phone">Enter your phone number:</label>
                <input className=" text-slate-700 ring-slate-50  outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" type="tel" id="phone" name="phone" placeholder="066666666"/></div>
                <div className="flex flex-col gap-1 w-full px-4"><label htmlFor="adresse">Enter your location: </label>
                <input className=" text-slate-700 ring-slate-50  outline-none ring-offset-2 ring-2 focus:ring-slate-500 rounded-sm" type="text" name="adresse" id="adresse" placeholder="City,Country" /></div>
                <div className="flex w-11/12 justify-between items-center text-slate-50">
                    <button type="button" className=" w-fit bg-slate-500">Delete</button>
                    <button type="submit" className=" w-fit bg-slate-500" >Save</button>
                    </div>
                
            </form>
        </div>
    )
}
export default Form