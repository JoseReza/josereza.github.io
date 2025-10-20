'use client';

import dynamic from 'next/dynamic';

// Importar ThemeToggle dinámicamente para evitar problemas de SSR
const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
  loading: () => (
    <div style={{ 
      position: 'fixed', 
      top: '20px', 
      right: '20px', 
      zIndex: 1000,
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'var(--background)',
      border: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      ⚙️
    </div>
  )
});

export default function ClientThemeToggle() {
  return <ThemeToggle />;
}
