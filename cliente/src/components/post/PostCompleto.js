import React from 'react';
import {Link} from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'; // formatea las fechas
import {es} from 'date-fns/locale'; // cambia el idioma de el date

const PostCompleto = ({post}) => {

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
                                        <Link to={`/editar-post/:${post.id}`}
                                            className="btn btn-info nuevo-post d-block d-md-inline-block m-1"
                                        > Editar Post</Link>
                                        <Link to={"/nuevo-post"}
                                            className="btn btn-warning nuevo-post d-block d-md-inline-block m-1"
                                        > Eliminar &times;</Link>
                                    </div>   
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
     );
}
 
export default PostCompleto;