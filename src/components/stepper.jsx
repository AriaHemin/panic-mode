import { useState } from "react"


export function useStepper(steps){
    const [currentStep , setCurrentStep] = useState(0);

    function goNextStep(){
        setCurrentStep(i => {
            if(i >= steps.length -1) return i
            return i + 1
        })
    }

    function goPreviousStep (){
        setCurrentStep(i => {
            if(i <= 0) return i
            return i - 1
        })
    }

    function goStep (index){
        setCurrentStep(index)
    }


    return{
        currentStep,
        steps,
        step: steps[currentStep],
        goStep,
        goNextStep,
        goPreviousStep,

    }
}
