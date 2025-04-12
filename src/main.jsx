import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Register from "./components/Register.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import ItemContainer from "./components/ItemContainer.jsx";
import AddNotes from "./components/AddNotes.jsx";
import ContextProvider from "./store/contextProvider.jsx";
const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/add", element: <AddNotes /> },
 
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "/app/about",
        element: <About />,
      },
      {
        path: "/app/notes",
        element: <ItemContainer />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
