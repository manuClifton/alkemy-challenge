import React from 'react';
import {Link} from 'react-router-dom';
import ListadoPost from '../post/ListadoPost';

const Sidebar = () => {
    return ( 
        <div className="aside">
            <h1>Past<span>Post</span></h1>

            <div className="">
                <ListadoPost bandera={true}/>
            </div>

            <Link to={"/nuevo-post"}
               className="btn btn-primary nuevo-post d-block d-md-inline-block"
               > Agregar Post &#43;</Link>

        </div>
     );
}
 
export default Sidebar;