//Aqui eu consigo declrar as variaveis do arquivo .env para que eles tenham autocomplete

declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: string;
    NEXT_PUBLIC_AMBIENTE: string;
    NEXT_PUBLIC_URL_API_DEVELOPMENT: string;
    NEXT_PUBLIC_URL_API_PRODUCTION: string;
  }
}
