export const WHATSAPP_PHONE = '5561999999999';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export interface Fare {
  id: string;
  label: string;
  price: string;
  unit: string;
  note: string;
  cta: string;
  message: string;
}

export interface Destination {
  id: string;
  slug: string;
  cidade: string;
  titulo: string;
  resumo: string;
  retorno: [string, string];
  fares: Fare[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'alto-paraiso',
    slug: 'Alto Paraíso',
    cidade: 'ALTO PARAÍSO',
    titulo: 'BRASÍLIA → ALTO PARAÍSO',
    resumo: 'Porta de entrada para diferentes experiências da Chapada.',
    retorno: ['07h', '12h'],
    fares: [
      {
        id: 'compartilhado',
        label: 'COMPARTILHADO',
        price: 'R$ 150',
        unit: 'por pessoa',
        note: 'Saídas regulares de Brasília a partir das 09h e 12h.',
        cta: 'RESERVAR COMPARTILHADO',
        message: 'Olá! Gostaria de consultar disponibilidade para transporte compartilhado Brasília → Alto Paraíso. Data: Horário: Passageiros:'
      },
      {
        id: 'privativo',
        label: 'PRIVATIVO — CARRO PEQUENO',
        price: 'R$ 600',
        unit: 'por veículo',
        note: 'Até 4 pessoas. Horários mediante consulta.',
        cta: 'RESERVAR PRIVATIVO',
        message: 'Olá! Gostaria de consultar transporte privativo Brasília → Alto Paraíso. Data: Horário: Passageiros:'
      },
      {
        id: 'caminhonete',
        label: 'CAMINHONETE',
        price: 'R$ 900',
        unit: 'por veículo',
        note: 'Até 4 pessoas. Horários mediante consulta.',
        cta: 'RESERVAR CAMINHONETE',
        message: 'Olá! Gostaria de consultar uma caminhonete Brasília → Alto Paraíso. Data: Horário: Passageiros:'
      }
    ]
  },
  {
    id: 'sao-jorge',
    slug: 'São Jorge',
    cidade: 'SÃO JORGE',
    titulo: 'BRASÍLIA → SÃO JORGE',
    resumo: 'Vila localizada na região do Parque Nacional da Chapada dos Veadeiros.',
    retorno: ['07h', '12h'],
    fares: [
      {
        id: 'compartilhado',
        label: 'COMPARTILHADO',
        price: 'R$ 200',
        unit: 'por pessoa',
        note: 'Saídas regulares de Brasília a partir das 09h e 12h.',
        cta: 'RESERVAR COMPARTILHADO',
        message: 'Olá! Gostaria de consultar disponibilidade para transporte compartilhado Brasília → São Jorge. Data: Horário: Passageiros:'
      },
      {
        id: 'privativo',
        label: 'PRIVATIVO — CARRO PEQUENO',
        price: 'R$ 800',
        unit: 'por veículo',
        note: 'Até 4 pessoas. Horários mediante consulta.',
        cta: 'RESERVAR PRIVATIVO',
        message: 'Olá! Gostaria de consultar transporte privativo Brasília → São Jorge. Data: Horário: Passageiros:'
      },
      {
        id: 'caminhonete',
        label: 'CAMINHONETE',
        price: 'R$ 1.000',
        unit: 'por veículo',
        note: 'Até 4 pessoas. Horários mediante consulta.',
        cta: 'RESERVAR CAMINHONETE',
        message: 'Olá! Gostaria de consultar uma caminhonete Brasília → São Jorge. Data: Horário: Passageiros:'
      }
    ]
  },
  {
    id: 'cavalcante',
    slug: 'Cavalcante',
    cidade: 'CAVALCANTE',
    titulo: 'BRASÍLIA → CAVALCANTE',
    resumo: 'Destino conhecido por suas paisagens, comunidades tradicionais e grandes cachoeiras.',
    retorno: ['06h', '12h'],
    fares: [
      {
        id: 'compartilhado',
        label: 'COMPARTILHADO',
        price: 'R$ 200',
        unit: 'por pessoa',
        note: 'Saídas regulares de Brasília a partir das 09h e 12h.',
        cta: 'RESERVAR COMPARTILHADO',
        message: 'Olá! Gostaria de consultar disponibilidade para transporte compartilhado Brasília → Cavalcante. Data: Horário: Passageiros:'
      },
      {
        id: 'privativo',
        label: 'PRIVATIVO — CARRO PEQUENO',
        price: 'R$ 900',
        unit: 'por veículo',
        note: 'Até 4 pessoas. Horários mediante consulta.',
        cta: 'RESERVAR PRIVATIVO',
        message: 'Olá! Gostaria de consultar transporte privativo Brasília → Cavalcante. Data: Horário: Passageiros:'
      },
      {
        id: 'caminhonete',
        label: 'CAMINHONETE',
        price: 'R$ 1.100',
        unit: 'por veículo',
        note: 'Até 4 pessoas. Horários mediante consulta.',
        cta: 'RESERVAR CAMINHONETE',
        message: 'Olá! Gostaria de consultar uma caminhonete Brasília → Cavalcante. Data: Horário: Passageiros:'
      }
    ]
  }
];

