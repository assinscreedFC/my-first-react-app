import BarCv from "./BarCv.jsx";
import CorpCv from "./CorpCv.jsx";

function Cv(params) {
    return (<>
    
        <div className=" bg-slate-100 h-svh  w-svw flex flex-col ">
    
            <BarCv/>
            <CorpCv/>
        </div>
    
    </>);
}

export default Cv