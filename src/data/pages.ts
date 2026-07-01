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

// ── Sistema de BLOQUES (nuevo) — páginas ricas tipo "casa de Dios" ──
// Cada página se compone de bloques visuales alternados en vez de una
// columna de texto. Menos texto, más imagen y jerarquía.
export interface LeadBlock {
  kind: 'lead';
  id?: string;
  eyebrow?: string;
  text: string;
}
export interface SplitBlock {
  kind: 'split';
  id?: string;
  eyebrow?: string;
  heading: string;
  text: string[];
  image: string;
  imageAlt: string;
  list?: string[];
  reverse?: boolean;
  tone?: 'default' | 'subtle';
  ctaLabel?: string;
  ctaHref?: string;
}
export interface PillarItem {
  icon?: string;
  value?: string;
  title: string;
  body?: string;
}
export interface PillarsBlock {
  kind: 'pillars';
  id?: string;
  eyebrow?: string;
  heading?: string;
  tone?: 'brand' | 'dark' | 'subtle';
  items: PillarItem[];
}
export interface CardItem {
  icon?: string;
  title: string;
  body: string;
  href?: string;
  ctaLabel?: string;
}
export interface CardsBlock {
  kind: 'cards';
  eyebrow?: string;
  heading?: string;
  items: CardItem[];
}
export interface QuoteBlock {
  kind: 'quote';
  id?: string;
  eyebrow?: string;
  text: string;
  cite?: string;
}
export interface CtaBlock {
  kind: 'cta';
  eyebrow?: string;
  heading: string;
  text?: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
}
export type Block =
  | LeadBlock
  | SplitBlock
  | PillarsBlock
  | CardsBlock
  | QuoteBlock
  | CtaBlock;

export interface PageDef {
  slug: string;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  heroImage?: string;
  type?: 'content' | 'form';
  fields?: string[];
  sections?: Section[];
  blocks?: Block[];
}

