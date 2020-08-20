import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import Posts from './components/post/Posts';
import NuevoPost from './components/post/NuevoPost';
import EditarPost from './components/post/EditarPost';

import PostState from './context/posts/postState';




function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <PostState>
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/nuevo-post" component={NuevoPost} />
            <Route exact path="/editar-post/:id" component={EditarPost} />
          </Switch> 
      </Router>
    </PostState>
  );
}

export default App;
