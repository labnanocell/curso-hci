# HCA — Desenho experimental (controles, replicação, randomização)

**Ao final deste módulo, espera-se que você seja capaz de:**

- distinguir ensaios de natureza mais exploratória de ensaios de natureza mais confirmatória em HCA;
- compreender o papel do ensaio piloto (*assay development*) na construção de um experimento robusto;
- selecionar controles adequados ao objetivo biológico e à natureza da perturbação estudada;
- reconhecer a importância de replicação, randomização e distribuição das amostras na placa;
- identificar fontes frequentes de variação técnica em ensaios baseados em imagem.

**Entregável do módulo**

- uma descrição do seu ensaio como mais exploratório, mais confirmatório ou híbrido;
- uma proposta inicial de controles positivo(s), negativo(s) e veículo, quando aplicável;
- uma definição preliminar de número de réplicas e lógica de distribuição na placa;
- um rascunho de *plate map* com atenção a bordas, espalhamento de controles e variação entre dias.

Em HCA, o desenho experimental é parte central da qualidade da inferência biológica. Como esses ensaios geram uma grande quantidade de dados a partir de imagens, pequenas variações técnicas ou escolhas ruins de *layout* podem aparecer com destaque na análise e competir com o efeito biológico de interesse.

Nesta aula, vamos discutir os principais elementos que precisam ser pensados antes de começar o experimento: o tipo de ensaio, o papel do piloto, a escolha dos controles, a lógica de replicação, a randomização e a distribuição das amostras na placa.

## 1) Desenhos mais exploratórios e mais confirmatórios

Em HCA, os experimentos podem ser desenhados em um espectro entre abordagens mais exploratórias e abordagens mais confirmatórias.

### Ensaios mais exploratórios

Ensaios exploratórios são especialmente úteis quando o objetivo é mapear respostas fenotípicas de forma mais ampla, gerar hipóteses ou identificar perturbações de interesse. Nesses casos, a análise frequentemente se apoia em uma leitura multiparamétrica da resposta celular, sem restringir o experimento a um único *endpoint* previamente escolhido.

Isso é comum em estratégias de **perfilamento fenotípico** e, em muitos contextos, em experimentos de **screening**. Aqui, ensaios como *Cell Painting* e *Live Cell Painting* são exemplos importantes e, em alguns casos, também podemos ter abordagens sem marcador. Eles permitem observar alterações em diferentes estruturas e propriedades celulares, muitas vezes relacionadas à morfologia, organização subcelular e estados funcionais das células.

!!! info "Importante"
    Ensaios exploratórios não são “livres de viés” nem “sem pergunta”. Eles apenas são menos direcionados por um único *endpoint* principal e mais abertos à descoberta de padrões, assinaturas e efeitos inesperados.

### Ensaios mais confirmatórios

Ensaios confirmatórios, por sua vez, costumam ser desenhados para testar hipóteses mais específicas, geralmente com *endpoints*, controles e critérios de análise mais claramente definidos desde o início.

Nesse grupo entram, por exemplo:

- ensaios de translocação de proteínas;
- ensaios de internalização;
- avaliação de meia-vida de proteínas;
- ensaios de migração;
- ensaios de proliferação;
- ensaios de morte celular.

Esses experimentos podem usar células vivas ou fixadas, marcadores específicos e, com frequência, têm caráter mais mecanístico, servindo para confirmar achados de ensaios exploratórios. O ponto em comum continua sendo o uso de imagens como fonte de dados quantitativos.

### Descoberta vs prova de princípio

O nível de rigor exigido no controle de artefatos técnicos também depende do objetivo do experimento. Em ensaios de descoberta, parte dos achados será filtrada em etapas posteriores de validação. Já em experimentos de prova de princípio, benchmarking ou geração de *ground truth*, o controle sobre efeitos de posição, lote e execução precisa ser ainda mais cuidadoso, porque o experimento em si já precisa sustentar conclusões mais fortes.

