export function PanicModeStep3 (props){
    let brainDumpList = props.brainDumpList
    let setBrainDumpList = props.setBrainDumpList
    return(
        <div className="" >
            {
                brainDumpList.map((item)=>{
                    return(
                        <div className="flex flex-row" >
                            <div className="mx-1" ><input type="checkbox" /></div>
                            <div className="mx-1"><p>{item.title}</p></div>
                        </div>
                    )
                })
            
            }
        </div>
    )

}