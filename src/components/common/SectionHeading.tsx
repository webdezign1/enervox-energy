import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}) => {
  const alignmentClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'right'
      ? 'text-right ml-auto'
      : 'text-left';

  return (
    <div className={`max-w-3xl mb-10 md:mb-14 ${alignmentClass} ${className}`}>
      {/* Small uppercase eyebrow label */}
      <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF7029] mb-2.5">
        // {eyebrow}
      </span>

      {/* Large bold H2 */}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
          light ? 'text-white' : 'text-[#2D3239]'
        }`}
      >
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
