import { Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import NotFount from "./pages/NotFount";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import API from "./components/API";
import SinglePage from "./components/SinglePage";
import AddProduct from "./components/AddProduct";
import AllProducts from "./pages/AllProducts";

const App = () => {
  const HomeLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  // const DashboardLayout = () => {
  //   return (
  //     <>
  //       <TopBar />
  //       <div className="flex">
  //         <Sidebar />
  //         <Outlet />
  //       </div>
  //     </>
  //   );
  // };

  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/service",
          element: <Service />,
        },
      ],
    },
    // {
    //   path: "/dashboard",
    //   element: <DashboardLayout />,
    //   children: [
    //     {
    //       path: "",
    //       element: <DashboardHome />,
    //     },
    //     {
    //       path: "/dashboard/user-management",
    //       element: <Usermanagement />,
    //     },
    //   ],
    // },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/signin",
      element: <SigninPage />,
    },
    {
      path: "/add-product",
      element: <AddProduct />,
    },
    {
      path: "/get-all-products",
      element: <AllProducts />,
    },
    {
      path: "/api",
      element: <API />,
    },
    {
      path: "/post/:id",
      element: <SinglePage />,
    },
    {
      path: "*",
      element: <NotFount />,
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFount />} />
      </Routes> */}
    </>
  );
};

export default App;
