# Markdown — primeiros passos (NanoCell)

[Markdown](https://en.wikipedia.org/wiki/Markdown) é uma forma simples de escrever texto com estrutura usando apenas caracteres do teclado. Com ele, você pode criar títulos, listas, links, trechos de código, tabelas e outros elementos sem depender de um editor específico. A ideia é manter o conteúdo fácil de escrever, ler e reutilizar em diferentes contextos.

Isso faz do Markdown uma ferramenta útil em vários cenários. Ele pode ser usado para anotações pessoais, documentação de projetos, README de repositórios, Issues e Discussions no GitHub, páginas de sites, materiais de estudo e até rascunhos de textos mais longos. Em vez de aprender a formatar o texto de um único programa, você aprende uma sintaxe simples que pode ser aproveitada em muitas plataformas.

No contexto deste treinamento, Markdown será especialmente útil no GitHub, onde aparece com frequência em arquivos como README.md, na documentação do repositório, em comentários, Issues, Pull Requests e Discussions. É uma forma prática de registrar decisões, explicar procedimentos, organizar ideias e deixar o trabalho mais legível para outras pessoas.

Para anotações pessoais e organização do dia a dia, existem hoje duas grandes abordagens. Uma delas é o uso de plataformas online, como [Notion](https://www.notion.com), que oferecem integração entre dispositivos, interface visual amigável e recursos como bancos de dados, páginas interligadas e colaboração. A outra é o uso de arquivos mantidos diretamente pelo usuário, em uma pasta local ou sincronizada pela nuvem, como acontece com ferramentas como [Obsidian](https://obsidian.md), [Zettlr](https://www.zettlr.com), [VS Code](https://code.visualstudio.com) ou mesmo um editor de texto simples. Essa segunda abordagem costuma dar mais controle sobre os arquivos, facilitar portabilidade e reduzir dependência de uma plataforma específica. Já a primeira pode ser mais conveniente para quem prefere uma experiência pronta, visual e integrada.

Também vale notar que nem todo Markdown é exatamente igual. A base da sintaxe é bastante estável, mas diferentes plataformas podem adotar pequenas variações, chamadas de flavors. O GitHub usa o [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/), que adiciona alguns recursos extras.

> Meta do treino: aprender o suficiente para escrever notas, documentação e textos curtos com clareza e segurança.

  
## Onde você vai usar isso

Markdown aparece em vários contextos importantes:

- 📓 Anotações pessoais (Obsidian, Notion, VS Code)
- 📁 Documentação de projetos
- 🧪 Registro de experimentos
- 🧬 README de repositórios
- 💬 Issues e Discussions no GitHub
- 📄 Sites e páginas estáticas

Neste curso, vamos usar Markdown principalmente no **GitHub**, para:

- escrever README
- documentar projetos
- discutir ideias (Discussions)
- registrar decisões e análises

## 🧭 Ferramentas: duas abordagens principais

### 1) Plataformas online (ex: Notion)
- interface visual
- sincronização automática
- colaboração fácil
- mais dependência da plataforma

### 2) Arquivos locais (ex: Obsidian, VS Code)
- arquivos `.md` no seu computador
- controle total
- portabilidade (future-proof)
- funciona offline

👉 Não existe melhor absoluto — escolha depende do seu fluxo.

## ⚠️ Sobre diferenças de Markdown (flavors)

Markdown não é 100% idêntico em todos os lugares.

O GitHub usa:
👉 **GitHub Flavored Markdown (GFM)**

Principais diferenças práticas:

- suporte a tabelas
- checklist (`- [ ]`)
- syntax highlight automático em código
- menções (`@usuario`)
- referências a issues (`#123`)

👉 Neste material, tudo funciona no GitHub (salvo pequenas variações).

# Tutorial

A partir daqui é desejável que você tenha escolhido uma das ferramentas, pode até testar mais do que uma, e colocar a mão na massa!

## 1) Ênfase

Você pode destacar partes do texto para dar ênfase.

- Itálico: *texto* → `*texto*`
- Negrito: **texto** → `**texto**`

### Exercício
Deixe “hipótese” em negrito e “controle negativo” em itálico.


## 2) Títulos

Títulos organizam o texto e criam estrutura.

```md
# Título 1
## Título 2
### Título 3
```

### Exercício
Transforme:
Objetivo  
Materiais e Métodos
Ensaio de MTT
Ensaio de Calceína/PI/Hoechst  
Resultados  

em títulos e subtítulos.


## 3) Listas

Listas ajudam a organizar informações.

```md
- item
  - subitem
```

```md
1. passo
2. passo
```

### Exercício
Crie uma lista com 3 passos para rodar um pipeline.


## 4) Links

Links conectam conteúdos.

```md
[texto](https://link.com)
```

### Exercício
Crie um link para o site do lab.


## 5) Código

Markdown é muito usado para escrever comandos, trechos de código e nomes de arquivos de forma mais clara.

### Código em linha

Use uma **crase** antes e outra depois do trecho.  
Isso é útil para destacar **comandos curtos**, nomes de arquivos, pastas, pacotes ou funções no meio de uma frase.

Exemplos:

- Rode `pip install cellprofiler`
- O arquivo principal é `README.md`
- Abra a pasta `images/`

### Bloco de código

Use **três crases** para abrir e **três crases** para fechar o bloco.  
Isso é útil quando você quer mostrar um comando maior ou várias linhas de código separadas do texto.

Exemplo em Python:

```python
def f(x):
    return x**2
```

Você pode usar o nome de diferentes linguagens de programação e outras palavras como `markdown` (ou só `md`), `bash`, `text`, etc.

### Exercício
Escreva um comando de terminal em código.


## 6) Tabelas

```md
| Campo | Valor |
|------|------|
| Linha | Huh7 |
```

### Exercício
Crie uma tabela simples com duas colunas.


## 7) Imagens

```md
![alt](URL)
```

### Exercício
Adicione o logo do lab como imagem.


## 8) Checklist (GitHub)

```md
- [ ] Fazer experimento
- [x] Analisar dados
```


## 9) Exemplo de README

```md
# Projeto

Descrição do projeto

## Objetivo
Explicar o objetivo

## Como usar
1. Passo 1
2. Passo 2
```


## 10) Mini-desafio

Crie um resumo com:

- título
- lista
- link
- imagem


## Checklist final

- [ ] Consigo usar as formatações básicas em Markdown
- [ ] Consigo escrever README
- [ ] Consigo usar no GitHub
