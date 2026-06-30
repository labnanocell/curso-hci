# Cell Health — Conceitos de viabilidade, citotoxicidade e citostase

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- compreender o conceito de saúde celular (*cell health*) no contexto de HCI/HCA;
- diferenciar viabilidade celular, citotoxicidade, citostase e perturbação subletal;
- organizar ensaios de saúde celular segundo a lógica do documento OECD/GIVIMP;
- explicar por que ensaios diferentes podem produzir resultados distintos para a mesma condição experimental;
- reconhecer interferências técnicas que podem comprometer a interpretação de ensaios de *cell health*.

## 1. O que significa avaliar saúde celular?

Em experimentos de biologia celular, frequentemente o primeiro passo após expor as células a uma perturbação, como um fármaco, nanopartícula ou extrato, é avaliar seu funcionamento. Essa avaliação é normalmente chamada de avaliação da saúde celular (*cell health assessment*) e representa uma das primeiras camadas de caracterização biológica em estudos de toxicologia, farmacologia e biologia celular quantitativa.

Embora o termo "viabilidade celular" seja amplamente utilizado, ele frequentemente simplifica um fenômeno biológico complexo. Uma célula pode manter metabolismo ativo e, ainda assim, apresentar diversas alterações incluindo morfologia, estresse oxidativo, dano mitocondrial, perda de polaridade, alteração proliferativa ou reorganização fenotípica. Da mesma forma, diferentes ensaios podem produzir respostas distintas para a mesma condição experimental porque medem propriedades celulares diferentes.

No contexto de HCI/HCA, essa distinção é particularmente importante. Muitas vezes, fenótipos subletais surgem antes de qualquer perda evidente de viabilidade. Isso significa que ausência de citotoxicidade evidente não implica ausência de perturbação biológica. Retomando a discussão anterior, a imagem é o dado experimental, e se a imagem captura apenas uma dimensão do estado celular, conclusões baseadas nessa dimensão única podem ser incompletas ou equivocadas.

!!! info "Dimensões do estado celular"
    Ensaios de saúde celular não medem uma propriedade única chamada "viabilidade". Eles medem diferentes dimensões do estado celular, como metabolismo, integridade de membrana, crescimento, massa celular, função mitocondrial, função lisossomal ou positividade para marcadores de morte. Cada dimensão responde a uma pergunta diferente sobre o sistema celular.

!!! tip "Antes de continuar"
     - Por que o termo *viabilidade celular* pode ser uma simplificação excessiva?
     - No contexto de HCA, por que a ausência de citotoxicidade não garante ausência de perturbação biológica?

## 2. Viabilidade celular, citotoxicidade e citostase

Embora os termos sejam frequentemente utilizados como sinônimos na literatura, viabilidade celular e citotoxicidade não representam exatamente o mesmo conceito biológico. **Viabilidade celular** geralmente se refere à preservação de uma propriedade funcional ou estrutural compatível com células vivas, enquanto **citotoxicidade** se refere ao dano induzido por uma perturbação, frequentemente associado à perda de função, integridade ou sobrevivência celular.

Ensaios de viabilidade celular geralmente avaliam a preservação de uma determinada função celular em comparação com um controle não tratado. Em muitos casos, o sinal experimental é normalizado em relação ao controle e expresso como uma porcentagem de viabilidade relativa. Esses ensaios utilizam parâmetros como atividade metabólica, atividade enzimática, conteúdo celular, integridade ou funcionalidade de organelas e número de células como medidas indiretas do fitness celular. Os resultados são frequentemente apresentados na forma de curvas concentração–resposta, nas quais a viabilidade tende a diminuir à medida que a concentração do agente testado aumenta. Esse conceito será explorado em maior detalhe na próxima aula.

Por outro lado, ensaios de citotoxicidade buscam detectar dano celular, perda da integridade de membrana plasmática, liberação de componentes intracelulares ou a entrada de moléculas normalmente excluídas por células viáveis. Esses eventos são frequentemente interpretados como evidências de morte celular ou de dano celular avançado. Entretanto, na maioria dos casos, eles não permitem identificar diretamente o mecanismo específico de morte envolvido. Os resultados são frequentemente apresentados na forma de curvas concentração–resposta, nas quais a citotoxicidade tende a aumentar à medida que a concentração do agente testado aumenta. Esse conceito será explorado em maior detalhe na próxima aula.

