import Logo from '../../partials/Logo';
import logoText from '../../assets/image/logoText.png';

function Header() {
  return (
    <header>
      <div className="max-width-content relative z-10 flex h-[76px] animate-[show_3s_linear] items-center justify-between px-5 py-3 lg:pt-8">
        <div className="z-[-1] flex">
          <Logo size="40" className="fill-c-dark-purple md:w-10" />
          <img src={logoText} alt="" className="ml-2 hidden aspect-auto h-8 lg:block" />
        </div>
        <div className="relative flex items-center gap-2 xl:flex-1 xl:justify-between">
          <input type="checkbox" id="nav-bar-input" className="peer/nav-bar" hidden />
          <label
            htmlFor="nav-bar-input"
            className="fixed bottom-0 left-0 right-0 top-0 z-[-1] hidden bg-black/30 peer-checked/nav-bar:block"
            id="overlay"
          ></label>
          <div className="absolute right-0 top-full mt-2 max-h-0 w-full overflow-hidden rounded-3xl bg-white transition-all duration-500 peer-checked/nav-bar:max-h-[500px] xl:relative xl:ml-20 xl:mt-0 xl:max-h-fit xl:w-fit xl:overflow-visible xl:bg-transparent">
            <ul className="group ml-6 flex w-full flex-col gap-4 py-4 text-base text-c-dark-purple xl:relative xl:ml-0 xl:flex-row xl:gap-0 xl:px-0 xl:text-sm">
              <li className="group/li-nav peer/li-1 peer/li-nav cursor-pointer xl:min-w-[120px] xl:px-4 xl:py-2">
                <span className="mr-4 inline-block aspect-square xl:mr-0 xl:max-w-0 xl:scale-0 xl:transition-all xl:duration-500 xl:group-hover/li-nav:mr-2 xl:group-hover/li-nav:max-w-[40px] xl:group-hover/li-nav:scale-100">
                  <i className="fa-solid fa-shield-heart"></i>
                </span>
                <span>Security</span>
              </li>
              <li className="group/li-nav peer/li-2 peer/li-nav xl:relative">
                <div className="cursor-pointer xl:min-w-[120px] xl:px-4 xl:py-2 ">
                  <span className="mr-4 inline-block aspect-square xl:mr-0 xl:max-w-0 xl:scale-0 xl:transition-all xl:duration-500 xl:group-hover/li-nav:mr-2 xl:group-hover/li-nav:max-w-[40px] xl:group-hover/li-nav:scale-100">
                    <i className="fa-solid fa-bolt"></i>
                  </span>
                  <span>Learn</span>
                </div>
                <ul className="mt-3 flex flex-col gap-3 overflow-hidden pl-8 text-sm lg:gap-5 xl:absolute xl:left-0 xl:top-full xl:max-h-0 xl:w-full xl:gap-1 xl:rounded-3xl xl:bg-white xl:px-1 xl:text-center xl:transition-all xl:duration-500 xl:group-hover/li-nav:max-h-[300px] xl:group-hover/li-nav:py-2">
                  <li className="cursor-pointer transition-all duration-500 xl:rounded-full xl:px-2 xl:py-2 xl:hover:bg-c-purple/50">Blog</li>
                  <li className="cursor-pointer transition-all duration-500 xl:rounded-full xl:px-2 xl:py-2 xl:hover:bg-c-purple/50">Crypto 101</li>
                  <li className="cursor-pointer transition-all duration-500 xl:rounded-full xl:px-2 xl:py-2 xl:hover:bg-c-purple/50">Guides</li>
                  <li className="cursor-pointer transition-all duration-500 xl:rounded-full xl:px-2 xl:py-2 xl:hover:bg-c-purple/50">Developers</li>
                </ul>
              </li>
              <li className="group/li-nav peer/li-3 peer/li-nav cursor-pointer xl:min-w-[120px] xl:px-4 xl:py-2">
                <span className="mr-4 inline-block aspect-square xl:mr-0 xl:max-w-0 xl:scale-0 xl:transition-all xl:duration-500 xl:group-hover/li-nav:mr-2 xl:group-hover/li-nav:max-w-[40px] xl:group-hover/li-nav:scale-100">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span>Explore</span>
              </li>
              <li className="group/li-nav peer/li-4 peer/li-nav cursor-pointer xl:min-w-[120px] xl:px-4 xl:py-2">
                <span className="mr-4 inline-block aspect-square xl:mr-0 xl:max-w-0 xl:scale-0 xl:transition-all xl:duration-500 xl:group-hover/li-nav:mr-2 xl:group-hover/li-nav:max-w-[40px] xl:group-hover/li-nav:scale-100">
                  <i className="fa-solid fa-message"></i>
                </span>
                <span>Support</span>
              </li>
              <div className="absolute top-1/2 z-[-1] hidden h-10 w-[120px] -translate-y-1/2 rounded-full bg-c-purple/20 transition-all duration-500 peer-hover/li-1:left-0 peer-hover/li-2:left-1/4 peer-hover/li-3:left-2/4 peer-hover/li-4:left-3/4 peer-hover/li-nav:block"></div>
            </ul>
          </div>

          <button className="rounded-full bg-c-purple px-6 py-4 text-sm transition-all hover:scale-[98%] hover:bg-c-purple/50 lg:text-lg lg:font-bold xl:text-sm">
            Download
          </button>
          <label htmlFor="nav-bar-input" className="group grid aspect-square h-12 place-content-center rounded-full bg-white text-lg xl:hidden">
            <div className="relative h-1 w-1">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transition-all duration-1000 peer-checked/nav-bar:group-[]:scale-0">
                <i className="fa-solid fa-bars"></i>
              </span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-1000 peer-checked/nav-bar:group-[]:scale-100">
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
