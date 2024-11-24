"use client";
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

//Aqui eu estou pegando todas as propriedades do InputProps, passando como paramentro e depois usando todas elas no {...rest}

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
  error?: FieldError;
  placeHolder?: string;
}

//Pra tipar a ref, é preciso importar de dentro do react o pacote: ForwardRefRenderFunction
//Feito isso, eu tipo o InputBase dessa forma e passo os generics dentro

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, placeHolder, error = null, ...rest }, ref) => {
  return (
    //Por padrão o formControl tem uma variavel que diz pra gente se o formulário sofre
    //algum tipo de erro
    //Com esses dois sinais !! eu transformo o retorno da variável em booleano
    <FormControl isInvalid={!!error}>
      {/* Esse FormControl serve pra tudo que tiver dentro dele não pegar o
    espaçamento do Stack */}
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={label}
        // type="email"
        ref={ref}
        {...rest}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        placeholder={placeHolder}
      />
      {/* Se tiver alguma coisa dentro de ERROR ai mostra a mensagem de erro neste componente.. */}
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
//O forwarwdRef que é responsável por fazer o encaminhamento da ref
export const Input = forwardRef(InputBase);
