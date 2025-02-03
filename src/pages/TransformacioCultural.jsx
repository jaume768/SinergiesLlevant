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
                        S’objectiu d’aquest servei és contextualitzar sa situació econòmica i avaluar possibles aliances estratègiques en àmbits com inversió i sa possibilitat de compartir maquinària, infraestructures, etc.
                    </p>
                    <p>
                        Hi ha sa possibilitat, a títol voluntari, que cada empresa comparteixi sa seva casuística empresarial i ses seves necessitats/limitacions perquè altres empresaris/àries puguin aportar sa seva experiència en diversos àmbits de Direcció empresarial i traçar un pla d’acció amb seguiment semestral.
                    </p>
                    <p>
                        S’estableix un cronograma anual a principis d’any amb ses dates de ses reunions mensuals tancades i temàtiques d’interès general (innovació, subvencions, anàlisi sectorial, etc.), amb sa possibilitat d’analitzar cada mes ses diferents necessitats d’alguna de ses empreses (mínim 2 pics a l’any).
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaChartLine className="icon" /> Accés a Borsa de Treballadors
                    </h3>
                    <p>
                        S’habilitarà una plataforma on ses empreses afiliades podran contractar treballadors/ores d’altres empreses que es trobin en situació d’atur, en període de vacances o interessats en es pluriempleu.
                    </p>
                    <p>
                        S’afiliació centralitzarà aquest procés. És necessari incloure empreses amb temporada alta a s’hivern per garantir continuïtat.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaHandsHelping className="icon" /> Pluriempleu
                    </h3>
                    <p>
                        <strong>Exemple 1:</strong> Un/a treballador/a que fa feina a un magatzem dematins (de dilluns a divendres) i que, en veure una oferta de feina a un restaurant els divendres vespre i dissabtes, pot optar a aquell lloc vacant per ser compatibles es seus horaris.
                    </p>
                    <p>
                        <strong>Exemple 2:</strong> Un/a treballador/a que tenia un contracte fix discontinu fent feina 7-8 mesos de temporada i, coordinant horaris, se li ofereix fer 20 hores a dues empreses (amb contracte fix a temps parcial), passant a fer feina 12 mesos en lloc de 7-8 i sa resta en atur.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaClipboardCheck className="icon" /> Gestió Integral des Projecte de Formació Dual (Sector Agroalimentari)
                    </h3>
                    <p>
                        S’afiliació gestionarà projectes de <strong>FORMACIÓ DUAL</strong> en col·laboració amb s’Acadèmia Algar per facilitar s’accés a contractes subvencionats.
                    </p>
                    <p>
                        <strong>PROJECTE NOVEMBRE 2025:</strong> Se donarà inici al primer projecte gestionat íntegrament per Sinergies Llevant SL. Se preveu s’incorporació de docents de reconegut prestigi que impartiran una formació teòrica adaptada a sa casuística de ses empreses inscrites.
                    </p>
                    <p>
                        Període màxim d’incorporació: maig 2025. S’establiran 3 mesos de classes teòriques amb visites a ses empreses, seguits de 9 mesos de feina pràctica.
                    </p>
                    <p>
                        Aquests contractes estan subvencionats (més de 12.000€ per contracte). En acabar es contracte (1 any), hi ha sa possibilitat de renovar o liquidar. Si se renova i se transforma a fix/fix-discontinu, s’accedeix a una bonificació de més de 100€ mensuals durant es propers 3 anys.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaLightbulb className="icon" /> Servei Comercial
                    </h3>
                    <p>
                        S’ofereix sa possibilitat de serveis de vendes a sectors similars i complementaris. Per exemple, es/la comercial d’una indústria càrnia, en visitar cuines de restaurants i hotels, pot aprofitar per vendre carn, peix, productes elaborats o fruita i verdura.
                    </p>
                    <p>
                        Se planteja assumir es salari des/la comercial d’una empresa, compartit entre ses diferents empreses que optin per aquest servei.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaLightbulb className="icon" /> Servei de Formació
                    </h3>
                    <p>
                        Aquest servei és fonamental, ja que ses empreses han de potenciar es talent intern i adaptar es processos als nous temps. Permet una ràpida adaptació als canvis i sa capacitació des personal cap a nous rols i funcions en es complex mercat laboral.
                    </p>
                    <p>
                        Se proposa s’opció d’assumir, entre totes ses empreses afiliades, un/a formador/a intern (ja present a sa plantilla). Aquest servei facilitarà s’assistència a cursos interns i sa coordinació de formacions en funció des perfil i competència que es vulgui potenciar.
                    </p>
                    <p>
                        Per exemple, si diverses empreses necessiten potenciar es <strong>lideratge</strong> des seus comandaments intermedis, s’impartirà una formació comuna, compartint experiències entre perfils similars. Altres temes poden incloure: cultura empresarial, gestió d’equips, visió estratègica, gestió des temps, entre d’altres.
                    </p>
                    <p>
                        Ses formacions internes pròpies de cada empresa se facturaran a part, donada s’adaptació des temari general a cada organització.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaClipboardCheck className="icon" /> Pla de Responsabilitat Social Corporativa (RSC)
                    </h3>
                    <p>
                        Se col·laborarà amb es SOIB, associacions i fundacions per impulsar projectes socials, dissenyant un pla d’acció específic per a cada empresa afiliada. S’objectiu és fomentar s’ocupació laboral i altres iniciatives d’impacte social.
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
                            <FaClipboardCheck className="list-icon" /> Revisió normativa segons es nombre de treballadors
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Altres serveis complementaris
                        </li>
                    </ul>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaChartLine className="icon" /> Fases des Projecte
                    </h3>
                    <ol>
                        <li>
                            <strong>Fase 1 (Auditoria):</strong> Avaluació de sa situació actual de s’empresari, identificació i acceptació de sa cultura i valors de s’afiliació, revisió de s’estructura organitzativa i protocols interns, i anàlisi de sa plantilla i processos per detectar perfils clau.
                        </li>
                        <li>
                            <strong>Fase 2 (Intervenció):</strong> Definició d’un pressupost revisable mensualment, priorització de s’eficiència en es processos i delegació de responsabilitats, i establiment de protocols i formacions àgils per a sa base de sa plantilla.
                        </li>
                        <li>
                            <strong>Fase 3 (Seguiment):</strong> Pactar hores d’intervenció periòdica per garantir s’autogestió de sa plantilla, amb reunions trimestrals o semestrals segons ses necessitats detectades.
                        </li>
                    </ol>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaHandsHelping className="icon" /> Altres Serveis
                    </h3>
                    <ul>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Servei de Fisioteràpia: Implementació d’un protocol de prevenció de baixes laborals amb sessions gratuïtes i descomptes en cites addicionals.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Servei Logístic: Projecte en fase inicial per oferir una empresa proveïdora de serveis de repartiment.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Assessorament Laboral: Orientat a millorar sa gestió de permisos i prevenir conflictes laborals.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Assessorament en Eficiència Energètica: Identificació d’oportunitats d’estalvi i sostenibilitat.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Assessorament en Innovació Tecnològica: Avaluació des nivell tecnològic de s’empresa i recomanacions per millorar sa seva competitivitat.
                        </li>
                    </ul>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaLightbulb className="icon" /> Serveis a Llarg Termini
                    </h3>
                    <p>
                        A mesura que s’afiliació creixi, s’hi aniran incorporant nous serveis amb plans d’acció anuals. Alguns des futurs proveïdors podrien incloure:
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