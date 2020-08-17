import React, {useContext, useEffect} from 'react';
import postContext from '../../context/posts/postContext';
import Post from './Post';


const ListadoPost = () => {

    //obtengo state
    const postsContext = useContext(postContext);
    const { posts, obtenerPosts } = postsContext;

    useEffect(() =>{
        obtenerPosts();
    }, []);

    return ( 
        <ul className="listado-post">
            {posts.length === 0 
                ? (<li>No hay ningun post</li>)
                : (
                    posts.map(post =>(
                        <Post 
                            key={post.id}
                            post={post}
                        />
                    ))
                )
            }
            
        </ul>
     );
}
 
export default ListadoPost;