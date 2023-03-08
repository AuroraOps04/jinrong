import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Contract from './views/Contract';
import Debt from './views/Debt';
import { Index } from './views/Index';
import { Login } from './views/Login';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/debt',
    element: <Debt />,
  },
  {
    path: '/contract',
    element: <Contract />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
