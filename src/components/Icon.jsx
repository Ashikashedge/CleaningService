const paths = {
  sparkle: <><path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15ZM5 3l.7 1.8L7.5 5.5l-1.8.7L5 8l-.7-1.8-1.8-.7 1.8-.7L5 3Z" /></>,
  home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v12h14V9M9 21v-7h6v7" /></>,
  office: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 7h2m2 0h2M9 11h2m2 0h2M9 15h2m2 0h2M10 21v-3h4v3" /></>,
  key: <><circle cx="8" cy="15" r="5" /><path d="m11.5 11.5 8-8 2 2-2 2 2 2-3 3-2-2-2 2" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  quote: <><path d="M10 11H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5v7Zm11 0h-5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5v7ZM3 11v1a7 7 0 0 0 7 7m4-8v1a7 7 0 0 0 7 7" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  arrowUp: <><path d="m6 14 6-6 6 6" /><path d="M12 8v13" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m18 6-12 12M6 6l12 12" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.1 10.3a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.3 2.6Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  leaf: <><path d="M20 4c-8 0-14 2-14 9a7 7 0 0 0 7 7c7 0 7-8 7-16Z" /><path d="M4 21c3-5 7-8 12-11" /></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6a8.5 8.5 0 1 1 16.3-3.9Z" /><path d="M8 8.5c.7 2.3 2.2 3.8 4.5 4.5l1.2-1.2 2 .8c.2.1.3.3.3.5v1.2c0 .3-.2.5-.5.5A8.8 8.8 0 0 1 7.2 6.5c0-.3.2-.5.5-.5H9c.2 0 .4.1.5.3l.8 2L8 9.5" /></>,
  clockCheck: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2m2-8 1 1 2-2" /></>,
};

export default function Icon({ name, size = 20, className = '', ...props }) {
  const content = paths[name] || paths.sparkle;
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      {content}
    </svg>
  );
}
