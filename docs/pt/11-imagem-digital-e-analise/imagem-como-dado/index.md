# Aula 1 — A imagem como dado

**Ao final da aula, a pessoa deverá ser capaz de:**

- reconhecer uma imagem digital como uma matriz de valores;
- explicar o que um pixel representa em termos de posição e intensidade;
- diferenciar tamanho do pixel, dimensão da imagem e resolução espacial;
- distinguir uma imagem RGB de uma imagem multicanal de fluorescência;
- interpretar profundidade de bits e faixa de valores;
- ler um histograma simples de intensidades;
- diferenciar os dados da imagem da forma como eles são exibidos;
- reconhecer que LUT, brilho e contraste podem alterar a visualização sem necessariamente alterar os valores dos pixels;
- identificar operações que modificam apenas a exibição e operações que modificam os dados;
- conhecer opções básicas de análise de imagem usando o Fiji.

## Pergunta orientadora

> Você sabe o que realmente existe dentro de um arquivo de imagem?

## 1. Antes de começar: o que você vê quando olha uma imagem?

Os seres humanos são altamente visuais. Dependemos bastante da visão e, por consequência, tendemos a confiar no que vemos.

Algumas limitações dessa característica serão discutidas mais adiante, especialmente quando falarmos sobre ética e interpretação de imagens. Por enquanto, vamos usar a nossa visão para avaliar a imagem abaixo.

![Live Cell Painting](../../assets/img/lcp.jpg)

Quando vemos uma imagem como essa, dependendo da nossa experiência, mesmo sem saber exatamente o que está sendo marcado, é possível fazer uma análise parecida com esta:

> “As células estão aderidas ao substrato, com uma confluência entre 70% e 80%. Os núcleos estão claramente marcados em verde, os nucléolos parecem mais evidentes e, no citoplasma, vejo estruturas que se parecem com pontos.”

Certo?

Mas isso ainda é uma interpretação. É uma estimativa feita pela nossa visão e processada pelo cérebro.

Neste curso, queremos usar imagens para realizar análises quantitativas. Para isso, precisamos começar a fazer outras perguntas:

- Onde a informação da imagem está armazenada?
- Como o computador “vê” essa imagem?
- O que significa o valor de um pixel?
- As cores fazem parte dos dados ou apenas da forma como eles são mostrados?
- O que acontece quando redimensionamos, convertemos ou ajustamos uma imagem?

Vamos responder essas perguntas a partir da prática.

## 2. Uma imagem é uma matriz de valores

Antes de discutir definições, vamos construir uma imagem muito simples e olhar o que existe dentro dela.

Para esta atividade, você precisará de:

- um editor de texto;
- o Fiji instalado;
- uma pasta para guardar os arquivos produzidos durante o tutorial.

Qualquer editor de texto serve, desde o Bloco de Notas até o `vi` ou o VS Code.

*Fiji is just ImageJ.* Você também poderia usar o ImageJ, caso já o tenha instalado. A diferença é que o Fiji inclui vários plugins úteis para trabalhar com bioimagens.

!!! download "Arquivos da atividade"

    Baixe as imagens utilizadas nesta aula:

    [Baixar arquivos da Aula 1](../../assets/aula-1-imagem-como-dado.zip){ .md-button .md-button--primary }

### Mãos na massa — Criando uma imagem

#### Objetivo

Mostrar concretamente que uma imagem pode ser criada, lida, editada e reconstruída a partir de valores numéricos.

#### Atividade no Fiji

1. Crie uma imagem em `File > New > Image`.
2. Use as seguintes configurações:
   - dê um nome à imagem;
   - selecione `8-bit`;
   - preencha com pixels pretos;
   - use dimensões de `10 × 10` pixels;
   - mantenha `1 slice`.
3. Aumente bastante o zoom para visualizar os pixels.
   - use a lupa;
   - ou use `Ctrl + +` no Windows/Linux e `Cmd + +` no macOS.
