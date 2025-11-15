
import React, { useState, useRef } from 'react';
import type { Product, Testimonial } from '../types';
import { CheckCircleIcon, ZapIcon, ShieldIcon, ChevronDownIcon } from '../components/icons';

// --- SHARED COMPONENTS ---

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
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (email && email.includes('@')) {
            setStatus('success');
            setMessage(`Obrigado! Em breve entraremos em contato sobre ${productName}.`);
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
                    className="flex-grow px-4 py-3 rounded-md bg-white border border-neutral-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 disabled:opacity-50"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Enviando...' : 'Experimente Agora'}
                </button>
            </div>
            {message && (
                <p className={`mt-3 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                </p>
            )}
        </form>
    );
};

// --- SEÇÃO 1: HERO SECTION ---

const HeroSection: React.FC = () => (
    <section id="hero" className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-5xl font-extrabold text-neutral-900">
                Automatize seu WhatsApp sem perder a conexão humana
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
                Envie áudios que simulam gravação ao vivo e personalize cada atendimento, escalando suas vendas.
            </p>
            <div className="mt-6">
                <InlineCheckoutForm productName="ZapVoice" />
                <p className="mt-2 text-sm text-neutral-500">7 dias grátis, sem compromisso</p>
                <div className="mt-4 text-base text-neutral-700 flex justify-center gap-6">
                    <span>🚀 +1.500 usuários ativos</span>
                    <span>💬 92% de satisfação</span>
                    <span>📈 +40% nas vendas</span>
                </div>
                <a
                    href="https://youtu.be/_xiYTqNZiI0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 text-green-600 font-semibold underline hover:text-green-700"
                >
                    Veja a Demo
                </a>
            </div>
        </div>
    </section>
);

// --- SEÇÃO 2: SOCIAL PROOF ---

const SocialProofSection: React.FC = () => (
    <section id="social-proof" className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="flex flex-wrap justify-center gap-8 mb-8">
                <span className="text-xl font-bold text-neutral-400">TechStart</span>
                <span className="text-xl font-bold text-neutral-400">VendaMais</span>
                <span className="text-xl font-bold text-neutral-400">TechNews</span>
                <span className="text-xl font-bold text-neutral-400">Atende Inteligentemente</span>
            </div>
            <blockquote className="max-w-2xl mx-auto text-lg italic text-neutral-700">
                "Com o ZapVoice, nosso atendimento se transformou: a naturalidade dos áudios humanizados elevou nossa conversão em 40% e aproximou clientes de nossa marca."
            </blockquote>
            <p className="mt-4 font-semibold text-neutral-700">— João Silva, CEO da XYZ</p>
        </div>
    </section>
);

// --- SEÇÃO 3: PROPOSTA DE VALOR ---

const CoreBenefitsSection: React.FC = () => (
    <section id="benefits" className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">Benefícios Principais</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-neutral-100 p-6 rounded-lg text-center">
                    <div className="text-5xl mb-4">🎤</div>
                    <h3 className="font-semibold text-lg mb-2">Áudios que Humanizam Mensagens</h3>
                    <p className="text-neutral-600 mb-4">
                        Grave mensagens que simulam “gravando áudio...” para tornar cada atendimento pessoal e genuíno.
                    </p>
                    <a href="#" className="text-green-600 font-medium hover:underline">
                        Saiba mais
                    </a>
                </div>
                <div className="bg-neutral-100 p-6 rounded-lg text-center">
                    <div className="text-5xl mb-4">⏱️</div>
                    <h3 className="font-semibold text-lg mb-2">Automatize sem Frieza</h3>
                    <p className="text-neutral-600 mb-4">
                        Configure funis e respostas automáticas que mantêm o toque pessoal, provando que a automação pode ser calorosa.
                    </p>
                    <a href="#" className="text-green-600 font-medium hover:underline">
                        Explorar Funcionalidades
                    </a>
                </div>
                <div className="bg-neutral-100 p-6 rounded-lg text-center">
                    <div className="text-5xl mb-4">🔌</div>
                    <h3 className="font-semibold text-lg mb-2">Instalação Rápida e Simples</h3>
                    <p className="text-neutral-600 mb-4">
                        Integre o ZapVoice diretamente ao seu Chrome e WhatsApp, sem complicações técnicas e com atualizações automáticas.
                    </p>
                    <a href="#" className="text-green-600 font-medium hover:underline">
                        Ver Demonstração
                    </a>
                </div>
            </div>
        </div>
    </section>
);

// --- SEÇÃO 4: COMO FUNCIONA ---

const MethodSection: React.FC = () => (
    <section id="how-it-works" className="py-20 bg-neutral-200">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-bold mb-12">Como Escalar Vendas em 3 Passos</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg">
                    <div className="text-4xl mb-3">⬇️</div>
                    <h3 className="font-semibold mb-2">Instale a Extensão</h3>
                    <p>Adicione o ZapVoice ao seu Google Chrome e conecte-o ao WhatsApp Web de forma instantânea.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                    <div className="text-4xl mb-3">⚙️</div>
                    <h3 className="font-semibold mb-2">Configure seus Áudios</h3>
                    <p>Personalize mensagens e defina os áudios que serão enviados com a simulação de gravação.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                    <div className="text-4xl mb-3">📊</div>
                    <h3 className="font-semibold mb-2">Automatize e Venda</h3>
                    <p>Ative funis automáticos e acompanhe resultados em tempo real, elevando sua produtividade.</p>
                </div>
            </div>
            <h3 className="mt-12 text-2xl font-bold text-green-600">Venda mais com autenticidade</h3>
        </div>
    </section>
);

// --- SEÇÃO 5: CONTEÚDOS E AUTORIDADE ---

const ResourcesSection: React.FC = () => (
    <section id="resources" className="py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-bold mb-3">Recursos Exclusivos para Potencializar seu Atendimento</h2>
            <p className="text-neutral-600 mb-12">Materiais gratuitos para transformar sua comunicação no WhatsApp</p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="border rounded-lg p-6">
                    <h3 className="font-semibold mb-2">E-book: Estratégias de Venda no WhatsApp</h3>
                    <p className="text-neutral-600 mb-4">Descubra táticas práticas para impulsionar suas conversões.</p>
                    <a href="#" className="text-green-600 font-bold hover:underline">Baixar grátis</a>
                </div>
                <div className="border rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Checklist: Automatize com Humanização</h3>
                    <p className="text-neutral-600 mb-4">Garanta uma comunicação autêntica sem perder a eficiência.</p>
                    <a href="#" className="text-green-600 font-bold hover:underline">Ver checklist</a>
                </div>
                <div className="border rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Webinar: Conexão Humana na Era Digital</h3>
                    <p className="text-neutral-600 mb-4">Aprenda ao vivo como escalar seu atendimento sem perder o toque pessoal.</p>
                    <a href="#" className="text-green-600 font-bold hover:underline">Assista agora</a>
                </div>
            </div>
        </div>
    </section>
);

// --- SEÇÃO 6: CTA INTERMEDIÁRIO ---

const MidCTASection: React.FC = () => (
    <section id="mid-cta" className="py-20 bg-green-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-lg mb-2">Você já conhece as vantagens; agora é hora de colocar em prática.</p>
            <h2 className="text-3xl font-bold mb-6">Pronto para revolucionar suas vendas no WhatsApp?</h2>
            <a
                href="#hero"
                className="bg-white text-green-700 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
                Teste Grátis Agora
            </a>
            <p className="mt-3 text-sm">Sem cartão de crédito – 7 dias para experimentar</p>
        </div>
    </section>
);

// --- SEÇÃO 7: DIFERENCIAÇÃO ---

const ComparisonSection: React.FC = () => (
    <section id="comparison" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">Por que o ZapVoice é único?</h2>
            <table className="w-full border border-neutral-300">
                <thead>
                    <tr className="bg-neutral-100">
                        <th className="p-3">Abordagem Tradicional</th>
                        <th className="p-3">ZapVoice</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                        <td className="p-3">❌ Mensagens frias e impessoais</td>
                        <td className="p-3">✅ Áudios humanizados que trazem real conexão</td>
                    </tr>
                    <tr>
                        <td className="p-3">❌ Integração complexa</td>
                        <td className="p-3">✅ Instalação simples via extensão do Chrome</td>
                    </tr>
                    <tr>
                        <td className="p-3">❌ Atendimento automatizado sem personalidade</td>
                        <td className="p-3">✅ Funis e gatilhos que aproximam sua marca</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
);

// --- SEÇÃO 8: DEPOIMENTOS EM GRID ---

const TestimonialsGridSection: React.FC = () => {
    const testimonials = [
        { quote: 'ZapVoice transformou nosso atendimento – os áudios humanizados criaram uma conexão real com nossos clientes!', author: 'Maria Oliveira, Diretora de Vendas', result: '+35% de vendas' },
        { quote: 'Eu acreditava que automação significaria frieza; com o ZapVoice, cada mensagem ganhou personalidade.', author: 'Pedro Santos, Empreendedor', result: '+20% de valorização' },
        { quote: 'A ferramenta facilitou a comunicação e nossos clientes se sentem mais próximos. Recomendo!', author: 'Ana Lima, Consultora', result: '+30% em vendas' },
        { quote: 'O diferencial está nos áudios humanizados – a autenticidade faz toda a diferença.', author: 'Carlos Mendes, Gerente', result: 'Conversão imediata' },
        { quote: 'Rapidez na instalação e interface intuitiva tornam o ZapVoice indispensável.', author: 'Fernanda Rocha, SDR', result: 'Eficiência notável' },
        { quote: 'Transformou a comunicação com os clientes, trazendo atendimento verdadeiramente humano.', author: 'Lucas Pereira, Afiliado', result: 'Melhoria consistente' },
    ];

    return (
        <section id="testimonials" className="py-20 bg-neutral-100">
            <div className="container mx-auto px-4 max-w-5xl text-center">
                <h2 className="text-3xl font-bold mb-12">O que nossos usuários dizem</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow">
                            <p className="text-yellow-500 mb-2">★★★★★</p>
                            <p className="italic text-neutral-700 mb-4">"{t.quote}"</p>
                            <p className="font-semibold text-neutral-800">{t.author}</p>
                            <p className="text-sm text-neutral-500">{t.result}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- SEÇÃO 9: FAQ ---

const FAQSection: React.FC = () => {
    const faqs = [
        { q: 'Como instalo o ZapVoice?', a: 'Basta adicionar a extensão ao seu Chrome, conectar com o WhatsApp Web e seguir o tutorial.' },
        { q: 'Os áudios realmente parecem gravados ao vivo?', a: 'Sim, eles simulam “gravando...” para criar uma experiência natural e autêntica.' },
        { q: 'Preciso ter conhecimentos técnicos para usar?', a: 'Não, o ZapVoice é simples e intuitivo, sem necessidade de conhecimentos técnicos.' },
        { q: 'Em quanto tempo verei resultados?', a: 'Muitos usuários percebem melhorias em comunicação e vendas em poucos dias.' },
        { q: 'Há suporte disponível se eu precisar de ajuda?', a: 'Sim, oferecemos suporte direto via WhatsApp em todas as etapas.' },
    ];
    const [open, setOpen] = useState<number | null>(null);
    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-10">Dúvidas Frequentes</h2>
                {faqs.map((f, i) => (
                    <div key={i} className="border-b py-4">
                        <button className="flex justify-between w-full" onClick={() => setOpen(open === i ? null : i)}>
                            <span className="font-medium text-left">{f.q}</span>
                            <ChevronDownIcon className={`h-5 w-5 transform ${open === i ? 'rotate-180' : ''}`} />
                        </button>
                        {open === i && <p className="mt-2 text-neutral-600">{f.a}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- SEÇÃO 10: CTA FINAL ---

const FinalCTASection: React.FC = () => (
    <section id="final-cta" className="py-20 bg-green-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-3">Não perca mais tempo: humanize e escalone suas vendas!</h2>
            <p className="mb-6 text-lg">Junte-se a centenas de profissionais que já transformaram seu atendimento</p>
            <a
                href="https://sun.eduzz.com/920705?a=525913"
                className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
                Assine Agora →
            </a>
            <div className="mt-4 text-sm">
                <p>✅ Garantia de 7 dias grátis</p>
                <p>💬 Suporte dedicado via WhatsApp</p>
                <p>🤝 Comunidade ativa de usuários</p>
            </div>
        </div>
    </section>
);

// --- FINAL PAGE COMPONENT ---

const LandingPage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <SocialProofSection />
            <CoreBenefitsSection />
            <MethodSection />
            <ResourcesSection />
            <MidCTASection />
            <ComparisonSection />
            <TestimonialsGridSection />
            <FAQSection />
            <FinalCTASection />
        </>
    );
};

export default LandingPage;
