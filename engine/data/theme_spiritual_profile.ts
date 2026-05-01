
export type SpiritualProfile = 'Doutrinário' | 'Devocional' | 'Pastoral' | 'Profético' | 'Evangelístico' | 'Discipulado';

export const SPIRITUAL_KEYWORDS: Record<SpiritualProfile, string[]> = {
  Doutrinário: ['lei', 'mandamento', 'verdade', 'doutrina', 'alianca', 'decreto', 'soberania', 'eleicao', 'justific', 'santo', 'justo', 'fiel', 'onipotent', 'eterno'],
  Devocional: ['louvor', 'adorar', 'presenca', 'gloria', 'majestade', 'comunhao', 'alma', 'coracao', 'alegria', 'jubilo', 'exultar', 'intimidade'],
  Pastoral: ['consolo', 'cuid', 'pastor', 'ajuda', 'socorro', 'aflic', 'tribul', 'lagrimas', 'refugio', 'paz', 'protecao', 'sustento', 'compaixao'],
  Profético: ['juizo', 'ira', 'dia do senhor', 'alerta', 'arrepend', 'castigo', 'tribunal', 'vinda', 'reino', 'trono', 'dominio', 'governa'],
  Evangelístico: ['salvacao', 'evangel', 'crer', 'fe', 'perdao', 'graca', 'misericord', 'cruz', 'sangue', 'mundo', 'redimir', 'resgate'],
  Discipulado: ['seguir', 'obedec', 'mandamento', 'viver', 'andar', 'fiel', 'fruto', 'trabalho', 'negar', 'mestre', 'serv', 'humild']
};
