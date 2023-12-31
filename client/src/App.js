import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/** import components */
import Username from './pages/username';
import Register from './pages/register';
import Profile from './pages/profile';
import PasswordRecovery from './pages/recovery';
import Password from './pages/password';
import PasswordReset from './pages/reset';
import PageNotFound from './pages/pageNotFound';

/** routes */
const router = createBrowserRouter([
  { 
    path: '/username',
    element: <Username />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/password',
    element: <Password />
  },
  {
    path: '/recover-password',
    element: <PasswordRecovery />
  },
  {
    path: '/reset-password',
    element: <PasswordReset />
  },
  {
    path: '/*',
    element: <PageNotFound />
  },
])


function App() {
  return (
    <main className="App">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
