import { NavLink } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <section className="notFound">
      <div className="backgroundDark">
        <h3>Error 404</h3>
        <h3>Page not found</h3>
        <h4>Are you lost?</h4>
        <h4>Ask the Marauder's Map</h4>
        <h4> to find your way back to home</h4>
        <button type="button" className="marauderButton">
          <NavLink to="/home" className="navlinks">
            Ask Marauder's Map
          </NavLink>
        </button>
      </div>
    </section>
  );
}