Existe ainda uma terceira situação muito importante: a citostase. Nesse caso, as células não necessariamente morrem, mas reduzem ou interrompem sua capacidade proliferativa. Como consequência, observa-se uma diminuição no número de células, no conteúdo total de DNA, na incorporação de marcadores de proliferação, como EdU, ou na biomassa celular, sem que haja necessariamente morte celular aguda. A citostase é frequentemente negligenciada em interpretações simplificadas de ensaios de viabilidade, mas representa uma resposta biológica relevante em diversos contextos experimentais, incluindo o desenvolvimento de fármacos antitumorais, a avaliação de biomateriais e os estudos de toxicologia. 

![Conceitos de cell health](../../assets/img/cell-health-pt.webp)

!!! warning "Redução de sinal não é morte celular"
    **A redução do sinal em um ensaio de viabilidade não significa, necessariamente, morte celular**. Essa redução pode refletir diminuição da atividade metabólica, interrupção da proliferação celular, alterações na função mitocondrial, perda de adesão ao substrato, redução da biomassa celular ou até mesmo interferências técnicas do tratamento com o método de detecção utilizado. Interpretar qualquer diminuição de sinal como evidência direta de citotoxicidade é uma das fontes mais comuns de conclusões equivocadas em estudos de biologia celular e toxicologia.

!!! tip "Antes de continuar"

    - Um composto reduz o sinal de um ensaio de MTT em 40%. Esse resultado é suficiente para concluir que ocorreu morte celular? Por quê?
    - Liste pelo menos três explicações biológicas ou técnicas que poderiam justificar essa redução de sinal sem que tenha ocorrido morte celular.
    - Qual é a diferença entre citotoxicidade e citostase? Como cada uma delas poderia afetar o resultado de um ensaio de viabilidade?
    - Por que dois tratamentos podem apresentar a mesma redução de viabilidade, mas representar respostas biológicas completamente diferentes?


## 3. Organização dos ensaios segundo a lógica OECD/GIVIMP

