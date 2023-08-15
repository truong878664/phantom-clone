import Logo from "../../partials/Logo";

function Footer() {
  return (
    <footer>
      <div className="bg-white text-black p-5 md:m-6 md:rounded-xl">
        <div className="bg-theme-violet p-3 mb-14 rounded-lg">
            <input className="bg-transparent text-2xl w-full outline-none mb-2 md:text-3xl" type="email" placeholder="Enter your email" />
            <div className="flex items-end justify-between">
                <p>Sign up for our newsletter and join the growing Phantom community.</p>
                <button className="bg-c-dark-purple text-white px-6 py-4 text-sm rounded-full whitespace-nowrap ml-2">Sign up</button>
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
                    <li>Twitter</li>
                    <li>Youtube</li>
                    <li>Reddit</li>
                    <li>Podcast</li>
                    <li>Linkedin</li>
                </ul>
            </li>
        </ul>
        <div className="flex justify-between items-end mt-16">
            <Logo size="4rem"/>
            <span className="text-sm text-stone-400">© Phantom 2023</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
