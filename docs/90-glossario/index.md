
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

## Capítulo 1
### Hipótese

### Hipótese nula

### Hipótese alternativa 

### Experimentos Exploratórios

### Experimentos Confirmatórios 

## A) Termos essenciais (HCA/HCI)

### High-Content Imaging (HCI)
- **Definição:** aquisição automatizada e padronizada de imagens em larga escala (muitos campos/poços/placas), geralmente com microscopia e automação.
- **Por que importa no HCA:** sem padronização e escala, não há comparabilidade robusta.
- **Erros comuns:** achar que HCI = HCA; fazer HCI sem metadados completos.
- **Relacionados:** [[High-Content Analysis (HCA)]], [[Metadados]]

### High-Content Analysis (HCA)
- **Definição:** extração e análise quantitativa de medidas a partir de imagens (segmentação, features, perfis, estatística/ML).
- **Por que importa no HCA:** transforma imagem em dado analisável e reprodutível.
- **Erros comuns:** pular QC; misturar batches sem diagnóstico.
- **Relacionados:** [[QC]], [[Features]], [[Profiling]]

### Fenótipo (em HCA)
- **Definição:** padrão mensurável em nível celular/poço (morfologia, textura, intensidade, organização) associado a um estado biológico/perturbação.
- **Por que importa no HCA:** o objetivo é detectar e comparar fenótipos com rigor.
- **Erros comuns:** confundir artefato (aquisição/placa) com fenótipo.
- **Relacionados:** [[Artefato]], [[Batch effect]], [[Controle]]

### Perturbação (perturbation)
- **Definição:** intervenção experimental (fármaco, siRNA, nanopartícula, condição de meio, etc.) que pode alterar o fenótipo.
- **Por que importa no HCA:** define a unidade de comparação e a interpretação causal.
- **Erros comuns:** perturbações mal ancoradas por controles inadequados.
- **Relacionados:** [[Controles]], [[Desenho experimental]]

---

## B) Microscopia e fluorescência

### Resolução
- **Definição:** capacidade de distinguir dois objetos próximos como distintos.
- **Por que importa no HCA:** limita o que pode ser segmentado/medido (ex.: organelas pequenas).
- **Como reconhecer/medir:** perda de detalhes finos; estruturas “fundidas”.
- **Erros comuns:** aumentar zoom sem melhorar resolução real; ignorar NA e amostragem.
- **Relacionados:** [[NA (Abertura Numérica)]], [[Nyquist]]

### NA (Abertura Numérica)
- **Definição:** parâmetro da objetiva relacionado à coleta de luz e resolução.
- **Por que importa no HCA:** maior NA → melhor resolução e sinal (em geral).
- **Erros comuns:** comparar datasets com objetivas/NA diferentes como se fossem iguais.
- **Relacionados:** [[Resolução]], [[SNR]]

### Nyquist (Amostragem de Nyquist)
- **Definição:** critério para amostrar a imagem (tamanho de pixel efetivo) sem perder informação.
- **Por que importa no HCA:** subamostragem pode destruir detalhes úteis para segmentação/features.
- **Erros comuns:** usar binning/pixel size inadequado por conveniência.
- **Relacionados:** [[Resolução]], [[Binning]]

### SNR (Signal-to-Noise Ratio)
- **Definição:** relação entre sinal útil e ruído.
- **Por que importa no HCA:** SNR baixo gera segmentação ruim e features instáveis.
- **Como reconhecer/medir:** imagem “granulada”, baixa separação objeto/fundo; métricas de ruído.
- **Erros comuns:** compensar SNR baixo com pós-processamento não rastreável.
- **Relacionados:** [[Saturação]], [[Background]]

### Saturação
- **Definição:** pixels no limite máximo do sensor (perda de informação).
- **Por que importa no HCA:** distorce intensidades e features; pode mascarar fenótipos.
- **Como reconhecer/medir:** pixels “estourados”; histograma truncado no máximo.
- **Erros comuns:** “deixar bonito” para figura e reutilizar a mesma aquisição para análise.
- **Relacionados:** [[Dynamic range]], [[Exposição]]

