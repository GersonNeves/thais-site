// Todo o texto abaixo foi escrito pela Thais e migrado sem alterações
// do site original (reference/thaisFontanaPsi.html).

export const siteConfig = {
  // TODO: replace with the real production domain once it's registered.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://thaisfontanapsi.com.br",
  whatsappNumber: "5500000000000", // TODO: substituir pelo número real
  whatsappMessage:
    "Olá, gostaria de saber mais sobre as sessões de terapia",
  instagramUrl: "#", // TODO: substituir pela URL real
  linkedinUrl: "#", // TODO: substituir pela URL real
  crp: "CRP XX/XXXXX", // TODO: substituir pelo número real
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;

export const navLinks = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre Mim" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export const hero = {
  title:
    "Espaço seguro para a sua jornada de autoconhecimento e transformação.",
  subtitle:
    "Sou Thais Fontana, psicóloga clínica e escolar especializada em saúde mental, desenvolvimento humano, psicanálise e educação permanente.",
  cta: "Agendar uma Consulta",
};

export const especialidades = [
  {
    title: "Crianças",
    text: "Compreensão do processo de desenvolvimento físico e emocional com tecnicas lúdicas e linguagem adequada para cada faixa etária. Foco na elaboração de conflitos e orientação aos responsáveis.",
  },
  {
    title: "Adolescentes",
    text: "Acolhimento com escuta sensível e estratégias para lidar com demandas típicas da adolescência. Ênfase no desenvolvimento da autonomia e de relações mais saudáveis consigo e com os outros.",
  },
  {
    title: "Adultos",
    text: "Apoio psicológico para o enfrentamento de demandas de saúde mental, com técnicas e estratégias adequadas para o contexto de cada pessoa, constituindo um processo único e personalizado.",
  },
  {
    title: "Saúde da Mulher",
    text: "Acolhimento a mulheres vítimas de violência e relacionamentos abusivos, resgate da autoestima e estratégias de fortalecimento.",
  },
  {
    title: "Acompanhamento Familiar",
    text: "Suporte para famílias que buscam lidar com conflitos, crises ou transições. Um ambiente seguro de escuta para fortalecer os vínculos e promover relações mais saudáveis.",
  },
  {
    title: "Terapia de Casal",
    text: "Espaço direcionado à compreensão da dinâmica do casal, identificação de padrões, alinhamento de espectativas e aprimoramento da comunicação e da convivência.",
  },
];

export const sobre = {
  heading: "Quem eu sou?",
  paragraphs: [
    "Olá! Meu nome é Thais.",
    "Acredito que o cuidado em psicoterapia acontece por meio de uma escuta sensível, ética e livre de julgamentos, possibilitando um espaço seguro para que a sua verdadeira essência ganhe voz.",
    "Atendo crianças e adolescentes, oferecendo suporte clínico e escolar em questões emocionais e do desenvolvimento.",
    "Com adultos, ​atuo na clínica em demandas complexas de saúde mental, como transtornos de humor, luto, vícios, relacionamentos abusivos e demais  questões psicológicas. ",
    "A fim de oferecer um atendimento de qualidade, tenho especialização em Saúde Mental e Desenvolvimento Humano (PUCPR) e em Educação Permanente em Saúde e Educação (FIOCRUZ). Atualmente, aprofundo minha prática clínica com a especialização em Psicanálise (PUCRS)."
  ]
};

export const alemDaClinica = {
  heading: "Quem é a Thais além da clínica?",
  paragraphs: [
    "Antes de ser psicóloga, sou humana. A clínica exige muita dedicação, mas também é nutrida pela vida lá fora. Por isso, quando não estou trabalhando ou estudando, busco atividades que me conectam com o momento presente e com a minha essência.",
    "Gosto muito de estar em contato com a natureza, seja cuidando do meu jardim ou na companhia dos meus pets, que sempre trazem muita leveza e alegria para os meus dias. Além disso, encontro um grande respiro na arte, dedicando um tempo para desenhar e pintar telas. Acredito que, ao nutrir espaços de criatividade e autocuidado na minha rotina, me torno mais preparada e apta para também cuidar do outro.",
  ],
  quote: {
    text: "Sentir-se real é mais do que existir; é encontrar uma maneira de existir como si mesmo.",
    author: "Donald W. Winnicott",
  },
};

export const psicoterapia = {
  heading: "Como funciona o processo terapêutico comigo",
  text: "A terapia não é um espaço para conselhos ou fórmulas prontas. Na minha prática clínica, o caminho é único para cada paciente. Meu trabalho é fundamentado na Psicanálise, uma abordagem que busca acolher você em sua totalidade e entender as raízes daquilo que lhe causa sofrimento, bem como novas maneiras de se colocar no mundo.",
};

export const modalidades = [
  {
    icon: "video",
    title: "Atendimento On-line",
    text: "A teleconsulta de Psicologia é realizada à distância por chamada de vídeo. É uma prática regulamentada, segura e funciona com a mesma qualidade e sigilo do atendimento presencial. Ideal para aliar o cuidado com a saúde mental com a comodidade de estar onde se sentir bem.",
  },
  {
    icon: "heart-pulse",
    title: "Encaixe prioritário",
    text: "Suporte em momentos de crise (ansiedade, ataques de pânico, rebaixamentos de humor e adversidades do dia a dia) para oferecer acolhimento, amenizar o sofrimento e levantar possibilidades de enfrentamento.",
  },
  {
    icon: "users",
    title: "Atendimento Presencial",
    text: "Sessões realizadas em um consultório acolhedor e seguro, projetado para proporcionar conforto e privacidade. Ideal para quem prefere o contato direto e o ambiente físico dedicado ao cuidado.",
  },
] as const;

