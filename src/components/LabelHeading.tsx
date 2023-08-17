import { gsap } from "gsap";
import LogoNew from "../partials/LogoNew";
import React, { useEffect, useRef } from "react";

type LabelHeading = {
  title: `${string}*${string}|${string}` | `${string}|${string}*${string}`;
  className?: string;
  sizeText: string;
};
function LabelHeading({ title, className, sizeText }: LabelHeading) {
  const titlePartial = title.split(" ");
  const labelHeadingWrapperRef: React.Ref<HTMLSpanElement> = useRef(null);
  useEffect(() => {
    const partialTexts =
      labelHeadingWrapperRef.current!.querySelectorAll(".partial-text");

    // const tl = gsap.timeline();
    // tl.to(".partial-text", {
    //   y: -12,
    //   delay: function (index, target, targets) {
    //     const delay = target.dataset.delay;
    //     return Number(delay) / 1000;
    //   },
    // });
    // tl.to(".partial-text", {
    //   y: 0,
    //   delay: function (index, target, targets) {
    //     const delay = target.dataset.delay;
    //     return Number(delay) / 3000;
    //   },
    //   onComplete() {
    //     console.log("complete");
    //   },
    // });

    partialTexts.forEach((element: any) => {
      const delay = element.dataset.delay / 1000;
      const tl = gsap.timeline()
      tl.to(element, {
        y: -12,
        delay,
        duration: 0.4,
      });
      tl.to(element, {
        y: 0,
        onComplete() {
          console.log("complete");
        }
      });
    });
  }, []);
  return (
    <div>
      <span
        className={`font-medium select-none leading-tight ${className} ${sizeText}`}
        ref={labelHeadingWrapperRef}
      >
        {titlePartial.map((partial, index) =>
          partial === "*" ? (
            <span
              key={index}
              data-delay="100"
              className="inline-block translate-y-3/4 mx-2 partial-text"
            >
              <LogoNew className={sizeText} />
            </span>
          ) : partial === "|" ? (
            <br key={index} />
          ) : (
            <span
              data-delay={index * 100 + 500}
              className="inline-block partial-text translate-y-1/2 mr-4"
              key={index}
            >
              {partial}{" "}
            </span>
          )
        )}
      </span>
    </div>
  );
}

export default LabelHeading;
