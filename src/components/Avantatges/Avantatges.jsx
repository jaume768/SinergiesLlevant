import React from 'react';
import './Avantatges.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faHandshake, faGavel, faUserGraduate, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const avantatgesData = [
    {
        id: 1,
        icon: faBoxOpen,
        title: 'Accés a recursos compartits',
        description:
            'Formar part d’una xarxa d’empreses afiliades permet accedir a una àmplia gamma de recursos sense la necessitat d’invertir-hi de manera individual, incloent-hi assessorament laboral, formació i gestió de projectes.'
    },
    {
        id: 2,
        icon: faHandshake,
        title: 'Millor poder de negociació',
        description:
            'Aconsegueix preus més competitius en comprar conjuntament un volum més gran d’estoc, millorant les condicions i la competitivitat al mercat.'
    },
    {
        id: 3,
        icon: faGavel,
        title: 'Suport en compliment normatiu',
        description:
            'Rep assessorament especialitzat en àrees com la qualitat, la sostenibilitat i les exigències laborals, i assegura el compliment de la legislació vigent.'
    },
    {
        id: 4,
        icon: faUserGraduate,
        title: 'Oportunitats de formació i desenvolupament',
        description:
            'Accedeix a formacions en cultura empresarial i desenvolupament de competències clau, millorant la motivació i la preparació del teu equip.'
    },
    {
        id: 5,
        icon: faNetworkWired,
        title: 'Networking i col·laboració',
        description:
            'Comparteix experiències i contactes amb altres empreses, generant aliances estratègiques i projectes conjunts que beneficiïn a tots els implicats.'
    }
];

const Avantatges = () => {
    return (
        <section className="avantatges-progress-steps">
            <h2>Avantatges</h2>
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