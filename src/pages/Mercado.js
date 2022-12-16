import { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { TarjetaProducto } from "../components/TarjetaProducto";
import { listProducts } from '../graphql/queries';
import '@aws-amplify/ui-react/styles.css';


const Mercado = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const result = await API.graphql(graphqlOperation(listProducts));
            setProducts(result.data.listProducts.items);
        }
        loadProducts()
    }, [])

    return (
        <>
            {
                products.map(product => {
                    return <TarjetaProducto key={product.id} nombre={product.name} description={product.description} price={product.price} srcImg={product.srcImg} />
                }
                )
            }
        </>
    )

}


export default Mercado;