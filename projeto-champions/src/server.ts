import createApp from "./app";

const server = createApp();

server.listen(process.env.PORT, () =>
  console.log(`Servidor rurnning at PORT: ${process.env.PORT} 🚀`)
);
