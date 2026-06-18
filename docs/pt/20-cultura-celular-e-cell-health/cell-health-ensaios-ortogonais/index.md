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

Esta categoria inclui métodos que procuram identificar alterações na morfologia, adesão, distribuição ou organização celular sem a necessidade de destruir, fixar ou marcar as células de forma terminal. Um exemplo clássico é a inspeção morfológica por microscopia de campo claro ou contraste de fase, modalidades que discutimos na aula [Microscopia — fundamentos de óptica para HCA](../../10-microscopia-e-aquisicao/microscopia-fundamentos/index.md)⁠.

Alterações que poderiam ser observadas nessa categoria incluem  arredondamento celular, retração do citoplasma, perda de adesão, formação de vacúolos, redução da confluência ou mudanças na organização do monocamada podem indicar estresse celular, citotoxicidade ou alterações funcionais induzidas por um tratamento. 

Essas observações são frequentemente qualitativas quando feitas por inspeção visual, mas podem ser transformadas em métricas quantitativas por HCI/HCA. No contexto de HCA, essa categoria é particularmente importante porque a morfologia deixa de ser apenas "imagem representativa" e passa a ser uma fonte de dados quantitativos, como discutimos na aula [Microscopia — fundamentos de óptica para HCA](../../10-microscopia-e-aquisicao/microscopia-fundamentos/index.md).

Medidas de área celular, circularidade, textura, intensidade, distribuição espacial e organização nuclear podem revelar alterações subletais antes de ensaios clássicos detectarem perda de viabilidade. Essa é uma vantagem distintiva do HCA: a morfologia funciona como um sensor sensível de perturbação, mesmo quando ensaios bioquímicos tradicionais ainda não detectam alterações.

O ensaio de LDH também pode ser considerado uma abordagem não invasiva no sentido operacional, pois mede a enzima liberada no sobrenadante sem necessariamente destruir as células restantes. Ele detecta perda de integridade de membrana plasmática, uma vez que células com membrana rompida liberam LDH para o meio extracelular. Apesar de útil, LDH normalmente fornece informação no nível populacional e depende de normalização adequada em relação ao conteúdo total de LDH. Além disso, pode apresentar alto fundo dependendo do meio, do soro, do tipo celular e do tempo de exposição.

!!! tip "Antes de continuar"

    Por que a morfologia celular pode detectar perturbação antes de ensaios bioquímicos tradicionais?

    Qual é a principal limitação do ensaio de LDH como medida de citotoxicidade?

## 2. Dano estrutural invasivo: corantes de exclusão e retenção

Ensaios de dano estrutural invasivo frequentemente utilizam corantes que entram apenas em células com membrana comprometida ou, inversamente, corantes que são retidos em células com membrana funcional. Essa família de métodos é muito importante para HCI/HCA porque pode gerar medidas por célula individual.

Corantes de exclusão, como trypan blue, propidium iodide (PI), ethidium bromide e DRAQ7®, são usados porque não atravessam eficientemente membranas plasmáticas intactas. Quando esses corantes entram na célula e marcam estruturas internas, especialmente DNA nuclear, o resultado indica perda de integridade de membrana. No caso de PI e DRAQ7®, a métrica mais rigorosa para resultados é normalmente "células PI-positivas (%)" ou "células DRAQ7-positivas (%)". A interpretação como morte celular ou citotoxicidade pode ser discutida posteriormente, mas a figura deve apresentar o que foi diretamente medido.

!!! tip "Nem todo corante nuclear se comporta da mesma forma"

    A permeabilidade de um corante ao DNA depende de suas propriedades químicas e do tipo celular analisado. Alguns corantes nucleares, como o Hoechst 33342, conseguem atravessar membranas plasmáticas intactas e, por isso, são amplamente utilizados para marcação nuclear em células vivas. Outros membros da família Hoechst apresentam permeabilidade reduzida e são mais frequentemente utilizados após fixação celular.

    De forma semelhante, embora o DAPI seja frequentemente descrito como impermeável à membrana plasmática, sua entrada pode ocorrer em alguns tipos celulares ou sob determinadas condições experimentais. Por esse motivo, a presença de marcação nuclear por DAPI não deve ser interpretada automaticamente como evidência de morte celular.

DRAQ7® merece destaque porque é compatível com aquisição em tempo real e experimentos live-cell. Como o corante não entra em células saudáveis, ele pode permanecer continuamente presente no meio, permitindo monitorar a dinâmica de perda de membrana ao longo do tempo. No contexto de HCA, DRAQ7® é particularmente útil porque fornece uma leitura espacial célula a célula e pode ser multiplexado com outros marcadores fenotípicos.

