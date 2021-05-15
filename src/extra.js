import React from "react"
import {Out} from "./util1"
// import harry from "./harry.jpg"

class Extra extends React.Component{
    
    render(){
        Out(this.props)
        return(
            <div className="card1">
                <img  src={this.props.im} onClick={()=>{
                    this.props.getid(this.props.id)
                    }}></img>
                <h2>{this.props.mname}</h2>
                {/* <span>Price: </span>
                <span className="pr">${this.props.price}</span>
                <p></p> */}
                {/* <button className="play" onClick={()=>{
                    this.props.getid(this.props.position)
                    }
                }>Play</button> */}
                <button className="del" onClick={()=>{
                    this.props.del(this.props.id)
                    }}>Delete</button>
            </div>
        )
    }
    

}
export default Extra