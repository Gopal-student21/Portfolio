import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="flex space-x-6 justify-center items-center ">
      {/* GitHub */}
      <a
      
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-transform transform hover:-translate-y-1"
      >
        <Github size={20} />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#1DA1F2] transition-transform transform hover:-translate-y-1"
      >
        <Twitter size={20} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#0077B5] transition-transform transform hover:-translate-y-1"
      >
        <Linkedin size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#f66c6c] transition-transform transform hover:-translate-y-1"
      >
        <Instagram size={20} />
      </a>
    </div>
  );
};

export default SocialIcons;