Por outro lado, corantes como fluorescein diacetate, Calcein-AM e Calcein Violet dependem de entrada na célula, conversão por esterases e retenção intracelular. Assim, eles informam uma combinação de atividade enzimática, integridade de membrana e capacidade de retenção do produto fluorescente. Calcein Violet segue princípio semelhante ao Calcein-AM, mas em um espectro de emissão diferente, permitindo multiplexação com outros fluoróforos.

Esses corantes são frequentemente utilizados em combinação com marcadores de morte celular. Por exemplo, Hoechst pode fornecer o número total de núcleos, PI pode indicar células com membrana comprometida, e Calcein-AM pode indicar células com atividade esterase e retenção intracelular. Essa combinação torna o ensaio muito adequado para HCI/HCA porque transforma uma simples aquisição de microscopia em uma plataforma multiparamétrica de análise celular.


!!! tip "Nomenclatura correta"

    Em ensaios baseados em imagem, prefira nomear a métrica pelo que foi efetivamente medido: "células PI-positivas (%)", "células Calcein-positivas (%)" ou "contagem de células (% controle)". Termos como "morte celular", "citotoxicidade" ou "viabilidade" devem ser utilizados como interpretações biológicas e não como substitutos automáticos da medida experimental.

!!! tip "Antes de continuar"

    - Por que PI e DRAQ7® são chamados de corantes de exclusão? Qual propriedade celular eles exploram para gerar sinal?

    - O que Calcein-AM mede diretamente? Quais etapas biológicas precisam ocorrer para que uma célula se torne Calcein-positiva?

    - Uma célula pode ser Calcein-positiva e, ainda assim, não estar completamente saudável? Explique.

    - Por que "células PI-positivas (%)" é uma descrição mais rigorosa do resultado experimental do que "morte celular (%)"?
## **3. Marcadores de morte celular programada**

A área de morte celular é uma das mais dinâmicas da biologia celular moderna. Durante muitos anos, a discussão foi dominada pela distinção entre apoptose e necrose. Nas últimas décadas, entretanto, diversos mecanismos adicionais foram descritos, incluindo necroptose, piroptose, ferroptose, morte celular dependente de autofagia, cuproptose e outros processos regulados. Como consequência, a classificação da morte celular continua evoluindo à medida que novos mecanismos são descobertos e melhor compreendidos.

Nesse contexto, é importante entender que marcadores de morte celular programada não devem ser vistos como testes definitivos para um determinado mecanismo. Em vez disso, eles representam ferramentas que fornecem evidências sobre processos biológicos específicos. Entre os marcadores mais utilizados estão a ativação de caspases, a exposição de fosfatidilserina detectada por Annexin V, a fragmentação de DNA por TUNEL, alterações nucleares associadas à condensação de cromatina e proteínas relacionadas a vias específicas de morte celular.

Esses marcadores adicionam uma dimensão mecanística importante aos estudos de citotoxicidade e saúde celular. Em HCI/HCA, eles podem ser combinados com medidas morfológicas, contagem celular, integridade de membrana e outros parâmetros fenotípicos para construir uma visão mais abrangente da resposta celular. Essa integração é particularmente valiosa porque diferentes mecanismos de morte podem compartilhar marcadores semelhantes, enquanto um mesmo marcador pode aparecer em processos biológicos distintos.

Por esse motivo, a interpretação de marcadores de morte celular exige cautela. Muitos eventos associados à morte celular são temporais e transitórios, podendo ocorrer apenas em janelas específicas do experimento. Além disso, alguns marcadores podem ser observados em células que ainda não completaram o processo de morte ou até mesmo em situações de estresse celular reversível. Annexin V, por exemplo, detecta exposição de fosfatidilserina, mas sua positividade isolada não é suficiente para concluir que uma célula está em apoptose nem para determinar seu destino final, além de ser compartilhada por diversos mecanismos de morte.

Atualmente, existe amplo consenso na área de que a caracterização mecanística da morte celular não deve ser baseada em um único marcador. As recomendações da _Nomenclature Committee on Cell Death_ (NCCD) enfatizam a importância de utilizar múltiplas linhas independentes de evidência, incluindo alterações morfológicas, marcadores moleculares, medidas funcionais e, quando apropriado, abordagens farmacológicas ou genéticas. Em outras palavras, a confiança na interpretação aumenta quando diferentes observações convergem para a mesma conclusão biológica.

