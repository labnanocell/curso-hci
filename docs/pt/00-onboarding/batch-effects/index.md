# HCA — Desenho experimental II: *batch effect* — como reconhecer, prevenir e interpretar

## Objetivos

Ao final desta aula, você deverá ser capaz de:

- definir *batch effect* no contexto de HCA;
- distinguir efeito do tratamento, efeito biológico, efeito técnico e erro;
- reconhecer sinais de *batch effect* em imagens, controles e perfis fenotípicos;
- entender estratégias de prevenção no desenho experimental;
- compreender os limites da correção computacional.

## 1. A equação fundamental do experimento

Uma forma útil de pensar qualquer experimento é considerar que o **fenótipo observado** mistura componentes diferentes:

$$
\textbf{Fenótipo observado} =
\textit{Efeito do tratamento} +
\textit{Efeito biológico} +
\textit{Efeito técnico} +
\textit{Erro}
$$

Onde:

- **efeito do tratamento** é a perturbação de interesse, como dose, tempo, inibidor ou nanomaterial;
- **efeito biológico** corresponde às características do sistema biológico, como linhagem celular, estado fisiológico, genética e histórico da cultura;
- **efeito técnico** inclui variações introduzidas pelo processo experimental, como placa, operador, equipamento, calibração, pipetagem e aquisição;
- **erro** corresponde à variação residual que sobra, incluindo ruído de medida, variação entre unidades experimentais e subamostragem.

Nosso objetivo é estimar o efeito do tratamento com o menor grau possível de confusão por efeitos técnicos e erro.

## 2. O que é *batch effect*?

O *batch effect* é um tipo de **efeito técnico**.

Ele ocorre quando grupos de amostras são processados, adquiridos ou analisados em **lotes diferentes**, por exemplo, em dias, placas, rodadas de aquisição ou preparos independentes, produzindo uma variação, em sua maioria, **sistemática** que não tem origem biológica.

!!! info *Batch effect*  
    É uma variação predominantemente sistemática, não biológica, associada ao processamento de grupos de amostras em lotes distintos, como dias, placas ou rodadas experimentais diferentes.

Em HCA, isso é especialmente importante por dois motivos. Primeiro, porque raramente conseguimos manter todas as condições exatamente idênticas entre placas, dias, rodadas de aquisição ou preparos independentes. Segundo, porque HCA é uma técnica sensível, capaz de detectar essas variações técnicas e incorporá-las ao perfil medido, fazendo com que elas atuem como confundidores na análise.

## 3. De onde vem o *batch effect*?

O *batch effect* pode surgir em várias etapas do experimento, por exemplo:

- diferenças no cultivo e no plaqueamento;
- variações na preparação dos tratamentos;
- tempo de incubação ligeiramente diferente;
- operador diferente;
- placa diferente;
- lote de reagente diferente;
- ciclos de congelamento e descongelamento;
- calibração do microscópio;
- intensidade da fonte de iluminação;
- ajustes de foco, exposição ou segmentação;
- alterações no pipeline de análise.

Em outras palavras, *batch effect* não é apenas “dia diferente”. Ele pode aparecer sempre que um conjunto de amostras compartilha uma condição técnica particular que o distingue de outro lote.

## 4. Por que ele é tão importante em HCA?

Em HCA, os dados têm estrutura hierárquica:

**célula → campo/site → poço → placa → lote → experimento**

Ao mesmo tempo, o número de variáveis extraídas costuma ser alto, e muitas delas são sensíveis a pequenas diferenças técnicas. Por isso, assinaturas técnicas podem impactar os perfis fenotípicos.

Uma pipeta descalibrada, uma diferença de iluminação ou uma variação no preparo do corante podem deixar uma “assinatura” sistemática nos dados. E como essa assinatura é consistente, modelos estatísticos e de aprendizado de máquina podem aprendê-la como se fosse um sinal biológico real.

Por isso, em HCA, é razoável partir da premissa de que os dados podem carregar algum grau de *batch effect* e que isso precisa ser investigado.

