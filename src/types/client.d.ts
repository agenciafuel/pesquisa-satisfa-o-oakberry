interface ClientAddress {
  id: number;
  bairro: string;
  cep: string;
  logradouro: string;
  numeroEndereco: string;
  idCidade: number;
  nomeCidade: string;
}

interface Client {
  id: number;
  razaoSocial: string;
  ativoApp: boolean;
  clienteDesde: string;
  cpfCnpj: string;
  dataAtualizacao: string;
  dataUltimaAtualizacao: string;
  descontoMaximo: number;
  email: string;
  origemCadastro: number;
  telefone1: string;
  tipo: number;
  uuid: string;
  versaoSincronizacao: number;
  idTabelaPrecoPadrao: number;
  enderecosCliente: ClientAddress[];
}

interface ClientApiResponse {
  status: boolean;
  pageNumber: number;
  pageCount: number;
  pageSize: number;
  quantidadeClientes: number;
  clientes: Client[];
}