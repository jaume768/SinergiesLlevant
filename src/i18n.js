import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ca',
        debug: false,
        resources: {
            ca: {
                translation: {
                    nav: {
                        home: "Inici",
                        about: "Qui Som?",
                        services: "Serveis",
                        mision: "Missió i Visió",
                        objectius: "Objectius",
                        avantatges: "Avantatges",
                        contact: "Contacte"
                    },
                    about: {
                        title: "QUI SOM?",
                        description: "Som una empresa dedicada a promoure la col·laboració entre <strong>PIMES</strong>, mitjançant un model d'afiliació que proporciona accés a serveis i recursos compartits. L'objectiu del projecte és extrapolar la cultura d'empresa de <strong>CÀRNIQUES SUNYER</strong>, basada en la cooperació i en un sistema horitzontal i flexible, que assigna responsabilitats i rols de manera àgil, destacant la importància de la cultura empresarial."
                    },
                    avantatges: {
                        title: "AVANTATGES",
                        items: [
                            {
                                title: "Accés a recursos compartits",
                                description: "Accedeix a recursos com assessorament laboral, formació i gestió de projectes sense inversions individuals."
                            },
                            {
                                title: "Millor poder de negociació",
                                description: "Obtingues millors preus comprant en grup i millora la competitivitat al mercat."
                            },
                            {
                                title: "Suport en compliment normatiu",
                                description: "Rep suport per garantir el compliment de la legislació en qualitat i sostenibilitat."
                            },
                            {
                                title: "Oportunitats de formació i desenvolupament",
                                description: "Participa en formacions per millorar les competències i la motivació del teu equip."
                            },
                            {
                                title: "Networking i col·laboració",
                                description: "Crea aliances estratègiques i projectes amb altres empreses."
                            },
                            {
                                title: "Visibilitat i reputació",
                                description: "Millora la reputació i posiciona la teva empresa com un agent responsable i compromès."
                            }
                        ]
                    },
                    contact: {
                        title: "CONTACTA AMB NOSALTRES",
                        labels: {
                            name: "Nom",
                            email: "Correu electrònic",
                            message: "Missatge"
                        },
                        placeholders: {
                            name: "El teu nom",
                            email: "teucorreu@example.com",
                            message: "La teva consulta..."
                        },
                        recaptchaAlert: "Si us plau, completa el reCAPTCHA abans d'enviar.",
                        sendButton: "Enviar",
                        successAlert: "Missatge enviat correctament!",
                        errorAlert: "Error en enviar el missatge. Torna-ho a provar més tard."
                    },
                    hero: {
                        title: "COMPARTINT RECURSOS",
                        subtitle: "GARANTITZEM EL NOSTRE FUTUR EMPRESARIAL",
                        button: "Comença ara!"
                    },
                    misionVision: {
                        misionTitle: "MISSIÓ",
                        misionText: "Ser un referent en la creació de SINERGIES entre empreses, compartint recursos, coneixements i serveis. En un ambient de confiança, transparència i responsabilitat, garantint així el creixement conjunt i sostenible en un entorn empresarial dinàmic i exigent.",
                        visionTitle: "VISIÓ",
                        visionText: "Facilitar l'accés a una xarxa de serveis i recursos per a empreses afiliades, promovent un model de col·laboració que impulsi la innovació i faciliti el canvi cultural i generacional (successió)."
                    },
                    objectius: {
                        title: "OBJECTIUS",
                        items: [
                            {
                                title: "FOMENTAR LA COL·LABORACIÓ",
                                text: "Promoure un model de treball en xarxa que faciliti la cooperació entre empreses afiliades, creant un ecosistema on es comparteixen recursos i coneixements."
                            },
                            {
                                title: "MILLORAR LA COMPETITIVITAT",
                                text: "Dotar les PIMES de serveis integrats per afrontar els reptes del mercat, assegurant així el compliment de les exigències legals i garantint un futur amb millors garanties."
                            },
                            {
                                title: "PROMOURE LA SOSTENIBILITAT",
                                text: "Impulsar pràctiques empresarials que fomentin la Responsabilitat Social Corporativa (RSC) i la sostenibilitat, contribuint així al benestar integral dels treballadors i de la comunitat en general."
                            }
                        ]
                    },
                    services: {
                        title: "ELS NOSTRES SERVEIS",
                        cards: [
                            {
                                title: "TRANSFORMACIÓ CULTURAL I SUCCESSIÓ",
                                description: "Fomentem el lideratge humanista i la continuïtat amb assessorament i borsa de treball."
                            },
                            {
                                title: "FORMACIÓ",
                                description: "Impartir formacions internes adaptades a les necessitats de cada empresa a través d'un/una formador/a intern."
                            },
                            {
                                title: "PLURI-OCUPACIÓ",
                                description: "Facilitam la gestió horària per optimitzar l'ocupació laboral i optar a fer feina tot l'any."
                            },
                            {
                                title: "GESTIÓ DUAL",
                                description: "L’afiliació impulsarà projectes de formació dual amb l’Acadèmia Algar per a contractes subvencionats."
                            }
                        ],
                        viewMore: "Veure més serveis"
                    },
                    transformacioCultural: {
                        title: "SERVEIS D'AFILIACIÓ",
                        blocks: [
                            {
                                title: "Transformació Cultural i Pla de Successió",
                                description: "Aquest servei, proporcionat per Càrnicas Sunyer, abarcarà:",
                                list: [
                                    "Estructuració de plantilles",
                                    "Detecció de perfils gestors",
                                    "Formació en cultura empresarial i delegació de tasques",
                                    "Implicació en decisions estratègiques (ascensos, acomiadaments, reubicacions, etc.)",
                                    "Disseny d’un pla de compensació adaptat a cada empresa",
                                    "Revisió normativa segons el nombre de treballadors",
                                    "Altres serveis complementaris"
                                ]
                            },
                            {
                                title: "Servei de Formació",
                                description: "Aquest servei és fonamental, ja que les empreses han de potenciar el talent intern i adaptar els processos als nous temps. Permet una ràpida adaptació als canvis i la capacitació del personal cap a nous rols i funcions en el complex mercat laboral.",
                                extra: "Es proposa l'opció d'assumir, entre totes les empreses afiliades, un/a formador/a intern (ja present a la plantilla). Aquest servei facilitarà l'assistència a cursos interns i la coordinació de formacions en funció del perfil i la competència que es vulgui potenciar. Per exemple, si diverses empreses necessiten potenciar el lideratge dels seus comandaments intermedis, s'impartirà una formació comuna, compartint experiències entre perfils similars. Altres temes poden incloure: cultura empresarial, gestió d’equips, visió estratègica, gestió del temps, entre altres. Les formacions internes pròpies de cada empresa es facturaran a part, donada l'adaptació del temari general a cada organització."
                            },
                            {
                                title: "Pluri-ocupació",
                                examples: [
                                    "Exemple 1: Un/a treballador/a que fa feina en un magatzem de matí (de dilluns a divendres) i que, en veure una oferta de feina en un restaurant els divendres a la vesprada i dissabtes, pot optar a aquell lloc vacant si els horaris són compatibles.",
                                    "Exemple 2: Un/a treballador/a que tenia un contracte fix discontinu, fent feina 7-8 mesos de temporada i, coordinant horaris, li s'ofereix fer 20 hores en dues empreses (amb contracte fix a temps parcial), passant a fer feina 12 mesos en lloc de 7-8 i la resta en atur."
                                ]
                            },
                            {
                                title: "Gestió Integral del Projecte de Formació Dual (Sector Agroalimentari)",
                                description: "L'afiliació gestionarà projectes de FORMACIÓ DUAL en col·laboració amb l'Acadèmia Algar per facilitar l'accés a contractes subvencionats.",
                                extra: "PROJECTE NOVEMBRE 2025: Es donarà inici al primer projecte gestionat íntegrament per Sinergies Llevant SL. Es preveu l'incorporació de docents de reconegut prestigi que impartiran una formació teòrica adaptada a la casuística de les empreses inscrites. Període màxim d'incorporació: maig 2025. S'establiran 3 mesos de classes teòriques amb visites a les empreses, seguits de 9 mesos de feina pràctica. Aquests contractes estan subvencionats (més de 12.000€ per contracte). En acabar el contracte (1 any), hi ha la possibilitat de renovar o liquidar. Si es renova i es transforma a fix/fix-discontinu, s'accedeix a una bonificació de més de 100€ mensuals durant els propers 3 anys."
                            },
                            {
                                title: "Comitè Empresarial",
                                description: "L'objectiu d'aquest servei és contextualitzar la situació econòmica i avaluar possibles aliances estratègiques en àmbits com la inversió i la possibilitat de compartir maquinària, infraestructures, etc. Hi ha la possibilitat, a títol voluntari, que cada empresa comparteixi la seva casuística empresarial i les seves necessitats/limitacions perquè altres empresaris/àries puguin aportar la seva experiència en diversos àmbits de direcció empresarial i traçar un pla d'acció amb seguiment semestral. S'estableix un cronograma anual a principis d'any amb les dates de les reunions mensuals tancades i temàtiques d'interès general (innovació, subvencions, anàlisi sectorial, etc.), amb la possibilitat d'analitzar cada mes les diferents necessitats d'alguna de les empreses (mínim 2 pics a l'any)."
                            },
                            {
                                title: "Accés a Borsa de Treballadors",
                                description: "S'habilitarà una plataforma on les empreses afiliades podran contractar treballadors/ores d'altres empreses que es trobin en situació d'atur, en període de vacances o interessats en la pluri-ocupació. L'afiliació centralitzarà aquest procés. És necessari incloure empreses amb temporada alta a l'hivern per garantir continuïtat."
                            },
                            {
                                title: "Servei Comercial",
                                description: "S'ofereix la possibilitat de serveis de vendes a sectors similars i complementaris. Per exemple, el comercial d'una indústria càrnia, en visitar cuines de restaurants i hotels, pot aprofitar per vendre carn, peix, productes elaborats o fruita i verdura. Es planteja assumir el salari del comercial d'una empresa, compartit entre les diferents empreses que optin per aquest servei."
                            },
                            {
                                title: "Pla de Responsabilitat Social Corporativa (RSC)",
                                description: "Es col·laborarà amb el SOIB, associacions i fundacions per impulsar projectes socials, dissenyant un pla d'acció específic per a cada empresa afiliada. L'objectiu és fomentar l'ocupació laboral i altres iniciatives d'impacte social."
                            },
                            {
                                title: "Fases del Projecte",
                                phases: [
                                    "Fase 1 (Auditoria): Avaluació de la situació actual de l'empresari, identificació i acceptació de la cultura i els valors de l'afiliació, revisió de l'estructura organitzativa i dels protocols interns, i anàlisi de la plantilla i dels processos per detectar perfils clau.",
                                    "Fase 2 (Intervenció): Definició d'un pressupost revisable mensualment, priorització de l'eficiència en els processos i delegació de responsabilitats, i establiment de protocols i formacions àgils per a la base de la plantilla.",
                                    "Fase 3 (Seguiment): Pactar hores d'intervenció periòdica per garantir l'autogestió de la plantilla, amb reunions trimestrals o semestrals segons les necessitats detectades."
                                ]
                            },
                            {
                                title: "Altres Serveis",
                                list: [
                                    "Servei de Fisioteràpia: Implementació d'un protocol de prevenció de baixes laborals amb sessions gratuïtes i descomptes en cites addicionals.",
                                    "Servei Logístic: Projecte en fase inicial per oferir una empresa proveïdora de serveis de repartiment.",
                                    "Assessorament Laboral: Orientat a millorar la gestió de permisos i prevenir conflictes laborals.",
                                    "Assessorament en Eficiència Energètica: Identificació d'oportunitats d'estalvi i sostenibilitat.",
                                    "Assessorament en Innovació Tecnològica: Avaluació del nivell tecnològic de l'empresa i recomanacions per millorar la seva competitivitat."
                                ]
                            },
                            {
                                title: "Serveis a Llarg Termini",
                                description: "A mesura que l'afiliació creixi, s'hi aniran incorporant nous serveis amb plans d'acció anuals. Alguns dels futurs proveïdors podrien incloure:",
                                list: [
                                    "Tècnic/a de prevenció de riscos",
                                    "Tècnic/a de màrqueting",
                                    "Tècnic/a de sostenibilitat",
                                    "Tècnic/a d’innovació/IA",
                                    "Tècnic/a de protecció de dades (LOPD)",
                                    "Tècnic/a de qualitat"
                                ]
                            }
                        ]
                    }
                }
            },
            es: {
                translation: {
                    nav: {
                        home: "Inicio",
                        about: "Quiénes Somos",
                        services: "Servicios",
                        mision: "Misión y Visión",
                        objectius: "Objetivos",
                        avantatges: "Ventajas",
                        contact: "Contacto"
                    },
                    about: {
                        title: "¿QUIÉNES SOMOS?",
                        description: "Somos una empresa dedicada a promover la colaboración entre PYMES, mediante un modelo de afiliación que proporciona acceso a servicios y recursos compartidos. El objetivo del proyecto es extrapolar la cultura empresarial de CÀRNIQUES SUNYER, basada en la cooperación y en un sistema horizontal y flexible, que asigna responsabilidades y roles de forma ágil, destacando la importancia de la cultura empresarial."
                    },
                    avantatges: {
                        title: "VENTAJAS",
                        items: [
                            {
                                title: "Acceso a recursos compartidos",
                                description: "Accede a recursos como asesoramiento laboral, formación y gestión de proyectos sin inversiones individuales."
                            },
                            {
                                title: "Mejor poder de negociación",
                                description: "Obtén mejores precios comprando en grupo y mejora la competitividad en el mercado."
                            },
                            {
                                title: "Soporte en cumplimiento normativo",
                                description: "Recibe soporte para garantizar el cumplimiento de la legislación en calidad y sostenibilidad."
                            },
                            {
                                title: "Oportunidades de formación y desarrollo",
                                description: "Participa en formaciones para mejorar las competencias y la motivación de tu equipo."
                            },
                            {
                                title: "Networking y colaboración",
                                description: "Crea alianzas estratégicas y proyectos con otras empresas."
                            },
                            {
                                title: "Visibilidad y reputación",
                                description: "Mejora la reputación y posiciona tu empresa como un agente responsable y comprometido."
                            }
                        ]
                    },
                    contact: {
                        title: "CONTACTA CON NOSOTROS",
                        labels: {
                            name: "Nombre",
                            email: "Correo electrónico",
                            message: "Mensaje"
                        },
                        placeholders: {
                            name: "Tu nombre",
                            email: "tucorreo@example.com",
                            message: "Tu consulta..."
                        },
                        recaptchaAlert: "Por favor, completa el reCAPTCHA antes de enviar.",
                        sendButton: "Enviar",
                        successAlert: "¡Mensaje enviado correctamente!",
                        errorAlert: "Error al enviar el mensaje. Inténtalo más tarde."
                    },
                    hero: {
                        title: "COMPARTIENDO RECURSOS",
                        subtitle: "GARANTIZAMOS NUESTRO FUTURO EMPRESARIAL",
                        button: "¡Comienza ahora!"
                    },
                    misionVision: {
                        misionTitle: "MISIÓN",
                        misionText: "Ser un referente en la creación de SINERGÍAS entre empresas, compartiendo recursos, conocimientos y servicios. En un ambiente de confianza, transparencia y responsabilidad, garantizando así el crecimiento conjunto y sostenible en un entorno empresarial dinámico y exigente.",
                        visionTitle: "VISIÓN",
                        visionText: "Facilitar el acceso a una red de servicios y recursos para empresas afiliadas, promoviendo un modelo de colaboración que impulse la innovación y facilite el cambio cultural y generacional (sucesión)."
                    },
                    objectius: {
                        title: "OBJETIVOS",
                        items: [
                            {
                                title: "FOMENTAR LA COLABORACIÓN",
                                text: "Promover un modelo de trabajo en red que facilite la cooperación entre empresas afiliadas, creando un ecosistema donde se comparten recursos y conocimientos."
                            },
                            {
                                title: "MEJORAR LA COMPETITIVIDAD",
                                text: "Dotar a las PYMES de servicios integrados para afrontar los retos del mercado, asegurando así el cumplimiento de las exigencias legales y garantizando un futuro con mejores garantías."
                            },
                            {
                                title: "PROMOVER LA SOSTENIBILIDAD",
                                text: "Impulsar prácticas empresariales que fomenten la Responsabilidad Social Corporativa (RSC) y la sostenibilidad, contribuyendo así al bienestar integral de los trabajadores y de la comunidad en general."
                            }
                        ]
                    },
                    services: {
                        title: "NUESTROS SERVICIOS",
                        cards: [
                            {
                                title: "TRANSFORMACIÓN CULTURAL Y SUCESIÓN",
                                description: "Fomentamos el liderazgo humanista y la continuidad con asesoramiento y bolsa de trabajo."
                            },
                            {
                                title: "FORMACIÓN",
                                description: "Impartir formaciones internas adaptadas a las necesidades de cada empresa a través de un/a formador/a interno."
                            },
                            {
                                title: "PLURI-OCUPACIÓN",
                                description: "Facilitamos la gestión horaria para optimizar el empleo y optar a trabajar durante todo el año."
                            },
                            {
                                title: "GESTIÓN DUAL",
                                description: "La afiliación impulsará proyectos de formación dual con la Acadèmia Algar para contratos subvencionados."
                            }
                        ],
                        viewMore: "Ver más servicios"
                    },
                    transformacioCultural: {
                        title: "SERVICIOS DE AFILIACIÓN",
                        blocks: [
                            {
                                title: "Transformación Cultural y Plan de Sucesión",
                                description: "Este servicio, proporcionado por Càrnicas Sunyer, abarcará:",
                                list: [
                                    "Estructuración de plantillas",
                                    "Detección de perfiles gestores",
                                    "Formación en cultura empresarial y delegación de tareas",
                                    "Implicación en decisiones estratégicas (ascensos, despidos, reubicaciones, etc.)",
                                    "Diseño de un plan de compensación adaptado a cada empresa",
                                    "Revisión normativa según el número de trabajadores",
                                    "Otros servicios complementarios"
                                ]
                            },
                            {
                                title: "Servicio de Formación",
                                description: "Este servicio es fundamental, ya que las empresas deben potenciar el talento interno y adaptar los procesos a los nuevos tiempos. Permite una rápida adaptación a los cambios y la capacitación del personal hacia nuevos roles y funciones en el complejo mercado laboral.",
                                extra: "Se propone la opción de asumir, entre todas las empresas afiliadas, un/a formador/a interno (ya presente en la plantilla). Este servicio facilitará la asistencia a cursos internos y la coordinación de formaciones en función del perfil y la competencia que se quiera potenciar. Por ejemplo, si varias empresas necesitan potenciar el <strong>liderazgo</strong> de sus mandos intermedios, se impartirá una formación común, compartiendo experiencias entre perfiles similares. Otros temas pueden incluir: cultura empresarial, gestión de equipos, visión estratégica, gestión del tiempo, entre otros. Las formaciones internas propias de cada empresa se facturarán por separado, dada la adaptación del temario general a cada organización."
                            },
                            {
                                title: "Pluri-ocupación",
                                examples: [
                                    "Ejemplo 1: Un/a trabajador/a que realiza labores en un almacén por la mañana (de lunes a viernes) y que, al ver una oferta de trabajo en un restaurante los viernes por la tarde y sábados, puede optar a ese puesto si los horarios son compatibles.",
                                    "Ejemplo 2: Un/a trabajador/a que tenía un contrato fijo discontinuo, trabajando 7-8 meses de temporada y, coordinando horarios, se le ofrece trabajar 20 horas en dos empresas (con contrato fijo a tiempo parcial), pasando a trabajar 12 meses en lugar de 7-8 y el resto en paro."
                                ]
                            },
                            {
                                title: "Gestión Integral del Proyecto de Formación Dual (Sector Agroalimentario)",
                                description: "La afiliación gestionará proyectos de FORMACIÓN DUAL en colaboración con la Acadèmia Algar para facilitar el acceso a contratos subvencionados.",
                                extra: "PROYECTO NOVIEMBRE 2025: Se dará inicio al primer proyecto gestionado íntegramente por Sinergies Llevant SL. Se prevé la incorporación de docentes de reconocido prestigio que impartirán una formación teórica adaptada a la casuística de las empresas inscritas. Período máximo de incorporación: mayo 2025. Se establecerán 3 meses de clases teóricas con visitas a las empresas, seguidos de 9 meses de trabajo práctico. Estos contratos están subvencionados (más de 12.000€ por contrato). Al finalizar el contrato (1 año), existe la posibilidad de renovar o liquidar. Si se renueva y se transforma a fijo/fijo-discontinuo, se accede a una bonificación de más de 100€ mensuales durante los próximos 3 años."
                            },
                            {
                                title: "Comité Empresarial",
                                description: "El objetivo de este servicio es contextualizar la situación económica y evaluar posibles alianzas estratégicas en ámbitos como la inversión y la posibilidad de compartir maquinaria, infraestructuras, etc. Existe la posibilidad, a título voluntario, de que cada empresa comparta su casuística empresarial y sus necesidades/limitaciones para que otros empresarios/as puedan aportar su experiencia en diversos ámbitos de dirección empresarial y trazar un plan de acción con seguimiento semestral. Se establece un cronograma anual a principios de año con las fechas de las reuniones mensuales cerradas y temáticas de interés general (innovación, subvenciones, análisis sectorial, etc.), con la posibilidad de analizar cada mes las diferentes necesidades de alguna de las empresas (mínimo 2 picos al año)."
                            },
                            {
                                title: "Acceso a Bolsa de Trabajadores",
                                description: "Se habilitará una plataforma en la que las empresas afiliadas podrán contratar trabajadores/as de otras empresas que se encuentren en situación de paro, en período de vacaciones o interesados en la pluri-ocupación. La afiliación centralizará este proceso. Es necesario incluir empresas con temporada alta en invierno para garantizar continuidad."
                            },
                            {
                                title: "Servicio Comercial",
                                description: "Se ofrece la posibilidad de servicios de ventas a sectores similares y complementarios. Por ejemplo, el comercial de una industria cárnica, al visitar cocinas de restaurantes y hoteles, puede aprovechar para vender carne, pescado, productos elaborados o fruta y verdura. Se plantea asumir el salario del comercial de una empresa, compartido entre las diferentes empresas que opten por este servicio."
                            },
                            {
                                title: "Plan de Responsabilidad Social Corporativa (RSC)",
                                description: "Se colaborará con el SOIB, asociaciones y fundaciones para impulsar proyectos sociales, diseñando un plan de acción específico para cada empresa afiliada. El objetivo es fomentar el empleo y otras iniciativas de impacto social."
                            },
                            {
                                title: "Fases del Proyecto",
                                phases: [
                                    "Fase 1 (Auditoría): Evaluación de la situación actual del empresario, identificación y aceptación de la cultura y los valores de la afiliación, revisión de la estructura organizativa y de los protocolos internos, y análisis de la plantilla y de los procesos para detectar perfiles clave.",
                                    "Fase 2 (Intervención): Definición de un presupuesto revisable mensualmente, priorización de la eficiencia en los procesos y delegación de responsabilidades, y establecimiento de protocolos y formaciones ágiles para la base de la plantilla.",
                                    "Fase 3 (Seguimiento): Pactar horas de intervención periódica para garantizar la autogestión de la plantilla, con reuniones trimestrales o semestrales según las necesidades detectadas."
                                ]
                            },
                            {
                                title: "Otros Servicios",
                                list: [
                                    "Servicio de Fisioterapia: Implementación de un protocolo de prevención de bajas laborales con sesiones gratuitas y descuentos en citas adicionales.",
                                    "Servicio Logístico: Proyecto en fase inicial para ofrecer una empresa proveedora de servicios de reparto.",
                                    "Asesoramiento Laboral: Orientado a mejorar la gestión de permisos y prevenir conflictos laborales.",
                                    "Asesoramiento en Eficiencia Energética: Identificación de oportunidades de ahorro y sostenibilidad.",
                                    "Asesoramiento en Innovación Tecnológica: Evaluación del nivel tecnológico de la empresa y recomendaciones para mejorar su competitividad."
                                ]
                            },
                            {
                                title: "Servicios a Largo Plazo",
                                description: "A medida que la afiliación crezca, se irán incorporando nuevos servicios con planes de acción anuales. Algunos de los futuros proveedores podrían incluir:",
                                list: [
                                    "Técnico/a de prevención de riesgos",
                                    "Técnico/a de marketing",
                                    "Técnico/a de sostenibilidad",
                                    "Técnico/a de innovación/IA",
                                    "Técnico/a de protección de datos (LOPD)",
                                    "Técnico/a de calidad"
                                ]
                            }
                        ]
                    }
                }
            }
        },
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'],
            caches: ['localStorage', 'cookie']
        }
    });

export default i18n;
