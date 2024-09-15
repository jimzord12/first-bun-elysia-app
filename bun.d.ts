// bun.d.ts

// This is so that TypeScript doesn not complain
declare module "bun:sqlite" {
  export class Database {
    constructor(filename: string);
    run(query: string, ...params: any[]): void;
    query<T = any>(query: string, ...params: any[]): { all: () => T[] };
  }
}

// This is for type safety when using env variables
declare module "bun" {
  interface Env {
    PORT: number;
    PAT: string;
    THE_SECRET: string;
  }
}
