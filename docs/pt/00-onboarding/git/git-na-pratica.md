# 📘 Tutorial: Como usar o GitHub como Lab Notebook

## 1. Criando sua conta no GitHub

Você vai criar uma conta no GitHub usando um e-mail que represente sua vida profissional.

!!! tip "Sugestão:"
    Use um e-mail com seu nome científico, por exemplo:
    - nome.sobrenome@gmail.com

Evite e-mails muito informais (apelidos, etc.), pois esse será parte da sua identidade profissional.

## 2. Acesso ao repositório do laboratório

O laboratório já criou um repositório para você, por exemplo:

`lcp-nanotoxicology-microplastic-label-free-mic-beatriz`

Você será convidada como colaboradora.

📩 **Importante:**
Você deve receber um e-mail do GitHub com o convite.

!!! todo "Ação necessária:"
    - Abra o e-mail
    - Clique em **“Accept invitation”**

Sem isso, você não terá acesso ao repositório.

## 3. Verificar se “Discussions” está habilitado

O lab notebook será feito usando a aba **Discussions** do GitHub.

### Verifique:

1. Entre no repositório
2. Procure a aba “Discussions” no alto da tela

!!! warning "Se não estiver visível:"
    Avise o orientador para habilitar.

## 4. Criando uma nova discussão

1. Clique em **“Discussions”**
2. Clique em **“New discussion”** (canto superior direito)

## 5. Tipos de discussão

Vamos começar simples, usando os tipos principais:

- **General** → execução de experimentos, análises
- **Ideas** → hipóteses, dúvidas, planejamento conceitual, planejamento estruturado de experimentos

1. Clique em **General**

!!! info "Regra prática:"
    - Pensando → *Ideas*
    - Planejando → *Ideas*
    - Executando / analisando → *General*

## 6. Como nomear uma discussão

No nosso exemplo de experimento, vamos adicionar um título que precisa ser **específico e organizado**, para facilitar buscas no futuro.

**❌ Evite:**

- “Treinamento”
- “Experimento 1”

**✅ Prefira:**

- “Treinamento cultura de células: Passagem”
- “Treinamento cultura de células: MTT”
- “Treinamento cultura de células: Micoplasma”
- “LCP – Exposição 24h – dose range”
- “Análise – LDA batch 1 vs batch 2”

!!! info "Regra:"
    Um post = uma unidade clara de trabalho

## 7. Estrutura do conteúdo (Lab Notebook científico)

Este é o ponto mais importante. O GitHub aqui não é só registro é **raciocínio científico documentado**. 

### 🧠 O que um bom registro precisa ter

Um bom registro é aquele que tem detalhes suficientes para que você ou outra pessoa consiga entender seu raciocínio. Para isso, é importante levar em consideração alguns fatores, listados abaixo, e na medida do necessário adicioná-los ao registro. 

#### 1. Contexto

O que você está fazendo e por quê

#### 2. Pergunta

Qual dúvida você está tentando responder

#### 3. Tipo de experimento

Deixe explícito:
- Exploratório
- Confirmatório

👉 Isso é essencial para interpretar os resultados corretamente.

#### 4. Desenho experimental (quando aplicável)

- Condições
- Controles
- Replicatas
- Layout (ex: placa 96 poços)
- Unidades biológica, experimental e observacional

👉 Pode incluir:

- Foto da placa
- Print do desenho experimental
- Esquema desenhado à mão

#### 5. O que foi feito

Procedimento objetivo

#### 6. Observações / Resultados

- O que você viu
- Problemas ocorridos

👉 Inclua imprevistos:

- Reagente acabou
- Substituição de última hora
- Poço perdido
- Erro de pipetagem

Isso é **parte do experimento**, não erro a esconder.

#### 7. Interpretação

O que você acha que isso significa

#### 8. Próximos passos

O que fazer a seguir

#### 9. Dúvidas / Decisão

Quando chamar o orientador, nesses casos marcar `@labnanocell` no post que um email de notificação é enviado.

## 🔁 Importante: o notebook é contínuo

Diferente de um relatório final:

👉 Você **não escreve tudo de uma vez**

Você vai:

- Criar a discussão
- Atualizar ao longo do tempo
- Adicionar comentários conforme o experimento evolui

👉 Isso é exatamente como um caderno de laboratório real.

## 🧾 Templates 

Esses *templates* são sugestões, basta clicar no ícone de copiar no canto da caixa e colar no GitHub. Esse primeiro bloco seria uma sugestão de pacote inicial, onde temos informações gerais sobre o projeto (título, objetivo, contexto, tipo de experimento), os demais são úteis mas provavelmente em um segundo momento, ou mesmo, caso sejam necessários.


```markdown
## 🧪 Título
Treinamento cultura de células: MTT (densidade celular)

## 🎯 Pergunta / Objetivo
Qual a relação entre densidade celular e sinal de MTT?

## 🧠 Contexto
Treinamento para entender resposta quantitativa do ensaio e o desenvolvimento da habilidade no cultivo celular.

## 🔬 Tipo de experimento
Treinamento
```

E com o tempo ir adicionando outros blocos, conforme for fazendo sentido, como:

```markdown
## 🧪 Desenho experimental

- Diferentes densidades celulares
- Placa 96 poços
- Controle: sem células
```
(Adicionar imagem se disponível)

```markdown
## ⚙️ O que foi feito

- Plaqueamento
- Incubação
- MTT (0.5 mg/mL)
- Leitura 570 nm
```

```markdown
## 📊 Observações / Resultados

- Aumento com densidade
- Saturação em altas densidades
```

```markdown
## 🔍 Interpretação

- Possível limite de linearidade
```

```markdown
## ➡️ Próximos passos

- Testar faixa intermediária
```

```markdown
## ❓ Dúvidas / Decisão
Qual faixa usar para experimentos futuros?
Marcar: @labnanocell
```