4. Dê um duplo clique na ferramenta `Pencil`.
5. Escolha tamanho `1`, correspondente a um pixel.
6. Escolha a cor branca e desenhe alguma coisa.
7. Repita o procedimento usando cinza.
8. Salve a imagem em `File > Save As > Text Image`.
9. Abra o arquivo salvo em um editor de texto.
10. Compare os valores do arquivo com o desenho.
11. Altere manualmente alguns valores.
12. Salve o arquivo com outro nome.
13. Importe a imagem modificada em `File > Import > Text Image`.
14. Compare a imagem original com a imagem modificada.

### Perguntas para explorar durante a prática

- O que mudou quando você desenhou com branco?
- Que valor apareceu no arquivo de texto?
- O que mudou quando você desenhou com cinza?
- A posição do número no arquivo tem relação com a posição do pixel na imagem?
- O que acontece quando você modifica um único valor?
- O computador precisa “ver” a célula para trabalhar com a imagem?

### O que podemos concluir a partir da prática?

Olhando o arquivo de texto, fica claro que a imagem é formada por números.

Esses números estão organizados em linhas e colunas. Chamamos essa organização de **matriz**.

Também vimos que os valores não estão soltos. Cada valor ocupa uma posição específica e corresponde a uma posição na imagem.

Em outras palavras, uma imagem digital combina:

- uma organização espacial;
- valores numéricos associados a cada posição.

Se pensarmos em uma imagem de microscopia de fluorescência, esses valores representam, de maneira simplificada, a intensidade registrada pelo detector em cada posição.

> [!quote] Imagem digital
> “Uma imagem pode ser definida como uma função de intensidade luminosa, denotada por f(x,y), cujo valor ou amplitude nas coordenadas espaciais (x,y) fornece a intensidade ou o brilho da imagem naquele ponto.”
>
> — Hélio Pedrini & William Schwartz (2008), *Análise de Imagens Digitais*

Isso nos leva ao próximo conceito.

Cada posição da matriz corresponde a um **pixel**.

O pixel é a menor unidade amostrada da imagem digital. Ele possui uma posição e um valor.

Mas é importante tomar cuidado com uma simplificação comum:

> Um pixel não é necessariamente uma estrutura biológica.

Um pixel é uma posição amostrada da imagem. O que ele representa biologicamente depende da óptica, do detector, do tamanho do pixel, do foco, do sinal, do ruído e de várias outras etapas da aquisição.

## 3. Pixel, resolução e amostragem

Agora que sabemos que uma imagem é uma matriz de valores, podemos explorar uma dúvida muito comum:

> Se eu aumentar o número de pixels de uma imagem, estou criando mais detalhe?

### Mãos na massa — Pixel não é detalhe biológico

#### Objetivo

Explorar a diferença entre ampliar a visualização, redimensionar a imagem e realmente adquirir mais informação.

#### Atividade no Fiji

Vamos continuar usando a imagem de `10 × 10` pixels.

1. Abra a imagem modificada.
2. Observe-a no maior zoom possível, por exemplo `3200%`.
3. Duplique a imagem em `Image > Duplicate`.
4. Redimensione a cópia em `Image > Scale`.
5. Use primeiro `Interpolation: None`.
6. Salve a cópia com `_interpolation_none` no nome.
7. Repita o procedimento usando:
   - `Bilinear`;
   - `Bicubic`.
8. Compare a imagem original e as imagens redimensionadas.
9. Observe as bordas e os valores dos pixels.
10. Repita o procedimento usando uma imagem real, de preferência do seu projeto.

### Desafios durante a prática

- O que aconteceu com os pixels usando `Interpolation: None`?
- Os valores se repetiram ou novos valores apareceram?
- O que mudou nas interpolações bilinear e bicúbica?
- As bordas ficaram mais suaves?
- A imagem redimensionada passou a mostrar alguma estrutura que não existia antes?
- Seria correto dizer que ela agora tem maior resolução óptica?

