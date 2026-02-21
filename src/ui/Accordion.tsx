import React, { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="accordion-group">
      {items.map((item) => (
        <div key={item.id} className="accordion-item mb-2">
          <button
            className="accordion-header btn btn-link w-100 text-start px-0 py-3"
            onClick={() => toggle(item.id)}
            aria-expanded={openIds.has(item.id)}
          >
            <span style={{ fontWeight: 600, color: 'var(--wc-text-primary)' }}>{item.title}</span>
            <span style={{ float: 'right', transform: openIds.has(item.id) ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms' }}>▼</span>
          </button>
          {openIds.has(item.id) && (
            <div className="accordion-body px-0 pb-3" style={{ color: 'var(--wc-text-muted)' }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
