import FooterLogo from "../assets/logo-text.png";

function Footer() {
  return (
    <div className=" mt-10 border-t border-gray-200">
      <footer>
        <div className ="container mx-auto grid grid-cols-1 md:grid-cols-5 justify-between items-center  h-100 p-4">
          <div className="col-span-1 md:col-span-2 text-center md:text-left space-y-4">
            <img className="mx-auto md:mx-0" src={FooterLogo} alt="" />
            <p className="text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <ul className="space-y-4 flex gap-4 justify-center md:justify-start text-gray-700">
              <li>
                <a href="#github">GitHub</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#linkedik">Linkedin</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:col-span-3 md:grid md:grid-cols-3">
            <div>
              <h2 className="font-bold my-2">PRODUCT</h2>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#technologies">Technologies</a>
                </li>
                <li>
                  <a href="#prjects">Projects</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold my-2">COMPANY</h2>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold my-2">LEGAL</h2>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>
                  <a href="#PrivacyPolicy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#TermsofService">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex justify-between p-4 text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved</p>
          <div className="flex gap-4">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

