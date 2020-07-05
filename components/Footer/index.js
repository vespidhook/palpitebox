import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido por:{" "}
        <a className="hover:underline" href="https://bas.inf.br">
          Bruno Alves
        </a>{" "}
        /{" "}
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/brunoalvesilva/"
        >
          Linkedin
        </a>{" "}
        /{" "}
        <a className="hover:underline" href="https://github.com/vespidhook">
          Github
        </a>
        <div className="mt-2">
          <img className="inline p-4" src="/logo_semana_fsm.png" alt="" />
          <img className="inline p-4" src="/logo_devpleno.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
