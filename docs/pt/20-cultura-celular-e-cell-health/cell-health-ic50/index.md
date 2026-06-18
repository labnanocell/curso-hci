# Cell Health — IC50, curvas dose-resposta e escrita de resultados

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- compreender o modelo logístico de quatro parâmetros usado no ajuste de curvas dose-resposta;
- definir IC50 e explicar por que seu cálculo depende da cobertura da curva;
- decidir quando reportar IC50, "> concentração máxima testada" ou "ND";
- apresentar gráficos de curvas dose-resposta com nomenclatura precisa;
- escrever resultados e discussão distinguindo medida experimental de interpretação biológica;
- aplicar um framework prático para redigir seções de resultados de ensaios de cell health.

## 1. Ajuste de curva e o modelo logístico de quatro parâmetros

O IC50 representa a concentração associada a uma resposta de 50%, mas essa definição depende de como 100% e 0% foram definidos. Em ensaios de viabilidade, geralmente buscamos a concentração que reduz a resposta para 50% do controle. O IC50 é, portanto, um parâmetro derivado de um ajuste matemático, não uma medida direta do experimento.

O ajuste mais comum é uma curva logística de quatro parâmetros, também chamada de modelo dose-resposta com inclinação variável. Esse modelo estima quatro parâmetros: o platô superior (resposta máxima, geralmente próximo de 100% do controle), o platô inferior (resposta mínima, que pode ou não atingir 0%), a inclinação da curva (Hill slope, que descreve a taxa de transição) e o IC50 (concentração na qual a resposta atinge 50% entre os platôs).

O cálculo do IC50 só é confiável quando os dados descrevem adequadamente a curva. Idealmente, deve haver pontos próximos ao platô superior, pontos na região de transição e pontos próximos ao platô inferior. Quando os dados cobrem apenas parte da curva, o IC50 passa a depender fortemente de extrapolação, e seu valor numérico pode ser enganosamente preciso.

![Curva logística de quatro parâmetros](../../assets/img/curva-log-pt.webp)

Diferentemente da absorbância, da fluorescência ou da contagem celular, o IC50 não é uma observação experimental direta. Ele é um parâmetro estimado pelo ajuste matemático da curva aos dados experimentais disponíveis. Como toda estimativa, o IC50 está sujeito à variabilidade experimental e à incerteza do ajuste. Por esse motivo, uma concentração correspondente ao IC50 nem sempre produzirá exatamente 50% de resposta em experimentos posteriores, especialmente quando existem diferenças experimentais entre as condições utilizadas para estimar e validar o parâmetro.

!!! tip "Antes de continuar"

    - Por que dois experimentos com os mesmos dados brutos podem gerar IC50 diferentes se modelos diferentes forem utilizados?

    - Por que uma curva que não atinge claramente os platôs superior e inferior gera estimativas menos confiáveis de IC50?

## 2. Quando um IC50 pode ser interpretado com confiança

A decisão de reportar um valor numérico de IC50 deve ser baseada na qualidade dos dados, não na conveniência de apresentar um número. Existem três cenários principais que orientam essa decisão.

No primeiro cenário, a resposta cai de aproximadamente 100% para abaixo de 50% dentro da faixa de concentrações testada. Nesse caso, o IC50 está dentro do intervalo experimental e pode ser reportado como valor numérico, desde que o ajuste seja adequado e o intervalo de confiança seja aceitável. Esse é o cenário mais adequado para reportar um IC50.

No segundo cenário, a resposta diminui, mas permanece acima de 50% mesmo na maior concentração testada. O resultado indica baixa citotoxicidade ou efeito parcial nas condições avaliadas. Nesse caso, o correto é reportar que o IC50 é maior que a concentração máxima testada, por exemplo, "IC50 > 100 µg/mL". O valor numérico projetado pela curva não deve ser tratado como um IC50 confiável, pois depende de extrapolação além dos dados observados.

No terceiro cenário, os pontos são dispersos, não há tendência concentração-dependente, ou a curva ajustada depende fortemente de extrapolação. Nesse caso, o IC50 deve ser considerado não determinado e reportado como "ND" ou "não determinado na faixa testada". Reportar um número nessa situação pode transmitir falsa precisão.

