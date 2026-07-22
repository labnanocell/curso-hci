# Cell Painting — workflow experimental, perfilamento e aplicações

## Objetivos de aprendizagem

Ao final desta aula, a pessoa será capaz de:

- descrever o *workflow* experimental e de análise computacional do *Cell Painting*;
- discutir como os perfis morfológicos são construídos e interpretados;
- reconhecer as principais aplicações, adaptações e limitações do *Cell Painting*.

## 1. Workflow experimental e computacional

O *Cell Painting* é frequentemente apresentado como um protocolo de marcação, mas essa visão é incompleta. O ensaio só se torna informativo quando a cadeia completa é conduzida de forma integrada, incluindo desenho experimental, aquisição de imagens, análise e interpretação.

O *workflow* resumido do protocolo v3 pode ser organizado em nove etapas.

1. **Plaqueamento celular**  
   As células são plaqueadas em densidade controlada. No protocolo de referência com U2OS, são usadas cerca de 2.000 células por poço em 30 µL, em placas de 384 poços. A manutenção da placa em temperatura ambiente por aproximadamente uma hora antes da incubação ajuda a promover uma distribuição mais uniforme das células e a reduzir seu acúmulo no centro dos poços.

2. **Perturbação**  
   As células são expostas a compostos, perturbações genéticas ou outras condições experimentais. Compostos são frequentemente avaliados após 24–48 horas, enquanto perturbações genéticas podem exigir períodos mais longos para que o efeito fenotípico se estabeleça (por ex. CRISPR pode exigir 96–144 horas; ORF, 48–72 horas.). O tempo deve ser definido de acordo com o mecanismo investigado, o sistema de perturbação e o modelo celular.

3. **Marcação com MitoTracker e WGA**  
   No protocolo v3, MitoTracker e WGA são adicionados diretamente ao meio de cultura antes da fixação, sem remoção prévia do meio. Essa mudança simplifica o protocolo e reduz a perda de células. O MitoTracker é aplicado às células vivas, enquanto o WGA marca principalmente estruturas da superfície celular e do sistema de Golgi.

4. **Fixação**  
   As células são fixadas com PFA em concentração final de 3,2% por aproximadamente 20 minutos, em temperatura ambiente. A fixação preserva a morfologia celular e permite a marcação posterior de estruturas intracelulares.

5. **Permeabilização e marcação combinadas**  
   A permeabilização com Triton X-100 e a marcação com faloidina, Concanavalina A, Hoechst e SYTO 14 são realizadas em uma etapa combinada, geralmente em HBSS com BSA.

6. **Lavagens e armazenamento**  
   As placas são lavadas para remover fluoróforos livres e seladas para aquisição. Após a fixação, as imagens podem ser adquiridas por até duas semanas com pouca perda de qualidade, desde que as condições de armazenamento sejam adequadas. Ainda assim, o intervalo entre marcação e aquisição deve ser mantido tão consistente quanto possível entre placas.

7. **Aquisição de imagens**  
   As imagens são adquiridas em cinco canais fluorescentes, geralmente com objetiva de 20× e múltiplos campos por poço. O número de campos deve equilibrar representatividade, tempo de aquisição e volume de dados.

8. **Análise de imagem**  
   Os *pipelines* normalmente incluem correção de iluminação, controle de qualidade, segmentação e extração de características. A segmentação define quais objetos serão medidos; portanto, erros nessa etapa afetam diretamente todas as métricas posteriores.

9. **Perfilamento e análise estatística**  
   As *features* de célula única são agregadas por poço, normalizadas, filtradas e comparadas. Dependendo da pergunta, podem ser utilizadas medidas de correlação ou distância, métodos de redução dimensional, como PCA e UMAP, técnicas de agrupamento ou classificação e métricas de qualidade dos perfis, como *Percent Replicating*, *Percent Matching*, AP e mAP.

Observe que esse *workflow* resume grande parte da lógica do curso. O sucesso do perfil fenotípico depende de decisões tomadas desde o desenho experimental até a interpretação biológica. Erros nas etapas iniciais, incluindo problemas de densidade celular, aquisição, segmentação ou normalização, podem se propagar por todo o *workflow* e comprometer a conclusão final.

