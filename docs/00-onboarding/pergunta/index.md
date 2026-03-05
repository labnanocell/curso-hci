---
hide:
  - navigation
  - toc
---

# A sua hipótese é o farol do seu projeto

Nos últimos anos o nosso laboratório tem se dedicado a análises de alto conteúdo (*high-content analysis*) em ensaios baseados em imagem (*image-based analysis*). Isso exige que pessoas com formação majoritariamente em biológicas se aventurem por regiões meio “obscuras” como computação, estatística e engenharia de dados.

Nessa jornada, é fácil se perder entre códigos, arquivos, planilhas, metadados e gráficos. O antídoto é simples: **voltar sempre para a pergunta biológica** (e a hipótese que ela gera). Ela é o seu farol.

![Mapa da aventura do HCI/HCA](../../assets/img/hci-aventura-mapa.webp)

**Pergunta → desenho experimental → aquisição → QC → análise → interpretação → comunicação → reprodutibilidade**

---

## Hipótese é um princípio fundamental

O caminho é longo e tudo começa com uma hipótese bem formulada.

!!! info "Hipótese"
    Uma **afirmação testável** sobre como uma perturbação (X) afeta um desfecho observável (Y), sob condições definidas.

Uma hipótese boa é clara o suficiente para você completar a frase:

> **Se X, então Y (medido por Z), comparado a W.**

Na forma mais formal, falamos em:
- **Hipótese nula** ($H_0$): não há efeito/diferença no parâmetro definido (efeito = 0).
- **Hipótese alternativa** ($H_1$): há efeito/diferença (efeito ≠ 0, ou efeito > 0 / < 0, se direcional).

!!! quote "Exemplo (microplásticos em Huh-7)"
    “Microplásticos causam alterações morfológicas em células Huh-7.”
    
    - $H_0$: não há alteração morfológica (diferença = 0) em relação ao controle, dentro da variabilidade esperada  
    - $H_1$: há alteração morfológica (diferença ≠ 0) em relação ao controle

!!! tip "Dica prática"
    Em HCA, quase sempre vale escrever também **como** você vai operacionalizar “alteração”: por exemplo, mudança no **perfil fenotípico** vs controle (distância, separação em embedding, classificador, etc.).

### “Hypothesis-driven” vs “data-driven”
Com a chegada das “ômicas” e dos ensaios em larga escala, ficou comum uma abordagem mais **data-driven** (agnóstica, exploratória), focada em descoberta de padrões e geração de hipóteses.

No HCI/HCA, você vai usar as duas coisas:
- às vezes uma abordagem mais **clássica** (testando uma hipótese específica)
- às vezes uma abordagem mais **exploratória**
- e muitas vezes uma mistura das duas

O importante é saber **em que modo você está**, para não tirar conclusões fortes demais na hora errada.

---

## Nem todos os experimentos são iguais

Vamos pensar nos experimentos em dois “modos”:

### Experimentos exploratórios
Servem para **descobrir padrões**, mapear variabilidade e gerar/refinar hipóteses.
- brilha em: escala, descoberta, geração de hipóteses
- pode te trair em: confundidores (lote, placa, densidade, tempo, viés de segmentação), múltiplas comparações e overclaim

!!! warning "Regra honesta"
    Exploração é essencial — mas conclusões confirmatórias exigem um desenho confirmatório (com plano e critérios claros).

### Experimentos confirmatórios
Servem para **testar uma hipótese específica** com:
- endpoint principal (o que você mede)
- unidade experimental (qual é o n)
- critérios de QC/exclusão
- plano de análise

No nosso contexto, *Live Cell Painting* frequentemente entra como **exploratório** (gera hipóteses) e depois você confirma com intervenções mais específicas — ou com um desenho confirmatório dentro do próprio HCI, se o plano estiver bem definido.

### E os experimentos piloto?
**Piloto** é outra coisa: geralmente menor escala, etapa de padronização e calibração.
Objetivos típicos:
- acertar controles positivos/negativos
- estimar variabilidade e tamanho de efeito
- decidir número de poços/placas (n) razoável
- validar se o ensaio “responde” e se o QC é consistente

Não subestime: experimento confirmatório sem controles bem acertados costuma morrer na praia.

---

## Correlacional vs intervencional

Outra distinção útil:

- **Correlacional/observacional:** você observa associações e padrões (sem manipular um fator causal de forma limpa).
- **Intervencional:** você manipula uma variável (X) de forma controlada para fortalecer inferência causal.

