# Cell Health — Ensaios por categoria e ortogonalidade

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- descrever as quatro categorias de ensaios de saúde celular segundo a lógica OECD/GIVIMP;
- explicar o princípio biológico dos principais ensaios de cada categoria;
- diferenciar o que cada ensaio mede do que se costuma interpretar;
- identificar vantagens e limitações de ensaios metabólicos, estruturais, proliferativos e baseados em imagem;
- compreender o princípio dos ensaios combinados live:dead no contexto de HCI/HCA;
- discutir por que abordagens ortogonais aumentam a robustez da interpretação biológica.

## 1. Dano estrutural não invasivo

Dano estrutural não invasivo inclui avaliações que procuram evidências de alteração celular sem necessariamente destruir, fixar ou corar as células de forma terminal. Um exemplo clássico é a inspeção morfológica por microscopia de contraste de fase ou campo claro, modalidades que discutimos na Aula 1.

Mudanças em forma celular, retração, arredondamento, perda de adesão, vacuolização, fragmentação, granularidade, confluência ou desorganização da monocamada podem fornecer sinais precoces de perturbação. Essas observações são frequentemente qualitativas quando feitas por inspeção visual, mas podem ser transformadas em métricas quantitativas por HCI/HCA. No contexto de HCA, essa categoria é particularmente importante porque a morfologia deixa de ser apenas "imagem representativa" e passa a ser uma fonte de dados quantitativos, como discutimos na Aula 1.

Medidas de área celular, circularidade, textura, intensidade, distribuição espacial e organização nuclear podem revelar alterações subletais antes de ensaios clássicos detectarem perda de viabilidade. Essa é uma vantagem distintiva do HCA: a morfologia funciona como um sensor sensível de perturbação, mesmo quando ensaios bioquímicos tradicionais ainda não detectam alterações.

O ensaio de LDH também pode ser considerado uma abordagem não invasiva no sentido operacional, pois mede a enzima liberada no sobrenadante sem necessariamente destruir as células restantes. Ele detecta perda de integridade de membrana plasmática, uma vez que células com membrana rompida liberam LDH para o meio extracelular. Apesar de útil, LDH normalmente fornece informação no nível populacional e depende de normalização adequada em relação ao conteúdo total de LDH. Além disso, pode apresentar alto fundo dependendo do meio, do soro, do tipo celular e do tempo de exposição.

!!! tip "Antes de continuar"

    Por que a morfologia celular pode detectar perturbação antes de ensaios bioquímicos tradicionais?

    Qual é a principal limitação do ensaio de LDH como medida de citotoxicidade?

## 2. Dano estrutural invasivo: corantes de exclusão e retenção

Ensaios de dano estrutural invasivo frequentemente utilizam corantes que entram apenas em células com membrana comprometida ou, inversamente, corantes que são retidos em células com membrana funcional. Essa família de métodos é muito importante para HCI/HCA porque pode gerar medidas por célula individual.

Corantes de exclusão, como trypan blue, propidium iodide (PI), ethidium bromide e DRAQ7®, são selecionados porque não atravessam eficientemente membranas plasmáticas intactas. Quando esses corantes entram na célula e marcam estruturas internas, especialmente DNA nuclear, o resultado indica perda de integridade de membrana. No caso de PI e DRAQ7®, a métrica mais rigorosa para resultados é normalmente "células PI-positivas (%)" ou "células DRAQ7-positivas (%)". A interpretação como morte celular ou citotoxicidade pode ser discutida posteriormente, mas a figura deve apresentar o que foi diretamente medido.

DRAQ7® merece destaque porque é compatível com aquisição em tempo real e experimentos live-cell. Como o corante não entra em células saudáveis, ele pode permanecer continuamente presente no meio, permitindo monitorar a dinâmica de perda de membrana ao longo do tempo. No contexto de HCA, DRAQ7® é particularmente útil porque fornece uma leitura espacial célula a célula e pode ser multiplexado com outros marcadores fenotípicos.

Por outro lado, corantes como fluorescein diacetate, Calcein-AM e Calcein Violet dependem de entrada na célula, conversão por esterases e retenção intracelular. Assim, eles informam uma combinação de atividade enzimática, integridade de membrana e capacidade de retenção do produto fluorescente. Calcein Violet segue princípio semelhante ao Calcein-AM, mas em um espectro de emissão diferente, permitindo multiplexação com outros fluoróforos.

Esses corantes são frequentemente utilizados em combinação com marcadores de morte celular. Por exemplo, Hoechst pode fornecer o número total de núcleos, PI pode indicar células com membrana comprometida, e Calcein-AM pode indicar células com atividade esterase e retenção intracelular. Essa combinação torna o ensaio muito adequado para HCI/HCA porque transforma uma simples aquisição de microscopia em uma plataforma multiparamétrica de análise celular.