!!! note
    Em HCI/HCA, a transformação das imagens em conhecimento ocorre por meio de uma cadeia de etapas interdependentes. O objetivo não é apenas minimizar erros, mas preservar, ao longo de todo o processo, a relação entre as medidas extraídas e a interpretação biológica.

## 2. Como interpretar um perfil de Cell Painting

Um perfil fenotípico de *Cell Painting*, gerado após a análise das imagens, é um vetor de características quantitativas que descreve uma população celular, geralmente representada por um poço, em determinada condição experimental.

Essas características podem incluir área nuclear, intensidade mitocondrial, textura do retículo endoplasmático, granulosidade do canal AGP, correlação espacial entre canais, distribuição radial do sinal, número de objetos subcelulares e muitas outras medidas.

A interpretação deve seguir uma sequência cuidadosa:

**Observação**  
Um conjunto de *features* muda após a perturbação.

**Comparação**  
O perfil morfológico do tratamento se distancia do controle ou se aproxima de uma referência conhecida.

**Interpretação**  
O padrão observado pode ser compatível com determinado estado celular, mecanismo de ação ou resposta fenotípica.

**Limitação**  
A similaridade morfológica não prova, por si só, identidade mecanística.

Por exemplo, se um composto produz um perfil semelhante ao de compostos lisossomotrópicos conhecidos, podemos dizer que o padrão é compatível com alterações lisossomais. No entanto, não devemos concluir, apenas com base no *Cell Painting*, qual é o mecanismo molecular específico, por exemplo, afirmar que o composto ativa a autofagia, bloqueia o fluxo autofágico ou induz apoptose. Para isso, são necessários ensaios ortogonais.

## 3. Principais aplicações

Como o *Cell Painting* produz uma descrição quantitativa do estado celular, ele pode ser usado sempre que a pergunta científica puder ser reformulada como uma comparação entre perfis fenotípicos.

Uma das aplicações mais conhecidas é o agrupamento por mecanismo de ação. Compostos com mecanismos semelhantes podem produzir assinaturas morfológicas semelhantes, especialmente quando avaliados em concentrações, tempos e contextos celulares comparáveis. Assim, compostos desconhecidos podem ser comparados com bibliotecas de referência para gerar hipóteses de mecanismo por similaridade, em uma abordagem conhecida como culpado por associação (*guilt by association*).

Outra aplicação importante é a identificação de assinaturas de doença. Células derivadas de modelos de doença podem ser comparadas com células controle, e bibliotecas de compostos podem ser avaliadas quanto à capacidade de aproximar o perfil alterado do perfil saudável. Nesse caso, o objetivo não é apenas matar células ou alterar uma única via, mas reverter um estado fenotípico, em uma abordagem conhecida como recuperação de fenótipo (*phenotypic recovery*).

O *Cell Painting* também pode ser usado em toxicologia. Perfis morfológicos podem revelar alterações mitocondriais, lisossomais, nucleares, proliferativas ou estruturais antes que ocorram desfechos mais tardios, como perda evidente de viabilidade. Isso é particularmente relevante para estudos de toxicidade subletal.

| Aplicação | Descrição | Interpretação típica |
|---|---|---|
| **Agrupamento por mecanismo de ação** | Agrupa compostos com assinaturas morfológicas semelhantes | Perfis semelhantes podem indicar mecanismos, processos ou vias relacionados |
| **Identificação de assinatura de doença** | Compara células saudáveis e modelos de doença | Compostos podem ser priorizados por sua capacidade de aproximar o perfil alterado do perfil saudável |
| **Enriquecimento de bibliotecas** | Seleciona compostos com diversidade fenotípica | Reduz redundância e aumenta a cobertura morfológica |
| **Geração de hipóteses sobre alvo ou mecanismo** | Compara compostos desconhecidos com referências anotadas | Prioriza possíveis alvos, vias ou mecanismos para validação |
| **Perfilamento toxicológico** | Identifica alterações fenotípicas subletais | Pode revelar padrões compatíveis com alterações mitocondriais, lisossomais, estruturais ou proliferativas |
| **Função gênica** | Compara perturbações por CRISPR, ORF ou RNAi | Revela relações entre genes, vias e estados celulares |
| **Integração entre modalidades** | Relaciona perfis morfológicos com expressão gênica ou outros ensaios | Permite integrar imagens, transcriptômica e outras leituras |
| **Triagem virtual** | Consulta perfis em bases públicas | Permite encontrar perturbações fenotipicamente semelhantes |