export const SPECIAL_DATES_NOTE =
  'Em datas especiais, como feriados, Carnaval, Natal, Ano Novo e períodos de grandes eventos na região, os valores podem sofrer alterações. Consulte nossa equipe para confirmar as tarifas e a disponibilidade para a data desejada.';

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Quais destinos a DESTINA atende?',
    a: 'Trabalhamos atualmente com os trechos Brasília → Alto Paraíso, Brasília → São Jorge e Brasília → Cavalcante.'
  },
  {
    q: 'O transporte compartilhado funciona como carona?',
    a: 'Não. É um serviço de transporte compartilhado organizado pela DESTINA, realizado por motoristas profissionais parceiros.'
  },
  {
    q: 'Quais são os horários?',
    a: 'As saídas regulares de Brasília são a partir das 09h e 12h. Os retornos começam a partir das 07h em Alto Paraíso e São Jorge, e a partir das 06h em Cavalcante, com opção também a partir das 12h.'
  },
  {
    q: 'Posso viajar em outro horário?',
    a: 'Sim. Para horários diferentes das saídas regulares, consulte as opções de transporte privativo.'
  },
  {
    q: 'Posso contratar um carro exclusivo?',
    a: 'Sim. Temos transporte privativo em carro pequeno para até 4 pessoas.'
  },
  {
    q: 'Vocês trabalham com caminhonete?',
    a: 'Sim. Temos opção de caminhonete para até 4 pessoas.'
  },
  {
    q: 'Vocês atendem grupos?',
    a: 'Sim. Trabalhamos com vans e ônibus executivo para grupos, empresas, eventos e operações personalizadas.'
  },
  {
    q: 'A reserva é confirmada automaticamente?',
    a: 'Não. Após sua solicitação pelo WhatsApp, nossa equipe consulta a disponibilidade e confirma a viagem com você.'
  },
  {
    q: 'Os preços podem mudar?',
    a: SPECIAL_DATES_NOTE
  },
  {
    q: 'Os valores são de ida e volta?',
    a: 'Os valores apresentados são referentes a cada trecho. Para o retorno, consulte a tarifa e disponibilidade do trecho desejado.'
  }
];

export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#a-chapada', label: 'A Chapada' },
  { href: '#destinos', label: 'Destinos' },
  { href: '#transportes', label: 'Transportes' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#faq', label: 'FAQ' }
];

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Gostaria de consultar disponibilidade de transporte Brasília → Chapada dos Veadeiros.';

export interface Attraction {
  nome: string;
  img: string;
  desc: string;
}

export const ATTRACTIONS: Attraction[] = [
  {
    nome: 'Vale da Lua',
    img: './assets/vale-da-lua-DI8FLlxp.jpg',
    desc: 'Rocha esculpida pelo rio São Miguel, com formas que parecem de outro planeta.'
  },
  {
    nome: 'Cachoeira Santa Bárbara',
    img: './assets/santa-barbara-q3_PN645.jpg',
    desc: 'Águas de um azul improvável entre paredões e vegetação fechada.'
  },
  {
    nome: 'Mirante da Janela',
    img: './assets/mirante-janela-DWBN6Ji1.jpg',
    desc: 'Um recorte na pedra que enquadra o vale e o horizonte da Chapada.'
  },
  {
    nome: 'Cataratas dos Couros',
    img: './assets/couros-DQ9Gw2-3.jpg',
    desc: 'Conjunto de quedas largas em meio ao Cerrado aberto.'
  },
  {
    nome: 'Cachoeira do Segredo',
    img: './assets/segredo-LRN69I0f.jpg',
    desc: 'Queda escondida em um cânion estreito, com poço profundo e sombra.'
  },
  {
    nome: 'Complexo Canjica',
    img: './assets/canjica-Ww7y9fix.jpg',
    desc: 'Sequência de quedas e piscinas naturais sobre rocha avermelhada.'
  }
];

export const WHY_DESTINA = [
  ['PONTUALIDADE', 'Horários organizados para você aproveitar melhor sua viagem.'],
  ['MOTORISTAS PROFISSIONAIS', 'Transporte realizado por profissionais parceiros.'],
  ['ATENDIMENTO 24H', 'Equipe disponível para ajudar antes e durante sua viagem.'],
  ['FLEXIBILIDADE', 'Compartilhado, privativo, caminhonetes, vans e ônibus executivo.'],
  ['CONFORTO', 'Uma forma mais organizada de chegar à Chapada.'],
  ['EXPERIÊNCIA', 'Conhecimento da região e dos principais destinos.']
];

export const FOUR_STEPS = [
  ['ESCOLHA O DESTINO', 'Alto Paraíso, São Jorge ou Cavalcante.'],
  ['ESCOLHA O TRANSPORTE', 'Compartilhado, privativo ou caminhonete.'],
  ['FALE COM A DESTINA', 'Informe data, horário e número de passageiros pelo WhatsApp.'],
  ['CONSULTAMOS E CONFIRMAMOS', 'Nossa equipe verifica a disponibilidade e confirma os detalhes da viagem.']
];

export const BOARDING_POINTS = [
  'Aeroporto de Brasília',
  'Rodoviária Interestadual',
  'Plano Piloto',
  'Regiões centrais de Brasília'
];
