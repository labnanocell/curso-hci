# Cell Health — Métricas, cálculos e apresentação gráfica

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- distinguir medida experimental, processamento matemático e interpretação biológica;
- organizar dados brutos de ensaios de viabilidade e citotoxicidade antes da análise;
- calcular métricas de viabilidade e citotoxicidade com subtração de branco e normalização adequadas;
- compreender por que a nomenclatura do eixo Y deve refletir exatamente o que foi medido;
- justificar o uso de escala logarítmica para concentração no eixo X;
- apresentar gráficos de cell health com nomenclatura precisa e organização em painéis.

## 1. Antes de calcular: o que foi realmente medido?

O primeiro passo antes de calcular qualquer métrica é identificar qual variável experimental foi diretamente medida pelo ensaio. Essa etapa parece óbvia, mas é uma das principais fontes de erros conceituais em trabalhos científicos. Em muitos artigos, o nome do gráfico não corresponde exatamente ao que foi medido.

No MTT, por exemplo, o que é medido é absorbância gerada pela redução do tetrazólio. Em ensaios de ATP, o sinal corresponde à luminescência associada ao conteúdo energético celular. Em DRAQ7® ou PI, mede-se número de células positivas para um marcador impermeável à membrana. Isso significa que o ensaio não mede diretamente "viabilidade celular" ou "morte celular" — essas interpretações surgem posteriormente, a partir do contexto biológico do experimento.

Essa distinção pode ser organizada em três camadas. A primeira é a medida experimental: o sinal bruto capturado pelo instrumento (absorbância, fluorescência, luminescência, contagem de objetos). A segunda é o processamento matemático: subtração de branco, normalização, cálculo de porcentagem. A terceira é a interpretação biológica: o significado que atribuímos ao resultado processado. Confundir essas camadas é uma das fontes mais comuns de sobreinterpretação em ensaios de cell health.

!!! warning "Tríade: medida, processamento, interpretação"
    Sempre diferencie:

    - **Medida experimental**: o que o instrumento registrou (absorbância, contagem de células PI-positivas, luminescência).
    - **Processamento matemático**: normalização, subtração de branco, cálculo de porcentagem.
    - **Interpretação biológica**: o significado biológico atribuído ao resultado (viabilidade, citotoxicidade, morte celular).

    O gráfico deve mostrar a medida. Os resultados devem descrever a tendência. A discussão deve interpretar o significado biológico.

!!! tip "Antes de continuar"

    No ensaio de MTT, qual é a medida experimental, qual é o processamento e qual é a interpretação biológica?

    Por que é problemático intitular um gráfico de "Cell death (%)" quando o ensaio mede PI?

## 2. Unidade experimental e organização dos dados

Antes de calcular médias, normalizar dados ou ajustar curvas, é necessário definir qual é a unidade experimental. Em ensaios em placa, a unidade experimental normalmente é o poço, não a célula individual e não o campo de imagem. Retomando a discussão da Aula 1, campos de imagem dentro do mesmo poço são subamostras técnicas — eles ajudam a estimar melhor o valor daquele poço, mas não substituem réplicas independentes.

Portanto, para análise estatística e ajuste de curva, o ideal é primeiro agregar os campos por poço. Essa distinção é especialmente importante em HCI/HCA. Um experimento pode gerar milhares de células segmentadas, mas isso não significa que existam milhares de réplicas biológicas independentes. A inferência estatística deve respeitar o desenho experimental.

A primeira tabela de análise deve conter, no mínimo, as informações necessárias para rastrear cada medida experimental. Isso inclui placa, dia experimental, poço, tratamento, concentração, tempo de exposição, réplica biológica e sinal medido. Para ensaios de leitura em placa, o sinal pode ser absorbância, fluorescência ou luminescência. Para ensaios baseados em imagem, o sinal pode ser número total de núcleos, número de células positivas para PI, número de células Calcein-positivas ou intensidade média por célula.

Essa organização evita um problema comum: começar a análise diretamente com valores já normalizados, sem preservar o dado original. O dado bruto é essencial para verificar erros de aquisição, problemas de placa, efeitos técnicos e inconsistências entre réplicas.

!!! tip "Antes de continuar"

    Por que campos de imagem dentro do mesmo poço não são réplicas biológicas independentes?

    Por que é importante preservar o dado bruto antes da normalização?

## 3. Subtração de branco e normalização

Em ensaios baseados em absorbância, fluorescência ou luminescência, normalmente é necessário subtrair o branco. O branco representa o sinal do meio, reagente ou placa na ausência de células, e sua remoção evita que o sinal basal seja interpretado como resposta celular.

Após a subtração do branco, a resposta pode ser normalizada em relação ao controle não tratado. Essa etapa transforma o sinal em porcentagem do controle, facilitando a comparação entre placas e experimentos independentes. Para ensaios como MTT, MTS, XTT, WST-1, resazurina ou ATP, a fórmula geral é:

