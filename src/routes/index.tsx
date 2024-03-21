import { FC, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy load the components
const Home = React.lazy(() => import("@routes/home/home"));
const Dashboard = React.lazy(() => import("@routes/dashboard/dashboard"));
const Login = React.lazy(() => import("@routes/login/login"));
const Contact = React.lazy(() => import("@routes/contact/contact"));
const MainLayout = React.lazy(
  () => import("@components/general/layouts/main/main-layout")
);

const AppRouter: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <MainLayout />
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      ),
    },
  ]);
  
  return <RouterProvider router={router} />;
};

export default AppRouter;