!!! tip
    Em muitas aplicações, a pergunta central do *Cell Painting* pode ser formulada assim: “com qual perfil conhecido essa perturbação se parece?”

## 4. Grandes conjuntos de dados e atlas fenotípicos

O crescimento do *Cell Painting* foi impulsionado não apenas pelo protocolo, mas também pela criação de grandes conjuntos de dados públicos. Esses recursos permitem comparar novas perturbações com referências amplas, testar métodos computacionais e desenvolver métricas de qualidade.

O *JUMP Cell Painting Consortium* é um dos marcos mais importantes dessa fase. O projeto gerou um grande conjunto de imagens e perfis morfológicos envolvendo perturbações químicas e genéticas produzidas em múltiplos centros experimentais. Além do volume de dados, sua importância está na padronização entre laboratórios, na avaliação da reprodutibilidade e no desenvolvimento de referências para comparação de perfis.

Outros conjuntos de dados, como os produzidos por Bray e colaboradores, pela Recursion e pelo projeto CPJUMP1, também contribuíram para o desenvolvimento da área. Paralelamente, recursos como a *Cell Painting Gallery* passaram a reunir imagens e perfis de diferentes projetos em um repositório público.

Esse ponto é importante para a interpretação. Quando usamos *Cell Painting*, não estamos apenas produzindo imagens de um experimento isolado. Em muitos casos, estamos produzindo perfis que podem ser comparados com atlas fenotípicos já existentes.

## 5. Adaptações e variantes

Embora o *Cell Painting* tenha sido idealizado como um ensaio genérico e não direcionado, adaptações podem ser úteis quando existe uma pergunta biológica específica ou uma limitação técnica do modelo experimental.

Por exemplo, em adipócitos, pode ser biologicamente mais informativo substituir a marcação mitocondrial por BODIPY para destacar gotículas lipídicas. Em modelos virais, um anticorpo contra uma proteína viral pode ser incorporado ao painel. Em células sanguíneas, o protocolo precisa ser ajustado para células não aderentes. Em abordagens *label-free*, modelos computacionais podem extrair perfis diretamente de imagens de campo claro ou tentar predizer imagens correspondentes aos canais fluorescentes.

Essas adaptações ampliam o uso do método, mas introduzem uma escolha importante: quanto mais o protocolo é modificado, menor pode ser sua comparabilidade com conjuntos de dados públicos e protocolos de referência. Portanto, adaptações devem ser justificadas pela pergunta biológica e validadas experimentalmente.

