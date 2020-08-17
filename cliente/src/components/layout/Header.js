import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar nabvar-expand-lg navbar-dark- bg-primary justify-content-between ">
            <div className="container ">
                <h1 className=""> 
                    <Link to={'/'} className="text-light">
                        MY BLOG
                    </Link>
                </h1>
            </div>
        </nav>
     );
}
 
export default Header;