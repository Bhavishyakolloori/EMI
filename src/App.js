import './App.css';
import Entrepreneurship from './components/Entrepreneurship/Entrepreneurship';
import EntrepreneurLogin from './components/Entrepreneur/EntrepreneurLogin';
import EntrepreneurRegister from './components/Entrepreneur/EntrepreneurRegister';
import MentorLogin from './components/Mentor/MentorLogin';
import MentorRegister from './components/Mentor/MentorRegister';
import InvestorLogin from './components/Investor/InvestorLogin';
import InvestorRegister from './components/Investor/InvestorRegister'; 
import Home from './components/Home/Home';
import RouteLayout from './components/RouteLayout';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router=createBrowserRouter(
    [
      {
        path:"/",
        element:<RouteLayout/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/Mentor",
            children:[
              {
                path:"Login",
                element:<MentorLogin/>
              },
              {
                path:"Register",
                element:<MentorRegister/>
              }
            ]
          },
          {
            path:"/Entrepreneurship",
            element:<Entrepreneurship/>,
          },
          { 
            path:"/Entrepreneur",
            children:[
              {
                path:"Login",
                element:<EntrepreneurLogin/>
              },
              {
                path:"Register",
                element:<EntrepreneurRegister/>
              }
            ]
          },
          {
            path:"/Investor",
            children:[
              {
                path:"Login",
                element:<InvestorLogin/>
              },
              {
                path:"Register",
                element:<InvestorRegister/>
              }
            ]
          }
        ]
      }
    ]
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;