/** @type {import('next').NextConfig} */
const nextConfig = {};

//Antes era assim:
//module.exports = nextConfig

//Mudei pra essa forma pra mostrar que a primeira pág vai ser direcionada
//para a página de login
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        // destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};
