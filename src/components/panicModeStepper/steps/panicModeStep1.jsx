import { useState , useRef, useEffect } from "react"

export function PanicModeStep1(props) {
    const ref = useRef(null)
    let brainDumpList = props.brainDumpList
    let setBrainDumpList = props.setBrainDumpList
    const [userInput , setUserInput] = useState()
    
    const element = ref.current
   

    function addItem (){
        setBrainDumpList([...brainDumpList, {title: userInput, key: brainDumpList.length + 1}])
        setUserInput("")
        element.value = ""
    }

    return (
        <div className="pb-10  flex flex-col justify-between h-full" >
            <div className="text-xl font-bold">do a brain dump !</div>
            <div className="overflow-y-auto h-96 p-4 m-2 " >{
                    brainDumpList.map((item)=>{
                        return(
                            <div key={item.key} className="flex flex-row justify-between" >
                                <p>{item.key}. {item.title} </p>
                                
                            </div>
                        )
                    })
                }</div>
            <div className="flex flex-row justify-between border p-2" >
                <input ref={ref} id="userInputElement" onChange={(e)=>{
                    setUserInput(e.target.value);
                      
                }} />
                <button onClick={addItem}>add</button>
            </div>
        </div>
    )

}