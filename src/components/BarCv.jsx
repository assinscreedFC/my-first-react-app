function BarCv(params) {
    return(
    <>
        <div className=" bg-slate-600 w-full  overflow-hidden   h-1/5 flex flex-col     justify-center items-center gap-2 text-slate-100">
            
            <div className=" font-sans font-bold"> Anis Hammouche </div>
            <div className="    w-40  flex flex-row gap-1 justify-center"> 
                <img src="../../mail-outline.svg" className=" w-4" alt="icone de mail" />
                <div className="text-xs text-"> anishammouche50@gmail.com </div>
            </div>
            <div className="w-45 flex flex-row gap-3 items-center">
                <div className="flex flex-row gap-1">
                    <img src="../../call-outline.svg" className="   w-4" alt="icone telephonee" />
                    <div className="  text-xs"> +216 53 333 333 </div>
                </div>
                <div className="flex flex-row gap-1">
                    <img src="../../location-outline.svg" className=" w-4" alt="icone de localisation" />
                    <div className="  text-xs"> Tunis, Tunisie </div>
                </div>
            </div>
        </div>
    </>);
}

export default BarCv