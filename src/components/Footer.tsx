import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="absolute text-center w-full h-10 bottom-0">
        © Copyright {new Date().getFullYear()}
        <a
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="/"
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
        >
          - Christopher Ayegwalo
        </a>
      </footer>
    </div>
  );
};

export default Footer;
