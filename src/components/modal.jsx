function Modal(props){

    return(
        <>
            {props.isModalActive ? <div onClick={()=>{props.setIsModalActive(false)}} 
                className="
                    fixed inset-0 bg-black/25 
                    w-screen h-screen 
                    flex justify-center items-center shrink-0 " >
                <div 
                    onClick={(e)=>{
                        e.stopPropagation();}} 
                    className="
                    bg-white min-w-fit min-h-fit flex flex-col items-center justify-center shrink-0 p-7 rounded" >
                    {props.innerComp}
                </div>
            </div>: null}
        </>
    )
}

export default Modal;