### Analisando o que aconteceu

Quando usamos `Interpolation: None`, o valor de cada pixel original é replicado nos novos pixels.

Se a imagem passa de `10 × 10` para `50 × 50` pixels, cada dimensão aumenta cinco vezes. Cada pixel original passa a ocupar um bloco de aproximadamente `5 × 5` pixels.

Nos métodos bilinear e bicúbico, novos valores são calculados com base nos pixels vizinhos.

Por isso, a imagem pode parecer mais suave, mas o software não recuperou informação nova da amostra. Ele apenas estimou valores intermediários.

Essa estimativa pode:

- suavizar bordas;
- alterar intensidades locais;
- modificar texturas;
- criar padrões artificiais.

> [!warning]
> Interpolação não é necessariamente “ruído” no sentido estatístico. Ela é uma transformação matemática sistemática dos dados. Mesmo assim, pode criar artefatos e alterar medições quantitativas.

### Da amostra até o pixel

Agora vamos acompanhar mentalmente o caminho entre a amostra e a imagem.

Primeiro, temos uma amostra biológica: células em cultura, cortes de tecido ou outro material.

A luz proveniente dessa amostra atravessa o sistema óptico. Nesse ponto, encontramos um primeiro limite: a **resolução óptica**.

A resolução óptica determina quão próximas duas estruturas podem estar e ainda serem reconhecidas como separadas.

A imagem formada pelo sistema óptico não é uma cópia perfeita do objeto. O sinal de cada ponto é espalhado em uma pequena região, fenômeno descrito pela **função de espalhamento de ponto**, ou PSF (*point spread function*).

Depois disso, a informação precisa ser amostrada pelo detector ou por um sistema de varredura.

É nesse momento que entra o tamanho do pixel.

O tamanho do pixel na amostra deve ser pequeno o suficiente para representar os detalhes que a óptica consegue produzir.

Quando usamos pixels muito menores do que o necessário, temos **superamostragem**, ou *oversampling*. Isso aumenta o volume de dados, mas não cria detalhes que a óptica não resolveu.

Quando usamos pixels grandes demais, temos **subamostragem**, ou *undersampling*. Nesse caso, duas estruturas que a óptica seria capaz de separar podem ser registradas dentro do mesmo pixel.

Uma regra bastante conhecida na microscopia é o critério de Nyquist. De forma simplificada, ele indica que o menor detalhe resolvível deve ser amostrado por pelo menos dois pontos. Na prática, frequentemente usamos algo próximo de 2 a 3 pixels por elemento de resolução.

Por exemplo, se o equipamento possui resolução lateral aproximada de `0,6 µm`, um tamanho de pixel na faixa de aproximadamente `0,2–0,3 µm/pixel` seria compatível com uma amostragem adequada.

### Explorando a escala da imagem

A imagem fornecida foi adquirida no Cytation 5 com uma objetiva de `20×`. Nela, cada pixel representa aproximadamente `0,321895 µm` na amostra.

No Fiji, vá em `Analyze > Set Scale` e use:

- `Distance in pixels`: `1`;
- `Known distance`: `0.321895`;
- `Pixel aspect ratio`: `1`;
- `Unit of length`: `µm`.

Depois, clique em `OK`.

### Perguntas para discussão

- Qual é a diferença entre tamanho do pixel e resolução óptica?
- Uma imagem com mais pixels necessariamente contém mais informação?
- O que acontece quando o pixel é maior do que o detalhe que queremos observar?
- O que acontece quando o pixel é muito menor do que o necessário?
- Redimensionar uma imagem depois da aquisição muda alguma dessas limitações?

Até aqui, falamos principalmente sobre **onde** o sinal foi registrado.

Agora precisamos discutir **com quantos valores** esse sinal foi representado.

