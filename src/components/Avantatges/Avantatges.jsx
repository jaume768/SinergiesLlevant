import React from 'react';
import './Avantatges.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faHandshake, faGavel, faUserGraduate, faNetworkWired, faEye } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const avantatgesData = [
    {
        id: 1,
        icon: faBoxOpen,
        title: 'Accés a recursos compartits',
        description: 'Accedeix a recursos com assessorament laboral, formació i gestió de projectes sense inversions individuals.'
    },
    {
        id: 2,
        icon: faHandshake,
        title: 'Millor poder de negociació',
        description: 'Obtingues millors preus comprant en grup i millora la competitivitat al mercat.'
    },
    {
        id: 3,
        icon: faGavel,
        title: 'Suport en compliment normatiu',
        description: 'Rep suport per garantir el compliment de la legislació en qualitat i sostenibilitat.'
    },
    {
        id: 4,
        icon: faUserGraduate,
        title: 'Oportunitats de formació i desenvolupament',
        description: 'Participa en formacions per millorar les competències i la motivació del teu equip.'
    },
    {
        id: 5,
        icon: faNetworkWired,
        title: 'Networking i col·laboració',
        description: 'Crea aliances estratègiques i projectes amb altres empreses.'
    },
    {
        id: 6,
        icon: faEye,
        title: 'Visibilitat i reputació',
        description: 'Millora la reputació i posiciona la teva empresa com un agent responsable i compromès.'
    }
];

const Avantatges = () => {
    return (
        <section className="avantatges-progress-steps">
            <h2>AVANTATGES</h2>
            <div className="steps-container">
                {avantatgesData.map((avantatge, index) => (
                    <ProgressStep key={avantatge.id} step={avantatge} index={index + 1} />
                ))}
            </div>
        </section>
    );
};

const ProgressStep = ({ step, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <div ref={ref} className={`step-item ${inView ? 'visible' : ''}`}>
            <div className="step-indicator">
                <span className="step-number">{index}</span>
                <FontAwesomeIcon icon={step.icon} className="step-icon" />
            </div>
            <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </div>
        </div>
    );
};

export default Avantatges;