import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { MailIcon } from "./MailIcon";
import Calendar2 from "../Calendar/Calendar";

export default function FormPreAge() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-md text-gray-500 font-bold">Datos del usuario</h1>

      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 flex-col">
        <div className="flex flex-row gap-2">
          <Input
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />

          <Input
            type="text"
            label="Nombre del usuario"
            placeholder="Nombre del usuario"
            labelPlacement="outside"
          />
        </div>
        <div className="flex flex-row gap-4">
          <Input
            type="number"
            label="Documento del usuario"
            placeholder="1234567"
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="Edad del usuario"
            placeholder="1234567"
            labelPlacement="outside"
          />

          <Input
            type="phone"
            label="Telefono del usuario"
            placeholder="3001234567"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="EPS"
            placeholder="Ingresa una EPS"
            labelPlacement="outside"
          />
        </div>

        <div className="flex flex-row gap-2">
          <Input
            type="phone"
            label="Telefono del usuario"
            placeholder="3001234567"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="EPS"
            placeholder="Ingresa una EPS"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="DX"
            placeholder="Ingresa una EPS"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="DX"
            placeholder="Ingresa una EPS"
            labelPlacement="outside"
          />{" "}
        </div>
        <h1 className="text-md text-gray-500 font-bold">
          Datos de la autorización
        </h1>
        <div className="flex flex-row gap-2">
          <Input
            type="text"
            label="Número de Autorización"
            placeholder="# Autorización"
            labelPlacement="outside"
          />
          <Input
            type="text"
            label="Mortivo"
            placeholder="Motivo"
            labelPlacement="outside"
          />{" "}
        </div>
        <div className="flex flex-row gap-2 mt-6">
          <Input
            type="number"
            label="FONO"
            placeholder=""
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="TEO"
            placeholder=""
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="FISIO"
            placeholder=""
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="PSICO"
            placeholder=""
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="TA"
            placeholder=""
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="ABA"
            placeholder=""
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="SOM"
            placeholder=""
            labelPlacement="outside"
          />
          <Input
            type="number"
            label="MUS"
            placeholder=""
            labelPlacement="outside"
          />
          <Calendar2 />
        </div>
      </div>
    </div>
  );
}
