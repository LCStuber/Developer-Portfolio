// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/trocaDeTurnoIMT',
        destination: 'mailto:ana.serra@maua.br?subject=Solicitação%20Troca%20de%20Turno%20-%203ª%20Série%20-%20CIC%20-%20[NOME%20COMPLETO]%20-%20[RA]&body=Olá,%20Ana%20Serra.%20Espero%20que%20esteja%20bem.%0A%0AEu,%20aluno%20da%20terceira%20série%20de%20Ciência%20da%20Computação,%20venho%20por%20meio%20desta%20solicitar%20minha%20troca%20de%20turno%20com%20as%20seguintes%20informações:%0A%0ANome%20Completo:%20%0ARA:%20%0ATurma%20Atual:%20%0ATurma%20Desejada:%20%0AJustificativa%20para%20a%20solicitação%20da%20troca%20de%20TURNO:%20%0A%0AAtenciosamente,%0A%5BSEU%20NOME%5D',
        permanent: false,
      },
    ];
  },
};