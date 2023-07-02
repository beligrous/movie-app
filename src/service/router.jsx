import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Movie from "../pages/MoviePage/Movie.jsx";
import Error from "../pages/ErrorPage/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  { path: "/:id", element: <Movie /> },
]);

export default router;
