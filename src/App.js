import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    // errorElement: <Error />,

    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <Watchpage /> },
    ],
  },
]);

// if the path is "/" the body will be rendered
//  path have two children   maincontainer and watch page (to make that dynamic we need to use ...outlet....)
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />

        <RouterProvider router={AppRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
