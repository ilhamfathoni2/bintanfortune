import { createBrowserRouter } from "react-router-dom";
// screens
import App from "../App";
import Login from "../screens/auth/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login/admin",
    element: <Login />,
  },
]);
