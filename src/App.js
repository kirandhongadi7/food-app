
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Error from "./components/Error";



const App = () => {
  
  return(
    <> 
    <div >
      <Header/>
      <Outlet />
    </div>

    </>
  )
  
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App/>,

    children: [
  {
    path: "/",
    element: <Body />
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/menu",
    element: <Menu />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  ],


    errorElement: <Error />
  },
 

])



// Get the root element
const container = document.getElementById("root");

// Create a root
const root = createRoot(container);

// Render the app
root.render(<RouterProvider router={appRouter}/>);
