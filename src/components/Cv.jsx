import { useContext, useRef, useState } from "react";
import BarCv from "./BarCv.jsx";
import CorpCv from "./CorpCv.jsx";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Form from "./Form.jsx";
import { Them } from "../App.jsx";
const element= (e)=>{ setdata(e);};
function Cv({val}) {
    // const {them}=useContext(Them);
    const pidif =useRef();
    const handleDownloadPdf = async () => {
        const input = pidif.current;

        try {
            const canvas = await html2canvas(input, {
                useCORS: true, // This helps with cross-origin issues
                scale: 2, // Improve quality by increasing the scale
                svgRendering: true, // Ensure SVGs are rendered correctly
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const imgWidth = canvas.width;
            const imgHeight = canvas.height;

            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = (pdfHeight - imgHeight * ratio) / 2;

            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('cv.pdf');
        } catch (error) {
            console.error('Error generating PDF', error);
        }
    };
    const [data,setdata]=useState("m");
    
{/* <button className="w-5 bg-red-500 absolute " onClick={handleDownloadPdf}> Download</button> */}
    
    return (<>
    
        <div ref={pidif} className=" bg-slate-100  w-full  flex flex-col justify-start items-center mx-4">
    
            <BarCv />
            <CorpCv/>
             
    
        </div>

       
    </>);
}

export default Cv