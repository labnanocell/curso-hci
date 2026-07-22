# Cell Painting: princípios, evolução e aplicações do perfilamento fenotípico

## Objetivos de aprendizagem

- Compreender o problema científico que motivou o desenvolvimento do _Cell Painting_.
- Explicar por que o _Cell Painting_ representa uma mudança de paradigma em HCI/HCA.
- Conhecer sua evolução histórica, suas principais aplicações, os conjuntos de dados públicos e suas limitações.
- Descrever a lógica biológica e experimental dos fluoróforos, canais e estruturas celulares marcados no _Cell Painting_.
- Compreender por que o ensaio utiliza seis fluoróforos em cinco canais e como isso representa uma quebra de paradigma em microscopia de fluorescência.

## **1. Introdução**

Como discutimos no módulo de microscopia, a análise de alto conteúdo transformou a forma como usamos imagens de fluorescência em biologia celular. A microscopia deixou de ser apenas uma ferramenta para produzir imagens representativas e passou a ser usada como uma fonte de dados quantitativos, multiparamétricos e analisáveis em larga escala.

Nesse contexto, o _Cell Painting_ ocupa um papel central. Ele é um ensaio de perfilamento fenotípico baseado em imagens de alto conteúdo, no qual múltiplos fluoróforos marcam diferentes estruturas celulares. A partir dessas imagens, centenas a milhares de características quantitativas são extraídas, permitindo comparar perturbações celulares de forma ampla e não direcionada.

O _Cell Painting_ busca descrever quantitativamente o estado celular por meio da marcação simultânea de múltiplas estruturas e compartimentos celulares. Em vez de medir uma única via biológica, o método gera uma assinatura fenotípica integrada que pode ser comparada entre diferentes perturbações para identificar semelhanças, diferenças e relações biológicas.

### O ensaio

Em sua formulação clássica, o protocolo utiliza seis fluoróforos adquiridos em cinco canais de fluorescência para marcar oito estruturas celulares. Após a segmentação das células, aproximadamente 1.500 _features_ quantitativas podem ser extraídas para cada célula, descrevendo aspectos como intensidade, forma, textura, tamanho, granulosidade, localização espacial e relações entre canais. Essas medidas podem então ser agregadas para representar o perfil fenotípico de um poço ou de uma condição experimental.

A ideia fundamental do método é simples, mas poderosa: diferentes perturbações biológicas deixam **assinaturas morfológicas** nas células. Essas assinaturas nem sempre são perceptíveis ao olho humano, mas podem ser capturadas quantitativamente por análise de imagem e utilizadas para comparar estados celulares, gerar hipóteses sobre mecanismos biológicos e organizar perturbações de acordo com sua similaridade fenotípica.

!!! note  
    O _Cell Painting_ não foi criado para medir uma via molecular específica. Ele foi criado para descrever o estado celular de maneira ampla, usando a morfologia como uma leitura integrada da resposta biológica.

## 2. O problema científico

Durante muitos anos, a microscopia foi usada principalmente para responder a perguntas específicas. Por exemplo: um composto induz a translocação nuclear de uma proteína? Um tratamento reduz o número de células? Um marcador de morte celular aumenta após a exposição a uma substância?

Essas perguntas são importantes e continuam sendo úteis. No entanto, elas dependem de uma hipótese prévia. Para desenhar esse tipo de ensaio, o pesquisador precisa saber antecipadamente qual via, organela, proteína ou desfecho deseja medir.

O problema é que as células raramente respondem de maneira isolada. Quando expostas a uma perturbação química, genética ou ambiental, as células podem sofrer alterações simultâneas em seu metabolismo, arquitetura nuclear, organização do citoesqueleto, tráfego vesicular, função mitocondrial e estado proliferativo. Se medimos apenas uma variável, podemos perder grande parte da resposta celular.

O _Cell Painting_ surge justamente como resposta a essa limitação. Em vez de perguntar se uma via específica foi ativada, ele pergunta: **como o estado global da célula mudou?**

Essa mudança é conceitualmente importante. O objetivo deixa de ser apenas confirmar uma hipótese e passa a incluir a descoberta de padrões fenotípicos inesperados. Por isso, o _Cell Painting_ se tornou uma das principais abordagens para a descoberta de mecanismos de ação, a comparação de perturbações, a triagem fenotípica, a toxicologia preditiva e a construção de atlas morfológicos.

## 3. Por que o Cell Painting funciona?

