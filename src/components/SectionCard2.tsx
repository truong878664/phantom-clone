import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import CardLi from './CardLi';
import LabelHeading from './LabelHeading';
import { ScrollTrigger } from 'gsap/all';

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
    let isMouseUp = false,
      startX: number,
      currentX: number,
      nextX: number,
      deltaX: number;

    let wrapperCardUl: any, wrapperCardDiv: any, widthUlWrapper: any, widthLiCard: any, minTransformX: any, maxTransformX: any;
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
        } else if (nextX >= -maxTransformX && nextX < -(widthUlWrapper - wrapperCardUl.offsetWidth)) {
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

    wrapperCardDiv.addEventListener('touchstart', touchstartHandler);
    wrapperCardDiv.addEventListener('touchmove', touchMoveHandler);
    wrapperCardDiv.addEventListener('touchend', touchEndHandler);

    wrapperCardDiv.addEventListener('mousedown', touchstartHandler);
    wrapperCardDiv.addEventListener('mousemove', touchMoveHandler);
    wrapperCardDiv.addEventListener('mouseup', touchEndHandler);
    window.addEventListener('mouseup', touchEndHandler);

    return () => {
      wrapperCardDiv.removeEventListener('touchstart', touchstartHandler);
      wrapperCardDiv.removeEventListener('touchmove', touchMoveHandler);
      wrapperCardDiv.removeEventListener('touchend', touchEndHandler);

      wrapperCardDiv.removeEventListener('mousedown', touchstartHandler);
      wrapperCardDiv.removeEventListener('mousemove', touchMoveHandler);
      wrapperCardDiv.removeEventListener('mouseup', touchEndHandler);
      window.removeEventListener('mouseup', touchEndHandler);
    };
  }, []);

  useEffect(() => {
    const queryLabelHeading = `[data-name='label-heading-${name}']`;
    const queryLabelUlCard = `[data-name='ul-card-${name}']`;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(queryLabelHeading, {
      scrollTrigger: {
        trigger: queryLabelHeading,
        start: 'end end',
        scrub: 1,
      },
      opacity: 1,
      scale: 1,
    });

    gsap.to(queryLabelUlCard, {
      scrollTrigger: {
        trigger: queryLabelUlCard,
        start: 'top center',
        markers: false,
      },
      onStart() {
        /*set left fot card default*/
        const cards = document.querySelectorAll(`[data-name='ul-card-${name}'] .li-card`);
        const MARGIN_LEFT_CARD = 20;
        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          (card as HTMLLIElement).style.left = (rect.width + MARGIN_LEFT_CARD) * index + 'px';
        });

        this._targets[0].dataset.status = 'un-group';

        /*animation card start*/
        const tlStartLi = gsap.timeline();
        tlStartLi.to(`[data-name='ul-card-${name}'] .li-card`, {
          x: 'random(0, 10)',
          y: 'random(0, 10)',
        });
        tlStartLi.to(`[data-name='ul-card-${name}'] .li-card`, {
          x: 'random(-7, -3)',
          y: 'random(-7, -3)',
        });
        tlStartLi.to(`[data-name='ul-card-${name}'] .li-card`, {
          x: 0,
          y: 0,
        });
      },
      onComplete() {
        setTimeout(() => {
          this._targets[0].dataset.position = 'static';
        }, 500);
      },
    });
  }, []);
  return (
    <section id={name}>
      <div className="relative z-[-1] mt-[-50vh] h-[150vh] ">
        <div className="sticky top-1/2 -translate-y-1/2 scale-90 text-center opacity-0" data-name={`label-heading-${name}`}>
          <LabelHeading title={header} sizeText="text-3xl lg:text-7xl xl:text-8xl" />
        </div>
      </div>
      <div className="w-full overflow-x-hidden">
        <div className="mx-auto h-screen max-w-[1728px]">
          <div className="mt-10 flex items-center justify-between px-4">
            <div className="flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm lg:text-xl">
              <i className={iconTitle}></i>
              <span>{title}</span>
            </div>
            <div className="flex gap-1 rounded-full bg-white p-1">
              <button className="aspect-square w-9 rounded-full hover:bg-c-purple/30">
                <i className="fa-solid fa-angle-left" />
              </button>
              <button className="aspect-square w-9 rounded-full hover:bg-c-purple/30">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          <div className="relative z-10 mt-10 w-full cursor-w-resize select-none px-6 active:cursor-grabbing md:px-10" ref={wrapperCardDivRef}>
            <ul
              data-status="group"
              data-position="relative"
              className="user-select-none group/ul-card flex w-full items-stretch gap-2 data-[position='relative']:relative md:gap-6"
              ref={wrapperCardUlRef}
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}
              data-name={`ul-card-${name}`}
            >
              {dataCard.map((card, index) => (
                <CardLi
                  className="li-card transition-[left] duration-1000 group-data-[position='relative']/ul-card:absolute group-data-[status='group']/ul-card:!left-0 group-data-[status='un-group']/ul-card:!ml-0 md:group-data-[status='group']/ul-card:!left-1/4"
                  style={{ marginLeft: `${index * 20}px`, zIndex: dataCard.length - index }}
                  video={card.video}
                  key={index}
                  color={card.color}
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
