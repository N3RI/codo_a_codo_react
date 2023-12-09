import React, {useState, useEffect} from 'react';
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import {async} from '@firebase/util';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
const MySwal = withReactContent(Swal);


const Mostrar = () => {

    //1 configuración de los hook de mostrar
    

    const [productos, setProductos] = useState([]);

    //2 referenciar la db de firebase

    const productosCollection = collection(db, "Productos");

    //3 creamos la funcionabilidad para mostrar los documentos con asincronismo

    const getProductos = async ()=> { 
        const data = await getDocs(productosCollection);

        setProductos(
            data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        );
        }

    // 4 useeffect

    useEffect(()=>{
        getProductos();
    }, [])

    // borrado del registro

    const deleteProducto = async(id)=>{
        const productoDoc = doc(db, "Productos", id);
        await deleteDoc(productoDoc);
        getProductos();
    }

    // 5 configuracion del sweetalert

    const confirmDelete = (id) => {
        Swal.fire({
            title: "Queres eleiminar el producto?",
            text: "El borrado sera permanente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "si, borrar!"
          }).then((result) => {
            if (result.isConfirmed) {
              deleteProducto(id);
              Swal.fire({
                title: "Borrado",
                text: "El producto fue eliminado",
                icon: "listo"
              });
            }
          });
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='d-grid gap-2'>
                        <link>falta el router a crear producto</link>
                    </div>
                    <table className='table table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='text-light'>
                            {
                                productos.map((produc)=>(
                                    <tr key={produc.id}>
                                        <td key={produc.Nombre} className='text-light'>{produc.Nombre || ""} </td>
                                        <td key={produc.Precio} className='text-light'>{produc.Precio || ""} </td>
                                        <td key={produc.Stock} className='text-light'>{produc.Stock || ""} </td>
                                        <td>
                                            <Link>ruta de editar</Link>
                                            <button onClick={()=>{confirmDelete(produc.id)}} className='bg-danger'><i className='fa-solid fa-trash'></i></button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )


    }