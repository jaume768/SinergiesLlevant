import React from 'react';
import './TransformacioCultural.css';
import { FaUsers, FaClipboardCheck, FaChartLine, FaHandsHelping, FaLightbulb } from 'react-icons/fa';

const TransformacioCultural = () => {
    return (
        <section className="transformacio-cultural-section">
            <div className="transformacio-container">
                <h2 className="transformacio-title">SERVICIOS DE AFILIACIÓN</h2>

                <div className="transformacio-block">
                    <h3>
                        <FaUsers className="icon" /> Comité Empresarial
                    </h3>
                    <p>
                        El objetivo de este servicio es contextualizar la situación económica y evaluar posibles alianzas estratégicas en ámbitos como inversión y posibilidad de compartir maquinaria, infraestructuras, etc.
                    </p>
                    <p>
                        Posibilidad, a título voluntario, de que cada empresa comparta su casuística empresarial y necesidades/limitaciones para que otros/as empresarios/as puedan aportar su experiencia en diversos ámbitos de Dirección empresarial y trazar un plan de acción con seguimiento semestral.
                    </p>
                    <p>
                        Se establece un cronograma anual a principios de año con las fechas de las reuniones mensuales cerradas y temáticas de interés general (innovación, subvenciones, análisis sectorial, etc), con la posibilidad de analizar cada mes las distintas necesidades de alguna de las empresas (mínimo 2 veces al año).
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaChartLine className="icon" /> Acceso a Bolsa de Trabajadores
                    </h3>
                    <p>
                        Se habilitará una plataforma donde las empresas afiliadas podrán contratar trabajadores/as de otras empresas que se encuentren en situación de desempleo, en período de vacaciones o interesados en el pluriempleo.
                    </p>
                    <p>
                        La afiliación centralizará este proceso. Es necesario incluir empresas con temporada alta en invierno para garantizar continuidad.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaHandsHelping className="icon" /> Pluriempleo
                    </h3>
                    <p>
                        <strong>Ejemplo 1:</strong> Trabajador/a que labora en una nave por las mañanas (de lunes a viernes) y que, al ver una oferta de trabajo en un restaurante los viernes por la noche y sábados, puede optar a dicha plaza vacante al ser compatibles sus horarios.
                    </p>
                    <p>
                        <strong>Ejemplo 2:</strong> Trabajador/a que tenía un contrato fijo discontinuo trabajando 7-8 meses de temporada y, coordinando horarios, se le ofrece trabajar 20 horas en dos empresas (con contrato fijo a tiempo parcial), pasando a trabajar 12 meses en lugar de 7-8 y el resto en paro.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaClipboardCheck className="icon" /> Gestión Integral del Proyecto de Formación Dual (Sector Agroalimentario)
                    </h3>
                    <p>
                        La afiliación gestionará proyectos de <strong>FORMACIÓN DUAL</strong> en colaboración con la Academia Algar para facilitar el acceso a contratos subvencionados.
                    </p>
                    <p>
                        <strong>PROYECTO NOVIEMBRE 2025:</strong> Se dará inicio al primer proyecto gestionado íntegramente por Sinergies Llevant SL. Se prevé la incorporación de docentes de reconocido prestigio que impartirán una formación teórica adaptada a la casuística de las empresas inscritas.
                    </p>
                    <p>
                        Periodo máximo de incorporación: mayo 2025. Se establecerán 3 meses de clases teóricas con visitas a las empresas, seguidos de 9 meses de trabajo práctico.
                    </p>
                    <p>
                        Dichos contratos están subvencionados (más de 12.000€ por contrato). Al finalizar el contrato (1 año), existe la posibilidad de renovar o liquidar. Si se renueva y se transforma a fijo/fijo-discontinuo, se accede a una bonificación de más de 100€ mensuales durante los próximos 3 años.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaLightbulb className="icon" /> Servicio Comercial
                    </h3>
                    <p>
                        Se ofrece la posibilidad de servicios de ventas en sectores similares y complementarios. Por ejemplo, el/la comercial de una industria cárnica, al visitar cocinas de restaurantes y hoteles, puede aprovechar para vender carne, pescado, productos elaborados o fruta y verduras.
                    </p>
                    <p>
                        Se plantea costear el salario del/la comercial de una empresa, compartido entre las diversas empresas que opten por este servicio.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaLightbulb className="icon" /> Servicio Formación
                    </h3>
                    <p>
                        Este servicio es fundamental, ya que las empresas deben potenciar el talento interno y adaptar los procesos a los nuevos tiempos. Permite una rápida adaptación a los cambios y la capacitación del personal hacia nuevos roles y funciones en el complejo mercado laboral.
                    </p>
                    <p>
                        Se ofrece la opción de costear, entre todas las empresas afiliadas, un/a formador/a interno (ya presente en la plantilla). Este servicio facilitará la asistencia a cursos internos y la coordinación de formaciones en función del perfil y competencia que se desee potenciar.
                    </p>
                    <p>
                        Por ejemplo, si varias empresas requieren potenciar el <strong>liderazgo</strong> de sus mandos intermedios, se impartirá una formación común, compartiendo experiencias entre perfiles similares. Otros temas pueden incluir: cultura empresarial, gestión de equipos, visión estratégica, gestión del tiempo, entre otros.
                    </p>
                    <p>
                        Las formaciones internas propias de cada empresa se facturarán aparte, dada la adaptación del temario general a cada organización.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaClipboardCheck className="icon" /> Plan de Responsabilidad Social Corporativa (RSC)
                    </h3>
                    <p>
                        Se colaborará con el SOIB, asociaciones y fundaciones para impulsar proyectos sociales, diseñando un plan de acción específico para cada empresa afiliada. El objetivo es fomentar la inserción laboral y otras iniciativas de impacto social.
                    </p>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaUsers className="icon" /> Transformación Cultural y Plan de Sucesión
                    </h3>
                    <p>Este servicio, proporcionado por Cárnicas Sunyer, abarcará:</p>
                    <ul>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Estructuración de plantillas
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Detección de perfiles gestores
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Formación en cultura empresarial y delegación de tareas
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Implicación en decisiones estratégicas (ascensos, despidos, reubicaciones, etc.)
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Diseño de un plan de compensación adaptado a cada empresa
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Revisión normativa según el número de trabajadores
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Otros servicios complementarios
                        </li>
                    </ul>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaChartLine className="icon" /> Fases del Proyecto
                    </h3>
                    <ol>
                        <li>
                            <strong>Fase 1 (Auditoría):</strong> Evaluación de la situación actual del empresario, identificación y aceptación de la cultura y valores de la afiliación, revisión de la estructura organizativa y protocolos internos, y análisis de la plantilla y procesos para detectar perfiles clave.
                        </li>
                        <li>
                            <strong>Fase 2 (Intervención):</strong> Definición de un presupuesto revisable mensualmente, priorización de la eficiencia en los procesos y delegación de responsabilidades, y establecimiento de protocolos y formaciones ágiles para la base de la plantilla.
                        </li>
                        <li>
                            <strong>Fase 3 (Seguimiento):</strong> Pactar horas de intervención periódica para garantizar la autogestión de la plantilla, con reuniones trimestrales o semestrales según las necesidades detectadas.
                        </li>
                    </ol>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaHandsHelping className="icon" /> Otros Servicios
                    </h3>
                    <ul>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Servicio de Fisioterapia: Implementación de un protocolo de prevención de bajas laborales con sesiones gratuitas y descuentos en citas adicionales.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Servicio Logístico: Proyecto en fase inicial para ofrecer una empresa proveedora de servicios de reparto.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Asesoramiento Laboral: Orientado a mejorar la gestión de permisos y prevenir conflictos laborales.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Asesoramiento en Eficiencia Energética: Identificación de oportunidades de ahorro y sostenibilidad.
                        </li>
                        <li>
                            <FaClipboardCheck className="list-icon" /> Asesoramiento en Innovación Tecnológica: Evaluación del nivel tecnológico de la empresa y recomendaciones para mejorar su competitividad.
                        </li>
                    </ul>
                </div>

                <div className="transformacio-block">
                    <h3>
                        <FaLightbulb className="icon" /> Servicios a Largo Plazo
                    </h3>
                    <p>
                        A medida que la afiliación crezca, se incorporarán nuevos servicios con planes de acción anuales. Algunos de los futuros proveedores podrían incluir:
                    </p>
                    <ul>
                        <li>Técnico/a de prevención de riesgos</li>
                        <li>Técnico/a de marketing</li>
                        <li>Técnico/a de sostenibilidad</li>
                        <li>Técnico/a de innovación/IA</li>
                        <li>Técnico/a de protección de datos (LOPD)</li>
                        <li>Técnico/a de calidad</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default TransformacioCultural;