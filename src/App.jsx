import { RouterProvider, createHashRouter } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Hero from './Pages/Hero';
import Details from './Pages/Details';
import Products from './Pages/Products';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

const router = createHashRouter([
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
        path: '/:name/:product',
        element: <Details/>,
      }
    ]
  },
]);

function App() {

  return (
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  )
}

export default App
