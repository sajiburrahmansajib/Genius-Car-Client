import { RouterProvider } from 'react-router-dom';
import routes from './Router/Routes/Routes';


function App() {

  return (
    <div data-theme="cupcake" className='max-w-screen-xl mx-auto'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
