import React from "react"
const Sqaure = (props) =>{
  return (
    <div className="play"
      onClick={props.onClick}
      style={{ 
        border: "2px solid",
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems:"center" }}className="sqaure">
      <h5>{props.value}</h5>
    </div>
  )
}



export default Sqaure