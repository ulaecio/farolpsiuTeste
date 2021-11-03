//LISTA DE VENDAS
export type sales = {
    id: number;
    empresa: number;
    setor: String;
    rota: number;
    vlr_venda: number;
    qtde_venda: number;
    produto: String;
    tipo_bebida: String;
    familia: String;
    data_vendas: Date;

    }

//PAGINAÇÃO DAS VENDAS
export type salePage = {
    content?: sales[];
    empty?: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements?: number;
    totalElements: number;
    totalPages: number;
    size?: number;

}

export type vendasTipoBebida = {
    rota: number;
    tipo_bebida: String;
    qtde_venda: number;
}

export type vendasPorEmbalagem = {
    embalagem: string;
    venda: number;
    volume: number;
}

export type vendasPorSetor = {
    setor: string;
    total_venda: number;
}

export type VendaTotalPorRota = {
    rota: number;
    totalvenda: number | undefined;
}

export type volumeSetorTipoBebida = {
    rota: number;
    tipo_bebida: string;
    qtde_venda: number;
}
export type VendaTotalPorFamilia = {
    familia: string;
    total_venda: number;
}