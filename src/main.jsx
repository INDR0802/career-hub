import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import JobDetails from "./Pages/JobDetails";
import { Toaster } from "react-hot-toast";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data/jobs.json"),
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails />,
        loader: () => fetch("/data/jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Toaster/>
  </>
);
