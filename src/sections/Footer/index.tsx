import { faLinkedin, faReddit, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../partials/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="max-w-screen-2x bg-white p-5 text-black md:m-6 md:rounded-xl lg:!mx-[7%] xl:m-10 xl:mt-40 xl:flex xl:flex-row-reverse xl:rounded-[3rem] xl:p-10">
        <div className="xl:w-3/5">
          <div className="mb-14 rounded-lg bg-theme-violet p-3 md:rounded-xl lg:p-6">
            <input className="mb-2 w-full bg-transparent text-2xl outline-none md:text-3xl lg:text-5xl" type="email" placeholder="Enter your email" />
            <div className="flex items-end justify-between lg:mt-10 lg:text-xl">
              <p>Sign up for our newsletter and join the growing Phantom community.</p>
              <button className="ml-2 whitespace-nowrap rounded-full bg-c-dark-purple px-6 py-4 text-sm text-white lg:px-8 lg:text-base">Sign up</button>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
            <li>
              <span className="mb-4 block text-stone-500">Product</span>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-c-purple">
                  <a href="">Download</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Security</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Support</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Feature Requests</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="mb-4 block text-stone-500">Resources</span>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-c-purple">
                  <a href="">Explore</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Learn</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Blog</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Docs</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Taxes</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="mb-4 block text-stone-500">Compony</span>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-c-purple">
                  <a href="">About</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Terms</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Privacy</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Status</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Careers</a>
                </li>
                <li className="hover:text-c-purple">
                  <a href="">Press Kit</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="mb-4 block text-stone-500">Socials</span>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-c-purple hover:underline">
                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </a>
                </li>
                <li className="hover:text-c-purple hover:underline">
                  <a href="">
                    <FontAwesomeIcon icon={faYoutube} /> Youtube
                  </a>
                </li>
                <li className="hover:text-c-purple hover:underline">
                  <a href="">
                    <FontAwesomeIcon icon={faReddit} /> Reddit
                  </a>
                </li>
                <li className="hover:text-c-purple hover:underline">
                  <a href="">
                    <FontAwesomeIcon icon={faPodcast} /> Podcast
                  </a>
                </li>
                <li className="hover:text-c-purple hover:underline">
                  <a href="">
                    <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mt-16 flex items-end justify-between xl:mt-0 xl:flex xl:w-2/5 xl:flex-col xl:items-start">
          <Logo size="4rem" />
          <span className="text-sm text-stone-400">© Phantom 2023</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
