import { useState } from "react"
import "/src/components/ItemListContainer/Clicker.scss"

export const Clicker = ( {init=0 ,step=1}) => {
    const [counter, setCounter] = useState(0)
    console.log(counter)

    const sumar = () => {
        setCounter(counter + step)
    }

    const restar = () => {
        if (counter > 0) {
        setCounter(counter - step)
    }};

    const reset = () => {
        setCounter(init)
    }


    return (
        <div className="boton_container">
            <button className="boton_sumar" onClick={sumar}> ➕ </button>
            <button className="boton_restar" onClick={restar}> ➖ </button>
            <button className="boton_reset" onClick={reset}> RESET </button>
            <p className="contador">{counter} unidades</p>
        </div>
    )
}

export default Clicker