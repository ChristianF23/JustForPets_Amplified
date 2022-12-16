import { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { createProduct } from './graphql/mutations';
import { listProducts } from './graphql/queries';
import {
  withAuthenticator,
  Button,
  TextField,
} from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';
import { TarjetaProducto } from "./components/TarjetaProducto";
import './App.css';
import Navbar from "./components/Navbar";
import "./styles.css"
import AgregarProducto from "./pages/AgregarProducto";
import Mercado from "./pages/Mercado";


function App({ signOut, user }) {

  const [product, setProduct] = useState({
    name: "",
    description: "",
    srcImg: "",
    price: 0

  })

  const [products, setProducts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.graphql(graphqlOperation(createProduct, { input: product }));
  }

  useEffect(() => {
    async function loadProducts() {
      const result = await API.graphql(graphqlOperation(listProducts));
      setProducts(result.data.listProducts.items);
    }
    loadProducts()
  }, [])

  let Component

  switch (window.location.pathname) {
    case "/":
      Component = AgregarProducto
      break
    case "/agregarProductos":
      Component = AgregarProducto
      break
    case "/listarProductos":
      Component = Mercado
      break
    default:
      break
  }

  return (
    <>
      <Navbar />
      <Button onClick={signOut}>Sign out</Button>
      <Component />
    </>
  );
}

export default withAuthenticator(App);
