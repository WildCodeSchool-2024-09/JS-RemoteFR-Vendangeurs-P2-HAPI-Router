import "./Copyright.css";
import { useTheme } from "../context/theme";

export default function Copyright() {
  const { theme } = useTheme();
  return (
    <div className={`copyrights ${theme}`}>
      <h2 className="copyrightTitle">Copyright</h2>
      <h3 className="copyrightH3">TEAM</h3>
      <p>Penelope Teixeira</p>
      <p>Vincent Ching</p>
      <p>Jeremy Perez</p>
      <h3 className="copyrightH3">API</h3>
      <p>
        Characters :
        <a href="https://hp-api.herokuapp.com" className="apiLinks">
          {" "}
          https://hp-api.herokuapp.com
        </a>
      </p>
      <p>
        Spells :{" "}
        <a href="https://potterdb.com" className="apiLinks">
          https://potterdb.com
        </a>
      </p>
      <h3 className="copyrightH3">© Warner Bros</h3>
      <h3 id="JKR">© J.K.Rowling</h3>
    </div>
  );
}
