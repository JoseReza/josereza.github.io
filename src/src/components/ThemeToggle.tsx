'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ 
      position: 'fixed', 
      top: '20px', 
      right: '20px', 
      zIndex: 1000 
    }}>
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
        style={{
          background: 'none',
          border: '1px solid var(--border-color)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          transition: 'all 0.3s ease',
          color: 'var(--text-color)',
          backgroundColor: 'var(--background)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = 'var(--background)';
        }}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
}
