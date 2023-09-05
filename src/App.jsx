import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Hero from './Pages/Hero';
import Details from './Pages/Details';
import Products from './Pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Hero/>,
      },
      {
        path: '/:name',
        element: <Products/>,
      },
      {
        path: '/detalle/:name',
        element: <Details/>,
      }
    ]
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
