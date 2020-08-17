import { 
    OBTENER_POSTS,
    AGREGAR_POSTS,
    VALIDAR_FORMULARIO
    } from '../../types';


export default (state, action) =>{

    switch(action.type){
        case OBTENER_POSTS:
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
        default:
            return state;
    }
}