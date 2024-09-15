git # Elysia with Bun runtime

## WSL App Location

```bash
\\wsl.localhost\Debian\home\jimzord-wsl\bun\app
```

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Development

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## Docker

Build Image:

```bash
docker build -t my-bun-elysia-app \\wsl$\Debian\home\jimzord-wsl\bun\app
```

Run Container:

```bash
docker run -p 3000:3000 my-bun-elysia-app
```

## Modifications

Do not forget to update or create the necessary [Types!](src/types/index.ts)

#### Modifying Tables

If you want to change the Table name and/or colums, you need to go to [src/sqlite/migration.ts](src/sqlite/migration.ts)

#### Modifying/Adding DB Actions

DB Actions are simple functions that perform a specific query to the DB. They are usually used in the main [index.ts file where Elysia Server](src/index.ts) is created.

To manage them go to: [src/sqlite/actions.ts](src/sqlite/actions.ts)

## Generating Secure Secret Token

Simply run this command:

```bash
bun src/utils/createSecret.ts
```

Then, copy and paste the generated token from the terminal to your .env.local file.
