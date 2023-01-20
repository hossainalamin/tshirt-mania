import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order'
import Grandpa from './Components/Grandpa/Grandpa';
function App() {
  const router = createBrowserRouter([
    {path : '/', element:<Main></Main>,
    children:[
      {
        path:'/',
        loader : () => fetch('tshirts.json'),
        element:<Home></Home>
      },
      {path:'/order',element:<Order></Order>},
      {path:'/grandpa',element:<Grandpa></Grandpa>},
    ]}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
