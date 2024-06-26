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
                useCORS: true,
                scale: 2,
                svgRendering: true,
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
    <div className="w-full max-w-lg flex flex-col justify-center items-center gap-3 ">
        <div ref={pidif} className=" bg-slate-100  w-full min-h-svh  flex flex-col justify-start items-center mx-4">
    
            <BarCv />
            <CorpCv/>
        </div>
        <div className="w-fit flex items-center justify-center m-3 group">
  <button
    className="
      w-fit
      bg-slate-50
      text-slate-950
      p-2
      rounded-md
      ring-2
      ring-pink-300
      focus:ring-2
      focus:ring-offset-2
      focus:ring-offset-slate-50
      focus:ring-pink-500
      border-none
      hover:bg-slate-100
      focus:outline-none
      transition
      duration-200
      ease-in-out
    "
    onClick={handleDownloadPdf}
  >
    Download
  </button>
</div>
</div>
       
    </>);
}

export default Cv