![Cenários de IC50](../../assets/img/ic50-rep-pt.webp)

Um quarto cenário pode ocorrer quando a resposta cruza 50%, mas a curva é mal definida devido à ausência de pontos suficientes nos platôs ou à elevada variabilidade experimental. Nesses casos, embora o software possa calcular um IC50, o valor deve ser interpretado com cautela e sempre acompanhado de inspeção visual da curva e do intervalo de confiança. Além do valor estimado, é importante inspecionar o intervalo de confiança do IC50. Intervalos muito amplos indicam que pequenas variações nos dados podem resultar em estimativas bastante diferentes, reduzindo a confiança no parâmetro obtido.

Um software geralmente retornará um valor numérico quando solicitado a ajustar uma curva. Entretanto, a existência de um número não garante que exista informação experimental suficiente para sustentá-lo. Um IC50 confiável depende da qualidade dos dados e da cobertura adequada da curva concentração–resposta.

Essa avaliação é particularmente importante porque, em muitos estudos, o IC50 é utilizado para definir as concentrações de experimentos posteriores. Um valor mal estimado pode influenciar toda a estratégia experimental subsequente. Antes de aceitar um IC50, verifique se ele foi realmente determinado pelos dados observados e não por extrapolações do modelo.

!!! warning "IC50 extrapolado não é IC50 confiável"

    Quando a curva não atinge 50% dentro da faixa experimental, o valor projetado pelo ajuste é uma estimativa extrapolada, não um IC50 determinado experimentalmente. Reportar esse valor como se fosse um IC50 confiável pode transmitir falsa precisão e levar a interpretações biológicas equivocadas.

!!! tip "Antes de continuar"

    Um tratamento reduz a resposta de MTT para 65% na maior concentração testada (100 µg/mL). Como você reportaria o IC50?

    Por que reportar "IC50 = 250 µg/mL" é problemático quando a maior concentração testada foi 100 µg/mL?

    Um software calcula IC50 = 48,37 µg/mL com intervalo de confiança de 12,1–420,5 µg/mL. O que esse resultado sugere sobre a confiabilidade da estimativa?

## 3. Como apresentar gráficos com curvas dose-resposta

Gráficos de viabilidade e citotoxicidade devem mostrar a concentração no eixo X, preferencialmente em escala logarítmica, como discutimos na aula [Métricas, cálculos e apresentação gráfica](../cell-health-metricas/index.md). O eixo Y deve indicar exatamente a métrica medida ou calculada, também conforme discutimos anteriormente.

Para MTT, expressões como “Metabolic activity (% control)” ou “Relative metabolic activity (% control)” são geralmente mais informativas do que “Cell viability (% control)”, pois deixam explícita a natureza da medida experimental. Para ATP, é mais preciso usar "ATP levels (% control)". Para PI, o melhor é "PI-positive cells (%)". Para contagem baseada em imagem, "Viable cell count (% control)" é uma opção clara.

A representação gráfica deve incluir os pontos individuais por poço, a média por concentração com desvio padrão ou erro padrão e, quando apropriado, a curva logística ajustada. A visualização dos dados brutos é importante porque permite avaliar a variabilidade experimental e identificar possíveis outliers, efeitos de placa ou concentrações que apresentem comportamento inconsistente. Além disso, a inspeção visual dos pontos é uma etapa fundamental para julgar se o ajuste da curva e o IC50 estimado são realmente sustentados pelos dados experimentais. 

Sempre que possível, evite apresentar apenas a curva ajustada e o valor de IC50 sem os pontos experimentais. Essa prática dificulta a avaliação da qualidade do ajuste e impede que o leitor determine se o parâmetro estimado é realmente suportado pelos dados observados. Quando disponível, é recomendável apresentar também o intervalo de confiança da curva ajustada ou do IC50 estimado. Intervalos estreitos indicam maior precisão da estimativa, enquanto intervalos amplos sugerem maior incerteza e devem motivar uma interpretação mais cautelosa.

