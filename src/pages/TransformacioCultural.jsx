import React from 'react';
import './TransformacioCultural.css';
import { FaUsers, FaClipboardCheck, FaChartLine, FaHandsHelping, FaLightbulb } from 'react-icons/fa';

const TransformacioCultural = () => {
    return (
        <section className="transformacio-cultural-section">
            <div className="transformacio-container">
                <h2 className="transformacio-title">SERVEIS D'AFILIACIÓ</h2>

                <div className="transformacio-block">
                    <h3>
                        <FaUsers className="icon" /> Comitè Empresarial
                    </h3>
                    <p>
                        L'objectiu d'aquest servei és contextualitzar la situació econòmica i avaluar possibles aliances estratègiques en àmbits com la inversió i la possibilitat de compartir maquinària, infraestructures, etc.
                    </p>
                    <p>
                        Hi ha la possibilitat, a títol voluntari, que cada empresa comparteixi la seva casuística empresarial i les seves necessitats/limitacions perquè altres empresaris/àries puguin aportar la seva experiència en diversos àmbits de direcció empresarial i traçar un pla d'acció amb seguiment semestral.
                    </p>
                    <p>
                        S'estableix un cronograma anual a principis d'any amb les dates de les reunions mensuals tancades i temàtiques d'interès general (innovació, subvencions, anàlisi sectorial, etc.), amb la possibilitat d'analitzar cada mes les diferents necessitats d'alguna de les empreses (mínim 2 pics a l'any).
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaChartLine className="icon" /> Accés a Borsa de Treballadors
                    </h3>
                    <p>
                        S'habilitarà una plataforma on les empreses afiliades podran contractar treballadors/ores d'altres empreses que es trobin en situació d'atur, en període de vacances o interessats en la pluri-ocupació.
                    </p>
                    <p>
                        L'afiliació centralitzarà aquest procés. És necessari incloure empreses amb temporada alta a l'hivern per garantir continuïtat.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaHandsHelping className="icon" /> Pluri-ocupació
                    </h3>
                    <p>
                        <strong>Exemple 1:</strong> Un/a treballador/a que fa feina en un magatzem de matí (de dilluns a divendres) i que, en veure una oferta de feina en un restaurant els divendres a la vesprada i dissabtes, pot optar a aquell lloc vacant si els horaris són compatibles.
                    </p>
                    <p>
                        <strong>Exemple 2:</strong> Un/a treballador/a que tenia un contracte fix discontinu, fent feina 7-8 mesos de temporada i, coordinant horaris, li s'ofereix fer 20 hores en dues empreses (amb contracte fix a temps parcial), passant a fer feina 12 mesos en lloc de 7-8 i la resta en atur.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaClipboardCheck className="icon" /> Gestió Integral del Projecte de Formació Dual (Sector Agroalimentari)
                    </h3>
                    <p>
                        L'afiliació gestionarà projectes de <strong>FORMACIÓ DUAL</strong> en col·laboració amb l'Acadèmia Algar per facilitar l'accés a contractes subvencionats.
                    </p>
                    <p>
                        <strong>PROJECTE NOVEMBRE 2025:</strong> Es donarà inici al primer projecte gestionat íntegrament per Sinergies Llevant SL. Es preveu l'incorporació de docents de reconegut prestigi que impartiran una formació teòrica adaptada a la casuística de les empreses inscrites.
                    </p>
                    <p>
                        Període màxim d'incorporació: maig 2025. S'establiran 3 mesos de classes teòriques amb visites a les empreses, seguits de 9 mesos de feina pràctica.
                    </p>
                    <p>
                        Aquests contractes estan subvencionats (més de 12.000€ per contracte). En acabar el contracte (1 any), hi ha la possibilitat de renovar o liquidar. Si es renova i es transforma a fix/fix-discontinu, s'accedeix a una bonificació de més de 100€ mensuals durant els propers 3 anys.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaLightbulb className="icon" /> Servei Comercial
                    </h3>
                    <p>
                        S'ofereix la possibilitat de serveis de vendes a sectors similars i complementaris. Per exemple, el comercial d'una indústria càrnia, en visitar cuines de restaurants i hotels, pot aprofitar per vendre carn, peix, productes elaborats o fruita i verdura.
                    </p>
                    <p>
                        Es planteja assumir el salari del comercial d'una empresa, compartit entre les diferents empreses que optin per aquest servei.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaLightbulb className="icon" /> Servei de Formació
                    </h3>
                    <p>
                        Aquest servei és fonamental, ja que les empreses han de potenciar el talent intern i adaptar els processos als nous temps. Permet una ràpida adaptació als canvis i la capacitació del personal cap a nous rols i funcions en el complex mercat laboral.
                    </p>
                    <p>
                        Es proposa l'opció d'assumir, entre totes les empreses afiliades, un/a formador/a intern (ja present a la plantilla). Aquest servei facilitarà l'assistència a cursos interns i la coordinació de formacions en funció del perfil i la competència que es vulgui potenciar.
                    </p>
                    <p>
                        Per exemple, si diverses empreses necessiten potenciar el <strong>lideratge</strong> dels seus comandaments intermedis, s'impartirà una formació comuna, compartint experiències entre perfils similars. Altres temes poden incloure: cultura empresarial, gestió d’equips, visió estratègica, gestió del temps, entre altres.
                    </p>
                    <p>
                        Les formacions internes pròpies de cada empresa es facturaran a part, donada l'adaptació del temari general a cada organització.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaClipboardCheck className="icon" /> Pla de Responsabilitat Social Corporativa (RSC)
                    </h3>
                    <p>
                        Es col·laborarà amb el SOIB, associacions i fundacions per impulsar projectes socials, dissenyant un pla d'acció específic per a cada empresa afiliada. L'objectiu és fomentar l'ocupació laboral i altres iniciatives d'impacte social.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaUsers className="icon" /> Transformació Cultural i Pla de Successió
                    </h3>
                    <p>Aquest servei, proporcionat per Càrnicas Sunyer, abarcarà:</p>
                    <ul>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Estructuració de plantilles
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Detecció de perfils gestors
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Formació en cultura empresarial i delegació de tasques
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Implicació en decisions estratègiques (ascensos, acomiadaments, reubicacions, etc.)
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Disseny d’un pla de compensació adaptat a cada empresa
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Revisió normativa segons el nombre de treballadors
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Altres serveis complementaris
                        </li>
                    </ul>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaChartLine className="icon" /> Fases del Projecte
                    </h3>
                    <ol>
                        <li>
                            <strong>Fase 1 (Auditoria):</strong> Avaluació de la situació actual de l'empresari, identificació i acceptació de la cultura i els valors de l'afiliació, revisió de l'estructura organitzativa i dels protocols interns, i anàlisi de la plantilla i dels processos per detectar perfils clau.
                        </li>
                        <li>
                            <strong>Fase 2 (Intervenció):</strong> Definició d'un pressupost revisable mensualment, priorització de l'eficiència en els processos i delegació de responsabilitats, i establiment de protocols i formacions àgils per a la base de la plantilla.
                        </li>
                        <li>
                            <strong>Fase 3 (Seguiment):</strong> Pactar hores d'intervenció periòdica per garantir l'autogestió de la plantilla, amb reunions trimestrals o semestrals segons les necessitats detectades.
                        </li>
                    </ol>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaHandsHelping className="icon" /> Altres Serveis
                    </h3>
                    <ul>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Servei de Fisioteràpia: Implementació d'un protocol de prevenció de baixes laborals amb sessions gratuïtes i descomptes en cites addicionals.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Servei Logístic: Projecte en fase inicial per oferir una empresa proveïdora de serveis de repartiment.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Assessorament Laboral: Orientat a millorar la gestió de permisos i prevenir conflictes laborals.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Assessorament en Eficiència Energètica: Identificació d'oportunitats d'estalvi i sostenibilitat.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Assessorament en Innovació Tecnològica: Avaluació del nivell tecnològic de l'empresa i recomanacions per millorar la seva competitivitat.
                        </li>
                    </ul>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaLightbulb className="icon" /> Serveis a Llarg Termini
                    </h3>
                    <p>
                        A mesura que l'afiliació creixi, s'hi aniran incorporant nous serveis amb plans d'acció anuals. Alguns dels futurs proveïdors podrien incloure:
                    </p>
                    <ul>
                        <li>Tècnic/a de prevenció de riscos</li>
                        <li>Tècnic/a de màrqueting</li>
                        <li>Tècnic/a de sostenibilitat</li>
                        <li>Tècnic/a d’innovació/IA</li>
                        <li>Tècnic/a de protecció de dades (LOPD)</li>
                        <li>Tècnic/a de qualitat</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default TransformacioCultural;