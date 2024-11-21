import React, { useEffect, useState } from "react";
import trainImage from '../images/train.png';
import "./Homepage.css"

function Homepage() {
  const texts = [
    "Expelliarmus!",
    "Wingardium Leviosa!",
    "Avada Kedavra!",
    "Expecto Patronum!",
    "Lumos!",
    "Nox!",
    "Accio!",
    "Alohomora!"
  ];

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 5000); // Change visibility every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar">
        </nav>
      </header>
      <div className="content">
        <section className="section">
          <h2 className="section1H2"> HARRY POTTER UNIVERSE</h2>
          <p className="titleS2">Learn more about your favorite characters</p>
          <div>
            <img src={"https://ik.imagekit.io/hpapi/ron.jpg"} alt="Character" className="character-image" />
            <img src={"https://ik.imagekit.io/hpapi/harry.jpg"} alt="Character" className="character-image" />
            <img src={"https://ik.imagekit.io/hpapi/hermione.jpeg"} alt="Character" className="character-image" />
            <p className="titleS1">Learn more about your favorite characters</p>
          </div>
          <button className="center-button">Personnages</button>
        </section>
        <section className="section2">
          <h2>What would magic be without spells?</h2>
          <p> Venez découvrir les sorts de l’univers Harry Potter !</p>
          <div className={`random-text-container ${visible ? 'visible' : 'hidden'}`}>
            {texts.map((text, index) => (
              <span key={index} className="random-text">{text}</span>
            ))}
          </div>
          <button className="center-button">Sorts</button>
        </section>
        <section className="section3">
          <h2>Fun Facts</h2>
          <button className="center-button">Le saviez-vous ?</button>
        </section>
        <section className="section4">
          <div className="train-container">
            <img src={trainImage} alt="Train" className="train-image" />
            <div className="text-overlay">
              <h2 className="train-title">You want to test your knowledge?</h2>
              <button className="center-button2">Start the quiz</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Homepage;
