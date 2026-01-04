
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id, className = "" }) => {
  return (
    <section id={id} className={`mb-12 border-l-2 border-green-900 pl-6 relative ${className}`}>
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-900 rotate-45 border border-green-500 shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div>
      <h2 className="text-2xl font-bold text-green-400 mb-6 uppercase tracking-widest flex items-center gap-4">
        <span className="text-green-900 text-xs">//</span>
        {title}
        <div className="h-[1px] bg-green-900 flex-1 shadow-[0_0_5px_rgba(0,59,0,0.5)]"></div>
      </h2>
      <div className="text-green-100/80 leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default Section;
