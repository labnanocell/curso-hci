# Live Cell Painting — Histórico e Visão geral

## Objetivos de aprendizagem

- Compreender o problema experimental que motivou o desenvolvimento do LCP
- Explicar o racional do uso de um corante metacromático para perfilamento fenotípico
- Comparar Cell Painting e Live Cell Painting em termos de capacidades, limitações e aplicações
- Descrever o protocolo do LCP e suas etapas críticas
- Entender como a segmentação e a extração de características produzem perfis fenotípicos
- Aplicar a cadeia observação → resultado → interpretação → limitações às aplicações do LCP
- Reconhecer as limitações do LCP e quando ensaios ortogonais são necessários

!!! note **Live Cell Painting (LCP)** é um ensaio de *High-Content Analysis* baseado em um único corante metacromático, o laranja de acridina (Acridine Orange, AO), que permite extrair perfis morfológicos de células vivas, detectando perturbações fenotípicas sutis, que muitas vezes não são detectáveis em ensaios convencionais de saúde celular.
## 1. Breve histórico

Nas aulas sobre [ensaios de viabilidade](../../20-cultura-celular-e-cell-health/index.md),, vimos que diferentes métodos medem dimensões distintas da saúde celular: metabolismo, integridade de membrana, proliferação, função mitocondrial. Vimos também que a ausência de citotoxicidade evidente não implica ausência de perturbação biológica, ou seja fenótipos subletais podem surgir muito antes de qualquer perda de viabilidade detectável.

Na aula sobre [*Cell Painting*](../cell-painting-principios-e-aplicacoes/index.md), conhecemos uma abordagem que amplia radicalmente o poder de detecção: em vez de fazer poucas medidas pré-selecionadas, o *Cell Painting* extrai ~1.500 descritores morfológicos (*features*) por célula, capturando assinaturas fenotípicas que revelam mecanismos de ação, toxicidade e função gênica. Entretanto, o *Cell Painting* exige fixação das células, o que elimina a possibilidade de observar as células vivas e pode introduzir artefatos de processamento.

Entre esses dois extremos existe uma lacuna experimental importante. De um lado, ensaios convencionais de saúde celular são relativamente simples e acessíveis, mas geralmente medem poucos desfechos. De outro, o _Cell Painting_ oferece grande riqueza informacional, mas exige um protocolo mais complexo, múltiplos fluoróforos, infraestrutura apropriada e um fluxo computacional relativamente sofisticado.

Essa lacuna tornou-se especialmente relevante na nanotoxicologia. Ao final da década de 2010, tornou-se cada vez mais frequente a crítica de que as concentrações utilizadas nos estudos *in vitro* dificilmente representavam os níveis de exposição encontrados em seres humanos ou no meio ambiente. A área passou a priorizar concentrações biologicamente e ambientalmente mais relevantes. Nessas concentrações mais baixas, muitos nanomateriais deixam de produzir respostas detectáveis pelos ensaios convencionais de saúde celular, como MTT, resazurina, Calceína/PI, embora possam estar induzindo alterações fenotípicas significativas.

!!! note "Ideia central"
    O *Live Cell Painting* surge da convergência de duas necessidades: detectar perturbações subletais que escapam aos ensaios tradicionais e realizar perfilamento fenotípico em células vivas, sem depender das etapas de fixação, permeabilização e marcação múltipla.

A ideia central é simples, mas poderosa: em vez de perguntar apenas se a célula está viva ou morta, investigar **como sua morfologia está sendo modificada** pela perturbação. Alterações discretas na organização celular frequentemente precedem a perda de viabilidade e podem revelar respostas biológicas importantes que passariam despercebidas pelos ensaios tradicionais. O LCP torna essa investigação possível em células vivas, utilizando um único corante e um protocolo acessível.

O método foi formalizado no trabalho *Live-cell painting: Image-based profiling in live cells using acridine orange*, publicado por Garcia-Fóssa e colaboradores (2025) [1]. O protocolo detalhado foi publicado separadamente por Moraes-Lacerda e colaboradores (2025) [2]. Os detalhes do protocolo experimental e de análise serão discutidos na próxima aula.

## 2. Do *Cell Painting* ao *Live Cell Painting*