$$
\text{Resposta normalizada (% controle)} = \frac{\text{sinal tratado} - \text{sinal branco}}{\text{sinal controle} - \text{sinal branco}} \times 100
$$

A interpretação dessa métrica depende do ensaio. Em MTT, ela representa atividade metabólica relativa. Em resazurina, representa capacidade redutora relativa. Em ATP, representa conteúdo energético relativo. Por isso, o nome do eixo Y deve indicar a métrica de forma precisa: "Metabolic activity (% control)" para MTT, "ATP levels (% control)" para ATP e não simplesmente "Cell viability (% control)" para todos.

!!! tip "Antes de continuar"

    Por que a subtração do branco é necessária antes da normalização?

    Se dois ensaios diferentes (MTT e ATP) são normalizados da mesma forma, por que os eixos Y devem ter nomes diferentes?

## 4. Viabilidade baseada em contagem celular

Em ensaios de imagem, a viabilidade pode ser calculada a partir de contagens celulares. Um exemplo comum é o ensaio combinado com Hoechst, PI e Calcein-AM, que discutimos na Aula 5. Nesse caso, Hoechst marca os núcleos totais, PI marca células com perda de integridade de membrana e Calcein-AM pode indicar células com atividade esterase e retenção intracelular do corante.

A métrica de viabilidade pode ser derivada do número de células viáveis por poço. Uma forma comum de cálculo é:

$$
\text{células viáveis} = \text{núcleos Hoechst-positivos} - \text{núcleos PI-positivos}
$$

Em seguida, a viabilidade relativa pode ser calculada como:

$$
\text{Viable cell count (% control)} = \frac{\text{células viáveis tratadas}}{\text{células viáveis controle}} \times 100
$$

Contagem de células viáveis (% controle) (*Viable cell count (% control)*) é mais precisa do que simplesmente "viabilidade celular" (*cell viability*), porque deixa claro que a métrica deriva de contagem celular baseada em imagem. Ela também diferencia esse resultado de ensaios baseados em intensidade total, como MTT ou fluorescência total de Calcein. Essa distinção na nomenclatura não é pedante — ela comunica ao leitor exatamente como o dado foi obtido.

!!! tip "Antes de continuar"

    Por que "Viable cell count (% control)" é mais preciso que "Cell viability (% control)" para ensaios baseados em imagem?

    Um pesquisador calcula viabilidade como (núcleos totais − PI-positivos) / (núcleos totais controle − PI-positivos controle) × 100. O que essa métrica representa em termos biológicos?

## 5. Citotoxicidade baseada em células positivas

Para ensaios como PI ou DRAQ7®, a métrica mais direta geralmente é a porcentagem de células positivas. Nesse caso, o cálculo deve refletir exatamente o que foi medido.

$$
\text{PI-positive cells (%)} = \frac{\text{núcleos PI-positivos}}{\text{núcleos Hoechst-positivos}} \times 100
$$

Essa métrica descreve a observação experimental: a fração de células com marcação positiva para PI. Na seção de resultados, essa é a forma mais rigorosa de apresentar o dado. A interpretação biológica pode aparecer depois, principalmente na discussão. Um aumento de células PI-positivas é consistente com perda de integridade da membrana plasmática e aumento de citotoxicidade, mas PI sozinho não distingue mecanismos específicos de morte celular.

!!! tip "Descreva a medida; interprete depois"

    No gráfico e nos resultados, descreva a medida experimental: "PI-positive cells (%)", "DRAQ7-positive cells (%)". Na discussão, interprete o significado biológico: "perda de integridade de membrana compatível com citotoxicidade". Essa separação aumenta o rigor científico e reduz o risco de sobreinterpretação.

!!! tip "Antes de continuar"

    Por que "PI-positive cells (%)" é uma descrição mais rigorosa que "Cell death (%)"?

    Um aumento de 5% para 40% de células PI-positivas é observado. Como você descreveria esse resultado sem usar o termo "morte celular"?

## 6. Concentração no eixo X: escala logarítmica

Curvas concentração-resposta devem ser apresentadas com a concentração no eixo X em escala logarítmica. Isso facilita a visualização de respostas que ocorrem em diferentes ordens de magnitude e melhora a interpretação da região de transição da curva.

A escala logarítmica é particularmente importante quando as concentrações foram planejadas em diluições seriadas, como 0,1; 1; 10; 100 µg/mL. Nesses casos, a distância visual entre os pontos deve refletir a razão entre concentrações, não a diferença absoluta. Sem escala logarítmica, pontos em concentrações baixas ficam comprimidos próximos à origem, enquanto pontos em concentrações altas dominam o gráfico, distorcendo a percepção da relação dose-resposta.

