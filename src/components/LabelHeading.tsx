import Logo from "../partials/Logo";
import LogoNew from "../partials/LogoNew";

type LabelHeading = {
  title: `${string}*${string}|${string}` | `${string}|${string}*${string}`;
  className?: string;
  sizeText: string;
};
function LabelHeading({ title, className, sizeText }: LabelHeading) {
  const titlePartial = title.split(" ");
  return (
    <div>
      <span
        className={`font-medium select-none leading-tight ${className} ${sizeText}`}
      >
        {titlePartial.map((partial, index) =>
          partial === "*" ? (
            <span key={index} className="inline-block translate-y-1/4 mx-2">
              <LogoNew className={sizeText} />
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