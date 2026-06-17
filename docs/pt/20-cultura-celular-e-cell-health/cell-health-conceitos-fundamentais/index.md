# Cell Health — Conceitos de viabilidade, citotoxicidade e citostase

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- compreender o conceito de saúde celular (*cell health*) no contexto de HCI/HCA;
- diferenciar viabilidade celular, citotoxicidade, citostase e perturbação subletal;
- organizar ensaios de saúde celular segundo a lógica do documento OECD/GIVIMP;
- explicar por que ensaios diferentes podem produzir resultados distintos para a mesma condição experimental;
- reconhecer interferências técnicas que podem comprometer a interpretação de ensaios de *cell health*.

## 1. O que significa avaliar saúde celular?

Em experimentos de biologia celular, frequentemente o primeiro passo após expor as células a uma perturbação, como um fármaco, nanopartícula ou extrato, é avaliar se o sistema celular permaneceu funcional. Essa avaliação é normalmente chamada de avaliação da saúde celular (*cell health assessment*) e representa uma das primeiras camadas de caracterização biológica em estudos de toxicologia, farmacologia e biologia celular quantitativa.

Embora o termo "viabilidade celular" seja amplamente utilizado, ele frequentemente simplifica um fenômeno biológico complexo. Uma célula pode manter metabolismo ativo e, ainda assim, apresentar alterações profundas de morfologia, estresse oxidativo, dano mitocondrial, perda de polaridade, alteração proliferativa ou reorganização fenotípica. Da mesma forma, diferentes ensaios podem produzir respostas distintas para a mesma condição experimental porque medem propriedades celulares diferentes.

No contexto de HCI/HCA, essa distinção é particularmente importante. Muitas vezes, fenótipos subletais surgem antes de qualquer perda evidente de viabilidade. Isso significa que ausência de citotoxicidade evidente não implica ausência de perturbação biológica. Retomando a discussão anterior, a imagem é o dado experimental, e se a imagem captura apenas uma dimensão do estado celular, conclusões baseadas nessa dimensão única podem ser incompletas ou equivocadas.

!!! info "Dimensões do estado celular"
    Ensaios de saúde celular não medem uma propriedade única chamada "viabilidade". Eles medem diferentes dimensões do estado celular, como metabolismo, integridade de membrana, crescimento, massa celular, função mitocondrial, função lisossomal ou positividade para marcadores de morte. Cada dimensão responde a uma pergunta diferente sobre o sistema celular.

!!! tip "Antes de continuar"
     - Por que o termo "viabilidade celular" pode ser uma simplificação excessiva?
    - No contexto de HCA, por que a ausência de citotoxicidade não garante ausência de perturbação biológica?

## 2. Viabilidade celular, citotoxicidade e citostase

Embora os termos sejam frequentemente utilizados como sinônimos na literatura, viabilidade celular e citotoxicidade não representam exatamente o mesmo conceito biológico. Viabilidade celular geralmente se refere à preservação de uma propriedade funcional ou estrutural compatível com células vivas, enquanto citotoxicidade se refere ao dano induzido por uma perturbação, frequentemente associado à perda de função, integridade ou sobrevivência celular.

Ensaios de viabilidade normalmente avaliam a preservação de alguma função celular em relação ao controle não tratado. Em muitos casos, o sinal experimental é normalizado em relação às células controle e expresso como porcentagem relativa. Esses ensaios frequentemente utilizam metabolismo, atividade enzimática, conteúdo celular, organelas funcionais ou número de células como aproximações de *fitness* celular.

Por outro lado, ensaios de citotoxicidade buscam detectar dano celular, perda de integridade de membrana, liberação de componentes intracelulares ou entrada de corantes impermeáveis à membrana. Esses eventos são frequentemente interpretados como evidência de morte celular ou dano celular avançado, mas nem sempre indicam mecanismo específico de morte.

Existe ainda uma terceira situação muito importante: a citostase. Nesse caso, as células não necessariamente morrem, mas reduzem ou interrompem a proliferação. Isso pode reduzir número de células, conteúdo de DNA, incorporação de EdU ou biomassa total, sem que haja necessariamente morte celular aguda. A citostase é frequentemente ignorada em interpretações simplificadas, mas representa uma resposta biológica relevante em muitos contextos experimentais.

![Conceitos de cell health](../../assets/img/cell-health-pt.webp)

!!! warning "Redução de sinal não é morte celular"
    Redução de sinal em um ensaio de viabilidade não significa automaticamente morte celular. A redução pode refletir metabolismo diminuído, parada proliferativa, alteração mitocondrial, perda de adesão, menor biomassa ou interferência técnica do tratamento com o método de leitura. Interpretar qualquer redução como "citotoxicidade" é uma das fontes mais comuns de conclusões equivocadas em biologia celular.

!!! tip "Antes de continuar"
     - Um composto reduz o sinal de MTT em 40%. Liste ao menos três explicações possíveis que não envolvem morte celular.
     - Qual é a diferença entre citotoxicidade e citostase?

## 3. Organização dos ensaios segundo a lógica OECD/GIVIMP

O documento OECD/GIVIMP (*Guidance Document on Good In Vitro Method Practices*) organiza os métodos de viabilidade e citotoxicidade de culturas celulares em categorias baseadas no tipo de propriedade celular avaliada. Essa organização é muito útil didaticamente porque evita agrupar todos os ensaios sob o rótulo genérico de "viabilidade".

