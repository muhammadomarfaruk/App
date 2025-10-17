import User from './getUser/User';
import{createBrowserRouter ,RouterProvider} from "react-router-dom"
import './App.css';
import AddUser from './adduser/AddUser';
import Update from './updateuser/Update';



function App() {
  const route=createBrowserRouter ([
    {
      path:"/",
    element:<User/>
    },
    {
      path:"/add",
      element:<AddUser/>
    },
    {
      path:"/update/:_id",
      element:<Update/>
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
