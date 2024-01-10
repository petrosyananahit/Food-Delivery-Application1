import photo from "../FoodImage/food.jpg"
import Categories from "./Categories"
const Header = props =>{
return <>
<img className="main-pic" src={photo}/>
<Categories onFilter={props.onFilter}/>
</>
}

export default Header