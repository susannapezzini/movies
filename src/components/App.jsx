import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import '../styles/App.scss';
import Movie from './Movie.jsx';
import List from './List.jsx';


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <MoviesList />
          </Route>
          <Route path="/movie">
            <ShowMovie />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function MoviesList() {
  return (
    <div>
      <List />
    </div>
  );
}

function ShowMovie() {
  return (
    <div>
      <Movie />
    </div>
  );
}