// ── CAPÍTULO I · Nuestra Identidad ────────────────────────────────
const identidad: PageDef[] = [
  {
    slug: 'identidad',
    title: 'Nuestra Identidad',
    eyebrow: 'Capítulo I',
    subtitle: 'Una vocación específica en la Iglesia: conocerse, conocer y transformarse.',
    heroImage: '/assets/photos/hero-worship.jpg',
    blocks: [
      {
        kind: 'lead',
        eyebrow: 'Quiénes somos',
        text: 'Somos laicos católicos que responden a una vocación específica: conocerse, conocer a Dios y transformarse para vivir el Evangelio y participar en la misión de la Iglesia.',
      },
      {
        kind: 'pillars',
        eyebrow: 'Nuestra vocación',
        heading: 'Tres verbos que marcan el camino',
        tone: 'brand',
        items: [
          { icon: 'seed', title: 'Conocerse', body: 'Partir de la propia realidad, con verdad y humildad.' },
          { icon: 'flame', title: 'Conocer a Dios', body: 'Escucharlo y seguirlo en una intimidad constante por la oración.' },
          { icon: 'sprout', title: 'Transformarse', body: 'Dar frutos de conversión y un servicio de amor, con alegría.' },
        ],
      },
      {
        kind: 'split',
        eyebrow: 'Nuestra Misión',
        heading: 'Hacer discípulos que transforman su vida en Cristo',
        text: [
          'Una experiencia viva y auténtica en Cristo Jesús, por medio de la oración, el ayuno, la vigilia y la Santa Eucaristía.',
          'Siempre sujetos al magisterio y a la sana doctrina de nuestra Iglesia Católica.',
        ],
        image: '/assets/photos/sdf-1.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe reunida en oración',
      },
      {
        kind: 'split',
        reverse: true,
        tone: 'subtle',
        eyebrow: 'Nuestra Visión',
        heading: 'Llevar la Transformación a Colombia y al mundo',
        text: [
          'Proclamar el mensaje de Cristo como testigos y cooperadores de la Madre Iglesia.',
          'A través de misiones, asambleas de oración, obras de misericordia y vida sacramental.',
        ],
        image: '/assets/photos/sdf-4.jpg',
        imageAlt: 'Sembradores de Fe en un encuentro de evangelización',
      },
      {
        kind: 'quote',
        eyebrow: 'Vocación laical',
        text: 'Los laicos están llamados a ser fuertes miembros vivos, a procurar el crecimiento de la Iglesia y su perenne santificación con todas sus fuerzas.',
        cite: 'Lumen Gentium, 33',
      },
      {
        kind: 'cards',
        eyebrow: 'Nuestro camino',
        heading: 'Los pilares de nuestra vida apostólica',
        items: [
          { icon: 'flame', title: 'Nuestro Carisma', body: 'La Transformación: un encuentro real con Jesucristo.', href: '/nuestro-carisma', ctaLabel: 'Conocer' },
          { icon: 'people', title: 'Las Koinonías', body: 'Grupos de doce, de dos en dos, como la Iglesia primitiva.', href: '/koinonias', ctaLabel: 'Conocer' },
          { icon: 'heart', title: 'Vida Apostólica', body: 'Testimonio de las Bienaventuranzas y obras de misericordia.', href: '/compromiso-apostolico', ctaLabel: 'Conocer' },
          { icon: 'book', title: 'Formación', body: 'Un camino gradual, libre y madurado en el Espíritu Santo.', href: '/formacion', ctaLabel: 'Conocer' },
          { icon: 'sprout', title: 'Espiritualidad', body: 'Vida sacramental, oración constante y comunión con María.', href: '/espiritualidad', ctaLabel: 'Conocer' },
          { icon: 'seed', title: 'Comunidad', body: 'De la casa madre en Barranquilla hacia nuevas comunidades.', href: '/comunidades-externas', ctaLabel: 'Conocer' },
        ],
      },
      {
        kind: 'cta',
        eyebrow: 'Súmate',
        heading: '«El sembrador salió a sembrar…»',
        text: 'Cristianos de cualquier condición y estado de vida pueden seguir este camino. Si sientes la llamada, escríbenos.',
        image: '/assets/photos/sdf-6.jpg',
        imageAlt: 'Jóvenes de la comunidad durante un encuentro',
        ctaLabel: 'Quiero ser Sembrador',
        ctaHref: '/contacto',
      },
    ],
  },
  {
    slug: 'historia',
    title: 'Nuestra Historia',
    eyebrow: 'Quiénes somos',
    subtitle: 'Un movimiento de laicos para laicos, nacido el 30 de junio de 2015.',
    heroImage: '/assets/photos/sdf-5.jpg',
    blocks: [
      {
        kind: 'lead',
        eyebrow: 'El origen',
        text: 'Sembradores de Fe se constituyó el 30 de junio de 2015, fruto del trabajo apostólico y la experiencia mística con el Espíritu Santo de su fundador.',
      },
      {
        kind: 'pillars',
        tone: 'brand',
        items: [
          { value: '2015', title: 'Nuestro comienzo', body: 'El 30 de junio nace el movimiento.' },
          { value: 'Barranquilla', title: 'Casa madre', body: 'El corazón de la comunidad.' },
          { value: 'Colombia', title: 'y el mundo', body: 'Hacia donde el Espíritu nos envíe.' },
        ],
      },
      {
        kind: 'split',
        eyebrow: 'Nuestro fundador y director',
        heading: 'Ronald Alfonso Granados Arroyo',
        text: [
          'Psicólogo y predicador, testigo por años del poder transformador de Dios, de sus milagros y sanaciones.',
          'Dios pone en su corazón la misión de crear un movimiento que, en sintonía con el Concilio Vaticano II, avance en conquistar almas para Cristo.',
        ],
        image: '/assets/photos/founder.jpg',
        imageAlt: 'Ronald Alfonso Granados Arroyo, fundador y director de Sembradores de Fe',
      },
      {
        kind: 'split',
        reverse: true,
        tone: 'subtle',
        eyebrow: 'Quiénes somos hoy',
        heading: 'Laicos conscientes de su vocación de bautizados',
        text: [
          'Una comunidad católica llamada a participar en la misión de la Iglesia en el mundo.',
          'Buscamos el equilibrio entre contemplación y apostolado, con la Transformación como centro.',
        ],
        image: '/assets/photos/hero-worship.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe en adoración',
      },
      {
        kind: 'quote',
        text: 'Los laicos están llamados a ser fuertes miembros vivos, a procurar el crecimiento de la Iglesia y su perenne santificación con todas sus fuerzas.',
        cite: 'Lumen Gentium, 33',
      },
      {
        kind: 'cta',
        eyebrow: 'Súmate a la historia',
        heading: 'Escribe el próximo capítulo con nosotros',
        text: 'Cristianos de cualquier condición y estado de vida pueden seguir este camino.',
        image: '/assets/photos/sdf-6.jpg',
        imageAlt: 'Jóvenes de la comunidad durante un encuentro',
        ctaLabel: 'Quiero ser Sembrador',
        ctaHref: '/contacto',
      },
    ],
  },
  {
    slug: 'nuestro-carisma',
    title: 'Nuestro Carisma: la Transformación',
    eyebrow: 'Identidad',
    subtitle: 'Un estilo de vida que nace del encuentro real con Jesucristo.',
    heroImage: '/assets/photos/sdf-1.jpg',
    blocks: [
      {
        kind: 'lead',
        eyebrow: 'Nuestro carisma',
        text: 'La Transformación: un proceso por el cual, a través de un encuentro real con Jesucristo, podemos experimentar el Reino de los Cielos.',
      },
      {
        kind: 'split',
        eyebrow: 'Un encuentro real',
        heading: 'Una experiencia evangélica con fuente en Cristo',
        text: [
          'Este estilo de vida tiene su fuente en Cristo, cabeza de la Iglesia.',
          'Se alimenta cada día en la comunión sacramental y en la comunión con todo el Cuerpo de Cristo.',
        ],
        image: '/assets/photos/teaching.jpg',
        imageAlt: 'Momento de enseñanza y comunidad en Sembradores de Fe',
      },
      {
        kind: 'pillars',
        eyebrow: 'De dónde se alimenta',
        heading: 'Tres fuentes de nuestra vida en Cristo',
        tone: 'subtle',
        items: [
          { icon: 'flame', title: 'Cristo', body: 'Cabeza de la Iglesia y fuente de toda nuestra experiencia.' },
          { icon: 'book', title: 'Comunión sacramental', body: 'La Eucaristía como máxima expresión de nuestra fe.' },
          { icon: 'heart', title: 'María', body: 'Madre y modelo de discipulado que embellece el camino.' },
        ],
      },
      {
        kind: 'split',
        reverse: true,
        eyebrow: 'Cómo se transmite',
        heading: 'Un estilo de vida que se acoge como don',
        text: [
          'El director, bajo la guía del Espíritu Santo, transmite un estilo de vida en la Transformación.',
          'Los Sembradores lo hacen fructificar según la propia condición laical o ministerial.',
        ],
        image: '/assets/photos/sdf-2.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe en un encuentro',
      },
      {
        kind: 'quote',
        eyebrow: 'En María',
        text: 'En María, Madre y modelo de discipulado, descubrimos el aspecto más profundo de la vocación de discípulos y misioneros.',
      },
      {
        kind: 'cta',
        eyebrow: 'Vive el carisma',
        heading: 'Da el primer paso hacia la Transformación',
        text: 'Si sientes la llamada a este estilo de vida, escríbenos y te acompañamos.',
        image: '/assets/photos/sdf-6.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe en adoración',
        ctaLabel: 'Quiero ser Sembrador',
        ctaHref: '/contacto',
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
    heroImage: '/assets/photos/sdf-1.jpg',
    blocks: [
      {
        kind: 'lead',
        eyebrow: 'Capítulo II',
        text: 'El estilo de vida del Sembrador, marcado por el espíritu de las Bienaventuranzas, lo compromete a evangelizar la cultura y la vida social.',
      },
      {
        kind: 'pillars',
        id: 'bienaventuranzas',
        eyebrow: 'Damos testimonio',
        heading: 'Testimonio de las Bienaventuranzas',
        tone: 'brand',
        items: [
          { icon: 'flame', title: 'Primacía del espíritu', body: 'La no-violencia como fermento de paz y de perdón.' },
          { icon: 'sprout', title: 'Libertad', body: 'En obediencia al plan de Dios, al servicio de las personas.' },
          { icon: 'seed', title: 'Pobreza evangélica', body: 'Administrar los bienes con solidaridad y bien común.' },
          { icon: 'heart', title: 'Castidad', body: 'Una vida íntegra y gozosa, centrada en el amor.' },
        ],
      },
      {
        kind: 'quote',
        text: 'Realizan su apostolado, primordialmente, a través de las actividades diarias, siguiendo a Jesucristo enviado por el Padre a servir a los hombres.',
      },
      {
        kind: 'split',
        id: 'pedagogia',
        eyebrow: 'Nuestro método',
        heading: 'Pedagogía del Amor y la Bondad',
        text: [
          'Adoptamos el mandato nuevo de Jesús —amarnos como Él nos ama— persuadiendo más que imponiendo.',
          'Creamos un ambiente de familia donde la cercanía y el acompañamiento ayudan a descubrir la presencia de Dios.',
        ],
        image: '/assets/photos/teaching.jpg',
        imageAlt: 'Acompañamiento y enseñanza en la comunidad',
      },
      {
        kind: 'pillars',
        id: 'actividades',
        eyebrow: 'Dónde servimos',
        heading: 'Apostolados y Actividades',
        tone: 'subtle',
        items: [
          { icon: 'flame', title: 'Evangelización', body: 'Visita a enfermos y misiones.' },
          { icon: 'heart', title: 'Servicio social', body: 'Entre los más pobres.' },
          { icon: 'book', title: 'Comunicación social', body: 'Un uso educativo de los medios.' },
          { icon: 'people', title: 'Pastoral familiar', body: 'Retiros y acompañamiento a las familias.' },
          { icon: 'sprout', title: 'Diálogo', body: 'Ecuménico e interreligioso.' },
          { icon: 'seed', title: 'Catequesis', body: 'Formación cristiana y grupos juveniles.' },
        ],
      },
      {
        kind: 'cta',
        eyebrow: 'Pon manos a la obra',
        heading: 'Sirve con nosotros',
        text: 'Hay un lugar para tus dones en la misión. Escríbenos y encuentra el tuyo.',
        image: '/assets/photos/sdf-2.jpg',
        imageAlt: 'Sembradores de Fe en servicio comunitario',
        ctaLabel: 'Quiero ser Sembrador',
        ctaHref: '/contacto',
      },
    ],
  },
  {
    slug: 'koinonias',
    title: 'Las Koinonías',
    eyebrow: 'El modelo de Jesús',
    subtitle: 'Espacios de comunión donde la necesidad del uno es la necesidad del otro.',
    heroImage: '/assets/photos/sdf-2.jpg',
    blocks: [
      {
        kind: 'lead',
        id: 'que-es',
        eyebrow: '¿Qué es una Koinonía?',
        text: 'Koinonía significa comunión: un espacio fraterno para reflexionar la Palabra de Dios y orar en comunidad, como la Iglesia primitiva.',
      },
      {
        kind: 'split',
        id: 'modelo',
        eyebrow: 'El modelo de Jesús',
        heading: 'Líderes de dos en dos, como envió el Maestro',
        text: [
          'Jesús llamó a los doce y también envió a otros setenta y dos, de dos en dos (Lucas 10,1).',
          'El número doce, usado 187 veces en la Biblia, indica la perfección del gobierno: fuimos cuidados para cuidar, enseñados para enseñar.',
        ],
        image: '/assets/photos/teaching.jpg',
        imageAlt: 'Enseñanza y comunidad en Sembradores de Fe',
      },
      {
        kind: 'pillars',
        id: 'tipos',
        eyebrow: 'Hay una para ti',
        heading: 'Tipos de Koinonías',
        tone: 'brand',
        items: [
          { icon: 'heart', title: 'De Parejas', body: 'Matrimonios que caminan juntos en la fe.' },
          { icon: 'people', title: 'De Mujeres', body: 'Un espacio propio de comunión y crecimiento.' },
          { icon: 'people', title: 'De Hombres', body: 'Fraternidad y discipulado masculino.' },
          { icon: 'sprout', title: 'De Jóvenes', body: 'La nueva civilización del amor.' },
        ],
      },
      {
        kind: 'pillars',
        id: 'estructura',
        eyebrow: 'Cómo nos organizamos',
        heading: 'Estructura de servicio',
        tone: 'subtle',
        items: [
          { icon: 'people', title: 'Líderes Generales', body: 'Matrimonios que asignan líderes y acompañan cada Koinonía.' },
          { icon: 'flame', title: 'Líder de Koinonía', body: 'Guía los encuentros y hace mentoría.' },
          { icon: 'sprout', title: 'Servidores', body: 'Discípulos en proceso de transformación.' },
          { icon: 'seed', title: 'Asistentes', body: 'Quienes se acercan y aún no son servidores.' },
        ],
      },
      {
        kind: 'quote',
        id: 'encuentros',
        eyebrow: 'Cada quince días',
        text: 'Que la necesidad del uno sea la necesidad del otro.',
      },
      {
        kind: 'cta',
        eyebrow: 'Da el paso',
        heading: 'Únete a una Koinonía',
        text: 'Encuentra un grupo donde caminar cerca del hermano. Escríbenos y te ubicamos.',
        image: '/assets/photos/sdf-1.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe reunida en oración',
        ctaLabel: 'Quiero unirme',
        ctaHref: '/contacto',
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
    heroImage: '/assets/photos/sdf-4.jpg',
    blocks: [
      {
        kind: 'lead',
        eyebrow: 'Capítulo III',
        text: 'La vocación común nos hace hermanos y hermanas espirituales, unidos en un solo corazón y una sola alma.',
      },
      {
        kind: 'pillars',
        eyebrow: 'Cómo vivimos la comunión',
        heading: 'Corresponsables de una misma misión',
        tone: 'subtle',
        items: [
          { icon: 'people', title: 'Vocación común', body: 'Cada Sembrador participa en programar, realizar y evaluar la misión.' },
          { icon: 'heart', title: 'Corresponsables', body: 'Sostenemos con sentido de pertenencia la vida del movimiento.' },
          { icon: 'sprout', title: 'Vínculo con la Iglesia', body: 'Lazos de colaboración con otros movimientos y comunidades.' },
        ],
      },
      {
        kind: 'split',
        eyebrow: 'Ministerio del Director',
        heading: 'Fidelidad al proyecto del movimiento',
        text: [
          'Siendo actualmente el mismo Fundador, el Director garantiza la fidelidad al carisma.',
          'Se sirve de un grupo de apoyo para animar el movimiento y coordinar la formación y el apostolado.',
        ],
        image: '/assets/photos/founder.jpg',
        imageAlt: 'Ronald Alfonso Granados Arroyo, director de Sembradores de Fe',
      },
      {
        kind: 'quote',
        text: 'Nos adherimos a la misión de la Iglesia con un vínculo de unión estable y seguro, en el respeto a la identidad de cada uno.',
      },
      {
        kind: 'cta',
        eyebrow: 'Caminemos juntos',
        heading: 'Sé parte de esta comunión',
        text: 'La necesidad del uno es la necesidad del otro. Encuentra tu lugar en la comunidad.',
        image: '/assets/photos/sdf-5.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe reunida',
        ctaLabel: 'Quiero ser Sembrador',
        ctaHref: '/contacto',
      },
    ],
  },
  {
    slug: 'comunidades-externas',
    title: 'Comunidades Externas',
    eyebrow: 'Capítulo IV',
    subtitle: 'El carisma que se extiende desde la casa madre de Barranquilla.',
    heroImage: '/assets/photos/sdf-6.jpg',
    blocks: [
      {
        kind: 'lead',
        eyebrow: 'Capítulo IV',
        text: 'Nuevas comunidades surgen como fruto de la evangelización, en respuesta a la llamada de Dios en el carisma de la Transformación.',
      },
      {
        kind: 'split',
        eyebrow: 'El ámbito',
        heading: 'La misma estructura, un mismo corazón',
        text: [
          'Las comunidades que nacen en Colombia o el exterior comparten la estructura de la casa madre en Barranquilla.',
          'Cuentan con un director diocesano y son acompañadas por servidores que garantizan el vínculo con la casa central.',
        ],
        image: '/assets/photos/sdf-1.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe en misión',
      },
      {
        kind: 'split',
        reverse: true,
        tone: 'subtle',
        eyebrow: 'La caridad',
        heading: 'Un don inagotable que brota del encuentro con Dios',
        text: [
          'La caridad se hace presente entre esposos, viudas, solteros, jóvenes y niños.',
          'Se inspira en la solicitud materna de María, modelo e intercesora en el discipulado.',
        ],
        image: '/assets/photos/sdf-4.jpg',
        imageAlt: 'Sembradores de Fe en obras de caridad',
      },
      {
        kind: 'quote',
        eyebrow: 'Presencia en el mundo',
        text: 'Estamos llamados a ser sal y luz de la tierra, difundiendo un rostro cercano de Cristo que ama, perdona y actúa.',
      },
      {
        kind: 'cta',
        eyebrow: 'Lleva el carisma a tu ciudad',
        heading: '¿Sientes el llamado a sembrar donde vives?',
        text: 'Conversemos sobre cómo nacen las comunidades externas. Escríbenos.',
        image: '/assets/photos/sdf-5.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe reunida',
        ctaLabel: 'Quiero ser Sembrador',
        ctaHref: '/contacto',
      },
    ],
  },
  {
    slug: 'organizacion',
    title: 'Organización Interna',
    eyebrow: 'Capítulo VI',
    subtitle: 'Una estructura flexible y funcional al servicio de la misión.',
    heroImage: '/assets/photos/sdf-5.jpg',
    blocks: [
      {
        kind: 'lead',
        eyebrow: 'Capítulo VI',
        text: 'Usamos la metodología de Jesús —el llamado de los doce— en una estructura flexible con dos ámbitos de gobierno: central y local.',
      },
      {
        kind: 'pillars',
        eyebrow: 'Dos ámbitos de gobierno',
        heading: 'Cómo se anima el movimiento',
        tone: 'brand',
        items: [
          { icon: 'flame', title: 'Dirección', body: 'El Director y el Consejo Central dan las directrices y animan la misión.' },
          { icon: 'people', title: 'Ámbito local', body: 'Consejos locales animan cada ciudad en comunión con la Dirección General.' },
          { icon: 'seed', title: 'Ministerio de finanzas', body: 'Administra con transparencia los bienes de la comunidad.' },
        ],
      },
      {
        kind: 'split',
        eyebrow: 'El ámbito local',
        heading: 'Una casa de oración en cada lugar',
        text: [
          'Agrupa a los Sembradores que actúan en un lugar determinado, con un Consejo local y un Director Local.',
          'Siempre con el aval de la Dirección General, garantizando la comunión con la casa madre.',
        ],
        image: '/assets/photos/hero-worship.jpg',
        imageAlt: 'Casa de oración de la comunidad Sembradores de Fe',
      },
      {
        kind: 'cta',
        eyebrow: 'Conoce más',
        heading: '¿Quieres saber cómo funcionamos?',
        text: 'Escríbenos y con gusto te contamos sobre la vida y organización del movimiento.',
        image: '/assets/photos/sdf-2.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe',
        ctaLabel: 'Contáctanos',
        ctaHref: '/contacto',
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
    heroImage: '/assets/photos/bg2.jpg',
    blocks: [
      {
        kind: 'lead',
        eyebrow: 'Vida interior',
        text: 'Santificamos la existencia en la vida ordinaria, fundamentados en la unión con Dios y en las prácticas penitenciales.',
      },
      {
        kind: 'split',
        id: 'transformacion',
        eyebrow: 'Proceso de Transformación',
        heading: 'Las virtudes como frutos del amor a Dios',
        text: [
          'Vida sacramental, meditación diaria de la Palabra, ayuno y mortificación.',
          'Practicamos la amabilidad y la gratitud, alegres y dispuestos a dar el primer paso.',
        ],
        image: '/assets/photos/sdf-4.jpg',
        imageAlt: 'Sembradores de Fe en meditación de la Palabra',
      },
      {
        kind: 'split',
        id: 'oracion',
        reverse: true,
        tone: 'subtle',
        eyebrow: 'Vida de Oración',
        heading: 'Una oración constante, confiada y alegre',
        text: [
          'Invocamos al Espíritu que nos ilumina y da fuerza día tras día.',
          'Acudimos a las fuentes espirituales de la Iglesia y participamos activamente en la liturgia.',
        ],
        image: '/assets/photos/sdf-2.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe en oración',
      },
      {
        kind: 'quote',
        text: 'La Eucaristía alimenta nuestra caridad, y en la Reconciliación encontramos el amor y la misericordia del Padre.',
      },
      {
        kind: 'split',
        id: 'maria',
        eyebrow: 'En comunión con María',
        heading: '«Hacer siempre lo que Él nos diga»',
        text: [
          'Nutrimos nuestra relación filial con María, Madre de la Iglesia y guía especial de todo Sembrador.',
          'En el Rosario encontramos la oración que inspira, y acudimos a la intercesión de los Santos.',
        ],
        image: '/assets/photos/sdf-5.jpg',
        imageAlt: 'Comunidad reunida en devoción mariana',
      },
      {
        kind: 'cta',
        eyebrow: 'Crece en tu vida interior',
        heading: 'Camina hacia una espiritualidad renovada',
        text: 'Te acompañamos en la oración, los sacramentos y la vida de comunidad.',
        image: '/assets/photos/sdf-6.jpg',
        imageAlt: 'Jóvenes de la comunidad en un encuentro de oración',
        ctaLabel: 'Quiero ser Sembrador',
        ctaHref: '/contacto',
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
    heroImage: '/assets/photos/teaching.jpg',
    blocks: [
      {
        kind: 'lead',
        eyebrow: 'Capítulo V',
        text: 'Ser Sembrador de Fe es una elección libre, gradual y madurada bajo la acción del Espíritu Santo.',
      },
      {
        kind: 'split',
        id: 'inicio',
        eyebrow: 'Primer paso',
        heading: 'Inicio en el movimiento',
        text: [
          'Comienza con la voluntad de vivir una vida cristiana más comprometida en Dios y la Iglesia.',
          'Quien entra se forma en el carisma de la Transformación, la Biblia, el magisterio y la vida apostólica.',
        ],
        image: '/assets/photos/sdf-1.jpg',
        imageAlt: 'Nuevos miembros en formación con la comunidad',
      },
      {
        kind: 'split',
        id: 'pertenencia',
        reverse: true,
        tone: 'subtle',
        eyebrow: 'Sentido de pertenencia',
        heading: 'Una experiencia privilegiada de fe y comunión',
        text: [
          'Elemento vital para la transformación en Dios, con presencia y participación activa.',
          'Somos los primeros responsables de nuestra propia formación humana, cristiana y profesional.',
        ],
        image: '/assets/photos/sdf-4.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe compartiendo',
      },
      {
        kind: 'quote',
        text: 'Ser Sembrador de Fe es una vocación que abarca toda la vida, sostenida por el amor y la gratitud con el movimiento.',
      },
      {
        kind: 'cta',
        eyebrow: 'El siguiente paso',
        heading: 'La Consagración',
        text: 'Cuando el camino madura, llega la promesa pública de configuración con Cristo. Conócela.',
        image: '/assets/photos/sdf-6.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe en adoración',
        ctaLabel: 'Conoce la Consagración',
        ctaHref: '/consagracion',
      },
    ],
  },
  {
    slug: 'consagracion',
    title: 'La Consagración',
    eyebrow: 'Promesa',
    subtitle: 'Expresión pública de la configuración con Cristo en un camino apostólico y ascético.',
    heroImage: '/assets/photos/hero-worship.jpg',
    blocks: [
      {
        kind: 'lead',
        eyebrow: 'El sentido de la promesa',
        text: 'La Consagración manifiesta la voluntad de vivir la vocación laical desde el carisma de la Transformación, como expresión pública de la configuración con Cristo.',
      },
      {
        kind: 'split',
        eyebrow: 'Un camino que madura',
        heading: 'Constructor del Reino de Dios y su justicia',
        text: [
          'El Consejo General propone la promesa cuando el proceso de formación ha madurado.',
          'Es un compromiso libre, sostenido por el amor y la gratitud con el movimiento.',
        ],
        image: '/assets/photos/sdf-5.jpg',
        imageAlt: 'Ceremonia de consagración en Sembradores de Fe',
      },
      {
        kind: 'quote',
        eyebrow: 'La promesa',
        text: 'Prometo esforzarme por vivir el proyecto evangélico del movimiento: ser fiel discípulo de Cristo en la Iglesia Católica; trabajar por tu Reino, especialmente por quienes más te necesitan; y profundizar en el carisma de la Transformación, bajo la guía de María, nuestra Madre.',
        cite: 'Oración de consagración',
      },
      {
        kind: 'cta',
        eyebrow: 'Camina hacia la promesa',
        heading: 'Empieza tu proceso de formación',
        text: 'La Consagración es la meta de un camino que comienza hoy. Da el primer paso con nosotros.',
        image: '/assets/photos/sdf-1.jpg',
        imageAlt: 'Comunidad de Sembradores de Fe en oración',
        ctaLabel: 'Quiero ser Sembrador',
        ctaHref: '/contacto',
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
