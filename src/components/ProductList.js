import ProductItem from "./ProductItem"

const ProductList = props =>{
    return <div className="flex">
   {props.products.map(elm=>{
    return <ProductItem
    key ={elm.id}
    product = {elm}
    onMove ={props.onMove}
    />
   })
}
    </div>
}

export default ProductList