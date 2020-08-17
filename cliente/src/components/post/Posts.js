import React from 'react';
import Sidebar from '../layout/Sidebar';
import ListadoCards from '../post/ListadoCards';

const Posts = () => {
    return ( 
    <div className="contenedor-app">    
        <Sidebar/>
        <div className="seccion-principal">

            <main>
                    <h1>desde main</h1>
                    <ListadoCards />
            </main>
        </div>
    </div>
     );
}
 
export default Posts;