import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './routes/Route';

function App() {
  return (
    <>
       <RouterProvider router={router}></RouterProvider>
       <Toaster/>
    </>
  );
}

export default App;
