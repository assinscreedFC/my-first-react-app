import { useContext, useState } from "react";
import { Them } from "../App.jsx";
function BarCv() {
    
    const {them}=useContext(Them)
    const mail=<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" className="w-4" viewBox="0 0 512 512"><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="#f1f5f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="#f1f5f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/></svg>;
    const locatioon=<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" className="w-4" viewBox="0 0 512 512"><path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="#f1f5f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="192" r="48" fill="none" stroke="#f1f5f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
    const phone =<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" className="w-4" viewBox="0 0 512 512 "><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="#f1f5f9" stroke-miterlimit="10" stroke-width="32"/></svg>

    return(
    <>
    
        <div className=" bg-slate-600 w-full  overflow-hidden   h-1/5 flex flex-col     justify-center items-center gap-2 py-2 text-slate-100">
            
            <div className=" font-sans font-bold"> {them.fullName} </div>
            <div className="    w-40  flex flex-row gap-1 justify-center"> 
              {mail}
                <div className="text-xs text-"> {them.email} </div>
            </div>
            <div className="w-45 flex flex-row gap-3 items-center">
                <div className="flex flex-row gap-1">
                    {phone}
                   
                    <div className="  text-xs"> {them.phone} </div>
                </div>
                <div className="flex flex-row gap-1">
                    {locatioon}
                   
                    <div className="  text-xs"> {them.adresse} </div>
                </div>
            </div>
        </div>
    </>);
}

export default BarCv