Gráficos de linha ou curvas concentração-resposta são geralmente mais adequados do que gráficos de barras quando o objetivo é mostrar dependência da concentração. Barras podem dificultar a percepção da tendência e tornam a comparação entre grupos menos intuitiva. Quando múltiplos tratamentos são comparados, cada um pode ser representado por uma curva distinta no mesmo gráfico, facilitando a comparação visual dos perfis dose-resposta.

!!! tip "Antes de continuar"

    - Por que é importante mostrar pontos individuais por poço, e não apenas a média e a curva ajustada?

    - Em que situação gráficos de barras seriam preferíveis a curvas concentração–resposta?

    - Por que um gráfico contendo apenas a curva ajustada e o valor de IC50 pode dificultar a avaliação da qualidade dos dados?

## 4. Resultados descrevem o dado; discussão interpreta

Uma das práticas mais importantes na escrita científica é distinguir observação experimental de inferência biológica. Na seção de resultados, o foco deve estar na descrição das observações obtidas experimentalmente. Na discussão, essas observações podem ser integradas a hipóteses, mecanismos e conhecimento prévio para gerar interpretações biológicas.

Por exemplo, na seção de resultados: "Observou-se aumento da porcentagem de células PI-positivas após exposição ao composto." Essa frase descreve diretamente o dado obtido experimentalmente. Já na discussão: "O aumento de células PI-positivas sugere perda de integridade da membrana plasmática e aumento de citotoxicidade." Essa frase interpreta o significado biológico do dado. 

A mesma lógica se aplica a ensaios metabólicos. Na seção de resultados: "Houve redução concentração-dependente da atividade metabólica medida por MTT." Na discussão: "A redução da atividade metabólica é consistente com comprometimento da saúde celular após exposição ao material." 

Ou ainda, em resultados: "Observou-se aumento da porcentagem de células Annexin V-positivas após exposição ao composto." nãodiscussão: "O aumento de células Annexin V-positivas é consistente com ativação de eventos associados à exposição de fosfatidilserina, frequentemente observados em processos de morte celular programada." 

A separação entre observação e interpretação aumenta o rigor científico e reduz o risco de sobreinterpretação. E ainda, quanto mais distante a conclusão estiver da variável originalmente medida, maior deve ser o cuidado na interpretação e maior a necessidade de evidências complementares.

!!! info "Sobreinterpretação como fonte de conclusões equivocadas"

    Em ciência quantitativa, interpretar além do que o ensaio realmente mede é uma das fontes mais comuns de conclusões equivocadas. MTT mede capacidade redutora; PI mede permeabilidade de membrana; ATP mede estado energético. Cada um desses ensaios fornece evidência parcial, e a interpretação biológica deve ser proporcional à evidência disponível.

!!! tip "Antes de continuar"

    - Por que a frase "o composto induziu apoptose" é inadequada se o único ensaio utilizado foi Annexin V?
    - Em que momento uma interpretação biológica deixa de ser uma descrição dos dados e passa a ser uma inferência?

## 5. Framework prático para escrever resultados

Uma forma eficiente de escrever a seção de resultados de ensaios de cell health é seguir uma sequência lógica com cinco elementos: (1) por que o ensaio foi realizado, (2) o que foi medido, (3) a tendência geral observada, (4) a comparação entre os grupos principais, e (5) o IC50 ou a explicação de por que ele não foi determinado.

Essa estrutura pode ser adaptada para qualquer ensaio. Veja um exemplo completo com MTT:

"Para avaliar o impacto inicial das nanopartículas sobre a saúde celular, a atividade metabólica foi quantificada por MTT após 24 h de exposição. Observou-se redução concentração-dependente da atividade metabólica após exposição às AgNPs, enquanto AuNPs mantiveram valores próximos ao controle na maior parte da faixa testada. O ajuste logístico indicou IC50 de 22,6 µg/mL para AgNPs. Para AuNPs, a resposta não atingiu 50% dentro da faixa experimental; portanto, o IC50 foi reportado como >100 µg/mL."

