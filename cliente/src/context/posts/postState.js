import React, { useReducer } from 'react';
//import uuid, { v4 as uuidv4 } from 'uuid';

import postContext from './postContext';
import postReducer from './postReducer';

import { 
    OBTENER_POSTS,
    AGREGAR_POSTS,
    VALIDAR_FORMULARIO,
    BORRAR_ERROR,
    POST_ACTUAL,
    EDITAR_POST,
    ELIMINAR_POST,
} from '../../types';

import clienteAxios from '../../config/axios';

const PostState = props =>{
    
    const initialState = {
        posts: [ ],
        errorformulario: false,
        post: null
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(postReducer, initialState);

    //obtener los post
    const obtenerPosts = async () =>{

        try {
            const resultado = await clienteAxios.get('/api/posts');
            //console.log(resultado);
            dispatch({
                type: OBTENER_POSTS,
                payload: resultado.data.posteos
            })
        } catch (error) {
            console.log(error);
        }
    }
    //Agregar nuevo post
    const agregarPost = async post =>{
       // post.id = uuidv4();
       try {
        const resultado = await clienteAxios.post('/api/posts', post);
        console.log(resultado);

        dispatch({
            type: AGREGAR_POSTS,
            payload: resultado.data.posteo
        })
    } catch (error) {
         console.log(error);
         console.log('ERROR AL AGREGAR POSTEO')
    }
        
    }
    //Validar formulario
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
        setTimeout( ()=>{
            dispatch({
                type:BORRAR_ERROR
            })
        }, 5000 );
    }

    //Selecciona el Post a editar
    const postActual = postId =>{
        dispatch({
            type: POST_ACTUAL,
            payload: postId
        })
    }
    //editar post seleccionado
    const editarPost = async  post =>{
        try {
            const resultado = await clienteAxios.put(`/api/posts/${post._id}`,post)
            //console.log(resultado);
            dispatch({
                type: EDITAR_POST,
                payload: resultado.data.posteo
            })
        } catch (error) {
            console.log(error);
            console.log("ERROR AL EDITAR");
        }
        
    }
    //Elimina un post
    const eliminarPost = async postId =>{

        try {
            await clienteAxios.delete(`/api/posts/${postId}`);

            dispatch({
                type: ELIMINAR_POST,
                payload: postId
            })
        } catch (error) {
            console.log(error);
            console.log('ERROR AL ELIMINAR')
        }

        
    }

    return(
        <postContext.Provider
            value={{
                posts: state.posts,
                errorformulario: state.errorformulario,
                post: state.post,
                obtenerPosts,
                agregarPost,
                mostrarError,
                postActual,
                editarPost,
                eliminarPost
            }}
        >
            {props.children}
        </postContext.Provider>
    )
}

export default PostState;