![Os mecanismos ilustrados representam alguns dos programas de morte celular regulada mais amplamente investigados na literatura científica contemporânea.](../../assets/img/cell-death-pt.webp)

Para os objetivos deste curso, o mais importante é compreender que marcadores de morte celular programada representam uma camada adicional de informação mecanística. Eles complementam medidas mais gerais de dano celular, como PI, DRAQ7®, LDH ou perda de células, mas raramente devem ser interpretados isoladamente. Em experimentos reais, a pergunta relevante geralmente não é “qual marcador devo usar?”, mas sim “quais evidências independentes convergem para sustentar minha hipótese biológica?”.

!!! info "Para aprofundar"

    A área de morte celular evolui rapidamente e a seleção de marcadores deve ser baseada em literatura especializada e atualizada. Antes de desenhar experimentos mecanísticos, recomenda-se consultar documentos de referência da Nomenclature Committee on Cell Death (NCCD), que discutem definições, limitações e boas práticas para interpretação dos principais marcadores utilizados na área.

    Leituras recomendadas:

    - Galluzzi et al. (2009) — Guidelines for the use and interpretation of assays for monitoring cell death in higher eukaryotes.
    - Galluzzi et al. (2018) — Molecular mechanisms of cell death: recommendations of the NCCD 2018.
    - Vitale et al. (2023) — Apoptotic cell death in disease: current understanding of the NCCD 2023.


!!! tip "Antes de continuar"

    - Por que a ativação de um único marcador raramente é suficiente para definir um mecanismo de morte celular?

    - O que significa dizer que a caracterização da morte celular deve ser baseada em evidências convergentes?

    - Se um artigo afirma ter demonstrado apoptose utilizando apenas Annexin V, que perguntas você faria antes de aceitar essa conclusão?


## 4. Crescimento celular, proliferação e biomassa

A categoria de **crescimento celular, proliferação e biomassa** é fundamental porque muitos tratamentos reduzem o número final de células não por induzirem morte celular rápida, mas por desacelerarem ou interromperem a proliferação. Esse cenário corresponde à citostase, conceito que discutimos em [Conceitos de viabilidade, citotoxicidade e citostase](../cell-health-conceitos-fundamentais/index.md)⁠.

Em HCI/HCA, a contagem celular é geralmente realizada por segmentação nuclear utilizando marcadores como Hoechst 33342 ou DAPI. O número de células por poço pode ser utilizado como uma medida de densidade celular e, quando comparado ao controle, fornecer informações sobre crescimento populacional ou perda celular. Retomando a discussão da aula [Microscopia — fundamentos de óptica para HCA](../../10-microscopia-e-aquisicao/microscopia-fundamentos/index.md)⁠, é importante lembrar que a unidade experimental continua sendo o poço. As células individuais representam observações dentro dessa unidade experimental e não réplicas independentes.

Ensaios de incorporação de nucleosídeos, como BrdU e EdU, servem como proxy para síntese de DNA e permitem estimar a fração de células em proliferação. Eles são particularmente úteis quando a pergunta envolve ciclo celular, expansão populacional ou citostase. EdU tem vantagem operacional sobre BrdU porque não requer desnaturação do DNA para detecção, o que simplifica o protocolo e preserva melhor a morfologia celular. 

É importante lembrar que a incorporação de EdU ou BrdU não reflete exclusivamente proliferação celular. Em determinadas situações, nucleosídeos marcados também podem ser incorporados durante processos de reparo de DNA. Embora esse fenômeno geralmente represente uma fração pequena do sinal total, ele deve ser considerado ao interpretar experimentos envolvendo agentes genotóxicos ou condições associadas a dano ao DNA.

Outra forma de estimar crescimento é medir componentes celulares proporcionais à massa celular total. Sulforhodamine B (SRB), crystal violet, conteúdo proteico total e conteúdo de DNA são exemplos dessa abordagem. Esses ensaios podem ser simples e robustos, mas normalmente refletem biomassa populacional, não necessariamente número exato de células vivas. 

Até mesmo o MTT pode ser utilizado para inferir crescimento celular em desenhos experimentais específicos. Nesse caso, o sinal é medido imediatamente antes da exposição ao tratamento (tempo zero) e novamente após o período experimental. A comparação entre esses dois momentos permite avaliar a variação relativa da população celular ao longo do tempo. Um aumento do sinal geralmente sugere crescimento populacional, a manutenção do sinal pode indicar citostase e uma redução pode refletir perda celular ou citotoxicidade. Esse exemplo ilustra como o desenho experimental pode modificar significativamente a informação que pode ser extraída de um mesmo ensaio. 

