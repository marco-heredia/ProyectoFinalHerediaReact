import { useEffect } from "react"
import { useState } from "react"
import { getProduct } from "../../asyncMocks"
import { DetalleDeProducto } from "../DetalleDeProducto/DetalleDeProducto"
import { useParams } from "react-router-dom"


export const Catalogo = () => {
   const [product, setProduct] = useState(null)

   const {id} = useParams()

    useEffect (()=> {
        getProduct(id)
        .then( resp => setProduct(resp))
        .catch(error => console.log(error))
    }, [product])
    
return (
    <div>
        {product && <DetalleDeProducto {...product}/>}
    </div>
  )
}