### Bleed-through / Crosstalk
- **Definição:** sinal de um fluoróforo vazando para o canal de outro.
- **Por que importa no HCA:** gera medidas falsas e correlações artificiais entre canais.
- **Como reconhecer/medir:** estruturas idênticas em canais diferentes sem motivo biológico.
- **Erros comuns:** ignorar controles single-stain; trocar filtros sem documentar.
- **Relacionados:** [[Controles]], [[Autofluorescência]]

### Autofluorescência
- **Definição:** fluorescência intrínseca de células, plástico, meio ou contaminantes.
- **Por que importa no HCA:** aumenta background e pode simular fenótipos.
- **Erros comuns:** não medir background do meio/plástico; não considerar espectro.
- **Relacionados:** [[Background]], [[Bleed-through]]

### Fototoxicidade
- **Definição:** dano biológico induzido pela luz (especialmente em time-lapse/LCP).
- **Por que importa no HCA:** cria fenótipos artificiais e altera dinâmica celular.
- **Como reconhecer/medir:** mudança progressiva com tempo de exposição; morte/blebbing dependente de iluminação.
- **Erros comuns:** comparar time-lapse com protocolos de iluminação diferentes.
- **Relacionados:** [[Photobleaching]], [[LCP]]

### Photobleaching
- **Definição:** perda de fluorescência ao longo do tempo por degradação fotoquímica.
- **Por que importa no HCA:** distorce séries temporais e medidas de intensidade.
- **Erros comuns:** interpretar queda de sinal como efeito biológico.
- **Relacionados:** [[Fototoxicidade]], [[Time-lapse]]

---

## C) Ensaios e desenho experimental

### Controle negativo (negcon)
- **Definição:** condição que representa “baseline” (ex.: células não tratadas, veículo).
- **Por que importa no HCA:** ancora normalização e interpretação.
- **Erros comuns:** usar “negcon” inconsistente entre placas; misturar veículos diferentes.
- **Relacionados:** [[Normalização]], [[Batch effect]]

### Controle positivo (poscon)
- **Definição:** condição que deve produzir um efeito conhecido (ancora sensibilidade do ensaio).
- **Por que importa no HCA:** valida que o ensaio “responde” e ajuda QC.
- **Erros comuns:** poscon fraco/inconsistente; não monitorar potência ao longo do tempo.
- **Relacionados:** [[QC]], [[Replicação]]

### Replicação biológica vs técnica
- **Definição:** biológica = experimentos independentes; técnica = repetição dentro do mesmo experimento.
- **Por que importa no HCA:** define generalização e robustez.
- **Erros comuns:** tratar replicação técnica como evidência biológica.
- **Relacionados:** [[Batch effect]], [[Desenho experimental]]

### Randomização
- **Definição:** distribuição aleatória das condições na placa/ordem de aquisição.
- **Por que importa no HCA:** reduz viés por posição e fatores sistemáticos.
- **Erros comuns:** colocar controles sempre nas bordas; blocos grandes por condição.
- **Relacionados:** [[Efeito de borda]], [[Plate layout]]

### Efeito de borda (edge effect)
- **Definição:** diferenças sistemáticas em poços da borda (evaporação, temperatura, etc.).
- **Por que importa no HCA:** cria padrões confundidores.
- **Como reconhecer/medir:** gradientes por linha/coluna; padrões repetidos em várias placas.
- **Erros comuns:** ignorar; usar borda para condições críticas.
- **Relacionados:** [[Batch effect]], [[QC]]

### Plate layout
- **Definição:** mapeamento de condições/controles em uma placa.
- **Por que importa no HCA:** influencia batch effects, QC e poder estatístico.
- **Erros comuns:** layout sem controles distribuídos; não registrar mapa como metadado.
- **Relacionados:** [[Metadados]], [[Randomização]]

---