Uma dúvida comum é: como imagens de células conseguem informar algo sobre mecanismo de ação ou estado biológico?

A resposta está no fato de que alterações moleculares se propagam para estruturas celulares. Proteínas, vias de sinalização, metabolismo, estresse oxidativo, tráfego vesicular e organização do citoesqueleto afetam organelas e compartimentos celulares. Essas alterações podem modificar forma, textura, intensidade, distribuição espacial e relações entre estruturas.

O _Cell Painting_ explora exatamente essa relação. Ele não mede diretamente a atividade de uma enzima, a presença de um marcador de estresse ou a expressão de um gene específico. Em vez disso, mede as consequências morfológicas integradas dessas alterações.

Podemos pensar na seguinte cadeia:

**Perturbação molecular**  
↓  
**Alteração em vias celulares**  
↓  
**Mudanças em organelas e estruturas subcelulares**  
↓  
**Mudanças em intensidade, textura, forma e organização espacial**  
↓  
**Perfil fenotípico quantitativo**

Por isso, o _Cell Painting_ não deve ser interpretado como um ensaio mecanístico isolado. Ele é uma ferramenta para gerar, comparar e organizar assinaturas fenotípicas. Mecanismos biológicos podem ser inferidos por similaridade com perturbações conhecidas, mas essa inferência precisa ser validada por ensaios ortogonais.

!!! tip  
    Uma boa forma de interpretar o _Cell Painting_ é pensar nele como uma “impressão digital morfológica” da célula. Essa impressão digital não revela automaticamente a causa molecular, mas permite comparar estados celulares de forma sistemática.

## 4. Evolução histórica

Na primeira versão, seis fluoróforos eram adquiridos em cinco canais e marcavam sete organelas ou estruturas celulares, incluindo núcleo, retículo endoplasmático, nucléolo, complexo de Golgi, membrana plasmática, filamentos de F-actina e mitocôndrias. Como prova de conceito, os autores utilizaram células U2OS, aproximadamente 1.600 compostos e extraíram 824 _features_ com o CellProfiler. A análise demonstrou que perfis morfológicos podiam agrupar compostos com mecanismos de ação semelhantes.

Essa primeira versão apresentou a prova de conceito do método: imagens podem ser usadas para capturar assinaturas fenotípicas amplas. No entanto, ainda havia limitações importantes, incluindo a necessidade de maior padronização experimental, otimização das marcações, definição de controles e desenvolvimento de fluxos de análise mais robustos.

Três anos depois, Bray e colaboradores publicaram um protocolo mais detalhado e maduro. Essa versão consolidou o _Cell Painting_ como uma abordagem versátil e reprodutível, incorporando avanços independentes do Broad Institute e da Recursion Pharmaceuticals. O protocolo passou a marcar oito componentes celulares: núcleo, retículo endoplasmático, nucléolos, RNA citoplasmático, citoesqueleto de F-actina, complexo de Golgi, membrana plasmática e mitocôndrias.

Esse avanço também refletiu melhorias computacionais. Com o desenvolvimento dos _pipelines_ do CellProfiler, tornou-se possível extrair aproximadamente 1.500 _features_ por célula ou por poço. O trabalho também apresentou recomendações detalhadas para _layout_ de placa, controles, replicatas, aquisição de imagens, correção de iluminação, controle de qualidade e extração de características.

A terceira grande etapa veio com o protocolo otimizado associado ao JUMP Cell Painting Consortium, publicado por Cimini e colaboradores em 2023. Esse consórcio reuniu empresas farmacêuticas, organizações sem fins lucrativos e empresas de tecnologia para padronizar, otimizar e escalar o _Cell Painting_.

Essa versão trouxe avanços experimentais e analíticos. Entre eles, estão a introdução e o uso sistemático de métricas como _Percent Replicating_ (PR) e _Percent Matching_ (PM), empregadas para avaliar a reprodutibilidade das replicatas e a capacidade de perfis semelhantes recuperarem perturbações relacionadas. O protocolo também testou mudanças práticas para facilitar a automação, reduzir custos, melhorar o sinal e aumentar a robustez.