O *Cell Painting* estabeleceu o paradigma do perfilamento morfológico, combinando múltiplos corantes fluorescentes para marcar o maior número possível de organelas, extrair centenas a milhares de features por célula e comparar perfis entre condições experimentais. Esse paradigma provou que a riqueza informacional de imagens multiparamétricas supera amplamente a de ensaios de *endpoint* único.

Entretanto, o CP opera exclusivamente com células fixadas. A fixação com paraformaldeído, embora necessária para a marcação com múltiplos corantes, introduz limitações importantes, como a introdução de artefatos evidenciado por Schnell et al. (2012) que a imunomarcação em células fixadas pode produzir artefatos de distribuição proteica que não refletem o estado fisiológico da célula viva. Além disso, o planejamento, a execução e a análise de um ensaio de _Cell Painting_ são relativamente complexos. O método exige infraestrutura específica, controle rigoroso das condições experimentais e experiência em aquisição e análise de imagens multiparamétricas.  

Foi nesse contexto que propusemos o _Live Cell Painting_. O método nasceu da necessidade de avaliar efeitos subletais causados por nanomateriais, mas também da busca por uma abordagem intermediária entre os ensaios convencionais de saúde celular, amplamente disponíveis em laboratórios, e métodos mais complexos de perfilamento morfológico.

O LCP oferece uma estratégia relativamente rápida, acessível e de menor custo experimental. Em seu centro está o laranja de acridina, um corante metacromático capaz de emitir fluorescência em diferentes regiões do espectro dependendo do ambiente químico e da forma como suas moléculas se organizam.

Essa propriedade, que em algumas aplicações de microscopia poderia ser vista como uma dificuldade espectral, torna-se uma vantagem para o perfilamento. Um único marcador fornece informações morfológicas provenientes de diferentes estruturas e compartimentos celulares.

!!! info “Uma abordagem complementar”  
O LCP não procura reproduzir toda a riqueza organelar do _Cell Painting_. Sua proposta é oferecer uma estratégia mais simples para detectar e comparar perturbações fenotípicas em células vivas.

## 3. *Cell Painting* vs. *Live Cell Painting*: análise comparativa

Cada método foi desenhado para responder a perguntas biológicas diferentes, e a escolha entre eles deve ser guiada pela pergunta experimental.

### Tabela comparativa

| Aspecto                                  | Cell Painting (CP)                                                                             | Live Cell Painting (LCP)                                                         |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Corantes**                             | 6 (Hoechst, ConA/Alexa488, SYTO 14, Phalloidin/Alexa568, WGA/Alexa555, MitoTracker Deep Red)   | 1 (Acridine Orange)                                                              |
| **Canais de imagem**                     | 5 (DNA, ER, RNA, AGP, Mito)                                                                    | 2 (verde: núcleo/citoplasma; vermelho: vesículas ácidas)                         |
| **Compartimentos/estruturas inferíveis** | 8 (núcleo, nucléolos, ER, RNA citoplasmático, actina, Golgi, membrana plasmática, mitocôndria) | 3–4 (núcleo, citoplasma, nucléolos, vesículas ácidas)                            |
| **Estado das células**                   | Fixadas (PFA 3,2%)                                                                             | Vivas                                                                            |
| **Features por célula**                  | ~1.500                                                                                         | Centenas (menor que CP, mas suficiente para *profiling*)                         |
| **Especificidade organelar**             | Maior, devido ao uso de marcadores dedicados                                                   | Menor, pois o AO não é um marcador organelar específico                          |
| **Resolução mecanística**                | Maior capacidade de associar alterações a determinados canais e estruturas                     | Menor resolução organelar; adequado para detectar e comparar padrões fenotípicos |
| **Aplicação principal**                  | *Profiling* de larga escala, MoA prediction, descoberta de fármacos                            | Screening de saúde celular, perturbações subletais.                              |
| **Maturidade**                           | Alta (10+ anos, JUMP Consortium, protocolo v3 validado)                                        | Método recente e ainda em desenvolvimento                                        |
| **Pipeline de análise**                  | CellProfiler + Pycytominer (padronizado)                                                       | CellProfiler (adaptado) + Pycytominer                                            |


A tabela acima revela que CP e LCP ocupam nichos experimentais distintos, com sobreposição parcial.

