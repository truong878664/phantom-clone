import React, { useRef } from "react";
import lightOrDark from "../function/lightOrDark";
import { gsap } from "gsap";

function CardLi({ video, color, className, style }: { video: string; color: string, className?:string, style?: React.CSSProperties }) {
  const bgTheme = lightOrDark(color);
  const videoRef: React.RefObject<HTMLVideoElement> = useRef(null);

  let isRunningAnimateCard: boolean = false;
  const handleMouseOver = (e: any) => {
    videoRef.current!.play();
    const li = (e.target as HTMLElement).closest("li");
    const rectLi: any = li?.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const { right, bottom, width, height, x, y } = rectLi;

    const MAX_MOVE = 17;
    const MOVE_BACK_LARGE = 7;
    const MOVE_BACK_SMALL = 5;
    const positionAnimateMove: any = {
      leftCenter: {
        x: MAX_MOVE,
        y: 0,
      },
      leftTop: {
        x: MAX_MOVE,
        y: MAX_MOVE,
      },
      leftBottom: {
        x: MAX_MOVE,
        y: -MAX_MOVE,
      },

      rightCenter: {
        x: -MAX_MOVE,
        y: 0,
      },
      rightTop: {
        x: -MAX_MOVE,
        y: MAX_MOVE,
      },
      rightBottom: {
        x: -MAX_MOVE,
        y: -MAX_MOVE,
      },
      topCenter: {
        x: 0,
        y: MAX_MOVE,
      },
      topLeft: {
        x: MAX_MOVE,
        y: MAX_MOVE,
      },
      topRight: {
        x: -MAX_MOVE,
        y: MAX_MOVE,
      },
      bottomCenter: {
        x: 0,
        y: -MAX_MOVE,
      },
      bottomLeft: {
        x: MAX_MOVE,
        y: -MAX_MOVE,
      },
      bottomRight: {
        x: -MAX_MOVE,
        y: -MAX_MOVE,
      },
      _x(x: number) {
        return x === 0 ? 0 : x > 0 ? MOVE_BACK_SMALL : -MOVE_BACK_SMALL;
      },
      _y(y: number) {
        return y === 0 ? 0 : y > 0 ? MOVE_BACK_SMALL : -MOVE_BACK_SMALL;
      },
      __x(x: number) {
        return x === 0 ? 0 : x > 0 ? -MOVE_BACK_LARGE : MOVE_BACK_LARGE;
      },
      __y(y: number) {
        return y === 0 ? 0 : y > 0 ? -MOVE_BACK_LARGE : MOVE_BACK_LARGE;
      },
    };

    const positionFirstMouseOver = sidePosition({
      width,
      height,
      mouseX,
      mouseY,
      x,
      y,
      right,
      bottom,
    });
    const timelineAnimateLi = gsap.timeline({
      onStart() {
        isRunningAnimateCard = true;
      },
    });
    const xAnimate = positionAnimateMove[positionFirstMouseOver].x;
    const yAnimate = positionAnimateMove[positionFirstMouseOver].y;
    if (isRunningAnimateCard) return;
    timelineAnimateLi.to(li, {
      x: xAnimate,
      y: yAnimate,
      duration: 0.3,
    });
    timelineAnimateLi.to(li, {
      x: positionAnimateMove.__x(xAnimate),
      y: positionAnimateMove.__y(yAnimate),
      duration: 0.2,
      onComplete() {
        isRunningAnimateCard = false;
      },
    });
    timelineAnimateLi.to(li, {
      x: positionAnimateMove._x(xAnimate),
      y: positionAnimateMove._y(yAnimate),
      duration: 0.3,
    });
    timelineAnimateLi.to(li, {
      x: 0,
      y: 0,
      duration: 0.2,
      
    });
  };
  function handleMouseLeave() {
    videoRef.current!.pause();
  }

  function sidePosition({
    mouseX,
    mouseY,
    x,
    y,
    width,
    height,
    right,
    bottom,
  }: {
    mouseX: number;
    mouseY: number;
    x: number;
    y: number;
    width: number;
    height: number;
    right: number;
    bottom: number;
  }) {
    const conditionOneThirdWidth = mouseX < x + width / 3;
    const conditionTwoThirdWidth = mouseX < x + (width * 2) / 3;
    const conditionThreeThirdWidth = mouseX < x + width;

    const conditionOneThirdHeight = mouseY < y + height / 3;
    const conditionTwoThirdHeight = mouseY < y + (height * 2) / 3;
    const conditionThreeThirdHeight = mouseY < y + height;

    if (isEqual(mouseX, x)) {
      return conditionOneThirdHeight
        ? "leftTop"
        : conditionTwoThirdHeight
        ? "leftCenter"
        : conditionThreeThirdHeight
        ? "leftBottom"
        : "left";
    } else if (isEqual(mouseY, y)) {
      return conditionOneThirdWidth
        ? "topLeft"
        : conditionTwoThirdWidth
        ? "topCenter"
        : conditionThreeThirdWidth
        ? "topRight"
        : "top";
    } else if (isEqual(mouseX, right)) {
      return conditionOneThirdHeight
        ? "rightTop"
        : conditionTwoThirdHeight
        ? "rightCenter"
        : conditionThreeThirdHeight
        ? "rightBottom"
        : "right";
    } else if (isEqual(mouseY, bottom)) {
      return conditionOneThirdWidth
        ? "bottomLeft"
        : conditionTwoThirdWidth
        ? "bottomCenter"
        : conditionThreeThirdWidth
        ? "bottomRight"
        : "bottom";
    } else {
      return "leftCenter";
    }
  }
  function isEqual(number1: number, number2: number) {
    return Math.abs(number1 - number2) < 10 ? true : false;
  }

  return (
    <li
      className={`w-11/12 aspect-[7/10] shrink-0 md:w-1/2 xl:w-1/3 ${className}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div
        className="h-full rounded-3xl relative overflow-hidden p-8"
        style={{ backgroundColor: color }}
      >
        <p
          data-bg={bgTheme}
          className="text-2xl data-[bg='dark']:text-white data-[bg='light']:text-black"
        >
          Seamlessly access the largest NFT marketplaces.
        </p>
        <div className="absolute top-0 left-0 right-0 bottom-0 ">
          <video
            playsInline
            // autoPlay
            loop
            muted
            className="h-full w-full object-cover"
            src={video}
            ref={videoRef}
          ></video>
        </div>
      </div>
    </li>
  );
}

export default CardLi;
