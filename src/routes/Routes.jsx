import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ChefLayout from "../layout/ChefLayout";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Blog/Blog";
import ErrorPage from "../pages/errorPage/errorPage";
import Terms from "../shared/Terms/Terms";
import About from "../About/About";


const router = createBrowserRouter([
    {
      path:'/',
      element:<LoginLayout></LoginLayout>,
      children:[
        {
          path:"/",
          element:<Navigate to={'/home'}></Navigate>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/terms',
          element:<Terms></Terms>
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    },
    {
      path: "/home",
      element: <Main></Main>
    },
    
    {
      path:'/chefRecipies/:id',
      element:<PrivateRoute><ChefLayout></ChefLayout></PrivateRoute>,
      loader:({params})=>fetch (`http://localhost:5000/chefs/${params.id}`)
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
  ]
  );

  export default router;