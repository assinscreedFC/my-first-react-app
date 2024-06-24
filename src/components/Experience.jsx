import BarContent from "./BarContent.jsx"

function Experience(params) {
        return(
            <div className="flex flex-col gap-2 w-full items-center">
                <BarContent value="Professional Experience"/>

                <div className="flex px-3  gap-2 w-full text-slate-800   justify-between text-xs text">
            
                <div className="items-end flex flex-col gap-1  ">   <p>08/2020 – present</p>
                        <p>New York City, US</p>
                </div>
                <div className="flex flex-col text items-start text-wrap gap-1  w-3/5">
                    <p className=" font-bold ">London City University</p>
                    <p> Web devlopper </p>
                    <p className=" pl-2">Bachelors in Economics Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nesciunt libero excepturi minus, molestias architecto impedit id iure assumenda non?</p>
                </div>
            
                </div>
            </div>
        )
}   
export default Experience