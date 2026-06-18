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

!!! tip "Antes de continuar"

    Quais são os quatro parâmetros estimados pelo modelo logístico de quatro parâmetros?

    Por que o IC50 não é uma medida direta do experimento, mas sim um parâmetro derivado de um ajuste?

## 2. Quando o IC50 deve ser reportado

A decisão de reportar um valor numérico de IC50 deve ser baseada na qualidade dos dados, não na conveniência de apresentar um número. Existem três cenários principais que orientam essa decisão.

No primeiro cenário, a resposta cai de aproximadamente 100% para abaixo de 50% dentro da faixa de concentrações testada. Nesse caso, o IC50 está dentro do intervalo experimental e pode ser reportado como valor numérico, desde que o ajuste seja adequado e o intervalo de confiança seja aceitável. Esse é o cenário mais adequado para reportar um IC50.

No segundo cenário, a resposta diminui, mas permanece acima de 50% mesmo na maior concentração testada. O resultado indica baixa citotoxicidade ou efeito parcial nas condições avaliadas. Nesse caso, o correto é reportar que o IC50 é maior que a concentração máxima testada, por exemplo, "IC50 > 100 µg/mL". O valor numérico projetado pela curva não deve ser tratado como um IC50 confiável, pois depende de extrapolação além dos dados observados.

No terceiro cenário, os pontos são dispersos, não há tendência concentração-dependente, ou a curva ajustada depende fortemente de extrapolação. Nesse caso, o IC50 deve ser considerado não determinado e reportado como "ND" ou "não determinado na faixa testada". Reportar um número nessa situação pode transmitir falsa precisão.

![Cenários de IC50](../../assets/img/ic50-rep-pt.webp)

!!! warning "IC50 extrapolado não é IC50 confiável"

    Quando a curva não atinge 50% dentro da faixa experimental, o valor projetado pelo ajuste é uma estimativa extrapolada, não um IC50 determinado experimentalmente. Reportar esse valor como se fosse um IC50 confiável pode transmitir falsa precisão e levar a interpretações biológicas equivocadas.

!!! tip "Antes de continuar"

    Um tratamento reduz a resposta de MTT para 65% na maior concentração testada (100 µg/mL). Como você reportaria o IC50?

    Por que reportar "IC50 = 250 µg/mL" é problemático quando a maior concentração testada foi 100 µg/mL?

## 3. Como apresentar gráficos com curvas dose-resposta

Gráficos de viabilidade e citotoxicidade devem mostrar a concentração no eixo X, preferencialmente em escala logarítmica, como discutimos na aula [Métricas, cálculos e apresentação gráfica](../cell-health-metricas/index.md). O eixo Y deve indicar exatamente a métrica medida ou calculada, também conforme discutimos anteriormente.

Para MTT, o eixo Y pode ser "Metabolic activity (% control)" ou "Cell viability (% control)", desde que o texto deixe claro que se trata de um ensaio metabólico. Para ATP, é mais preciso usar "ATP levels (% control)". Para PI, o melhor é "PI-positive cells (%)". Para contagem baseada em imagem, "Viable cell count (% control)" é uma opção clara.

A representação gráfica deve incluir pontos individuais por poço, a média por concentração com desvio padrão ou erro padrão, e a curva logística ajustada quando apropriado. Mostrar pontos individuais é importante porque revela a variabilidade real dos dados, que pode ser ocultada quando apenas a média e a curva são apresentadas.

Gráficos de linha ou curvas concentração-resposta são geralmente mais adequados do que gráficos de barras quando o objetivo é mostrar dependência da concentração. Barras podem dificultar a percepção da tendência e tornam a comparação entre grupos menos intuitiva. Quando múltiplos tratamentos são comparados, cada um pode ser representado por uma curva distinta no mesmo gráfico, facilitando a comparação visual dos perfis dose-resposta.

!!! tip "Antes de continuar"

    Por que é importante mostrar pontos individuais por poço, e não apenas a média e a curva ajustada?

    Em que situação gráficos de barras seriam preferíveis a curvas concentração-resposta?

## 4. Resultados descrevem o dado; discussão interpreta

Uma das práticas mais importantes na escrita científica é manter a separação entre resultado e interpretação. Na seção de resultados, o texto deve descrever diretamente a observação experimental. Na discussão, podemos então interpretar biologicamente os resultados.

