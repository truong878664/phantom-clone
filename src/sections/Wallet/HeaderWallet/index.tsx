import Logo from "../../../partials/Logo";

function HeaderWallet() {
  return (
    <div className="h-[120vh] mt-[-50vh] relative z-[-1] px-20">
      <div className="sticky top-1/2 text-center">
        <div className="">
          <span className="text-3xl">
            Keep everything in
            <span className="inline-block translate-y-1/4 mx-2">
              <Logo />
            </span>
            one place
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderWallet;
