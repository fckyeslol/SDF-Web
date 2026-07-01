/**
 * Contenido del sitio (data-driven) — Asociación Católica Sembradores de Fe.
 * Texto adaptado del "Proyecto de Vida Apostólica · Reglas de Vida"
 * (Revisión 1 de abril de 2019, Versión 2.0).
 * Cada entrada se renderiza en `src/pages/[...slug].astro`.
 */

export interface PillarLink {
  label: string;
  body?: string;
  href: string;
}

export interface Section {
  id?: string;
  heading?: string;
  paras?: string[];
  list?: string[];
  links?: PillarLink[];
  quote?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export interface PageDef {
  slug: string;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  type?: 'content' | 'form';
  fields?: string[];
  sections?: Section[];
}

// ── CAPÍTULO I · Nuestra Identidad ────────────────────────────────
const identidad: PageDef[] = [
  {
    slug: 'identidad',
    title: 'Nuestra Identidad',
    eyebrow: 'Capítulo I',
    subtitle: 'Una vocación específica en la Iglesia: conocerse, conocer y transformarse.',
    sections: [
      {
        id: 'mision',
        heading: 'Nuestra Misión',
        paras: [
          'Hacer discípulos por medio de la transformación del individuo, mediante una experiencia viva y auténtica en Cristo Jesús, sujetos al magisterio y a la sana doctrina de la fe de nuestra Iglesia Católica, a través de la oración, el ayuno, la vigilia y la Santa Eucaristía —máxima expresión de nuestra fe— por medio de una espiritualidad renovada.',
        ],
      },
      {
        id: 'vision',
        heading: 'Nuestra Visión',
        paras: [
          'Extender nuestro accionar de transformación y discipulado a otros lugares del país y del mundo, proclamando activa y constantemente el mensaje de Cristo como testigos y cooperadores de la Madre Iglesia, a través de misiones evangelizadoras, asambleas de oración, obras de misericordia, eventos masivos de evangelización y vida sacramental.',
        ],
      },
      {
        id: 'vocacion',
        heading: 'Una vocación específica',
        paras: [
          'Comprometerse como Sembradores de Fe es responder a la vocación específica de conocerse —para partir de la propia realidad—, conocer a Dios —escucharlo y seguirlo— y transformarse —dando frutos de conversión y de vida ascética alegre, con un servicio de amor— para vivir el Evangelio y participar en la misión de la Iglesia.',
          'Es una opción libre, recibida como don por quien la acoge, que da vida de calidad y santidad. Pueden seguir este camino cristianos católicos de cualquier condición social, cultural y estado de vida que sientan la llamada de Dios y se identifiquen con el amor a la Iglesia y la salvación de las almas.',
        ],
      },
      {
        heading: 'Esto requiere actitudes concretas',
        list: [
          'Conocer a Dios y mantener una intimidad constante por medio de la oración, reconociéndolo como Padre que salva, como Hijo, maestro y modelo a seguir, y como Espíritu Santo animador de la transformación.',
          'Sentirse instrumentos vivos de Dios que darán gloria con su vida y su servicio a los hermanos, uniéndose a las obras de misericordia y al anuncio de la Palabra que transforma.',
        ],
      },
      {
        id: 'mundo',
        heading: '¿Cómo viven los Sembradores de Fe en el mundo?',
        paras: [
          'Viven su fe en su propia realidad secular, realizando el proyecto de Dios primeramente en su quehacer cotidiano, implicándose con los medios de comunicación para hacer una evangelización masiva y llegando a todos los lugares donde el Espíritu Santo los suscite.',
          'Así trabajan por el bien de la Iglesia y de la sociedad, según la propia situación y las necesidades concretas.',
        ],
      },
      {
        id: 'laical',
        heading: 'La vocación laical',
        paras: [
          'El Concilio Vaticano II desarrolló el sentido e importancia de los carismas para el Pueblo de Dios: el Espíritu Santo no solo santifica y edifica su Iglesia mediante los sacramentos y los ministros, sino que «también reparte gracias especiales entre los fieles de cualquier estado o condición». Todo carisma debe vivirse en unidad y armonía con los demás.',
          'Los Sembradores de Fe somos laicos que vivimos el carisma de la Transformación en las condiciones de vida y trabajo, en el estado de matrimonio y desarrollando también nuestro rol dentro de la familia.',
          'También se vive este carisma desde la vocación de soltería, consagrando la vida al servicio del Reino de Dios y cumpliendo la misión de la Iglesia.',
        ],
      },
      {
        id: 'pilares',
        heading: 'Los pilares de nuestro camino',
        paras: [
          'Un proyecto de vida apostólica que se despliega en varias dimensiones. Explora cada una:',
        ],
        links: [
          { label: 'Nuestro Carisma', body: 'La Transformación: un encuentro real con Jesucristo que renueva la vida por completo.', href: '/nuestro-carisma' },
          { label: 'Las Koinonías', body: 'Grupos de doce, de dos en dos, para caminar cerca del hermano como la Iglesia primitiva.', href: '/koinonias' },
          { label: 'Vida Apostólica', body: 'Testimonio de las Bienaventuranzas y compromiso con las obras de misericordia.', href: '/compromiso-apostolico' },
          { label: 'Formación', body: 'Un camino gradual, libre y madurado bajo la acción del Espíritu Santo.', href: '/formacion' },
          { label: 'Espiritualidad', body: 'Vida sacramental, oración constante y comunión filial con María.', href: '/espiritualidad' },
          { label: 'Comunidad', body: 'De la casa madre en Barranquilla hacia nuevas comunidades en Colombia y el exterior.', href: '/comunidades-externas' },
        ],
      },
    ],
  },
  {
    slug: 'historia',
    title: 'Nuestra Historia',
    eyebrow: 'Quiénes somos',
    subtitle: 'Un movimiento de laicos para laicos, nacido el 30 de junio de 2015.',
    sections: [
      {
        heading: 'El origen',
        paras: [
          'Sembradores de Fe se constituyó el 30 de junio de 2015, como fruto del trabajo apostólico y la experiencia mística con el Espíritu Santo de nuestro fundador y director, el psicólogo y predicador Ronald Alfonso Granados Arroyo.',
          'Tras muchos años de caminar en Cristo y ser testigo del poder transformador de Dios, de sus milagros y sanaciones, Dios coloca en su corazón la misión especial de crear un nuevo movimiento que, en sintonía con el Concilio Vaticano II, avance con tenacidad en la labor de conquistar almas para Cristo.',
        ],
        image: '/assets/photos/founder.jpg',
        imageAlt: 'Ronald Alfonso Granados Arroyo, fundador y director de Sembradores de Fe',
        imageCaption: 'Ronald Alfonso Granados Arroyo — fundador y director',
      },
      {
        heading: 'Quiénes somos hoy',
        paras: [
          'Sembradores de Fe es una comunidad católica conformada por laicos conscientes de la propia vocación de bautizados, llamados a participar de la misión de la Iglesia en el mundo, fundamentados en la espiritualidad renovada de nuestra Iglesia Católica.',
          'Desde allí hacemos equilibrio entre espiritualidad, Palabra, doctrina, vivencia y práctica; entre contemplación y apostolado, donde trabajamos la Transformación como centro de nuestro caminar en Dios e identidad de Sembradores de Fe: nuestro carisma.',
        ],
        quote:
          'Los laicos… están llamados a ser fuertes miembros vivos, a procurar el crecimiento de la Iglesia y su perenne santificación con todas sus fuerzas. (Lumen Gentium, 33)',
      },
    ],
  },
  {
    slug: 'nuestro-carisma',
    title: 'Nuestro Carisma: la Transformación',
    eyebrow: 'Identidad',
    subtitle: 'Un estilo de vida que nace del encuentro real con Jesucristo.',
    sections: [
      {
        id: 'transformacion',
        heading: 'El carisma de la Transformación',
        paras: [
          'El carisma que anima a Sembradores de Fe es la Transformación: un auténtico proceso por el cual hombres y mujeres, a través de un encuentro real con Jesucristo, pueden experimentar el «Reino de los Cielos».',
          'Este estilo de vida parte de una experiencia evangélica que tiene su fuente en Cristo, cabeza de la Iglesia, y se alimenta cada día en la comunión sacramental y en la comunión con todo el Cuerpo de Cristo.',
        ],
      },
      {
        heading: 'Cómo se nos transmite el carisma',
        paras: [
          'El director, bajo la guía del Espíritu Santo y desde su experiencia y testimonio, transmite a los miembros del movimiento un estilo de vida en la Transformación.',
          'Requiere una metodología que conduce el proceso dentro de nuestra estructura, embellecida con la guía de nuestra Madre María, para llegar a ser discípulos auténticos de Jesús y participar en la misión de la Iglesia.',
        ],
      },
      {
        heading: 'Estilo de vida del Sembrador',
        paras: [
          'Los Sembradores de Fe acogen este estilo de vida como don de Dios a su Iglesia y lo hacen fructificar de acuerdo con la propia condición laical o ministerial.',
          'Participan en el camino de transformación y se comprometen a vivir siguiendo a Cristo, siendo obedientes al magisterio de la Iglesia. En María, Madre y modelo de discipulado, descubren el aspecto más profundo de la vocación de discípulos y misioneros.',
        ],
      },
    ],
  },
];

// ── CAPÍTULO II · Compromiso Apostólico ───────────────────────────
const compromiso: PageDef[] = [
  {
    slug: 'compromiso-apostolico',
    title: 'Compromiso Apostólico',
    eyebrow: 'Capítulo II',
    subtitle: 'El estilo de vida del Sembrador, marcado por el espíritu de las Bienaventuranzas.',
    sections: [
      {
        id: 'bienaventuranzas',
        heading: 'Testimonio de las Bienaventuranzas',
        paras: [
          'El estilo de vida personal del Sembrador de Fe, marcado por el espíritu de las Bienaventuranzas, lo compromete a evangelizar la cultura y la vida social. Por esto vive y da testimonio:',
        ],
        list: [
          'De la primacía del espíritu, de la fecundidad del sufrimiento y de la no-violencia como fermento de paz y de perdón.',
          'De la libertad, en obediencia al plan de Dios, apreciando el valor y la autonomía de las realidades seculares y orientándolas al servicio de las personas.',
          'De la pobreza evangélica, administrando los bienes confiados con criterios de solidaridad, a la luz del bien común.',
          'De la sexualidad, en conformidad con una visión evangélica de la castidad: una vida célibe o matrimonial íntegra, gozosa y centrada en el amor.',
        ],
      },
      {
        id: 'compromiso',
        heading: 'El compromiso apostólico',
        list: [
          'Realizan su apostolado, primordialmente, a través de las actividades diarias, siguiendo a Jesucristo enviado por el Padre a servir a los hombres.',
          'Animados por el Espíritu Santo, atienden a las personas enfermas, a los hogares en crisis y a cuantos desean iniciar un proceso de transformación en Dios.',
          'Promueven y defienden la familia, núcleo fundamental de la sociedad y de la Iglesia, esforzándose por construirla como «iglesia doméstica».',
          'Practican la Doctrina Social de la Iglesia y favorecen un uso educativo de los medios de comunicación.',
          'Apoyan la actividad misionera de la Iglesia y la apertura al diálogo entre las culturas.',
        ],
      },
      {
        id: 'pedagogia',
        heading: 'Pedagogía del Amor y la Bondad',
        paras: [
          'Basada en el Evangelio y en las vivencias de Jesús, hombre perfecto y Dios. Adoptan el mandato nuevo de Jesús —amarnos como Él nos ama— y procuran persuadir más que imponer, mediante un diálogo constante en las Koinonías.',
        ],
        list: [
          'Crean un ambiente de familia donde la cercanía, el acompañamiento personal y la experiencia de grupo ayudan a descubrir la presencia de Dios.',
          'Educan en el amor a la vida, la responsabilidad, la solidaridad y la comunión.',
          'Apelan a los recursos interiores de la persona y creen en la acción invisible de la gracia.',
          'Miran a los jóvenes con optimismo realista, a los adultos mayores como memoria de la experiencia de Dios y a los niños como la nueva civilización del amor.',
        ],
      },
      {
        id: 'actividades',
        heading: 'Apostolados y Actividades',
        paras: [
          'Los Sembradores de Fe están abiertos a muchas formas de apostolado. Entre ellas ocupan un lugar preferente, además del trabajo y la propia profesionalidad:',
        ],
        list: [
          'La evangelización, la visita a enfermos y las misiones.',
          'El servicio social entre los pobres.',
          'La acción en el campo de la comunicación social.',
          'Los retiros y la cooperación en la pastoral de familia.',
          'La colaboración en el diálogo ecuménico e interreligioso.',
          'El compromiso de la caridad en el servicio socio-político.',
          'La catequesis, la formación cristiana y la animación de grupos juveniles y familiares.',
        ],
      },
    ],
  },
  {
    slug: 'koinonias',
    title: 'Las Koinonías',
    eyebrow: 'El modelo de Jesús',
    subtitle: 'Espacios de comunión donde la necesidad del uno es la necesidad del otro.',
    sections: [
      {
        id: 'que-es',
        heading: '¿Qué es una Koinonía?',
        paras: [
          'La Koinonía es un concepto teológico que significa comunión y unión. Son un espacio de comunión donde nos reunimos en ambiente fraterno para reflexionar la Palabra de Dios y orar en comunidad.',
          'Al igual que en la Iglesia primitiva, nos permiten estar más cerca del hermano y acompañarlo de forma personal: «Acudían asiduamente a la enseñanza de los apóstoles, a la comunión, a la fracción del pan y a las oraciones» (Hechos 2,42-47).',
        ],
      },
      {
        id: 'modelo',
        heading: 'El modelo de Jesús',
        paras: [
          'Jesús llamó a sus doce discípulos y les dio poder para expulsar espíritus y sanar toda enfermedad (Mateo 10,1), enviándolos a las ovejas descarriadas, a proclamar el Reino, a sanar y a liberar. Pero también designó a otros setenta y dos y los envió de dos en dos a las ciudades donde Él pensaba ir (Lucas 10,1).',
          'Por eso nuestras Koinonías se dirigen por líderes de dos en dos, conforme al modelo de Jesús. El número doce, usado 187 veces en la Biblia, indica la perfección del gobierno: el servicio, la potestad y la protección que solo Dios puede darnos. Ser discípulo es un llamado con propósito, para trabajar con amor y pasión en el Reino y formar nuevos discípulos: fuimos cuidados para cuidar, enseñados para enseñar.',
        ],
        image: '/assets/photos/teaching.jpg',
        imageAlt: 'Enseñanza y comunidad en Sembradores de Fe',
      },
      {
        id: 'tipos',
        heading: 'Tipos de Koinonías',
        list: [
          'Koinonías de Parejas',
          'Koinonías de Mujeres',
          'Koinonías de Hombres',
          'Koinonías de Jóvenes',
        ],
      },
      {
        id: 'estructura',
        heading: 'Estructura organizacional',
        list: [
          'Líderes Generales de Koinonía — dos parejas de servidores (matrimonios) que asignan líderes, velan por el ingreso de nuevos servidores, consolidan la información, programan la formación y visitan periódicamente cada Koinonía.',
          'Líder de Koinonía — servidor designado por el director general; realiza mentoría, lidera los encuentros y presenta informes de desarrollo.',
          'Servidores (discípulos) — miembros de la comunidad asignados a una Koinonía para continuar su proceso de transformación y crecimiento espiritual.',
          'Asistentes — miembros que asisten a los encuentros pero que aún no forman parte del grupo de servidores de la comunidad.',
        ],
      },
      {
        id: 'encuentros',
        heading: 'Los encuentros',
        paras: [
          'Cada Koinonía realiza un encuentro cada quince días, de aproximadamente dos horas, para compartir y reflexionar la Palabra conforme a la guía enviada por los líderes generales de Koinonías. Participan servidores y asistentes.',
          'En la segunda hora participan solo los servidores SDF, y se tratan temas relacionados con el discipulado y el servicio.',
        ],
        quote: '«Que la necesidad del uno sea la necesidad del otro.»',
      },
    ],
  },
];

// ── CAPÍTULO III y IV · Comunidad, Comunión, Comunidades Externas ─
const comunidad: PageDef[] = [
  {
    slug: 'comunion-colaboracion',
    title: 'Comunión y Colaboración',
    eyebrow: 'Capítulo III',
    subtitle: 'Unidos en un solo corazón y una sola alma.',
    sections: [
      {
        heading: 'Vocación común y sentido de pertenencia',
        paras: [
          'La vocación común y la pertenencia al mismo movimiento hacen de los Sembradores de Fe hermanos y hermanas espirituales, «unidos en un solo corazón y una sola alma».',
          'Cada Sembrador se siente responsable de la misión común y participa con espíritu de iniciativa en la programación, realización y evaluación de las actividades, y en la elección de los responsables.',
        ],
      },
      {
        heading: 'Corresponsables de la misión',
        paras: [
          'Todo Sembrador de Fe sostiene con responsabilidad y sentido de pertenencia la parte económica del movimiento, para que este pueda desarrollar su misión.',
          'Cuidan la comunión fraterna y la colaboración entre los diferentes grupos: el conocimiento y la información recíproca, la ayuda espiritual y formativa, y la implicación en los compromisos apostólicos comunes.',
        ],
      },
      {
        heading: 'Ministerio del Director',
        paras: [
          'Siendo actualmente el mismo Fundador, el Director garantiza la fidelidad al proyecto del movimiento. En su ministerio se sirve de un grupo de apoyo con funciones específicas, sobre todo para animar al movimiento y coordinar las iniciativas de formación y apostolado.',
          'Los miembros nutren sentimientos de sincero afecto hacia el Director y son fieles a sus orientaciones.',
        ],
      },
      {
        heading: 'Vínculo con la Iglesia y otras realidades eclesiales',
        paras: [
          'Los Sembradores de Fe se adhieren a la misión de la Iglesia con un vínculo de unión estable y seguro. Establecen lazos con otros movimientos y comunidades, promoviendo toda forma de colaboración, dentro del respeto a la identidad y autonomía de cada uno.',
        ],
      },
    ],
  },
  {
    slug: 'comunidades-externas',
    title: 'Comunidades Externas',
    eyebrow: 'Capítulo IV',
    subtitle: 'El carisma que se extiende desde la casa madre de Barranquilla.',
    sections: [
      {
        heading: 'El ámbito de las comunidades externas',
        paras: [
          'Estas comunidades surgen como fruto de la evangelización de los Sembradores de Fe y en respuesta a la llamada de Dios en el carisma de la Transformación.',
          'Las comunidades que nacen en otras ciudades colombianas o del exterior tienen la misma estructura organizacional que la casa madre en Barranquilla (Colombia). Cuentan con un director diocesano nombrado por el director general y son acompañadas por servidores de la casa madre, que garantizan la animación y el vínculo sólido con la casa central.',
        ],
      },
      {
        heading: 'La caridad en Sembradores de Fe',
        paras: [
          'En nuestro carisma, la caridad apostólica y pastoral se hace presente entre esposos, viudas, solteros, jóvenes y niños, manifestando la misericordia y el perdón del Padre, el amor salvífico de Jesús y la fuerza del Espíritu Santo.',
          'La caridad es un don de Dios inagotable que brota de quien ha tenido un encuentro íntimo con Él. Se inspira también en la solicitud materna de María, modelo e intercesora en el discipulado.',
        ],
      },
      {
        heading: 'Presencia en el mundo',
        paras: [
          'Los Sembradores de Fe se sienten llamados a ser sal y luz de la tierra, solidarios con el mundo en que viven. Comparten los valores de su cultura y trabajan para que sea guiada por el humanismo cristiano, promoviendo lo bueno con sentido crítico y obediencia.',
          'Ante los desafíos y la pluralidad cultural, adoptan una actitud que edifica, difundiendo un rostro cercano de Cristo que ama, perdona y actúa en favor de quienes le aman.',
        ],
      },
    ],
  },
  {
    slug: 'organizacion',
    title: 'Organización Interna',
    eyebrow: 'Capítulo VI',
    subtitle: 'Una estructura flexible y funcional al servicio de la misión.',
    sections: [
      {
        heading: 'Principio de la estructura',
        paras: [
          'La organización utiliza la metodología de Jesús: el llamado de los doce y la misión de hacer discípulos. Fiel a la Palabra de Dios y al magisterio, posee una estructura flexible y funcional, configurada en dos ámbitos de gobierno: central y local.',
        ],
      },
      {
        heading: 'Gobernanza',
        paras: [
          'Las directrices, el gobierno y la animación del movimiento quedan a cargo del Director y del Consejo Central. A nivel local, en cada ciudad donde haya presencia, el Director y los Consejos locales animan el movimiento en comunión con el Director General.',
          'La representación legal corresponde al Director General o su delegado; en las comunidades del exterior, la cumple el director local.',
        ],
      },
      {
        heading: 'Ámbito local y administración de bienes',
        paras: [
          'El ámbito local agrupa a los Sembradores que actúan en un lugar determinado; el centro se erige preferentemente en una casa de oración, dirigida por un Consejo local que elige a un Director Local con el aval de la Dirección General.',
          'Existe un ministerio de finanzas, conformado por un mínimo de cuatro personas del Consejo Central, con capacidad para adquirir y administrar los bienes de la comunidad.',
        ],
      },
    ],
  },
  {
    slug: 'reglas-de-vida',
    title: 'Reglas de Vida',
    eyebrow: 'Proyecto de Vida Apostólica',
    subtitle: 'El documento que define nuestra identidad, espíritu y misión.',
    sections: [
      {
        heading: 'Introducción',
        paras: [
          'Diversos carismas son impulsados por el Espíritu Santo (cf. 1 Cor 12,4) en nuestra Iglesia Católica para vivir con radicalidad la fe bautismal y el Evangelio como regla de vida. Como laicos comprometidos, atraídos por este mismo Espíritu, queremos trabajar en unidad con nuestra Iglesia y los demás carismas suscitados.',
          'Desde los comienzos de la comunidad, Ronald Granados, su fundador y director, ha organizado un movimiento de laicos para laicos, con un proyecto apostólico basado en las obras de misericordia y la predicación del Evangelio, para que de esa escucha se origine la transformación integral del ser humano.',
        ],
      },
      {
        heading: 'Disposiciones finales',
        paras: [
          'El movimiento se rige por las presentes Reglas de Vida, que definen la identidad vocacional del Sembrador, el espíritu, la misión y los principios de la estructura. Otras normas se recogen en el Reglamento, que especifica y regula la acción, la metodología y la organización de forma operativa.',
          'El documento puede modificarse a partir de propuestas del director o del Consejo General; corresponde al director aprobar la propuesta de cambio, que será publicada oportunamente. (Revisión: 1 de abril de 2019 · Versión 2.0)',
        ],
        quote:
          '«El sembrador salió a sembrar…» — un camino que Jesús comienza personalmente con nuestro llamado, como camino de santidad dentro de la Iglesia Católica.',
      },
    ],
  },
];

// ── CAPÍTULO IV · Espiritualidad ──────────────────────────────────
const espiritualidad: PageDef[] = [
  {
    slug: 'espiritualidad',
    title: 'Espiritualidad',
    eyebrow: 'Vida interior',
    subtitle: 'Nada podemos si no estamos unidos a Jesucristo.',
    sections: [
      {
        id: 'transformacion',
        heading: 'Proceso de Transformación',
        paras: [
          'Los Sembradores de Fe santifican su existencia en la vida ordinaria y fundamentan su acción en la unión con Dios y en las prácticas penitenciales: la vida sacramental, la meditación diaria de la Palabra, el ayuno y la mortificación.',
          'Con la ayuda del Espíritu Santo dan paso a las virtudes como frutos del amor a Dios. Practican la amabilidad y la gratitud con todos, siendo líderes positivos en la construcción del Reino, alegres y dispuestos a dar el primer paso.',
        ],
      },
      {
        id: 'oracion',
        heading: 'Vida de Oración',
        paras: [
          'Convencidos de que nada pueden si no están unidos a Jesucristo, los Sembradores invocan al Espíritu que los ilumina y les da fuerza día tras día. Su oración es constante, confiada, alegre y creativa, impregnada de ardor por quienes aún están lejos de Él.',
          'Para alimentar su vida de oración acuden a las fuentes espirituales de la Iglesia, participan activamente en la liturgia y valoran las formas de piedad popular. La Eucaristía alimenta su caridad, y en la Reconciliación encuentran el amor y la misericordia del Padre que imprime a su vida una dinámica de continua transformación.',
        ],
      },
      {
        id: 'maria',
        heading: 'En Comunión con María y con todos los Santos',
        paras: [
          'Los Sembradores de Fe nutren su relación filial con María, Madre de la Iglesia y del mundo entero, colaboradora en la misión salvífica del Salvador. Ella es guía especial de todo Sembrador, y en el Rosario encuentran la oración que inspira a «hacer siempre lo que Él nos diga».',
          'Acuden con particular afecto a la intercesión de los Santos, aprendiendo siempre de sus testimonios de vida.',
        ],
      },
    ],
  },
];

// ── CAPÍTULO V · Formación y Consagración ─────────────────────────
const formacion: PageDef[] = [
  {
    slug: 'formacion',
    title: 'Formación y Pertenencia',
    eyebrow: 'Capítulo V',
    subtitle: 'Una elección libre, gradual y madurada bajo la acción del Espíritu Santo.',
    sections: [
      {
        id: 'inicio',
        heading: 'Inicio en el movimiento',
        paras: [
          'El movimiento inicia con la propia voluntad de vivir una vida cristiana más comprometida en Dios y la Iglesia, de acuerdo con estas Reglas de Vida. Ser Sembrador de Fe supone una elección libre, gradual, procesual y madurada bajo la acción del Espíritu Santo, acompañada por directores de Koinonía o padres espirituales.',
          'Quien desea entrar acepta formarse en un programa adecuado dentro del carisma de la Transformación, la Biblia, el magisterio y la vida apostólica. Cuando muestra suficiente madurez, es animado a formar su propia Koinonía y pasa a ser director de Koinonía.',
        ],
      },
      {
        id: 'pertenencia',
        heading: 'Sentido de pertenencia',
        paras: [
          'La pertenencia al movimiento es una experiencia privilegiada de fe y de comunión eclesial, y un elemento vital para la transformación en Dios.',
          'Requiere signos concretos de presencia y participación activa y exclusiva, absteniéndose de vincularse simultáneamente a otros movimientos que, aunque formen parte de la Iglesia, puedan mermar la participación en SDF y desenfocar de la misión a la que se ha sido llamado.',
        ],
      },
      {
        heading: 'Responsabilidad en la formación',
        paras: [
          'Los Sembradores de Fe son los primeros responsables de su propia formación humana, cristiana y profesional. El movimiento promueve y sostiene la formación personal y en grupo, mediante actividades impartidas por Sembradores cualificados, sacerdotes, religiosos y hermanos de otros movimientos.',
        ],
      },
      {
        heading: 'Fidelidad y salida del movimiento',
        paras: [
          'Ser Sembrador de Fe es una vocación que abarca toda la vida, sostenida por el amor y la gratitud con el movimiento. Quien decide poner fin a su pertenencia presenta una carta escrita de su puño y letra y un coloquio con sus mentores; si el retiro es definitivo, la solicitud se presenta al Consejo del movimiento.',
          'La exclusión por motivos graves corresponde al Consejo General, a petición motivada, con claridad y hechos irrefutables, en espíritu de caridad y tras el debido acompañamiento y comunicación por escrito al interesado.',
        ],
      },
    ],
  },
  {
    slug: 'consagracion',
    title: 'La Consagración',
    eyebrow: 'Promesa',
    subtitle: 'Expresión pública de la configuración con Cristo en un camino apostólico y ascético.',
    sections: [
      {
        heading: 'Significado de la promesa',
        paras: [
          'El sentido de la promesa es poner de manifiesto la voluntad de vivir la vocación laical desde el carisma de la Transformación dentro del movimiento Sembradores de Fe, según este reglamento. El Consejo General la propone como expresión pública de la configuración con Cristo, como constructor del Reino de Dios y su justicia.',
        ],
      },
      {
        heading: 'La promesa',
        quote:
          'Padre amado, mi alma proclama tu gloria y mi vida el sentido en Ti. Te adoro porque eres bueno y amas a todos. Te doy gracias porque me has creado y redimido, porque me has llamado a formar parte de tu Iglesia y en ella me has hecho conocer al movimiento Sembradores de Fe. Atraído por tu amor misericordioso, quiero corresponderte practicando el bien donde me has puesto y en las periferias donde tú me mandes. Prometo esforzarme por vivir el proyecto evangélico del movimiento: ser fiel discípulo de Cristo en la Iglesia Católica; trabajar por tu Reino, especialmente por quienes más te necesitan; profundizar en el carisma de la Transformación y dar testimonio de tu poder y gloria; y colaborar con la Iglesia local, bajo la guía de María, nuestra Madre. Dame, Padre, la fuerza de tu Espíritu, para ser fiel a este propósito de vida. Amén.',
      },
    ],
  },
];

// ── Contacto ──────────────────────────────────────────────────────
const contacto: PageDef[] = [
  {
    slug: 'contacto',
    title: 'Contacto',
    eyebrow: 'Escríbenos',
    subtitle: '¿Quieres conocer el movimiento o unirte a una Koinonía? Déjanos tus datos.',
    type: 'form',
    fields: ['Nombre completo', 'Correo electrónico', 'Ciudad', 'Mensaje'],
  },
];

export const pages: PageDef[] = [
  ...identidad,
  ...compromiso,
  ...espiritualidad,
  ...comunidad,
  ...formacion,
  ...contacto,
];
