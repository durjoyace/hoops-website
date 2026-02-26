'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect keyboard navigation — restore native cursor
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardUser(true);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setIsKeyboardUser(false);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'pointer'
      ) {
        setIsHovering(true);
        setCursorText('');
      }

      // Check for custom cursor text
      if (target.dataset.cursorText) {
        setIsHovering(true);
        setCursorText(target.dataset.cursorText);
      }

      // Check for video/play elements
      if (target.dataset.cursor === 'play') {
        setIsHovering(true);
        setCursorText('Play');
      }

      // Check for drag elements
      if (target.dataset.cursor === 'drag') {
        setIsHovering(true);
        setCursorText('Drag');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add listeners to all interactive elements
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter as EventListener);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Use MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter as EventListener);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 2.5 : 1,
            opacity: isVisible && !isKeyboardUser ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          {/* Outer ring */}
          <motion.div
            animate={{
              scale: isHovering ? 1 : 0,
              opacity: isHovering ? 1 : 0,
            }}
            className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"
            style={{ left: '50%', top: '50%' }}
          />

          {/* Inner dot */}
          <div
            className={`w-4 h-4 rounded-full bg-white transition-colors duration-200 ${
              isHovering ? 'bg-orange-primary' : 'bg-white'
            }`}
          />

          {/* Cursor text */}
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-1/2 top-full mt-2 -translate-x-1/2 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Hide default cursor only for mouse users on desktop */}
      <style jsx global>{`
        @media (pointer: fine) {
          :root:not(.keyboard-user) * {
            cursor: none !important;
          }
          :root:not(.keyboard-user) *:focus-visible {
            cursor: auto !important;
          }
        }

        @media (max-width: 768px), (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>

      {/* Toggle keyboard-user class on html element */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('keydown', function(e) {
              if (e.key === 'Tab') document.documentElement.classList.add('keyboard-user');
            });
            document.addEventListener('mousemove', function() {
              document.documentElement.classList.remove('keyboard-user');
            });
          `,
        }}
      />
    </>
  );
}
