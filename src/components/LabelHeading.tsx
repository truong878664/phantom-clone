import Logo from "../partials/Logo";

type LabelHeading = {
  title: `${string}|${string}`;
  size?: `${string}px` | `${string}rem`;
  fillLogo: string;
  colorEye: string;
};
function LabelHeading({
  title,
  size = "1.5rem",
  fillLogo,
  colorEye,
}: LabelHeading) {
  const titlePartial = title.split("|");
  const firstPathTitle = titlePartial[0];
  const secondPathTitle = titlePartial[1];
  return (
    <div className="">
      <span className="font-medium" style={{ fontSize: `${size}` }}>
        {firstPathTitle}
        <span className="inline-block translate-y-1/4 mx-2">
          <Logo colorEye={colorEye} fill={fillLogo} />
        </span>
        {secondPathTitle}
      </span>
    </div>
  );
}

export default LabelHeading;
