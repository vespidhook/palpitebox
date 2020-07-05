import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

const Contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <div>
        <PageTitle title="Contato" />

        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Contato;