export const faq = [
  {
    question: "O que é a Psicanálise na prática?",
    answer: [
      "Nós somos seres complexos. Com frequência, nos vemos repetindo padrões, escolhas e vivenciando angústias sem entender exatamente o motivo. A psicanálise nos ajuda a lançar luz sobre o nosso inconsciente.",
      "O nosso foco não será apenas silenciar um sintoma que incomoda hoje, mas investigar a origem dele, entender o que ele está tentando comunicar e, a partir disso, transformar a maneira como você lida com as próprias emoções e com os conflitos do dia a dia.",
    ],
  },
  {
    question: "Como acontecem as nossas sessões?",
    answer: [
      "Você terá total liberdade para falar sobre o que vier à mente, no seu ritmo e da sua maneira. Podemos conversar sobre seus sentimentos, seus sonhos, situações cotidianas, medos, alegrias ou lembranças do passado.",
      "Não existe um roteiro pré-definido. Apesar disso, não se preocupe em saber exatamente o que dizer. Vamos construir o espaço juntos, conforme fizer mais sentido para você.",
      "O processo de terapia é uma construção. Acontece em sessões semanais de 50 minutos, em que iremos, por meio da elaboração de questões internas, promover a quebra de ciclos repetitivos e abrir caminho para uma vida com mais estabilidade, autonomia e bem-estar.",
    ],
  },
  {
    question: "Qual é o papel da psicóloga nesse processo?",
    answer: [
      "Além da escuta sensível, ética e qualificada, meu papel é auxiliar para que você identifique suas questões, intervindo e pontuando algumas percepções e orientações conforme necessário. Juntos, ligamos os pontos da sua história, permitindo a elaboração das demandas, sejam elas mais profundas ou corriqueiras, mas que estejam pesando na sua rotina.",
    ],
  },
  {
    question: "Como saber se a terapia é para você",
    answer: [
      "A terapia é um espaço seguro para qualquer pessoa que busque autoconhecimento, queira lidar melhor com suas emoções ou esteja passando por momentos de ansiedade, luto, transições de vida ou dificuldades nos relacionamentos. Não é preciso estar em crise para iniciar.",
    ],
  },
  {
    question: "O que esperar da primeira sessão?",
    answer: [
      "Na primeira sessão, o foco é estabelecer um ambiente tranquilo para você compartilhar suas preocupações e expectativas. Buscarei entender seu contexto de vida, sem roteiros rígidos. Tudo é mantido em absoluto sigilo.",
    ],
  },
  {
    question: "A terapia online funciona?",
    answer: [
      "Sim! A psicoterapia online tem a sua validade comprovada e é regulamentada pelo Conselho Federal de Psicologia (CFP). O vínculo de confiança, o acolhimento e a elaboração das suas questões acontecem da mesma forma através da tela. O espaço seguro e livre de julgamentos que construímos juntos transcende o ambiente físico do consultório.",
    ],
  },
  {
    question: "Para quem a terapia online é indicada?",
    answer: [
      "Os atendimentos online são realizados com adolescentes a partir de 12 anos e adultos.",
      "A modalidade online é muito indicada para aqueles que têm uma rotina intensa, moram longe, viajam com frequência, possuem limitações de mobilidade ou, simplesmente, se identificam mais com essa forma de atendimento.",
      "Além de manter a mesma qualidade clínica e ética, o atendimento online permite que você realize a sessão no conforto e na segurança do seu próprio espaço. Isso traz mais flexibilidade para a sua rotina, eliminando o estresse e o tempo do deslocamento.",
      "Para que a nossa sessão aconteça da melhor forma, você precisará apenas de uma boa conexão de internet e de um ambiente onde se sinta à vontade e tenha privacidade para falar sem interrupções.",
    ],
  },
  {
    question: "Qual a frequência das sessões e duração do tratamento?",
    answer: [
      "Geralmente, as sessões ocorrem uma vez por semana e duram 50 minutos. A duração total do tratamento varia de acordo com as necessidades e objetivos de cada pessoa, sendo um processo construído em conjunto.",
    ],
  },
  {
    question: "Qual a diferença entre psicólogo e psiquiatra?",
    answer: [
      "O psicólogo foca na psicoterapia, tratando as questões emocionais e comportamentais através da fala e de intervenções clínicas. O psiquiatra é um médico que avalia a necessidade de intervenção medicamentosa. Em muitos casos, os dois profissionais trabalham juntos.",
    ],
  },
  {
    question: "Como faço para agendar?",
    answer: [
      "Entre em contato pelo número ou clique no botão de WhatsApp para agendar uma sessão!",
    ],
  },
];

export const footer = {
  heading: "Vamos conversar?",
  text: "Se você se identificou e sente que é o momento de dar esse passo, entre em contato. Estou aqui para tirar suas dúvidas e lhe acompanhar nesta jornada.",
  cta: "Agendar via WhatsApp",
  legal: `Thais Fontana - Psicóloga Clínica | ${siteConfig.crp}`,
};
