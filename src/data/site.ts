/**
 * Configuración global del sitio + navegación.
 * Asociación Católica Sembradores de Fe (SDF) — Barranquilla, Colombia.
 * Estructura basada en las "Reglas de Vida / Proyecto de Vida Apostólica".
 */

export interface NavChild {
  label: string;
  href: string;
}
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const site = {
  name: 'Sembradores de Fe',
  tagline: 'Asociación Católica · SDF',
  motto: '«El sembrador salió a sembrar…»',
  description:
    'Comunidad católica de laicos que vive el carisma de la Transformación, ' +
    'al servicio de la misión de la Iglesia. Barranquilla, Colombia.',
  logo: '/assets/logos/logo-redondo.png',
  logoWatermark: '/assets/logos/1.png',
  social: {
    facebook: 'https://web.facebook.com/sembradoresdefecolombia/',
    instagram: 'https://www.instagram.com/sembradoresdefecolombia/',
    youtube: 'https://www.youtube.com/@sembradoresdefecolombia/videos',
  },
  cta: { label: 'Quiero ser Sembrador', href: '/contacto' },
};

export const nav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Quiénes Somos',
    href: '/identidad',
    children: [
      { label: 'Nuestra Identidad', href: '/identidad' },
      { label: 'Nuestro Carisma: la Transformación', href: '/nuestro-carisma' },
      { label: 'Nuestra Historia', href: '/historia' },
      { label: 'El Sembrador en el mundo', href: '/identidad#mundo' },
    ],
  },
  {
    label: 'Vida Apostólica',
    href: '/compromiso-apostolico',
    children: [
      { label: 'Testimonio de las Bienaventuranzas', href: '/compromiso-apostolico#bienaventuranzas' },
      { label: 'Pedagogía del Amor y la Bondad', href: '/compromiso-apostolico#pedagogia' },
      { label: 'Apostolados y Actividades', href: '/compromiso-apostolico#actividades' },
      { label: 'Las Koinonías', href: '/koinonias' },
    ],
  },
  {
    label: 'Espiritualidad',
    href: '/espiritualidad',
    children: [
      { label: 'Proceso de Transformación', href: '/espiritualidad#transformacion' },
      { label: 'Vida de Oración', href: '/espiritualidad#oracion' },
      { label: 'En Comunión con María', href: '/espiritualidad#maria' },
    ],
  },
  {
    label: 'Formación',
    href: '/formacion',
    children: [
      { label: 'Inicio en el Movimiento', href: '/formacion#inicio' },
      { label: 'Sentido de Pertenencia', href: '/formacion#pertenencia' },
      { label: 'La Consagración', href: '/consagracion' },
    ],
  },
  {
    label: 'Comunidad',
    href: '/comunion-colaboracion',
    children: [
      { label: 'Comunión y Colaboración', href: '/comunion-colaboracion' },
      { label: 'Comunidades Externas', href: '/comunidades-externas' },
      { label: 'Organización Interna', href: '/organizacion' },
      { label: 'Reglas de Vida', href: '/reglas-de-vida' },
    ],
  },
  { label: 'Contacto', href: '/contacto' },
];
