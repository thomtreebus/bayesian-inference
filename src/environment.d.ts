declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_CONNECTION_URL: string;
      TEST_DB_CONNECTION_URL: string;
    }
  }
}

export {};