Como sempre, a interpretação dessa categoria exige cautela. A redução do crescimento celular é frequentemente um indicador sensível de comprometimento celular, mas não é equivalente à morte celular. Uma cultura pode apresentar menos células porque ocorreu morte celular, porque a proliferação foi reduzida, porque as células perderam adesão à superfície de cultivo ou até porque aumentaram de tamanho sem se dividir.

Da mesma forma, alterações metabólicas podem modificar a redução de tetrazólios sem necessariamente refletir mudanças proporcionais no número de células. Cada uma dessas situações possui implicações biológicas distintas e pode exigir abordagens complementares para sua correta interpretação.

!!! tip "Antes de continuar"

    - Por que redução de contagem celular não é sinônimo de citotoxicidade?

    - Qual é a principal vantagem do EdU sobre o BrdU em experimentos de HCI/HCA?

    - Um tratamento reduz a contagem celular em 50%, mas não altera a porcentagem de células PI-positivas. Quais hipóteses biológicas poderiam explicar esse resultado?

## 5. Metabolismo e função celular

A quarta categoria reúne ensaios baseados em metabolismo e função celular. Esses métodos são muito populares porque são rápidos, escaláveis e compatíveis com placas de múltiplos poços. No entanto, eles normalmente medem função celular, não morte celular diretamente.

Ensaios de tetrazólio, como MTT, MTS, XTT, WST-1 e WST-8, baseiam-se na redução de sais de tetrazólio por células metabolicamente ativas, gerando produtos detectáveis por absorbância. O ensaio de MTT, descrito por Mosmann em 1983, utiliza um sal de tetrazólio que é reduzido por sistemas redutores celulares dependentes de NAD(P)H, gerando cristais insolúveis de formazan. Embora a atividade mitocondrial contribua significativamente para esse processo, a redução do MTT não é exclusivamente mitocondrial. Diversos derivados foram desenvolvidos posteriormente — MTS, XTT, WST-1, WST-8 — buscando superar limitações do teste original, como gerar produtos mais solúveis e operacionalmente mais simples. A resazurina, também conhecida comercialmente como Alamar Blue em algumas formulações, segue lógica semelhante: é reduzida a resorufina por células metabolicamente ativas, gerando um produto fluorescente.

!!! warning "MTT mede metabolismo, não viabilidade direta"

    Redução do sinal de MTT não significa necessariamente morte celular. O ensaio mede capacidade redutora/metabólica do sistema celular. Alterações metabólicas podem ocorrer independentemente de morte celular, especialmente em experimentos envolvendo mitocôndria, estresse oxidativo ou reprogramação metabólica. Além disso, alterações no ciclo celular podem modificar o sinal observado em ensaios baseados em tetrazólios, uma vez que células em diferentes estados proliferativos apresentam demandas energéticas e atividades metabólicas distintas.

Ensaios baseados em potencial mitocondrial, como TMRE, JC-1 ou TMRM dependente de potencial, avaliam uma dimensão específica da função mitocondrial. TMRE (tetramethylrhodamine ethyl ester) é um corante catiônico que se acumula em mitocôndrias polarizadas. Quando ocorre perda de potencial mitocondrial, o acúmulo de TMRE diminui. Isso torna o ensaio particularmente útil para detectar disfunção mitocondrial precoce, frequentemente antes de eventos irreversíveis de morte celular. No contexto de HCA, TMRE é especialmente valioso porque fornece informação funcional subcelular e pode ser combinado com outras medidas fenotípicas. Entretanto, deve-se evitar interpretar perda de TMRE como morte celular direta, já que alterações mitocondriais podem ser reversíveis. 

!!! warning "Interpretação de MitoTracker"

    Os corantes da família MitoTracker são amplamente utilizados para visualizar e quantificar mitocôndrias, mas a interpretação de seus sinais exige cautela. Dependendo da variante utilizada, o sinal pode refletir massa mitocondrial, potencial de membrana, retenção do corante ou uma combinação desses fatores.

    Por esse motivo, aumentos ou reduções na intensidade de fluorescência não devem ser interpretados automaticamente como aumento ou diminuição da atividade mitocondrial. Sempre que possível, medidas baseadas em MitoTracker devem ser complementadas por ensaios funcionais específicos, como TMRE/TMRM, consumo de oxigênio, produção de ATP ou outros marcadores de função mitocondrial.

