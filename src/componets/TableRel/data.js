import React from "react";
const columns = [
  { name: "FECHA", uid: "Fecha" },
  { name: "ENTREGA", uid: "entrega" },
  { name: "CANTIDAD FISICA", uid: "cantidad" },
  { name: "NE", uid: "ne" },
  { name: "ST", uid: "st" },
  { name: "RECIBE", uid: "recibe" },
  { name: "ESTATUS", uid: "status" },
  { name: "ACCIONES", uid: "actions" },
];

const users = [
  {
    id: 1,
    Fecha: "10/03/2023",
    entrega: "Karina Galindez",
    cantidad: 23,
    ne: 14,
    st: 2,
    email: "tony.reichert@example.com",
    recibe: "ANDREA USMA", 
    services: "FONO, TEO", // Servicios solicitados
    status: "No revisado",
  },
  {
    id: 2,
    Fecha: "10/04/2023",
    entrega: "Karina Galindez",
    cantidad: 23,
    ne: 14,
    st: 2,
    email: "zoey.lang@example.com",
    recibe: "ANDREA USMA",    services: "FONO, PSICO", // Servicios solicitados
    status: "No revisado",
  },
  {
    id: 3,
    Fecha: "10/05/2023",
    entrega: "Karina Galindez",
    cantidad: 23,
    ne: 14,
    st: 2,
    email: "jane.fisher@example.com",
    recibe: "ANDREA USMA",    services: "SOMBRA", // Servicios solicitados
    status: "Novedades",
  },
  {
    id: 4,
    Fecha: "10/06/2023",
    entrega: "Karina Galindez",
    cantidad: 23,
    ne: 14,
    st: 2,
    email: "william.howard@example.com",
    recibe: "ANDREA USMA",    services: "FONO, FISIO, TEO", // Servicios solicitados
    status: "Aceptado",
  },
  {
    id: 5,
    Fecha: "10/07/2023",
    entrega: "Karina Galindez",
    cantidad: 23,
    ne: 14,
    st: 2,
    email: "kristen.cooper@example.com",
    recibe: "ANDREA USMA",    services: "FONO, FISIO", // Servicios solicitados
    status: "Aceptado",
  },
];

export { columns, users };
