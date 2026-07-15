import en from './en.json';
import ptBR from './pt-BR.json';

export const localeBundles = {
	'pt-BR': ptBR,
	en,
} as const;

export type LocaleBundleKey = keyof typeof localeBundles;
