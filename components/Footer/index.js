import React from "react";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto text-center font-bold text-white text-lg">
        Projeto desenvolvido por:{" "}
        <a
          className="hover:underline"
          href="https://bas.inf.br/"
          target="_blank"
        >
          Bruno Alves
        </a>{" "}
        /{" "}
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/brunoalvesilva/"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        /{" "}
        <a
          className="hover:underline"
          href="https://github.com/vespidhook"
          target="_blank"
        >
          GitHub
        </a>
        <div className="mt-2">
          <img
            className={`inline p-4 mx-4 ${styles.imageSize}`}
            src="/logo_semana_fsm.png"
          />
          <img
            className={`inline p-4 mx-4 ${styles.imageSize}`}
            src="/logo_devpleno.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
