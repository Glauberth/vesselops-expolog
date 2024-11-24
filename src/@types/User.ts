import { Perfil } from "./Perfil";

export type User = {
  idUsuario?: number;
  idEmpresa: number;
  idPerfil: number;
  nome: string;
  endereco: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
  pais: string;
  telefone: string;
  celular: string;
  userTemp: number;
  email: string;
  password: string;
  situacao: string; //PENDENTE //NORMAL //BLOQUEADO
  Perfil: Perfil;
  Permissoes: {
    idPermissoes: number;
    idPerfil: number;
    nomeAcesso: string;
  };
  createdAt?: Date;
};
