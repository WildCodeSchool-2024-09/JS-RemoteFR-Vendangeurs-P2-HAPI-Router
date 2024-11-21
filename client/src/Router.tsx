import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CharactersPage from "./pages/CharactersPage";
import ChooseHouseHome from "./pages/ChooseHouseHome";
import Homepage from "./pages/Homepage";
import SpellsPage from "./pages/SpellsPage";

export const mainRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <ChooseHouseHome />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/characters",
        element: <CharactersPage />,
      },
      {
        path: "/spells",
        element: <SpellsPage />,
      },
      {
        path: "*",
        element: <h1>Error 404</h1>,
      },
    ],
  },
]);
