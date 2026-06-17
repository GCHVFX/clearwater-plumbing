interface IconProps {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function Icon({ name, size = 24, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (name) {
    case 'droplet':
      return <svg {...props}><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" /></svg>;
    case 'drain':
      return <svg {...props}><path d="M7 4v4a5 5 0 0010 0V4" /><path d="M12 12v8" /><path d="M8 20h8" /></svg>;
    case 'flame':
      return <svg {...props}><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" /></svg>;
    case 'toilet':
      return <svg {...props}><path d="M6 3h12v3a6 6 0 01-6 6 6 6 0 01-6-6V3z" /><path d="M6 6h12" /><path d="M9 12v2a3 3 0 003 3 3 3 0 003-3v-2" /><path d="M10 17v3" /><path d="M14 17v3" /><path d="M8 20h8" /></svg>;
    case 'wrench':
      return <svg {...props}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>;
    case 'house':
      return <svg {...props}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path d="M9 22V12h6v10" /></svg>;
    case 'alert-triangle':
      return <svg {...props}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>;
    case 'clipboard':
      return <svg {...props}><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /></svg>;
    case 'kitchen':
      return <svg {...props}><path d="M3 6h18" /><path d="M5 6v14h14V6" /><path d="M9 6V4a3 3 0 016 0v2" /><path d="M9 14h6" /><path d="M12 11v6" /></svg>;
    case 'bath':
      return <svg {...props}><path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z" /><path d="M6 12V5a2 2 0 012-2h1a2 2 0 012 2v1" /></svg>;
    case 'stairs':
      return <svg {...props}><path d="M22 5h-5v5h-5v5H7v5H2" /></svg>;
    case 'shirt':
      return <svg {...props}><path d="M20.38 3.46L16 2 13.5 5.5h-3L8 2 3.62 3.46a2 2 0 00-1.34 1.44l-.71 3.1 4 1.5L6 22h12l.43-12.5 4-1.5-.71-3.1a2 2 0 00-1.34-1.44z" /></svg>;
    case 'tree':
      return <svg {...props}><path d="M12 22v-7" /><path d="M17 13H7l5-11 5 11z" /><path d="M15 8H9l3-5 3 5z" /></svg>;
    case 'bolt':
      return <svg {...props}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;
    case 'map-pin':
      return <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case 'file-text':
      return <svg {...props}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>;
    case 'user':
      return <svg {...props}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
    case 'check-circle':
      return <svg {...props}><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>;
    case 'clock':
      return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
    case 'message-circle':
      return <svg {...props}><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>;
    case 'shield':
      return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
    case 'camera':
      return <svg {...props}><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z" /><circle cx="12" cy="13" r="4" /></svg>;
    case 'phone':
      return <svg {...props}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>;
    case 'search':
      return <svg {...props}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>;
    case 'send':
      return <svg {...props}><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>;
    case 'image':
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>;
    case 'arrow-right':
      return <svg {...props}><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M12 16v.01" /><path d="M12 8v4" /></svg>;
  }
}