## 2) O papel do ensaio piloto: *assay development*

Um projeto de HCA deve começar com um **ensaio piloto**. É nessa etapa que avaliamos se o evento biológico de interesse pode, de fato, ser estudado nas condições disponíveis no laboratório e na escala proposta para o experimento.

O piloto ajuda a ajustar tanto os aspectos experimentais quanto os analíticos do ensaio.

### 2.1) Ajustes experimentais

Do ponto de vista experimental, o piloto ajuda a avaliar:

- os equipamentos disponíveis, como microscópio, objetiva, controle de temperatura e estabilidade da aquisição;
- o tipo de marcação, incluindo anticorpos, sondas, marcadores específicos ou abordagens *label-free*;
- a modalidade de imageamento, como campo claro, contraste de fase, fluorescência ou confocal;
- o modelo biológico escolhido, incluindo linhagens, culturas 2D, modelos 3D ou coculturas;
- tempos de exposição e tempos de coleta;
- concentração dos tratamentos;
- comportamento esperado dos controles;
- possibilidade de escalar o ensaio para o número de amostras planejado.

### 2.2) Ajustes analíticos

Do ponto de vista da análise, o piloto também é fundamental. É nessa etapa que ajustamos:

- os pipelines de segmentação;
- a extração de *features*;
- os critérios de controle de qualidade (*quality control*, QC);
- a estrutura de metadados;
- as métricas que serão usadas para identificar *hits*, comparar perfis ou caracterizar controles.

!!! tip "Regra prática"
    Um bom piloto não serve apenas para “ver se funciona”. Ele serve para revelar limitações, ajustar o que ainda está frágil e evitar que o experimento principal falhe em escala maior.

Mais adiante no curso, vamos aprofundar os tópicos de QC, metadados e análise. Aqui, o mais importante é entender que esses elementos já devem ser considerados e otimizados na fase de desenvolvimento do ensaio.

## 3) Controles

Pensar em desenho experimental começa, quase sempre, pelos controles. Em HCA, isso é ainda mais importante, porque os controles não ajudam apenas a dizer se “houve ou não efeito”: eles também ajudam a ancorar a interpretação biológica e a avaliar se o ensaio está respondendo de forma coerente.

### 3.1) Controle não tratado, veículo, negativo e positivo

Embora no uso cotidiano esses termos às vezes se misturem, eles não são exatamente a mesma coisa.

- **Controle não tratado**: condição basal, sem adição da perturbação de interesse.
- **Controle de veículo**: condição que recebe apenas o solvente ou veículo usado para solubilizar o tratamento.
- **Controle negativo**: condição que, idealmente, não altera de forma relevante o estado fenotípico basal nas condições do ensaio.
- **Controle positivo**: condição conhecida por induzir um efeito biológico relevante para o fenômeno estudado.

Por exemplo, se um composto está dissolvido em DMSO, pode ser necessário incluir um controle de veículo com a mesma concentração de DMSO usada nas amostras tratadas.

### 3.2) Usar mais de um controle quando possível

Sempre que possível, é vantajoso usar mais de um controle. Isso é particularmente útil quando o experimento busca avaliar uma via, processo ou estado biológico que pode ser induzido por diferentes perturbações.

Por exemplo, podemos usar:

- mais de uma molécula que ativa ou inibe a mesma via;
- mais de um controle de referência para morte celular;
- mais de um controle para um estado fenotípico conhecido.

Para o desenvolvimento de projetos no laboratório, é valioso que controles positivos bem caracterizados sejam acumulados ao longo do tempo, pois isso fortalece o desenvolvimento de ensaios futuros.

### 3.3) A natureza do controle deve combinar com a natureza da perturbação

Idealmente, os controles devem ter natureza semelhante à dos objetos de interesse.

