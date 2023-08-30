import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import logo from "../../assets/images/logo.png";
// import { SearchIcon } from "./SearchIcon.jsx";

export default function NavBarC() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <img src={logo} alt="Logo" className=" w-[130px]" />
          {/* <p className="hidden sm:block font-bold text-inherit"> Impronta </p> */}
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Pre-Agendamiento
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Historias Clinicas
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          //   startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              color="primary"
              as="button"
              className="transition-transform"
              name="Jason Hughes"
              size="sm"
              src="https://avatars.githubusercontent.com/u/116285852?v=4"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Bienvenid@</p>
              <p className="font-semibold">Jorge Tarazona</p>
            </DropdownItem>
            <DropdownItem key="settings">Configuración</DropdownItem>
            <DropdownItem key="analytics">Pre-Agendamiento</DropdownItem>
            <DropdownItem key="system">Historias e Informes</DropdownItem>
            <DropdownItem key="configurations">Reportes Novedades</DropdownItem>
            <DropdownItem key="help_and_feedback">
              Tablerto informativo
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Cerrar Sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