## 5. Como o *batch effect* aparece nos dados?

O *batch effect* pode se manifestar de várias formas:

- agrupamento das amostras por dia, placa ou operador;
- deslocamento dos controles entre placas;
- diferença sistemática entre regiões da placa;
- separação por lote em *embeddings* ou projeções de baixa dimensão;
- aumento artificial da variabilidade;
- aparente diferença entre tratamentos que desaparece quando se controla o lote;
- desaparecimento de um efeito biológico real por excesso de variação técnica.

Em casos extremos, o *batch effect* pode inviabilizar a análise. Em situações menos evidentes, ele pode ser ainda mais perigoso, porque produz conclusões plausíveis, porém equivocadas. Isso é particularmente problemático quando os efeitos biológicos de interesse são sutis, pois o *batch effect* pode dificultar sua identificação ou até mascará-los.

## 6. Como inspecionar *batch effect*?

Uma boa prática é ter uma rotina explícita de inspeção.

### 6.1 Inspeção visual de imagens

Antes mesmo da análise quantitativa, observe:

- intensidade geral dos canais;
- foco;
- *background*;
- artefatos;
- diferenças sistemáticas entre placas ou bordas da placa.

### 6.2 Controles ao longo das placas

Verifique se controles negativos e positivos apresentam comportamento consistente entre placas, dias e lotes.

### 6.3 Redução de dimensionalidade

Projete os perfis em usando algoritmos de redução de dimensionalidade **não supervisionados**, como **PCA** ou **UMAP**, e colore os pontos por:

- lote;
- placa;
- dia;
- tratamento.

Se as amostras se agrupam mais fortemente por lote do que por tratamento, isso sugere influência técnica importante.

!!! tip
    PCA e UMAP são ferramentas exploratórias úteis para levantar suspeitas de *batch effect*, mas não substituem inspeção dos controles e análises quantitativas.

### 6.4 Métricas quantitativas

Além da visualização, vale quantificar:

- separação entre lotes;
- estabilidade dos controles;
- variância intra- e interplaca;
- consistência entre replicatas;
- preservação da relação entre controles e tratamentos após correção.

## 7. Por que *batch effect* é perigoso?

Porque ele pode:

- **imitar efeito biológico**;
- **esconder efeito real**;
- **gerar falso positivo**;
- **gerar falso negativo**;
- **confundir modelos preditivos**;
- **prejudicar a reprodutibilidade**.

Um cenário clássico é quando o desenho experimental confunde *batch* com tratamento. Por exemplo:

- todos os controles em uma placa;
- todos os tratados em outra placa.

Nesse caso, qualquer diferença entre placas pode parecer um efeito do tratamento. E como tratamento e lote variam juntos, torna-se muito difícil separar, se não impossível, um do outro na análise.
!!! info Sobre exemplos, números práticos e ferramentas do laboratório  
    Este curso foi feito para uso interno do laboratório. Por isso, além de conceitos gerais da área, ele inclui exemplos reais, decisões operacionais e alguns *guidelines* empíricos que desenvolvemos na nossa rotina. Esses valores não devem ser interpretados como regras universais da área, mas como pontos de partida práticos para ajudar no planejamento, execução e análise dos nossos experimentos. Em vários momentos, você verá também referência a ferramentas desenvolvidas no laboratório, como a **HCI_Metadata_Generator_v3**. O objetivo é tornar o conteúdo mais aplicável à nossa rotina e mais fácil de usar no dia a dia.

## 8. Como prevenir *batch effect*?

A prevenção começa no desenho experimental. A melhor estratégia é estruturar o experimento de forma que o efeito técnico possa ser reconhecido, monitorado e, quando necessário, modelado adequadamente.

### 8.1 Randomização

Distribua tratamentos e controles de forma randomizada, evitando que uma condição fique concentrada em uma única região, placa ou lote.

A lógica aqui é simples: se uma condição fica agrupada em uma única parte da placa, ou restrita a um único dia de experimento, qualquer efeito técnico associado àquela posição ou àquele lote pode ser confundido com o efeito biológico de interesse.

