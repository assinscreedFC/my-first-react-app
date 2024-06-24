import { useContext } from "react";
import BarContent from "./BarContent.jsx";
import { ContextEducation } from "../App.jsx";

function Education(params) {
    const {education}=useContext(ContextEducation);
    
    
    return(
    <>
    <div className="flex flex-col gap-2 w-full items-center">
        <BarContent value="Education"/>
        
        {education.map((e, index) => (
          <div key={index} className="flex px-3  gap-2 w-full text-slate-800   justify-between text-xs text">
            <div className="items-start flex flex-col gap-1 w-fit">
              <p>{e.Start} - {e.End}</p>
              <p>{e.adresse}</p>
            </div>
            <div className="flex flex-col text items-start text-wrap gap-1 w-7/12">
              <p className="font-bold">{e.nameS}</p>
              <p className="pl-2">{e.Degree}</p>
            </div>
          </div>
        ))}

            
                
            
        


    
    
    
    </div>
    </>);
}

export default Education