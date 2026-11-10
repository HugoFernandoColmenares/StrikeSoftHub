import { CodexNotice, CodexSection } from '../../models/codex.model';

/**
 * Texto del Manual de Arbitraje (Compañía Armagedón, primera redacción, MMXXVI), transcrito del PDF.
 * Marcas: `†` provisión sujeta a aprobación del grupo · `[†]` la cruz citada sin valor de provisión ·
 * `{{…}}` dato pendiente de consultar · `[…]` texto que el PDF corta en el salto de página ·
 * `*…*` cursiva · `**…**` negrita.
 */
export const MANUAL_NOTICE: CodexNotice =
  '*Aviso al lector.* Las reglas que aquí se asientan son las que la Compañía ya practica en su campo. Las provisiones nuevas, añadidas por esta redacción para la estandarización de los combates, van señaladas con el signo de la cruz [†] y quedan sujetas a la aprobación del grupo. Nada en este Manual obliga a grupos vecinos: cada campo legisla lo suyo; este códice legisla el nuestro.';

export const MANUAL_SECTIONS: readonly CodexSection[] = [
  {
    id: 'preambulo',
    kicker: 'Preámbulo',
    title: 'De por qué se escribe este Manual',
    blocks: [
      {
        type: 'p',
        text: 'El softcombat es, entre los deportes de combate, el de la costumbre libre: no hay federación única, ni reglamento común, ni doctrina que obligue a todos los campos. Cada grupo legisla lo suyo —zonas de toque, sistemas de puntos, castigos— y dos plazas que se digan del mismo deporte pueden estar jugando, en la práctica, dos deportes distintos. Esta libertad es el origen de su riqueza, pero también de su mayor debilidad: el que viaja no sabe qué reglas encontrará, y el público que mira por primera vez no distingue un punto de una falta si nadie se lo dice en su lengua.',
      },
      {
        type: 'p',
        text: 'A esa ambigüedad responde este Manual. La Compañía Armagedón pelea con reglas propias —heredadas del campo, afinadas en sus torneos— y las pone aquí por escrito, ordenadas como ordenanzas de juicio de las armas, para tres usos: que el participante sepa exactamente con qué juega y a qué expone su duelo; que el árbitro tenga reglas claras, señales fijas y escalera de sanciones sin lugar a capricho; y que el público de torneos y demostraciones en vivo entienda lo que ve, punto por punto, bandera por bandera. Un arbitraje que solo entienden los que ya lo conocen no arbitra: excluye.',
      },
      {
        type: 'p',
        text: 'El Manual no sustituye al espíritu del campo: lo preserva. Su filosofía —que el capítulo primero asienta— es la máxima de la Compañía: este es un juego de ser zorros, no de ser burros. Todo lo demás —zonas, puntos, desarmes, faltas, banderas— es esa máxima puesta en reglas. Las provisiones nuevas, añadidas por esta redacción para comenzar la estandarización de los combates, van marcadas con la cruz [†] y quedan sujetas a la aprobación del grupo; todo lo demás es costumbre viva ya practicada.',
      },
    ],
  },
  {
    id: 'filosofia',
    kicker: 'Capítulo I',
    title: 'De la filosofía del combate: ser zorros, no burros',
    blocks: [
      {
        type: 'p',
        text: 'Toda ordenanza se entiende desde su principio, y el de la Compañía cabe en una frase que se repite en el parque antes del primer duelo: este es un juego de ser zorros, no de ser burros. El zorro gana con astucia y técnica: mide la distancia, engaña la guardia, cobra el filo, aprovecha el descuido y marca el punto limpio. El burro gana con la fuerza: empuja, golpea de más, castiga el arma del rival con golpes que no son esgrima sino arrempuje. En el campo de Armagedón se premia al primero y se expulsa al segundo; y este Manual es, en el fondo, la definición técnica de esa diferencia.',
      },
      {
        type: 'p',
        text: 'De la máxima cuelgan las tres convicciones que ordenan todo el reglamento. La primera: la técnica vale más que la fuerza, por eso el toque que cuenta es el limpio y el golpe que castiga se llama falta; por eso el desarme —obra de astucia— vale dos puntos, y el golpe duro —obra de brazo— saca del torneo. La segunda: el juego largo vale más que la partida rápida, por eso el duelo se pelea al mejor de tres y por eso quien recibe un punto conserva su derecho al contrataque: el intercambio no termina en el primer toque porque la técnica se juzga en el conjunto, no en la sorpresa. La tercera: la seguridad manda sobre el resultado, por eso la estocada se proscribe aunque valga en otras casas, y por eso ninguna regla de este Manual se interpreta nunca en perjuicio de la integridad de quien combate.',
      },
      {
        type: 'p',
        text: 'El árbitro, por oficio, es el guardián de estas convicciones. No juzga solo toques: juzga intenciones —la del corte limpio y la del golpe desmedido— y aplica el espíritu donde la letra duda. Cuando el árbitro duda entre la lectura estricta y el espíritu de la máxima, elige el espíritu: mejor un punto menos en el marcador que un campo donde vuelva el burro.',
      },
    ],
  },
  {
    id: 'armas-y-torneos',
    kicker: 'Capítulo II',
    title: 'De las armas y de los tres torneos',
    blocks: [
      {
        type: 'p',
        text: 'La Compañía se especializa hoy en dos armas —la espada larga y la espada corta tipo sable—, pero su campo no está cerrado: el torneo de arma libre existe para que la invención no falte. Esta apertura, que es costumbre del grupo, se rige por una regla que no admite excepción: en virtud de la naturaleza improvisada y artesanal del softcombat, la estocada está prohibida en todas las categorías y en todos los eventos, priorizando la seguridad ante todo. Valen en cambio los cortes diagonales, horizontales y verticales, dados con el filo o la parte activa del arma. Las espadas rectas, curvas e incluso katanas se reciben en los torneos, siempre que se ciñan a la regla de no estocadas.',
      },
      {
        type: 'h',
        text: 'Los tres torneos',
      },
      {
        type: 'p',
        text: 'El calendario de la Compañía reconoce tres clases de torneo, cada uno con su arma y su límite:',
      },
      {
        type: 'list',
        items: [
          {
            title: 'Torneos de espada larga.',
            text: 'Se combaten con espadas de un máximo de **140 centímetros**, contando pomo y mango. Es la categoría de la escuela y la del primer torneo oficial del grupo, celebrado en el Sakura Fest 2026.',
          },
          {
            title: 'Torneos de espada corta.',
            text: 'Se combaten con espadas de hoja entre **90 y 120 centímetros**, contando pomo y mango. En esta categoría se permite usar un broquel o una daga en la mano auxiliar, siempre sin estocada con ninguna de las dos manos.',
          },
          {
            title: 'Torneos de arma libre.',
            text: 'Se admiten otras armas no convencionales a las espadas —mazas, armas de asta livianas, armas de invención de la forja— que respeten el reglamento anterior: núcleo flexible, espuma suficiente y ninguna punta con oficio de estocada.',
          },
        ],
      },
      {
        type: 'h',
        text: 'De la seguridad del arma',
      },
      {
        type: 'p',
        text: 'Ningún arma entra al torneo sin inspección. † Antes de la primera ronda, la mesa de inspectores revisa cada arma contra la checklist del Anexo C: categoría correcta y longitud dentro del límite, flexión de núcleo sin fatiga, capuchón de seguridad íntegro, espuma y cinta sin descosidos, pomo y guarda firmes, empuñadura limpia y mano auxiliar permitida. El veredicto es simple: apta o no apta; el arma rechazada puede repararse y presentarse de nuevo, pero no combate mientras no pase. La misma inspección vale para el broquel y la daga auxiliares. La decisión del inspector no se apela: el arma que no da confianza no pelea, aunque sea hermosa.',
      },
      {
        type: 'p',
        text: '† Por la misma razón de seguridad se recomienda —y el organizador puede hacer obligatorio para cada torneo— el uso de protección ocular durante los combates. El arma de espuma avisa y no hiere, pero el ojo es un huésped delicado y la astucia del juego no necesita apuestas ciegas: quien quiera combatir sin ella, que lo diga antes del primer duelo y acepte la decisión de la mesa.',
      },
    ],
  },
  {
    id: 'campo-y-voces',
    kicker: 'Capítulo III',
    title: 'Del campo, del saludo y de las voces de mando',
    blocks: [
      {
        type: 'p',
        text: 'El combate se pelea dentro de un área marcada que los antiguos llamaban *las listas*: el cerco dentro del cual la espada tiene licencia y fuera del cual ya se es espectador. El organizador define su forma y su medida según el lugar —cuadrado, círculo o el rectángulo que la plaza permita—, deja un margen despejado para la seguridad y coloca al árbitro de modo que vea a los dos competidores a la par. Salir de las listas durante el combate es falta, como el capítulo de sanciones dirá; volver a ellas, tras el alto del árbitro, se hace por las marcas que señale el mismo árbitro.',
      },
      {
        type: 'figure',
        src: 'assets/codex/talhoffer-listas.webp',
        width: 800,
        height: 564,
        alt: 'Grabado del siglo XV: dos esgrimidores combaten dentro de un cerco de postes mientras un juez preside',
        caption:
          'El duelo dentro de las listas («Schranke», el cerco de postes), en un fechtbuch de Hans Talhoffer, siglo XV: dos esgrimidores, un cerco, un juicio que preside. Dominio público. Nuestro área de combate es heredera directa de ese cuadro.',
      },
      {
        type: 'h',
        text: 'El saludo y el principio del duelo',
      },
      {
        type: 'p',
        text: 'Ningún duelo comienza sin saludo. Los competidores se presentan al árbitro, se saludan entre sí con la espada o con la voz, y el árbitro —tras verificar banderas y marcador— pronuncia la voz que abre el combate. Del mismo modo cierra todo duelo: el último punto se juzga, se anuncia el vencedor y los espadas vuelven a saludarse. El saludo no es cortesía suelta: es la primera señal para el público de que lo que viene está regido por reglas.',
      },
      {
        type: 'p',
        text: '† Las voces de mando de la Compañía, para torneos y demostraciones, son las siguientes, y el árbitro no varía su palabra: «¡Combate!» abre la acción; «¡Alto!» la congela de inmediato —a esta voz se detiene todo golpe en el aire—; «¡Punto azul!» o «¡Punto rojo!» anuncia el toque válido con la bandera alzada; «¡Desarme!» anuncia los dos puntos del desarme; «¡Falta!» —seguida del motivo en voz alta— anuncia llamada de atención; «¡Fuera!» señala la salida de las listas; «¡Pausa!» detiene el duelo por riesgo o lesión. Al oír «¡Alto!» o cualquier otra voz, el competidor que ya sueltó un golpe en marcha no lo fuerza: lo retira. Quien golpea tras la voz de alto comete falta —† como quien golpea al que ya no mira.',
      },
      {
        type: 'h',
        text: 'El público y la demostración',
      },
      {
        type: 'p',
        text: '[…] combate: no grita voces, no juzga toques, no reclama; su oficio es mirar y aplaudir, y el de la mesa es escucharlo con cortesía y gobernarlo con firmeza cuando la emoción lo exija.',
      },
    ],
  },
  {
    id: 'zonas-y-puntuacion',
    kicker: 'Capítulo IV',
    title: 'De las zonas y de la puntuación',
    blocks: [
      {
        type: 'p',
        text: 'Del toque válido depende todo el juicio, y por ello sus zonas se declaren primero y se respetan siempre. En el reglamento de la Compañía marcan punto las siguientes zonas: **las extremidades superiores por encima de la mano**—antebrazos, brazos y hombros—, **las extremidades inferiores por encima del pie**—espinillas, rodillas, muslos y caderas—, **el torso y la espalda**. Las manos y los pies, en cambio, son zonas protegidas: no marcan punto aunque el toque llegue. Si bien en otros lugares se aceptan manos y pies como puntos válidos, la Compañía prioriza la técnica: la mano que se ofrece barata convierte el duelo en caza de dedos, y la esgrima digna se pelea de guardia a guardia, no de dedillo a dedillo.',
      },
      {
        type: 'p',
        text: 'Conviene asentar también la diferencia que más sorprende al visitante del HEMA: aquí los toques al torso y la espalda otorgan punto plenamente. A diferencia del HEMA y de otros grupos —donde el torso se excluye del marcador y la acción se concentra en cabeza y brazos—, nuestro reglamento lo cuenta como el blanco principal del corte. La cabeza y el rostro, por su parte, no son blanco en nuestro campo: el golpe a la cara es falta, como el capítulo de sanciones declara.',
      },
      {
        type: 'table',
        head: ['Zona del cuerpo', 'Valor', 'Nota del juicio'],
        rows: [
          [
            'Torso y espalda',
            'Punto',
            'Blanco principal; el toque al torso vale punto, a diferencia del HEMA',
          ],
          ['Brazos y hombros (sobre la mano)', 'Punto', 'Incluye antebrazo y brazo; la mano no'],
          ['Piernas y muslos (sobre el pie)', 'Punto', 'Incluye espinilla y rodilla; el pie no'],
          ['Manos', 'Protegida', 'No marca; zona de trabajo del arma, no de caza'],
          ['Pies', 'Protegida', 'No marca; el pie que se mueve no es blanco'],
          [
            'Cabeza, rostro y cuello',
            'Falta',
            'El golpe a la cara es llamada de atención, nunca punto',
          ],
          [
            'Estocada (cualquier zona)',
            'Falta',
            'Prohibida siempre; la estocada suave también se llama',
          ],
        ],
      },
      {
        type: 'h',
        text: 'Del punto, del duelo y del contrataque',
      },
      {
        type: 'p',
        text: 'El combate se parece a la esgrima en su ley más simple: el que marca el punto gana el encuentro. Cada toque válido es un punto; el duelo —cada encuentro individual— se decide usualmente **al mejor de tres duelos**: quien gana dos duelos gana el cruce. El número de duelos puede aumentar según las consideraciones del organizador —torneos largos, finales, demostraciones—, pero nunca reducirse: menos de tres duelos no da al técnico tiempo de leer al rival, y la máxima de la casa quiere duelos largos.',
      },
      {
        type: 'p',
        text: 'Hay además una regla que distingue el juicio de la Compañía y que conviene explicar bien al público: **si un competidor recibe un punto, conserva la oportunidad de contrataque al primer movimiento.** Marcado el punto, el árbitro no separa de inmediato: permite la acción inmediata del que recibe —un solo movimiento, limpio y sin demora—, y si ese contrataque marca también, se anota. Si bien en otras puntuaciones el primero en marcar gana el intercambio, nuestro campo prioriza la técnica limpia y el juego largo a partidas rápidas y burdas: el contrataque del que recibe es parte del duelo, no un regalo del reloj. Pasado ese primer movimiento sin marca, el árbitro da la voz de alto y el punto queda firme.',
      },
      {
        type: 'p',
        text: '† *Del toque doble.* Si ambos competidores marcan en el mismo tiempo —en el intercambio inicial o en el contrataque—, el árbitro lo declara en voz alta: el intercambio se anula, ningún punto se anota y el duelo se reanuda en guardia. El doble golpe es obra de burro —dos cabezas que no miden— y no puede ser negocio de nadie: anularlo educa más que pagarlo.',
      },
      {
        type: 'h',
        text: 'Del desarme',
      },
      {
        type: 'p',
        text: 'El desarme—quitar el arma de la mano del rival, o hacérsela soltar— es la corona del juego estrecho y **vale dos puntos**. Se puede dar desarme por golpe a la espada del rival: el corte o la palanca certera sobre su arma que la suelta de su mano. También se puede, según el tipo de arma, agarrar el arma del rival, con una condición indispensable: haberla frenado primero con la propia arma —el *clutch*—. Agarrar una espada en movimiento, sin frenarla antes con el propio filo o cruz, no es clutch sino desastre, y no se permite. En el escenario del clutch, las técnicas de desarme valen: palanca, giro, golpe de pomo sobre la mano contraria —y † el agarre tiene límite de tres segundos: si en ese tiempo no hay desarme, el árbitro manda alto y las espadas vuelven a guardia.',
      },
      {
        type: 'p',
        text: '† *Del arma caída.* Si un competidor pierde su arma sin acción del rival —se le escapa, se le rompe el agarre—, se juzga como desarme del contrario: dos puntos. El arma que se suelta sola enseña lo mismo que el arma mal forjada: el arma se cuida.',
      },
    ],
  },
  {
    id: 'tacticas',
    kicker: 'Capítulo V',
    title: 'De las tácticas lícitas del zorro',
    blocks: [
      {
        type: 'p',
        text: 'Una vez inicia el combate, la astucia tiene licencia completa —dentro del marco del softcombat y del HEMA—, y este capítulo la enumera para que nadie la confunda con falta. Son tácticas lícitas: las distracciones con la mano libre —la mano que amenaza, abre o finge—, los chasquidos de lengua o de dedos que rompen el ritmo del rival, los zapateos —el pie que golpea el suelo para engañar el paso— e incluso el uso de capas y otros materiales que el organizador declare válidos para el evento: la capa que se agita a un lado y el corte que llega por el otro es, exactamente, el juego de ser zorro que la Compañía confiesa.',
      },
      {
        type: 'p',
        text: 'Estas tácticas comparten una medida común: engañan, no lastiman. La capa no se lanza sobre la cara del rival para cegarlo más de un tiempo de respiro; el zapateo no busca pisar pies —que son zona protegida, pero también dedos reales—; la mano libre no agarra, empuja ni tira del rival —salvo el clutch reglamentario sobre el arma—. † Por la misma medida quedan prohibidas las tácticas que la lista no admite: lanzar objetos al rival, arrojar tierra o arena, tapar la vista con los materiales más de lo que el espíritu del juego tolera, aprovechar las voces del árbitro —golpear al que oye «¡Alto!» se gira—, o fingir lesión para robar el ritmo. El zorro engaña la guardia; el tramposo engaña el duelo. La primera es el alma del juego; la segunda, la muerte del mismo.',
      },
      {
        type: 'p',
        text: 'Al árbitro corresponde distinguir en la práctica, y lo hará con este criterio simple: la táctica lícita ocurre entre las espadas —en el ritmo, en la mirada, en la medida—; la prohibida ocurre sobre el cuerpo del rival o fuera de las espadas. Cuando la duda sea razonable, el árbitro señala la táctica como lícita y corrige con la voz; cuando la intención de dañar sea visible, aplica el capítulo de faltas sin esperar el tercero de las llamadas.',
      },
    ],
  },
  {
    id: 'faltas',
    kicker: 'Capítulo VI',
    title: 'De las faltas y de las sanciones',
    blocks: [
      {
        type: 'p',
        text: 'La escalera del castigo en el campo de la Compañía tiene dos peldaños: la llamada de atención y la descalificación. Las llamadas de atención se anotan por competidor y por torneo completo, no por duelo; **al tercer llamado de atención hay descalificación.** La descalificación directa —sin espera de tercera llamada— corresponde a la falta grave, que en este reglamento es una sola: los golpes fuertes, con intenciones de lastimar o inhabilitar a un competidor, que significan descalificación directa del torneo. Entre ambos peldaños queda el campo del árbitro, que con la voz corrige lo que la medida ya no corrige.',
      },
      {
        type: 'h',
        text: 'Las llamadas de atención',
      },
      {
        type: 'p',
        text: 'Cuatro conductas llaman la atención del árbitro en el campo de la Compañía:',
      },
      {
        type: 'list',
        items: [
          {
            title: 'La estocada suave',
            text: 'la punta que se ofrece, aunque sea amable, aunque no avance el cuerpo, aunque «no pase nada». La estocada está proscrita en toda su familia; la suave la educa para la fuerte.',
          },
          {
            title: 'El golpe a la cara',
            text: 'cabeza, rostro y cuello no son blanco en nuestro campo; el toque que sube al rostro, aunque sea suave, se llama.',
          },
          {
            title: 'El golpe a la zona baja',
            text: 'por debajo de la cintura de protección: el toque que cae al pie, al tobillo o al terreno del cuerpo no marcado.',
          },
          {
            title: 'La salida del área de combate',
            text: 'dejar las listas durante la acción, por huida o por embestida propia; el campo tiene fronteras y el duelo tiene lugar.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Cada llamada se anuncia en voz alta con su motivo —«¡Falta! Estocada»—, se anota en el acta del Anexo B y se comunica al competidor de modo que no pueda alegar ignorancia a la tercera. † A estas cuatro se suman, para el orden del torneo, las siguientes: golpear tras la voz de alto, la conducta antideportiva —insultos, burla del rival, reclamos desmedidos— y la táctica prohibida del capítulo quinto. El competidor descalificado por tercera llamada abandona el torneo y deja su cruce en manos del marcador; la mesa decide si su rival avanza directo o si el puesto se resuelve entre los demás.',
      },
      {
        type: 'h',
        text: 'La descalificación directa',
      },
      {
        type: 'p',
        text: 'El golpe fuerte es la única falta que no espera tercera llamada, y su definición no admite sutileza: **golpes fuertes, con intenciones de lastimar o inhabilitar a un competidor, significan descalificación directa del torneo.** El árbitro la reconoce por la conjugación de tres signos: la fuerza del golpe —que sobre espuma y cuerpo se siente más allá del aviso—, la repetición del exceso y la intención visible, que se lee en el cuerpo antes que en el resultado. Golpeado el competidor de modo que no pueda seguir, el árbitro da la voz de pausa, atiende primero a la persona y juzga después. † La mesa puede, además, suspender al competidor para el siguiente torneo de la Compañía, decisión que la casa de los Torneos pondera y comunica con su motivo.',
      },
      {
        type: 'table',
        head: ['Conducta', 'Sanción', 'Registro'],
        rows: [
          ['Estocada suave', 'Llamada de atención', 'Acta del combate; tercera = descalificación'],
          [
            'Golpe a la cara o a la zona baja',
            'Llamada de atención',
            'Acta; tercera = descalificación',
          ],
          ['Salirse del área de combate', 'Llamada de atención', 'Acta; tercera = descalificación'],
          [
            'Golpear tras la voz de alto †',
            'Llamada de atención',
            'Acta; tercera = descalificación',
          ],
          ['Conducta antideportiva †', 'Llamada de atención', 'Acta; tercera = descalificación'],
          ['Táctica prohibida †', 'Llamada de atención', 'Acta; tercera = descalificación'],
          [
            'Golpe fuerte con ánimo de lastimar o inhabilitar',
            'Descalificación directa',
            'Acta firmada por la mesa; informe al grupo',
          ],
        ],
      },
    ],
  },
  {
    id: 'arbitro',
    kicker: 'Capítulo VII',
    title: 'Del árbitro, de sus banderas y de sus señales',
    blocks: [
      {
        type: 'p',
        text: 'El árbitro es el officer de las ordenanzas y su oficio se ejerce a la vista de todos: por eso sus señales se estandarizan como sus voces. El equipo de arbitraje de la Compañía, para torneos, se compone de árbitro principal —dirige las voces, juzga los toques y aplica las sanciones—, anotador que lleva el acta del Anexo B y el marcador público, y inspector de armas que ejecuta la checklist del Anexo C antes de la primera ronda. † En eventos grandes se añade un juez de línea a cada lado de las listas, que asiste al árbitro en zonas y salidas sin sustituir su palabra. En el parque del domingo, el mismo oficio corre entre todos: el que arbitra hoy pelea mañana, y nadie se acostumbra a un solo lado de la bandera.',
      },
      {
        type: 'h',
        text: 'Las dos banderas',
      },
      {
        type: 'p',
        text: 'El arbitraje de la Compañía señala sus puntos con **dos banderas de diferente color, azul y roja**, una por competidor, que el árbitro —o el juez de línea— lleva a cada mano y levanta en el caso de marcar puntos: bandera azul alzada, punto del competidor azul; bandera roja alzada, punto del competidor rojo. La bandera se alza alta y firme, a la altura del hombro o sobre él, con el brazo extendido hacia el lado del competidor que marca, y se mantiene alzada hasta que el anotador registre el punto y el árbitro anuncie la reanudación. El público aprende el marcador mirando banderas, no oyendo discusiones: esa es la razón de la costumbre.',
      },
      {
        type: 'p',
        text: 'Las demás señales —llamada de atención, desarme, doble, fuera, pausa, descalificación— se ejecutan con las mismas dos banderas en combinaciones fijas que el Anexo A recoge en tabla ilustrada. El árbitro nuevo aprende la tabla antes de su primer torneo; el árbitro veterano la repite en voz alta ante el público cuando la demostración lo pide, porque enseñar la señal es parte del espectáculo limpio.',
      },
      {
        type: 'h',
        text: 'Criterios del toque válido',
      },
      {
        type: 'p',
        text: 'El árbitro declara punto cuando concurren, en un mismo golpe, las siguientes condiciones: el golpe llega con **la parte activa del arma** —la blanca, no la guarda ni el pomo—; **a zona válida** del cuerpo, según la tabla del capítulo cuarto; **con decisión clara** —el toque que apenas roza se corrige con la voz, no se paga con punto—; y **sin falta previa** del que golpea: el golpe que nace de una estocada, de una salida de las listas o tras la voz de alto no vale aunque llegue. † En la duda razonable, el árbitro declara el intercambio nulo y lo repite: mejor la repetición que el punto robado; pero la duda no se confunde con la mirada perdida —el árbitro que no ve, no duda, y su posición en el campo es la de quien ve.',
      },
      {
        type: 'p',
        text: '† *De las consultas.* Solo el competidor puede pedir aclaración de un fallo, y lo hace con una palabra al árbitro tras el alto; el árbitro explica brevemente su juicio y la decisión queda firme. El público no consulta, el anotador no juzga, y el rival del consultante no pierde el tiempo: las consultas no detienen el torneo más que lo que tarda una respiración. Reclamar todo, como se dice en el parque, es obra de burros.',
      },
    ],
  },
  {
    id: 'organizacion',
    kicker: 'Capítulo VIII',
    title: 'De la organización del torneo',
    blocks: [
      {
        type: 'p',
        text: 'El torneo de la Compañía —de espada larga, de espada corta o de arma libre— corre por un orden que la casa de los Torneos gobierna y que aquí se deja escrito para que cualquier esquina de la Compañía pueda repetirlo. Antes de la primera ronda: la mesa se instala a la vista del público con marcador, actas y banderas de reserva; el campo se marca y se despeja; los armas pasan la inspección del Anexo C y reciben su señal de apta; y los competidores se registran con nombre y arma, oyen la lectura pública de las reglas esenciales —zonas, puntos, faltas— y firman su conformidad. † El competidor que llegue sin pasar inspección no pelea, y el que no oiga la lectura de reglas, la oye antes de su primer duelo.',
      },
      {
        type: 'p',
        text: 'El cuadro de cruces —† a eliminación simple para torneos compactos, a doble eliminación cuando el número y la jornada lo permitan— se sortea públicamente tras la inspección, y cada cruce se pelea al mejor de tres duelos, salvo lo que el organizador declare al principio. El árbitro llama a los cruces en voz alta; el competidor llamado tiene un tiempo de cortesía para presentarse —† dos minutos— pasado el cual el cruce se da por perdido. Tras cada cruce, el anotador firma el acta y el marcador público se actualiza antes de llamar al siguiente.',
      },
      {
        type: 'p',
        text: 'La jornada cierra con ceremonia: se anuncian los puestos, se entregan los honores —en la memoria del grupo están ya el primer torneo de espada larga del Sakura Fest 2026 y su premio de forja, un ōdachi— y se agradece al público con la lectura de lo que aprendió: cuántos puntos, cuántas faltas, qué duelos recordados. El torneo termina como el duelo: con saludo. Y tras el saludo, si el lugar lo permite, campo abierto: el público que quiera probar la espada, lo hace bajo las mismas reglas que acaba de ver cumplir.',
      },
    ],
  },
  {
    id: 'anexo-a',
    kicker: 'Anexo A',
    title: 'Tabla de señales del árbitro',
    blocks: [
      {
        type: 'p',
        text: 'Aquí quedan fijadas las señales del arbitraje de la Compañía, pensadas para leerse a distancia: cada situación tiene su combinación de banderas y su voz, y ninguna otra señal vale. El árbitro mantiene el cuerpo quieto mientras señala —la bandera es la que viaja, no los pies— y nombra la situación en voz alta, porque la señal se ve y la voz se oye, y entre ambas no cabe el error.',
      },
      {
        type: 'table',
        head: ['Situación', 'Señal con las banderas', 'Voz del árbitro'],
        rows: [
          [
            'Inicio del duelo',
            'Banderas bajas a ambos lados, brazos abiertos hacia el centro de las listas',
            '«¡Combate!»',
          ],
          [
            'Punto del azul',
            'Bandera azul alzada en alto, brazo extendido del lado azul; la roja permanece baja',
            '«¡Punto azul!»',
          ],
          [
            'Punto del rojo',
            'Bandera roja alzada en alto, brazo extendido del lado rojo; la azul permanece baja',
            '«¡Punto rojo!»',
          ],
          [
            'Contrataque válido',
            'Bandera del color alzada, luego un golpe seco de la misma al hombro',
            '«¡Punto... de contrataque!»',
          ],
          [
            'Toque doble †',
            'Ambas banderas alzadas a la par, a la misma altura',
            '«¡Doble! Se anula»',
          ],
          [
            'Desarme',
            'Bandera del color alzada y puño cerrado de la otra mano sobre la cabeza',
            '«¡Desarme! Dos puntos»',
          ],
          [
            'Llamada de atención',
            'Bandera del infractor a media altura, cruzada frente al pecho; la otra baja',
            '«¡Falta!» + motivo en voz alta',
          ],
          [
            'Tercera llamada',
            'Ambas banderas cruzadas en X a media altura, frente al pecho',
            '«¡Tercera! ¡Descalificado!»',
          ],
          [
            'Salida de las listas',
            'Brazo con bandera señalando el borde por donde se salió',
            '«¡Fuera!»',
          ],
          [
            'Pausa por riesgo o lesión',
            'Ambas banderas bajas, agitadas suavemente cruzadas delante del cuerpo',
            '«¡Pausa!»',
          ],
          [
            'Descalificación directa',
            'Ambas banderas cruzadas en X sobre la cabeza, brazos en alto',
            '«¡Fuera del torneo!»',
          ],
          [
            'Fallo nulo por duda †',
            'Bandera del color alzada y girada en círculo una vez',
            '«¡Nulo! Se repite»',
          ],
        ],
        caption:
          'Provisión de esta redacción: las señales marcadas con la cruz quedan sujetas a aprobación del grupo; las demás corresponden a la costumbre ya practicada.',
      },
    ],
  },
  {
    id: 'anexo-b',
    kicker: 'Anexo B',
    title: 'Hoja de acta de combate',
    blocks: [
      {
        type: 'p',
        text: 'De cada cruce queda el acta firmada: el modelo que sigue se imprime, se llena a mano durante el cruce y se archiva al cierre del torneo. El anotador la lleva; el árbitro la firma; los competidores la firman al final, y con su firma el resultado queda sentado.',
      },
      {
        type: 'record',
      },
    ],
  },
  {
    id: 'anexo-c',
    kicker: 'Anexo C',
    title: 'Checklist de inspección de armas',
    blocks: [
      {
        type: 'p',
        text: 'Ningún arma combate sin inspección previa. El inspector recorre la lista en orden, marca cada casilla y da el veredicto al pie; el arma que falle una casilla se repara y vuelve a la fila. La inspección se repite si el arma recibió golpe fuerte durante el torneo.',
      },
      {
        type: 'table',
        head: ['Revisión', 'Requisito', 'Sí / No'],
        rows: [
          [
            'Categoría y longitud',
            'Espada larga: máximo 140 cm contando pomo y mango. Espada corta: hoja entre 90 y 120 cm contando pomo y mango. Arma libre: según lo declarado al registro',
            '___ / ___',
          ],
          [
            'Núcleo flexible',
            'Dobla con decisión sin partirse ni quedar doblado; sin fatiga visible ni fisuras',
            '___ / ___',
          ],
          [
            'Capuchón de seguridad',
            'Integro en la punta; la espuma no descubre el núcleo en extremo alguno',
            '___ / ___',
          ],
          [
            'Espuma y cinta',
            'Blanca completa, sin descosidos ni zonas endurecidas; cinta firme, sin bordes levantados',
            '___ / ___',
          ],
          [
            'Pomo y guarda',
            'Firmes al tirón seco en todas direcciones; sin partes rígidas descubiertas',
            '___ / ___',
          ],
          [
            'Empuñadura',
            'Limpia, seca, sin cinta suelta; agarre seguro con mano sudada',
            '___ / ___',
          ],
          [
            'Mano auxiliar',
            'En espada corta: broquel o daga permitidos, inspeccionados por separado. En espada larga: sin auxiliar',
            '___ / ___',
          ],
          [
            'Prueba de golpe',
            'Un golpe de decisión del inspector contra su propio antebrazo protegido: avisa y no hiere',
            '___ / ___',
          ],
          [
            'Protección ocular †',
            'Si el organizador la hizo obligatoria: competidor equipado antes del primer duelo',
            '___ / ___',
          ],
        ],
        caption:
          'Veredicto del inspector: el arma es ________ (APTA / NO APTA). Inspector: ________ Firma: ________',
      },
    ],
  },
  {
    id: 'glosario',
    kicker: 'Anexo D',
    title: 'Glosario del arbitraje',
    blocks: [
      {
        type: 'p',
        text: 'Para que el novato y el público hablen la lengua del campo, este glosario recoge los términos que el Manual usa con significado fijo.',
      },
      {
        type: 'glossary',
        entries: [
          {
            term: 'Softcombat',
            definition:
              'Combate deportivo con armas de espuma sobre núcleo flexible, regido por reglamentos locales',
          },
          {
            term: 'LARP',
            definition:
              'Juego de rol en vivo (Live Action Role-Playing); tradición de la que el softcombat heredó arma segura, vestuario y juego colectivo',
          },
          {
            term: 'HEMA',
            definition:
              'Artes marciales históricas europeas: estudio y práctica deportiva de los tratados de esgrima antigua, de los que la Compañía hereda rigor y arbitraje',
          },
          {
            term: 'Las listas',
            definition: 'El área de combate marcada; salir de ellas durante la acción es falta',
          },
          {
            term: 'Duelo',
            definition:
              'Cada encuentro individual; se gana marcando el punto. Los cruces se pelean usualmente al mejor de tres duelos',
          },
          {
            term: 'Punto',
            definition:
              'Toque válido: parte activa del arma sobre zona válida, con decisión y sin falta previa',
          },
          {
            term: 'Zonas protegidas',
            definition:
              'Manos y pies: toques que no marcan, por decisión reglamentaria de la Compañía',
          },
          {
            term: 'Contrataque',
            definition: 'Primer movimiento del competidor que recibe un punto; si marca, se anota',
          },
          {
            term: 'Estocada',
            definition:
              'Golpe con la punta con oficio de penetrar; prohibida siempre, en toda su fuerza',
          },
          {
            term: 'Clutch',
            definition:
              'Frenar el arma del rival con la propia antes de agarrarla; condición del agarre reglamentario, con límite de tres segundos',
          },
          {
            term: 'Desarme',
            definition:
              'Quitar o soltar el arma del rival, por golpe a la espada o por técnica tras el clutch; vale dos puntos',
          },
          {
            term: 'Toque doble',
            definition: 'Punto marcado por ambos a la vez; el intercambio se anula y se repite',
          },
          {
            term: 'Llamada de atención',
            definition:
              'Sanción menor (estocada suave, golpe a la cara o a la zona baja, salida del área); a la tercera, descalificación',
          },
          {
            term: 'Descalificación',
            definition:
              'Exclusión del torneo: por tercera llamada, o directa por golpe fuerte con ánimo de lastimar',
          },
          {
            term: 'Accrescere',
            definition: 'Acrecentar: ganar terreno avanzando el pie, en la escuela de Fioré',
          },
          {
            term: 'Decrescere',
            definition: 'Decrecer: ceder terreno retirando el pie, en la escuela de Fioré',
          },
          {
            term: 'Posta (guardia)',
            definition:
              'Posición firme de la que nace y a la que vuelve el golpe: Dama, Larga, Breve, Ventana, Cola Larga, Colmillo de Jabalí, Puerta de Hierro',
          },
          {
            term: 'Fendente',
            definition: 'Corte descendente vertical, de arriba abajo por el centro',
          },
          {
            term: 'Mandritto',
            definition: 'Corte diagonal descendente desde el lado derecho del esgrimidor',
          },
          {
            term: 'Manreverso',
            definition: 'Corte diagonal descendente desde el lado izquierdo',
          },
          {
            term: 'Sottano',
            definition: 'Corte ascendente, de abajo arriba',
          },
          {
            term: 'Mezzano (tondo)',
            definition: 'Corte horizontal, a media altura',
          },
          {
            term: 'Banderas',
            definition:
              'Las dos señales del árbitro, azul y roja, una por competidor; se alzan para marcar puntos',
          },
          {
            term: 'Forja',
            definition: 'Taller colectivo de la Compañía donde se construyen y reparan las armas',
          },
        ],
      },
    ],
  },
  {
    id: 'colofon',
    kicker: 'Colofón',
    title: 'Colofón y vigencia de las ordenanzas',
    blocks: [
      {
        type: 'p',
        text: 'Aquí termina el Manual de Arbitraje de la Compañía Armagedón. Estas ordenanzas rigen los torneos y demostraciones en vivo del grupo desde su aprobación; se enmiendan por decisión de la Compañía, y toda enmienda se asienta en la siguiente redacción con su fecha y su motivo. Las provisiones marcadas con la cruz [†] entran en vigencia cuando el grupo las apruebe.',
      },
      {
        type: 'p',
        text: 'Este volumen reserva en su portada el espacio del emblema oficial de la Compañía, que se insertará cuando la Compañía lo entregue. Para torneos, demostraciones y la escuela del grupo: Parque La Flora, Bucaramanga, los domingos a las 10:00 a. m. — strike-soft-hub.vercel.app · Instagram @armagedonsoftcombat.',
      },
    ],
  },
];
