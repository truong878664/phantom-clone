import Logo from "../../partials/Logo";
import logoText from "../../assets/image/logoText.png"

function Header() {
  return (
    <header>
      <div className="py-3 px-5 flex justify-between items-center h-[76px] relative z-10 lg:pt-8 max-width-content animate-[show_3s_linear]">
        <div className="z-[-1] flex">
          <Logo size="40" className="fill-c-dark-purple md:w-10" />
          <img src={logoText} alt="" className="h-8 aspect-auto ml-2 hidden lg:block"/>
        </div>
        <div className="flex items-center gap-2 relative xl:flex-1 xl:justify-between">
          <input
            type="checkbox"
            id="nav-bar-input"
            className="peer/nav-bar"
            hidden
          />
          <label htmlFor="nav-bar-input" className="fixed top-0 left-0 right-0 bottom-0 bg-black/30 z-[-1] hidden peer-checked/nav-bar:block" id="overlay"></label>
          <div className="absolute right-0 mt-2 w-full top-full overflow-hidden rounded-3xl bg-white transition-all duration-500 max-h-0 xl:overflow-visible peer-checked/nav-bar:max-h-[500px] xl:max-h-fit xl:relative xl:mt-0 xl:bg-transparent xl:w-fit xl:ml-20">
            <ul className="w-full py-4 flex flex-col gap-4 text-base text-c-dark-purple ml-6 group xl:flex-row xl:text-sm xl:gap-0 xl:ml-0 xl:relative xl:px-0">
              <li className="group/li-nav peer/li-1 peer/li-nav cursor-pointer xl:min-w-[120px] xl:px-4 xl:py-2">
                <span className="aspect-square mr-4 inline-block xl:scale-0 xl:max-w-0 xl:group-hover/li-nav:scale-100 xl:group-hover/li-nav:max-w-[40px] xl:mr-0 xl:transition-all xl:duration-500 xl:group-hover/li-nav:mr-2">
                  <i className="fa-solid fa-shield-heart"></i>
                </span>
                <span>Security</span>
              </li>
              <li className="group/li-nav peer/li-2 peer/li-nav xl:relative">
                <div className="cursor-pointer xl:min-w-[120px] xl:px-4 xl:py-2">
                  <span className="aspect-square mr-4 inline-block xl:scale-0 xl:max-w-0 xl:group-hover/li-nav:scale-100 xl:group-hover/li-nav:max-w-[40px] xl:mr-0 xl:transition-all xl:duration-500 xl:group-hover/li-nav:mr-2">
                    <i className="fa-solid fa-bolt"></i>
                  </span>
                  <span>Learn</span>
                </div>
                <ul className="text-sm pl-8 flex mt-3 flex-col gap-3 lg:gap-5 xl:max-h-0 xl:bg-white overflow-hidden xl:group-hover/li-nav:max-h-[300px] xl:absolute xl:top-full xl:left-0 xl:transition-all xl:px-1 xl:group-hover/li-nav:py-2 xl:gap-1 xl:rounded-3xl xl:text-center xl:duration-500 xl:w-full">
                  <li className="xl:hover:bg-c-purple/50 transition-all duration-500 cursor-pointer xl:px-2 xl:py-2 xl:rounded-full">Blog</li>
                  <li className="xl:hover:bg-c-purple/50 transition-all duration-500 cursor-pointer xl:px-2 xl:py-2 xl:rounded-full">Crypto 101</li>
                  <li className="xl:hover:bg-c-purple/50 transition-all duration-500 cursor-pointer xl:px-2 xl:py-2 xl:rounded-full">Guides</li>
                  <li className="xl:hover:bg-c-purple/50 transition-all duration-500 cursor-pointer xl:px-2 xl:py-2 xl:rounded-full">Developers</li>
                </ul>
              </li>
              <li className="group/li-nav peer/li-3 peer/li-nav cursor-pointer xl:min-w-[120px] xl:px-4 xl:py-2">
                <span className="aspect-square mr-4 inline-block xl:scale-0 xl:max-w-0 xl:group-hover/li-nav:scale-100 xl:group-hover/li-nav:max-w-[40px] xl:mr-0 xl:transition-all xl:duration-500 xl:group-hover/li-nav:mr-2">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span>Explore</span>
              </li>
              <li className="group/li-nav peer/li-4 peer/li-nav cursor-pointer xl:min-w-[120px] xl:px-4 xl:py-2">
                <span className="aspect-square mr-4 inline-block xl:scale-0 xl:max-w-0 xl:group-hover/li-nav:scale-100 xl:group-hover/li-nav:max-w-[40px] xl:mr-0 xl:transition-all xl:duration-500 xl:group-hover/li-nav:mr-2">
                  <i className="fa-solid fa-message"></i>
                </span>
                <span>Support</span>
              </li>
              <div className="absolute top-1/2 hidden w-[120px] -translate-y-1/2 h-10 rounded-full bg-c-purple/20 z-[-1] transition-all duration-500 peer-hover/li-1:left-0 peer-hover/li-2:left-1/4 peer-hover/li-3:left-2/4 peer-hover/li-4:left-3/4 peer-hover/li-nav:block"></div>
            </ul>
          </div>

          <button className="bg-c-purple px-6 py-4 rounded-full text-sm lg:font-bold lg:text-lg xl:text-sm transition-all hover:bg-c-purple/50 hover:scale-[98%]">
            Download
          </button>
          <label
            htmlFor="nav-bar-input"
            className="h-12 aspect-square bg-white rounded-full grid place-content-center text-lg group xl:hidden"
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
