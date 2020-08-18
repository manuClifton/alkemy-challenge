import React, { useReducer } from 'react';
import uuid, { v4 as uuidv4 } from 'uuid';


import postContext from './postContext';
import postReducer from './postReducer';

import { 
    OBTENER_POSTS,
    AGREGAR_POSTS,
    VALIDAR_FORMULARIO,
    POST_ACTUAL,
    EDITAR_POST,
    ELIMINAR_POST
} from '../../types';


const PostState = props =>{
    const posts = [
        {
            id: 1,
            titulo: 'manzana',
            contenido: 'lalalalalalalalalalal',
            fecha: Date.now()
        },
        {
            id: 2,
            titulo: 'pera',
            contenido: 'lalalalalalalalalalal',
            fecha: Date.now()
        },
        {
            id: 3,
            titulo: 'zanahoria',
            contenido: 'lalalalalalalalalalal',
            fecha: Date.now()
        },
        {
            id: 4,
            titulo: 'tomate',
            contenido: 'lalalalalalalalalalal',
            fecha: Date.now()
        }
    ]
    const initialState = {
        posts: [ ],
        errorformulario: false,
        post: null,
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(postReducer, initialState);

    //obtener los post
    const obtenerPosts = () =>{
        dispatch({
            type: OBTENER_POSTS,
            payload: posts
        })
    }
    //Agregar nuevo post
    const agregarPost = post =>{
        post.id = uuidv4();
        dispatch({
            type: AGREGAR_POSTS,
            payload: post
        })
    }
    //Validar formulario
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }
    //Selecciona el Post a editar
    const postActual = postId =>{
        dispatch({
            type: POST_ACTUAL,
            payload: postId
        })
    }
    //editar post seleccionado
    const editarPost = post =>{
        dispatch({
            type: EDITAR_POST,
            payload: post
        })
    }
    //Elimina un post
    const eliminarPost = postId =>{
        dispatch({
            type: ELIMINAR_POST,
            payload: postId
        })
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

