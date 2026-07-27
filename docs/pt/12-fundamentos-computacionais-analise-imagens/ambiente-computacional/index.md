# Ambiente computacional e reprodutibilidade com Pixi

## Objetivos pedagógicos

Ao final desta aula, a pessoa deverá ser capaz de:

- explicar por que ambientes computacionais são importantes para a reprodutibilidade;
- identificar o papel dos arquivos `pixi.toml` e `pixi.lock`;
- reconhecer as principais seções de um arquivo `pixi.toml`;
- instalar um ambiente fornecido junto com um projeto;
- diferenciar `pixi install`, `pixi shell` e `pixi run`;
- verificar se está trabalhando na pasta e no ambiente corretos;
- adicionar uma nova dependência ao projeto;
- reconhecer problemas básicos relacionados a plataformas e dependências;
- relacionar a organização do ambiente computacional com um pipeline de análise de imagens.

# Aula

## 1. Por que precisamos de um ambiente computacional (*env*)?

Vamos começar nossa jornada no uso de ferramentas computacionais para análise de imagens.

Para isso, nada melhor do que ter um ambiente seguro para trabalhar, não é verdade?

Os *environments*, que daqui em diante chamaremos carinhosamente de **envs**, ajudam a resolver dois problemas muito comuns em ciência de dados e bioinformática.

O primeiro é a **reprodutibilidade**.

Sabe aquela experiência de tentar executar o código de outra pessoa e receber um erro atrás do outro? Você corrige um pacote, aparece outro erro. Atualiza uma biblioteca, surge um conflito diferente. Depois de algum tempo, sente-se como um castor 🦫 tentando tapar os vazamentos de uma barragem enquanto outros três aparecem.

O segundo problema é a **interferência entre projetos**.

Imagine que você esteja analisando um experimento de *Live Cell Painting*. O pipeline funciona normalmente com determinadas versões de Python, pandas, NumPy, scikit-learn, pycytominer e bibliotecas de visualização. Agora imagine que outra análise exige uma versão mais nova de uma dessas bibliotecas. Você atualiza o pacote e, de repente, o primeiro pipeline deixa de funcionar.

Um ambiente computacional reduz esse tipo de problema porque mantém as dependências de cada projeto separadas.

```text
Projeto A
├── Python 3.11
├── pandas 2.2
└── scikit-learn 1.5

Projeto B
├── Python 3.10
├── pandas 1.5
└── scikit-learn 1.2
```

Cada projeto trabalha com seu próprio conjunto de ferramentas, com pacotes e versões específicos.

Isso também cria um espaço mais seguro para:

- testar códigos;
- executar pipelines de terceiros;
- experimentar novas bibliotecas;
- atualizar dependências;
- apagar e recriar o ambiente quando alguma coisa der errado.

!!! important "Conceito importante"
    Um ambiente computacional não contém apenas “os programas que usamos”. Ele representa uma parte da metodologia da análise.

    Registrar o ambiente ajuda outra pessoa, que pode ser você mesmo daqui a alguns meses, a reconstruir as condições em que o pipeline foi executado.

## 2. Por que usaremos Pixi?

Existem várias ferramentas para criar ambientes computacionais, como `venv`, Conda, Mamba, Docker e Pixi.

Durante muito tempo, utilizamos Conda em nossos projetos. Neste curso, usaremos principalmente o **Pixi**.

O Pixi permite:

- declarar as dependências do projeto;
- instalar pacotes dos ecossistemas Conda e PyPI;
- registrar versões exatas em um arquivo de *lock*;
- trabalhar em diferentes sistemas operacionais;
- criar tarefas reutilizáveis;
- executar comandos dentro do ambiente sem precisar ativá-lo manualmente.

A ideia central é:

```text
pixi.toml
    ↓
descreve o ambiente desejado
    ↓
pixi install
    ↓
cria o ambiente e gera/atualiza pixi.lock
    ↓
pixi run
    ↓
executa comandos dentro desse ambiente
```

## 3. O `pixi.toml`: a receita do ambiente

Para descrever um projeto Pixi, usamos um arquivo chamado `pixi.toml`.