**Quando o CP é mais informativo**: quando o objetivo é prever mecanismo de ação (MoA), comparar grandes bibliotecas de compostos, ou realizar profiling de larga escala com resolução organelar. O CP oferece mais canais, mais *features* e uma base de validação muito mais ampla. O JUMP Consortium demonstrou que o CP pode agrupar compostos por mecanismo de ação com %matching de 16–26%, um resultado modesto em termos absolutos, mas impressionante considerando a complexidade do problema.

**Quando o LCP é mais útil**: quando o objetivo é detectar rapidamente perturbações fenotípicas em células vivas utilizando um protocolo simples, econômico e de fácil implementação. Embora forneça menos informação sobre organelas que o _Cell Painting_, o LCP preserva a dinâmica celular e reduz significativamente a complexidade experimental ao utilizar um único fluoróforo e dispensar etapas de fixação, permeabilização e marcação múltipla. Essas características o tornam particularmente interessante para _screenings_ de pequena ou média escala, validação de hipóteses e laboratórios que desejam incorporar perfilamento morfológico sem a infraestrutura necessária para executar um protocolo completo de _Cell Painting_.

Além de sua aplicação experimental, o LCP constitui uma excelente plataforma para aprendizagem em _High-Content Analysis_. Sua simplicidade permite que estudantes e pesquisadores compreendam, na prática, todas as etapas fundamentais de um experimento de HCA, aquisição de imagens, segmentação, extração de características, construção de perfis fenotípicos e interpretação biológica, antes de avançarem para abordagens mais complexas, como o _Cell Painting_ convencional.

**Estratégia combinada**: em muitos projetos, o LCP pode funcionar como uma etapa inicial de triagem, identificando quais condições produzem perturbações fenotípicas relevantes. Essas condições podem então ser investigadas em maior profundidade utilizando o _Cell Painting_, que oferece maior resolução organelar e um espaço fenotípico mais rico para exploração mecanística. Essa estratégia em duas etapas combina a agilidade do LCP com o poder analítico do CP e é particularmente útil em estudos de nanotoxicologia e em projetos exploratórios.

## 4. Acridine Orange: o fluoróforo central do LCP

O laranja de acridina (Acridine Orange, AO) é um corante fluorescente metacromático, ou seja, sua emissão muda dependendo do microambiente químico (pH, concentração de íons, polaridade) em que se encontra. Essa propriedade é o fundamento de todo o LCP.

### Mecanismo da dupla fluorescência 

Quando o AO se intercala em ácidos nucleicos (DNA e RNA), sua fluorescência é dominada pela emissão verde (pico ~525 nm). Quando o AO se acumula em compartimentos ácidos, como endossomos tardios e lisossomos, a protonação e a alta concentração local de íons H^+^ causam empilhamento molecular (*stacking*), deslocando a emissão para o vermelho (pico ~650 nm). Essa dualidade permite que um único corante visualize simultaneamente:

- **Canal verde (AOGFP)**: núcleo (DNA), nucléolos (RNA), citoplasma (RNA difuso);
- **Canal vermelho (AOPI)**: vesículas ácidas (lisossomos, endossomos, autofagossomos).
### Por que um único corante é suficiente para o *profiling*

À primeira vista, utilizar apenas um fluoróforo parece uma limitação quando comparado ao _Cell Painting_, que emprega múltiplos marcadores específicos para diferentes organelas. Entretanto, o objetivo do _profiling_ morfológico não é identificar individualmente cada estrutura celular, mas capturar padrões fenotípicos suficientemente ricos para distinguir diferentes estados biológicos.

O laranja de acridina é particularmente interessante nesse contexto porque um único corante fornece informações provenientes de múltiplos compartimentos celulares. Em vez de depender da especificidade molecular de cada marcador, o *Live Cell Painting* explora a combinação de padrões de intensidade, textura, distribuição espacial e organização do sinal fluorescente para construir assinaturas morfológicas. Assim, a informação emerge da combinação de centenas de medidas extraídas das imagens, e não da interpretação isolada de cada canal.

