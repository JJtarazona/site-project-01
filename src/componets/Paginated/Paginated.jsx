import React from "react";
import {Pagination} from "@nextui-org/react";

export default function Paginated() {
  return (
    <Pagination total={10} initialPage={1} />
  );
}
