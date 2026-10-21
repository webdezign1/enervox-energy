'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Zap, Wind, Globe } from 'lucide-react';
import { statsData } from '@/data/siteData';

const iconMap: { [key: string]: React.ElementType } = {
  Zap,
  Wind,
  Globe,
};

const AnimatedCounter: React.FC<{ target: number; suffix: string; duration?: number }> = ({
  target,
  suffix,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out quad
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums font-black">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsStrip: React.FC = () => {
  return (
    <section className="relative z-30 -mt-10 sm:-mt-14 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xs shadow-2xl border-t-4 border-[#FF7029] p-6 sm:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {statsData.map((stat) => {
          const Icon = iconMap[stat.icon] || Zap;

          return (
            <div
              key={stat.id}
              className="flex items-center gap-6 pt-6 md:pt-0 first:pt-0 md:first:pl-0 md:pl-10 group"
            >
              <div className="w-16 h-16 rounded-xs bg-[#FF7029]/10 group-hover:bg-[#FF7029] text-[#FF7029] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-xs">
                <Icon className="w-8 h-8 transition-transform group-hover:scale-110" />
              </div>

              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D3239] tracking-tight leading-none">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 mt-2">
                  {stat.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
