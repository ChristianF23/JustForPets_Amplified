import { useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { createProduct } from '../graphql/mutations';
import {
    TextField,
} from '@aws-amplify/ui-react';



const AgregarProducto = () => {

    const [product, setProduct] = useState({
        name: "",
        description: "",
        srcImg: "",
        price: 0

    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.graphql(graphqlOperation(createProduct, { input: product }));
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <TextField
                    size="small"
                    descriptiveText="Nombre del producto"
                    placeholder="Producto"
                    label="Producto"
                    errorMessage="There is an error"
                    name='name'
                    width="50%"
                    onChange={e => setProduct({ ...product, name: e.target.value })}
                />

                <TextField
                    size="small"
                    descriptiveText="Descripción del producto"
                    placeholder="descripción"
                    label="Descripción"
                    errorMessage="There is an error"
                    name='description'
                    width="50%"
                    onChange={e => setProduct({ ...product, description: e.target.value })}
                />

                <TextField
                    size="small"
                    descriptiveText="Imagen del producto"
                    placeholder="imagen"
                    label="Descripción"
                    errorMessage="There is an error"
                    name='srcImg'
                    width="50%"
                    onChange={e => setProduct({ ...product, srcImg: e.target.value })}
                />

                <TextField
                    size="small"
                    descriptiveText="Precio del producto"
                    placeholder="Precio"
                    label="Precio"
                    errorMessage="There is an error"
                    name='price'
                    width="50%"
                    onChange={e => setProduct({ ...product, price: e.target.value })}
                />
                <button>
                    Crear
                </button>
            </form>
        </div>

    )
}


export default AgregarProducto;