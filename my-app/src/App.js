import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import ItemList from "./pages/ItemList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      //outlet에 표시될 부분
      { index: true, element: <Main/>},
      { path: "/products/list", element: <ItemList/>},
      { path: "/bookmark", element: <ItemList/>}
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