## 4. Canais, RGB e profundidade de bits

Uma imagem não armazena apenas posição.

Ela também pode armazenar diferentes tipos de informação em canais separados e usar diferentes números de níveis para representar intensidade.

Vamos explorar primeiro a ideia de canais.

### Mãos na massa — Imagem multicanal e imagem RGB

#### Objetivo

Explorar como imagens multicanais de fluorescência e imagens RGB armazenam informação de maneiras diferentes.

#### Parte 1 — Imagem multicanal de fluorescência

Vamos usar uma imagem adquirida em dois canais distintos, usando os cubos GFP e PI.

**Inserir aqui o link para download da imagem.**

1. Abra a imagem.
2. Explore a barra na parte inferior da janela.
3. Observe as informações na barra superior.
4. Em uma das posições, você poderá ler algo semelhante a:

   ```text
   1/2 (G6_02_2_2_Propidium Iodide_001); 1224×904 pixels; 8-bit; 2.1MB
   ```

5. Mova para a outra posição e observe algo semelhante a:

   ```text
   2/2 (G6_02_1_2_GFP_001); 1224×904 pixels; 8-bit; 2.1MB
   ```

6. Observe a barra de status inferior do Fiji. Ela poderá mostrar algo como:

   ```text
   x=322, y=139, z=0, value=115
   ```

7. Deixe o cursor sobre uma posição e alterne entre as imagens.
8. Observe o que acontece com:
   - o nome do canal;
   - a posição na pilha;
   - o valor de intensidade.
9. Separe os canais em `Image > Color > Split Channels`.
10. Aplique a LUT `HiLo` em um dos canais.
11. Depois, aplique a LUT `Spectrum`.
12. Escolha um pixel e anote seu valor antes e depois de trocar a LUT.

### Perguntas para explorar

- Os canais mostram as mesmas estruturas?
- O valor do pixel muda quando você troca de canal?
- O valor do pixel muda quando você troca a LUT?
- Uma região vermelha no `HiLo` significa necessariamente que o detector saturou?
- A cor verde faz parte do dado original?

> [!warning]
> O `HiLo` está relacionado ao intervalo de visualização atual. Uma região vermelha indica que atingiu ou ultrapassou o máximo de exibição, mas isso não significa automaticamente saturação do detector.

#### Parte 2 — Imagem RGB

Agora vamos explorar uma imagem RGB.

1. Abra `Venn_diagram_rgb.png`.
2. Observe as informações na barra superior.
3. Você deverá encontrar algo semelhante a:

   ```text
   410×400 pixels; RGB; 641K
   ```

4. Posicione o cursor sobre uma região branca.
5. Observe algo como:

   ```text
   value=255,255,255
   ```

6. Repita o procedimento em regiões vermelhas, verdes, azuis, amarelas e cianas.
7. Separe os canais em `Image > Color > Split Channels`.
8. Compare os três canais em tons de cinza.
9. Abra `RGB_image.tif`.
10. Explore a imagem usando o que você aprendeu.

### Perguntas para explorar

- Por que uma região branca possui três valores altos?
- O que acontece nos canais vermelho e verde em uma região amarela?
- A imagem RGB contém três imagens independentes adquiridas separadamente?
- O que significa separar os canais de uma imagem RGB?
- Isso é igual a separar os canais de uma imagem de fluorescência?

### Analisando o que aconteceu

Na imagem de fluorescência, os canais correspondem a aquisições independentes feitas em diferentes faixas espectrais.

Cada canal contém sua própria matriz de intensidades e pode ser processado separadamente.

Na imagem RGB, cada posição espacial contém três componentes:

- vermelho;
- verde;
- azul.

Na imagem de fluorescência, observamos um valor por pixel em cada canal:

```text
value=135
```

Na imagem RGB, observamos três valores simultaneamente:

```text
value=144,63,112
```

Isso também mostra que as cores podem ter significados diferentes.

