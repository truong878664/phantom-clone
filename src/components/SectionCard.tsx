import gsap from "gsap";
import { useEffect, useRef } from "react";
import CardLi from "./CardLi";
import LabelHeading from "./LabelHeading";

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

function SectionCard({ dataCard, header, title, name, iconTitle }: SectionCard) {
  const wrapperCardUlRef: React.RefObject<HTMLUListElement> = useRef(null);
  const wrapperCardDivRef: React.RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {
    type TypeEvent = React.TouchEvent<Element> | React.MouseEvent<Element>;

    let isMouseUp = false;
    let startX: number;
    let currentX: number;
    let headOrEnd: "head" | "end" | null;
    let nextX: number;
    let deltaX: number;

    const wrapperCardUl: any = wrapperCardUlRef.current!;
    const wrapperCardDiv = wrapperCardDivRef.current!;

    const widthUlWrapper = wrapperCardUl.scrollWidth;
    const widthLiCard = wrapperCardUl.firstChild.offsetWidth;

    const minTransformX = widthLiCard / 2;
    const maxTransformX = widthUlWrapper - widthLiCard / 2;

    const eventClick = {
      start(e: TypeEvent): any {
        isMouseUp = true;
        startX = this.getClientX(e);
        const maxtrix = new DOMMatrixReadOnly(wrapperCardUl.style.transform);
        currentX = maxtrix.m41;
      },
      end(): any {
        isMouseUp = false;
        nextX =
          headOrEnd === "head"
            ? 1
            : headOrEnd === "end"
            ? -widthUlWrapper + widthLiCard
            : null;
        if (!nextX) return;
        gsap.to(`[data-name='${name}']`, {
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
          headOrEnd = "head";
        } else if (nextX < -maxTransformX) {
          nextX = -maxTransformX;
          headOrEnd = "end";
        } else {
          headOrEnd = null;
        }
        gsap.to(`[data-name='${name}']`, {
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
  return (
    <section id={name}>
      <div className="h-[120vh] mt-[-50vh] relative z-[-1] px-20">
        <div className="sticky top-1/2 -translate-y-1/2 text-center">
          <LabelHeading title={header} />
        </div>
      </div>

      <div className="h-screen">
        <div className="flex justify-between items-center mt-10 px-4">
          <div className="bg-white rounded-full h-10 flex items-center px-4 gap-2 text-sm">
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
        <div className="w-full mt-10 overflow-hidden px-6 md:px-10" ref={wrapperCardDivRef}>
          <ul
            className="w-full flex items-stretch gap-2 pointer-events-none user-select-none md:gap-6"
            ref={wrapperCardUlRef}
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
            data-name={name}
          >
            {dataCard.map((card, index) => (
              <CardLi video={card.video} key={index} color={card.color} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionCard;
