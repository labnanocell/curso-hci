# HCA — Git básico para pós-graduação

## Objetivo

Neste módulo, vamos apresentar **como o Git e o GitHub serão usados no laboratório ao longo da pós-graduação** para organizar projetos, registrar o desenvolvimento do trabalho e facilitar a colaboração entre aluno e orientador.

A ideia aqui **não é** transformar você em desenvolvedor de software, nem cobrir todos os recursos do Git. O objetivo é mais simples e mais útil para o nosso contexto: garantir que você tenha uma forma organizada, rastreável e compartilhável de manter seus arquivos, scripts, anotações, documentação e projetos.

Este módulo deve ser lido em conjunto com [[HCI_Organizacao_projeto|HCA — Organização de projeto (pastas, nomes, rastreabilidade)]], porque Git e organização de projeto caminham juntos.

!!! info "Estrutura desta parte do curso"
    Esta aula tem foco **conceitual**: por que usamos Git/GitHub, como os repositórios serão organizados e qual é o papel do aluno e do orientador nesse fluxo.
    A parte prática de criação de conta, uso do repositório e início do lab notebook está no material complementar: [📘 Tutorial: Como usar o GitHub como Lab Notebook](pratica.md)

## Por que vamos usar Git na pós?

Durante a pós-graduação, você provavelmente vai lidar com:

- documentação de experimentos
- protocolos
- figuras e resultados intermediários
- versões diferentes do mesmo texto, código ou análise
- scripts de análise
- notebooks
- tabelas de metadados

Sem um sistema de versionamento, é muito comum cair em situações como:

- arquivos com nomes como `analise_final_agora_vai_3.py`
- múltiplas cópias da mesma pasta
- dificuldade para saber o que mudou entre duas versões
- perda de histórico
- dificuldade de supervisão e colaboração
- pouca rastreabilidade do desenvolvimento do projeto

O Git ajuda a resolver isso ao registrar mudanças ao longo do tempo. Já o GitHub funciona como a plataforma onde esses repositórios ficam hospedados e podem ser compartilhados, revisados e organizados.

Neste curso, vamos usar Git e GitHub como parte da **higiene científica e computacional** do projeto.

## Git e GitHub: qual é a diferença?

