import { useEffect, useState } from "react";
import "./SpellsPage.css";
import missingSpellImage from "../assets/images/missing_spell.svg";

interface AttributesProps {
  name: string;
  effect?: string;
  image?: string;
}
interface SpellProps {
  id: string;
  type: string;
  attributes: AttributesProps;
}

export default function SpellsPage() {
  const [spells, setSpells] = useState<SpellProps[] | null>(null);

  useEffect(() => {
    fetch("https://api.potterdb.com/v1/spells")
      .then((response) => response.json())
      .then((data) => setSpells(data.data))
      .catch((error) => console.error(error));
  }, []);

  if (!spells) {
    return <div className="loadingAPI">Loading...</div>;
  }

  return (
    <section className="spellsCards">
      {spells.map((spell) => (
        <div key={spell.attributes.name} className="spellCard">
          <picture className="spellPicture">
            <img
              src={spell.attributes?.image || missingSpellImage}
              alt={spell.attributes.name}
              id="spellImage"
            />
          </picture>

          <section className="spellBody">
            <div className="cardName">
              <h3>Name : {spell.attributes.name}</h3>
            </div>
            <div className="spellCardBody">
              <h3>Effect : {spell.attributes.effect}</h3>
            </div>
          </section>
        </div>
      ))}
    </section>
  );
}