Se o experimento avalia uma biblioteca de pequenas moléculas, o ideal é que os controles também sejam pequenas moléculas. Se o experimento avalia siRNA, o ideal é incluir controles compatíveis com esse tipo de perturbação, como por exemplo um *scramble siRNA*.

Em alguns casos, pode ser informativo comparar diferentes tipos de perturbação, como uma pequena molécula e uma abordagem de CRISPR. No entanto, essas comparações exigem cautela, porque o tempo de resposta, a cinética do efeito e até o mecanismo biológico podem ser muito diferentes. Nesses casos, ensaios ortogonais ajudam a sustentar a comparação.

### 3.4) Controles biologicamente realistas

Um ponto especialmente importante em HCA é que o controle positivo precisa ser **biologicamente informativo**, e não apenas “forte” do ponto de vista estatístico.

Se o seu tratamento de interesse deve gerar alterações sutis de perfil fenotípico, um controle extremamente agressivo — por exemplo, uma concentração muito alta de um indutor forte de morte celular — pode ser útil para mostrar que o ensaio responde, mas pode ser pouco informativo como referência para interpretar os efeitos esperados.

!!! warning "Cuidado"
    Um controle positivo exageradamente forte pode ampliar o contraste matemático do ensaio, mas não necessariamente melhorar sua relevância biológica.

Por isso, durante o *assay development*, é comum testar diluições do controle positivo para encontrar concentrações mais realistas para aquele modelo biológico e para a faixa de efeito que se deseja estudar.

### 3.5) Estabilidade, preparo e solvente

Uma estratégia útil para reduzir variabilidade é preparar um lote maior das soluções de controle e congelar alíquotas suficientes para vários experimentos. Isso ajuda a reduzir erros introduzidos por pesagem, pipetagem e preparo repetido.

Claro, isso só é válido quando o controle é estável quimicamente ou biologicamente durante o período de armazenamento. Essa estabilidade deve ser verificada com o fornecedor, com a documentação do reagente ou na literatura.

Além disso, é importante considerar o solvente. Muitas moléculas são hidrofóbicas e exigem o uso de solventes como DMSO. Nesses casos:

- a concentração final do solvente deve ser cuidadosamente controlada;
- o controle de veículo deve refletir essa concentração;
- solventes voláteis, como etanol, exigem cautela adicional, pois pequenas variações de volume podem alterar a concentração final do composto.

## 4) Replicação

A replicação é uma das principais ferramentas para estimar variabilidade e sustentar inferência. Em HCA, isso é especialmente importante porque o grande número de células e imagens pode dar uma falsa sensação de robustez, mesmo quando o número de unidades experimentais independentes é pequeno.

### 4.1) Réplicas biológicas e técnicas

As **réplicas biológicas verdadeiras** são essenciais para estimar a variabilidade sistêmica do ensaio e avaliar a consistência dos efeitos observados entre diferentes execuções do experimento.

Já as **réplicas técnicas** ajudam a reduzir incerteza dentro de uma mesma execução, mas não substituem a replicação biológica.

Em HCA, isso é particularmente importante porque:

- mais imagens não significam mais replicação biológica;
- mais células por poço não aumentam o número de unidades experimentais independentes;
- a constância entre dias e entre execuções do ensaio faz parte da avaliação de robustez.

### 4.2) Quantas réplicas usar?

Não existe um número universalmente correto de réplicas. O número adequado depende de vários fatores, incluindo:

- magnitude esperada do efeito;
- variabilidade do ensaio;
- escala do projeto;
- objetivo exploratório ou confirmatório;
- custo e disponibilidade de material.

Em muitos ensaios de pequena e média escala, usam-se entre 2 e 4 réplicas por condição em etapas mais exploratórias. Para efeitos mais sutis, ou para objetivos confirmatórios, frequentemente são necessários números maiores.

!!! note "Mensagem importante"
    Não transforme números de replicatas em regra fixa. Em HCA, o número ideal depende do sistema biológico, do tipo de efeito e da sensibilidade analítica do ensaio.

