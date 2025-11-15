import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { CheckCircleIcon, ZapIcon, ShieldIcon } from '../components/icons';

// --- SHARED COMPONENTS ---

// InlineCheckoutForm Component
interface InlineCheckoutFormProps {
    productName: string;
}
const InlineCheckoutForm: React.FC<InlineCheckoutFormProps> = ({ productName }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        await new Promise(resolve => setTimeout(resolve, 1500));

        if (email && email.includes('@')) {
            setStatus('success');
            setMessage(`Obrigado! Em breve entraremos em contato para finalizar sua compra do ${productName}.`);
        } else {
            setStatus('error');
            setMessage('Por favor, insira um email válido.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email"
                    required
                    className="flex-grow px-4 py-3 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Enviando...' : 'Teste Grátis Agora'}
                </button>
            </div>
            {message && (
                <p className={`mt-3 text-sm ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {message}
                </p>
            )}
            <p className="mt-2 text-xs text-neutral-500">7 dias de experimentação sem compromisso</p>
        </form>
    );
};

// --- SECTIONS ---

const HeroSection: React.FC = () => (
    <section className="py-20 md:py-32 text-center bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white">
                Automatize seu WhatsApp <br /> sem perder a conexão humana
            </h1>
            <p className="mt-5 text-lg md:text-xl text-neutral-600 dark:text-neutral-300">
                Dispare áudios humanizados e funis inteligentes que transformam seu atendimento em uma experiência pessoal e escalável.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                <InlineCheckoutForm productName="ZapVoice" />
                <Link to="/video" className="text-green-600 font-medium hover:underline">
                    Veja a Demonstração
                </Link>
            </div>
            <div className="mt-10 text-neutral-500 dark:text-neutral-400 text-sm">
                <p>💼 +500 empresas atendidas • 💬 98% de satisfação • ⚙️ Automatize até 70% das interações</p>
            </div>
        </div>
    </section>
);

const SocialProofSection: React.FC = () => (
    <section className="py-16 bg-white dark:bg-neutral-800 text-center">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
                <span>🧩 Extensão Oficial do Chrome</span>
                <span>🏆 Certificado de Inovação</span>
                <span>💬 Destaque no TechNews</span>
                <span>🌟 Prêmio Humanização Digital</span>
            </div>
            <div className="mt-10 max-w-3xl mx-auto">
                <p className="italic text-neutral-700 dark:text-neutral-300 text-lg">
                    "O ZapVoice revolucionou nossa comunicação – nossos clientes agora se sentem realmente atendidos, e nossa taxa de conversão disparou em poucas semanas."
                </p>
                <p className="mt-3 font-semibold">— Carlos Almeida, Gerente de Vendas</p>
                <p className="text-sm text-neutral-500">+35% de aumento nas conversões</p>
            </div>
        </div>
    </section>
);

const CoreBenefitsSection: React.FC = () => {
    const benefits = [
        {
            icon: '🎤',
            title: 'Áudios com Toque Humano',
            description: 'Envie mensagens pré-gravadas que simulam gravação ao vivo, assegurando proximidade e autenticidade na comunicação.',
            cta: 'Saiba como funciona',
        },
        {
            icon: '🔄',
            title: 'Funis Inteligentes Automatizados',
            description: 'Configure sequências de mensagens com gatilhos automáticos que garantem respostas ágeis no momento certo.',
            cta: 'Ver os funis',
        },
        {
            icon: '⚡',
            title: 'Integração Simplificada',
            description: 'Instale a extensão do Chrome em poucos cliques e comece a personalizar seu atendimento sem complicações.',
            cta: 'Veja a instalação',
        },
    ];
    return (
        <section className="py-20 bg-neutral-200 dark:bg-neutral-800">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">Benefícios</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {benefits.map(b => (
                        <div key={b.title} className="p-6 rounded-lg bg-white dark:bg-neutral-900 shadow-lg">
                            <div className="text-4xl mb-4">{b.icon}</div>
                            <h3 className="text-xl font-semibold">{b.title}</h3>
                            <p className="mt-2 text-neutral-600 dark:text-neutral-400">{b.description}</p>
                            <Link to="/detalhes" className="mt-4 inline-block text-primary font-semibold hover:underline">
                                {b.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowItWorksSection: React.FC = () => (
    <section className="py-20 bg-white dark:bg-neutral-900 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10">Como Escalar Seu Atendimento em 3 Passos</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-2">1️⃣ Adicione ao Chrome</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">Baixe e instale a extensão oficial do ZapVoice com apenas um clique.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">2️⃣ Configure Funis & Mensagens</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">Personalize áudios, ative gatilhos e programe follow-ups.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">3️⃣ Envie e Monitore</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">Acompanhe resultados e otimize seu atendimento em tempo real.</p>
                </div>
            </div>
            <p className="mt-10 font-semibold text-primary">Transforme seu atendimento com eficiência e humanização.</p>
        </div>
    </section>
);

const MidCTASection: React.FC = () => (
    <section id="mid-cta" className="py-16 bg-green-500 text-center text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold">Pronto para transformar seu atendimento?</h2>
            <p className="mt-3">Já imaginou seu WhatsApp trabalhando por você?</p>
            <Link to="/teste" className="mt-6 inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-md hover:bg-neutral-100 transition-transform transform hover:scale-105">
                Quero Testar
            </Link>
            <p className="mt-3 text-sm">Experimente 7 dias grátis – sem necessidade de cartão</p>
        </div>
    </section>
);

const ComparisonSection: React.FC = () => (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-900 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-10">Por que o ZapVoice é diferente?</h2>
            <table className="w-full text-left border-collapse border border-neutral-300 dark:border-neutral-700">
                <tbody>
                    <tr className="border-b border-neutral-300 dark:border-neutral-700">
                        <td className="p-3">❌ Mensagens automatizadas frias</td>
                        <td className="p-3">✅ Áudios humanizados sem etiqueta “encaminhado”</td>
                    </tr>
                    <tr className="border-b border-neutral-300 dark:border-neutral-700">
                        <td className="p-3">❌ Falta de personalização</td>
                        <td className="p-3">✅ Funis inteligentes com personalização avançada</td>
                    </tr>
                    <tr>
                        <td className="p-3">❌ Integração complexa</td>
                        <td className="p-3">✅ Instalação simples via extensão do Chrome</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
);

const TestimonialsGridSection: React.FC = () => (
    <section id="testimonials" className="py-20 bg-white dark:bg-neutral-800 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10">O que nossos clientes dizem</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { q: 'Conseguimos iniciar negociações logo nas primeiras horas de uso. A agilidade é surpreendente!', a: '— Fernanda Souza, SDR' },
                    { q: 'Reduzimos o tempo de resposta e nossa taxa de fechamento aumentou em 30%.', a: '— Ricardo Lima, Gerente de Vendas' },
                    { q: 'Eu achava que a automatização comprometia a proximidade com o cliente. Me provou o contrário!', a: '— Mariana Silva, Consultora de Vendas' },
                    { q: 'Eu tinha receio de parecer robótica, mas os áudios humanizados conquistaram meu público.', a: '— João Pereira, Infoprodutor' },
                    { q: 'Transformou totalmente nossa estratégia de atendimento, gerando crescimento de 50%.', a: '— Luana Martins, Gerente Comercial' },
                    { q: 'Escalamos atendimento sem perder a essência humana.', a: '— Gustavo Andrade, CEO' },
                ].map((t, i) => (
                    <div key={i} className="p-6 rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow">
                        <p className="text-yellow-500 mb-2">★★★★★</p>
                        <p className="italic text-neutral-700 dark:text-neutral-300">{t.q}</p>
                        <p className="mt-3 text-sm text-neutral-500">{t.a}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FAQSection: React.FC = () => {
    const faqs = [
        {
            q: 'O ZapVoice funciona em todos os navegadores?',
            a: 'A solução foi desenvolvida especificamente como extensão para o Google Chrome, garantindo máxima compatibilidade e performance.',
        },
        {
            q: 'Como os áudios se tornam mais humanizados?',
            a: 'Os áudios são previamente gravados e enviados simulando “gravando áudio…”, gerando uma experiência autêntica.',
        },
        {
            q: 'Preciso de conhecimentos técnicos para instalar?',
            a: 'Não! A instalação é simples e sem configurações complicadas.',
        },
        {
            q: 'E se eu quiser cancelar a assinatura?',
            a: 'Você pode cancelar a qualquer momento, direto na plataforma Eduzz.',
        },
        {
            q: 'Existe suporte pós-instalação?',
            a: 'Sim, suporte disponível via WhatsApp sempre que necessário.',
        },
    ];
    return (
        <section className="py-20 bg-neutral-100 dark:bg-neutral-900 text-center">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold mb-10">Dúvidas Frequentes</h2>
                <div className="space-y-6 text-left">
                    {faqs.map((f, i) => (
                        <div key={i}>
                            <h3 className="font-semibold">{f.q}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalCTASection: React.FC = () => (
    <section id="cta" className="py-20 bg-green-600 text-center text-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold">Não perca mais vendas – transforme seu atendimento agora!</h2>
            <p className="mt-2 text-lg text-green-100">Agilize e humanize suas interações no WhatsApp com o ZapVoice.</p>
            <Link to="/assinatura" className="mt-8 inline-block bg-white text-green-600 font-bold py-4 px-10 rounded-md transition-transform transform hover:scale-105 shadow-lg">
                Assine Já →
            </Link>
            <div className="mt-5 text-sm text-green-100">
                <p>✅ Garantia de satisfação • 💬 Suporte via WhatsApp • 🌐 Comunidade ativa</p>
            </div>
        </div>
    </section>
);

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <CoreBenefitsSection />
      <HowItWorksSection />
      <MidCTASection />
      <ComparisonSection />
      <TestimonialsGridSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};

export default HomePage;