Nós vamos usar correlações o tempo todo (ex.: comparar perfis fenotípicos, avaliar dose–resposta, explorar clusters). Elas são poderosas — e também perigosas (confundidores). Veja exemplos clássicos de correlações espúrias: [Spurious correlations](https://www.tylervigen.com/spurious-correlations).

Intervenções ajudam quando você precisa sustentar causalidade/MoA:
- dose/tempo bem controlados
- resgate de fenótipo (recovery)
- knockdown/overexpression
- mudanças controladas de ambiente (soro, matriz, estresse, co-poluentes)
- randomização/bloqueio (reduz confundidores)
- inibidores como teste mecanístico

---

## A equação fundamental do desenho experimental e a unidade de análise

!!! quote
    “A well-designed experiment (1) can isolate the effects of interest from other factors that may influence the outcome, (2) replicates the right aspect of the experiment, and (3) can generalise the results…”  
    *Stanley E. Lazic — Experimental Design for Laboratory Biologists*

A ideia central é que o seu resultado observado mistura componentes diferentes:

$$
\mathbf{Resultado} =
\mathrm{Efeito\ do\ tratamento} +
\mathrm{Efeito\ biológico} +
\mathrm{Efeito\ técnico} +
\mathrm{Erro}
$$

- **Efeito do tratamento:** a perturbação de interesse (nanomaterial, dose, tempo, inibidor, etc.)
- **Efeito biológico:** características do modelo (linhagem, estado, genética, histórico) que influenciam o fenótipo
- **Efeito técnico:** placa, dia, operador, pipetagem, instrumentação, batch effects, etc.
- **Erro:** ruído que sobra (inclui variação entre unidades experimentais, erro de tratamento, erro de medida e subamostragem)

!!! tip "Aforisma"
    *Hope for the best, but plan for the worst.*

Por que diferenciar erros?
1) Para saber **onde agir** para reduzir ruído (mais unidades experimentais? mais medições? melhor calibração?)
2) Para testar hipóteses corretamente: **o n do teste vem da unidade experimental**, não da quantidade de células/imagens.

Também temos duas ferramentas clássicas para reduzir viés e confundidores:
- **Blocking (bloqueio):** balancear condições dentro de “blocos” (dia, placa, operador)
- **Blinding (cegamento):** analisar sem saber a condição, quando possível

---

## Replicação, pseudorreplicação e o seu n

Se você usa 10 ratos que nasceram de 2 mães e faz várias medidas bioquímicas/genéticas, qual é o seu $n$ “biológico”? Muitas vezes não é 10. Esse é o tipo de confusão que gera **pseudorreplicação**.

Para não cair nisso, internalize três conceitos:

- **Unidade biológica:** sobre o que você quer generalizar (ex.: doador, população, espécie, modelo)
- **Unidade experimental:** menor unidade que recebe tratamento de forma independente (onde você randomiza)
- **Unidade observacional:** onde você mede (células, campos, imagens…)

!!! tip "Dica para definir o seu n"
    *The sample size is where you randomise.*

Em HCA, é comum:
- unidade experimental = **poço** (tratamento aplicado por poço)
- unidade observacional = **células/imagens** dentro do poço

Isso implica um ponto crucial: **mais células não aumentam o n experimental** — elas aumentam a precisão da estimativa *dentro* do poço.

---

## Exercícios (para hoje)

1) **Hipótese em 2 linhas**  
   Escreva sua hipótese no formato: “Se X, então Y (medido por Z), comparado a W.”

2) **H0/H1 operacional**  
   Defina $H_0$ e $H_1$ usando uma métrica que você realmente pretende usar (ex.: distância de perfil vs controle, contagem celular, etc.).

3) **Qual é o seu n?**  
   Para o seu experimento: unidade biológica, experimental e observacional. Qual é o $n$ experimental?

4) **Exploratório ou confirmatório?**  
   Diga qual parte do seu projeto é exploração e qual é confirmação. O que você pode concluir em cada uma?

---

## Termos introduzidos nesta página (glossário)
- [Hipótese](../../90-glossario/index.md#hipotese)
- [Hipótese nula ($H_0$)](../../90-glossario/index.md#hipotese-nula)
- [Hipótese alternativa ($H_1$)](../../90-glossario/index.md#hipotese-alternativa)
- [Experimentos exploratórios](../../90-glossario/index.md#experimentos-exploratorios)
- [Experimentos confirmatórios](../../90-glossario/index.md#experimentos-confirmatorios)
- [Unidade biológica](../../90-glossario/index.md#unidade-biologica)
- [Unidade experimental](../../90-glossario/index.md#unidade-experimental)
- [Unidade observacional](../../90-glossario/index.md#unidade-observacional)


## Para aprofundar (opcional)
- [What exactly is ‘N’ in cell culture and animal experiments?](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.2005282)
- [Evaluating batch correction methods for image-based cell profiling](https://www.nature.com/articles/s41467-024-50613-5)