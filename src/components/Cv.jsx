import { useRef } from "react";
import BarCv from "./BarCv.jsx";
import CorpCv from "./CorpCv.jsx";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
function Cv(params) {

    const pidif =useRef();
    const handleDownloadPdf =  () => {
        const input = pidif.current;
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("p","mm","a4",true);
            const pdfWidth=pdf.internal.pageSize.getWidth();
            const pdfHeight=pdf.internal.pageSize.getHeight();
            const imgWidth=canvas.width;
            const imgHeight=canvas.height;
            const ratio=Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
            const imgX=(pdfWidth-imgWidth*ratio)/2;
            const imgY=30;
            pdf.addImage(imgData,"PNG",imgX,imgY,imgWidth*ratio,imgHeight*ratio);
            pdf.save("cv.pdf");
        })
    }
    return (<>
    
        <div ref={pidif} className=" bg-slate-100 h-svh  w-svw flex flex-col ">
    
            <BarCv/>
            <CorpCv/>
             <button className="w-5 " onClick={handleDownloadPdf}> Download</button>
    
        </div>

       
    </>);
}

export default Cv