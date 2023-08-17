import gsap from "gsap";
import { useEffect, useRef } from "react";
import CardLi from "./CardLi";
import LabelHeading from "./LabelHeading";
import { ScrollTrigger } from "gsap/all";

type SectionCard = {
  dataCard: {
    color: string;
    video: string;
    describe: string;
  }[];
  header: `${string}|${string}*${string}` | `${string}*${string}|${string}`;
  title: string;
  name: string;
  iconTitle: string;
};

function SectionCard({
  dataCard,
  header,
  title,
  name,
  iconTitle,
}: SectionCard) {
  const wrapperCardUlRef: React.RefObject<HTMLUListElement> = useRef(null);
  const wrapperCardDivRef: React.RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {
    type TypeEvent = React.TouchEvent<Element> | React.MouseEvent<Element>;
    let isMouseUp = false,
      startX: number,
      currentX: number,
      nextX: number,
      deltaX: number;

    let wrapperCardUl: any,
      wrapperCardDiv: any,
      widthUlWrapper: any,
      widthLiCard: any,
      minTransformX: any,
      maxTransformX: any;
    updateMinMaxTransformX();

    const eventClick = {
      start(e: TypeEvent): any {
        isMouseUp = true;
        startX = this.getClientX(e);
        const maxtrix = new DOMMatrixReadOnly(wrapperCardUl.style.transform);
        currentX = maxtrix.m41;
        updateMinMaxTransformX();
      },
      end(): any {
        isMouseUp = false;
        if (!nextX) return;
        if (nextX <= minTransformX && nextX > 0) {
          nextX = 0;
        } else if (
          nextX >= -maxTransformX &&
          nextX < -(widthUlWrapper - wrapperCardUl.offsetWidth)
        ) {
          nextX = -(maxTransformX - widthLiCard);
        }
        gsap.to(`[data-name='ul-card-${name}']`, {
          duration: 0.5,
          transform: `translate3d(${nextX}px, 0px, 0px)`,
        });
      },
      move(e: TypeEvent): any {
        if (!isMouseUp) return;
        const clientX = this.getClientX(e);
        deltaX = clientX - startX;
        nextX = deltaX + currentX;
        if (nextX > minTransformX) {
          nextX = minTransformX;
        } else if (nextX < -maxTransformX) {
          nextX = -maxTransformX;
        }
        gsap.to(`[data-name='ul-card-${name}']`, {
          duration: 0.5,
          transform: `translate3d(${nextX}px, 0px, 0px)`,
        });
      },
      getClientX(e: TypeEvent) {
        let clientX;
        if (e instanceof TouchEvent) {
          clientX = e.touches[0].clientX;
        } else if (e instanceof MouseEvent) {
          clientX = e.clientX;
        } else {
          clientX = 0;
        }
        return clientX;
      },
    };

    function updateMinMaxTransformX() {
      wrapperCardUl = wrapperCardUlRef.current!;
      wrapperCardDiv = wrapperCardDivRef.current!;
      widthUlWrapper = wrapperCardUl.scrollWidth;
      widthLiCard = wrapperCardUl.firstChild.offsetWidth;
      minTransformX = widthLiCard;
      maxTransformX = widthUlWrapper - wrapperCardUl.offsetWidth + widthLiCard;
    }

    const touchstartHandler = (e: any) => {
      eventClick.start(e);
    };
    const touchMoveHandler = (e: any) => {
      eventClick.move(e);
    };
    const touchEndHandler = () => {
      eventClick.end();
    };

    wrapperCardDiv.addEventListener("touchstart", touchstartHandler);
    wrapperCardDiv.addEventListener("touchmove", touchMoveHandler);
    wrapperCardDiv.addEventListener("touchend", touchEndHandler);

    wrapperCardDiv.addEventListener("mousedown", touchstartHandler);
    wrapperCardDiv.addEventListener("mousemove", touchMoveHandler);
    wrapperCardDiv.addEventListener("mouseup", touchEndHandler);
    window.addEventListener("mouseup", touchEndHandler);

    return () => {
      wrapperCardDiv.removeEventListener("touchstart", touchstartHandler);
      wrapperCardDiv.removeEventListener("touchmove", touchMoveHandler);
      wrapperCardDiv.removeEventListener("touchend", touchEndHandler);

      wrapperCardDiv.removeEventListener("mousedown", touchstartHandler);
      wrapperCardDiv.removeEventListener("mousemove", touchMoveHandler);
      wrapperCardDiv.removeEventListener("mouseup", touchEndHandler);
      window.removeEventListener("mouseup", touchEndHandler);
    };
  }, []);

  useEffect(() => {
    const queryLabelHeading = `[data-name='label-heading-${name}']`;
    const queryLabelUlCard = `[data-name='ul-card-${name}']`;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(queryLabelHeading, {
      scrollTrigger: {
        trigger: queryLabelHeading,
        start: "end end",
        scrub: 1,
      },
      opacity: 1,
      scale: 1,
    });

    gsap.to(queryLabelUlCard, {
      scrollTrigger: {
        trigger: queryLabelUlCard,
        start: "top center",
        markers: false,
      },
      onStart() {
        this._targets[0].dataset.status = "un-group"
      },
    });
  }, []);

  return (
    <section id={name}>
      <div className="h-[120vh] mt-[-50vh] relative z-[-1]">
        <div
          className="sticky top-1/2 -translate-y-1/2 text-center opacity-0 scale-90"
          data-name={`label-heading-${name}`}
        >
          <LabelHeading
            title={header}
            sizeText="text-3xl lg:text-7xl xl:text-8xl"
          />
        </div>
      </div>
      <div className="w-full overflow-x-hidden">
        <div className="h-screen max-w-[1728px] mx-auto">
          <div className="flex justify-between items-center mt-10 px-4">
            <div className="bg-white rounded-full h-10 flex items-center px-4 gap-2 text-sm lg:text-xl">
              <i className={iconTitle}></i>
              <span>{title}</span>
            </div>
            <div className="flex bg-white p-1 rounded-full gap-1">
              <button className="w-9 aspect-square rounded-full hover:bg-c-purple/30">
                <i className="fa-solid fa-angle-left" />
              </button>
              <button className="w-9 aspect-square rounded-full hover:bg-c-purple/30">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          <div
            className="w-full select-none mt-10 z-10 relative px-6 md:px-10 cursor-w-resize active:cursor-grabbing"
            ref={wrapperCardDivRef}
          >
            <ul
              data-status="group"
              className="w-full flex items-stretch gap-2 user-select-none md:gap-6 data-[status='group']:relative group/ul-card"
              ref={wrapperCardUlRef}
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
              data-name={`ul-card-${name}`}
            >
              {dataCard.map((card, index) => (
                <CardLi
                  video={card.video}
                  key={index}
                  color={card.color}
                  style={{ marginLeft: `${-index * 10}px` }}
                  className="group-data-[status='group']/ul-card:absolute group-data-[status='group']/ul-card:left-1/2 group-data-[status='group']/ul-card:!-translate-x-1/2 group-data-[status='group']/ul-card:transition-all group-data-[status='group']/ul-card:duration-1000 group-data-[status='un-group']/ul-card:!ml-0"
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionCard;
