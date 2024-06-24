import { useContext, useState } from "react";
import Form from "./Form.jsx";
import { Them } from "../App.jsx";
function BarCv() {
    
    const {them}=useContext(Them)

    return(
    <>
    
        <div className=" bg-slate-600 w-full  overflow-hidden   h-1/5 flex flex-col     justify-center items-center gap-2 py-2 text-slate-100">
            
            <div className=" font-sans font-bold"> {them.fullName} </div>
            <div className="    w-40  flex flex-row gap-1 justify-center"> 
                <img src="../../mail-outline.svg" className=" w-4" alt="icone de mail" />
                <div className="text-xs text-"> {them.email} </div>
            </div>
            <div className="w-45 flex flex-row gap-3 items-center">
                <div className="flex flex-row gap-1">
                    <img src="../../call-outline.svg" className="   w-4" alt="icone telephonee" />
                    <div className="  text-xs"> {them.phone} </div>
                </div>
                <div className="flex flex-row gap-1">
                    <img src="../../location-outline.svg" className=" w-4" alt="icone de localisation" />
                    <div className="  text-xs"> {them.adresse} </div>
                </div>
            </div>
        </div>
    </>);
}

export default BarCv