Entretanto, concentração zero não pode ser representada em escala logarítmica. O controle não tratado pode ser apresentado na legenda com desvio padrão ou como um ponto separado, como "Control", "Untreated" ou "0" em eixo categórico separado, mas não como log(0).

!!! warning "Nunca use log(0)"

    Concentração zero é indefinida em escala logarítmica. O controle não tratado deve ser apresentado como ponto separado ou indicado na legenda, nunca como log(0) no eixo X.

!!! tip "Antes de continuar"

    Por que diluições seriadas (0,1; 1; 10; 100) devem ser apresentadas em escala logarítmica?

    Como você representaria o controle não tratado em um gráfico com eixo X logarítmico?

## 7. Como apresentar gráficos de cell health

Uma das práticas mais importantes em apresentação de dados é garantir que o eixo Y descreva exatamente o que foi medido. Essa prática parece simples, mas é frequentemente violada na literatura. Ensaios metabólicos são apresentados como "viabilidade celular", enquanto medidas de permeabilidade de membrana aparecem diretamente como "morte celular".

A nomenclatura correta do eixo Y deve refletir a métrica calculada. Para MTT, o eixo Y pode ser "Metabolic activity (% control)" ou "Cell viability (% control)", desde que o texto deixe claro que se trata de um ensaio metabólico. Para ATP, é mais preciso usar "ATP levels (% control)". Para PI, o melhor é "PI-positive cells (%)". Para contagem baseada em imagem, "Viable cell count (% control)" é uma opção clara.

Uma estratégia muito útil é separar visualmente ensaios metabólicos e ensaios de citotoxicidade em painéis distintos. Por exemplo, o Painel A pode apresentar MTT com eixo Y "Metabolic activity (% control)", o Painel B ATP com "ATP levels (% control)", o Painel C PI com "PI-positive cells (%)", e o Painel D o ensaio live:dead com "Viable cell count (% control)". Essa organização ajuda o leitor a compreender imediatamente quais dimensões biológicas estão sendo avaliadas.

Gráficos de linha ou curvas concentração-resposta são geralmente mais adequados do que gráficos de barras quando o objetivo é mostrar dependência da concentração. Barras podem dificultar a percepção da tendência e tornam a comparação entre grupos menos intuitiva. Em experimentos de HCA, frequentemente é útil também apresentar número absoluto de células, número de objetos segmentados, distribuição celular e variabilidade entre poços, especialmente quando alterações de densidade celular podem influenciar análises fenotípicas posteriores.

!!! tip "Antes de continuar"

    Cite um exemplo de eixo Y problemático e explique por que é problemático.

    Por que curvas concentração-resposta são preferíveis a gráficos de barras para mostrar dependência de concentração?

## 8. Fechamento

Nesta aula vimos que a transformação do sinal experimental em métrica biologicamente interpretável exige cuidado em cada etapa. Antes de calcular, é preciso identificar o que foi realmente medido; antes de normalizar, é preciso subtrair o branco e definir a unidade experimental; e antes de apresentar, é preciso nomear eixos e organizar painéis com precisão.

Discutimos também que a nomenclatura do eixo Y deve refletir exatamente a métrica calculada, e que a escala logarítmica é essencial para curvas concentração-resposta. Essas práticas não são meramente estéticas — elas comunicam ao leitor como o dado foi obtido e evitam interpretações equivocadas.

Na próxima aula, abordaremos o ajuste de curvas dose-resposta, o cálculo e a interpretação do IC50, e como escrever resultados e discussão de forma rigorosa, separando medida experimental de interpretação biológica.

### Exercícios

1. Explique por que "PI-positive cells (%)" é uma descrição mais rigorosa do que "Cell death (%)".

2. Discuta vantagens e limitações de normalizar ensaios em relação ao controle não tratado.

3. Compare "Cell viability (% control)" e "Viable cell count (% control)". Em que contexto cada um é mais adequado?

4. Explique por que ATP luminescente não mede diretamente viabilidade celular, e proponha uma nomenclatura mais precisa para o eixo Y.

5. Proponha uma organização de figura contendo MTT, PI e TMRE para um experimento de toxicologia, indicando a nomenclatura de cada eixo Y.

### Para aprofundar

- Riss TL, Moravec RA, Niles AL, Duellman S, Benink HA, Worzella TJ, Minor L. [*Cell Viability Assays*.](https://www.ncbi.nlm.nih.gov/books/NBK144065/) Assay Guidance Manual, 2016. 
- GraphPad Prism — [How exactly are IC50 and EC50 defined?](https://www.graphpad.com/support/faq/50-of-what-how-exactly-are-ic50-and-ec50-defined/) 
- Schmied, C., Nelson, M.S., Avilov, S. _et al._ [Community-developed checklists for publishing images and image analyses.](https://doi.org/10.1038/s41592-023-01987-9) _Nat Methods_ **21**, 170–181 (2024). 