```toml
[workspace]
name = "lcp-analysis-pipeline"
version = "0.1.0"
description = "Reproducible image analysis and phenotypic profiling pipeline for Live Cell Painting assays"
authors = ["Bispo"]
channels = ["conda-forge", "bioconda"]
platforms = ["linux-64", "osx-64", "osx-arm64", "win-64"]

[dependencies]
python = ">=3.10,<3.13"
ipykernel = ">=6.0"
pandas = ">=2.0"
numpy = ">=1.26"
matplotlib = ">=3.8"

[pypi-dependencies]
copairs = ">=0.5"

[tasks]
check-python = "python --version"
notebook = "jupyter lab"
```

Esse arquivo funciona como uma receita para configurar o ambiente. Ele informa o nome do projeto, descrição, autores, canais, plataformas, dependências e tarefas.

!!! question "Para reflexão"
    Pense em um pipeline usado no seu projeto.

    Quais programas ou bibliotecas seriam necessários para reproduzi-lo?

    Ele depende apenas de Python ou também utiliza ferramentas como CellProfiler, Cellpose, Fiji, R ou bibliotecas específicas para análise estatística?

## 4. Entendendo as seções do `pixi.toml`

### 4.1. `[workspace]`

A seção `[workspace]` contém informações gerais do projeto:

```toml
[workspace]
name = "lcp-analysis-pipeline"
version = "0.1.0"
description = "Phenotypic profiling pipeline"
authors = ["Bispo"]
```

O campo `name` identifica o workspace. O campo `version` permite acompanhar versões do próprio projeto. Ele não representa a versão do Python ou das bibliotecas.

### 4.2. `channels`

Os canais indicam onde o Pixi deve procurar os pacotes:

```toml
channels = ["conda-forge", "bioconda"]
```

O `conda-forge` fornece grande parte das bibliotecas científicas usadas em Python. O `bioconda` oferece muitos pacotes voltados para bioinformática e ciências da vida.

### 4.3. `platforms`

As plataformas indicam os sistemas operacionais suportados:

```toml
platforms = ["linux-64", "osx-64", "osx-arm64", "win-64"]
```

| Plataforma | Sistema |
|---|---|
| `linux-64` | Linux com processador de 64 bits |
| `osx-64` | macOS com processador Intel |
| `osx-arm64` | macOS com Apple Silicon |
| `win-64` | Windows de 64 bits |

### 4.4. `[dependencies]`

```toml
[dependencies]
python = ">=3.10,<3.13"
ipykernel = ">=6.0"
pandas = ">=2.0"
numpy = ">=1.26"
```

A expressão `python = ">=3.10,<3.13"` aceita versões de Python maiores ou iguais a 3.10 e menores que 3.13.

### 4.5. `[pypi-dependencies]`

```toml
[pypi-dependencies]
copairs = ">=0.5"
```

Para adicionar um pacote do ecossistema Conda:

```bash
pixi add pandas
```

Para adicionar um pacote do PyPI:

```bash
pixi add --pypi copairs
```

### 4.6. `[tasks]` : comandos personalizados do projeto

A seção `[tasks]` é opcional. Nós não a utilizaremos como parte central deste curso, mas é importante saber que ela existe porque muitos projetos Pixi usam esse recurso.

As _tasks_ permitem associar um nome curto e fácil de lembrar a um comando mais longo.

Podemos pensar nelas como **atalhos personalizados do projeto**.

Por exemplo:

```toml
[tasks]
check-python = "python --version"
notebook = "jupyter lab"
run-analysis = "python scripts/run_analysis.py"
```

Nesse caso, o projeto define três tarefas:

|**Tarefa**|**Comando executado**|
|---|---|
|`check-python`|verifica a versão do Python|
|`notebook`|abre o JupyterLab|
|`run-analysis`|executa o script principal da análise|

Para executar uma tarefa, usamos:

```bash
pixi run nome-da-tarefa
```

Por exemplo:

```bash
pixi run check-python
```

é equivalente a executar:

```bash
pixi run python --version
```

Da mesma forma:

```bash
pixi run notebook
```

executa:

```bash
pixi run jupyter lab
```

A diferença é que a pessoa não precisa conhecer ou memorizar o comando completo. Ela precisa apenas saber o nome da tarefa definido pelo projeto.

As tasks podem ser úteis para:

