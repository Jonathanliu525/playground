import {
  Route,
  Switch,
  useParams,
  useRouteMatch,
  Link,
} from 'react-router-dom';
export default function ReactHooks() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>This page is all about react hooks play</h2>
      <ul>
        <li>
          <Link to={`${match.url}/useRef`}>useRef</Link>
        </li>
        <li>
          <Link to={`${match.url}/useEffect`}>useEffect</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.url}/useRef`}>
          <div>This is example of useRef</div>
        </Route>
      </Switch>
    </div>
  );
}
