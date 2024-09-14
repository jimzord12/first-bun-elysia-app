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
