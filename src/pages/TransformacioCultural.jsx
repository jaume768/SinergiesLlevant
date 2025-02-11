import React from 'react';
import './TransformacioCultural.css';
import { FaUsers, FaClipboardCheck, FaChartLine, FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import { useTranslation, Trans } from 'react-i18next';

const TransformacioCultural = () => {
    const { t } = useTranslation();
    const blocks = t('transformacioCultural.blocks', { returnObjects: true });

    return (
        <section className="transformacio-cultural-section">
            <div className="transformacio-container">
                <h2 className="transformacio-title">{t('transformacioCultural.title')}</h2>
                {blocks.map((block, index) => (
                    <div className="transformacio-block" key={index}>
                        <h3>
                            {(() => {
                                if (block.title.toLowerCase().includes('transformació')) return <FaUsers className="icon" />;
                                if (block.title.toLowerCase().includes('formació')) return <FaLightbulb className="icon" />;
                                if (block.title.toLowerCase().includes('pluri')) return <FaHandsHelping className="icon" />;
                                if (block.title.toLowerCase().includes('comitè')) return <FaClipboardCheck className="icon" />;
                                if (block.title.toLowerCase().includes('accés')) return <FaChartLine className="icon" />;
                                if (block.title.toLowerCase().includes('servei comercial')) return <FaLightbulb className="icon" />;
                                return null;
                            })()}
                            {" "}{block.title}
                        </h3>
                        {block.description && <p>{block.description}</p>}
                        {block.extra && (
                            <p>
                                <Trans
                                    i18nKey={`transformacioCultural.blocks.${index}.extra`}
                                    components={{ strong: <strong /> }}
                                />
                            </p>
                        )}
                        {block.list && (
                            <ul>
                                {block.list.map((item, i) => (
                                    <li key={i}>
                                        <FaClipboardCheck className="list-icon" /> {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {block.phases && (
                            <>
                                {block.fasesTitle && <h3>{block.fasesTitle}</h3>}
                                <ol>
                                    {block.phases.map((phase, i) => (
                                        <li key={i}><strong>{phase}</strong></li>
                                    ))}
                                </ol>
                            </>
                        )}
                        {block.examples && (
                            <>
                                {block.examples.map((ex, i) => (
                                    <p key={i}>
                                        <strong>{i === 0 ? 'Exemple 1:' : 'Exemple 2:'}</strong> {ex}
                                    </p>
                                ))}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TransformacioCultural;