- abrir notebooks;
- executar scripts de análise;
- testar se o ambiente está funcionando;
- formatar ou revisar código;
- executar testes;
- gerar figuras e tabelas;
- rodar etapas recorrentes de um pipeline;
- garantir que diferentes pessoas executem o projeto da mesma forma.

Em um pipeline de análise de imagens, poderíamos ter:

```toml
[tasks]
notebook = "jupyter lab"
quality-control = "python scripts/01_quality_control.py"
normalize = "python scripts/02_normalize_profiles.py"
make-figures = "python scripts/03_make_figures.py"
```

Assim, em vez de cada pessoa precisar localizar e digitar o caminho completo dos scripts, seria possível executar:

```bash
pixi run quality-control
pixi run normalize
pixi run make-figures
```

Isso torna o projeto mais fácil de usar e reduz diferenças entre usuários. Uma ideia pra implementarmosn o futuro!

## 5. Dependências diretas e indiretas

Você pode declarar diretamente:

```toml
pandas = ">=2.0"
```

Mas o pandas também depende de outros pacotes.

```text
seu projeto
└── pandas
    ├── numpy
    ├── python-dateutil
    └── tzdata
```

!!! important "Conceito importante"
    O `pixi.toml` descreve principalmente aquilo de que o projeto depende diretamente.

    O `pixi.lock` registra a resolução completa necessária para tornar esse conjunto executável.

## 6. O `pixi.lock`: o registro exato do ambiente

Quando o Pixi resolve as dependências, ele cria ou atualiza o arquivo `pixi.lock`.

No `pixi.toml`, podemos escrever:

```toml
pandas = ">=2.0"
```

No `pixi.lock`, o Pixi registra a versão específica selecionada, builds, origem, hashes, dependências indiretas e resolução por plataforma.

```text
edite pixi.toml
        ↓
execute pixi install
        ↓
pixi.lock é atualizado
        ↓
registre os dois arquivos no Git
```

!!! warning "Atenção"
    Nunca edite o `pixi.lock` manualmente.

## 7. Instalando o ambiente fornecido pelo curso

Nesta atividade, você receberá um `pixi.toml` já preparado. Portanto, **não é necessário executar `pixi init`**.

### Passo 1 — Vá até a pasta correta

```bash
pwd
```

No PowerShell:

```powershell
Get-Location
```

### Passo 2 — Liste os arquivos

```bash
ls
```

Confirme que o arquivo `pixi.toml` está presente.

### Passo 3 — Instale o ambiente

```bash
pixi install
```

### Passo 4 — Verifique o ambiente

```bash
pixi run python --version
pixi run python -c "import pandas; print(pandas.__version__)"
```

!!! tip "Dica"
    Sempre execute `ls` antes de `pixi install` durante as primeiras atividades.

## 8. O que o Pixi cria no projeto?

```text
projeto/
├── .pixi/
├── pixi.toml
├── pixi.lock
├── notebooks/
├── scripts/
└── data/
```

!!! warning "Atenção"
    Não edite manualmente os arquivos dentro de `.pixi`.

A pasta `.pixi` não deve normalmente ser enviada ao Git. Compartilhe `pixi.toml` e `pixi.lock`.

## 9. Instalar, executar ou ativar?

| Comando | Função |
|---|---|
| `pixi install` | cria ou sincroniza o ambiente |
| `pixi run comando` | executa um comando dentro do ambiente |
| `pixi shell` | abre um terminal com o ambiente ativado |
| `exit` | sai do shell ativado |

## 10. Usando o ambiente no VS Code

Abra o projeto com:

```bash
code .
```

Não é obrigatório executar `pixi shell` antes.

No VS Code, selecione:

```text
Python: Select Interpreter
```

Para notebooks:

```text
Select Kernel
```

Confira o Python usado pelo notebook:

```python
import sys
print(sys.executable)
```

!!! warning "Atenção"
    O terminal integrado do VS Code, o interpretador Python e o kernel do notebook podem estar usando ambientes diferentes.

## 11. Entendendo `--frozen` e `--locked`

```bash
pixi install --frozen
```

Usa o `pixi.lock` existente e não o atualiza.

```bash
pixi install --locked
```

Interrompe se `pixi.toml` e `pixi.lock` não estiverem sincronizados.

