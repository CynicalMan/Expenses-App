import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard , { dashboardAction, dashboardLoader} from "./views/Dashboard";
import Error from "./views/Error";
import ExpensesPage, { expensesLoader,expensesAction } from "./views/ExpensesPage";
import BudgetPage, { budgetAction, budgetLoader } from "./views/BudgetPage";
import Main, {mainLoader} from "./layouts/Main";
import { logoutAction } from './actions/Logout.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteBudget } from "./actions/delete";

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
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error/>,
        children: [
          {
            path: "delete",
            action: deleteBudget
          }
        ]
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
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
