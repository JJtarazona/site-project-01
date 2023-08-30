import React from "react";
const columns = [
  { name: "NOMBRE DE USUARIO", uid: "name" },
  { name: "EPS", uid: "eps" },
  { name: "STATUS", uid: "status" },
  { name: "DIAGNOSTICO", uid: "diagnisto" },
  { name: "CREADO", uid: "created" },
  { name: "SERVICIO", uid: "services" },
  { name: "ACCIONES", uid: "actions" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    eps: "SOS",
    diagnisto: "E23.0",
    status: "Pendiente",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
    created: "2023-08-27", // Fecha de creación (reemplaza con la fecha real)
    services: "FONO, TEO", // Servicios solicitados
  },
  {
    id: 2,
    name: "Zoey Lang",
    eps: "Nueva EPS",
    diagnisto: "E23.3",
    status: "Pendiente",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
    created: "2023-08-27", // Fecha de creación (reemplaza con la fecha real)
    services: "FONO, PSICO", // Servicios solicitados
  },
  {
    id: 3,
    name: "Jane Fisher",
    eps: "Salud Total",
    diagnisto: "Z00.1",
    status: "Pendiente",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
    created: "2023-08-27", // Fecha de creación (reemplaza con la fecha real)
    services: "SOMBRA", // Servicios solicitados
  },
  {
    id: 4,
    name: "William Howard",
    eps: "Salud Total",
    diagnisto: "Z00.2",
    status: "No acepta",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
    created: "2023-08-27", // Fecha de creación (reemplaza con la fecha real)
    services: "FONO, FISIO, TEO", // Servicios solicitados
  },
  {
    id: 5,
    name: "Kristen Copper",
    eps: "Nueva EPS",
    diagnisto: "Z00.2",
    status: "agendado",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
    created: "2023-08-27", // Fecha de creación (reemplaza con la fecha real)
    services: "FONO, FISIO", // Servicios solicitados
  },
];

export { columns, users };