Durante o desenvolvimento do método, entretanto, surgiu um desafio importante. Trabalhos anteriores frequentemente registravam a fluorescência das vesículas ácidas utilizando o canal correspondente ao RFP (aproximadamente 560–610 nm). Nessa configuração, existe uma sobreposição significativa entre os sinais verde e vermelho do AO. Isso faz com que os dois canais registrem, em grande parte, as mesmas estruturas celulares. Para a análise computacional, essa redundância é indesejável, pois acrescenta relativamente pouca informação nova ao conjunto de dados, aumenta a correlação entre as _features_ extraídas e pode dificultar a identificação dos padrões realmente relevantes em análises posteriores e pelos modelos de aprendizagem de máquina.

Para minimizar esse problema, o *Live Cell Painting*  adquiri o sinal das vesículas ácidas em um intervalo mais deslocado para o vermelho (*far red*), utilizando o canal do PI (aproximadamente 610–690 nm). Essa estratégia reduz significativamente a sobreposição espectral entre os dois canais e aumenta a independência das informações fornecidas por cada um deles, permitindo que os algoritmos de perfilamento explorem descritores mais informativos e menos redundantes.

Além disso, o AO apresenta uma característica particularmente importante para a análise computacional: ele fornece contraste suficiente para identificar simultaneamente o núcleo e o citoplasma, permitindo a segmentação das células e a extração de centenas de medidas morfológicas individuais. Como em qualquer abordagem de *High-Content Analysis*, a qualidade dessa segmentação é fundamental, pois todas as etapas posteriores dependem dela.

### **Limitações espectrais**

A ampla emissão de fluorescência do laranja de acridina dificulta sua combinação com outros fluoróforos. Como seu espectro de emissão ocupa uma faixa extensa do espectro visível, a adição de marcadores fluorescentes aumenta o risco de sobreposição entre sinais (_bleed-through_), reduzindo a independência das informações capturadas em cada canal. Essa característica limita a multiplexação do *Live Cell Painting* e representa uma diferença importante em relação ao _Cell Painting_, que foi desenvolvido para combinar seis corantes distribuídos em cinco canais com sobreposição espectral cuidadosamente controlada.

Uma exceção ocorre quando a marcação do núcleo e do citoplasma pelo AO não fornece contraste suficiente para uma segmentação robusta. Nesses casos, pode ser vantajoso adicionar um marcador nuclear (por ex Hoechst 33342 que é capaz de marcar células vivas) no canal DAPI (aproximadamente 410–480 nm), preservando a separação espectral em relação aos canais do AO. Essa estratégia foi utilizada com sucesso em células HepG2, melhorando a segmentação sem comprometer significativamente o conteúdo informacional do ensaio.

![Conceitos de cell health](../../assets/img/LCP_pt.webp)

Figura 1: Princípio metacromático do laranja de acridina no Live Cell Painting. Quando associado aos ácidos nucleicos, o AO apresenta emissão predominantemente verde, enquanto seu acúmulo em compartimentos ácidos favorece a formação de espécies agregadas com emissão vermelha. Essa dupla resposta permite obter informações complementares sobre núcleo, nucléolos, citoplasma e compartimentos vesiculares ácidos utilizando um único corante.

## 5. Fechamento

O _Live Cell Painting_ foi desenvolvido para preencher uma lacuna entre ensaios convencionais de saúde celular e abordagens mais complexas de perfilamento morfológico.

Seu princípio é utilizar a metacromasia do laranja de acridina para extrair informações complementares de células vivas em dois canais de fluorescência. Embora o método não ofereça a mesma cobertura organelar do _Cell Painting_, ele permite detectar alterações fenotípicas sutis com menor complexidade experimental.

O valor do LCP não está em atribuir automaticamente uma alteração a uma organela ou mecanismo específico. Seu valor está na capacidade de transformar padrões de imagem em perfis quantitativos que podem ser comparados entre condições.

A simplicidade experimental do LCP não elimina a necessidade de rigor. Qualidade da cultura, concentração do corante, tempo de marcação, parâmetros de aquisição, segmentação e controle de qualidade podem modificar profundamente os perfis obtidos.

!!! note "Mensagem principal"  
    O LCP não substitui ensaios mecanísticos nem o _Cell Painting_. Ele oferece uma forma complementar, acessível e informativa de detectar e comparar perturbações fenotípicas em células vivas.