A lógica geral pode ser organizada em quatro grandes grupos. O primeiro grupo, dano estrutural não invasivo, inclui avaliações que procuram evidências de alteração celular sem necessariamente destruir, fixar ou corar as células de forma terminal. O segundo grupo, dano estrutural invasivo, utiliza corantes que entram apenas em células com membrana comprometida ou, inversamente, corantes que são retidos em células com membrana funcional. O terceiro grupo, crescimento celular, envolve medidas de proliferação e biomassa. O quarto grupo, metabolismo e função celular, reúne ensaios baseados em atividade metabólica, estado energético e função de organelas.

Cada grupo responde a uma pergunta diferente sobre o sistema celular, e essa diferença deve aparecer tanto no desenho experimental quanto na nomenclatura dos gráficos e na escrita dos resultados. Para HCI/HCA, essa classificação é especialmente útil porque muitas dessas medidas podem ser obtidas no nível de célula individual. Em vez de produzir apenas um valor médio por poço, a imagem permite relacionar número de células, morfologia, positividade para marcadores, localização subcelular e intensidade de sinal em uma mesma análise multiparamétrica.

![Categorias OECD/GIVIMP](../../assets/img/oecd-givimp-categ-pt.webp)

!!! tip "Antes de continuar"
     - Quais são as quatro categorias de ensaios segundo a lógica OECD/GIVIMP?
    - Por que é problemático agrupar todos os ensaios sob o rótulo "viabilidade"?

## 4. Por que ensaios diferentes produzem resultados diferentes

Uma das principais dificuldades em experimentos de saúde celular é assumir que todos os ensaios medem o mesmo fenômeno biológico. Na prática, diferentes métodos capturam dimensões distintas da resposta celular, e essa distinção explica por que dois ensaios podem produzir resultados aparentemente contraditórios para a mesma condição experimental.

Um composto pode reduzir ATP sem causar lise celular. Outro pode alterar metabolismo mitocondrial sem alterar contagem celular. Um terceiro pode reduzir crescimento sem aumentar a proporção de células com membrana comprometida. Em alguns casos, fenótipos subletais surgem muito antes de qualquer alteração detectável em ensaios clássicos de viabilidade. Essas discrepâncias, não são erros experimentais, são consequência direta do fato de que cada ensaio captura uma dimensão diferente do estado celular.

Também é necessário considerar interferências do item testado com o método de leitura. Compostos coloridos podem interferir em absorbância, compostos fluorescentes podem interferir em leituras fluorescentes, agentes redutores podem reduzir MTT ou resazurina diretamente, e nanomateriais podem adsorver corantes, espalhar luz ou interagir com reagentes. Retomando a discussão da Aula 1, esses efeitos técnicos se somam ao sinal biológico e podem comprometer a interpretação dos dados se não forem controlados.

Por isso, controles adequados são parte essencial do ensaio. Controles sem células, controles de veículo, controles positivos de citotoxicidade, controles de interferência óptica e controles de densidade celular podem ser necessários dependendo do método. A escolha e a interpretação do ensaio devem considerar não apenas a pergunta biológica, mas também as possíveis fontes de interferência técnica.

!!! tip "Antes de continuar"
    - Um composto fluorescente é testado em um ensaio de resazurina. Que tipo de interferência pode ocorrer?
    - Por que a discrepância entre dois ensaios não é necessariamente um erro experimental?

## 5. Fechamento

Nesta aula vimos que a avaliação de saúde celular é um processo multidimensional, e que termos como "viabilidade" e "citotoxicidade" frequentemente simplificam fenômenos biológicos complexos. Viabilidade, citotoxicidade e citostase representam situações biológicas distintas, e confundi-las pode levar a interpretações equivocadas.

Discutimos também que a organização proposta pelo documento OECD/GIVIMP ajuda a separar ensaios por tipo de informação: dano estrutural não invasivo, dano estrutural invasivo, crescimento celular e metabolismo/função celular. Essa classificação evita que todos os resultados sejam tratados genericamente como "viabilidade".

Por fim, vimos que ensaios diferentes podem produzir resultados distintos porque capturam dimensões diferentes do estado celular, e que interferências técnicas podem comprometer a interpretação se não forem controladas. Na próxima aula, exploraremos cada categoria de ensaio em detalhe, compreendendo o que cada método realmente mede e como combiná-los de forma ortogonal.

### Exercícios

1. Explique a diferença entre viabilidade celular, citotoxicidade e citostase, usando um exemplo hipotético em que um tratamento produz citostase sem citotoxicidade.

2. Um pesquisador trata células com um composto e observa redução de 50% no sinal de MTT, mas nenhuma célula PI-positiva. Discuta ao menos duas interpretações biológicas possíveis que não envolvam morte celular.

3. Classifique os seguintes ensaios segundo as categorias OECD/GIVIMP: LDH, EdU, SRB, MTT, Neutral Red Uptake, Calcein-AM e contagem nuclear por HCI.

4. Um nanomaterial é testado em um ensaio de resazurina e apresenta redução de sinal. O mesmo nanomaterial é conhecido por adsorver corantes. Que controle experimental seria essencial para distinguir efeito biológico de interferência técnica?

### Para aprofundar

- OECD. [*Guidance Document on Good In Vitro Method Practices (GIVIMP)*.](https://www.oecd.org/en/publications/guidance-document-on-good-in-vitro-method-practices-givimp_9789264304796-en.html) OECD Series on Testing and Assessment No. 286, 2018.
- Riss TL, Moravec RA, Niles AL, Duellman S, Benink HA, Worzella TJ, Minor L. [*Cell Viability Assays*.](https://www.ncbi.nlm.nih.gov/books/NBK144065/) Assay Guidance Manual, 2016. 