Esse exemplo apresenta a métrica, a tendência, a comparação e a interpretação do IC50 sem exagerar a conclusão biológica. A mesma estrutura pode ser aplicada a ensaios baseados em imagem:

"A viabilidade baseada em contagem celular foi avaliada por imagem após marcação com Hoechst e PI. O número de células viáveis foi calculado pela diferença entre núcleos totais e núcleos PI-positivos, seguido de normalização em relação ao controle não tratado. O tratamento X reduziu o viable cell count (% control) de forma concentração-dependente, enquanto o tratamento Y não apresentou redução relevante na faixa testada."

Esse texto deixa claro que a métrica deriva de contagem celular e evita confundir esse resultado com intensidade de fluorescência total ou com ensaios metabólicos. Para ensaios de citotoxicidade baseados em marcadores de núcleo, a mesma lógica se aplica:

"A exposição ao tratamento X aumentou a porcentagem de células PI-positivas de forma concentração-dependente."

Essa frase é preferível a "O tratamento X aumentou a morte celular de forma concentração-dependente", porque descreve a observação experimental em vez de substituí-la pela interpretação biológica.

!!! tip "Estrutura prática para escrever resultados"

    1. Qual era a pergunta experimental?
    2. Qual métrica foi utilizada?
    3. Qual tendência geral foi observada?
    4. Quais grupos diferiram entre si?
    5. Existe um parâmetro derivado relevante (IC50, EC50, CC50)?

    Se um leitor conseguir responder essas cinco perguntas após ler o parágrafo, provavelmente a informação principal foi comunicada de forma clara.

!!! tip "Antes de continuar"

    Aplique o framework de cinco elementos para escrever um parágrafo de resultados sobre um ensaio de ATP luminescente.

    Por que o segundo exemplo (ensaio de imagem) especifica como a métrica foi calculada, enquanto o primeiro (MTT) não precisa dessa especificação?

## 6. Conectando resultados e discussão

Na discussão, o foco deixa de ser a descrição isolada das observações e passa a ser a integração das evidências experimentais em uma interpretação biológica coerente. Esse é o momento de discutir o que a redução da viabilidade ou o aumento da positividade para PI sugere sobre saúde celular. É também o momento de integrar os resultados de ensaios ortogonais, como discutimos na aula [Ensaios por categoria e ortogonalidade](../cell-health-ensaios-ortogonais/index.md). 

Por exemplo: "Uma redução concentração-dependente da atividade metabólica acompanhada por aumento de células PI-positivas e redução da contagem celular fornece evidências convergentes de comprometimento da saúde celular. Embora nenhum desses ensaios seja suficiente isoladamente para definir um mecanismo de ação, a concordância entre diferentes dimensões da resposta aumenta a confiança na interpretação biológica." Esse tipo de construção mostra que o autor compreende as limitações do ensaio e busca evidência convergente para sustentar a interpretação.

O uso de linguagem cautelar é importante na discussão. Termos como "sugere", "é consistente com", "pode indicar" ou "corrobora" comunicam que a interpretação é baseada em evidência parcial, enquanto afirmações categóricas como "demonstra" ou "prova" devem ser reservadas para situações em que a evidência é robusta e convergente. A força da linguagem utilizada deve ser proporcional à força da evidência disponível. Quanto mais indireta for a medida e menor o número de evidências independentes, mais cautelosa deve ser a interpretação.

A integração com ensaios ortogonais fortalece a discussão porque reduz a possibilidade de que a interpretação dependa de uma única dimensão do estado celular. Quando MTT, PI e contagem celular apontam na mesma direção, a confiança na interpretação aumenta significativamente. Quando os ensaios divergem, a própria divergência pode fornecer informações mecanísticas importantes. Por exemplo, uma redução da atividade metabólica sem aumento concomitante de células PI-positivas pode indicar alterações metabólicas precoces, citostase, adaptação celular ou outros efeitos subletais. Nesses casos, a discordância entre os ensaios não deve ser encarada automaticamente como um erro experimental, mas como uma hipótese biológica que merece investigação adicional.