A Organisation for Economic Co-operation and Development ([OECD](https://www.oecd.org/)) é uma organização internacional que reúne países membros para desenvolver recomendações, diretrizes e padrões técnicos em diversas áreas, incluindo ciência, meio ambiente, saúde e avaliação de segurança química. Na área de toxicologia e métodos alternativos, os documentos da OECD são amplamente utilizados por pesquisadores, agências regulatórias e pela indústria como referência para o desenvolvimento, validação e aplicação de métodos _in vitro_.

Um desses documentos é o **GIVIMP**  ([*Guidance Document on Good In Vitro Method Practices*](https://www.oecd.org/en/publications/guidance-document-on-good-in-vitro-method-practices-givimp_9789264304796-en.html)) , ou **Guia de Boas Práticas para Métodos In Vitro**, que reúne recomendações para planejamento experimental, controle de qualidade, interpretação de resultados e confiabilidade de ensaios celulares. O documento organiza os métodos de viabilidade e citotoxicidade em categorias baseadas na propriedade celular avaliada. Essa abordagem é particularmente útil do ponto de vista didático, pois evita agrupar todos os ensaios sob o rótulo genérico de “viabilidade” e destaca que diferentes métodos medem aspectos distintos da saúde celular.

A lógica geral pode ser organizada em quatro grandes grupos. O primeiro grupo, dano estrutural não invasivo, inclui avaliações que procuram evidências de alteração celular sem necessariamente destruir, fixar ou corar as células de forma terminal. O segundo grupo, dano estrutural invasivo, utiliza corantes que entram apenas em células com membrana comprometida ou, inversamente, corantes que são retidos em células com membrana funcional. O terceiro grupo, crescimento celular, envolve medidas de proliferação e biomassa. O quarto grupo, metabolismo e função celular, reúne ensaios baseados em atividade metabólica, estado energético e função de organelas.

Cada categoria de ensaio responde a uma pergunta diferente sobre o estado da célula, e essa distinção deve ser refletida tanto no desenho experimental quanto na nomenclatura utilizada em gráficos, tabelas e na interpretação dos resultados. Um ensaio que mede atividade metabólica, por exemplo, não responde exatamente à mesma pergunta que um ensaio que mede integridade de membrana ou proliferação celular.

Essa classificação é particularmente útil em HCI/HCA, pois muitas dessas propriedades podem ser medidas simultaneamente no nível de célula individual. Em vez de produzir apenas um valor médio por poço, a análise de imagens permite quantificar e relacionar número de células, morfologia, intensidade de fluorescência, localização subcelular e positividade para marcadores específicos dentro de uma mesma abordagem multiparamétrica. Como resultado, torna-se possível distinguir fenômenos como citotoxicidade, citostase e alterações funcionais sutis que frequentemente seriam indistinguíveis em ensaios convencionais baseados em uma única medida agregada.

![Categorias OECD/GIVIMP](../../assets/img/oecd-givimp-categ-pt.webp)
!!! tip "Antes de continuar"

    - Dois artigos relatam uma redução de 50% após tratamento celular. Um utilizou MTT e o outro utilizou LDH. Como você interpretaria essas diferenças numericamente iguais.
    - Por que pode ser problemático agrupar todos os ensaios sob o rótulo genérico de "viabilidade"?
    - Se um tratamento reduz a incorporação de EdU, mas não altera a exclusão de PI nem o sinal de Calceína-AM, qual hipótese biológica você levantaria para explicar esse resultado?
    - Em um experimento de HCI/HCA, quais informações adicionais você procuraria para diferenciar citotoxicidade de citostase?

## 4. Por que ensaios diferentes produzem resultados diferentes

Uma das fontes mais comuns de interpretação equivocada em experimentos de saúde celular é assumir que todos os ensaios medem o mesmo fenômeno biológico. Na realidade, cada método observa uma propriedade específica da célula, como atividade metabólica, integridade de membrana, proliferação ou número de células. Como essas propriedades podem ser afetadas de maneira diferente por um tratamento, não é incomum que dois ensaios produzam resultados aparentemente contraditórios para a mesma condição experimental. Compreender o que cada ensaio realmente mede é, portanto, mais importante do que memorizar o nome ou o protocolo utilizado.

Um composto pode reduzir os níveis intracelulares de ATP sem causar lise celular. Uma nanopartícula pode alterar o metabolismo mitocondrial sem modificar o número de células. Um extrato pode aumentar a atividade metabólica medida por um ensaio sem promover proliferação celular. Da mesma forma, fenótipos subletais frequentemente podem ser detectados em tempos mais curtos ou em concentrações mais baixas do que aquelas necessárias para produzir alterações detectáveis em ensaios clássicos de viabilidade ou citotoxicidade.

Um composto pode reduzir os níveis intracelulares de ATP sem causar lise celular. Uma nanopartícula pode alterar o metabolismo mitocondrial sem modificar o número de células. Um extrato pode aumentar a atividade metabólica medida por um ensaio sem promover proliferação celular. Da mesma forma, fenótipos subletais frequentemente podem ser detectados em tempos mais curtos ou em concentrações mais baixas do que aquelas necessárias para produzir alterações detectáveis em ensaios clássicos de viabilidade ou citotoxicidade.

Essas discrepâncias não representam, necessariamente, erros experimentais. Pelo contrário, são uma consequência direta do fato de que cada ensaio captura uma dimensão diferente do estado celular. Além disso, a resposta celular é dinâmica: alterações em metabolismo, proliferação, morfologia ou integridade de membrana podem surgir em momentos distintos após a exposição a um tratamento. Compreender essa natureza multidimensional e temporal da resposta celular é fundamental para interpretar corretamente os resultados experimentais.

Essa é uma das razões pelas quais abordagens multiparamétricas, como HCI/HCA e Cell Painting, são capazes de revelar respostas celulares que passariam despercebidas em ensaios baseados em uma única medida.  

Também é necessário considerar interferências do item testado com o método de leitura. Compostos que absorvem ou desviam a luz podem interferir em absorbância, compostos fluorescentes podem interferir em leituras fluorescentes, agentes redutores podem reduzir MTT ou resazurina diretamente, e nanomateriais podem adsorver corantes, espalhar luz ou interagir com reagentes. Retomando a discussão da [Microscopia — fundamentos de óptica para HCA](../../10-microscopia-e-aquisicao/microscopia-fundamentos/index.md), esses efeitos técnicos se somam ao sinal biológico e podem comprometer a interpretação dos dados se não forem controlados.

Por essa razão, controles adequados são parte essencial de qualquer ensaio de saúde celular. Entre os controles mais frequentemente utilizados estão os controles sem células, controles contendo apenas células não tratadas, controles de veículo (por exemplo, DMSO), controles positivos e negativos, controles para avaliar interferências ópticas ou químicas e controles de densidade celular.

Alguns desses controles devem fazer parte de praticamente todos os experimentos, enquanto outros podem ser realizados durante a validação do método ou sempre que houver suspeita de interferência experimental. Em muitos casos, uma única avaliação é suficiente para determinar a faixa de concentrações na qual determinada interferência permanece aceitável. A escolha do ensaio e a interpretação dos resultados devem considerar não apenas a pergunta biológica de interesse, mas também as limitações e possíveis fontes de interferência associadas ao método utilizado.

!!! tip "Antes de continuar"

    - Um composto fluorescente é testado em um ensaio de resazurina. De que maneiras ele poderia interferir na leitura? Como você verificaria essa possibilidade experimentalmente?

    - Em quais situações um controle sem células é indispensável para a interpretação dos resultados?

## 5. Fechamento

Nesta aula vimos que a avaliação de saúde celular é um processo multidimensional, e que termos como "viabilidade" e "citotoxicidade" frequentemente simplificam fenômenos biológicos complexos. Viabilidade, citotoxicidade e citostase representam situações biológicas distintas, e confundi-las pode levar a interpretações equivocadas.

Discutimos também que a organização proposta pelo documento OECD/GIVIMP ajuda a separar ensaios por tipo de informação: dano estrutural não invasivo, dano estrutural invasivo, crescimento celular e metabolismo/função celular. Essa classificação evita que todos os resultados sejam tratados genericamente como "viabilidade".

Por fim, vimos que ensaios diferentes podem produzir resultados distintos porque capturam dimensões diferentes do estado celular, e que interferências técnicas podem comprometer a interpretação se não forem controladas. Na próxima aula, exploraremos cada categoria de ensaio em detalhe, compreendendo o que cada método realmente mede e como combiná-los de forma ortogonal.

### Exercícios

1. Explique a diferença entre viabilidade celular, citotoxicidade e citostase, usando um exemplo hipotético em que um tratamento produz citostase sem citotoxicidade.

2. Um pesquisador trata células com um composto e observa redução de 50% no sinal de MTT, mas nenhuma célula PI-positiva. Discuta ao menos duas interpretações biológicas possíveis que não envolvam morte celular.

3. Classifique os seguintes ensaios segundo as categorias OECD/GIVIMP: LDH, EdU, SRB, MTT, Neutral Red Uptake, Calcein-AM e contagem nuclear por HCI.

4. Um nanomaterial é testado em um ensaio de resazurina e apresenta redução de sinal. Que controle experimental seria essencial para distinguir efeito biológico de interferência técnica?

### Para aprofundar

- OECD. [*Guidance Document on Good In Vitro Method Practices (GIVIMP)*.](https://www.oecd.org/en/publications/guidance-document-on-good-in-vitro-method-practices-givimp_9789264304796-en.html) OECD Series on Testing and Assessment No. 286, 2018.
- Riss TL, Moravec RA, Niles AL, Duellman S, Benink HA, Worzella TJ, Minor L. [*Cell Viability Assays*.](https://www.ncbi.nlm.nih.gov/books/NBK144065/) Assay Guidance Manual, 2016. 
