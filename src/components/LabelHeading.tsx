import { gsap } from 'gsap';
import LogoNew from '../partials/LogoNew';
import React, { useEffect, useRef } from 'react';

type LabelHeading = {
  title: `${string}*${string}|${string}` | `${string}|${string}*${string}`;
  className?: string;
  sizeText: string;
};
function LabelHeading({ title, className, sizeText }: LabelHeading) {
  const titlePartial = title.split(' ');
  const labelHeadingWrapperRef: React.Ref<HTMLSpanElement> = useRef(null);

  useEffect(() => {
    const partialTexts = labelHeadingWrapperRef.current!.querySelectorAll('.partial-text');
    partialTexts.forEach((element: any) => {
      const tl = gsap.timeline();
      const delay = element.dataset.delay / 1000;
      tl.to(element, {
        opacity: 1,
        delay: 1,
      });
      tl.to(element, {
        y: -12,
        delay,
        duration: 0.4,
      });
      tl.to(element, {
        y: 0,
      });
    });
  }, []);

  return (
    <div>
      <span className={`select-none font-medium leading-tight ${className} ${sizeText}`} ref={labelHeadingWrapperRef}>
        {titlePartial.map((partial, index) =>
          partial === '*' ? (
            <span key={index} data-delay="100" className="partial-text mx-2 inline-block translate-y-3/4 opacity-0">
              <LogoNew className={sizeText} />
            </span>
          ) : partial === '|' ? (
            <br key={index} />
          ) : (
            <span data-delay={index * 100 + 500} className="partial-text mr-4 inline-block translate-y-1/2 opacity-0" key={index}>
              {partial}{' '}
            </span>
          ),
        )}
      </span>
    </div>
  );
}

export default LabelHeading;