Por exemplo, na seção de resultados: "Observou-se aumento da porcentagem de células PI-positivas após exposição ao composto." Essa frase descreve diretamente o dado obtido experimentalmente. Já na discussão: "O aumento de células PI-positivas sugere perda de integridade da membrana plasmática e aumento de citotoxicidade." Essa frase interpreta o significado biológico do dado.

A mesma lógica se aplica a ensaios metabólicos. Na seção de resultados: "Houve redução concentração-dependente da atividade metabólica medida por MTT." Na discussão: "A redução da atividade metabólica é consistente com comprometimento da saúde celular após exposição ao material." A separação entre observação e interpretação aumenta o rigor científico e reduz o risco de sobreinterpretação.

!!! info "Sobreinterpretação como fonte de conclusões equivocadas"

    Em ciência quantitativa, interpretar além do que o ensaio realmente mede é uma das fontes mais comuns de conclusões equivocadas. MTT mede capacidade redutora; PI mede permeabilidade de membrana; ATP mede estado energético. Cada um desses ensaios fornece evidência parcial, e a interpretação biológica deve ser proporcional à evidência disponível.

!!! tip "Antes de continuar"

    Reescreva a frase "o tratamento matou 50% das células segundo o MTT" usando linguagem mais precisa.

    Por que a frase "o composto induziu apoptose" é inadequada se o único ensaio utilizado foi Annexin V?

## 5. Framework prático para escrever resultados

Uma forma eficiente de escrever a seção de resultados de ensaios de cell health é seguir uma sequência lógica com cinco elementos: (1) por que o ensaio foi realizado, (2) o que foi medido, (3) a tendência geral observada, (4) a comparação entre os grupos principais, e (5) o IC50 ou a explicação de por que ele não foi determinado.

Essa estrutura pode ser adaptada para qualquer ensaio. Veja um exemplo completo com MTT:

"Para avaliar o impacto inicial das nanopartículas sobre a saúde celular, a atividade metabólica foi quantificada por MTT após 24 h de exposição. O tratamento com AgNPs induziu redução concentração-dependente da atividade metabólica, enquanto AuNPs mantiveram valores próximos ao controle na maior parte da faixa testada. O ajuste logístico indicou IC50 de 22,6 µg/mL para AgNPs. Para AuNPs, a resposta não atingiu 50% dentro da faixa experimental; portanto, o IC50 foi reportado como >100 µg/mL."

Esse exemplo apresenta a métrica, a tendência, a comparação e a interpretação do IC50 sem exagerar a conclusão biológica. A mesma estrutura pode ser aplicada a ensaios baseados em imagem:

"A viabilidade baseada em contagem celular foi avaliada por imagem após marcação com Hoechst e PI. O número de células viáveis foi calculado pela diferença entre núcleos totais e núcleos PI-positivos, seguido de normalização em relação ao controle não tratado. O tratamento X reduziu o viable cell count (% control) de forma concentração-dependente, enquanto o tratamento Y não apresentou redução relevante na faixa testada."

Esse texto deixa claro que a métrica deriva de contagem celular e evita confundir esse resultado com intensidade de fluorescência total ou com ensaios metabólicos. Para ensaios de citotoxicidade baseados em marcadores de núcleo, a mesma lógica se aplica:

"A exposição ao tratamento X aumentou a porcentagem de células PI-positivas de forma concentração-dependente."

Essa frase é preferível a "O tratamento X aumentou a morte celular de forma concentração-dependente", porque descreve a observação experimental em vez de substituí-la pela interpretação biológica.

!!! tip "Antes de continuar"

    Aplique o framework de cinco elementos para escrever um parágrafo de resultados sobre um ensaio de ATP luminescente.

    Por que o segundo exemplo (ensaio de imagem) especifica como a métrica foi calculada, enquanto o primeiro (MTT) não precisa dessa especificação?

## 6. Conectando resultados e discussão

Na discussão, o texto pode avançar da medida experimental para a interpretação biológica. Esse é o momento de discutir o que a redução da viabilidade ou o aumento da positividade para PI sugere sobre saúde celular. É também o momento de integrar os resultados de ensaios ortogonais, como discutimos na aula [Ensaios por categoria e ortogonalidade](../cell-health-ensaios-ortogonais/index.md).

