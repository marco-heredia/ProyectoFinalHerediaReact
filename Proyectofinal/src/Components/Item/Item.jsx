import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { useCount } from "../../hooks/useCount"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Item = ({nombre, imagen, detalle, id, stock, precio}) => {
  const { categoryId } = useParams()
  const [ListItem, setListItem] = useState([])
  const [products , setProducts] = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const {incremento, decremento, Count} = useCount(0, stock)

  useEffect(()=> {
    const misProd = query(collection(db, "products"))
    getDocs(misProd)
    .then ((resp)=> {
      const listProd = resp.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
      setListItem(listProd)
      
    })
    .catch((error)=> console.log(error))
  }, [])
  
  // useEffect(()=> {
  // setIsLoading(true)
  // const misProd = query(collection(db, "products"))
  // getDocs(misProd)
  //   .then((resp) => {
  //     if (categoryId) {
  //     const filtrar = resp.filter(product => product.categoria === categoryId)
  //     setProducts(filtrar)
  //     setIsLoading(false)  
  //     } else {
  //     setProducts(resp)
  //     setIsLoading(false)
  //     }
  //     })
  //   .catch( error => console.log(error))
  // }, [categoryId])

return (
    <>
    {ListItem.map((product) =>(
      <div className="border border-3 p-3 d-flex flex-column m-2">
      <p>{product.nombre}</p>
      <img src={product.imagen} alt="foto" />
      <p className="card-text">{product.detalle}</p>
      <Link to={`/item/${id}`}>
      <Button text="Detalles"/>
      </Link>
      <Button onClick={incremento} text="+"/>
      <strong>{Count}</strong>
      <Button onClick={decremento} text="-"/>
    </div>
    ))}
    {/* {isLoading ? <h2>cargando...</h2> : <h3>hola</h3>} */}
    </>
    
  )
}