!!! tip "Nomenclatura correta"

    Em ensaios baseados em imagem, prefira nomear a métrica pelo que foi medido: "células PI-positivas (%)", "células Calcein-positivas (%)" ou "contagem de células viáveis (% controle)". Termos como "morte celular" e "citotoxicidade" devem aparecer como interpretação, não como substitutos automáticos da medida.

!!! tip "Antes de continuar"

    Por que PI e DRAQ7® são considerados corantes de exclusão?

    O que Calcein-AM realmente mede? Por que não é correto chamá-lo de "marcador de células vivas" sem ressalvas?

## 3. Marcadores de morte celular programada

Marcadores de apoptose e morte celular programada adicionam uma camada mecanística à avaliação de citotoxicidade. Exemplos incluem ativação de caspases, exposição de fosfatidilserina detectada por Annexin V, fragmentação de DNA por TUNEL e alterações nucleares associadas à condensação de cromatina.

Esses marcadores são úteis porque podem indicar mecanismos celulares específicos, e não apenas perda geral de integridade. Em HCI/HCA, eles podem ser combinados com medidas morfológicas e contagem celular para avaliar se a perturbação induz fenótipos compatíveis com apoptose, necrose, necroptose ou outros processos. Essa capacidade de discriminação mecanística é uma vantagem importante sobre ensaios que apenas detectam perda de função global.

Entretanto, esses ensaios raramente devem ser usados isoladamente como medida geral de citotoxicidade. Nem toda morte celular ativa o mesmo marcador, e alguns endpoints são temporais ou transitórios. Annexin V, por exemplo, pode indicar exposição de fosfatidilserina, mas não define sozinho o destino final da célula — uma célula Annexin V-positiva pode ainda recuperar-se ou seguir para diferentes vias de morte.

Assim, marcadores de morte celular programada devem ser interpretados como uma camada mecanística complementar. Eles são particularmente fortes quando convergem com medidas gerais de dano celular, como PI, DRAQ7®, LDH ou redução da contagem de células viáveis. A convergência entre marcadores mecanísticos e medidas gerais de dano aumenta significativamente a confiança na interpretação biológica.


!!! tip "Antes de continuar"

    Por que Annexin V sozinho não é suficiente para concluir que uma célula está em apoptose?

    Qual é a vantagem de combinar marcadores de morte programada com medidas gerais de dano celular?

## 4. Crescimento celular, proliferação e biomassa

A terceira categoria destacada pela organização OECD/GIVIMP envolve crescimento celular. Essa categoria é fundamental porque muitos tratamentos reduzem o número final de células não por matar rapidamente as células, mas por desacelerar ou interromper a proliferação — exatamente a situação de citostase que discutimos na Aula 4.

A medida mais direta de crescimento é a contagem celular. Em HCI/HCA, isso geralmente é feito por segmentação nuclear, usando marcadores como Hoechst ou DAPI. A contagem por poço pode ser usada como proxy de densidade celular e, quando normalizada ao controle, pode informar redução de crescimento ou perda de células. Retomando a discussão da Aula 1, é importante lembrar que a unidade experimental é o poço, não a célula individual — portanto, a contagem celular por poço deve ser tratada como uma observação dentro da unidade experimental.

Ensaios de incorporação de nucleosídeos, como BrdU e EdU, medem síntese de DNA e permitem estimar a fração de células em proliferação. Eles são particularmente úteis quando a pergunta envolve ciclo celular, expansão populacional ou citostase. EdU tem vantagem operacional sobre BrdU porque não requer desnaturação do DNA para detecção, o que simplifica o protocolo e preserva melhor a morfologia celular.

Outra forma de estimar crescimento é medir componentes celulares proporcionais à massa celular total. Sulforhodamine B (SRB), crystal violet, conteúdo proteico total e conteúdo de DNA são exemplos dessa abordagem. Esses ensaios podem ser simples e robustos, mas normalmente refletem biomassa populacional, não necessariamente número exato de células vivas.

A interpretação dessa categoria exige cautela. Redução de crescimento pode ser um sinal sensível de comprometimento celular, mas não é equivalente a morte celular. Uma cultura pode ter menor número de células porque as células morreram, porque proliferaram menos, porque se soltaram da placa, ou porque aumentaram de tamanho sem se dividir. Cada uma dessas situações tem implicações biológicas distintas.

!!! tip "Antes de continuar"

    Por que redução de contagem celular não é sinônimo de citotoxicidade?

    Qual é a vantagem do EdU sobre o BrdU em experimentos de HCI/HCA?

## 5. Metabolismo e função celular

