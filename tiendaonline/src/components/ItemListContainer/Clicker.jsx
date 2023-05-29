import { useState } from "react"
import "/src/components/ItemListContainer/Clicker.scss"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if (counter > 0) {
            toast.info('Reset', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
        }
        setCounter(init)
    };

    const mensaje_agregar = () => {
        if (counter > 0) {
          toast.success('Producto Agregado al carrito', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {toast.warn('Seleccionar unidades', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
    };
    

    return (
        <div className="boton_container">
            <button className="boton_sumar" onClick={sumar}> ➕ </button>
            <button className="boton_restar" onClick={restar}> ➖ </button>
            <button className="boton_reset" onClick={reset}> RESET </button>
            <p className="contador">{counter} unidades</p>
            <button onClick = {mensaje_agregar} className="boton_agregar"> AGREGAR </button>
        </div>
    )}

export default Clicker