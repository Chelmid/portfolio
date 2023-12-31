import il8nEn from "../data/il8nEn.json";
import il8nFr from "../data/il8nFr.json";
import { defaultNS } from './i18next';
const resources = {
    il8nEn,
    il8nFr,
  } as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources;
  }
}