| Opção | Comportamento |
|---|---|
| padrão | pode atualizar o `pixi.lock` |
| `--frozen` | usa o lockfile existente e não o atualiza |
| `--locked` | interrompe se manifesto e lockfile estiverem dessincronizados |

## 12. Adicionando um novo pacote

```bash
pixi add openpyxl
```

Para um pacote do PyPI:

```bash
pixi add --pypi nome-do-pacote
```

Teste:

```bash
pixi run python -c "import openpyxl; print(openpyxl.__version__)"
```

!!! warning "Atenção"
    Evite usar `pip install pacote` em um projeto compartilhado sem registrar a dependência.

## 13. Um exemplo próximo ao pipeline do curso

```text
CSV ou Parquet
      ↓
pandas
      ↓
controle de qualidade
      ↓
normalização
      ↓
seleção de features
      ↓
comparação de perfis fenotípicos
      ↓
figuras e tabelas
```

```toml
[dependencies]
python = ">=3.10,<3.13"
ipykernel = ">=6"
pandas = ">=2"
numpy = ">=1.26"
matplotlib = ">=3.8"
scikit-learn = ">=1.4"
pyarrow = ">=15"

[pypi-dependencies]
pycytominer = ">=1.2"
copairs = ">=0.5"

[tasks]
check = "python -c \"import pandas, numpy; print('Ambiente pronto')\""
notebook = "jupyter lab"
```

# Principais conceitos

- **Ambiente computacional:** conjunto isolado de programas, bibliotecas e versões.
- **Dependência:** programa ou biblioteca necessário para o pipeline.
- **Dependência direta:** pacote explicitamente declarado.
- **Dependência indireta:** pacote necessário para outra dependência.
- **Manifesto:** arquivo `pixi.toml`.
- **Lockfile:** arquivo `pixi.lock`.
- **Plataforma:** sistema operacional e arquitetura suportados.
- **Tarefa:** comando padronizado executado com `pixi run`.
- **Reprodutibilidade computacional:** capacidade de reconstruir as condições da análise.

# Exercícios

## Exercício 1 — Reconhecendo a receita

```toml
[workspace]
name = "cell-health-analysis"
channels = ["conda-forge"]
platforms = ["osx-arm64", "win-64"]

[dependencies]
python = ">=3.11,<3.13"
pandas = ">=2.0"
matplotlib = ">=3.8"

[tasks]
notebook = "jupyter lab"
```

Responda:

1. Qual é o nome do workspace?
2. Em quais plataformas ele deverá funcionar?
3. Quais são as dependências diretas?
4. Qual comando inicia o JupyterLab?
5. O arquivo informa a versão exata do pandas?

## Exercício 2 — Adaptando ao seu experimento

```toml
[workspace]
name = "meu-experimento"
version = "0.1.0"
description = "Ambiente para análise de..."
authors = ["Seu nome"]
channels = ["conda-forge"]
platforms = ["osx-arm64", "osx-64", "linux-64", "win-64"]
```

Altere o nome, a descrição, o autor e as plataformas para representar seu projeto.

## Exercício 3 — Instalar e verificar

```bash
ls
pixi install
pixi run python --version
pixi run python -c "import pandas; print(pandas.__version__)"
```

## Exercício 4 — Rodando mentalmente

```toml
[tasks]
check-data = "python -c \"import pandas as pd; print(pd.__version__)\""
```

Antes de executar, descreva o que você espera que aconteça. Depois:

```bash
pixi run check-data
```


# Para saber mais

- [Documentação oficial do Pixi](https://pixi.sh/)
- tutorial de instalação e configuração do VS Code;
- tutorial de CellProfiler com RunCellpose;
- aula sobre leitura de pipelines em Python;
- aula sobre validação, erros e *sanity checks*.

# Mensagens principais

> Um ambiente computacional protege os projetos contra interferências entre dependências.

> O `pixi.toml` descreve o ambiente desejado.

> O `pixi.lock` registra a resolução exata das dependências.

> `pixi install` cria ou sincroniza o ambiente.

> `pixi run` executa comandos dentro do ambiente.

> `pixi shell` abre um terminal com o ambiente ativado.

> Não basta o código estar correto: precisamos também registrar o ambiente em que ele funciona.

