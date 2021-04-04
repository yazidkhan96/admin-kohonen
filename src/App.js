import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./config/Routes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {
            routes.map((url, i) => {
              return <Route component={url.component} path={url.path} exact key={i} />
            })
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
