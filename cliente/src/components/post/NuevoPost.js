import React, {useState, useContext} from 'react';

import postContext from '../../context/posts/postContext';

const NuevoPost = (props) => { 

    //obtengo state
    const postsContext = useContext(postContext);
    const { agregarPost, errorformulario, mostrarError} = postsContext;

    //state para el post
    const [posteo, guardarPost] = useState({
        titulo: '',
        contenido: '',
        fecha: new Date()
    })

    //extraigo el titulo del post
    const {titulo, contenido} = posteo;

    //leo los contenidos del input y textarea
    const onChangePost = e =>{
        guardarPost({
            ...posteo,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario envia un post nuevo
    const onSubmitPost = e =>{
        e.preventDefault();

        
        //validar el post
        if(titulo === '' || contenido === ''){
            mostrarError();
            return;
        }

  
        //agregar al state
        agregarPost(posteo);
        //reiniciar el form y redireccionar a inicio
        props.history.push('/');
    }
    
    

    return ( 
        <div className="row justify-content-center mt-5">
        <div className="col-md-8">
             <div className="card">
                 <div className="card-body">
                     <h2 className="text-center mb-4 font-weight-bold">
                         Agregar Nuevo Post
                     </h2>
                    
                     <form
                         onSubmit={onSubmitPost}
                     >
                         <div className="form-group">
                             <label>Titulo </label>
                             <input 
                                 type="text"
                                 className="form-control"
                                 placeholder="Titulo"
                                 name="titulo"
                                 value={titulo}
                                 onChange={onChangePost}
                             />
                         </div>

                         <div className="form-group">
                             <label>Contenido</label>
                             <textarea 
                                 type="text"
                                 className="form-control"
                                 placeholder="Contenido"
                                 name="contenido"
                                 value={contenido}
                                 onChange={onChangePost}
                             />
                         </div>
                         <button
                             type="submit"
                             className="btn btn-primary font-weight-bold text-uppercase d-block w-100" 
                         > Agregar Post</button>
                     </form>
                    {errorformulario ? <p className="mensaje error">Ambos campos son obligatorios</p>  : null }
                 </div>
             </div>
        </div>
    </div>
     );
}
 
export default NuevoPost;