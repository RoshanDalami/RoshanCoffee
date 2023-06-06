import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Gift from './pages/Gift';
import Order from './pages/Order';
import Pay from './pages/Pay';
import Store from './pages/Store';

const route = createBrowserRouter([
  {
    path : '/',
    element: <RootLayout/>,
    children:[
      {
        index:true , element:<Home/>
      },
      {
        path:'gift',
        element:<Gift/>
      },{
        path:'order',
        element:<Order/>,
      },{
        path:'pay',
        element:<Pay/>
      },{
        path:'store',
        element: <Store/>
      }
    ]
  }
])


function App() {


  return (
    <>
     <RouterProvider router={route}/>
    </>
  )
}

export default App
