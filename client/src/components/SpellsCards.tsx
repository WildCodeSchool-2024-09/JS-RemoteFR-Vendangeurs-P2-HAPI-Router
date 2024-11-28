import missingSpellImage from "../assets/images/missing_spell.svg";
import "./SpellsCards.css";

interface SpellsProps {
  id: string;
  type: string;
  attributes: {
    name: string;
    effect?: string;
    image?: string;
  };
}

interface SpellsCardsProps {
  spell: SpellsProps;
}

export default function SpellsCards({ spell }: SpellsCardsProps) {
  return (
    <div key={spell.attributes.name} className="spellCard">
      <picture className="spellPicture">
        <img
          src={spell.attributes?.image || missingSpellImage}
          alt={spell.attributes.name}
          id="spellImage"
        />
      </picture>

      <section className="spellBody">
        <div className="spellCardName">
          <h3 id="spellName">Name : </h3>
          <p>{spell.attributes.name}</p>
        </div>
        <div className="spellCardBody">
          <h3 id="spellEffect">Effect : </h3>
          <p>{spell.attributes.effect}</p>
        </div>
      </section>
    </div>
  );
}