A quarta categoria reúne ensaios baseados em metabolismo e função celular. Esses métodos são muito populares porque são rápidos, escaláveis e compatíveis com placas de múltiplos poços. No entanto, eles normalmente medem função celular, não morte celular diretamente.

Ensaios de tetrazólio, como MTT, MTS, XTT, WST-1 e WST-8, baseiam-se na redução de sais de tetrazólio por células metabolicamente ativas, gerando produtos detectáveis por absorbância. O ensaio de MTT, descrito por Mosmann em 1983, utiliza um sal de tetrazólio que é reduzido principalmente por enzimas mitocondriais, formando cristais insolúveis de formazan. Diversos derivados foram desenvolvidos posteriormente — MTS, XTT, WST-1, WST-8 — buscando superar limitações do teste original, como gerar produtos mais solúveis e operacionalmente mais simples. A resazurina, também conhecida comercialmente como Alamar Blue em algumas formulações, segue lógica semelhante: é reduzida a resorufina por células metabolicamente ativas, gerando um produto fluorescente.


!!! warning "MTT mede metabolismo, não viabilidade direta"

    Redução do sinal de MTT não significa necessariamente morte celular. O ensaio mede capacidade redutora/metabólica do sistema celular. Alterações metabólicas podem ocorrer independentemente de morte celular, especialmente em experimentos envolvendo mitocôndria, estresse oxidativo ou reprogramação metabólica. Além disso, alterações no ciclo celular impactam a viabilidade medida pelo MTT e derivados, porque células em diferentes fases do ciclo apresentam taxas metabólicas distintas.

Ensaios baseados em potencial mitocondrial, como TMRE, JC-1, TMRM ou MitoTracker dependente de potencial, avaliam uma dimensão específica da função mitocondrial. TMRE (tetramethylrhodamine ethyl ester) é um corante catiônico que se acumula em mitocôndrias polarizadas. Quando ocorre perda de potencial mitocondrial, o acúmulo de TMRE diminui. Isso torna o ensaio particularmente útil para detectar disfunção mitocondrial precoce, frequentemente antes de eventos irreversíveis de morte celular. No contexto de HCA, TMRE é especialmente valioso porque fornece informação funcional subcelular e pode ser combinado com outras medidas fenotípicas. Entretanto, deve-se evitar interpretar perda de TMRE como morte celular direta, já que alterações mitocondriais podem ser reversíveis.

ATP luminescente mede o conteúdo total de ATP de uma população celular através da reação luciferina-luciferase. Como ATP é rapidamente perdido em células metabolicamente comprometidas, esse ensaio é altamente sensível e apresenta ampla faixa dinâmica, o que o torna muito utilizado em high-throughput screening. Entretanto, ele continua sendo uma medida populacional de estado energético, não uma medida direta de morte celular. Alterações metabólicas transitórias podem reduzir ATP sem induzir citotoxicidade irreversível.

Neutral Red Uptake (NRU) é um ensaio de função organelar baseado na captação e acúmulo do corante Neutral Red em lisossomos de células viáveis. Células metabolicamente ativas e com função lisossomal preservada acumulam o corante, que depois pode ser extraído e medido por espectrofotometria. A principal vantagem do NRU é ser um método relativamente simples, de baixo custo e com histórico de uso em protocolos padronizados, incluindo contextos de avaliação toxicológica.

!!! warning "NRU e interferência lisossomal"

    Neutral Red Uptake mede captação/acúmulo lisossomal em células funcionais. Se o tratamento afeta diretamente lisossomos, endocitose, acidificação vesicular ou tráfego intracelular, a queda do sinal pode refletir alteração lisossomal e não apenas perda global de viabilidade. Essa limitação é especialmente relevante para nanomateriais, partículas e compostos que interagem com endossomos e lisossomos — em muitos estudos de nanotoxicologia, alterações lisossomais podem ser parte do mecanismo de ação, o que torna o NRU informativo, mas também potencialmente suscetível a interpretações ambíguas.


!!! tip "Antes de continuar"

    Por que MTT e ATP não devem ser chamados de "ensaios de morte celular"?

    Um nanomaterial reduz o sinal de NRU. Cite uma interpretação que não envolva perda global de viabilidade.

    Por que a perda de sinal de TMRE não deve ser interpretada como morte celular irreversível?

## 6. Ensaios ortogonais: combinando dimensões

A escolha do ensaio deve partir da pergunta biológica e do tipo de perturbação esperada. Se o objetivo é avaliar dano de membrana, PI, DRAQ7® ou LDH são mais diretamente informativos. Se o objetivo é avaliar função metabólica, MTT, resazurina, ATP ou TMRE podem ser mais adequados. Se o objetivo é detectar citostase, contagem celular, EdU ou conteúdo de DNA são mais informativos.

