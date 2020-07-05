import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

const Sobre = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <div>
        <PageTitle title="Sobre" />

        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Sobre;
