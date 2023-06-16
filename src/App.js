import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
               <Home></Home>
            </Route>
            <Route exact path="/create">
               <Create></Create>
            </Route>
            <Route exact path="/blogs/:id">
               <BlogDetails />
            </Route>
            <Route exact path="/*">
               <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
