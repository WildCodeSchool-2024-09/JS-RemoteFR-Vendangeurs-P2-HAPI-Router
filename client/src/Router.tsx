import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import CharactersPage from "./pages/CharactersPage";
import ChooseHouseHome from "./pages/ChooseHouseHome";
import Copyright from "./pages/Copyright";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Quiz from "./pages/Quiz";
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
        element: (
          <>
            <Header />
            <Homepage />
          </>
        ),
      },
      {
        path: "/characters",
        element: (
          <>
            <Header />
            <CharactersPage />
          </>
        ),
      },
      {
        path: "/spells",
        element: (
          <>
            <Header />
            <SpellsPage />
          </>
        ),
      },
      { path: "/quiz/:house", element: <Quiz /> },
      {
        path: "/copyright",
        element: (
          <>
            <Header />
            <Copyright />
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <PageNotFound />
          </>
        ),
      },
    ],
  },
]);
