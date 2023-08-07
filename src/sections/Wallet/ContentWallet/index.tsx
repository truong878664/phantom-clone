import React, { useEffect, useRef } from "react";
import walletVideo1 from "../../../assets/video/wallet1.webm";
import walletVideo2 from "../../../assets/video/wallet2.webm";
import { gsap } from "gsap";

function ContentWallet() {
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
            ? 15
            : headOrEnd === "end"
            ? -widthUlWrapper + widthLiCard
            : null;
        if (!nextX) return;
        gsap.to("#wrapper-ul", {
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
        gsap.to("#wrapper-ul", {
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
    <div className="h-screen">
      <div className="flex justify-between items-center mt-10 px-4">
        <div className="bg-white rounded-full h-10 flex items-center px-4 gap-2 text-sm">
          <i className="fa-solid fa-wallet"></i>
          <span>Your wallet</span>
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
      <div className="w-full mt-10 overflow-hidden" ref={wrapperCardDivRef}>
        <ul
          className="w-full flex items-stretch gap-2 pointer-events-none user-select-none"
          ref={wrapperCardUlRef}
          style={{ transform: "translate3d(20px, 0px, 0px)" }}
          id="wrapper-ul"
        >
          <li className="w-11/12 aspect-[7/10] shrink-0">
            <div className="bg-c-purple h-full rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 ">
                <video
                  playsInline
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
                  src={walletVideo1}
                ></video>
              </div>
            </div>
          </li>

          <li className="w-10/12 aspect-[7/10] shrink-0">
            <div className="bg-c-purple h-full rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 ">
                <video
                  playsInline
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
                  src={walletVideo2}
                ></video>
              </div>
            </div>
          </li>
          <li className="w-10/12 aspect-[7/10] shrink-0">
            <div className="bg-c-purple h-full rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 ">
                <video
                  playsInline
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
                  src={walletVideo1}
                ></video>
              </div>
            </div>
          </li>
          <li className="w-10/12 aspect-[7/10] shrink-0">
            <div className="bg-c-purple h-full rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 ">
                <video
                  playsInline
                  muted
                  className="h-full w-full object-cover"
                  src={walletVideo1}
                ></video>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContentWallet;
