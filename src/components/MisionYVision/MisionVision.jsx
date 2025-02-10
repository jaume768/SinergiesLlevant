import React from "react";
import "./MisionVision.css";
import { useIntersection } from '../../hooks/useIntersection';

const MisionVision = () => {
    const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });

    return (
        <div
            ref={sectionRef}
            className={`mision-vision-container fade-in-section ${isVisible ? 'fade-in-active' : ''}`}
        >
            <div className="mision-block">
                <h2>MISIÓ</h2>
                <p>
                    Ser un referent en la creació de SINERGIES entre empreses, compartint recursos, coneixements i serveis. En un ambient de confiança, transparència i responsabilitat, garantint així el creixement conjunt i sostenible en un entorn empresarial dinàmic i exigent.
                </p>
            </div>

            <div className="vision-block">
                <h2>VISIÓ</h2>
                <p>
                    Facilitar l'accés a una xarxa de serveis i recursos per a empreses afiliades, promovent un model de col·laboració que impulsi la innovació i faciliti el canvi cultural i generacional (successió).
                </p>
            </div>
        </div>
    );
};

export default MisionVision;