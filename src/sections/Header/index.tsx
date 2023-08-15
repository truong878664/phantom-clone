import Logo from "../../partials/Logo";
import logoText from "../../assets/image/logoText.png"

function Header() {
  return (
    <header>
      <div className="py-3 px-5 flex justify-between items-center h-[76px] relative z-[1]">
        <div className="z-[-1] flex">
          <Logo size="40" className="fill-c-dark-purple md:w-10" />
          <img src={logoText} alt="" className="h-8 aspect-auto ml-2 hidden lg:block"/>
        </div>
        <div className="flex items-center gap-2 relative">
          <input
            type="checkbox"
            id="nav-bar-input"
            className="peer/nav-bar"
            hidden
          />
          <label htmlFor="nav-bar-input" className="fixed top-0 left-0 right-0 bottom-0 bg-black/30 z-[-1] hidden peer-checked/nav-bar:block" id="overlay"></label>
          <div className="absolute right-0 mt-2 top-full overflow-hidden rounded-3xl bg-white transition-all duration-500 max-h-0 peer-checked/nav-bar:max-h-[500px]">
            <ul className="w-full px-8 py-4 flex flex-col gap-4 text-lg text-c-dark-purple group">
              <li>
                <span className="w-5 aspect-square mr-4">
                  <i className="fa-solid fa-shield-heart"></i>
                </span>
                <span>Security</span>
              </li>
              <li>
                <div className="">
                  <span className="w-5 aspect-square mr-4">
                    <i className="fa-solid fa-bolt"></i>
                  </span>
                  <span>Learn</span>
                </div>
                <ul className="text-sm pl-8 flex mt-3 flex-col gap-3">
                  <li className="">Blog</li>
                  <li className="">Crypto 101</li>
                  <li className="">Guides</li>
                  <li className="">Developers</li>
                </ul>
              </li>
              <li>
                <span className="w-5 aspect-square mr-4">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span>Explore</span>
              </li>
              <li>
                <span className="w-5 aspect-square mr-4">
                  <i className="fa-solid fa-message"></i>
                </span>
                <span>Support</span>
              </li>
            </ul>
          </div>

          <button className="bg-c-purple px-6 py-4 rounded-full text-sm">
            Download
          </button>
          <label
            htmlFor="nav-bar-input"
            className="h-12 aspect-square bg-white rounded-full grid place-content-center text-lg group"
          >
            <div className="relative w-1 h-1">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 scale-100 peer-checked/nav-bar:group-[]:scale-0">
                <i className="fa-solid fa-bars"></i>
              </span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 scale-0 peer-checked/nav-bar:group-[]:scale-100">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