## D) QC (Controle de Qualidade)

### QC (Quality Control)
- **Definição:** conjunto de métricas e regras para detectar e excluir dados problemáticos antes da análise.
- **Por que importa no HCA:** “garbage in, garbage out”.
- **Como reconhecer/medir:** métricas de foco, saturação, blur, outliers de intensidade, contagem de células.
- **Erros comuns:** definir thresholds após ver o resultado; excluir sem registrar.
- **Relacionados:** [[Exclusão]], [[Rastreabilidade]]

### Threshold (limiar)
- **Definição:** valor de corte para separar objeto/fundo ou decidir exclusões.
- **Por que importa no HCA:** thresholds mudam segmentação e QC.
- **Erros comuns:** usar thresholds arbitrários sem evidência; não documentar.
- **Relacionados:** [[Segmentação]], [[Ilumination correction]]

### Exclusão (exclusion)
- **Definição:** remoção documentada de imagens/poços/células por critérios pré-definidos.
- **Por que importa no HCA:** protege contra artefatos e viés, se bem feito.
- **Erros comuns:** excluir seletivamente para “melhorar resultado”.
- **Relacionados:** [[Ética e integridade]], [[QC report]]

---

## E) Segmentação e features

### Segmentação
- **Definição:** separar objetos (núcleo, célula, organelas) do fundo e entre si.
- **Por que importa no HCA:** define as unidades de medida (single-cell).
- **Erros comuns:** over/under-segmentation; segmentar “célula” quando mede só núcleo.
- **Relacionados:** [[Over-segmentation]], [[Under-segmentation]]

### Over-segmentation
- **Definição:** dividir um objeto real em vários.
- **Sinal típico:** aumento artificial do número de células; objetos pequenos demais.
- **Relacionados:** [[Segmentação]], [[Watershed]]

### Under-segmentation
- **Definição:** fundir objetos distintos em um só.
- **Sinal típico:** objetos grandes demais; contagem baixa e variância estranha.
- **Relacionados:** [[Segmentação]]

### Features (atributos)
- **Definição:** medidas numéricas extraídas de objetos/imagens (forma, intensidade, textura, vizinhança).
- **Por que importa no HCA:** são a base para perfis e ML.
- **Erros comuns:** usar features instáveis/ruidosas; não filtrar redundância.
- **Relacionados:** [[Profiling]], [[Normalização]]

---

## F) Profiling e análise exploratória

### Perfil fenotípico (profile)
- **Definição:** vetor de features agregadas e normalizadas representando uma condição (ex.: poço/perturbação).
- **Por que importa no HCA:** permite comparar tratamentos e detectar assinaturas.
- **Erros comuns:** comparar perfis sem controles; misturar batches sem correção/diagnóstico.
- **Relacionados:** [[Normalização]], [[Batch effect]]

### Normalização
- **Definição:** transformar medidas para torná-las comparáveis (frequentemente em relação ao controle por placa).
- **Por que importa no HCA:** reduz variação técnica sistemática.
- **Erros comuns:** normalizar usando informação do teste (leakage); normalizar com controle ruim.
- **Relacionados:** [[Leakage]], [[Controle negativo]]

### Batch effect
- **Definição:** variação sistemática não-biológica associada a lote/dia/placa/operador/instrumento.
- **Por que importa no HCA:** pode dominar o sinal e gerar falsos padrões.
- **Como reconhecer/medir:** agrupamento por placa/dia em PCA/UMAP; shifts em distribuições.
- **Erros comuns:** “corrigir” sem diagnosticar; confundir batch com fenótipo real.
- **Relacionados:** [[Randomização]], [[PCA]], [[UMAP]]

### PCA
- **Definição:** método linear que reduz dimensionalidade maximizando variância explicada.
- **Por que importa no HCA:** útil para QC, batch diagnosis e exploração inicial.
- **Erros comuns:** interpretar PCs como fatores biológicos sem checar controles.
- **Relacionados:** [[UMAP]], [[Batch effect]]

