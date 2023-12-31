import styles from "./button.module.css"


export const Button = ({text = "Botón", variant = "btn-primary", functionClick}) => {
    
    return (
    <button className={`btn ${variant} m-2`} onClick={functionClick} >{text}</button>
  )
}