Entre as otimizações, o MitoTracker passou a ser adicionado diretamente ao meio de cultura, sem troca de meio, reduzindo a perda celular. A concentração real do MitoTracker foi corrigida para 500 nM. As etapas de permeabilização e marcação foram combinadas. Algumas concentrações de fluoróforos foram reduzidas sem perda relevante de qualidade, enquanto a concentração de SYTO 14 foi aumentada para melhorar a relação sinal-ruído. O volume final também foi reduzido, e demonstrou-se que placas fixadas poderiam ser imageadas por até duas semanas com pouca perda de qualidade.

Assim, a história do _Cell Painting_ pode ser entendida como uma progressão em três etapas: primeiro, a demonstração de que perfis morfológicos eram biologicamente informativos; depois, a consolidação de um protocolo reprodutível; por fim, a otimização para escala, padronização e uso em grandes consórcios.

## 5. A lógica biológica dos marcadores

O _Cell Painting_ utiliza fluoróforos que marcam estruturas celulares amplamente informativas. A escolha desses marcadores não é aleatória. Cada compartimento fornece uma janela para diferentes aspectos da biologia celular.

O núcleo informa sobre número de células, morfologia nuclear, condensação da cromatina e alterações no ciclo celular. O retículo endoplasmático informa sobre organização secretória e biossíntese proteica. O RNA citoplasmático e os nucléolos refletem aspectos da atividade biossintética. A actina informa sobre adesão, espalhamento, contração e arquitetura celular. O Golgi e a membrana plasmática informam sobre tráfego, polaridade e organização da superfície celular. As mitocôndrias informam sobre metabolismo, distribuição organelar e estado energético.

Como a resposta celular a diferentes perturbações é ampla, complexa e diversificada, o ensaio tenta lançar várias redes para capturar informações relevantes. Nesse mar de informações, entretanto, muitas medidas são redundantes e precisam ser selecionadas de maneira eficiente para que se obtenham informações significativas e capazes de representar consistentemente as diferentes respostas celulares.

A tabela abaixo resume os principais fluoróforos, canais e estruturas marcadas no protocolo clássico do _Cell Painting_.

|**Marcador**|**Excitação (nm)**|**Emissão (nm)**|**Estruturas marcadas**|**Canal no CellProfiler**|**Por que é biologicamente informativo?**|**Observações**|
|---|---|---|---|---|---|---|
|**Hoechst 33342**|387/11|417–477|Núcleo/DNA|DNA|Permite segmentação nuclear, contagem celular, morfologia nuclear e inferências sobre ciclo celular|No protocolo v3, reduzido de 5 para 1 µg/mL|
|**Concanavalina A / Alexa Fluor 488**|472/30|503–538|Retículo endoplasmático|ER|Reflete organização secretória, biossíntese proteica e arquitetura perinuclear|No v3, reduzida de 100 para 5 µg/mL; deve ser suficientemente brilhante para mascarar o vazamento de SYTO 14|
|**SYTO 14**|531/40|573–613|Nucléolos e RNA citoplasmático|RNA|Informa sobre atividade biossintética, conteúdo de RNA e organização nucleolar|No v3, aumentado de 3 para 6 µM; quando ligado a RNA, apresenta máximos próximos de 521/547 nm|
|**Faloidina / Alexa Fluor 568**|562/40|622–662|Citoesqueleto de F-actina|AGP|Informa sobre adesão, espalhamento, forma celular e organização estrutural|Compartilha o canal com WGA|
|**WGA / Alexa Fluor 555**|562/40|622–662|Golgi e membrana plasmática|AGP|Reflete organização de membrana, tráfego e compartimentos associados ao Golgi|O equilíbrio com a faloidina é crítico|
|**MitoTracker Deep Red**|628/40|672–712|Mitocôndrias|Mito|Informa sobre distribuição mitocondrial, organização metabólica e alterações estruturais|Adicionado às células vivas antes da fixação; no v3, corrigido para 500 nM|

!!! note  
    O valor do _Cell Painting_ não está em cada marcador isoladamente, mas na combinação entre canais. A interpretação emerge do perfil multiparamétrico, não de uma única intensidade de fluorescência.

## 6. Lógica dos canais e sobreposição espectral

### Por que seis fluoróforos em cinco canais?

Em microscopia de fluorescência, uma regra tradicional é evitar ao máximo a sobreposição espectral. Em geral, o ideal clássico seria associar um fluoróforo a um canal e um canal a uma estrutura. Essa estratégia facilita a interpretação direta da origem do sinal.

