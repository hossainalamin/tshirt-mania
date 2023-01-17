import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order'
function App() {
  const router = createBrowserRouter([
    {path : '/', element:<Main></Main>,
    children:[
      {path:'/Home',element:<Home></Home>},
      {path:'/order',element:<Order></Order>},
      // {path:'/Home',element:<Home></Home>},
    ]}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
