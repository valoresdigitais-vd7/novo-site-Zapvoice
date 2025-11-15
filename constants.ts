import type { Product, Testimonial, NavLink } from './types';

export const SITE_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Blog', href: '/blog' }
];

export const LANDING_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'A Solução', href: '#problem-solution' },
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Público-Alvo', href: '#publico-alvo' },
  { name: 'Planos', href: '#planos' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: '💎 Plano Anual',
    price: '12x de R$ 29,99',
    features: [
      'Envio de áudios humanizados',
      'Simulação de gravando e digitando',
      'Mensagens automáticas e funis programados',
      'Acesso completo a todas as funcionalidades',
      'Atualizações automáticas',
      'Suporte via WhatsApp'
    ],
    isFeatured: true,
  },
  {
    id: 2,
    name: '💰 Plano Mensal',
    price: 'R$ 49,90/mês',
    features: [
      'Envio de áudios humanizados',
      'Mensagens e funis automáticos',
      'Chatbot básico e agendamento de follow-ups',
      'Suporte via WhatsApp'
    ],
  },
  {
    id: 3,
    name: '🎁 Teste Grátis 7 Dias',
    price: 'Grátis por 7 dias',
    features: [
      'Acesso total ao plano Pro',
      'Sem necessidade de cartão de crédito',
      'Teste todas as funcionalidades por 7 dias'
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'O ZapVoice revolucionou meu atendimento. Meus clientes acham que os áudios são gravados na hora!',
    author: 'Mariana Costa',
    role: 'Gestora de Tráfego',
    avatarUrl: 'https://picsum.photos/id/1011/100/100',
  },
  {
    quote: 'Uso o ZapVoice nas vendas e economizo horas todos os dias. Atendimento automatizado e totalmente humano.',
    author: 'Felipe Souza',
    role: 'Afiliado Profissional',
    avatarUrl: 'https://picsum.photos/id/1012/100/100',
  },
  {
    quote: 'A ferramenta é sensacional! Consegui aumentar meu volume de conversas sem robotizar meu atendimento.',
    author: 'Camila Ferreira',
    role: 'Empresária e Consultora de Vendas',
    avatarUrl: 'https://picsum.photos/id/1013/100/100',
  },
];

export const FAQ_DATA = [
  {
    question: 'Como funciona o ZapVoice?',
    answer: 'O ZapVoice é uma extensão do Chrome que se integra ao WhatsApp Web, adicionando um painel para automatizar mensagens, enviar áudios humanizados e gerenciar atendimentos de forma mais eficiente.'
  },
  {
    question: 'O teste grátis de 7 dias precisa de cartão?',
    answer: 'Não! O teste é 100% gratuito e não requer cartão de crédito. Você pode experimentar todos os recursos por 7 dias sem compromisso.'
  },
  {
    question: 'Posso usar o ZapVoice em várias contas?',
    answer: 'Cada assinatura é vinculada a um navegador/perfil de Chrome, mas você pode usar diferentes contas com planos adicionais.'
  },
  {
    question: 'O ZapVoice é seguro?',
    answer: 'Sim. O ZapVoice funciona de forma local no seu navegador e segue boas práticas de segurança, garantindo a proteção de suas informações e conversas.'
  },
  {
    question: 'O suporte é feito por onde?',
    answer: 'Nosso suporte é feito diretamente via WhatsApp, oferecendo atendimento rápido e humanizado para todos os assinantes.'
  },
];

export const FOOTER_LINKS = {
  company: {
    name: 'ZapVoice',
    description: 'Automatize seu WhatsApp sem perder a conexão humana.',
    cnpj: 'CNPJ: 00.000.000/0001-00',
    address: 'Atendimento 100% online • zp.valoresdigitais.com',
  },
  support: [
    { name: 'Suporte via WhatsApp', href: 'https://wa.me/5500000000000' },
    { name: 'Central de Ajuda', href: '#faq' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos-de-servico' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
  ],
  enterprise: [
    { name: 'Sobre o ZapVoice', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ],
};