ATP luminescente mede o conteúdo total de ATP de uma população celular através da reação luciferina-luciferase. Como ATP é rapidamente perdido em células metabolicamente comprometidas, esse ensaio é altamente sensível e apresenta ampla faixa dinâmica, o que o torna muito utilizado em high-throughput screening. Entretanto, ele continua sendo uma medida populacional de estado energético, não uma medida direta de morte celular. Alterações metabólicas transitórias podem reduzir ATP sem induzir citotoxicidade irreversível. Reduções no conteúdo de ATP também podem ocorrer em situações de desaceleração proliferativa ou reprogramação metabólica, sem necessariamente indicar morte celular irreversível.

Neutral Red Uptake (NRU) é um ensaio de função organelar baseado na captação e acúmulo do corante Neutral Red em lisossomos de células viáveis. Células metabolicamente ativas e com função lisossomal preservada acumulam o corante, que depois pode ser extraído e medido por espectrofotometria. A principal vantagem do NRU é ser um método relativamente simples, de baixo custo e com histórico de uso em protocolos padronizados, incluindo contextos de avaliação toxicológica. 

!!! warning "NRU e interferência lisossomal"

    Neutral Red Uptake mede captação/acúmulo lisossomal em células funcionais. Se o tratamento afeta diretamente lisossomos, endocitose, acidificação vesicular ou tráfego intracelular, a queda do sinal pode refletir alteração lisossomal e não apenas perda global de viabilidade. Essa limitação é especialmente relevante para nanomateriais, partículas e compostos que interagem com endossomos e lisossomos — em muitos estudos de nanotoxicologia, alterações lisossomais podem ser parte do mecanismo de ação, o que torna o NRU informativo, mas também potencialmente suscetível a interpretações ambíguas.

!!! tip "Antes de continuar"

    - Por que MTT e ATP não devem ser chamados de "ensaios de morte celular"?

    - Um nanomaterial reduz o sinal de NRU. Cite uma interpretação que não envolva perda global de viabilidade.

    - Por que a perda de sinal de TMRE não deve ser interpretada como morte celular irreversível?

    - Um tratamento reduz ATP, reduz TMRE, mas não altera a contagem celular nem a porcentagem de células PI-positivas. Que hipóteses biológicas você levantaria para explicar esse resultado?

## **6. Ensaios ortogonais: combinando dimensões**

A escolha do ensaio deve partir da pergunta biológica e do tipo de perturbação esperada. Se o objetivo é avaliar dano de membrana, PI, DRAQ7® ou LDH são mais diretamente informativos. Se o objetivo é avaliar função metabólica ou estado energético, MTT, resazurina, ATP ou TMRE podem ser mais adequados. Se o objetivo é detectar citostase ou alteração de crescimento, contagem celular, EdU ou conteúdo de DNA são mais informativos.

Uma única medida raramente é suficiente para concluir de forma robusta que um tratamento é citotóxico. A combinação de medidas ortogonais aumenta a confiança porque reduz a chance de que o resultado seja explicado apenas por interferência técnica ou por uma dimensão isolada da fisiologia celular. Quando métodos que avaliam propriedades diferentes apontam para a mesma direção biológica, a interpretação torna-se significativamente mais robusta.

Uma estratégia forte é combinar uma medida populacional com uma medida baseada em imagem. Por exemplo, MTT ou resazurina podem ser combinados com contagem nuclear e PI. Alternativamente, ATP pode ser combinado com DRAQ7®, ou TMRE pode ser combinado com contagem celular e morfologia. Essas abordagens ajudam a identificar situações em que um ensaio específico está sendo afetado por interferências técnicas ou por respostas biológicas inesperadas.

No contexto de HCI/HCA, uma combinação particularmente informativa é integrar contagem celular, células PI-positivas, intensidade ou positividade de Calcein-AM e análise de alto conteúdo. Essa estratégia permite distinguir redução de função metabólica, perda de integridade de membrana, redução do número de células e remodelamento fenotípico: quatro dimensões que frequentemente são confundidas quando um único ensaio é utilizado.

!!! tip “Antes de continuar”

