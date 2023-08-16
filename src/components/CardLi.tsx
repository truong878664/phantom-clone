import { useRef } from "react";
import lightOrDark from "../function/lightOrDark";
import { gsap } from "gsap";

function CardLi({ video, color }: { video: string; color: string }) {
  const bgTheme = lightOrDark(color);

  const videoRef: React.RefObject<HTMLVideoElement> = useRef(null);

  const handleMouseOver = (e: any) => {
    videoRef.current!.play();
    const li = (e.target as HTMLElement).closest("li");
    const rectLi: any = li?.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const { left, right, top, bottom, width, height, x, y } = rectLi;

    const positionMove = {
      x: 0,
      y: 0,
      _x: 0,
      _y: 0,
      __x: 0,
      __y: 0,
      _x2() {
        return this.x === 0 ? 0 : this.x > 0 ? -4 : 4;
      },
    };

    const MAX_MOVE = 20;

    if (isEqual(mouseX, x)) {
      console.log("left");
      positionMove.x = MAX_MOVE;
      positionMove._x = 2;
      positionMove.__x = -4;

      positionMove.y = 0;
      positionMove._y = 0;
      positionMove.__y = 0;
    } else if (isEqual(mouseY, y)) {
      console.log("top");
      positionMove.x = 0;
      positionMove._x = 0;
      positionMove.__x = 0;

      positionMove._y = 2;
      positionMove.y = MAX_MOVE;
      positionMove.__y = -4;
    } else if (isEqual(mouseY, y + width)) {
      console.log("right");
      positionMove.x = -MAX_MOVE;
      positionMove.y = 0;
      positionMove._x = -2;
      positionMove._y = 0;
      positionMove.__x = 4;
      positionMove.__y = 0;
    } else if (isEqual(mouseX, x + height)) {
      console.log("bottom");
      positionMove.x = 0;
      positionMove.y = -MAX_MOVE;
      positionMove._x = 0;
      positionMove._y = -2;
      positionMove.__x = 0;
      positionMove.__y = 4;
    }

    console.log(positionMove._x2());

    const tlLi = gsap.timeline();
    tlLi.to(li, { x: positionMove.x, y: positionMove.y, duration: 0.3 });
    tlLi.to(li, { x: positionMove.__x, y: positionMove.__y, duration: 0.2 });
    tlLi.to(li, { x: positionMove._x, y: positionMove._y, duration: 0.3 });
    tlLi.to(li, { x: 0, y: 0, duration: 0.2 });
  };
  function handleMouseLeave(e: any) {
    videoRef.current!.pause();
  }

  function isEqual(number1: number, number2: number) {
    return number1 - number2 <= 16 ? true : false;
  }

  return (
    <li
      className="w-11/12 aspect-[7/10] shrink-0 md:w-1/2 xl:w-1/3"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="h-full rounded-xl relative overflow-hidden p-8"
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

// function Button() {
//   function handleClick (e) {
//     console.log(this);

//   }
//   return ( <div>
//     <button onClick={handleClick.bind(this)}>click</button>
//   </div> );
// }

// export default Button;
