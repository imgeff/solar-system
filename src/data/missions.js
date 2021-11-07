const USA = 'Estados Unidos';
const URSS = 'URSS';

const Missions = [
  {
    name: 'Apollo 11',
    year: '1960',
    country: USA,
    destination: 'Lua',
    description: `Apollo 11 foi um voo espacial tripulado norte-americano
     responsável pelo primeiro pouso na Lua. 
     Os astronautas Neil Armstrong e Buzz Aldrin alunissaram 
     o módulo lunar Eagle em 20 de julho de 1969 às 20h17min UTC.`,
  },
  {
    name: 'Voyager 1',
    year: '1977',
    country: USA,
    destination: 'Espaço interestelar',
    description: `Voyager 1 é uma sonda espacial norte-americana 
    lançada ao espaço em 5 de setembro de 1977
para estudar Júpiter e Saturno prosseguindo e posteriormente para o espaço interestelar.`,
  },
  {
    name: 'Mars Pathfinder',
    year: '1996',
    country: USA,
    destination: 'Marte',
    description: `Mars Pathfinder é uma sonda veicular robótica construída pela NASA
e que pousou com uma base fixa
levando um rover de exploração para o planeta Marte, em 1997. `,
  },
  {
    name: 'Estação Internacional Espacial',
    year: '1998',
    country: 'Estados Unidos e Rússia',
    destination: 'Órbita terrestre',
    description: `Estação Espacial Internacional é um laboratório espacial
completamente concluído, cuja montagem em órbita começou em 1998 e terminou
oficialmente em 8 de julho de 2011 na missão STS-135, com o ônibus espacial Atlantis. `,
  },
  {
    name: 'Kepler',
    year: '2009',
    country: USA,
    destination: 'Espaço interestelar',
    description: `A sonda Kepler consistiu em um observatório espacial projetado pela NASA
que procurou por planetas com características habitáveis 
fora do Sistema Solar por nove anos e meio.`,
  },
  {
    name: 'Mariner 2',
    year: '1962',
    country: USA,
    destination: 'Vênus',
    description: `A Mariner 2, foi uma sonda espacial para Vênus,
ela foi a primeira sonda espacial robótica a ter sucesso em atingir outro planeta.
 A primeira espaçonave do Programa Mariner da NASA bem-sucedida. 
Ela foi lançada de Cabo Canaveral em 27 de agosto de 1962,
 e passou a "apenas" 34 773 km de Vênus em 14 de dezembro de 1962.`,
  },
  {
    name: 'Venera 4',
    year: '1967',
    country: URSS,
    destination: 'Vênus',
    description: `Venera 4 foi uma sonda espacial soviética do Programa Vênera.
A Venera 4 foi lançada de um Sputnik Tyazheliy em direção ao planeta Vénus
 com a missão de estudar a atmosfera local.`,
  },
  {
    name: 'Mariner 5',
    year: '1967',
    country: USA,
    destination: 'Vênus',
    description: `A Mariner 5 foi uma nave espacial norte-americana que fez parte
do Programa Mariner que transportou experimentos complementares para estudos da atmosfera 
de Vênus.`,
  },
  {
    name: 'Mariner 10',
    year: '1975',
    country: USA,
    destination: 'Vênus',
    description: `Mariner 10 foi uma sonda planetária, integrada no Programa Mariner,
desenvolvido pelos Estados Unidos durante as décadas de 1960 e 1970. Foi a primeira sonda
a utilizar a técnica de aceleração gravítica de um corpo celeste para auxílio à navegação.
 Foi também a primeira sonda a visitar dois planetas distintos.`,
  },
  {
    name: 'Venera 16',
    year: '1983',
    country: URSS,
    destination: 'Vênus',
    description: `Venera 16 foi uma espaçonave enviada a Vênus pela União Soviética.
Este orbitador desenroscado era para mapear a superfície de Vênus 
usando sistemas de imagem de alta resolução.A espaçonave era idêntica à Venera 15
 e baseada em modificações nas primeiras sondas espaciais da Venera.`,
  },
  {
    name: 'MESSENGER',
    year: '2004',
    country: USA,
    destination: 'Mercúrio',
    description: `MESSENGER foi a missão da sonda espacial não-tripulada da NASA,
gerenciada pelo Jet Propulsion Laboratory - JPL, destinada a estudar as características
 e o ambiente do planeta Mercúrio. Especificamente, os objetivos científicos da missão
foram os de caracterizar a composição química da superfície, a sua história geológica,
 a natureza do seu campo magnético, o tamanho e o estado do núcleo planetário, pesquisar
 seus polos e a natureza da sua exosfera e da sua magnetosfera, numa missão orbital de 
 inicialmente um ano terrestre de duração que transformou-se em quatro anos.`,
  },
  {
    name: 'Genesis',
    year: '2001',
    country: USA,
    destination: 'Terra',
    description: `O Genesis era uma sonda de retorno de amostra da NASA 
que coletou uma amostra de partículas do vento solar e as devolveu à Terra para análise.
 Foi a primeira missão de retorno de amostra da NASA a devolver material desde
  o programa Apollo , e a primeira a devolver material de além da órbita lunar .
Genesis foi lançado em 8 de agosto de 2001, e a cápsula de retorno de amostra caiu em Utah
em 8 de setembro de 2004, depois que uma falha de projeto impediu o lançamento 
de seu pára-quedas drogue. O acidente contaminou muitos dos coletores de amostras.
 Embora a maioria tenha sido danificada, 
 alguns dos coletores foram recuperados com sucesso.`,
  },
  {
    name: '2001 Mars Odyssey',
    year: '2001',
    country: USA,
    destination: 'Marte',
    description: `2001 Mars Odyssey é uma sonda espacial americana
destinada a orbitar e estudar o planeta Marte. Lançada em 7 de abril de 2001 
a bordo de um Delta II a partir da Estação da Força Aérea de Cabo Canaveral, 
a sonda alcançou a órbita de Marte em 24 de outubro do mesmo ano. `,
  },
  {
    name: 'Mars Surveyor 98 Lander',
    year: '1999',
    country: USA,
    destination: 'Marte',
    description: `O programa Mars Surveyor 1998 consistia de duas espaçonaves
lançadas separadamente, o Mars Climate Orbiter e o Mars Polar Lander; a bordo
 da espaçonave Mars Polar Lander estavam duas sondas Deep Space 2 
 capazes de perfurar a superfície do planeta.`,
  },
  {
    name: 'Nozomi (Planeta B)',
    year: '1998',
    country: 'Japão',
    destination: 'Marte',
    description: `Nozomi é uma nave espacial lançada e administrada pela 
  Japan Aerospace Exploration Agency – JAXA, com a finalidade de estudar o planeta Marte,
em particular a sua alta atmosfera. Para o programa espacial japonês 
a sonda era inicialmente chamada de Planeta-B.`,
  },
  {
    name: 'Fobos 1',
    year: '1988',
    country: URSS,
    destination: 'Marte',
    description: `O Phobos 1 era uma sonda espacial soviética desaparafusada
     do Programa Phobos, lançada a partir da instalação de lançamento de Baikonour
      em 7 de julho de 1988. Sua missão pretendida era explorar Marte
       e suas luas Phobos e Deimos.`,
  },
  {
    name: 'Fobos 2',
    year: '1988',
    country: URSS,
    destination: 'Marte',
    description: `Phobos 2 foi a última sonda espacial projetada pela União Soviética.
     Foi projetado para explorar as luas de Marte, Phobos e Deimos. Foi lançado
      em 12 de julho de 1988 e entrou em órbita em 29 de janeiro de 1989.`,
  },
  {
    name: 'Galileo',
    year: '1989',
    country: USA,
    destination: 'Júpiter',
    description: `Galileo foi uma sonda espacial robótica americana que
   estudou o planeta Júpiter e suas luas , bem como vários outros corpos do Sistema Solar.
    Nomeado em homenagem ao astrônomo italiano Galileo Galilei , consistia em um orbitador
  e uma sonda de entrada. Foi entregue à órbita da Terra em 18 de outubro de 1989 
  pelo Ônibus Espacial Atlantis . O Galileo chegou a Júpiter em 7 de dezembro de 1995,
   depois de sobrevoar Vênus e a Terra com auxílio gravitacional ,
    e se tornou a primeira espaçonave a orbitar Júpiter.`,
  },
  {
    name: 'Cassini/Huygens',
    year: '1997',
    country: 'Estados Unidos e Europa',
    destination: 'Saturno',
    description: `Cassini-Huygens foi uma missão espacial não-tripulada enviada em missão
     ao planeta Saturno e seu sistema de luas.
    Um projeto conjunto da NASA, ESA e ASI, ela consistia de dois elementos principais,
  o orbitador Cassini e a sonda Huygens.Lançada ao espaço em 15 de outubro de 1997,
   ela entrou em órbita de Saturno em 1 de julho de 2004 e continuou em operação
  até 15 de setembro de 2017, estudando o planeta, seus satélites naturais, a heliosfera e
  testando a Teoria da Relatividade. Entre as muitas descobertas da missão estão ambientes
  potencialmente habitáveis nas luas de Saturno, 
  incluindo um oceano de subsuperfície de água em Enceladus.`,
  },
  {
    name: 'Mariner 9',
    year: '1971',
    country: 'Estados Unidos',
    destination: 'Marte',
    description: `Mariner 9 foi uma sonda espacial do Programa Mariner, utilizada para a 
    exploração do planeta Marte.
    O lançamento foi realizado pela NASA em 30 de Maio de 1971.
  Esta sonda entrou na órbita (1 390 x 17 140 km) de Marte em 13 de Novembro do mesmo ano,
  após 167 dias de viagem. A sonda Mariner 9 tornou-se o primeiro satélite artificial 
  Norte americano a orbitar um corpo celeste que não fosse a Lua. Como resultado, a missão
  enviou 7 329 fotos que permitiram a elaboração do primeiro mapa global de Marte.
  No momento em que a sonda chegou a Marte, estava acontecendo uma tempestade de areia e,
  aproveitando a ocasião, foram coletados dados sobre este evento. Esta missão descobriu
   canais, vulcões e outras estruturas na superfície de Marte.`,
  },
];

// Missions.sort((a, b) => b.year - a.year);

export default Missions;
