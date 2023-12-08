import {Link} from "react-router-dom"
import {CartWidget} from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <Link to="/">
      <h4>Mundo Videojuegos</h4>
      </Link>
        <div>
          <Link to={"/"}>
          <button type="button" class="btn btn-warning">Inicio</button>
          </Link>
        <Link to={"/category/Juego"}>
          <button type="button" class="btn btn-success">Juegos</button>
        </Link>
        <Link to={"/category/Consola"}>
          <button type="button" class="btn btn-secondary">Consolas</button>
        </Link>
        <Link to={"/category/Accesorio"}>
        <button type="button" class="btn btn-danger">Accesorios</button>
        </Link>
        </div>
        <CartWidget/>

    </nav>
  )
}
