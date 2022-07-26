import React, { useState, useEffect, useContext } from 'react';
import FirebaseContext  from '@firebase/context';

const useProductos = orden => {
    const [productos, guardarProductos] = useState([]);

    const { firebase } = useContext(FirebaseContext);

  
    useEffect( () => {
      const obtenerProductos = async () => {
        await firebase.getProducts(manejarSnapshot);
      };
      
       obtenerProductos();
    }, []);
  
    function manejarSnapshot(snapshot) {
      const productos = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
  
      guardarProductos(productos);
    };

    return {
        productos
    };
};

export default useProductos;