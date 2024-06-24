import Education from "./Educatioon.jsx";
import Experience from "./Experience.jsx";

function CorpCv(params) {
    return(
    <>
        <div className=" p-5 w-full flex flex-col  items-center ">
           
            <Education/>
            <Experience/>

        </div>
    
    
    
    </>);
}

export default CorpCv