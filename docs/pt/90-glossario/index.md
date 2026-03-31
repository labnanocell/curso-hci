
# Curso HCA — Glossário

> Glossário vivo do curso.  
> Regra do curso: se um termo aparece 2× em aula, ele entra aqui.

---

## Como usar este glossário
- **Definição**: curta e operacional (o suficiente para usar no dia a dia).
- **Por que importa no HCA**: impacto prático em desenho, aquisição ou análise.
- **Como reconhecer/medir**: indicador observável, métrica ou sinal típico.
- **Erros comuns**: confusões frequentes em projetos reais.
- **Relacionados**: termos que o aluno deve linkar e ler em seguida.

---

## Capítulo 1 — Pergunta, hipótese e unidades

> Termos-base para transformar uma pergunta biológica em um teste claro, com unidade correta e interpretação honesta.

<a id="hipotese"></a>
**Hipótese**  
- **Definição:** afirmação **testável** sobre como uma variável (ou condição) afeta um desfecho observado.  
- **Por que importa no HCA:** define *o que* você vai medir (fenótipo), *como* comparar condições e *qual* evidência conta como suporte.  
- **Como reconhecer/medir:** consegue ser escrita como “Se X, então Y”, com Y observável (ex.: mudança em perfil fenotípico, contagem celular, intensidade, morfologia).  
- **Erros comuns:** hipótese vaga (“vai mudar alguma coisa”); confundir objetivo com hipótese; mudar a hipótese depois de ver o resultado.  
- **Relacionados:** [Hipótese nula](#hipotese-nula), [Hipótese alternativa](#hipotese-alternativa), [Experimentos exploratórios](#experimentos-exploratorios), [Unidade experimental](#unidade-experimental)

<a id="hipotese-nula"></a>
**Hipótese nula (H0)**  
- **Definição:** modelo “padrão” assumido para teste estatístico, geralmente “**não há diferença/efeito**” entre condições (ou efeito = 0).  
- **Por que importa no HCA:** ancora a inferência: p-valor e IC respondem “os dados são compatíveis com H0?”; ajuda a evitar conclusões baseadas só em visualizações.  
- **Como reconhecer/medir:** você consegue formular qual métrica/perfil comparado deveria ser igual sob H0 (ex.: tratamento = controle após normalização).  
- **Erros comuns:** interpretar “não rejeitar H0” como “provou que não existe efeito”; usar H0 genérica sem definir métrica/unidade.  
- **Relacionados:** [Hipótese alternativa](#hipotese-alternativa), [Experimentos confirmatórios](#experimentos-confirmatorios), [Unidade observacional](#unidade-observacional)

<a id="hipotese-alternativa"></a>
**Hipótese alternativa (H1/Ha)**  
- **Definição:** hipótese que compete com H0; descreve **que existe efeito/diferença** (direcional ou não).  
- **Por que importa no HCA:** orienta poder estatístico, escolha de métrica e expectativa de sinal (ex.: aumento/diminuição; mudança de perfil).  
- **Como reconhecer/medir:** consegue dizer o sentido esperado (quando aplicável) e em qual escala/unidade (poço, placa, experimento).  
- **Erros comuns:** Ha “flexível demais” (qualquer coisa serve); usar teste unilateral sem justificativa; declarar direcionalidade depois de ver os dados.  
- **Relacionados:** [Hipótese nula](#hipotese-nula), [Experimentos confirmatórios](#experimentos-confirmatorios), [Unidade experimental](#unidade-experimental)

<a id="experimentos-exploratorios"></a>
**Experimentos exploratórios**  
- **Definição:** estudos para **descobrir padrões**, gerar hipóteses e mapear variabilidade; não têm como foco principal “provar” uma hipótese pré-registrada.  
- **Por que importa no HCA:** HCA é naturalmente rico para exploração (muitas features); exploração bem feita gera hipóteses melhores e evita overclaim.  
- **Como reconhecer/medir:** múltiplas visualizações, QC/diagnóstico, busca de clusters/assinaturas; perguntas evoluem durante a análise.  
- **Erros comuns:** tratar exploração como confirmação; testar muitas coisas sem controle e concluir causalidade; não separar claramente o que foi explorado vs confirmado.  
- **Relacionados:** [Experimentos confirmatórios](#experimentos-confirmatorios), [Hipótese](#hipotese)

<a id="experimentos-confirmatorios"></a>
**Experimentos confirmatórios**  
- **Definição:** estudos desenhados para **testar uma hipótese específica** com critérios de decisão definidos (métricas, unidade, comparação, regras de exclusão).  
- **Por que importa no HCA:** evita “p-hacking” e conclusões frágeis; força clareza de unidade experimental e replicação biológica.  
- **Como reconhecer/medir:** plano explícito: quais condições, qual métrica principal, como normaliza, quantas réplicas, como testa, o que conta como sucesso/fracasso.  
- **Erros comuns:** confirmar com o mesmo dataset usado para explorar; mudar endpoint/threshold após ver resultados; ignorar batch effects e unidade correta.  
- **Relacionados:** [Hipótese nula](#hipotese-nula), [Hipótese alternativa](#hipotese-alternativa), [Unidade experimental](#unidade-experimental)

<a id="unidade-biologica"></a>
**Unidade biológica**  
- **Definição:** a entidade biológica sobre a qual você quer generalizar a conclusão (ex.: **um doador**, uma linhagem, uma cultura independente, um animal).  
- **Por que importa no HCA:** define o nível em que “replicação biológica” existe; evita confundir repetição técnica com evidência biológica.  
- **Como reconhecer/medir:** você consegue listar quais repetições são verdadeiramente independentes biologicamente (dias diferentes, passagens diferentes, doadores diferentes).  
- **Erros comuns:** chamar campos/poços de “replicação biológica”; misturar passagens/dias sem registrar; generalizar além da unidade biológica real.  
- **Relacionados:** [Unidade experimental](#unidade-experimental), [Unidade observacional](#unidade-observacional)

<a id="unidade-experimental"></a>
**Unidade experimental**  
- **Definição:** menor unidade que pode receber um tratamento **independentemente** (onde a randomização/atribuição acontece).  
- **Por que importa no HCA:** é a unidade correta para inferência estatística; evita pseudorreplicação (ex.: tratar células individuais como independentes quando o tratamento é por poço).  
- **Como reconhecer/medir:** pergunte: “o que eu randomizo?” e “o que eu trato separadamente?” — frequentemente é **o poço** (ou a placa) em HCA.  
- **Erros comuns:** usar célula como unidade quando o tratamento é por poço; ignorar correlação intra-poço; misturar níveis (célula/poço/placa) sem modelo adequado.  
- **Relacionados:** [Unidade observacional](#unidade-observacional), [Unidade biológica](#unidade-biologica), [Experimentos confirmatórios](#experimentos-confirmatorios)

<a id="unidade-observacional"></a>
**Unidade observacional**  
- **Definição:** unidade na qual as medidas são registradas (ex.: **célula**, campo, imagem, poço), podendo haver várias por unidade experimental.  
- **Por que importa no HCA:** HCA tem muita “subamostragem” (milhares de células por poço); você precisa resumir/modelar corretamente sem inflar n artificialmente.  
- **Como reconhecer/medir:** você consegue dizer “quantas observações por unidade experimental” (ex.: 9 campos/poço, 2.000 células/poço).  
- **Erros comuns:** reportar n = número de células quando n experimental é número de poços/experimentos; fazer teste estatístico como se tudo fosse independente.  
- **Relacionados:** [Unidade experimental](#unidade-experimental), [Unidade biológica](#unidade-biologica)