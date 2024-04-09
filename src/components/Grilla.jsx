import MyCard from "./MyCard"
const Grilla =({products})=>{
    return(
        <div className="row">
            {products && 
                products.map((product)=>(
                    <MyCard 
                    product={product} 
                    key={product.id}/>
                ))
            }
        </div>
    )
}

export default Grilla