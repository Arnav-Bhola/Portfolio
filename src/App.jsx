import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/layouts/RootLayout/RootLayout";
import HomePage from "./pages/HomePage/Home";
import ErrorPage from "./pages/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

