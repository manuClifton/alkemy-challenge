import { 
    OBTENER_POSTS,
    AGREGAR_POSTS,
    VALIDAR_FORMULARIO,
    BORRAR_ERROR,
    POST_ACTUAL,
    EDITAR_POST,
    ELIMINAR_POST
    } from '../../types';


export default (state, action) =>{

    switch(action.type){
        case OBTENER_POSTS:
           // console.log(action.payload);
            return{
                ...state,
                posts: action.payload
            }
        case AGREGAR_POSTS:
            return{
                ...state,
                posts: [...state.posts, action.payload],
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return{
               ...state,
               errorformulario: true
            }
        case BORRAR_ERROR:
            return{
               ...state,
               errorformulario: false
            }
        case POST_ACTUAL:
            return{
                ...state,
                post: state.posts.filter(post =>post.id === action.payload )
            }
        case EDITAR_POST:
            return{
                ...state,
                posts: state.posts.map(post =>post.id === action.payload.id ? action.payload : post),
                errorformulario: false,
                post: null
            }
        case ELIMINAR_POST:
            return{
                ...state,
                posts: state.posts.filter(post =>post.id !== action.payload )
            }
        default:
            return state;
    }
}