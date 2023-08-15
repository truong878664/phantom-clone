import Logo from "../partials/Logo";

type LabelHeading = {
  title: `${string}*${string}|${string}` | `${string}|${string}*${string}`;
  className?: string;
};
function LabelHeading({ title, className }: LabelHeading) {
  const titlePartial = title.split(" ");
  return (
    <div>
      <span
        className={`font-medium leading-tight ${className}`}
      >
        {titlePartial.map((partial, index) =>
          partial === "*" ? (
            <span key={index} className="inline-block translate-y-1/4 mx-2">
              <Logo />
            </span>
          ) : partial === "|" ? (
            <br key={index}/>
          ) : (
            <span key={index}>{partial} </span>
          )
        )}
      </span>
    </div>
  );
}

export default LabelHeading;
