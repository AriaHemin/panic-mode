import Modal from "./components/modal";
import { PanicModeStepper } from "./components/panicModeStepper/panicModeStepper";

import { useState } from "react";


function App() {
	const innerComp = <PanicModeStepper/>
    const [isModalActive, setIsModalActive] = useState(false);

  	return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div 
        	className="text-xl bg-stone-800 rounded m-10 text-white font-bold p-3 px-5" 
			onClick={()=>{
				setIsModalActive(true)
			}}
        >
          	make a panic mode session
        </div>
        <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive} innerComp={innerComp} />
      </div>
      <div>
        <div className="text-4xl">
          active session
        </div>
      </div>
      <div>
        <div className="text-4xl">
          frozen session
        </div>
      </div>
      <div>
        <div className="text-4xl">
          completed session
        </div>
      </div>
      
    </div>
  )
}

export default App