[**Git**](https://en.wikipedia.org/wiki/Git) é o sistema de controle de versão, criado por [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), criador do kernel do linux.  
[**GitHub**](https://github.com) é a plataforma onde os repositórios usando Git podem ser hospedados e compartilhados.

De forma simples:

- o **Git** controla o histórico do projeto
- o **GitHub** hospeda esse histórico e facilita colaboração, revisão e organização

## Como será o acesso do aluno

Cada aluno deverá criar **uma conta pessoal única no GitHub**, que será usada ao longo da sua vida profissional.

Como a universidade não mantém, até onde sabemos, um acordo institucional formal com o GitHub, a recomendação é que o aluno use **um e-mail profissional de longo prazo**, isto é, um e-mail que pretende continuar usando mesmo após o vínculo atual com a universidade.

Por exemplo:

- `nome.sobrenome@gmail.com`

Além disso, é recomendável que o aluno **adicione também o e-mail institucional** à mesma conta, quando aplicável.

A ideia prática é:

- **uma única conta pessoal**
- **e-mail principal de uso profissional duradouro**
- **e-mail institucional adicionado como secundário**, quando fizer sentido

Assim, o aluno mantém continuidade profissional e o laboratório também preserva rastreabilidade e governança sobre os projetos.

!!! tip "Regra prática"
    Evite criar várias contas GitHub ao longo da carreira. O ideal é uma única conta pessoal, com mais de um e-mail associado quando necessário.

## Como os repositórios do aluno serão organizados

No início da pós, o aluno normalmente terá **dois tipos principais de repositório**.

### 1. Repositório pessoal

Este é o espaço mais livre do aluno. Ele funciona como uma área de treino, testes e experimentação. Esse repositório será criado pelo próprio aluno, quando achar necessário, podendo ou não ser compartilhado com o orientador. 

Aqui podem entrar, por exemplo:

- testes de comandos
- pequenos scripts
- rascunhos de análise
- notebooks exploratórios
- exercícios
- automações simples
- tentativas de organização
- testes com novas ferramentas

Este repositório existe para que o aluno possa **aprender, errar, testar e evoluir** sem comprometer o projeto formal.

Em outras palavras: este é o lugar onde o aluno pode praticar e ganhar confiança.

### 2. Repositório formal de projeto

Este é o repositório oficial de **uma linha de trabalho** e será usado como **caderno de laboratório**. Diferentemente de um fluxo em que o aluno cria o projeto sozinho desde o zero, **o repositório formal será criado pelo laboratório** dentro do [repositório oficial do grupo](https://github.com/labnanocell), já com a estrutura padronizada do grupo, e depois compartilhado com o aluno. 

O repositório será criado usando uma versão customizada do pacote [cookiecutter](https://github.com/cookiecutter/cookiecutter) e é possível saber mais sobre a nossa versão acessando o [repositório do projeto](https://github.com/labnanocell/cookiecutter-lcp).

Ele será mantido no modo privado até que seja oportuno deixa-lo em modo público, geralmente no momento de publicação dos dados. Durante o desenvolvimento o aluno e o orientador farão parte do repositório e, caso necessário, colaboradores podem ser adicionados.

Esse repositório seguirá a estrutura definida mais adiante no curso, com base no template do laboratório. Em outras palavras: a **ferramenta e a estrutura já existem**, e o objetivo do aluno será **usar, alimentar e manter corretamente** esse repositório.

Aqui entram materiais ligados ao desenvolvimento real do projeto, por exemplo:

- organização do projeto
- documentação
- scripts de análise
- notebooks relevantes
- metadados
- protocolos usados no projeto
- resultados processados
- manuscritos e materiais relacionados

Esse repositório deve ser mais organizado, estável e rastreável do que o repositório pessoal.

## Diferença entre os dois tipos de repositório

### Use o repositório pessoal para:
- aprender Git
- testar comandos
- experimentar ferramentas
- fazer rascunhos
- guardar pequenos estudos e tentativas
- desenvolver autonomia

### Use o repositório formal de projeto para:
- trabalho científico real
- organização de dados e análises do projeto
- documentação do andamento
- materiais que precisam de rastreabilidade
- colaboração com orientador, colegas e parceiros
- construção de um histórico consistente do projeto

!!! tip "Uma forma simples de pensar nisso é:"
    o **pessoal** é o espaço de treino e exploração  
    o **repo do projeto** é o espaço de trabalho científico formal

## Como o GitHub será usado no laboratório

No nosso laboratório, o GitHub não será apenas um lugar para guardar código. Cada aluno vai usar o seu repositório com **duas funções principais**:

### 1. Repositório como estrutura do projeto

O **repositório formal** será o lugar onde ficam:

- scripts
- notebooks
- metadados
- documentação
- *plate maps*
- resultados pequenos e rastreáveis
- materiais que fazem parte da história científica do projeto

### 2. Discussions como lab notebook

Cada repositório terá o seu canal **Discussions**, que funcionará como um **caderno de laboratório digital**, usado para registrar:

- perguntas
- objetivos
- desenho experimental
- etapas de experimento
- análises
- decisões
- problemas encontrados
- conclusão provisória ou final
- interação com o orientador quando necessário

!!! tip "Em outras palavras:"
    os **arquivos** ficam no repositório  
    a **história do trabalho** fica nas Discussions

Isso evita que o histórico do projeto fique espalhado em:

- mensagens
- cadernos isolados
- memória do aluno
- arquivos sem contexto

!!! info "Importante"
    Nesta aula, estamos apresentando a lógica conceitual desse sistema. O uso prático das Discussions como lab notebook será mostrado no tutorial complementar do aluno.
## O que vai para cada lugar

### Repositório pessoal
Use quando:

- estiver aprendendo
- estiver testando ferramentas
- estiver fazendo um notebook de estudo
- ainda não houver vínculo claro com o projeto formal

### Repositório formal do projeto
Use quando:

- o material faz parte do projeto científico
- o teste passou a embasar uma decisão
- o notebook será reutilizado no experimento real
- o material precisa ser recuperado no futuro
- a etapa faz parte do piloto, QC, análise ou conclusão

### Discussions do GitHub
Use para registrar:

- a pergunta da etapa
- se o experimento é mais exploratório ou mais confirmatório
- o desenho experimental, quando aplicável
- o que foi feito
- qual notebook/script está envolvido
- elaboração de figuras
- interpretação
- próximos passos
- conclusão
- dúvidas e decisões discutidas com o orientador

### Google Drive institucional
Use para:

- documentos compartilhados
- referências
- apresentações
- arquivos grandes
- manuscritos colaborativos, quando necessário
- materiais institucionais do grupo
- *outputs* grandes que não devem ir ao GitHub

!!! info "Regra importante"
    O Drive pode armazenar e compartilhar materiais, mas o GitHub deve continuar sendo o local principal da rastreabilidade do projeto.

## Como decidir onde cada material deve ficar

Uma regra prática útil é a seguinte:

### 1. Isso é só treino ou teste solto?
- **Sim** → pode começar no repositório pessoal
- **Não** → siga para a próxima pergunta

### 2. Isso influencia uma decisão do projeto?
- **Sim** → deve estar no repositório formal e deixar rastro em Discussion
- **Não** → pode continuar provisório

### 3. Isso faz parte do piloto, QC, análise ou conclusão?
- **Sim** → deve estar no repositório formal

### 4. Isso é grande demais ou mais apropriado para compartilhamento institucional?
- **Sim** → pode ir para o Drive, mas com referência no GitHub quando for relevante

## Como o material muda de lugar ao longo do projeto

Nem tudo nasce no repositório formal do projeto, mas tudo o que se torna parte da história científica do trabalho precisa, em algum momento, deixar rastro rastreável no GitHub.

### Caso 1. Só um teste

Exemplos:

- testar um método
- aprender PCA
- rodar um notebook de estudo
- brincar com uma ferramenta nova

**Como se comportar**

- pode começar no repositório pessoal
- não precisa necessariamente gerar Discussion no projeto formal
- se o teste passar a influenciar decisões do projeto, ele deve migrar

### Caso 2. Piloto / assay development

Exemplos:

- escolher controle positivo
- ajustar dose
- definir tempo
- testar marcação
- avaliar objetiva
- validar segmentação inicial

**Como se comportar**

- já deve entrar no repositório formal do projeto
- deve gerar sua própria Discussion
- deve deixar rastro de:
  - pergunta
  - desenho experimental
  - protocolo usado
  - notebook/script
  - figura principal
  - conclusão

!!! tip "Regra prática"
    Se o trabalho ajuda a definir como o experimento oficial será feito, ele já faz parte formal do projeto.

### Caso 3. Experimento formal em andamento

Exemplos:

- dia 1 de coleta
- dia 2 de coleta
- dia 3 de coleta
- QC parcial
- análise parcial

**Como se comportar**

- arquivos no repositório formal
- uma Discussion pode acompanhar a execução inteira
- a Discussion pode ser atualizada ao longo dos dias, como um caderno de laboratório contínuo

### Caso 4. Três dias independentes finalizados

Quando as réplicas independentes foram concluídas e a análise inicial foi feita, o experimento deixa de ser apenas “execução em andamento” e passa a ser uma **unidade consolidada de evidência do projeto**.

**Como se comportar**

- manter notebooks e *outputs* organizados no repositório formal
- atualizar a Discussion com conclusão provisória ou final
- abrir nova Discussion de análise integrada, se necessário
- *outputs* grandes podem ir ao Drive, desde que continuem referenciados

### Caso 5. Resultado consolidado / figura / manuscrito

Exemplos:

- figura para apresentação
- tabela final
- comparação que sustenta uma conclusão
- material que entra em paper ou qualificação

**Como se comportar**

- deve estar ligado a notebook ou script rastreável
- deve estar organizado no repositório formal
- pode ter versão grande ou compartilhada no Drive


## Um projeto pode ter mais de um paper?

**Sim.** Um mesmo repositório de projeto pode conter **mais de um paper**, desde que esses trabalhos sejam desdobramentos de uma mesma linha científica e compartilhem um núcleo coerente de:

- pergunta guarda-chuva
- sistema experimental
- lógica metodológica
- pipeline de análise
- documentação e estrutura de projeto

Por exemplo, isso pode acontecer quando os trabalhos compartilham o mesmo material, o mesmo modelo biológico ou a mesma plataforma analítica, mas geram diferentes produtos científicos.

## Quando abrir um novo repositório de projeto?

Um novo repositório deve ser criado quando surgir uma **nova vertente suficientemente independente**, por exemplo:

- mudança importante da nanopartícula ou material
- mudança relevante do modelo biológico
- nova colaboração com autonomia própria
- nova pergunta científica central
- mudança importante do pipeline ou da governança do projeto

A ideia é evitar dois extremos:

- **fragmentar demais**, criando um repositório para qualquer detalhe
- **misturar demais**, transformando um único repositório em um depósito caótico de várias histórias científicas diferentes

!!! tip "Regra prática:"
	se o novo trabalho *compartilha o mesmo coração experimental e analítico do anterior*, ele pode permanecer no mesmo repositório  
	se virou uma *nova frente científica*, provavelmente merece um novo repositório


## O que não deve ir para o GitHub?

Nem tudo deve ser enviado para um repositório.

Em geral, **não devem ir para o GitHub**:

- arquivos brutos muito pesados
- grandes conjuntos de imagens
- dados sensíveis sem tratamento apropriado
- arquivos temporários
- ambientes virtuais
- caches
- arquivos gerados automaticamente que podem ser recriados
- senhas, tokens, chaves ou credenciais

Por isso, o uso do arquivo `.gitignore` será importante em muitos projetos. Esse arquivo já existe no seu repositório, mas deve ser editado sempre que houver a necessidade de se criar uma regra para que pastas ou arquivos específicos não sejam sincronizadas.

## Supervisão e acompanhamento

Duas vantagens claras de se usar o GitHub no contexto da pós é ajudar o aluno no gerenciamento do seu projeto (e eventuais colaborações). Isso inclui auxiliar a coordenar diferentes que ele permite acompanhar o desenvolvimento do trabalho de forma mais transparente.

Isso pode incluir:

- evolução da organização do projeto
- histórico de scripts e notebooks
- documentação do andamento
- dúvidas e decisões registradas
- maior facilidade de supervisão

Dependendo do fluxo adotado no laboratório, o GitHub também poderá ser combinado com:

- **Discussions**, para dúvidas, decisões e acompanhamento
- **Pull Requests**, para revisão de mudanças importantes

## O que acontece quando o aluno sair do grupo?

Uma vantagem importante de manter os repositórios formais dentro da estrutura do laboratório é que o projeto continua institucionalmente organizado.

Ao mesmo tempo, o aluno pode manter sua identidade e histórico no GitHub, especialmente se tiver configurado também um e-mail pessoal na conta.

A lógica geral é:

- o **projeto permanece organizado no laboratório**
- o **aluno mantém seu histórico de contribuição**
- a **transição de saída fica mais segura e menos caótica**


## Resumo

Ao longo da pós, vamos trabalhar com dois tipos iniciais de repositório:

### Repositório pessoal

- pessoal
- exploratório
- livre
- voltado para treino e experimentação

### Repositório de projeto

- formal
- organizado
- rastreável
- ligado ao desenvolvimento científico real
- criado e mantido dentro da estrutura do laboratório

Além disso:

- o **repositório** guarda os arquivos do projeto
- as **Discussions** registram a pergunta, o andamento e as decisões
- o **Google Drive institucional** armazena materiais compartilhados e arquivos grandes, quando necessário

Novos repositórios poderão ser criados quando surgirem novas frentes científicas suficientemente independentes.

A ideia central não é usar GitHub por modismo, mas como ferramenta de:

- organização
- rastreabilidade
- colaboração
- continuidade institucional
- higiene científica e computacional

## Para consulta e aprofundamento

Este módulo foi pensado como uma introdução prática para o contexto da pós-graduação.

Para a parte prática desta aula, consulte:

- [📘 Tutorial: Como usar o GitHub como Lab Notebook](pratica.md)
- [📘 Markdown — primeiros passos (NanoCell)](markdown.md)


Para quem quiser se aprofundar mais em Git e GitHub, consulte também o material complementar:

- [Git Immersion](https://gitimmersion.com/)
- [Github for beginners](https://github.com/nisalgunawardhana/Github-for-beginners)

Esse material complementar é mais longo e detalhado, e pode ser usado como consulta sempre que necessário.
