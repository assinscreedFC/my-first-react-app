import { useContext } from "react";
import BarContent from "./BarContent.jsx";
import { ContextPro } from "../App.jsx";

function Experience(params) {
  const { pro } = useContext(ContextPro);

  return (
    <div className="flex flex-col gap-2 w-full items-center">
      <BarContent value="Professional Experience" />
      {pro.map((item, index) => (
        <div key={index} className="flex px-3 gap-2 w-full text-slate-800 justify-between text-xs">
          <div className="items-end flex flex-col gap-1">
            <p>{item.Start} - {item.End}</p>
            <p>{item.adresse}</p>
          </div>
          <div className="flex flex-col items-start text-wrap gap-1 w-3/5">
            <p className="font-bold">{item.nameS}</p>
            <p>{item.Position}</p>
            <p className="pl-2">{item.Degree}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
