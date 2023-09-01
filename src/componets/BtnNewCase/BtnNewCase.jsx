import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import Swal from "sweetalert2";
import FormPreAge from "../FormPreAge/FormPreAge";

export default function BtnNewCase() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const backdrops = ["opaque", "blur", "transparent"];

  const handleOpen = () => {
    onOpen();
  };

  const handleAlert = () => {
    Swal.fire(
      "Pre-Agendamiento creado!",
      "SE VA A REALIZAR UN PREAGENDAMIENTO, EN CUANTO SE HABILITE LA DISPONIBILIDAD PARA AGENDAR LAS TERAPÍAS DEL USUARIO, UNO DE NUESTROS AGENTES SE ESTARA COMUNICANDO CON USTED VIA TELEFONICA",
      "success"
    );
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {/* Botón que al hacer clic abre el modal */}
        <Button
          radius="full"
          className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg"
          onClick={handleOpen}
        >
          Nuevo Caso
        </Button>
      </div>
      {/* Componente Modal */}
      <Modal size={"4xl"} backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {/* Función de renderizado */}
          {(onClose) => (
            <>
              {/* Encabezado del modal */}
              <ModalHeader className="flex flex-col gap-1 items-center text-2xl">
                Crear nuevo caso{" "}
              </ModalHeader>
              {/* Cuerpo del modal */}
              <ModalBody>
                <FormPreAge />
              </ModalBody>
              {/* Pie del modal */}
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  className="bg-gradient-to-tr from-green-500 to-blue-500  text-white"
                  onClick={handleAlert}
                  onPress={onClose}
                >
                  Crear
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