O _Cell Painting_ quebrou parcialmente esse paradigma. Em vez de tentar separar perfeitamente cada fluoróforo, o ensaio aceitou certo grau de sobreposição para aumentar o número de estruturas celulares medidas. Essa escolha foi deliberada: o objetivo não era interpretar cada canal como um marcador isolado, mas produzir um perfil fenotípico suficientemente rico para comparar estados celulares.

Essa foi uma aposta conceitual importante. A técnica abriu mão de parte da especificidade espectral em troca de maior densidade de informação morfológica. O sucesso do método mostrou que, quando o desenho experimental, a aquisição e a análise são bem controlados, essa estratégia pode ser extremamente poderosa.

### O canal AGP: actina, Golgi e membrana plasmática

O primeiro exemplo importante de sobreposição planejada ocorre no canal AGP. Nesse canal, a faloidina marca filamentos de F-actina, enquanto o WGA marca principalmente o Golgi e a membrana plasmática. Os fluoróforos conjugados a esses marcadores apresentam emissão na mesma faixa e, por isso, seus sinais são adquiridos juntos.

À primeira vista, isso parece uma limitação. No entanto, as estruturas marcadas ocupam regiões celulares parcialmente distintas. A actina aparece distribuída em fibras, no córtex celular e em regiões de adesão, enquanto o Golgi e a membrana plasmática apresentam padrões espaciais diferentes. Assim, embora o canal seja compartilhado, as _features_ de textura, localização, forma e granulosidade ajudam a capturar informações distintas.

A concentração relativa dos marcadores e, consequentemente, a intensidade das marcações são muito importantes. Se o WGA estiver muito intenso, pode se sobrepor à marcação de actina. Se a faloidina dominar o canal, a contribuição do Golgi e da membrana plasmática pode ser reduzida. Por isso, o equilíbrio entre esses marcadores foi cuidadosamente otimizado nas versões mais recentes do protocolo.

### SYTO 14 e o desafio da sobreposição com o canal de ER

O segundo caso importante envolve o SYTO 14. Esse marcador de ácidos nucleicos apresenta comportamento espectral complexo e pode gerar sinal em regiões próximas ao canal da Concanavalina A, usada para marcar o retículo endoplasmático.

Quando não ligado, o SYTO 14 tende a fluorescer de forma mais relevante no canal verde, podendo contribuir para o sinal no canal de ER. Quando ligado a RNA, seu espectro se desloca, favorecendo a detecção de nucléolos e RNA citoplasmático no canal apropriado. Mesmo assim, algum grau de sobreposição pode permanecer.

Por isso, a marcação de Concanavalina A precisa ser suficientemente robusta para que o sinal do retículo endoplasmático seja distinguível e não seja dominado pelo vazamento do SYTO 14. Esse ponto é especialmente importante em microscópios que utilizam cubos fixos de fluorescência, como alguns sistemas de aquisição automatizada, nos quais não é possível ajustar livremente as janelas de emissão.

Em protocolos adaptados, especialmente quando o equipamento não permite boa separação espectral, pode ser necessário remover ou substituir o SYTO 14. Em equipamentos que utilizam conjuntos fixos de filtros, como o Cytation, pode ser difícil evitar um vazamento considerável para outros canais e, consequentemente, seu uso pode não ser recomendado. Essa decisão reduz parte da informação sobre RNA e nucléolos, mas pode aumentar a robustez do ensaio em determinadas plataformas.

!!! warning  
    A sobreposição espectral no _Cell Painting_ não é um erro por si só. Ela se torna um problema quando compromete a consistência dos perfis, dificulta a segmentação ou gera diferenças artificiais entre placas, tratamentos ou lotes.

![Conceitos de cell health](../../assets/img/CP_pt.webp)

## 7. Fechamento

O _Cell Painting_ representa uma mudança profunda na maneira como utilizamos a microscopia em biologia celular. Em vez de procurar apenas um marcador associado a uma hipótese específica, a técnica busca descrever o estado global da célula por meio de centenas ou milhares de características morfológicas.

Essa mudança desloca o foco da confirmação de hipóteses para a descoberta de padrões biológicos. A imagem deixa de ser apenas uma evidência visual e passa a ser uma fonte de dados quantitativos sobre o estado celular.

No entanto, essa riqueza de informação exige rigor. A qualidade dos perfis depende criticamente do desenho experimental, da aquisição de imagens, da segmentação, da extração de características, da normalização e da análise estatística. Na próxima aula, discutiremos em mais detalhes o _workflow_ experimental e de análise, além de diferentes aplicações do método.