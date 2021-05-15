import React from "react"

const Addbuttons=(props)=>{
    return(
        <div className="addsec">
            <button id={props.id} className="add" onClick={()=>{
                props.onclickadd(props.id)
            }}>+{props.mname}</button>
        </div>
    )

}

export default Addbuttons