**Exemplo:** se todos os poços tratados com nanopartícula estiverem nas colunas finais da placa, e essas colunas forem mais afetadas por evaporação, o efeito de borda pode parecer um efeito do tratamento.

### 8.2 Bloqueio (*blocking*)

Quando você sabe que haverá uma fonte inevitável de variação técnica, como dias diferentes, placas diferentes ou rodadas distintas de aquisição, trate isso como um **bloco** no planejamento experimental.

Ou seja, em vez de ignorar essa fonte de variação, você a reconhece explicitamente e organiza o experimento para que as condições de interesse estejam representadas dentro de cada bloco.

**Exemplo:** se o experimento será realizado em dois dias, idealmente cada dia deve conter amostras de todas as condições principais, incluindo controles e tratamentos, e não apenas um subconjunto delas.

### 8.3 Controles distribuídos

Inclua controles positivos e negativos em todas as placas e, sempre, distribuídos ao longo da placa.

Isso cria uma referência interna compartilhada entre os lotes e ajuda tanto na inspeção de qualidade quanto em eventuais estratégias de correção posterior.

Isso é especialmente importante porque os controles funcionam como “âncoras” para interpretar se a variação observada está mais relacionada ao tratamento ou ao processamento técnico.

**Exemplo prático:**
- não colocar todos os controles em apenas uma placa;
- não concentrar todos os controles em uma única região da placa;
- repetir os principais controles em todas as placas do experimento.

### 8.4 Mapas de placa bem planejados

Evite grandes blocos contíguos de uma única condição. Sempre que possível:

- distribua replicatas ao longo da placa;
- reduza o número de replicatas adjacentes;
- considere efeitos de borda;
- varie a posição das condições entre placas;
- evite que uma condição fique restrita a uma única linha, coluna ou quadrante.

Para alunos iniciantes, essa etapa costuma ser difícil de visualizar. Por isso, sempre que possível, trabalhe com **mapas de placa explícitos**, e não apenas com uma lista de tratamentos.

**Exemplo:**
- ineficiente: 8 replicatas da mesma condição todas juntas;
- melhor: replicatas distribuídas em regiões diferentes da placa, com controles espalhados entre elas.

### 8.5 Rotina experimental consistente

Padronize ao máximo:

- plaqueamento;
- tempos;
- reagentes;
- incubação;
- aquisição;
- análise.

Isso não elimina *batch effect*, mas reduz a magnitude do problema e facilita sua interpretação.

Em HCA, pequenas diferenças podem ser detectadas pelo ensaio e aparecer nos perfis quantitativos. Por isso, consistência operacional não é apenas “organização”: ela faz parte da qualidade analítica do experimento.

### 8.6 Metadados completos

Sem bons metadados, você não consegue nem detectar nem modelar *batch effect* adequadamente. É importante coletar uma variedade de informações sobre o seu experimento:

- data;
- operador;
- placa;
- lote de reagente;
- instrumento;
- configuração de aquisição;
- versão do pipeline;
- observações relevantes.

