import type { LegalSection } from "../components/legal/LegalPageLayout";

export const privacySections: LegalSection[] = [
  {
    id: "dados-pessoais",
    number: "01",
    title: "O que são dados pessoais?",
    content: (
      <p>
        Dados pessoais são informações que permitem identificar uma pessoa, como nome, e-mail, telefone ou qualquer outro dado relacionado a uma pessoa física.
      </p>
    ),
  },
  {
    id: "dados-coletados",
    number: "02",
    title: "Quais dados podem ser coletados pelo SIM PLANEJAR?",
    content: (
      <>
        <p>Os dados fornecidos voluntariamente por você, como:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Nome;</li>
          <li>E-mail;</li>
          <li>Mensagens enviadas pelos formulários de contato;</li>
          <li>Respostas de pesquisas;</li>
          <li>Informações inseridas nos simuladores e ferramentas;</li>
          <li>Dados de navegação e cookies, quando aplicável.</li>
        </ul>
      </>
    ),
  },
  {
    id: "finalidade-dados",
    number: "03",
    title: "Para que os seus dados são utilizados?",
    content: (
      <>
        <p>Os dados poderão ser utilizados para:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Responder dúvidas, mensagens e solicitações;</li>
          <li>Melhorar conteúdos, produtos e serviços do SIM PLANEJAR;</li>
          <li>Realizar pesquisas relacionadas à educação financeira;</li>
          <li>Disponibilizar simuladores, ferramentas e recursos do site;</li>
          <li>Enviar conteúdos, novidades e comunicações relacionadas ao SIM PLANEJAR;</li>
          <li>Informar sobre lançamentos, produtos, serviços, eventos e oportunidades relacionadas ao ecossistema do SIM PLANEJAR;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
      </>
    ),
  },
  {
    id: "envio-comunicacoes",
    number: "04",
    title: "O SIM PLANEJAR poderá enviar conteúdos e comunicações?",
    content: <p>Sim.
      Ao informar voluntariamente seus dados em formulários, simuladores, pesquisas ou canais de contato do SIM PLANEJAR, você autoriza o envio de conteúdos, novidades, materiais educativos, pesquisas, lançamentos, produtos, serviços e outras comunicações relacionadas ao ecossistema do SIM PLANEJAR.
      Caso não deseje mais receber essas comunicações, você poderá solicitar o cancelamento do recebimento a qualquer momento.</p>,
  },
  {
    id: "compartilhamento-dados",
    number: "05",
    title: "O SIM PLANEJAR compartilha os meus dados?",
    content: <p>Não comercializamos dados pessoais.
      As informações poderão ser compartilhadas apenas quando necessário para a operação do site, cumprimento de obrigações legais ou mediante autorização do titular dos dados.</p>,
  },
  {
    id: "cookies",
    number: "06",
    title: "O que são cookies?",
    content: <p>Cookies são pequenos arquivos armazenados em seu navegador que ajudam a melhorar a experiência de navegação e a compreender como o site é utilizado.
      Você pode desabilitar os cookies diretamente nas configurações do seu navegador.</p>,
  },
  {
    id: "protecao-dados",
    number: "07",
    title: "Como os meus dados são protegidos?",
    content: <p>O SIM PLANEJAR adota medidas técnicas e administrativas para proteger as informações contra acessos não autorizados, perda, alteração ou qualquer forma de tratamento inadequado.</p>,
  },
  {
    id: "seus-direitos",
    number: "08",
    title: "Quais são os meus direitos?",
    content: (
      <>
        <p>Nos termos da LGPD, você pode:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Confirmar a existência de tratamento dos seus dados;</li>
          <li>Solicitar acesso aos seus dados pessoais;</li>
          <li>Corrigir informações incompletas ou desatualizadas;</li>
          <li>Solicitar a exclusão dos dados, quando aplicável;</li>
          <li>Revogar consentimentos anteriormente concedidos;</li>
          <li>Solicitar informações sobre o tratamento realizado.</li>
        </ul>
      </>
    ),
  },
  {
    id: "contato",
    number: "09",
    title: "Como entrar em contato?",
    content: (
      <>
        <p>Caso tenha dúvidas sobre esta Política de Privacidade ou queira exercer os seus direitos relacionados aos dados pessoais, entre em contato conosco:</p>
        <p>📧 contato@simplanejar.com</p>
      </>
    ),
  },
  {
    id: "alteracoes-politica",
    number: "10",
    title: "Alterações na Política de Privacidade",
    content: <p>Esta Política poderá ser atualizada periodicamente para refletir melhorias no site, alterações legais ou mudanças nos serviços oferecidos.
      Recomendamos que ela seja consultada regularmente.</p>,
  },
  {
    id: "consentimento",
    number: "11",
    title: "Consentimento",
    content: <p>Ao utilizar os simuladores, responder pesquisas, preencher formulários ou entrar em contato com o SIM PLANEJAR, você declara estar ciente desta Política de Privacidade e autoriza o tratamento das informações fornecidas para as finalidades aqui descritas, incluindo o envio de conteúdos, novidades e comunicações relacionadas ao SIM PLANEJAR, podendo solicitar o cancelamento desse recebimento a qualquer momento.</p>,
  },
];