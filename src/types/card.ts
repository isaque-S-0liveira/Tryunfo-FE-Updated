export type CardType = {
  id?: number;
  nome: string;
  descricao: string;
  Attr01: number;
  Attr02: number;
  Attr03: number;
  raridade: string;
  'Super-trunfo': boolean;
  'imagem-link': string;
};

export type CardTypeProps = {
  preview?: boolean;
  className?: string;
  nome: string;
  raridade : string,
  descricao : string,
  Attr01 : number,
  Attr02 : number,
  Attr03 : number,
  imagemLink : string,
  SuperTrunfo : boolean,
  attrFontSize: string,
};
