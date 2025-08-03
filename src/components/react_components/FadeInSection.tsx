import { useEffect, useRef, useState } from 'react';
import '../../styles/FadeinSection.sass';

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};
export default function FadeInSection({ children, className = '', id }: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, {
      threshold: 0.3,
    });

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);


  return (
    <section
      ref={ref}
      className={`fade-in-section ${isVisible ? 'visible' : ''} ${className}`}
      id={id}
    >
      {children}
    </section>
  );
}

