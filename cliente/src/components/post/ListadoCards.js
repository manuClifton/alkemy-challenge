import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import postContext from '../../context/posts/postContext';
import PostCompleto from './PostCompleto';

const ListadoCard = () => {

    //obtengo state
    const postsContext = useContext(postContext);
    const { posts, obtenerPosts } = postsContext;

    useEffect(() =>{
        obtenerPosts();
    }, []);
    return ( 

        <ul className="listado-post">
            {posts.length === 0 
                ? (<li className="text-center">No hay ningun post</li>)
                : (
                    <li>
                        {posts.map(post =>(
                            <PostCompleto 
                                key={post.id}
                                post={post}
                            />
                        ))}
                    </li>
                )
            }
            
        </ul>
     );
}
 
export default ListadoCard;