Uma única medida raramente é suficiente para concluir de forma robusta que um tratamento é citotóxico. A combinação de medidas ortogonais aumenta a confiança porque reduz a chance de que o resultado seja explicado apenas por interferência técnica ou por uma dimensão isolada da fisiologia celular. Quando diferentes métodos apontam para a mesma direção biológica, a interpretação torna-se significativamente mais robusta.

Uma estratégia forte é combinar uma medida populacional com uma medida baseada em imagem. Por exemplo, MTT ou resazurina podem ser combinados com contagem nuclear e PI. Alternativamente, ATP pode ser combinado com DRAQ7® ou TMRE com contagem celular e morfologia. Além disso, abordagens ortogonais ajudam a identificar situações em que um ensaio específico está sendo afetado por interferências técnicas ou biológicas inesperadas.

No contexto de HCI/HCA, uma combinação particularmente informativa é integrar contagem celular, células PI-positivas, intensidade/positividade de Calcein-AM e morfologia. Essa estratégia permite separar redução de sinal metabólico, perda de membrana, redução de número de células e remodelamento fenotípico — quatro dimensões que frequentemente são confundidas quando um único ensaio é utilizado.

!!! tip "Antes de continuar"

    Por que uma única medida de viabilidade raramente é suficiente para concluir que um tratamento é citotóxico?

    Proponha uma combinação ortogonal de ensaios para avaliar se um nanomaterial é citotóxico, justificando cada escolha.

## 7. Fechamento

Nesta aula exploramos as quatro categorias de ensaios de saúde celular segundo a lógica OECD/GIVIMP: dano estrutural não invasivo, dano estrutural invasivo, crescimento celular e metabolismo/função celular. Para cada categoria, discutimos os principais ensaios, o que eles realmente medem e quais são suas limitações.

Vimos que ensaios metabólicos como MTT medem capacidade redutora, não viabilidade direta; que corantes de exclusão como PI medem permeabilidade de membrana, não morte celular; e que marcadores de morte programada como Annexin V são camadas mecanísticas complementares, não substitutos de medidas gerais de dano. Também discutimos que a combinação ortogonal de ensaios aumenta significativamente a robustez da interpretação biológica.

Na próxima aula, abordaremos como transformar os sinais experimentais desses ensaios em métricas quantitativas: como normalizar, como calcular viabilidade e citotoxicidade, e como apresentar gráficos com nomenclatura precisa.

### Exercícios

1. Compare o princípio biológico de TMRE, Neutral Red Uptake e DRAQ7®. O que cada um mede e por que podem produzir resultados diferentes para o mesmo tratamento?

2. Explique por que a redução do sinal de MTT não implica necessariamente morte celular, citando ao menos dois mecanismos biológicos alternativos.

3. Descreva como um ensaio combinado live:dead utilizando Hoechst, PI e Calcein-AM permite obter múltiplas métricas a partir da mesma imagem. Quais métricas podem ser derivadas?

4. Discuta vantagens de combinar ensaios metabólicos e ensaios baseados em imagem para avaliação de citotoxicidade.

5. Classifique os seguintes ensaios segundo as categorias OECD/GIVIMP: LDH, EdU, SRB, MTT, Neutral Red Uptake, Calcein-AM, contagem nuclear por HCI, TMRE e Annexin V.

6. Um pesquisador observa que um composto reduz o sinal de MTT mas não aumenta a proporção de células PI-positivas. Proponha uma interpretação biológica e sugira ensaios complementares para testá-la.

### Para aprofundar

- OECD. [*Guidance Document on Good In Vitro Method Practices (GIVIMP)*.](https://www.oecd.org/en/publications/guidance-document-on-good-in-vitro-method-practices-givimp_9789264304796-en.html) OECD Series on Testing and Assessment No. 286, 2018.
- Riss TL, Moravec RA, Niles AL, Duellman S, Benink HA, Worzella TJ, Minor L. [*Cell Viability Assays*.](https://www.ncbi.nlm.nih.gov/books/NBK144065/) Assay Guidance Manual, 2016. 
- Mosmann T. [Rapid colorimetric assay for cellular growth and survival: application to proliferation and cytotoxicity assays](- [10.1016/0022-1759(83)90303-4](https://doi.org/10.1016/0022-1759\(83\)90303-4)). *Journal of Immunological Methods* 65(1-2):55–63, 1983.
- Borenfreund E, Puerner JA. [Toxicity determined in vitro by morphological alterations and neutral red absorption.](- [10.1016/0378-4274(85)90046-3](https://doi.org/10.1016/0378-4274\(85\)90046-3)) *Toxicology Letters* 24(2):119–124, 1985.