!!! info "Da observação à interpretação"

    Resultados respondem:
    
    - O que foi medido?
    - Qual foi a magnitude do efeito?
    - O efeito foi estatisticamente significativo?

    Discussão responde:

    - O que esses resultados podem significar biologicamente?
    - Como eles se relacionam com a literatura?
    - Quais são as limitações da interpretação?
    - Os ensaios independentes convergem para a mesma conclusão?


!!! tip "Antes de continuar"

    Por que é importante usar linguagem cautelar ("sugere", "é consistente com") na discussão de ensaios de cell health?
    Se MTT indica redução de viabilidade mas PI não mostra aumento de células positivas, como você interpretaria essa divergência na discussão?
    Em que situação a divergência entre dois ensaios pode ser mais informativa do que a concordância entre eles?

## 7. Fechamento

Nesta aula, completamos o ciclo discutindo o ajuste de curvas concentração–resposta, a interpretação crítica do IC50 e estratégias para comunicar resultados de forma rigorosa. Nas próximas aulas, ampliaremos essa lógica para o contexto de *High Content Imaging*, explorando como imagens são segmentadas, como características celulares são extraídas computacionalmente e como essas medidas podem ser transformadas em perfis fenotípicos multiparamétricos.

Discutimos também que a escrita de resultados exige separação rigorosa entre medida experimental e interpretação biológica. O gráfico mostra a medida, os resultados descrevem a tendência e a discussão interpreta o significado biológico. Essa regra simples, aplicada consistentemente, aumenta significativamente o rigor científico da comunicação.

Ao longo deste módulo, reforçamos repetidamente a distinção entre medida experimental, processamento matemático e interpretação biológica. Essa separação fornece uma estrutura útil para analisar qualquer ensaio de saúde celular: primeiro compreendemos o que foi medido, depois como o dado foi transformado em uma métrica quantitativa e, somente então, discutimos seu significado biológico.

Também vimos que nenhum ensaio isolado captura completamente a saúde celular. A interpretação torna-se mais robusta quando diferentes medidas independentes convergem para a mesma conclusão e mais interessante quando divergem, revelando diferentes dimensões da resposta celular.

!!! info "Mensagem principal do módulo"

    Nenhum ensaio mede diretamente "saúde celular".

    Os ensaios medem propriedades específicas do sistema biológico, como atividade metabólica, permeabilidade de membrana, conteúdo energético, proliferação ou morfologia.

    A interpretação biológica surge da integração dessas medidas com o contexto experimental e com evidências independentes. Quanto mais distante a conclusão estiver da variável originalmente medida, maior deve ser o cuidado na interpretação.
### Exercícios

1. Um tratamento reduz o sinal de MTT para 65% na maior concentração testada (100 µg/mL). Como você reportaria o IC50? Justifique.
2. Um ensaio com PI mostra aumento de 5% para 40% de células positivas. Escreva um parágrafo de resultados descrevendo essa observação sem usar o termo "morte celular".
3. Por que o controle não tratado não deve ser colocado como $\log(0)$ em uma curva concentração-resposta?
4. Em quais situações um IC50 deve ser reportado como "ND"?
5. Reescreva a frase "o tratamento matou 50% das células segundo o MTT" usando linguagem mais precisa, distinguindo medida experimental de interpretação biológica.
6. Explique a diferença entre medida experimental, processamento matemático e interpretação biológica utilizando como exemplo um ensaio de MTT.
### Para aprofundar

- GraphPad Prism — [How exactly are IC50 and EC50 defined?](https://www.graphpad.com/support/faq/50-of-what-how-exactly-are-ic50-and-ec50-defined/) 
- Riss TL, Moravec RA, Niles AL, Duellman S, Benink HA, Worzella TJ, Minor L. [*Cell Viability Assays*.](https://www.ncbi.nlm.nih.gov/books/NBK144065/) Assay Guidance Manual, 2016. 
- Bray MA et al. [Cell Painting, a high-content image-based assay for morphological profiling.](https://doi.org/10.1038/nprot.2016.105) *Nature Protocols* 11:1757–1772, 2016.
- [Pycytominer](https://pycytominer.readthedocs.io) documentation
- [CellProfiler](https://cellprofiler.org) documentation