Além disso, na nossa rotina, usamos a ferramenta [**HCI_Metadata_Generator_v3**](https://docs.google.com/spreadsheets/d/1qLVhBZXnamTXAmbJX-mvfrMBHy7giindIiN7zh0uzC4/edit?usp=sharing), desenvolvida no laboratório, para ajudar a padronizar a organização dessas informações. O uso detalhado dessa ferramenta será discutido em outro tópico do curso, mas é importante desde já entender quais tipos de informação ela foi desenhada para organizar.

Principais grupos de informação que ela ajuda a estruturar:

- identificação do experimento e do lote;
- painel/ensaio utilizado;
- linhagem celular;
- tipo de perturbação;
- *timepoints*;
- densidade e volume de plaqueamento;
- número de replicatas por condição;
- controles utilizados e número de poços por controle;
- número de doses e unidade de dose, quando aplicável;
- tamanho e modelo da placa;
- número de *sites* por poço;
- referência do *platemap*;
- quem realizou o plaqueamento, coloração e aquisição;
- origem das células;
- informações de controle de qualidade, como micoplasma;
- observações adicionais e desvios do protocolo.

Esse tipo de metadado é essencial porque permite reconstruir o contexto experimental e investigar se uma variação observada pode estar associada a fatores técnicos e não ao tratamento em si.

## 9. E depois: dá para corrigir?

Às vezes, parcialmente. Existem métodos para redução de *batch effect*, como:

- **ComBat**;
- **Harmony**;
- abordagens baseadas em representação latente;
- alguns métodos de *deep learning*.

Esses métodos podem ser úteis, mas têm limites importantes.

### 9.1 Correção não substitui desenho experimental

Se *batch* e tratamento estiverem confundidos, a correção pode falhar ou remover sinal biológico verdadeiro junto com o ruído técnico.

### 9.2 O algoritmo não “sabe” o que é biologia

Esses métodos modelam padrões nos dados. Eles não entendem, por si só, o que é efeito biológico verdadeiro e o que é artefato técnico.

### 9.3 O caso do ComBat

Métodos como ComBat tendem a funcionar melhor quando há sobreposição adequada entre condições e lotes. Ou seja, quando o modelo consegue observar condições equivalentes distribuídas entre diferentes *batches*.

Se todos os controles estão em um lote e todos os tratamentos em outro, não há informação suficiente para separar efeito técnico de efeito biológico de forma confiável.

!!! warning
    Correção computacional pode ajudar, mas não recupera informação que o desenho experimental perdeu.


## 10. Fechamento

O *batch effect* é um tipo de efeito técnico sistemático que pode distorcer profundamente a interpretação de experimentos de HCA.

Ele não deve ser tratado apenas como um problema de análise, mas como um problema de **desenho experimental, execução, controle de qualidade e interpretação**.

A melhor correção de *batch effect* começa antes da coleta dos dados.

!!! warning
    Não deixe para “corrigir depois”. Métodos computacionais podem reduzir o problema, mas não salvam um experimento mal desenhado.

## Resumo da aula

- *batch effect* é uma variação sistemática, não biológica, associada a lotes diferentes de processamento;
- em HCA, ele é especialmente importante porque muitas variáveis são sensíveis a pequenas mudanças técnicas;
- ele pode imitar sinal biológico, esconder efeito real ou gerar associações espúrias;
- prevenção depende de randomização, bloqueio, controles distribuídos, padronização e bons metadados;
- correção computacional pode ajudar, mas depende de um experimento bem planejado.


## Exercícios

### Exercício 1 — Conceitual

Explique, com suas próprias palavras, a diferença entre:

- efeito do tratamento;
- efeito biológico;
- efeito técnico;
- erro.

Em seguida, responda:

1. Por que o *batch effect* é considerado um tipo de efeito técnico?
2. Por que ele é especialmente importante em HCA?
3. Por que um *batch effect* sutil pode ser mais perigoso do que um *batch effect* muito evidente?
4. Por que a correção computacional não substitui um bom desenho experimental?

!!! tip
    Tente responder sem apenas repetir a definição. O objetivo aqui é mostrar que você entendeu a lógica do problema.

### Exercício 2 — Discussão de cenários experimentais

Leia os dois cenários abaixo. Em seguida, discuta, para cada caso:

- quais são os principais riscos de *batch effect*;
- quais decisões do desenho experimental ajudam;
- quais decisões pioram o problema;
- quais seriam os prós e contras das escolhas possíveis;
- o que você faria naquele contexto e por quê.

#### Cenário A — Menos placas, menos dias, mais concentração de condições

Você vai testar um nanomaterial em uma linhagem celular. O experimento terá:

- 1 controle negativo;
- 1 controle positivo;
- 4 doses do tratamento;
- 4 replicatas por condição;
- aquisição em placa de 96 poços.

Você percebe que consegue colocar tudo em **uma única placa**, mas para facilitar a montagem pensa em organizar assim:

- controles em um canto da placa;
- doses baixas em uma região;
- doses altas em outra;
- replicatas da mesma condição sempre lado a lado.

**Perguntas para discussão:**

1. Quais são as vantagens práticas dessa organização?
2. Quais riscos ela traz para interpretação dos resultados?
3. Como efeitos de borda ou gradientes na placa poderiam interferir?
4. Vale a pena abrir mão de uma organização “bonita” para distribuir melhor as condições?
5. Como você reorganizaria esse mapa?

#### Cenário B — Mais de um dia experimental, com decisão não óbvia

Você precisa repetir um experimento em **duas placas**, mas só consegue executar em **dois dias diferentes**.  
O experimento terá:

- controle negativo;
- controle positivo;
- 3 tratamentos;
- 1 *timepoint*;
- 4 replicatas por condição em cada dia.

A equipe está discutindo duas estratégias:

**Estratégia 1**  
- Dia 1: metade das condições  
- Dia 2: outra metade das condições

**Estratégia 2**  
- Dia 1: todas as condições  
- Dia 2: todas as condições novamente

A Estratégia 1 parece mais simples de executar. A Estratégia 2 parece melhor para comparação, mas exige mais organização.

**Perguntas para discussão:**

1. Qual estratégia tende a ser mais robusta contra *batch effect*?
2. Em que situação a Estratégia 1 poderia comprometer a análise?
3. Qual o papel dos controles em cada uma dessas estratégias?
4. Se houver diferença entre os dias, em qual estratégia isso será mais fácil de detectar?
5. Há alguma situação prática em que a Estratégia 1 ainda poderia ser aceitável? Quais cuidados adicionais seriam necessários?

!!! warning
    Neste exercício, não existe apenas uma resposta “certa”. O objetivo é discutir o raciocínio experimental e identificar compromissos práticos.

### Exercício 3 — Esboço do seu experimento

Agora pense no seu próprio experimento. Se você ainda não tiver um experimento definido, use o cenário-guia abaixo.

#### Opção A — Seu experimento real

Descreva brevemente:

- qual é a pergunta biológica;
- qual é o modelo biológico;
- quais são os tratamentos;
- quais são os controles;
- quantas placas você pretende usar;
- se o experimento será feito em um ou mais dias;
- quais fontes de variação técnica você já consegue prever.

Em seguida, proponha:

1. como você distribuiria tratamentos e controles na(s) placa(s);
2. como você lidaria com a necessidade de mais de um lote, se isso acontecer;
3. quais metadados você considera indispensáveis para interpretar o experimento;
4. quais pontos do seu desenho ainda estão vulneráveis a *batch effect*.

#### Opção B — Cenário-guia para quem ainda não tem experimento definido

Planeje um experimento de HCA com as seguintes características:

- linhagem celular: Huh-7;
- tratamento: um composto com potencial efeito citotóxico;
- condições:
  - controle negativo;
  - controle positivo;
  - 4 doses do composto;
- 4 replicatas por condição;
- placa de 96 poços;
- aquisição em 2 dias;
- 9 sites por poço.

Com base nisso:

1. desenhe uma estratégia geral para distribuir as condições;
2. diga como você organizaria os dois dias experimentais;
3. explique como os controles seriam distribuídos;
4. liste os principais metadados que registraria;
5. identifique pelo menos 3 fontes potenciais de *batch effect*;
6. proponha pelo menos 3 medidas preventivas.

!!! tip
    Não se preocupe em encontrar o desenho “perfeito”. O mais importante aqui é justificar suas decisões.

## Leituras complementares

1. [Tackling the widespread and critical impact of batch effects in high-throughput data](https://www.nature.com/articles/nrg2825)
2. [Batch Effect Confounding Leads to Strong Bias in Performance Estimates Obtained by Cross-Validation](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0100335)
 3. [Evaluating batch correction methods for image-based cell profiling](https://www.nature.com/articles/s41467-024-50613-5)
