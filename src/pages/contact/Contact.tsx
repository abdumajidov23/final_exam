import { FaPhoneAlt, FaInstagram, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import my_foto from "../../assets/images/my_foto.jpg";


const Contact: React.FC = () => {
  return (
    <div className="container min-h-screen flex flex-col items-center justify-start p-6 md:p-12 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 p-8 md:p-16 shadow-2xl rounded-2xl text-center transition-all duration-300">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Contact Me</h1>
        <div className="flex items-center space-x-6 mb-8 divide-y-2 divide-x-2 divide-y-reverse">
          <img src={my_foto} alt="Developer"
            className="w-48 h-48 rounded-full shadow-lg border-4 border-gray-400 dark:border-gray-600 transition-all duration-300" />
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white text-left p-11">Alijon Abdumajidov</h2>
        </div>

        <div className="flex items-center justify-center space-x-6 mb-8">
          <a
            href="tel:+998977553593"
            className="p-4 md:p-5 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 dark:hover:bg-green-500 transition-all duration-300"
          >
            <FaPhoneAlt className="w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="tel:+998977553593"
            className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 hover:text-red-500 transition-all duration-300"
          >
            +998 97 755 35 93
          </a>
        </div>

        <div className="flex justify-center space-x-6 md:space-x-10 mt-8">
          <a
            href="https://www.linkedin.com/in/alijon-abdumajidov-9418512b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-500 text-4xl md:text-5xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/abdumajidov23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-300 text-4xl md:text-5xl hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/ali_abdumajid_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 dark:text-pink-400 text-4xl md:text-5xl hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/antique_rain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 text-4xl md:text-5xl hover:scale-110 transition-transform"
          >
            <FaTelegram />
          </a>
          <a
            href="mailto:alijonabdumajidov09@gmail.com"
            className="text-red-600 dark:text-red-500 text-4xl md:text-5xl hover:scale-110 transition-transform"
          >
            <SiGmail />

          </a>
        </div>
        <a
          href="https://portfolio-abdumajidovs-projects.vercel.app"
          className=" text-black dark:text-white font-light"
        ><br />
          link:  portfolio-abdumajidov
        </a>

      </div>
    </div>
  );
};

export default Contact;




