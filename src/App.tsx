import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Login } from './views/Login';
const Index = () => <h1>123</h1>;

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Index />,
  },
  {},
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
