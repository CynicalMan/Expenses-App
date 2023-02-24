import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard , { dashboardAction, dashboardLoader} from "./views/Dashboard";
import Error from "./views/Error";
import Main, {mainLoader} from "./layouts/Main";
import { logoutAction } from './actions/Logout.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,  
        errorElement: <Error/>
      },
      {
        path: 'logout',
        action: logoutAction,
      }
    ]
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
