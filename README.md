
# Landing page de serviços(Tecnológicos)

# Uma breve descrição sobre o que esse projeto faz e para quem ele é

Landing Page de Serviços - Angular 20
Landing Page profissional de alta performance desenvolvida com o ecossistema moderno do Angular. O projeto foi projetado com foco em conversão e otimização para motores de busca (SEO) através de renderização no lado do servidor (SSR).

# Stack Tecnológica
Framework: Angular v20.3.0

Arquitetura: Componentes Standalone com Hydration

Processamento: Server-Side Rendering (SSR) via @angular/ssr

UI Framework: Angular Material v20

Servidor Web: Express

Linguagem: TypeScript

Estilização: SCSS (Sass)

Funcionalidades Principais
Performance Otimizada: Utilização do novo motor de build do Angular para pacotes leves e carregamento rápido.

SEO & SSR: Renderização no servidor para garantir indexação completa em motores de busca e compartilhamento em redes sociais.

Layout Responsivo: Design adaptável para dispositivos móveis, tablets e desktop utilizando CSS Grid e Flexbox.

Componentes Modulares: Arquitetura limpa onde cada secção da página é um componente independente.

Feedback de Utilizador: Sistema de notificações profissionais integrado para interações em formulários.

Estrutura do Projeto
A organização dos ficheiros segue as melhores práticas de escalabilidade:



Instalação e Execução
Para configurar o ambiente de desenvolvimento localmente, execute os seguintes comandos:

Instalar dependências:

Bash

npm install
Executar em modo de desenvolvimento:

Bash

npm start
Gerar build de produção:

Bash

npm run build
Iniciar o servidor SSR:

Bash

npm run serve:ssr:landing-servicos
Configuração de Build
O projeto utiliza o ficheiro angular.json como núcleo de configuração. Estão definidos orçamentos (budgets) rigorosos para garantir que o bundle final não comprometa a performance:

Initial Bundle: Limite de 500kB para o carregamento inicial.

Component Styles: Limite de 4kB por componente para otimizar a renderização do CSS crítico.

Modelagem de Dados
O projeto utiliza tipagem forte para garantir a integridade das informações exibidas:

Servico: Interface que define a estrutura de dados para o catálogo de soluções, incluindo identificação, descrição e referências de imagem.

PricingTier: Estrutura para gestão de planos, preços e listas de recursos incluídos.

ProcessStep: Modelo para representação das etapas da metodologia de trabalho.