### 4.3) Réplicas de controles

Controles, especialmente controles negativos, costumam exigir um número relativamente maior de poços distribuídos pela placa. Isso ajuda a capturar a variação basal do ensaio e dá mais robustez à comparação entre grupos.

Em muitos experimentos em placa de 96 poços, é comum usar uma fração importante da placa para controles, especialmente quando a pergunta é mais sensível a variações sutis de perfil.

### 4.4) Sensibilidade e validação

Em muitos contextos exploratórios, adotamos um desenho mais sensível, que busca reduzir a chance de perder efeitos biológicos reais. Nesses casos, parte dos falsos positivos pode ser filtrada posteriormente por validação ortogonal ou por ensaios mais específicos.

Isso não significa afrouxar critérios sem justificativa, mas reconhecer que, em etapas exploratórias, pode ser preferível preservar sensibilidade e deixar uma parte da confirmação para a etapa seguinte.

## 5) Randomização, *plate mapping* e *edge effects*

A distribuição das condições na placa é um dos pontos mais importantes do desenho experimental em HCA. Ela ajuda a reduzir vieses de posição, efeitos técnicos e interpretações enganosas.

### 5.1) Escolha da placa

Antes de distribuir os grupos, é preciso decidir em qual formato de placa o experimento será realizado. Essa escolha depende de fatores como:

- quantidade de amostra disponível;
- número de condições a serem testadas;
- grau de automação no plaqueamento e nas lavagens;
- escala do experimento;
- robustez do ensaio no formato desejado.

As placas mais comuns em HCA são as de 96 e 384 poços. Em contextos de menor escala e menor automação, as placas de 96 poços costumam ser particularmente relevantes.

### 5.2) A randomização começa no plaqueamento

Em experimentos de 96 poços com plaqueamento manual, a randomização começa antes mesmo da adição dos tratamentos. A forma como as células são contadas, ressuspendidas e distribuídas já pode introduzir padrões técnicos na placa.

Alguns cuidados importantes incluem:

- manter o método de contagem consistente entre experimentos;
- ressuspender as células periodicamente durante o plaqueamento para reduzir sedimentação;
- usar corretamente pipetas multicanais ou repetidoras;
- verificar calibração e domínio técnico do equipamento;
- considerar estratégias que reduzam erro de volume, como pipetagem reversa, quando aplicável.

Também é importante evitar que o plaqueamento siga uma ordem rígida e contínua por linha ou coluna, pois isso pode introduzir gradientes técnicos ao longo da placa.

### 5.3) Distribuição das condições na placa

A posição dos grupos na placa influencia diretamente a qualidade do experimento. Sempre que possível:

- espalhe os controles por diferentes regiões da placa;
- evite concentrar todas as réplicas de uma condição no mesmo bloco;
- distribua grupos em áreas distintas;
- use mapas diferentes em dias experimentais diferentes.

!!! tip "Regra prática"
    Nunca coloque muitas réplicas da mesma condição muito próximas umas das outras.

Essa estratégia ajuda a reduzir o risco de que efeitos de posição, evaporação ou plaqueamento sejam confundidos com o efeito biológico de interesse.

### 5.4) *Plate map* como estrutura de rastreabilidade

Em experimentos de HCA, o *plate map* não deve ser tratado apenas como uma figura de organização visual da placa. Ele também precisa funcionar como estrutura de rastreabilidade do experimento.

Sempre que possível, cada placa experimental deve ter seu próprio mapa associado a um identificador único, como o barcode da placa, permitindo reconstruir:

- quais condições foram distribuídas em cada poço;
- em que concentração;
- a partir de qual origem experimental;
- em qual placa e em qual dia aquela condição foi utilizada.

Isso é particularmente importante em experimentos automatizados, em *screenings* e em qualquer situação em que uma mesma condição possa aparecer em várias placas ou em vários dias diferentes.

