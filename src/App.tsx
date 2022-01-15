import React, { Suspense, lazy, Fragment } from "react";
// React Routing Dom Library
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// Components
import Loader from "./components/Skeleton/Loader";
// Dashboard Page
import Dashboard from "./pages/Home/Dashbard";
// Custom App Style File
import "./App.css";
// Dynamic İmports(Code Splittings)
const UserDetails = lazy(() => import("./pages/User/UserDetail"));
const PostDetails = lazy(() => import("./pages/Post/PostDetail"));

const App = () => {

  return (
    <Router>
      <Fragment>
          <Suspense fallback={<><Loader /></>}>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/user/:id" exact component={UserDetails} />
                <Route path="/user/:id/:postId" component={PostDetails} />
                <Redirect to="/" />
            </Switch>
          </Suspense>
      </Fragment>
    </Router>
  );
};

export default App;