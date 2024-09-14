// bun.d.ts
declare module "bun:sqlite" {
  export class Database {
    constructor(filename: string);
    run(query: string, ...params: any[]): void;
    query<T = any>(query: string, ...params: any[]): { all: () => T[] };
  }
}

declare module "bun" {
  interface Env {
    PORT: number;
  }
}
