import React from "react";
import { Input } from "@nextui-org/react";
import { MailIcon } from "./MailIcon";

export default function FormPreAge() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 flex-col">
        <div>
          <Input
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div>
          <Input
            type="text"
            label="Nombre del usuario"
            placeholder="Nombre del usuario"
            labelPlacement="outside"
          />
        </div>
        <div>
          <Input
            type="number"
            label="Documento del usuario"
            placeholder="1234567"
            labelPlacement="outside"
          />
        </div>
        <div>
          <Input
            type="phone"
            label="Telefono del usuario"
            placeholder="3001234567"
            labelPlacement="outside"
          />
        </div>
        <div className="flex flex-row">
          <Input
            type="number"
            label="FONO"
            placeholder="1"
            labelPlacement="outside"
          />
                    <Input
            type="number"
            label="TEO"
            placeholder="1"
            labelPlacement="outside"
          />
                              <Input
            type="number"
            label="FISIO"
            placeholder="1"
            labelPlacement="outside"
          />
                                        <Input
            type="number"
            label="PSICO"
            placeholder="1"
            labelPlacement="outside"
          />
        </div>
      </div>
    </div>
  );
}
