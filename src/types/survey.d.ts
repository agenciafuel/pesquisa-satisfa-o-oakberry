interface SurveyApiResponse {
  status: boolean;
  pageNumber: number;
  pageCount: number;
  pageSize: number;
  quantidadeVendas: number;
  vendas: Sale[];
}

interface Sale {
  id: number;
  uuid: string;
  dataSaida: string;
  empresa: Company;
  terminal: Terminal;
  cartoesPresente: GiftCard[];
  cliente: Customer;
}

interface Company {
  id: number;
  razaoSocial: string;
  nomeAlternativo: string;
}

interface Terminal {
  id: number;
}

interface GiftCard {
  id: number;
  situacao: number;
  codigoCartao: string;
  dataInicio: string;
  dataLimite: string;
  tipoDesconto: number;
  valorDesconto: number;
}

interface Customer {
  id: number;
  razaoSocial: string;
  cpfCnpj: string;
}
