import Logo from "../../partials/Logo";

function Footer() {
  return (
    <footer>
      <div className="bg-white text-black p-5 md:m-6 md:rounded-xl xl:mt-40 xl:flex xl:flex-row-reverse xl:p-10 xl:m-10">
        <div className="xl:w-3/5">
          <div className="bg-theme-violet p-3 mb-14 rounded-lg md:rounded-xl lg:p-6">
            <input
              className="bg-transparent text-2xl w-full outline-none mb-2 md:text-3xl lg:text-5xl"
              type="email"
              placeholder="Enter your email"
            />
            <div className="flex items-end justify-between lg:text-xl lg:mt-10">
              <p>
                Sign up for our newsletter and join the growing Phantom
                community.
              </p>
              <button className="bg-c-dark-purple text-white px-6 py-4 text-sm rounded-full whitespace-nowrap ml-2 lg:text-base lg:px-8">
                Sign up
              </button>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
            <li>
              <span className="mb-4 block text-stone-500">Product</span>
              <ul className="flex flex-col gap-3">
                <li>Download</li>
                <li>Security</li>
                <li>Support</li>
                <li>Feature Requests</li>
              </ul>
            </li>
            <li>
              <span className="mb-4 block text-stone-500">Resources</span>
              <ul className="flex flex-col gap-3">
                <li>Explore</li>
                <li>Learn</li>
                <li>Blog</li>
                <li>Docs</li>
                <li>Taxes</li>
              </ul>
            </li>
            <li>
              <span className="mb-4 block text-stone-500">Compony</span>
              <ul className="flex flex-col gap-3">
                <li>About</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Status</li>
                <li>Careers</li>
                <li>Press Kit</li>
              </ul>
            </li>
            <li>
              <span className="mb-4 block text-stone-500">Socials</span>
              <ul className="flex flex-col gap-3">
                <li>
                  <i className="fa-brands fa-twitter"></i> Twitter
                </li>
                <li>
                  <i className="fa-brands fa-youtube"></i> Youtube
                </li>
                <li>
                  <i className="fa-brands fa-reddit"></i> Reddit
                </li>
                <li>
                  <i className="fa-solid fa-podcast"></i> Podcast
                </li>
                <li>
                  <i className="fa-brands fa-linkedin"></i> Linkedin
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-end mt-16 xl:w-2/5 xl:flex xl:flex-col xl:items-start xl:mt-0">
          <Logo size="4rem" />
          <span className="text-sm text-stone-400">© Phantom 2023</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
