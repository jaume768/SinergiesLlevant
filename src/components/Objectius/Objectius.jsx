import React from 'react';
import './Objectius.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faChartLine, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useIntersection } from '../../hooks/useIntersection';

const objectiusData = [
    {
        id: 1,
        icon: faHandshake,
        title: 'FOMENTAR LA COL·LABORACIÓ',
        text: 'Promoure un model de treball en xarxa que faciliti la cooperació entre empreses afiliades, creant un ecosistema on es comparteixen recursos i coneixements.'
    },
    {
        id: 2,
        icon: faChartLine,
        title: 'MILLORAR LA COMPETITIVITAT',
        text: 'Dotar les PIMES de serveis integrats per afrontar els reptes del mercat, assegurant així el compliment de les exigències legals i garantint un futur amb millors garanties.'
    },
    {
        id: 3,
        icon: faLeaf,
        title: 'PROMOURE LA SOSTENIBILITAT',
        text: 'Impulsar pràctiques empresarials que fomentin la Responsabilitat Social Corporativa (RSC) i la sostenibilitat, contribuint així al benestar integral dels treballadors i de la comunitat en general.'
    }
];

const Objectius = () => {
    const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });

    return (
        <section
            ref={sectionRef}
            className={`objectius-section fade-in-section ${isVisible ? 'fade-in-active' : ''}`}
        >
            <h2 className="objectius-title">OBJECTIUS</h2>

            <div className="objectius-grid">
                {objectiusData.map((item) => (
                    <div className="objectiu-card" key={item.id}>
                        <FontAwesomeIcon icon={item.icon} className="objectiu-icon" />
                        <h3 className="objectiu-title-card">{item.title}</h3>
                        <p className="objectiu-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Objectius;