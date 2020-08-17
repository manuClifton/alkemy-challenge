import React, {useState} from 'react';

const EditarPost = () => { 

       //state para el post
       const [posteo, guardarPost] = useState({
        titulo: '',
        contenido: '',
    })

    return ( 
        <div className="row justify-content-center mt-5">
        <div className="col-md-8">
             <div className="card">
                 <div className="card-body">
                     <h2 className="text-center mb-4 font-weight-bold">
                         Editar Post
                     </h2>
                    
                     <form
                         
                     >
                         <div className="form-group">
                             <label>Titulo </label>
                             <input 
                                 type="text"
                                 className="form-control"
                                 placeholder="Titulo"
                                 name="titulo"
                             />
                         </div>

                         <div className="form-group">
                             <label>Contenido</label>
                             <textarea 
                                 type="text"
                                 className="form-control"
                                 placeholder="Contenido"
                                 name="contenido"
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