### UMAP
- **Definição:** método não-linear de visualização/embedding.
- **Por que importa no HCA:** bom para padrões globais e clusters exploratórios.
- **Erros comuns:** tratar como evidência confirmatória; comparar UMAPs com parâmetros diferentes.
- **Relacionados:** [[PCA]], [[Clustering]]

---

## G) Machine Learning (ML) para HCA

### Baseline model
- **Definição:** modelo simples e robusto usado como referência (ex.: regressão logística, random forest).
- **Por que importa no HCA:** evita “pular” direto para DL sem necessidade.
- **Erros comuns:** escolher modelo complexo sem ganho real.
- **Relacionados:** [[Validação]], [[Overfitting]]

### Split (treino/teste/validação)
- **Definição:** separação de dados para avaliar generalização.
- **Por que importa no HCA:** splits errados causam otimismo artificial.
- **Erros comuns:** split aleatório ignorando placa/batch.
- **Relacionados:** [[Leakage]], [[Batch effect]]

### Leakage
- **Definição:** uso indevido de informação do teste no treino (direto ou indireto).
- **Por que importa no HCA:** infla performance e quebra validade científica.
- **Erros comuns:** normalizar com estatísticas globais; escolher features olhando o teste.
- **Relacionados:** [[Normalização]], [[Split]]

### Overfitting
- **Definição:** modelo aprende padrões específicos do treino e não generaliza.
- **Sinais:** performance alta no treino e baixa fora; instabilidade entre splits.
- **Relacionados:** [[Regularização]], [[Validação cruzada]]

### AUROC
- **Definição:** área sob a curva ROC (discriminação global).
- **Por que importa no HCA:** métrica comum em classificação (com limites).
- **Erros comuns:** usar AUROC em classes muito desbalanceadas sem PR/AUPRC.
- **Relacionados:** [[AUPRC]], [[Confusion matrix]]

---

## H) Reprodutibilidade, dados e integridade

### Metadados
- **Definição:** dados que descrevem os dados (condição, dose, tempo, placa, poço, instrumento, etc.).
- **Por que importa no HCA:** sem metadados completos, não há rastreabilidade nem análise correta.
- **Erros comuns:** nomes inconsistentes; unidades misturadas; campos faltantes.
- **Relacionados:** [[Data dictionary]], [[Ontologias]]

### Data dictionary
- **Definição:** tabela que define cada campo de metadado (tipo, valores válidos, exemplos).
- **Por que importa no HCA:** reduz ambiguidade e automatiza validação.
- **Relacionados:** [[Metadados]]

### Rastreabilidade (traceability)
- **Definição:** capacidade de reconstruir decisões, parâmetros, versões e exclusões.
- **Por que importa no HCA:** garante integridade e reprodutibilidade.
- **Erros comuns:** pipelines/notebooks sem versão; mudanças sem log.
- **Relacionados:** [[Ética e integridade]], [[Reprodutibilidade]]

### Reprodutibilidade
- **Definição:** outra pessoa (ou você no futuro) consegue reproduzir resultados com os mesmos dados e código.
- **Por que importa no HCA:** base para ciência confiável e colaboração.
- **Erros comuns:** ambientes não travados; notebooks que dependem de ordem manual.
- **Relacionados:** [[Ambientes Python]], [[Git]], [[README]]

### OME-TIFF
- **Definição:** formato de imagem que embute metadados padronizados para microscopia.
- **Por que importa no HCA:** preserva contexto de aquisição e facilita interoperabilidade.
- **Erros comuns:** perder metadados ao converter formatos.
- **Relacionados:** [[Metadados]], [[Data management]]

### CSV vs Parquet
- **Definição:** CSV é texto simples; Parquet é binário colunar e eficiente.
- **Por que importa no HCA:** performance e tamanho importam em datasets grandes.
- **Erros comuns:** usar CSV gigante e “travar tudo”; perder tipos/precisão sem perceber.
- **Relacionados:** [[Performance]], [[Data management]]