Em uma imagem RGB, as cores fazem parte da forma como a imagem foi codificada.

Em uma imagem de fluorescência, as cores geralmente são atribuídas depois da aquisição por meio de LUTs.

Por isso:

> Uma imagem verde nem sempre contém “pixels verdes”.

Ela pode conter apenas valores de intensidade mostrados com uma LUT verde.

### Profundidade de bits e quantização

Agora vamos discutir quantos valores podem ser usados para representar a intensidade de cada pixel.

A **quantização** é o processo de representar uma intensidade originalmente contínua usando um conjunto finito de valores numéricos.

Na microscopia de fluorescência, o detector recebe fótons provenientes da amostra, converte esse sinal em uma resposta elétrica e, depois, em um valor digital.

Esse valor é influenciado por vários fatores:

- intensidade do sinal;
- eficiência do detector;
- ganho;
- tempo de exposição;
- background;
- ruído;
- características do sistema óptico.

A profundidade de bits determina quantos valores estão disponíveis para representar essas diferenças.

Uma imagem de:

- 1 bit representa `2¹ = 2` níveis;
- 2 bits representam `2² = 4` níveis;
- 3 bits representam `2³ = 8` níveis;
- 8 bits representam `2⁸ = 256` níveis;
- 16 bits representam `2¹⁶ = 65.536` níveis.

Como a contagem começa em zero:

- 8 bits usam valores de `0` a `255`;
- 16 bits usam valores de `0` a `65.535`.

Nem todas as profundidades aparecem como tipos nativos no Fiji.

Por exemplo, uma aquisição de 12 bits pode ser armazenada em um arquivo de 16 bits, usando apenas parte da faixa disponível.

### Mãos na massa — Comparando profundidades de bits

#### Objetivo

Visualizar como a mesma estrutura pode ser representada com diferentes números de níveis de intensidade e observar a perda de informação causada pela redução da profundidade de bits.

#### Atividade no Fiji

1. Abra `gradient.tif`.
2. Crie uma cópia.
3. Vá em `Edit > Options > Conversions`.
4. Desmarque `Scale When Converting`.
5. Converta a cópia para 8 bits em `Image > Type > 8-bit`.
6. Observe o que aconteceu com os tons de cinza.
7. Abra `G6_02_2_2_Propidium Iodide_001.tif`.
8. Duplique a imagem e converta a cópia para 8 bits.
9. Observe o que aconteceu.
10. Volte a `Edit > Options > Conversions`.
11. Marque `Scale When Converting`.
12. Repita o procedimento nas duas imagens.
13. Compare as imagens convertidas com as originais.
14. Crie uma representação em `Analyze > 3D Surface Plot`.
15. Converta uma das imagens de 8 bits novamente para 16 bits.
16. Compare os valores antes e depois.

### Desafios durante a prática

- O que acontece quando `Scale When Converting` está desmarcado?
- O que acontece quando ele está marcado?
- As imagens convertidas parecem iguais às originais?
- Os valores continuam iguais?
- Quantos níveis podem existir em 8 bits?
- Quantos níveis podem existir em 16 bits?
- Converter novamente para 16 bits recupera os valores originais?
- Uma imagem visualmente igual contém necessariamente os mesmos dados?

### Analisando o que aconteceu

Quando `Scale When Converting` está desmarcado, valores acima da faixa de 8 bits não podem ser representados diretamente e podem ser truncados no limite da nova faixa.

Quando `Scale When Converting` está marcado, o Fiji mapeia o intervalo de visualização atual para a faixa de 8 bits.

Nesse segundo caso, a aparência geral pode ser preservada, mas os valores são reescalados e quantizados.

Por isso, duas imagens podem parecer praticamente iguais e, ainda assim, conter valores diferentes.

Ao converter de 16 para 8 bits, passamos de até 65.536 níveis possíveis para apenas 256.

