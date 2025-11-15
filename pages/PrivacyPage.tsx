import React from 'react';

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

const PrivacyPage: React.FC = () => {
    return (
        <LegalPageLayout title="Política de Privacidade" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Introdução</h2>
            <p>
                Bem-vindo ao ZapVoice. Valorizamos sua privacidade e estamos comprometidos em proteger as informações pessoais que você compartilha conosco. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados quando você utiliza nossa extensão e nossos serviços.
            </p>

            <h2>2. Coleta de Dados</h2>
            <p>
                Coletamos informações pessoais que você fornece diretamente, como nome, e-mail e dados de contato, quando realiza seu cadastro, assina um plano ou entra em contato com o suporte.
                Além disso, coletamos dados técnicos automaticamente, como identificadores do navegador, endereço IP e dados sobre o uso da extensão, sempre respeitando a LGPD (Lei Geral de Proteção de Dados).
            </p>

            <h2>3. Uso dos Dados</h2>
            <p>
                Utilizamos os dados coletados para oferecer, operar e aprimorar nossos serviços, incluindo:
            </p>
            <ul>
                <li>Personalizar sua experiência no ZapVoice;</li>
                <li>Gerenciar assinaturas e pagamentos;</li>
                <li>Fornecer suporte técnico e atendimento ao cliente;</li>
                <li>Enviar comunicações relevantes sobre atualizações e funcionalidades;</li>
                <li>Garantir a segurança e conformidade da plataforma.</li>
            </ul>

            <h2>4. Armazenamento e Proteção</h2>
            <p>
                Seus dados são armazenados de forma segura e acessados apenas por profissionais autorizados. Utilizamos medidas de segurança técnicas e administrativas para proteger suas informações 
                contra acesso, uso ou divulgação não autorizados.
            </p>

            <h2>5. Compartilhamento de Dados</h2>
            <p>
                Não comercializamos informações pessoais. Podemos compartilhar dados apenas com:
            </p>
            <ul>
                <li>Parceiros que processam pagamentos ou ajudam na entrega de funcionalidades;</li>
                <li>Autoridades legais, se exigido por lei;</li>
                <li>Serviços de análise e melhoria do produto (anonimizados sempre que possível).</li>
            </ul>

            <h2>6. Direitos do Usuário</h2>
            <p>
                Você tem o direito de:
            </p>
            <ul>
                <li>Acessar e revisar seus dados pessoais armazenados;</li>
                <li>Solicitar correções, atualizações ou exclusão de informações;</li>
                <li>Revogar o consentimento para o uso dos dados a qualquer momento;</li>
                <li>Solicitar portabilidade de seus dados.</li>
            </ul>

            <h2>7. Cookies e Tecnologias Semelhantes</h2>
            <p>
                O ZapVoice pode utilizar cookies e ferramentas analíticas para melhorar a experiência do usuário e o desempenho da plataforma. 
                Você pode gerenciar preferências de cookies diretamente nas configurações do seu navegador.
            </p>

            <h2>8. Retenção de Dados</h2>
            <p>
                Mantemos suas informações pelo tempo necessário para cumprir as finalidades descritas nesta política, 
                a menos que um período maior seja exigido por lei ou solicitado para fins contratuais.
            </p>

            <h2>9. Alterações a Esta Política</h2>
            <p>
                Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos usuários sobre alterações significativas por meio de nosso site 
                ou pelos canais de comunicação cadastrados.
            </p>

            <h2>10. Contato</h2>
            <p>
                Se tiver dúvidas ou solicitações relacionadas à privacidade e proteção de dados, entre em contato com nossa equipe através do WhatsApp oficial disponível no site 
                ou pelo e-mail: suporte@valoresdigitais.com
            </p>

            <p className="mt-8 text-sm text-neutral-500">
                ZapVoice — Automatize seu WhatsApp sem perder a conexão humana.
            </p>
        </LegalPageLayout>
    );
};

export default PrivacyPage;
