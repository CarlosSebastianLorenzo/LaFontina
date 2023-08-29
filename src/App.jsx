import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Layouts/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Header />
      }
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
