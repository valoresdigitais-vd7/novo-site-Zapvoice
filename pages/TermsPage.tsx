
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

const TermsOfUsePage: React.FC = () => {
    return (
        <LegalPageLayout title="Termos de Uso - ZapVoice" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar o ZapVoice, você concorda em cumprir e estar legalmente vinculado a estes Termos de Uso. Caso não concorde com qualquer termo, recomendamos que não utilize o serviço.</p>

            <h2>2. Descrição do Serviço</h2>
            <p>O ZapVoice é uma extensão para Google Chrome que integra funcionalidades adicionais ao WhatsApp Web, oferecendo automação de mensagens, áudios humanizados, gatilhos de resposta e outras ferramentas de comunicação.</p>

            <h2>3. Elegibilidade</h2>
            <p>O uso do ZapVoice é permitido para pessoas físicas e jurídicas maiores de 18 anos e devidamente capazes de assumir obrigações contratuais.</p>

            <h2>4. Cadastro e Acesso</h2>
            <p>O acesso a determinadas funcionalidades poderá requerer o cadastro de uma conta. O usuário é responsável por manter suas informações verdadeiras, precisas e atualizadas, bem como pela segurança de suas credenciais.</p>

            <h2>5. Licença de Uso</h2>
            <p>O ZapVoice concede ao usuário uma licença limitada, não exclusiva e intransferível para uso pessoal ou comercial, de acordo com os planos adquiridos. É proibida a reprodução, engenharia reversa, redistribuição ou revenda do software.</p>

            <h2>6. Planos e Pagamentos</h2>
            <p>Os planos e assinaturas são processados de forma segura por meio da plataforma Eduzz. O usuário poderá escolher entre:</p>
            <ul>
                <li>💎 Plano Anual – 12x de R$ 29,99 (<a href="https://sun.eduzz.com/923893?a=525913" target="_blank" rel="noopener noreferrer">Assinar</a>)</li>
                <li>💰 Plano Mensal – R$ 49,90/mês (<a href="https://sun.eduzz.com/920705?a=525913" target="_blank" rel="noopener noreferrer">Assinar</a>)</li>
                <li>🎁 Teste grátis 7 dias (<a href="https://sun.eduzz.com/996637?a=525913" target="_blank" rel="noopener noreferrer">Experimentar</a>)</li>
            </ul>

            <h2>7. Uso Permitido</h2>
            <p>Ao utilizar o ZapVoice, o usuário compromete-se a não fazer uso do serviço para fins ilegais, abusivos, imorais, difamatórios ou que infrinjam direitos de terceiros e da plataforma WhatsApp.</p>

            <h2>8. Responsabilidades do Usuário</h2>
            <p>O usuário é o único responsável pelas mensagens e conteúdos enviados através da ferramenta, devendo respeitar as políticas, privacidade e termos do WhatsApp e de todos os seus contatos.</p>

            <h2>9. Limitação de Responsabilidade</h2>
            <p>O ZapVoice não se responsabiliza por perdas, danos ou prejuízos decorrentes do uso indevido da ferramenta, falhas na conexão com o WhatsApp Web ou ações de terceiros.</p>

            <h2>10. Suporte e Atualizações</h2>
            <p>O ZapVoice oferece suporte técnico via WhatsApp e atualizações automáticas para assegurar o melhor desempenho da ferramenta.</p>

            <h2>11. Política de Privacidade</h2>
            <p>Ao utilizar o ZapVoice, o usuário também concorda com a <a href="/privacidade">Política de Privacidade</a>, que descreve como as informações são coletadas, utilizadas e protegidas.</p>

            <h2>12. Modificações nos Termos</h2>
            <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações serão publicadas nesta página com data de atualização revisada.</p>

            <h2>13. Rescisão</h2>
            <p>O ZapVoice poderá suspender ou encerrar o acesso do usuário que violar estes termos ou fizer uso indevido do serviço.</p>

            <h2>14. Legislação Aplicável</h2>
            <p>Estes Termos de Uso serão regidos e interpretados de acordo com as leis brasileiras. Qualquer disputa será resolvida no foro da comarca de Curitiba, Paraná.</p>

            <p className="mt-6">Para dúvidas, suporte ou solicitações, entre em contato pelo WhatsApp de atendimento disponível no site oficial: <a href="https://zp.valoresdigitais.com" target="_blank" rel="noopener noreferrer">zp.valoresdigitais.com</a>.</p>
        </LegalPageLayout>
    );
};

export default TermsOfUsePage;
