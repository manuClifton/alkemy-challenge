import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import postContext from '../../context/posts/postContext';
        
const PostCompleto = ({post}) => {

    //obtengo state
    const postsContext = useContext(postContext);
    const { postActual, eliminarPost} = postsContext;

    //Eliminar post
 /*    const onClickElimninar = () =>{
        eliminarPost(post.id)
    } */

    return ( 
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-1 font-weight-bold">
                        {post.titulo}
                        </h2>
                        <p>{post.contenido}</p>   
                        <div className="botonesCard">
                        <Link
                            onClick={()=>postActual(post.id)}
                            to={`/editar-post/:${post.id}`}
                            className="btn btn-info nuevo-post d-block d-md-inline-block m-1"
                        > Editar Post
                        </Link>
                        <button
                            onClick={()=>eliminarPost(post.id)}
                            className="btn btn-warning nuevo-post d-block d-md-inline-block m-1"
                        > Eliminar &times;</button>
                    </div>   
                    </div> 
                </div>
            </div>
        </div>
     );
}
 
export default PostCompleto;