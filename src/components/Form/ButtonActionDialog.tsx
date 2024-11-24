"use client";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Icon,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  id: number;
  isLoading: boolean;
  handle: (idProps: number) => Promise<void>;
  showModalButtonText: string;
  colorButtonText: string;
  modalHeader: string;
  modalBody: string;
  iconButtonInicial: React.ReactElement;
  iconButtonResposta: React.ReactElement;
  initialButtonText: string;
};

export function ButtonActionDialog({
  id,
  isLoading,
  handle,
  modalBody,
  modalHeader,
  showModalButtonText,
  colorButtonText,
  iconButtonInicial,
  iconButtonResposta,
  initialButtonText,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handleClick() {
    // console.log(idProcuracao);
    await handle(id);
    onClose();
  }

  return (
    <>
      <Button
        isLoading={isLoading}
        size={"sm"}
        fontSize={"sm"}
        colorScheme={colorButtonText}
        iconSpacing={isWideVersion ? 2 : 0}
        onClick={onOpen}
        leftIcon={iconButtonInicial}
      >
        {initialButtonText}
      </Button>

      <AlertDialog
        //Quando o carregamento for true, não é possível fechar o Dialog clicando fora
        closeOnOverlayClick={!isLoading}
        //Quando o carregamento for true, não é possível fechar o Dialog apertando esc
        closeOnEsc={!isLoading}
        motionPreset="slideInTop"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              <Text color="gray.900">{modalHeader}</Text>
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text color="gray.600">{modalBody}</Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                //Desabilita o botão de voltar quando está em carregamento
                isDisabled={isLoading}
                id="cancelar"
                as="button"
                ref={cancelRef}
                variant="outline"
                onClick={onClose}
              >
                Voltar
              </Button>
              <Button
                // size="sm"
                onClick={handleClick}
                colorScheme={colorButtonText}
                leftIcon={iconButtonResposta}
                isLoading={isLoading}
                ml={3}
              >
                {showModalButtonText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
