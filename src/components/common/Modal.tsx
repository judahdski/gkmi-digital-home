import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl shadow-xl p-6 sm:p-8 z-10">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8] mb-6">
          {title && (
            <h3 className="text-xl sm:text-2xl font-serif text-[#1C1917] font-medium tracking-tight">
              {title}
            </h3>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-[#EFE9DF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A34828]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
