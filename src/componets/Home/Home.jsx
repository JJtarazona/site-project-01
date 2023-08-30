import React from "react";
import TablePreAge from "../TablePreAge/TablePreAge";
import BtnNewCase from "../BtnNewCase/BtnNewCase";
import Paginated from "../Paginated/Paginated";

function Home() {
  return (
    <div >
      <div className="flex flex-row-reverse m-4 ">
        <BtnNewCase />
      </div>

      <div>
        <TablePreAge />
      </div>

      <div className="flex m-4">
      <Paginated/>
      </div>
    </div>
  );
}

export default Home;
