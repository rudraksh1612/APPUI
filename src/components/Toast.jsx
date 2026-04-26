import React, { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function Toast({ message, show, type = 'success' }) {
  const [visible, setVisible] = useState(false);
  const [animOut, setAnimOut] = useState(false);

  useEffect(() => {
    if (show) {
      setAnimOut(false);
      setVisible(true);
      const hideTimer = setTimeout(() => setAnimOut(true), 1700);
      const removeTimer = setTimeout(() => setVisible(false), 2000);
      return () => { clearTimeout(hideTimer); clearTimeout(removeTimer); };
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: '#ffffff',
      color: '#111',
      padding: '12px 20px',
      borderRadius: '10px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
      fontSize: '0.9rem',
      fontWeight: '600',
      border: '1.5px solid #e0e0e0',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      opacity: animOut ? 0 : 1,
      transform: animOut ? 'translateY(10px)' : 'translateY(0)',
    }}>
      <span style={{
        background: '#22c55e',
        borderRadius: '50%',
        width: '22px',
        height: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <Check size={13} color="white" strokeWidth={3} />
      </span>
      {message}
    </div>
  );
}
