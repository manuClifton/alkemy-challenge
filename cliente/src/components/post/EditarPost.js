import React, {useState, useContext, useEffect} from 'react';


import postContext from '../../context/posts/postContext';

const EditarPost = (props) => {
    
        //obtengo state
        const postsContext = useContext(postContext);
        const { post, editarPost, errorformulario } = postsContext;

        useEffect(()=>{
            if(post != null){
                guardarPost(post[0]);// ACA ESTA EL PROBLEMA CREO.. SE GUARDA UN ARRAY DE OBJETOS CUANDO TIENE QUE SER UN SOLO OBJT
            }else{
                guardarError(true);
            }
        },[post])
       //state para el post
       const [posteo, guardarPost] = useState({
           id: 0,
           titulo: '',
           contenido: '',
           fecha: new Date()
        })
     //console.log(posteo);
    //extraigo el titulo del post
   // const {titulo, contenido} = posteo;
   // console.log(titulo); // undefined nose porq

    const [error, guardarError] = useState(false);

    //leo los contenidos del input y textarea
    const onChangePost = e =>{
        guardarPost({
            ...posteo,
            [e.target.name] : e.target.value
        })
        //console.log(posteo);
    }

    const onSubmitPost = e =>{
        e.preventDefault();

        //Validar el formulario



        
        //console.log(posteo)
        guardarPost({
            ...posteo,
            [e.target.name] : e.target.value
        })
        //console.log(posteo);
        //validar
        editarPost(posteo);
        props.history.push('/')
    }


    return ( 
        <div className="row justify-content-center mt-5">
        <div className="col-md-8">
             <div className="card">
                 <div className="card-body">
                     <h2 className="text-center mb-4 font-weight-bold">
                         Editar Post
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
                                 value={posteo.titulo}
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
                                 value={posteo.contenido}
                                 onChange={onChangePost}
                             />
                         </div>
                         <button
                             type="submit"
                             className="btn btn-primary font-weight-bold text-uppercase d-block w-100" 
                         > Editar Post</button>
                     </form>

                 </div>
             </div>
        </div>
    </div>
     );
}
 
export default EditarPost;