import React from 'react';
import {Link} from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'; // formatea las fechas
import {es} from 'date-fns/locale'; // cambia el idioma de el date

const Post = ({post}) => {

    return ( 
        <li className="text-center">
            <p>{formatDistanceToNow(new Date(post.fecha), {locale: es})} - {post.titulo}</p>
        </li>
     );
}
 
export default Post;