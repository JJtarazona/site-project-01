import React from "react";
import TablePreAge from "../TablePreAge/TablePreAge";
import BtnNewCase from "../BtnNewCase/BtnNewCase";

function Home() {
  return (
    <div>
      <div className="flex flex-row-reverse m-4 ">
        <BtnNewCase />
      </div>

      <div>
        <TablePreAge />
      </div>
    </div>
  );
}

export default Home;