| Variante | Modificação | Objetivo | Consideração importante | Link |
|---|---|---|---|---|
| **LipocyteProfiler** | Adapta o painel para incluir BODIPY e representar gotículas lipídicas | Investigar estados metabólicos em adipócitos e hepatócitos | Aumenta a relevância biológica para modelos metabólicos, mas altera a comparabilidade com o protocolo clássico | [Laber et al., 2023](https://doi.org/10.1016/j.xgen.2023.100346) |
| **Marcação viral** | Adiciona ou substitui uma marcação por anticorpo contra proteína viral | Integrar infecção viral ao perfil morfológico | Torna o ensaio mais direcionado e exige validação da nova marcação | [Rietdijk et al., 2021](https://doi.org/10.1186/s12915-021-01086-1) |
| **Cell Painting PLUS** | Utiliza ciclos iterativos de marcação, aquisição e eluição | Aumentar o número de estruturas e a especificidade organelar | Gera mais informação, mas aumenta a complexidade experimental e analítica | [von Coburg et al., 2025](https://doi.org/10.1038/s41467-025-58765-8) |
| **MitoBrilliant** | Substitui o MitoTracker por outra sonda mitocondrial | Oferecer uma alternativa de marcação mitocondrial | Requer validação de concentração, compatibilidade espectral e equivalência dos perfis | [Protocolo MitoBrilliant](https://www.tocris.com/resources/protocols/mitobrilliant-probes/mitobrilliant-protocol) |
| **Faloidina em outro canal** | Utiliza uma faloidina conjugada a outro fluoróforo | Separar a actina do canal AGP ou liberar uma faixa espectral | Modifica a composição dos canais e pode afetar a comparação com perfis de referência | [Alternate dyes for image-based profiling assays](https://doi.org/10.1101/2025.02.19.639058) |
| **Blood Cell Painting** | Adapta o preparo, a marcação e a análise para PBMCs e outras células não aderentes | Realizar perfilamento morfológico de células imunes | Exige ajustes de aderência, fixação, segmentação e interpretação de populações celulares heterogêneas | [Blood Cell Painting](https://doi.org/10.1101/2024.05.17.594648) |
| **Label-free / brightfield** | Extrai representações diretamente de imagens transmitidas ou prediz canais fluorescentes | Reduzir marcação, preservar células vivas e permitir análises longitudinais | Depende fortemente do conjunto de treinamento, da validação e da capacidade de generalização do modelo | [Cross-Zamirski et al., 2022](https://doi.org/10.1038/s41598-022-12914-x) |

!!! warning
    Adaptar o *Cell Painting* não é apenas trocar um corante. Cada modificação pode alterar a segmentação, a distribuição de intensidades, a correlação entre canais, a seleção de *features* e a comparabilidade dos perfis.

## 6. Limitações do Cell Painting

O *Cell Painting* é uma abordagem poderosa, mas não deve ser tratado como uma ferramenta capaz de revelar automaticamente qualquer mecanismo celular. Sua força está na comparação fenotípica; sua limitação está justamente na distância entre o perfil morfológico e a causa molecular.

A primeira limitação é que perfis semelhantes não provam mecanismos idênticos. Dois compostos podem gerar morfologias parecidas por caminhos diferentes. Da mesma forma, mecanismos semelhantes podem produzir perfis diferentes dependendo de dose, tempo, linhagem celular ou estado fisiológico. Por isso, a ausência de semelhança também deve ser interpretada com cautela.

A segunda limitação é a dependência da qualidade experimental. Densidade celular inadequada, efeitos de borda, saturação, foco ruim, variação de iluminação, perda celular durante lavagens e diferenças entre lotes podem produzir assinaturas artificiais. Em conjuntos de dados de alto conteúdo, efeitos técnicos podem ser maiores que os efeitos biológicos.

A terceira limitação é a segmentação. Como as *features* são extraídas a partir de objetos segmentados, qualquer erro na identificação de núcleos, células ou compartimentos subcelulares se propaga para a análise. Uma segmentação ruim pode criar perfis aparentemente robustos, mas biologicamente inválidos.

A quarta limitação é que nem toda alteração biológica gera uma mudança morfológica detectável. Algumas respostas moleculares são transitórias, sutis ou não se traduzem em alterações capturadas pelos canais do ensaio. Por isso, a relação entre os tempos investigados, a dinâmica da resposta celular e os mecanismos biológicos de interesse deve ser considerada durante o desenho experimental e a análise.

Por fim, o *Cell Painting* raramente deve ser usado isoladamente para sustentar conclusões mecanísticas fortes. Ele é excelente para gerar hipóteses, comparar estados celulares, realizar triagens e priorizar condições, mas conclusões sobre mecanismos específicos exigem validação por ensaios ortogonais.

## 7. Fechamento

O valor do *Cell Painting* não depende apenas de seu painel de fluoróforos. Ele emerge da integração entre desenho experimental, execução do protocolo, aquisição de imagens, segmentação, extração de *features*, construção dos perfis e interpretação biológica.

Essa cadeia torna possível comparar perturbações, identificar assinaturas reprodutíveis e gerar hipóteses sobre mecanismos, estados celulares ou toxicidade. Ao mesmo tempo, faz com que erros técnicos nas etapas iniciais possam se propagar e produzir perfis aparentemente informativos, mas biologicamente inválidos.

Por isso, um bom experimento de *Cell Painting* deve ser avaliado não apenas pela qualidade visual das imagens, mas também pela reprodutibilidade das replicatas, pela separação entre sinais biológicos e efeitos técnicos e pela consistência das conclusões em ensaios ortogonais.

### Principais conceitos

- O *Cell Painting* é uma cadeia experimental e computacional, não apenas um protocolo de marcação.
- As imagens são convertidas em medidas quantitativas de células e compartimentos segmentados.
- As *features* de célula única são agregadas e normalizadas para construir perfis representativos de cada poço ou condição.
- Os perfis podem ser comparados para identificar bioatividade, similaridade fenotípica, recuperação de estados celulares e relações entre perturbações.
- A similaridade morfológica gera hipóteses, mas não prova identidade mecanística.
- Adaptações do protocolo devem equilibrar relevância biológica e comparabilidade com referências públicas.
- A confiabilidade do perfil depende do desenho experimental, da aquisição, da segmentação, do controle de qualidade e da validação ortogonal.

### Exercícios

1. Explique, com suas palavras, a diferença entre uma triagem convencional de alto conteúdo e um ensaio de perfilamento morfológico como o *Cell Painting*.

2. Descreva como as etapas experimentais e computacionais do *Cell Painting* estão conectadas e dê um exemplo de como um erro inicial pode afetar o perfil final.

3. Um composto desconhecido produz um perfil morfológico semelhante ao de compostos lisossomotrópicos conhecidos. O que você pode concluir? O que você ainda não pode concluir?

4. Escolha uma das aplicações apresentadas e descreva como a pergunta científica poderia ser reformulada como uma comparação entre perfis fenotípicos.

5. Quais problemas experimentais poderiam gerar uma assinatura fenotípica artificial em um experimento de *Cell Painting*?

6. Escolha uma variante do *Cell Painting* e discuta o equilíbrio entre relevância biológica e comparabilidade com conjuntos de dados públicos.

## Links e leituras recomendadas

### Protocolos essenciais

- [Protocolo original do Cell Painting — Bray et al., 2016](https://doi.org/10.1038/nprot.2016.105)  
  Descreve o painel clássico de seis fluoróforos em cinco canais e o *workflow* experimental e computacional do ensaio.

- [Protocolo otimizado v3 — Cimini et al., 2023](https://doi.org/10.1038/s41596-023-00840-9)  
  Versão atualizada do protocolo, com orientações para otimização, automação, controle de qualidade e avaliação dos perfis.

### Dados e recursos públicos

- [Cell Painting Gallery](https://cellpainting-gallery.s3.amazonaws.com/index.html)  
  Repositório público de imagens e perfis produzidos por diferentes projetos de perfilamento morfológico.

- [CPJUMP1 — três milhões de imagens e perfis](https://doi.org/10.1038/s41592-024-02241-6)  
  Conjunto de dados com perturbações químicas e genéticas pareadas, útil para treinamento e comparação de métodos computacionais.

- [JUMP Cell Painting Dataset](https://doi.org/10.1101/2023.03.23.534023)  
  Grande conjunto de referência com mais de 136 mil perturbações químicas e genéticas.

### Software e análise

- [CellProfiler](https://cellprofiler.org/)  
  Software aberto para correção de imagens, segmentação celular e extração de características.

- [CellProfiler Analyst](https://cellprofileranalyst.org/)  
  Ferramenta para exploração, classificação e inspeção de fenótipos extraídos das imagens.

- [pycytominer](https://github.com/cytomining/pycytominer)  
  Biblioteca para normalização, seleção de *features* e construção de perfis morfológicos.

### Para aprofundar

- [Cell Painting: a decade of discovery and innovation in cellular imaging — Seal et al., 2024](https://doi.org/10.1038/s41592-024-02528-8)  
  Revisão geral sobre a evolução, as aplicações e os desafios do *Cell Painting*.

- [Image-based profiling for drug discovery — Chandrasekaran et al., 2021](https://doi.org/10.1038/s41573-020-00117-w)  
  Perspectiva sobre perfilamento baseado em imagens, descoberta de fármacos e aprendizado de máquina.

- [Cell Painting Gallery: an open resource for image-based profiling — Weisbart et al., 2024](https://doi.org/10.1038/s41592-024-02399-z)  
  Apresenta a organização e os objetivos do repositório público *Cell Painting Gallery*.

