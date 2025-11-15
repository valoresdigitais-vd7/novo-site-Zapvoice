jsx
import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: A real cookie banner would have state management and logic to set cookies.
// This is a visual placeholder.
const CookieConsentBanner: React.FC = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
        <p className="text-sm">Nós usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com nosso uso de cookies.</p>
        <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Aceitar</button>
            <Link to="/politica-de-cookies" className="px-4 py-2 rounded text-sm hover:bg-neutral-700">Saber mais</Link>
        </div>
    </div>
);

const LegalPageLayout: React.FC<{ title: string; lastUpdated: string; children: React.ReactNode }> = ({ title, lastUpdated, children }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-neutral-500 mb-6">Última atualização: {lastUpdated}</p>
            <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
                {children}
            </div>
        </div>
    </div>
);

const CookiesPage: React.FC = () => {
    return (
        <>
            <LegalPageLayout title="Política de Cookies" lastUpdated="1 de Janeiro de 2024">
                <h2>1. O que são cookies?</h2>
                <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, smartphone, tablet) quando você visita um site. Eles ajudam a reconhecer o seu navegador e lembrar determinadas informações sobre suas preferências, como idioma escolhido e configurações de exibição.</p>

                <h2>2. Como usamos os cookies?</h2>
                <p>No ZapVoice, usamos cookies para oferecer uma melhor experiência de navegação, entender como os usuários interagem com nosso site e otimizar nossos serviços. Os cookies também podem ser utilizados para personalizar conteúdo e anúncios de acordo com seus interesses.</p>

                <h2>3. Tipos de Cookies que Utilizamos</h2>
                <ul>
                    <li><strong>Cookies Estritamente Necessários:</strong> Essenciais para o funcionamento do site e para permitir que você navegue e use recursos básicos.</li>
                    <li><strong>Cookies de Desempenho:</strong> Coletam dados sobre como os visitantes utilizam o site, ajudando-nos a entender e melhorar o desempenho.</li>
                    <li><strong>Cookies de Funcionalidade:</strong> Permitem lembrar suas preferências e personalizar sua experiência.</li>
                    <li><strong>Cookies de Publicidade:</strong> Utilizados para exibir anúncios relevantes e avaliar a eficácia das campanhas publicitárias.</li>
                </ul>

                <h2>4. Gerenciamento de Cookies</h2>
                <p>Você pode optar por aceitar ou recusar cookies através das configurações do seu navegador. No entanto, ao desativá-los, algumas partes do site podem não funcionar corretamente.</p>
                <p>A maioria dos navegadores permite que você controle os cookies por meio de suas preferências de privacidade. Consulte as instruções do seu navegador para ajustar essas configurações.</p>

                <h2>5. Cookies de Terceiros</h2>
                <p>Podemos utilizar serviços de terceiros (como Google Analytics) para coletar estatísticas e melhorar a experiência do usuário. Esses terceiros também podem definir seus próprios cookies, sobre os quais não temos controle direto.</p>

                <h2>6. Atualizações desta Política</h2>
                <p>Poderemos atualizar esta política periodicamente para refletir eventuais mudanças em nossas práticas de cookies. Recomendamos que revise esta página regularmente para manter-se informado.</p>

                <h2>7. Contato</h2>
                <p>Se você tiver qualquer dúvida sobre esta Política de Cookies, entre em contato conosco pelo e-mail <a href="mailto:suporte@zapvoice.com.br">suporte@zapvoice.com.br</a> ou através do WhatsApp disponível em nosso site.</p>

                <p>Esta Política de Cookies faz parte da nossa <Link to="/politica-de-privacidade" className="text-primary underline">Política de Privacidade</Link>.</p>
            </LegalPageLayout>
            <CookieConsentBanner />
        </>
    );
};

export default CookiesPage;