Por exemplo: "A redução da atividade metabólica observada por MTT sugere comprometimento da saúde celular após exposição ao material A. Como o MTT mede capacidade redutora e não morte celular diretamente, esses resultados devem ser interpretados em conjunto com ensaios ortogonais de integridade de membrana." Esse tipo de construção mostra que o autor compreende as limitações do ensaio e busca evidência convergente para sustentar a interpretação.

O uso de linguagem cautelar é importante na discussão. Termos como "sugere", "é consistente com", "pode indicar" ou "corrobora" comunicam que a interpretação é baseada em evidência parcial, enquanto afirmações categóricas como "demonstra" ou "prova" devem ser reservadas para situações em que a evidência é robusta e convergente.

A integração com ensaios ortogonais fortalece a discussão porque reduz a possibilidade de que a interpretação dependa de uma única dimensão do estado celular. Quando MTT, PI e contagem celular apontam na mesma direção, a confiança na interpretação aumenta significativamente. Quando os ensaios divergem, a própria divergência torna-se informativa, pois pode revelar que o tratamento afeta dimensões distintas do estado celular de forma diferenciada.

!!! tip "Antes de continuar"

    Por que é importante usar linguagem cautelar ("sugere", "é consistente com") na discussão de ensaios de cell health?

    Se MTT indica redução de viabilidade mas PI não mostra aumento de células positivas, como você interpretaria essa divergência na discussão?

## 7. Fechamento

Nesta aula vimos que o IC50 é um parâmetro derivado de um ajuste matemático, e que seu cálculo só é confiável quando os dados cobrem adequadamente a curva dose-resposta. A decisão de reportar um valor numérico, um limite superior ou "ND" deve ser baseada na qualidade dos dados, não na conveniência de apresentar um número.

Discutimos também que a escrita de resultados exige separação rigorosa entre medida experimental e interpretação biológica. O gráfico mostra a medida, os resultados descrevem a tendência e a discussão interpreta o significado biológico. Essa regra simples, aplicada consistentemente, aumenta significativamente o rigor científico da comunicação.

Ao longo deste módulo, construímos uma visão integrada da avaliação de saúde celular. Na aula [Conceitos de viabilidade, citotoxicidade e citostase](../cell-health-conceitos-fundamentais/index.md), vimos que viabilidade, citotoxicidade e citostase são conceitos biológicos distintos. Na Aula 5, exploramos os ensaios por categoria e compreendemos o que cada um realmente mede. Na aula [Métricas, cálculos e apresentação gráfica](../cell-health-metricas/index.md), aprendemos a transformar sinais experimentais em métricas quantitativas com nomenclatura precisa. Nesta aula, completamos o ciclo com o ajuste de curvas, a interpretação do IC50 e a escrita rigorosa de resultados. Nas próximas aulas, abordaremos como essas imagens são segmentadas e como os dados fenotípicos são extraídos computacionalmente.

### Exercícios

1. Um tratamento reduz o sinal de MTT para 65% na maior concentração testada (100 µg/mL). Como você reportaria o IC50? Justifique.

2. Um ensaio com PI mostra aumento de 5% para 40% de células positivas. Escreva um parágrafo de resultados descrevendo essa observação sem usar o termo "morte celular".

3. Por que o controle não tratado não deve ser colocado como $\log(0)$ em uma curva concentração-resposta?

4. Em quais situações um IC50 deve ser reportado como "ND"?

5. Reescreva a frase "o tratamento matou 50% das células segundo o MTT" usando linguagem mais precisa, distinguindo medida experimental de interpretação biológica.

### Para aprofundar

- GraphPad Prism — [How exactly are IC50 and EC50 defined?](https://www.graphpad.com/support/faq/50-of-what-how-exactly-are-ic50-and-ec50-defined/) 
- Riss TL, Moravec RA, Niles AL, Duellman S, Benink HA, Worzella TJ, Minor L. [*Cell Viability Assays*.](https://www.ncbi.nlm.nih.gov/books/NBK144065/) Assay Guidance Manual, 2016. 
- Bray MA et al. [Cell Painting, a high-content image-based assay for morphological profiling.](https://doi.org/10.1038/nprot.2016.105) *Nature Protocols* 11:1757–1772, 2016.
- [Pycytominer](https://pycytominer.readthedocs.io) documentation
- [CellProfiler](https://cellprofiler.org) documentation
