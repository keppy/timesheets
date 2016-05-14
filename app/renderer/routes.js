import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import JobsPage from './containers/JobsPage';
import ProjectsPage from './containers/ProjectsPage';
import GithubPage from './containers/GithubPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/jobs" component={JobsPage} />
    <Route path="/projects" component={ProjectsPage} />
    <Route path="/github" component={GithubPage} />
  </Route>
);
