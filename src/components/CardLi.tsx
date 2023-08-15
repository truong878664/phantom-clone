import lightOrDark from "../function/lightOrDark";

function CardLi({ video, color }: { video: string; color: string }) {
  const bgTheme = lightOrDark(color);

  return (
    <li className="w-11/12 aspect-[7/10] shrink-0 md:w-1/2">
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
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
            src={video}
          ></video>
        </div>
      </div>
    </li>
  );
}

export default CardLi;