```
- Por que uma única medida de "viabilidade" raramente é suficiente para concluir que um tratamento é citotóxico?

- Proponha uma combinação ortogonal de ensaios para avaliar se um nanomaterial é citotóxico, justificando o que cada medida acrescenta à interpretação.

- Se MTT diminui, mas PI e contagem nuclear não se alteram, quais hipóteses biológicas ou técnicas poderiam explicar esse resultado?
```

## **7. Fechamento**

Nesta aula exploramos as quatro categorias de ensaios de saúde celular segundo a lógica OECD/GIVIMP: alterações estruturais não invasivas, alterações estruturais invasivas, crescimento celular e metabolismo/função celular. Para cada categoria, discutimos exemplos de ensaios amplamente utilizados, as propriedades celulares que eles medem e as limitações associadas à sua interpretação.

Vimos que ensaios metabólicos, como MTT e resazurina, medem atividade metabólica e capacidade redutora, não morte celular diretamente; que corantes de exclusão, como PI e DRAQ7®, informam sobre permeabilidade de membrana, mas não definem isoladamente o mecanismo ou o destino da célula; e que marcadores associados a mecanismos de morte celular, como Annexin V, fornecem informações mecanísticas complementares, mas raramente devem ser interpretados de forma isolada.

Ao longo da aula, reforçamos uma ideia central: *a medida experimental não é sinônimo da interpretação biológica*. Compreender exatamente o que cada ensaio mede é essencial para evitar conclusões simplistas e para escolher estratégias experimentais adequadas. Também discutimos como a combinação de medidas ortogonais aumenta significativamente a robustez das conclusões, permitindo integrar diferentes dimensões da resposta celular.

Na próxima aula, abordaremos como transformar os sinais experimentais desses ensaios em métricas quantitativas: como normalizar dados, calcular viabilidade e citotoxicidade, selecionar controles apropriados e construir gráficos com nomenclatura e interpretação corretas.

### Exercícios

1. Compare o princípio biológico de TMRE, Neutral Red Uptake e DRAQ7®. O que cada um mede e por que podem produzir resultados diferentes para o mesmo tratamento?
2. Explique por que a redução do sinal de MTT não implica necessariamente morte celular, citando ao menos dois mecanismos biológicos alternativos.
3. Descreva como um ensaio combinado live:dead utilizando Hoechst, PI e Calcein-AM permite obter múltiplas métricas a partir da mesma imagem. Quais métricas podem ser derivadas?
4. Discuta vantagens de combinar ensaios metabólicos e ensaios baseados em imagem para avaliação de citotoxicidade.
5. Classifique os seguintes ensaios segundo as categorias OECD/GIVIMP: LDH, EdU, SRB, MTT, Neutral Red Uptake, Calcein-AM, contagem nuclear por HCI, TMRE e Annexin V.
6. Um pesquisador observa que um composto reduz o sinal de MTT mas não aumenta a proporção de células PI-positivas. Proponha uma interpretação biológica e sugira ensaios complementares para testá-la.
7. Um artigo conclui que um composto é citotóxico porque reduziu o sinal de MTT em 50%. Quais informações adicionais você procuraria antes de aceitar essa conclusão?
### Para aprofundar

- OECD. [*Guidance Document on Good In Vitro Method Practices (GIVIMP)*.](https://www.oecd.org/en/publications/guidance-document-on-good-in-vitro-method-practices-givimp_9789264304796-en.html) OECD Series on Testing and Assessment No. 286, 2018.
- Riss TL, Moravec RA, Niles AL, Duellman S, Benink HA, Worzella TJ, Minor L. [*Cell Viability Assays*.](https://www.ncbi.nlm.nih.gov/books/NBK144065/) Assay Guidance Manual, 2016. 
- Mosmann T. [Rapid colorimetric assay for cellular growth and survival: application to proliferation and cytotoxicity assays](- [10.1016/0022-1759(83)90303-4](https://doi.org/10.1016/0022-1759\(83\)90303-4)). *Journal of Immunological Methods* 65(1-2):55–63, 1983.
- Borenfreund E, Puerner JA. [Toxicity determined in vitro by morphological alterations and neutral red absorption.](- [10.1016/0378-4274(85)90046-3](https://doi.org/10.1016/0378-4274\(85\)90046-3)) *Toxicology Letters* 24(2):119–124, 1985.
- Vitale, I., Pietrocola, F., Guilbaud, E. _et al._ [Apoptotic cell death in disease—Current understanding of the NCCD 2023.](https://doi.org/10.1038/s41418-023-01153-w) _Cell Death Differ_ **30**, 1097–1154 (2023).