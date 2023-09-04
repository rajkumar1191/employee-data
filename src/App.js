import { useRoutes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import People from "./components/People/People";
import NoMatch from "./components/NoMatch/NoMatch";
function App() {
  let routes = [
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { index: true, element: <People /> },
        {
          path: "/people",
          element: <People />,
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];

  let elements = useRoutes(routes);
  return <div className="App">{elements}</div>;
}

export default App;
