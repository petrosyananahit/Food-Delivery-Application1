import CardItem from "./CardItem"
const Card = props=>{
    return<div>
    <p className="total">Total-{props.total}AMD</p>
    { 
    props.items.map(elm=>{
    return <CardItem
     key ={elm.id}
    item = {elm}
    {...props}
    />
   })}
    </div>
  }
  
  export default Card