Isso significa que valores diferentes precisam ser agrupados no mesmo nível.

Essa perda afeta a **resolução de intensidade**, não a resolução espacial.

O número de pixels e suas posições podem continuar os mesmos, mas a capacidade de distinguir pequenas diferenças de intensidade diminui.

E o que acontece quando convertemos novamente de 8 para 16 bits?

O Fiji aumenta a capacidade de armazenamento de cada pixel, mas não recupera a informação que já foi perdida.

> Aumentar a profundidade de bits depois da aquisição não cria informação nova.

A aparência da imagem na tela também não é uma leitura direta dos valores.

O Fiji usa um intervalo de visualização para mapear os valores da imagem para tons ou cores disponíveis na tela.

Por isso:

> Imagens com valores diferentes podem parecer iguais, e imagens com os mesmos valores podem parecer diferentes.

### Mensagem principal

> Uma profundidade de bits maior permite representar mais níveis de intensidade, mas não compensa baixo sinal, ruído elevado, saturação ou perda anterior de informação.

## 5. Histograma, visualização e valores reais

Agora vamos usar o histograma para observar como os valores estão distribuídos na imagem.

O histograma mostra a frequência dos valores de intensidade.

Em outras palavras:

> Quantos pixels existem em cada faixa de valores?

### Mãos na massa — Explorando o histograma

#### Objetivo

Relacionar alterações conhecidas nos valores da imagem com mudanças na forma do histograma.

#### Atividade no Fiji

1. Abra `G6_02_2_2_Propidium Iodide_001.tif`.
2. Abra `Analyze > Histogram` ou pressione `H`.
3. Explore o gráfico e os valores apresentados.
4. Observe em que região aparecem mais pixels.
5. Duplique a imagem.
6. Usando `Pencil`, escolha `Light Gray` e faça alguns traços.
7. Abra novamente o histograma.
8. Aplique uma LUT.
9. Observe novamente o histograma.
10. Inverta a LUT em `Image > Lookup Tables > Invert LUT`.
11. Observe o histograma.
12. Agora use `Edit > Invert`.
13. Observe novamente o histograma.

### Perguntas para explorar

- Em que região da escala há mais pixels?
- O desenho com `Light Gray` criou um novo pico?
- A LUT alterou o histograma?
- `Invert LUT` alterou os valores?
- `Edit > Invert` alterou os valores?
- As duas inversões produziram aparência semelhante?
- O efeito sobre os dados foi o mesmo?

### Lendo a janela do histograma

Comece pelos eixos.

No eixo `x`, vemos valores ou faixas de intensidade.

No eixo `y`, vemos quantos pixels foram encontrados em cada valor ou faixa.

Em uma imagem de 16 bits, a faixa teórica vai de `0` a `65.535`.

A faixa de cores abaixo do eixo `x` mostra como esses valores estão sendo representados pela LUT atual.

A janela também apresenta informações como:

- `N`: número total de pixels incluídos no cálculo;
- `Min`: menor valor encontrado;
- `Mean`: média das intensidades;
- `Max`: maior valor encontrado;
- `StdDev`: desvio-padrão das intensidades;
- `Mode`: valor ou classe mais frequente;
- `Bins`: número de classes usadas para resumir os valores;
- `Bin Width`: largura de cada classe;
- `Value` e `Count`: valor aproximado da classe e número de pixels.

Em imagens de 16 bits, o Fiji frequentemente mostra o histograma usando 256 bins.

Isso significa que cada barra pode agrupar vários valores.

Portanto:

> O número de barras do histograma não é necessariamente igual ao número de valores possíveis da imagem.

### O que aprendemos ao mudar a imagem?

Quando aplicamos uma LUT, alteramos a forma como os valores são exibidos.

Os valores subjacentes permanecem iguais.

Quando usamos `Invert LUT`, a representação muda, mas a matriz continua igual.

Quando usamos `Edit > Invert`, os valores dos pixels são modificados.

