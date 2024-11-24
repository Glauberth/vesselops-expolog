"use client";

import { Input } from "@/components/Form/Input";
import { Button, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

//Essas duas bibliotecas para fazer funcionar o yup
import * as yup from "yup"; //Dessa forma eu importo logo tudo em um nome chamado yup
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

// -> Controlled controls: Componentes cujo estado é controlado pelo React,
//    geralmente usando propriedades para definir e atualizar
//    o estado usando useState por exemplo. dessa forma fica pesada uma página
//    que tem muitos inputs com um useState pra cada...
// -> Uncontrolled controls: Componentes que mantêm seu próprio
//    estado interno sem a gestão direta do React. Um exemplo é o uso de Formulários,
//    assim é feito a captura dos value dos inputs somente quando é feito o submite do formulário
//
// -> Depois precisamos só fazer o encaminhamento de ref, pois nosso input não é nativo,
//    ele é um componente criado. Então vai ser preciso transformar o componente em constante
//    dessa forma: const Input = () => {}
// -> O Flex que está como as='form' que vai receber o onSubmit()
//
// -> a props formState do useForm() tem como saber vários estados do formulário.
//    Tem como saber se o formulário está em processo de submit, pra poder colocar um loading

type SingInFormData = {
  email: string;
  password: string;
};

function LoginPage() {
  const router = useRouter();

  //Criando o schema de validação do Yup
  const singInFormSchema = yup.object().shape({
    email: yup
      .string()
      .required("Digite um Email")
      .email("Formato de Email inválido"),
    password: yup
      .string()
      .required("Digite uma senha")
      .min(6, "Digite pelo menos 6 caracteres"),
  });

  //Passo como parametro do useForm minha constante de  validação do yup
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(singInFormSchema),
  });

  const erros = formState.errors;

  //O Parametro que for passado, que nesse exemplo é op `values`, eu consigo ler os
  //dados qe veio do meu formulario
  const handleSignIn: SubmitHandler<SingInFormData> = async (values) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const { email, password } = values;

    if (email === "teste@teste.com") {
      router.push("/dashboard");
    } else {
      alert("Email ou Senha inválidos");
    }
    // console.log({ email, password });
  };

  return (
    <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        // ai eu envolvo a minha função pela função
        //que ven de dentro do useForm();
        onSubmit={handleSubmit(handleSignIn)}
        width="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding={8}
        borderRadius={8}
        flexDirection="column"
      >
        <Flex justifyContent="center">
          <Image
            src="/images/logo.png"
            // bg="gray.50"
            // borderRadius="full"
            alt="Picture of the author"
            width="50%"
          />
        </Flex>
        {/* 
        - O Componente Stack é pra automaticamente 
          ele criar espaçamentos entre os
          items dentro dele 
        */}
        <Stack spacing="4">
          <Input
            type="email"
            // name="email"
            label="E-mail"
            placeHolder="Type your email address"
            error={erros.email}
            {...register("email")}
          />

          <Input
            type="password"
            // name="password"
            label="Password"
            placeHolder="Type your password"
            error={erros.password}
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          colorScheme="cyan"
          marginTop={6}
          isLoading={formState.isSubmitting}
        >
          Login
        </Button>
        {/* {username} {password} {email} */}
        <Link mt={2}>
          <Text fontSize="small">Forget Password?</Text>
          <Text fontSize="small"></Text>
        </Link>
      </Flex>
    </Flex>
  );
}
export default LoginPage;
//Toda página precisa ser exportada com default
