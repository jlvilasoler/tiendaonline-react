import "/src/components/ItemListContainer/ItemListContainer.scss"
import producto1 from "/src/assets/img/dulcedeleche-los-nietitos.png";


const ItemListContainer = ({}) => {

    return (
        <div className="list_container">
                                    <img src={producto1} alt="Dulce de leche - Los Nietitos"/>
                                    <h2 className="articulo">Dulce de Leche</h2>
                                    <h3 className="descripcion">700gr</h3>
                                    <p className="marca">LOS NIETITOS</p>
                                    <p className="precio">$ 150</p>                       
        </div>

    )
}

export default ItemListContainer