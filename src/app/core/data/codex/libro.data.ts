import { CodexNotice, CodexSection } from '../../models/codex.model';

/**
 * Texto del Libro del Grupo Armagedón (Compañía Armagedón, primera redacción, MMXXVI), transcrito del PDF.
 * Marcas: `†` provisión sujeta a aprobación del grupo · `[†]` la cruz citada sin valor de provisión ·
 * `{{…}}` dato pendiente de consultar · `[…]` texto que el PDF corta en el salto de página ·
 * `*…*` cursiva · `**…**` negrita.
 */
export const LIBRO_NOTICE: CodexNotice =
  '*Aviso al lector.* Este volumen es una propuesta en construcción: la historia de la Compañía se entrega en borrador y los datos que faltan quedan marcados en rojo con la indicación {{Pendiente de consultar}}. Las reglas y costumbres nuevas, añadidas por este códice y sujetas a la aprobación del grupo, se señalan con el signo de la cruz [†]. Todo lo demás es costumbre viva de la Compañía.';

export const LIBRO_SECTIONS: readonly CodexSection[] = [
  {
    id: 'prologo',
    kicker: 'Prólogo',
    title: 'De los propósitos de este Libro',
    blocks: [
      {
        type: 'p',
        text: 'Este volumen nace con un fin sencillo de enunciar y largo de cumplir: poner por escrito lo que la Compañía Armagedón practica cada domingo con la espada de espuma en la mano. Un grupo que entrena al aire libre, en un parque abierto a cualquier vecino de Bucaramanga, necesita más que la costumbre oral para crecer: necesita un libro donde el recién llegado encuentre explicado qué es este deporte, de dónde viene, con qué armas se juega y bajo qué espíritu se combate. Ese libro es el que el lector tiene delante.',
      },
      {
        type: 'p',
        text: 'La propuesta se construye con dos velocidades. Por una parte, se explican los cimientos: qué es el softcombat, cómo se relaciona con el rol en vivo y con las artes marciales históricas europeas, cómo se forjan sus armas y quién es esta Compañía. Por la otra, se recoge la escuela: los ejercicios básicos que tomamos del maestro italiano Fiore dei Liberi —nuestro Fioré—, y la división interna del grupo en cuatro casas, cada una con su oficio. El enfoque del grupo se inclina hacia el HEMA más que hacia el LARP: buscamos la rigorosidad práctica del deporte y la representación artística, aunque sin dejar nunca de lado el componente lúdico que nos reunió en primer lugar. Ese equilibrio entre estudio, arte y juego es la marca de Armagedón, y todo lo escrito aquí se lee bajo esa luz.',
      },
      {
        type: 'p',
        text: 'El lector advertirá que la historia del grupo se entrega en borrador. Así debe ser: faltan fechas, nombres y detalles que solo la memoria de los fundadores puede completar, y por ello se dejaron marcados en rojo para ser llenados a su tiempo. También advertirá ciertas cruces [†] junto a algunas reglas y costumbres: son provisiones añadidas por esta redacción, propuestas para la consideración del grupo, no tradiciones consolidadas. Nada de lo que aquí se propone inventa de la nada: todo se apoya en lo que la Compañía ya hace, en el reglamento con que se arbitra y en los manuales históricos que servimos de modelo.',
      },
      {
        type: 'p',
        text: 'Que sirva este Libro de guía al que llega, de memoria al que se va, y de testimonio de lo que un puñado de esgrimidores construye entre pergamino y espuma.',
      },
    ],
  },
  {
    id: 'softcombat',
    kicker: 'Capítulo I',
    title: 'De qué cosa sea el softcombat',
    blocks: [
      {
        type: 'p',
        text: 'Llámase softcombat, en el hablar común de nuestras tierras, al arte de combatir con armas ligeras construidas sobre un núcleo flexible y envueltas en espuma, de modo que el golpe avise sin herir. No hay en ello metal ni madera rígida que pueda quebrar un hueso: la hoja cede, la punta se dobla, la guarda acolchada protege la mano contraria. Sobre esa premisa tan simple se levanta un deporte completo, con su técnica, su reglamento y su comunidad, practicado hoy en decenas de países bajo nombres diversos —boffer, foam fighting, soft combat— y con una misma convicción: que se puede esgrimir en serio sin poner en riesgo al compañero.',
      },
      {
        type: 'p',
        text: 'Quien observa un combate de softcombat por primera vez reconoce enseguida los gestos del duelo antiguo: la guardia firme, el corte diagonal que traza el aire, la ligadura de espadas, el paso que gana terreno. La diferencia no está en el gesto sino en la herramienta y en el pacto que la rodea. La espada de espuma permite tocar con decisión sin dejar marca, y ese permiso abre el campo a quien no puede costearse armadura, ni quiere asumir el golpe de acero entrenado. En Armagedón, en efecto, nuestro reglamento no exige armadura: exige control, técnica y respeto por las zonas válidas de toque. La seguridad no descansa en el hierro que llevamos puesto, sino en la calidad del arma, en la limpieza del corte y en el ojo del árbitro.',
      },
      {
        type: 'h',
        text: 'Dos corrientes, un mismo río',
      },
      {
        type: 'p',
        text: 'El softcombat actual bebe de dos corrientes grandes que conviven y a veces se cruzan. La primera es la del juego: los torneos de espuma surgidos del mundo del rol en vivo, donde el combate es parte de una historia mayor y la interpretación vale tanto como la técnica. Esa corriente, que llamamos aquí LARP, trajo al softcombat su espíritu festivo, sus batallas narrativas, su vestuario y su hospitalidad con el recién llegado. La segunda es la del estudio: las *artes marciales históricas europeas*, o HEMA, que recuperan los manuales de los maestros de esgrima de los siglos XIV a XVII y entrenan sus golpes, guardias y entradas con método deportivo moderno. El HEMA trajo el rigor: el combate por puntos, la inspección de armas, el arbitraje, la escuela.',
      },
      {
        type: 'p',
        text: 'Ni la una ni la otra es el softcombat por sí sola, pero entre ambas lo delimitan. Del LARP heredamos la herramienta —la espada segura que cualquier mano puede empuñar— y la alegría del […] ir el resultado en duelos justos. Los grupos de softcombat de todo el mundo se reparten a lo largo de esa línea, con más peso de un lado o del otro según su talante. La Compañía Armagedón tiene el suyo claro y no lo esconde: pende del lado del estudio, aunque nunca renuncia al juego. Nuestro lema de combate —ser zorros y no burros— resume ese equilibrio: astucia y técnica sobre la fuerza bruta, ingenio sobre el golpe desmedido, juego largo sobre la borlada rápida.',
      },
      {
        type: 'h',
        text: 'Un deporte de campo abierto',
      },
      {
        type: 'p',
        text: 'Conviene decirlo sin rodeos: el softcombat es de los deportes de combate más accesibles que existen. No requiere licencia federativa, ni equipamiento costoso, ni años de preparación para el primer duelo. El arma puede forjarse en casa con espuma y paciencia, el campo puede ser un claro de parque y el reglamento cabe en un pliego. Esa ligereza es también su debilidad: al no existir una federación única, cada grupo legisla a su manera, y el que viaja de un club a otro encuentra reglas distintas —zonas de toque, puntajes, desarmes— bajo un mismo nombre. De esa ambigüedad nace precisamente el segundo volumen de este proyecto: el Manual de Arbitraje, donde la Compañía pone sus ordenanzas por escrito para que participante y público sepan siempre qué están viendo.',
      },
      {
        type: 'h',
        text: 'La seguridad, norma madre',
      },
      {
        type: 'p',
        text: 'De la definición anterior nace la primera y última norma del softcombat de la Compañía: el arma avisa, no hiere. De ella cuelgan todas las demás. El corte se da con la fuerza justa que el juego reconoce, nunca con la que el brazo puede; la estocada, incluso amable, queda proscrita del campo, porque la espuma artesanal no garantiza contra un capuchón cansado; las zonas sensibles del rostro y de la rodilla abajo no son blanco sino límite; y el arma se revisa antes de jugar, como el jinete revisa la cincha. La seguridad, dicho sea de paso, no es lo contrario de la emoción: el combate vale más cuando confiamos plenamente en el compañero que suelta el golpe, y esa confianza solo la construye la regla cumplida.',
      },
      {
        type: 'p',
        text: 'Cabe añadir una costumbre que en la práctica vale por mil reglamentos: el perdón rápido. Cuando un golpe sale más fuerte de lo debido, el que lo recibe lo nombra, el que lo dio lo reconoce, y ambos vuelven a la guardia sin rencores. El campo que castiga el exceso con vergüenza y perdona con prontitud se corrige solo; el que disimula el golpe fuerte lo consagra. En esto, como en todo, somos zorros y no burros: la astucia del juego no tiene ningún uso para el golpe que inhabilita.',
      },
      {
        type: 'h',
        text: 'Un domingo en el campo',
      },
      {
        type: 'p',
        text: '¿Cómo se ve, en concreto, un domingo de Armagedón? A las diez de la mañana el parque recibe a los primeros: se saca el arsenal del bolsillo de la Compañía, se revisan cintas y pomos, y mientras llega la gente la forja improvisa su taller al pie de un árbol. El que llega por primera vez es atendido antes que nadie: se le presta arma, se le explica en cinco minutos qué zonas valen y cuáles no, y se le pone a correr algún juego fácil donde su error no cuesta duelo. Después la sesión se abre en dos tiempos: el tiempo de escuela —ejercicios de desplazamiento, guardias y cortes bajo la voz del que dirige— y el tiempo de campo, donde se cruzan duelos por puntos al mejor de tres y, cuando el número acompaña, batallas colectivas. La jornada termina como comenzó: guardando armas, contando golpes buenos y dejando dicho el próximo encuentro.',
      },
      {
        type: 'h',
        text: 'Lo que no es el softcombat',
      },
      {
        type: 'p',
        text: 'Al arte lo confunden a veces con sus vecinos, y conviene deslindar la casa. El softcombat no es la escena histórica del acero: los grupos de recreación y esgrima histórica con acero —a los que este Libro tanto debe— combaten con metal y armadura, bajo federaciones y protocolos distintos; del softcombat toman el gesto, no el material. Tampoco es teatro de feria: aunque comparta ambientación y público con las representaciones medievales, el combate de espuma es deporte reglado, con resultado y árbitro. Ni es juego de adivinanzas: el toque vale por técnica y no por simpatía; quien inventa el daño del golpe sale del campo de la Compañía más rápido que el que golpea fuerte. Y no es deporte de exhibición coreografiada: nada de lo que ocurre en el campo de Armagedón está pactado; el duelo se gana, se pierde y se juzga de verdad.',
      },
      {
        type: 'p',
        text: 'Dicho lo que no es, queda más claro lo que sí es: un deporte de combate accesible, una escuela de técnica con siglos de tinta detrás y una comunidad que juega en serio. Con esas tres notas se entiende el resto de este Libro.',
      },
      {
        type: 'h',
        text: 'La familia del softcombat',
      },
      {
        type: 'p',
        text: 'Para dimensionar el mundo al que la Compañía pertenece, conviene nombrar a la familia extendida del arma de espuma. En Norteamérica, además de Dagorhir, nacieron con los años ligas enteras dedicadas al combate de espuma —Amtgard, que desde 1983 mezcla batalla y juego de fantasía, y Belegarth, centrada en el combate por bandos—, mientras que la Society for Creative Anachronism, veterana de 1966, combina recreación histórica con su propio combate con armas de ratán. En Europa las comunidades hispanohablantes recogieron el nombre de softcombat y lo hicieron suyo; en Canadá, eventos como Bicolline reunen batallas de cientos de jugadores; y en Colombia la escena crece con grupos locales en varias ciudades. Nombres distintos —boffer, foam fighting, softcombat— para una misma criatura: la espada que avisa y no hiere.',
      },
      {
        type: 'p',
        text: 'Esta familia dispersa explica, de paso, por qué el softcombat carece de un solo reglamento universal: cada casa grande legisló por su cuenta, con zonas de toque y sistemas de puntuación propios. La Compañía Armagedón hereda esa libertad y la asume con responsabilidad: pone por escrito su propia ordenanza —que el lector hallará en el Manual de Arbitraje— pero escribe también este Libro para que la costumbre del campo sea transportable, explicable y heredable.',
      },
      {
        type: 'p',
        text: 'Este primer capítulo, pues, deja sentada la definición: el softcombat es combate deportivo con armas de espuma sobre núcleo flexible, gobernado por reglamentos locales, hermanado con el rol en vivo y deudor de la esgrima histórica europea. Los capítulos siguientes despliegan sus dos corrientes.',
      },
      {
        type: 'h',
        text: 'Cómo se usa este Libro',
      },
      {
        type: 'p',
        text: 'Cada lector encontrará su camino en este volumen, y conviene señalárselo. El recién llegado que quiere saber con qué se mete leerá en orden los capítulos primero a quinto, y los dejará venir al campo esa misma semana: el Libro no es prerrequisito, es compañía. El miembro que ya pelea los domingos irá directo al capítulo sétimo, donde su escuela está escrita, y a los deberes de las casas en el octavo. El fundador—a quien este Libro espera con la historia en borrador— encontrará su deuda marcada en rojo en el capítulo sexto, junto al método para saldarla. Y el visitante curioso—el de la banca del parque, el del festival— leerá prólogo y capítulo primero, y tendrá con qué entender lo que vio y por qué nos alegra tanto.',
      },
      {
        type: 'p',
        text: 'Este Libro no sustituye al campo ni pretende gobernarlo: lo acompaña. Toda costumbre aquí escrita vale mientras el grupo la viva, y la próxima emendación —cuando la historia se complete— la corregirá donde la práctica la haya mejorado. Así lo pide el espíritu de la casa: el papel sirve al juego, nunca al revés.',
      },
    ],
  },
  {
    id: 'larp',
    kicker: 'Capítulo II',
    title: 'Del LARP, o el camino del juego',
    blocks: [
      {
        type: 'p',
        text: 'Rol en vivo, rol de mesa puesto en pie, juego de interpretación: por cualquiera de esos nombres se entiende el LARP —siglas inglesas de Live Action Role-Playing—, el arte de jugar un personaje con el cuerpo entero. El jugador no dice «mi caballero cruza el bosque»; viste el caballero, cruza el bosque de verdad, habla con su acento, lleva su espada y decide con sus pies lo que su personaje decidiría. Es teatro sin público donde todos son actores, o una partida de rol donde la mesa es el mundo entero.',
      },
      {
        type: 'p',
        text: 'El linaje del LARP con armas se remonta a los años setenta del siglo pasado, cuando grupos de jóvenes norteamericanos —con Dagorhir al frente, nacido en Maryland en 1977— comenzaron a fabricar espadas de espuma para librarse batallas enteras sin lastimarse. La idea cruzó el Atlántico y arraigó con fuerza en Europa y América Latina: en España y en nuestros países hispanohablantes la palabra softcombat se hizo común precisamente en ese ámbito, para distinguir las armas seguras del juego de las de acero de la escena histórica. Hoy conviven eventos de cientos de jugadores, ligas de combate y comunidades locales —como la nuestra— que entrenan cada fin de semana al aire libre.',
      },
      {
        type: 'h',
        text: 'Qué aporta el LARP al softcombat',
      },
      {
        type: 'p',
        text: 'Del LARP el softcombat recibe mucho más que el arma. Recibe, primero, la seguridad como valor fundacional: porque en el juego nadie gana nada hiriendo a nadie, el golpe limpio y controlado se volvió el estándar de toda la cultura de la espuma. Recibe el vestuario y la ambientación: capa, sayo, estandarte, la puesta en escena que convierte un parque de Bucaramanga en un campo de torneo. Recibe la narrativa: batallas con historia, héroes y villanos, juegos colectivos donde el duelo individual pierde el protagonismo en favor de la partida compartida. Y recibe, sobre todo, la hospitalidad: en la cultura LARP el recién llegado se viste prestado, se arma con la espada comunitaria y pelea su primera batalla el mismo día en que aparece. En eso, Armagedón es pura herencia LARP: quien llega un domingo, no paga entrada, no necesita experiencia ni equipo, y entra al campo si quiere.',
      },
      {
        type: 'p',
        text: 'El LARP también enseña sus límites, y conviene nombrarlos con respeto. Cuando el combate es solo medio para la historia, la técnica puede quedarse en gesto decorativo: el corte vistoso sustituye al corte válido, y el esgrimidor deja de crecer. Los grupos que sólo juegan repiten años el mismo nivel, porque nadie corrige la guardia que no guardó. Ese fue parte del despertar de nuestra Compañía: queríamos conservar la alegría del juego y, a la vez, que el golpe marcado fuera técnica de verdad y no teatro de la técnica.',
      },
      {
        type: 'h',
        text: 'El vocabulario del juego',
      },
      {
        type: 'p',
        text: 'Como toda casa antigua, el LARP tiene su lengua, y conviene recoger algunas de sus palabras porque el campo de la Compañía las usa. El *personaje* es la máscara que se viste para jugar: un nombre, una historia, un modo de hablar; en los juegos narrativos el personaje pelea y muere y vuelve, porque la historia es de todos y no termina nunca del todo. La partida es el […] ión es el oficio de hacer creíble el mundo: un estandarte, una tienda, un sonido de tambor. Y el *boffer* —palabra norteamericana de vieja estirpe— es simplemente el arma de espuma, la misma que en nuestras tierras llamamos de softcombat.',
      },
      {
        type: 'p',
        text: 'De esta lengua toma Armagedón lo que sirve a su mezcla. En las batallas colectivas hay bandos, nombres y hasta hazañas narradas al final de la jornada; en los torneos, en cambio, el personaje se guarda y queda el esgrimidor puro, con su nombre civil y su técnica a la vista. Saber cuándo se juega con máscara y cuándo sin ella es parte del oficio de la Compañía, y las casas del capítulo octavo reparten exactamente ese oficio.',
      },
      {
        type: 'h',
        text: 'Los juegos del grupo',
      },
      {
        type: 'p',
        text: 'Quede aquí, como muestra del oficio de la tercera casa, una muestra de los juegos con que el campo colectivo se alegra, pues son parte del acervo que el softcombat heredó del LARP. La captura de la espada: dos líneas, un arma al centro, y el que la toma debe volver a su bando sin ser tocado. El rey de la colina: un círculo, un defensor, y todos los desafiantes que la fuerza de juego aguante. Las vidas: cada esgrimidor cuenta sus vidas y cae al agotarlas, para volver en la siguiente ronda; enseña a pelear sabiendo que la muerte es prestada. Los héroes y villanos: cada bando guarda un héroe anónimo que vale por tres, y el juego se vuelve adivinar dónde está. Y la batalla de línea, madre de todas: dos filas, una señal, y la última espada en pie canta victoria para su bando.',
      },
      {
        type: 'p',
        text: 'Nótese lo que estos juegos educan sin decirlo: el trabajo con compañeros, la economía del golpe —en batalla no hay arbitraje que marque por uno— y la nobleza de reconocer el propio toque, que en el campo colectivo depende por entero del honor de quien lo recibe. Quien aprende a caer bien en los juegos aprende a arbitrar bien sus duelos: el honor del toque propio es la primera escuela de la honestidad del campo.',
      },
      {
        type: 'h',
        text: 'El juego dentro de la Compañía',
      },
      {
        type: 'p',
        text: 'En Armagedón la herencia LARP vive en espacios concretos. Vive en la Casa del Combate Grupal y Juegos, que organizará batallas campales, escenarios narrativos y partidas colectivas donde el recién llegado encuentra su primer triunfo. Vive en la Casa de la Recreación Histórica, que viste y ambienta lo que el resto combate. Vive en nuestras demostraciones en vivo, donde público y jugadores comparten reglas, voces y aplausos. Y vive en el espíritu general de la Compañía: combatimos bien porque nos divertimos combatiendo, no al revés.',
      },
      {
        type: 'p',
        text: 'Quien quiera profundizar en la parte estrictamente marcial, que siga al capítulo siguiente: allí espera el otro camino.',
      },
    ],
  },
  {
    id: 'hema',
    kicker: 'Capítulo III',
    title: 'Del HEMA, o el camino del estudio',
    blocks: [
      {
        type: 'p',
        text: 'Las *artes marciales históricas europeas* —HEMA, por sus siglas en inglés— son el proyecto de recuperar, estudiar y practicar la esgrima que se peleó de verdad en Europa entre la Edad Media y el Renacimiento. No es reconstrucción de vestuario ni teatro de feria, aunque se sirva de ambos: es un deporte de combate con método, cuya fuente de autoridad no es la inventiva del entrenador sino el tratado escrito. Donde otros deportes marciales tienen una escuela viva de maestro a discípulo, el HEMA tiene un libro antiguo que leer en equipo, probar en el campo y corregir con la espada en la mano.',
      },
      {
        type: 'p',
        text: 'Esa fuente es riquísima. El primer gran manual conservado del mundo occidental, el conocido como MS I.33, enseña ya hacia el año 1300 el juego de espada y broquel con figuras y versos. Poco después, en torno a 1389, se recogen los versos del maestro alemán Johannes Liechtenauer, cuya escuela dominará la esgrima germana; y en 1409 el italiano Fiore dei Liberi —nuestro Fioré— compone el Flos Duellatorum, la «Flor del Duelo», tratado iluminado que describe guardias, cortes y entradas para espada a dos manos, espada de una mano, daga, lanza y armas de asta. Le siguieron siglos enteros de imprenta marcial: Antonio Manciolino y Achille Marozzo en la Bolonia del XVI con sus Opera Nova, Joachim Meyer en Estrasburgo en 1570 con su monumental descripción del arte del combate, y muchos otros. Cada tratado es una escuela completa: guardias nombradas, golpes contados, remates y contra-remates discutidos como un juicio.',
      },
      {
        type: 'h',
        text: 'De la biblioteca al campo',
      },
      {
        type: 'p',
        text: 'El renacimiento moderno del HEMA nació en los años noventa, cuando el estudio serio de los tratados encontró en internet a comunidades dispersas de esgrimidores dispuestos a probarlos. De esa mezcla de biblioteca y campo nació el deporte actual: clubs locales que entrenan dos o tres veces por semana, organizaciones que coordinan eventos y torneos, y un circuito internacional de espada larga, sable, espada y broquel, daga y armas de asta. En el torneo HEMA moderno hay árbitros con banderas, jueces de línea, inspección de armas, zonas de toque definidas y tarjetas por conducta: todo el aparato del deporte contemporáneo puesto al servicio de una esgrima de hace quinientos años.',
      },
      {
        type: 'p',
        text: 'Y sin embargo, el HEMA no es solo torneo. Es también lectura, talleres de interpretación, discusión técnica a la salida del campo. El esgrimidor de HEMA aprende el nombre alemán o italiano de lo que hace —el zornhau, el fendente— porque el nombre ata el gesto al texto que lo describe. Esa costumbre de nombrar, explicar y ejecutar con fidelidad es lo que llamamos rigor, y es la mitad del alma de nuestra Compañía.',
      },
      {
        type: 'h',
        text: 'Cómo se lee un tratado',
      },
      {
        type: 'p',
        text: 'El lector preguntará cómo se pasa del folio antiguo al paso moderno, y la respuesta es una de las bellas costumbres del HEMA. Un tratado se lee en equipo: primero se traduce y se discute el texto —pues muchos versos son cifrados a propósito, para que solo el discípulo iniciado los entendiera—; después se lleva al campo una pieza, es decir, una entrada concreta del maestro con su remate; luego se prueba lenta con compañero cooperativo, y por último a ritmo, cambiando papeles hasta que la pieza sale sola. Lo que el texto no aclara —y casi nunca aclara— lo decide la prueba: hay interpretaciones que el campo confirma y otras que despide. Ese método, mitad filología y mitad esgrima, es lo que distingue al estudioso del HEMA de quien solo imita el gesto viejo.',
      },
      {
        type: 'p',
        text: 'Armagedón practica esa lectura en su medida: no somos filólogos, pero sí lectores. Cada ejercicio del capítulo sétimo tiene su folio de origen —Fiore, las guardias del Pisani-Dossi— y la casa de la Recreación Histórica guarda los extractos que la escuela trabaja. Leer, probar, corregir: ese circuito corto es toda la erudición que el softcombat necesita para crecer con título.',
      },
      {
        type: 'h',
        text: 'Los maestros que nos anteceden',
      },
      {
        type: 'p',
        text: 'Para el lector que quiera seguir el hilo por su cuenta, he aquí la genealogía breve de la esgrima escrita que la tradición HEMA estudia hoy. Hacia el año 1300 se compone el manuscrito alemán conocido como MS I.33, primer tratado conservado, dedicado a la espada y el broquel. En torno a 1389 se recogen los versos cifrados de Liechtenauer, padre de la escuela alemana. En 1409, Fiore dei Liberi escribe el Flos Duellatorum, piedra de la escuela italiana y libro de cabecera de la nuestra. Ya en la era de imprenta, Antonio Manciolino publica en 1531 su Opera Nova bolonesa, seguida en 1536 por la monumental obra del mismo nombre de Achille Marozzo; y en 1570 Joachim Meyer, de Estrasburgo, cierra el siglo con la más completa descripción impresa del arte del combate con espada larga, daga, sable y asta. Seis siglos de tratados esperan al que quiera leer: el campo de la Compañía es solo su índice animado.',
      },
      {
        type: 'h',
        text: 'El torneo HEMA: el arbitraje con acero',
      },
      {
        type: 'p',
        text: 'Merece párrafo propio el aparato de arbitraje que el HEMA construyó, porque es el modelo con que la Compañía armó el suyo. En el torneo con acero, cada asalto lo juzga un equipo: el árbitro que dirige la llamada y el alto, y los jueces de línea con banderas de colores, uno por esgrimidor, que levantan la suya al ver el toque limpio en su competidor. El intercambio se detiene al primer toque palpable y se juzga en frío: zona válida, calidad del golpe, prioridad de la acción. Hay tarjetas por conducta —aviso, penalización, descalificación— y el público entiende el resultado porque las señales son públicas y repetidas. Todo este andamio —banderas, zonas, escalera de sanciones— existe también en el softcombat de la Compañía, traducido a espuma: el Manual de Arbitraje lo detalla regla por regla, adaptado a nuestras zonas y a nuestra filosofía del toque.',
      },
      {
        type: 'h',
        text: 'Qué aporta el HEMA a Armagedón',
      },
      {
        type: 'p',
        text: 'De la tradición HEMA nuestra Compañía toma lo esencial y lo adapta honestamente a sus medios. Tomamos la escuela: entrenamos por ejercicios, empezando por el desplazamiento y las guardias del maestro Fioré, como se cuenta en el capítulo sétimo. Tomamos el arbitraje: el duelo por puntos, las banderas del árbitro, la inspección previa de armas, todo lo que este proyecto recoge en su Manual de Arbitraje. Tomamos la cultura del tratado: leemos a Fiore, nombramos sus guardias y sus golpes, y aspiramos a que cada técnica que marcamos en el campo tenga ascendencia escrita. Y tomamos el espíritu deportivo: el combate se gana por técnica limpia, no por casta ni por fuerza; el que mejor entiende, mejor golpea.',
      },
      {
        type: 'p',
        text: 'La diferencia entre nuestro campo y el torneo HEMA con acero también conviene decirlo, para no confundir al lector. El HEMA deportivo combate con espadas de acero feder —flexibles, de borde roma— y exige máscara, gorro, pechera y guantes rígidos; su reglamento suele excluir el torso como zona de punto y valora la distancia de esgrima con estocada. Nuestro softcombat pelea con espuma flexible, sin armadura obligatoria, con el torso válido y la estocada prohibida por seguridad. Son dos lecturas del mismo libro antiguo con materiales distintos; Armagedón cree que ambas se pueden servir, y este Libro es la prueba.',
      },
    ],
  },
  {
    id: 'armas-y-forja',
    kicker: 'Capítulo IV',
    title: 'De las armas y de la forja artesanal',
    blocks: [
      {
        type: 'p',
        text: 'Ninguna pieza define al softcombat como su arma, y ninguna práctica lo distingue como la forja: el arte de construir a mano, con espuma, cinta y paciencia, una espada que golpee sin dañar. En los tratados antiguos la espada se compraba al espadero; en la Compañía, se forja entre compañeros. Esta es una de las razones por las que decimos que el softcombat es deporte de comunidad: el arma que blande el recién llegado salió casi siempre de las manos de un compañero que aprendió a construirla.',
      },
      {
        type: 'h',
        text: 'Anatomía del arma',
      },
      {
        type: 'p',
        text: 'Toda arma de softcombat responde a la misma arquitectura, de abajo arriba. El *núcleo* es la columna flexible que da forma y resistencia: suele ser tubo de fibra de vidrio, fibra hueca o polipropileno (PP), materiales que se doblan sin partirse y absorben el impacto. En su extremo superior, el núcleo remata en un *capuchón de seguridad* —un tapón que impide que la punta rígida atraviese la espuma—, pieza sin la cual ningún arma entra al campo. Sobre el núcleo se estratifica la *espuma*: espuma de poliétileno de celda cerrada —la familia del EVA y del polietileno técnico— que no absorbe agua, no se desmorona y devuelve el golpe con suavidad. Las capas gruesas forman la *blanca*, el cuerpo de la hoja; una regla práctica de la forja manda que la espuma de un lado no sea nunca más delgada que el núcleo permita, de modo que un golpe fuerte deforme el arma y no al compañero.',
      },
      {
        type: 'p',
        text: 'Más abajo, la *guarda* protege la mano y delimita el corte: se forja con espuma densa y cinta, y debe resistir la ligadura con otras guardas sin abrirse. La *empuñadura* se envuelve para dar agarre limpio —cinta antideslizante, cuero, cordel— y el *pomo* cierra el conjunto: debe estar firmemente asegurado al núcleo, pues un pomo que se suelta en pleno combate es un proyectil. Terminada la construcción, el arma se envuelve en cinta de emplumar que le da acabado, color y carácter; de ahí que muchas armas de la Compañía lleven nombre propio, como toda espada que se ha forjado con oficio.',
      },
      {
        type: 'h',
        text: 'El oficio de forjar',
      },
      {
        type: 'p',
        text: 'Forjar bien es un oficio de tres virtudes: medida, paciencia y prueba. La *medida* primero: el arma se construye para una persona y para un uso, no para el escaparate. En la Forja de Armagedón las armas se miden y se asignan según cómo pelea quien las va a blandir —su altura, su guardia preferida, el rol que cumple en el campo—, y no simplemente por apariencia. La *paciencia*, después: cada capa de espuma se pega y se deja asentar; cada vuelta de cinta se tensa sin estrangular; el perfil de la hoja se pule a navaja hasta que el corte desliza. Y la *prueba*, al final: todo arma nueva se prueba contra el propio antebrazo del forjador y contra un arma puesta a prueba, se flexiona, se golpea con decisión, se revisan pomo y guarda. La que no pasa la prueba vuelve al banco; la espuma no perdona las prisas.',
      },
      {
        type: 'p',
        text: 'La forja no termina cuando el arma entra al campo, sino que la acompaña siempre. La cinta se renueva, la espuma desgastada se repone, el núcleo cansado se jubila con honor. Un arma revisada después de cada jornada dura años; una arma abandonada se abre en semanas. Por ello la inspección previa a todo torneo —que el Manual de Arbitraje recoge en su checklist— no es un trámite: es la misma virtud de la forja aplicada al día del duelo.',
      },
      {
        type: 'h',
        text: 'Del peso y del balance',
      },
      {
        type: 'p',
        text: 'Dos números deciden cómo pelea un arma: su peso y su balance. El peso total —que en las espadas de la casa se mueve, según el modelo, en torno a los cuatrocientos gramos— define el cansancio de la jornada: un arma liviana enseña velocidad y perdona errores; una más pesada fortalece el brazo pero engorda los golpes, y el golpe que engorda se vuelve falta. El balance —dónde cae el centro de gravedad entre guarda y punta— decide el carácter: si pesa hacia la mano, el arma es viva y hábil en la ligadura; si pesa hacia la hoja, el corte cae con más autoridad pero cuesta más recuperarlo. La forja trabaja ambos números como el cocinero la sal: ni ausencia ni exceso, y siempre al servicio de quien blandirá el arma.',
      },
      {
        type: 'p',
        text: 'A estos dos números se suma la *flexibilidad*, que es la garantía de seguridad del conjunto: el arma debe doblarse con decisión sin partirse ni ceder su forma. Un arma nueva se prueba a flexión antes de entrar al campo; una arma vieja, en cada inspección de torneo. La espuma es generosa pero no adivina: si el núcleo se fatigó, la espuma lo disimula un día y lo entrega el siguiente.',
      },
      {
        type: 'h',
        text: 'Las armas de la casa',
      },
      {
        type: 'p',
        text: 'El arsenal de la Compañía gira hoy en torno a dos familias, que son a su vez las dos especialidades del campo. La *espada larga*, arma de dos manos, reina de los torneos y de la escuela de Fioré: hoja larga, guarda amplia, peso contenido; con ella se trabajan todas las guardias y cortes del tratado. La *espada corta tipo sable*, arma de una mano, rápida y de filo travieso: pide distancia corta, ritmo y desenfado, y admite en la mano auxiliar broquel o daga, como recoge el reglamento de torneos. Alrededor de estas dos familias el grupo deja la puerta abierta a las armas no convencionales del torneo de arma libre —mazas, armas de asta livianas, armas de invención—, siempre que respeten el marco común: núcleo flexible, espuma suficiente, ninguna estocada.',
      },
      {
        type: 'p',
        text: 'Hay además, en la tradición del grupo, un modo de nombrar las armas por el oficio que cumplen en el campo colectivo: la pieza que hostiga y abre desde la distancia, la que sostiene la línea, la que entra primera. El arma no vale por su figura sino por su función, y quien elige arma elige también un modo de jugar. Ese principio —se mide y se asigna según cómo pelea la persona, no según cómo luce— es ley de la forja de la casa.',
      },
      {
        type: 'h',
        text: 'Las herramientas del forjador',
      },
      {
        type: 'p',
        text: 'El banco de forja se reconoce por su caja de herramientas, que conviene inventariar porque cada pieza tiene su oficio. El cúter de hoja nueva perfila la espuma por capas: el corte limpio de la espuma es lo que desliza bien el filo. La regla y el marcador trazan antes de cortar, porque la espuma mal medida se perdona una vez y estorba para siempre. Los adhesivos técnicos pegan espuma a espuma y espuma a núcleo: se eligen por flexión, no por fuerza bruta. La cinta de emplumar, en colores de la casa, cierra superficies y da carácter. El palito de fibra de repuesto y los capuchones viven siempre a mano, porque un núcleo cansado no se negocia: se reemplaza. Y los guantes del forjador, que no los del combate, protegen de cúter y adhesivo la mano que mañana blandirá el arma recién nacida.',
      },
      {
        type: 'p',
        text: 'Con estas herramientas simples, la forja de la casa sostiene un arsenal entero. Esa es la belleza del oficio: no exige taller industrial sino cuidado acumulado; el arma buena nace de la paciencia de un domingo, no de la máquina cara.',
      },
      {
        type: 'h',
        text: 'Normas del banco de forja',
      },
      {
        type: 'p',
        text: 'Para que la obra salga igual de bien en manos distintas, el banco de forja de la Compañía se gobierna por normas breves, que este Libro recoge como costumbre de la casa:',
      },
      {
        type: 'list',
        items: [
          {
            title: 'Capuchón siempre.',
            text: 'Ningún núcleo entra a un arma sin su capuchón de seguridad rematado; no hay excepción ni prisa que lo justifique.',
          },
          {
            title: 'Espuma de celda cerrada.',
            text: 'El relleno del filo será siempre espuma técnica de celda cerrada; las espumas de baño o de embalaje se desmoronan y engañan.',
          },
          {
            title: 'Prueba de brazo.',
            text: 'Toda arma terminada se prueba contra el antebrazo del forjador con decisión de duelo; si duele, vuelve al banco.',
          },
          {
            title: 'Pomo y guarda firmes.',
            text: 'Se tira del pomo y de la guarda como tiraría el rival; lo que ceda, se rehace.',
          },
          {
            title: 'Cinta viva.',
            text: 'La cinta no es decorado: cierra, aprieta y protege; una cinta raída se cambia antes de jugar, no después.',
          },
          {
            title: 'Nombre propio.',
            text: 'Cada arma que sale del banco recibe nombre, como los reciben las espadas de los libros; el nombre obliga a cuidarla.',
          },
        ],
      },
      {
        type: 'h',
        text: 'La forja en los eventos',
      },
      {
        type: 'p',
        text: 'La forja no vive solo en el banco del parque: viaja. En los eventos —festivales, demostraciones, torneos— el carrito de la forja es puesto en marcha y funciona a la vez como taller abierto y como mesa de muestra: allí el público ve cómo se arma un núcleo, cómo se perfilan las capas de espuma y cómo se prueba el arma terminada. Es la mejor propaganda del deporte y la mejor escuela de futuros forjadores, porque quien ve nacer un arma la cuida distinto. Las armas que el carrito ofrece a la comunidad —con precio público en la página del grupo, como el de la hoja larga Emberbrand— existen para que la forja compre espuma, cinta y núcleos nuevos: el ciclo entero vuelve al campo, y ninguna pieza se fabrica por fuera de la Compañía.',
      },
      {
        type: 'h',
        text: 'La Forja de la Compañía',
      },
      {
        type: 'p',
        text: 'La Forja de Armagedón —que la página del grupo llama *forja artesanal de softcombat*— funciona como taller colectivo: las armas se construyen entre todos, con la máquina y los materiales de la Compañía, y cada pieza que sale de ella alimenta el arsenal común o el carrito de la forja, con el que el grupo ofrece armas nuevas a la comunidad para sostener los materiales. No se trata de comercio: las armas no se revenden; se construyen, se usan, se reparan y se heredan. Quien se une al grupo y quiere arma propia aprende a forjarla, y al aprender a forjarla aprende a cuidarla; quien cuida su arma cuida también, por hábito, a su compañero de campo.',
      },
      {
        type: 'p',
        text: 'Cada arma nace, además, con un oficio en el campo. Según su longitud, peso y balance, la espada se presta a un papel distinto: la hoja larga gobierna la distancia; la corta y veloz, como el sable, castiga el ritmo; las armas convencionales y no convencionales del torneo de arma libre abren el juego a la invención. El arsenal de la Compañía se especializa hoy en espada larga y espada corta tipo sable, sin cerrarse a otras prácticas; del mismo modo, la forja prueba materiales y perfila sus diseños —como la hoja larga Emberbrand, de 110 centímetros y 420 gramos, nacida en nuestro banco de trabajo— buscando siempre el mismo equilibrio entre seguridad, duración y belleza.',
      },
      {
        type: 'h',
        text: 'Tabla de las armas del campo',
      },
      {
        type: 'p',
        text: 'Para que el lector tenga el mapa a la vista, he aquí las categorías de arma que el reglamento de la Compañía reconoce en sus torneos, con sus límites generales; las reglas completas de inspección y puntuación viven en el Manual de Arbitraje.',
      },
      {
        type: 'table',
        head: ['Categoría', 'Límite general', 'Mano auxiliar', 'Observaciones'],
        rows: [
          [
            'Espada larga',
            'Máximo 140 cm, contando pomo y mango',
            'Ninguna',
            'Arma de dos manos; recta o curva; reina de la escuela de Fioré',
          ],
          [
            'Espada corta tipo sable',
            'Hoja entre 90 y 120 cm, contando pomo y mango',
            'Broquel o daga',
            'Arma de una mano, veloz; admite recta o curva',
          ],
          [
            'Arma libre',
            'Armas no convencionales, según reglamento',
            'Según arma',
            'Abre el juego a la invención, siempre sin estocada',
          ],
        ],
        caption:
          'Las espadas rectas, curvas y katanas se reciben en todas las categorías, con la prohibición común de la estocada. El ōdachi que la forja presenta como premio de torneo se rige, cuando se combate con él, por las normas de la espada larga.',
      },
    ],
  },
  {
    id: 'compania',
    kicker: 'Capítulo V',
    title: 'De la Compañía Armagedón',
    blocks: [
      {
        type: 'p',
        text: 'La Compañía Armagedón —Armagedón Softcombat— es un grupo de práctica de softcombat radicado en Bucaramanga, Santander, Colombia. Entrena al aire libre, en el Parque La Flora, cada domingo a las diez de la mañana, con un campo abierto a quien quiera acercarse: no se cobra entrada, no se exige experiencia previa ni equipo propio, y el visitante puede empuñar el mismo día una espada de la casa y aprender su primer corte. Esa puerta abierta no es casualidad sino principio: la Compañía se entiende a sí misma como una obra de comunidad, deporte y cultura, y construye —como repite su lema en la página— más espacios para los tres.',
      },
      {
        type: 'p',
        text: 'El campo de Armagedón sigue un reglamento propio que no exige armadura, porque el arma de espuma y el control del golpe hacen el trabajo que en otras escuelas hace el acero. El grupo se especializa en espada larga y espada corta tipo sable, sin cerrarse a otras armas ni a otras prácticas: el torneo de arma libre, que se cuenta en el Manual de Arbitraje, existe precisamente para que la invención no falte. El talante del campo es el de la máxima que gobierna todos nuestros combates: «este es un juego de ser zorros, no de ser burros»; astucia y técnica por delante de la fuerza, duelo largo y limpio por delante del intercambio burdo.',
      },
      {
        type: 'h',
        text: 'Comunidad, deporte y cultura',
      },
      {
        type: 'p',
        text: 'Los tres pilares del lema se practican, no se proclaman. La *comunidad* se practica en el domingo compartido, en la forja colectiva donde cada arma nace de varias manos, en el carrito que mantiene el taller y en la puerta que nunca pregunta de dónde vienes. El *deporte* se practica con escuela: ejercicios del maestro Fioré, duelos por puntos, torneos con árbitro y banderas, y un reglamento escrito para que el resultado sea justo y entendible por todos. La *cultura* se practica llevando el softcombat fuera del parque: demostraciones en vivo, participación en festivales de la ciudad, y este mismo libro, que nace para que la práctica no viva solo en la memoria de sus fundadores.',
      },
      {
        type: 'h',
        text: 'El talante del campo',
      },
      {
        type: 'p',
        text: 'Hay una diferencia entre las reglas de un grupo y su talante: las primeras se escriben, el segundo se respira. El talante del campo de Armagedón se reconoce en gestos que no salen en ningún reglamento. Se reconoce en que el duelo empieza con un saludo y termina con un saludo, gane quien gane. Se reconoce en que el punto del rival se reconoce en voz alta, sin esperar la sentencia del árbitro, y en que reclamarlo todo se ve como obra de burro y no de zorro. Se reconoce en que el mejor del parque pelea con la espada prestada si hace falta, y en que las preguntas del curioso de la banca se contestan con demostración incluida. Un grupo que cuida su talante no necesita amenazar con sanciones: el campo se gobierna primero por vergüenza bien entendida y después por ordenanza.',
      },
      {
        type: 'p',
        text: 'Este talante explica, dicho sea de paso, por qué el grupo tardó tanto en escribir sus reglas: cuando el campo se corrige a sí mismo, el papel parece sobrar. Pero la Compañía crece, entra gente nueva cada semana y viaja a plazas donde nadie conoce nuestra costumbre; el papel —este Libro y el Manual de Arbitraje— existe para llevar el talante del parque a donde todavía no lo respiran.',
      },
      {
        type: 'h',
        text: 'Quién es quién en el campo',
      },
      {
        type: 'p',
        text: 'En una sesión de Armagedón hay oficios que conviene nombrar, porque el recién llegado los confunde y el campo los necesita todos. Quien dirige la escuela lleva la voz del ejercicio: manda el paso, corrige la guardia y decide cuándo el cuerpo está listo para la técnica nueva. Quien arma el juego diseña la batalla colectiva y sus bandos, y vela por el ritmo de los que juegan. Quien atiende la forja reparte armas, revisa cintas y recibe las piezas que se jubilan. Y los duelistas—toda la Compañía, en el fondo— pelean, juzgan y aprenden en el mismo turno: en un campo sano, el que hoy arbitra mañana combate, y nadie se acostumbra a un solo oficio. Estos roles no son cargos fijos ni jerarquías cerradas: son turnos de la misma casa, y giran según la jornada, la afluencia y la necesidad del grupo.',
      },
      {
        type: 'h',
        text: 'La Compañía en la red',
      },
      {
        type: 'p',
        text: 'La obra pública de la Compañía vive en su página, y conviene dejar registrado su mapa porque es también el mapa del grupo. La puerta de entrada presenta al grupo y anuncia el próximo encuentro con un reloj de cuenta atrás, que convierte la espera de la semana en juego. La Forja muestra el taller: las armas de la casa, sus medidas, sus pesos y sus precios públicos, con el carrito para quienes quieran llevarse una nacida en el banco. La sección de Eventos archiva el calendario y las crónicas —festivales, demostraciones, torneos— y la sección de El deporte explica al visitante los fundamentos: qué es el softcombat, cómo se saluda, qué zonas valen, qué voces se usan y cómo corre el ritmo del combate. Completan la obra las redes del grupo —el Instagram @armagedonsoftcombat— donde el día a día del parque se hace público.',
      },
      {
        type: 'h',
        text: 'Dónde y cuándo',
      },
      {
        type: 'p',
        text: 'El grupo entrena los domingos a las 10:00 a. m. en el Parque La Flora de Bucaramanga; la agenda completa de encuentros y eventos se publica en la página del grupo —strike-soft-hub.vercel.app— y en sus redes, en particular el Instagram *@armagedonsoftcombat*. Allí se anuncian tanto los entrenamientos regulares como los eventos especiales: festivales, demostraciones y torneos. La página lleva además un reloj de cuenta atrás al próximo encuentro, que convierte la espera de la semana en parte del juego.',
      },
      {
        type: 'p',
        text: 'Quien escribe la página y sostiene la obra digital de la Compañía —como el mismo sitio registra— ha puesto el grupo en el mapa público de la ciudad; pero la Compañía, como toda obra viva, se cuenta mejor en su historia, que este Libro recoge en el capítulo siguiente con la honestidad del borrador.',
      },
    ],
  },
  {
    id: 'historia',
    kicker: 'Capítulo VI',
    title: 'De la historia del grupo, en borrador',
    blocks: [
      {
        type: 'p',
        text: 'Este capítulo se publica como lo que es: borrador. La Compañía es joven y su memoria todavía vive más en la conversación del domingo que en los documentos; antes dejar un vacío que inventar una fecha, esta redacción marca en rojo los datos que faltan, para que los fundadores los llenen en la segunda emendación de este Libro. Lo que sí queda asentado —por estar publicado en la página del grupo— son los hitos del año 2026, que por ahora son el esqueleto visible de la historia.',
      },
      {
        type: 'h',
        text: 'Los orígenes',
      },
      {
        type: 'p',
        text: 'Todo grupo nace de una simple decisión: la de unas personas que prefieren entrenar juntas antes que solas. De la decisión de fundar Armagedón sabemos el fruto —la Compañía que hoy entrena en el Parque La Flora— pero no aún los pormenores de la semilla. Quedan, pues, por asentar en la siguiente emendación: {{la fecha exacta de fundación del grupo}}; {{el nombre de quien lo fundó y la persona que hoy lidera la Compañía}}; {{los nombres de los primeros miembros}}; y {{el lugar y la anécdota del primer encuentro}}. Sobre estos pilares vacíos se escribirá, a su tiempo, la verdadera primera página de esta historia.',
      },
      {
        type: 'p',
        text: 'Puede decirse, eso sí, lo que la práctica del grupo revela de sus comienzos: la forja colectiva y la puerta abierta del domingo no son adorno de fundamentos tardíos, sino rasgos que el grupo […] ió a ser así de golpe; lo trae de su fundación. También lo revela la elección del nombre: una Compañía que se llama Armagedón no promete tranquilidad sino batalla memorable, y esa ambición se lee hoy en su calendario de eventos. {{Pendiente de consultar: el origen del nombre y las razones de su elección}}.',
      },
      {
        type: 'h',
        text: 'La forja nace',
      },
      {
        type: 'p',
        text: 'En algún punto de la vida temprana del grupo, la construcción de armas dejó de ser tarea ocasional y se hizo taller: la *forja artesanal de softcombat* que hoy la página oficial presenta como uno de los cuatro rincones del sitio. Allí nacen las espadas de la casa —medidas y asignadas según cómo pelea cada esgrimidor—, allí se reparan las veteranas, y de allí sale el carrito de la forja con que la Compañía ofrece armas nuevas a la comunidad para sostener sus materiales. {{Pendiente de consultar: cuándo y quién inició la forja, y cuáles fueron las primeras armas construidas}}.',
      },
      {
        type: 'h',
        text: 'El año de las plazas: 2026',
      },
      {
        type: 'p',
        text: 'El año 2026 trajo al grupo de la plaza del parque a la plaza del evento. Entre el 21 y el 23 de agosto, Armagedón participó en el *Bucara Geek Fest*, llevando el softcombat al público de los festivales de la ciudad: demostración, campo abierto, conversación con curiosos. Unas semanas más tarde, el 12 y 13 de septiembre, llegó el hito mayor: el *Sakura Fest 2026*, donde la Compañía celebró su **primer torneo oficial de espada larga** —con árbitro, banderas y reglamento propio— y cuyo premio, según anuncia la página, fue un ōdachi forjado para la ocasión. Quien quiera entender el presente de Armagedón, entienda esto: el grupo que comenzó a entrenar en un parque abierto ya organiza torneos con ordenanzas escritas.',
      },
      {
        type: 'p',
        text: '{{Pendiente de consultar: relato del primer torneo —participantes, duelos memorables, ganador— y de la presentación en el Bucara Geek Fest}}. La crónica de ambos eventos espera la mano de quien la vivió.',
      },
      {
        type: 'h',
        text: 'Cómo se escribirá esta historia',
      },
      {
        type: 'p',
        text: 'Quede dicho el método con que los vacíos de este capítulo se llenarán, para que la segunda emendación no dependa de la memoria sola. Primero, la crónica de cada evento se redactará en caliente —el mismo día, con nombres y duelos— y se archivará con la casa de la Recreación Histórica. Segundo, los fundadores responderán, en la paz de una tarde cualquiera, las preguntas que este Libro marca en rojo: fecha y lugar de fundación, nombres, anécdotas, liderazgo. Tercero, la página del grupo y su archivo servirán de registro público: fechas, resultados y fotos delimitarán la línea del tiempo. Con esas tres fuentes —crónica, memoria y archivo— la historia de la Compañía podrá escribirse con la misma limpieza que se exige a sus duelos: cada punto marcado, y bien marcado.',
      },
      {
        type: 'h',
        text: 'El camino adelante',
      },
      {
        type: 'p',
        text: 'La historia que falta se está escribiendo cada domingo. El presente de la Compañía tiene un proyecto claro: formalizar la práctica —este Libro y el Manual de Arbitraje son parte de ese camino—, consolidar las cuatro casas, mantener la forja y seguir abriendo el campo a quien llegue. Las próximas páginas de esta historia se conocerán el domingo siguiente, a las diez de la mañana, en el Parque La Flora.',
      },
      {
        type: 'pending',
        title: 'La mesa de las pendientes',
        intro:
          'Para que ninguna deuda se pierda, la mesa donde los fundadores saldarán la historia queda así:',
        items: [
          'Fecha y lugar exactos de la fundación de la Compañía.',
          'Nombre del fundador y de quien hoy lidera el grupo.',
          'Los primeros miembros y la anécdota del primer encuentro.',
          'El origen del nombre Armagedón.',
          'El nacimiento de la forja y sus primeras armas.',
          'La crónica del Bucara Geek Fest y del primer torneo de espada larga en Sakura Fest 2026.',
        ],
      },
    ],
  },
  {
    id: 'escuela',
    kicker: 'Capítulo VII',
    title: 'De la escuela: los ejercicios del maestro Fioré',
    blocks: [
      {
        type: 'p',
        text: 'Fiore Furlan dei Liberi da Premariacco —nuestro Fioré— nació hacia 1350 en Cividale del Friuli y murió pasadas las primeras décadas del siglo XV. Caballero de armas errante en su juventud, maestro reconocido en su vejez, compuso hacia 1409 —con dedicatoria al marqués Niccolò III d’Este— el *Flos Duellatorum in armis, sine armis, equester et pedester*: la «Flor del Duelo a caballo y a pie, con armas y sin ellas». Nos han llegado cuatro versiones de su obra; la que la Compañía mira con más cariño es la del códice Pisani-Dossi, por sus figuras de línea limpia, dibujadas como para llevarse al campo.',
      },
      {
        type: 'p',
        text: 'Su método era el de su tiempo y resulta de lo más moderno: primero la guarda, luego el paso, luego el golpe, y después el juego —el *zogho*— que ata todo lo anterior. Fiore divide cada arma en *zogho largo* (juego de distancia, golpes y cobraciones) y *zogho stretto* (juego estrecho, cuerpos ligados, desarmes y medias espadas), y en cada lugar del texto pone un maestro —el *remédio*—, su discípulo —el *scolaro*— y el contrario que los desafía. Esta escuela elige de aquel tesoro lo que el softcombat puede practicar con seguridad, y con ello arma sus ejercicios básicos.',
      },
      {
        type: 'figure',
        src: 'assets/codex/pisani-dossi-segno.webp',
        width: 800,
        height: 1070,
        alt: 'Dibujo a línea del códice Pisani-Dossi: un esgrimidor rodeado de siete espadas y de cuatro animales',
        caption:
          'El *segno* del pagatore del códice Pisani-Dossi: el esgrimidor coronado por las siete espadas —dos fendenti, dos mezzani, dos sottani y la punta— y rodeado de los animales del maestro: la prudencia del lince, el cérvido que agarra el fuste, la astucia del lobo y la fortaleza del elefante con torre. Ms. Pisani-Dossi, c. 1410, dominio público.',
      },
      {
        type: 'h',
        text: 'El desplazamiento: accrescere y decrescere',
      },
      {
        type: 'p',
        text: 'Antes del corte, el paso. La escuela italiana antigua resume el gobierno del terreno en dos verbos: *accrescere*, acrecentar —ganar terreno acercando el pie para entrar en distancia de golpe— y *decrescere*, decrecer —ceder terreno retirando el pie para volver a la distancia segura—. Quien no gobierna estos dos movimientos pelea a la merced del compañero: llega tarde al golpe porque no acrecentó, y recibe el contra porque no supo decrecer. El ejercicio básico de la Compañía es simple: a la voz, el esgrimidor avanza acreciendo con el pie adelantado y retrocede decreciendo, con la guardia intacta, sin subir la punta ni cruzar los pies; luego el mismo ejercicio con el corte al final del acrecimiento, y luego con el compañero que mide y manda.',
      },
      {
        type: 'p',
        text: '[…] en todos estos pasos: el terreno se gana con el pie y el cuerpo, nunca con la espada sola; la espada que se adelanta sin cuerpo es golpe regalado.',
      },
      {
        type: 'h',
        text: 'Cuándo acrecer y cuándo decrecer',
      },
      {
        type: 'p',
        text: 'El duelo pone a prueba el desplazamiento en su lectura táctica, y conviene dejarla dicha. Se acrece cuando el rival está en guardia cerrada, sacando arma nueva, midiendo: entonces se gana terreno con decisión, porque cada paso regala el siguiente. Se decrece cuando el rival entra con decisión: se cede medio paso para que su golpe nazca fuera de distancia, y se responde al final de su movimiento, cuando su pie ya se posó y su espada aún vuelve. El error del principiante es el doble: acrece contra el golpe que ya viene —y lo recibe de frente— o decrece sin fin, regalándole la confianza y el campo entero. El maestro resumiría la regla así: el paso se aprende en el parque, pero el cuándo se aprende mirando los ojos del rival; allí nace todo movimiento verdadero.',
      },
      {
        type: 'h',
        text: 'El juego largo y el juego estrecho',
      },
      {
        type: 'p',
        text: 'Fiore divide el combate de cada arma en dos terrenos que la escuela moderna llama a distancia y a cuerpo, y que el maestro nombró *zogho largo* y *zogho stretto*: el juego largo y el juego estrecho. El juego largo es el de la medida justa: golpes a distancia, cobraciones de filo contra filo, entradas y salidas del paso. El juego estrecho nace cuando los cuerpos se tocan: media espada, golpes de pomo y de cruz, agarres, desarmes y derribos. La escuela completa discípulo domina ambos y sabe elegir el suyo según el rival y el arma; el que solo pelea a distancia queda indefenso al primer cuerpo a cuerpo, y el que solo quiere cuerpo a cuerpo recibe el golpe en la entrada.',
      },
      {
        type: 'p',
        text: 'En el campo de la Compañía, la regla de seguridad adapta el juego estrecho: no hay derribos ni golpes con cuerpo, pero la media espada, el pomo como despiste y —según el arma— el clutch con desarme, entrenan el terreno estrecho con decencia. Así el discípulo de la casa aprende los dos juegos sin aprender el riesgo.',
      },
      {
        type: 'h',
        text: 'Las guardias, o poste',
      },
      {
        type: 'p',
        text: 'Fiore llama *posta* a la guardia: la posición firme de la que nace y a la que vuelve todo golpe. Su tratado dibuja para la espada a dos manos un rosario de guardias nombradas; la Compañía entrena en especial estas:',
      },
      {
        type: 'list',
        items: [
          {
            title: 'Posta di Donna',
            text: 'la guardia de la Dama: peso sobre la pierna de atrás y espada al hombro, lista para descargar el corte descendente más fuerte; es la guardia de la espera y del golpe largo.',
          },
          {
            title: 'Posta Longa',
            text: 'la guardia Larga: brazos y espada extendidos, la punta mirando al rostro del contrario; la que mide la mayor distancia y estorba la entrada rival.',
          },
          {
            title: 'Posta Breve',
            text: 'la guardia Breve: espada recogida, cruz baja, punta al frente; guardia de quien quiere acortar distancia y entrar al juego estrecho.',
          },
          {
            title: 'Posta di Fenestra',
            text: 'la guardia de la Ventana: espada vertical frente al cuerpo, punta arriba, como asomada a una ventana; cubre el centro y nace de ella la cobración fina.',
          },
          {
            title: 'Coda Longa',
            text: 'la Cola Larga: espada atrás junto a la cadera, como cola que se enrosca; engaña la distancia y descarga sottani y manreversi sorpresivos.',
          },
          {
            title: 'Dente di Cinghiale',
            text: 'el Colmillo de Jabalí: cruz alta en diagonal sobre el hombro; guarda de cobración que aplasta el filo del rival.',
          },
          {
            title: 'Porta di Ferro',
            text: 'la Puerta de Hierro: espada baja frente a la pierna, punta arriba, muro firme contra el que se puede cerrar el campo.',
          },
        ],
      },
      {
        type: 'p',
        text: 'En el campo de la Compañía estas guardias se entrenan de dos maneras: quietas, nombrándolas y corrigiendo pies y manos; y vivas, pasando de una a otra por el paso de acrecimiento, hasta que el cuerpo elija la guardia sin pedir permiso a la cabeza. La regla del maestro vale para todas: toda guardia que no puede lanzar golpe ni cobrarlo es apenas pose.',
      },
      {
        type: 'h',
        text: 'El ejercicio de las guardias en tres tiempos',
      },
      {
        type: 'p',
        text: 'La lección que la escuela repite cada domingo con las guardias corre en tres tiempos, y conviene dejarla por escrito. En el primer tiempo, el esgrimidor camina la escala completa de guardias —de la Dama a la Puerta de Hierro— a paso lento, nombrando cada una en voz alta; el nombre que se dice con la boca ordena la posición que se corrige con los ojos del compañero. En el segundo tiempo, el compañero llama guardias al azar y el esgrimidor las toma de inmediato, sin orden ni previo aviso, para que el cuerpo aprenda a llegar a todas por igual. En el tercer tiempo, cada guardia se cierra con su golpe natural: de la Dama, el fendente; del Colmillo, la cobración y el sottano; de la Larga, la estorba y el paso atrás. Así la guardia no queda estatua sino puerta: abierta hacia el golpe propio y cerrada al ajeno.',
      },
      {
        type: 'p',
        text: 'Quien conduce la lección cuida tres errores clásicos: la punta que cae —toda guardia mantiene su punta viva hacia el rival—, el pie que se duerme —peso siempre sobre las plantas, jamás clavado— y la mirada que baja a la propia espada, costumbre de principiante que el tratado desaprueba desde su primera página. Corregidos los tres, la guardia ya es de la casa.',
      },
      {
        type: 'h',
        text: 'Los cuatro cortes básicos',
      },
      {
        type: 'p',
        text: 'El *segno* del maestro —la figura del hombre con siete espadas que abre el libro de la espada a dos manos— cuenta los golpes: dos fendenti, dos mezzani, dos sottani y la punta. De aquella escala, la escuela de Armagedón entrena primero cuatro cortes, que son la base de todo lo demás:',
      },
      {
        type: 'list',
        items: [
          {
            title: 'Fendente',
            text: 'el corte descendente vertical, de arriba abajo por el centro; el golpe que parte cualquier guardia y que en el reglamento de la Compañía vale como corte —nunca como estocada—.',
          },
          {
            title: 'Mandritto',
            text: 'el corte diagonal descendente desde el lado derecho del esgrimidor, trazando el aire de hombro a cadera contraria.',
          },
          {
            title: 'Manreverso',
            text: 'el corte diagonal descendente desde el lado izquierdo, hermano del mandritto en camino opuesto; con estos dos se pelea el duelo de diagonales.',
          },
          {
            title: 'Sottano',
            text: 'el corte ascendente, de abajo arriba; nace de las guardias bajas y castiga al rival que desciende descuidado.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Los *mezzani* —cortes horizontales, también llamados tondi— completan la familia y valen plenamente en nuestro reglamento, que admite los cortes diagonales, horizontales y verticales. La *punta*, en cambio, queda fuera de todo uso en el campo de la Compañía: la naturaleza improvisada y artesanal del arma de espuma hace de la estocada un riesgo que este grupo no corre ni a cambio de puntos. El sétimo golpe del segno se estudia, por ello, en la teoría del tratado y no en la práctica del campo.',
      },
      {
        type: 'h',
        text: 'Técnicas del maestro, en forma segura',
      },
      {
        type: 'p',
        text: 'Del zogho largo y del zogho stretto de Fiore, la escuela de la Compañía toma estas técnicas, adaptadas al arma de espuma y al reglamento:',
      },
      {
        type: 'list',
        items: [
          {
            title: 'La cobración y la ligadura',
            text: 'encontrar el filo del rival con el propio y gobernarlo. Es la madre del juego limpio de espada contra espada, y la semilla de nuestro clutch.',
          },
          {
            title: 'Scambiar de punta e spada',
            text: 'el cambio de punta por espada: cuando el rival ataca, se responde golpear su espada y desviarla para marcar en el mismo tiempo. En nuestro campo, donde la punta no existe, se practica cambiando corte por corte: cubrir y herir en una sola respiración.',
          },
          {
            title: 'La rota',
            text: 'el giro de la espada sobre el arma del rival que rompe su cobración y abre su guardia; técnica de muñeca más que de brazo.',
          },
          {
            title: 'Mezza spada',
            text: 'la media espada: trabajar con la mano en el medio del arma, corto de distancia, para gobernar la espada contraria. Con arma de espuma es segura y enseña como ninguna otra el juego estrecho.',
          },
          {
            title: 'Il pugnolo, o golpe de pomo',
            text: 'Fiore remata muchas de sus entradas golpeando con el pomo o la cruz. En nuestra regla, el pomo de espuma no marca punto; sirve como distracción y despiste lícito —táctica de zorro— que abre el corte verdadero.',
          },
          {
            title: 'Lo svolare, o desarme',
            text: 'el golpe certero a la espada del rival que la suelta de su mano. La Compañía lo corona con doble punto, como recoge el Manual de Arbitraje.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Cierra el método del maestro una regla de estudio que en la Compañía es ley de la casa: cada técnica se aprende lenta y nombrada, se repite con compañero cooperativo, y solo después se prueba en duelo a ritmo real. El tratado es el mapa; el campo, el territorio; y el esgrimidor que salta del mapa al territorio sin pasos intermedios aprende la lección del modo más caro.',
      },
      {
        type: 'h',
        text: 'Cómo se conduce una lección',
      },
      {
        type: 'p',
        text: 'Quede asentado, para quien algún día dirija la escuela, el modo en que la Compañía conduce la lección de este capítulo. Se abre con el desplazamiento —cinco minutos de acrecer y decrecer bastan para encender el cuerpo—; sigue con la guardia del día, que se presenta, se corrige y se pega al corte que le es propio; continúa con la técnica de la semana en su trío completo —lenta, cooperativa, a ritmo— y se cierra con duelo libre donde se procura usar lo aprendido, no para ganar sino para ensayar. El que dirige no pelea su duelo: mira el del resto, corrige la guardia que cayó y elogia en voz alta el golpe limpio del más nuevo, porque el premio público educa más rápido que la corrección.',
      },
      {
        type: 'h',
        text: 'La jornada-tipo de la escuela',
      },
      {
        type: 'p',
        text: 'Como servicio al que algún día tendrá que organizar la sesión sin maestro a mano, he aquí la jornada-tipo de la escuela, tal como la casa del Combate Individual la conduce en un domingo ordinario:',
      },
      {
        type: 'list',
        items: [
          {
            title: 'Apertura y armas (primer cuarto de hora):',
            text: 'se revisan las espadas, se reparte el arsenal y se saluda al campo.',
          },
          {
            title: 'Desplazamiento (diez minutos):',
            text: 'accrescere y decrescere en línea, luego en círculo, luego con voz cambiante.',
          },
          {
            title: 'Guardia del día (veinte minutos):',
            text: 'presentación, corrección, ejercicio de los tres tiempos.',
          },
          {
            title: 'Cortes y técnica (media hora):',
            text: 'los cuatro cortes en blanco, la técnica de la semana en trío con compañero.',
          },
          {
            title: 'Campo (el resto de la jornada):',
            text: 'duelos al mejor de tres, juegos colectivos, y la forja atendiendo armas nuevas.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Los tiempos son consejo, no tiranía: si el campo está lleno de recién llegados, el juego educará más que la repetición; si el torneo se acerca, la técnica se alarga. La escuela, como el arma, se ajusta a la persona.',
      },
      {
        type: 'p',
        text: 'Y quede, para el cierre del capítulo, la advertencia de casa: la lección no termina cuando el cuerpo aprende sino cuando el nombre se queda. El esgrimidor de Armagedón debe saber decir qué guardia tomó, qué corte soltó y qué técnica marcó; la lengua que nombra el gesto es la misma que después leerá el tratado sin miedo.',
      },
    ],
  },
  {
    id: 'casas',
    kicker: 'Capítulo VIII',
    title: 'De las cuatro casas',
    blocks: [
      {
        type: 'p',
        text: 'Así como el tratado del maestro divide el arte en juegos largos y estrechos, la Compañía divide su vida interna en cuatro casas. No son barreras ni jerarquías: son oficios. Cada casa guarda una pieza del quehacer del grupo para que ninguna se pierda —ni el estudio, ni el duelo, ni el juego, ni la fiesta del torneo—, y todo miembro de la Compañía participa de la que llame a su corazón, sin dejar por ello de combatir los domingos con todos. Quien entra al grupo entra a todas por la puerta común; las casas reparten, no repelen.',
      },
      {
        type: 'house',
        text: 'La casa de la Recreación Histórica',
      },
      {
        type: 'p',
        text: 'La primera casa guarda el pasado. Es la casa del vestuario y la ambientación —la capa, el sayo, el estandarte que convierte un parque en campo de torneo—, de la investigación de los tratados y de la representación artística de las armas antiguas. Su oficio es doble: por fuera, dar al evento y a la demostración la vista que el público recuerda; por dentro, alimentar la escuela con lectura y contexto, porque un esgrimidor que sabe de dónde viene su guardia la guarda con más fe. Aquí se educa el ojo: colores, telas, formas de la espada según el siglo, y la disciplina de citar la fuente —el códice, el folio— antes de decir qué se viste y por qué. La casa de la Recreación Histórica es la memoria viva de la Compañía y su cara ante la historia.',
      },
      {
        type: 'list',
        lead: 'Son deberes de esta casa:',
        items: [
          {
            text: 'mantener el guardarropa común prestable para demostraciones y torneos.',
          },
          {
            text: 'Custodiar y ordenar los extractos de los tratados con que la escuela trabaja.',
          },
          {
            text: 'Redactar la crónica de cada evento de la Compañía para el Libro y la página.',
          },
          {
            text: 'Vestir y ambientar las demostraciones en vivo, con fuente citada para cada pieza.',
          },
        ],
      },
      {
        type: 'house',
        text: 'La casa del Combate Individual',
      },
      {
        type: 'p',
        text: 'La segunda casa guarda la escuela. Es la del duelo uno contra uno y de los ejercicios del capítulo anterior: el desplazamiento que acrece y decrece, las guardias nombradas, los cuatro cortes, las técnicas de ligadura y desarme del maestro Fioré. Su oficio es llevar al recién llegado de la primera guardia al primer duelo, y llevar al duelista de ayer al técnico de mañana; por ello organiza la progresión de los esgrimidores, las clínicas técnicas de mitad de sesión y el estudio comparado de los tratados. En la casa del Combate Individual se aprende la lección central del grupo: que el punto marcado por fuerza vence una vez, y el punto marcado por técnica educa para siempre. Es la casa más cercana al espíritu HEMA de la Compañía.',
      },
      {
        type: 'list',
        lead: 'Son deberes de esta casa:',
        items: [
          {
            text: 'conducir la escuela del domingo según el método del capítulo sétimo.',
          },
          {
            text: 'Llevar la progresión de cada esgrimidor, del primer corte al primer torneo.',
          },
          {
            text: 'Preparar los duelos de exhibición y los cruces de las jornadas internas.',
          },
          {
            text: 'Velar por que el golpe marcado sea siempre técnica y nunca desahogo.',
          },
        ],
      },
      {
        type: 'house',
        text: 'La casa del Combate Grupal y los Juegos',
      },
      {
        type: 'p',
        text: 'La tercera casa guarda la alegría. Es la heredera del LARP dentro del grupo: la que diseña las batallas campales con bandos y banderas, los juegos colectivos —captura la espada, rey de la colina, héroes y villanos— y los escenarios narrativos donde el duelo pierde el reino a favor de la partida compartida. Su oficio es, primero, incluir: nadie aprende mejor el campo que el recién llegado corriendo una batalla con todos, donde su error no cuesta duelo sino risa. Y es, segundo, educar a la medida: el juego grupal enseña distancia, cansancio, compañerismo y disciplina de no golpear de más cuando la emoción crece. La casa del Combate Grupal y los Juegos recuerda a toda la Compañía su origen lúdico: combatimos porque el juego nos gusta, y jugamos bien porque combatimos bien.',
      },
      {
        type: 'list',
        lead: 'Son deberes de esta casa:',
        items: [
          {
            text: 'diseñar los juegos y batallas campales de cada jornada.',
          },
          {
            text: 'Recibir al recién llegado con juego fácil y espada prestada, nunca con examen.',
          },
          {
            text: 'Vigilar el ritmo y el cansancio del campo colectivo, que son cuna de golpes burdos.',
          },
          {
            text: 'Contar la partida al final, como se cuenta la historia que todos hicieron.',
          },
        ],
      },
      {
        type: 'house',
        text: 'La casa de los Torneos',
      },
      {
        type: 'p',
        text: 'La cuarta casa guarda la ley. Es la del reglamento y el arbitraje: organiza los torneos de la Compañía —desde el primer torneo de espada larga en el Sakura Fest 2026 hasta los que vengan—, forma árbitros con sus dos banderas, inspecciona las armas antes de cada duelo y lleva las tablas de los encuentros. Su oficio es la justicia del campo: que el mejor gane y que el público entienda por qué gana. Para ello mantiene vivo el Manual de Arbitraje —las ordenanzas del juicio de las armas que acompañan a este Libro—, adapta las reglas a cada evento con aprobación del grupo y vela por que la competencia nunca traicione el espíritu de la máxima del grupo: el torneo es el juego de ser zorros, no de ser burros. Cuando la casa de los Torneos cumple, la Compañía crece con honor.',
      },
      {
        type: 'list',
        lead: 'Son deberes de esta casa:',
        items: [
          {
            text: 'organizar los torneos y las demostraciones con reglamento publicado.',
          },
          {
            text: 'Formar árbitros y anotadores, para que ningún evento dependa de una sola mano.',
          },
          {
            text: 'Inspeccionar armas y campo antes del primer duelo de cada jornada.',
          },
          {
            text: 'Llevar el registro de resultados y honores de la Compañía.',
          },
        ],
      },
      {
        type: 'h',
        text: 'Cómo se entra a una casa',
      },
      {
        type: 'p',
        text: 'Conviene cerrar el capítulo respondiendo la pregunta práctica. Nadie se inscribe en una casa con firma ni juramento: se entra asistiendo, ayudando y aprendiendo el oficio de esa mesa hasta que la casa lo reclama. El nuevo que le gustó la investigación de los tratados ya trabaja para la casa de la Recreación Histórica aunque no lo sepa; el que se quedó tarde armando espumas ya sirve a la forja; el que lleva la cuenta de los duelos ya arbitra con la casa de los Torneos. Cuando el grupo reconoce ese servicio con el nombre —«el de la crónica», «el de la forja», «el árbitro»—, la pertenencia está hecha. Las casas, como todo en la Compañía, se ganan con oficio y no con título; y cualquiera puede servir a dos o a cuatro en la misma jornada, porque las casas se reparten el trabajo, no a la gente.',
      },
      {
        type: 'p',
        text: 'Cerrado el ciclo de las casas, queda dicho el orden de la Compañía: cuatro oficios, un campo, un lema. Lo que sigue es la puerta de salida de este Libro —y la de entrada del lector.',
      },
    ],
  },
  {
    id: 'colofon',
    kicker: 'Colofón',
    title: 'Colofón, o de cómo unirse a la Compañía',
    blocks: [
      {
        type: 'p',
        text: 'Aquí termina la primera redacción de este Libro, no la obra de la Compañía. Quien haya leído con espada en la mano ya sabe todo lo necesario para venir: se entrena cada domingo a las 10:00 a. m. en el Parque La Flora, de Bucaramanga; no se cobra entrada, no se pide experiencia ni equipo, y las espadas de la casa esperan al que no trae.',
      },
      {
        type: 'p',
        text: 'Para eventos, torneos y la forja, el grupo se encuentra en la página strike-soft-hub.vercel.app y en el Instagram @armagedonsoftcombat.',
      },
      {
        type: 'p',
        text: 'Este volumen reserva en su portada el espacio del emblema oficial de la Compañía, que se insertará cuando la Compañía lo entregue. La historia del capítulo sexto queda en borrador, con los vacíos marcados, hasta la próxima emendación.',
      },
    ],
  },
];