As duas operações podem produzir imagens visualmente semelhantes, mas os dados são diferentes.

Esse é um dos pontos mais importantes da aula:

> A aparência da imagem não garante que os dados sejam os mesmos.

Também vale notar que o histograma descreve a distribuição de intensidades, mas não mostra onde os pixels estão.

Duas imagens com distribuições semelhantes podem ter organizações espaciais completamente diferentes.

## 24. Implicações para HCI/HCA

Em HCI/HCA, operações realizadas no início do pipeline afetam todas as etapas seguintes.

Uma conversão inadequada de profundidade de bits pode reduzir diferenças de intensidade. Uma interpolação pode modificar bordas e texturas. Uma normalização de visualização aplicada aos valores pode alterar a distribuição do sinal.

Essas mudanças podem afetar:

- segmentação;
- intensidade média;
- textura;
- granularidade;
- correlação entre canais;
- classificação de fenótipos;
- comparação entre tratamentos.

Por isso, é necessário documentar:

- formato original;
- profundidade de bits;
- faixa de valores;
- conversões;
- ajustes;
- filtros;
- redimensionamentos;
- LUTs usadas apenas para visualização.

O objetivo não é evitar todo processamento. O objetivo é compreender o que cada operação faz e garantir que ela seja aplicada de forma consistente e justificada.

## 25. Fechamento

Nesta aula, vimos que uma imagem digital não é apenas aquilo que aparece na tela.

Ela é uma estrutura numérica organizada espacialmente.

Também vimos que:

- o pixel representa uma posição amostrada e um valor;
- resolução óptica e tamanho de pixel são conceitos diferentes;
- redimensionamento não cria informação óptica;
- imagens multicanais e RGB armazenam informações de formas diferentes;
- profundidade de bits determina quantos níveis podem ser representados;
- reduzir a profundidade de bits pode eliminar diferenças;
- aumentar a profundidade depois não recupera informação perdida;
- LUTs podem alterar a visualização sem alterar os dados;
- o histograma descreve a distribuição de intensidades, mas não sua posição.

Esses conceitos serão retomados nas próximas aulas, especialmente quando discutirmos aquisição, segmentação e extração de características.

### Principais conceitos

> **Resolução** → o que pode ser distinguido pelo sistema  
> **Amostragem** → com quantos pixels isso será representado  
> **Quantização** → com quantos níveis a intensidade será registrada

> A imagem exibida na tela é uma representação dos dados, não os dados em si.

> Toda análise quantitativa depende de compreender o que foi adquirido e o que foi modificado durante o processamento.

### Exercícios

1. Qual é a diferença entre um pixel e uma estrutura biológica?
2. Por que ampliar uma imagem não aumenta sua resolução óptica?
3. Qual é a diferença entre uma imagem RGB e uma imagem multicanal?
4. Aplicar uma LUT altera os valores dos pixels?
5. O que acontece quando uma imagem de 16 bits é convertida para 8 bits?
6. Por que converter novamente para 16 bits não recupera os valores originais?
7. O histograma informa onde estão os pixels mais brilhantes?
8. Qual é a diferença entre `Invert LUT` e `Edit > Invert`?
9. Por que duas imagens com valores diferentes podem parecer iguais na tela?
10. Que etapas de um pipeline de HCA podem ser afetadas por uma conversão inadequada da imagem?

### Para reflexão

> Antes desta aula, eu pensava que uma imagem era...  
> Agora eu entendo que uma imagem é...

### Para aprofundar

- ImageJ User Guide — conceitos de imagens, tipos de dados, LUTs e histogramas.
- Pedrini, H.; Schwartz, W. R. *Análise de Imagens Digitais*.
- Murphy, D. B.; Davidson, M. W. *Fundamentals of Light Microscopy and Electronic Imaging*.
- Waters, J. C. Accuracy and precision in quantitative fluorescence microscopy.