!!! info "Boa prática"
    Não confie em um único mapa genérico para várias placas. Em experimentos mais complexos, cada placa deve ter sua própria identidade experimental e documental.

### 5.5) Variar layouts: desejável, mas com viabilidade operacional

Sempre que possível, é desejável variar a posição das condições entre placas ou entre dias experimentais, para reduzir a chance de que efeitos de posição sejam confundidos com o efeito biológico de interesse.

No entanto, essa variação precisa ser balanceada com a viabilidade operacional do experimento. Em alguns contextos, gerar múltiplos layouts aumenta:

- custo;
- complexidade de automação;
- carga de metadados;
- risco de erro manual ou erro de rastreabilidade.

Por isso, o melhor desenho nem sempre é o mais “aleatório possível”, mas sim o mais robusto que ainda permanece executável, documentável e reproduzível.

!!! warning "Cuidado"
    Estratégias de randomização feitas manualmente podem parecer atraentes, mas também aumentam o risco de erro de pipetagem, erro de *plate map* e perda de rastreabilidade. Em muitos casos, uma randomização um pouco menos ambiciosa, mas bem documentada e reproduzível, é preferível a uma randomização “perfeita” executada de forma frágil.

### 5.6) *Edge effects*

O **efeito de borda** (*edge effect*) é um problema recorrente, especialmente em placas de 96 poços. Os poços da borda sofrem mais com variações de temperatura e evaporação, o que pode alterar volume, concentração de solutos e comportamento celular.

Uma forma comum de lidar com isso é evitar usar os poços de borda para as condições experimentais principais e preenchê-los com água estéril ou tampão, funcionando como poços de sacrifício.

Esses poços também podem, em algumas situações, ser usados para ajuste de parâmetros do microscópio ou observações auxiliares, mas sempre com a consciência de que sofrem maior influência de evaporação e, portanto, não são ideais para comparação experimental principal.

### 5.7) Medidas adicionais para reduzir *edge effect*

Além de evitar o uso experimental das bordas e preencher esses poços com água estéril ou tampão, outras medidas podem ajudar a reduzir o *edge effect*, como:

- controlar melhor a umidade da incubadora;
- abrir a incubadora o mínimo possível;
- manter uma rotina de manipulação consistente entre experimentos;
- considerar medidas adicionais de estabilização do microambiente da placa, quando aplicável ao sistema usado.

O objetivo não é eliminar completamente o efeito técnico, mas reduzir sua magnitude e tornar sua influência mais previsível.

### 5.8) Variação entre dias

Além de espalhar as condições na placa, é importante variar os mapas entre os diferentes dias de experimento. Isso ajuda a desacoplar efeitos biológicos dos efeitos de posição e captura melhor os componentes técnicos na análise posterior.

Em HCA, efeitos de posição, evaporação, plaqueamento ou aquisição costumam aparecer de forma clara em análises de redução de dimensionalidade, *clustering* ou comparação de perfis. Por isso, distribuir as amostras em regiões distintas e variar essa disposição entre dias é uma estratégia central.

### 5.9) Um detalhe prático importante

Deixar a placa por cerca de 20 minutos em temperatura ambiente antes de colocá-la na estufa pode melhorar a homogeneidade do plaqueamento, o que pode ser útil para a análise posterior. Como sempre, essa rotina deve ser padronizada e reproduzida de forma consistente.

## 6) *Batch effects*

Mesmo com um bom desenho experimental, os efeitos técnicos continuarão presentes. Em HCA, isso inclui variações associadas a:

- dia do experimento;
- operador;
- pipeta usada;
- posição da placa na incubadora;
- lote de reagente;
- sessão de aquisição;
- diferenças de manipulação.

Esses fatores podem aparecer no resultado final e, em alguns casos, competir diretamente com o efeito biológico que queremos estudar.

Ferramentas que ajudam a mitigar *batch effects* incluem:

