import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  onToggle
}) => {
  return (
    <div className="border-b border-[#E8E2D8] last:border-b-0 py-4 transition-colors">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between text-left py-2 gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A34828] rounded-sm"
      >
        <span className="text-base sm:text-lg font-serif text-[#1C1917] group-hover:text-[#A34828] transition-colors leading-snug">
          {title}
        </span>
        <span
          className={`p-1.5 rounded-full text-stone-500 group-hover:text-[#1C1917] transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 bg-[#EFE9DF]' : 'bg-[#FAF8F5]'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      {isOpen && (
        <div className="pt-2 pb-3 text-stone-600 text-sm sm:text-base leading-relaxed pl-1">
          {children}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  items: {
    id: string;
    question: string;
    answer: string;
  }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="divide-y divide-[#E8E2D8] border-t border-[#E8E2D8]">
      {items.map(item => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.question}
          isOpen={openId === item.id}
          onToggle={() => toggle(item.id)}
        >
          <p>{item.answer}</p>
        </AccordionItem>
      ))}
    </div>
  );
};
