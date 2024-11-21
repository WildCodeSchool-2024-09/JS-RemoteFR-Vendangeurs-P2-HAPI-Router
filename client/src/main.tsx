// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./Router";
import ThemeProvider from "./context/theme";

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={mainRouter} />
    </ThemeProvider>
  </StrictMode>,
);