- randomização;
- distribuição espacial das condições;
- mapas diferentes em dias diferentes;
- uso apropriado de controles;
- preparo consistente de reagentes e controles;
- rotina experimental padronizada;
- boa rastreabilidade de placas e metadados.

!!! info "Mensagem central"
    O objetivo do desenho experimental não é eliminar completamente o efeito técnico, mas minimizá-lo e tornar sua influência mais identificável e manejável.

## 7) Fechamento

Em HCA, desenho experimental, análise e interpretação biológica estão profundamente conectados. Um experimento pode ter imagens excelentes e ainda assim produzir conclusões frágeis se os controles forem inadequados, se a distribuição na placa for ruim ou se a variabilidade técnica dominar o sinal biológico.

Por isso, antes de começar um experimento, vale sempre perguntar:

- o ensaio é mais exploratório, mais confirmatório ou híbrido?
- os controles realmente representam o fenômeno que quero observar?
- a replicação é suficiente para sustentar a inferência que desejo fazer?
- o *plate map* ajuda a proteger o experimento contra efeitos de posição e lote?
- o ensaio piloto já revelou as principais limitações do sistema?
- o desenho escolhido é realmente executável e rastreável no contexto do laboratório?

Essas perguntas não eliminam toda a incerteza do experimento, mas tornam o seu desenho muito mais robusto e muito mais honesto.

## Exercícios (para hoje)

1) **Exploratório, confirmatório ou híbrido?**  
   Classifique o seu experimento como mais exploratório, mais confirmatório ou híbrido. Justifique em 3–5 linhas.

2) **Pensando controles**  
   Proponha, para o seu experimento, pelo menos:
   - um controle não tratado;
   - um controle de veículo, se aplicável;
   - um controle positivo;
   - um controle negativo.  
   Explique por que eles são apropriados para a sua pergunta biológica.

3) **Controle biologicamente realista**  
   Pense em um controle positivo muito agressivo e em um controle positivo mais realista para o seu sistema. Qual deles faria mais sentido para o seu objetivo atual? Por quê?

4) **Replicação e *layout***  
   Faça um rascunho inicial do seu experimento indicando:
   - número de réplicas por grupo;
   - onde os controles ficarão na placa;
   - como você pretende evitar agrupar réplicas muito próximas;
   - se haverá variação do *plate map* entre dias;
   - como esse mapa será documentado para cada placa experimental.

## Termos introduzidos nesta página (glossário)

- [Experimentos exploratórios](../../90-glossario/index.md#experimentos-exploratorios)
- [Experimentos confirmatórios](../../90-glossario/index.md#experimentos-confirmatorios)
- [Experimento piloto](../../90-glossario/index.md#experimento-piloto)
- [Assay development](../../90-glossario/index.md#assay-development)
- [Controle positivo](../../90-glossario/index.md#controle-positivo)
- [Controle negativo](../../90-glossario/index.md#controle-negativo)
- [Controle de veículo](../../90-glossario/index.md#controle-de-veiculo)
- [Replicata biológica](../../90-glossario/index.md#replicata-biologica)
- [Replicata técnica](../../90-glossario/index.md#replicata-tecnica)
- [Randomização](../../90-glossario/index.md#randomizacao)
- [Plate map](../../90-glossario/index.md#plate-map)
- [Edge effect](../../90-glossario/index.md#edge-effect)
- [Batch effect](../../90-glossario/index.md#batch-effect)
- [Quality Control (QC)](../../90-glossario/index.md#quality-control-qc)
- [Metadados](../../90-glossario/index.md#metadados)

## Para aprofundar (opcional)

- [Assay Development Guidelines for Image-Based High Content Screening, High Content Analysis and High Content Imaging](https://www.ncbi.nlm.nih.gov/books/NBK100913/)
- [Advanced Assay Development Guidelines for Image-Based High Content Screening and Analysis](https://www.ncbi.nlm.nih.gov/books/NBK126174/)