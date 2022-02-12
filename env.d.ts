/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DIABLO3_APP_CLIENT_ID: string;
  readonly VITE_DIABLO3_APP_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
