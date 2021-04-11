import React from "react";
import Header from "components/Header";
import Links from "components/Links";
import Link from "components/Link";

function Menu() {
  return (
    <div>
      <Header location="Blk 123 Eunos Ave 1 #12-123" numOfStores={2} est={40} />
      <Links>
        <Link>Main</Link>
        <Link>Putien</Link>
      </Links>
    </div>
  );
}

export default Menu;
