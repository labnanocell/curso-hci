---
title: "Instalando o CellProfiler com o módulo RunCellpose"
subtitle: "Pixi como método recomendado e Docker como alternativa"
lang: pt-BR
format:
  html:
    theme:
      - cosmo
      - ../../styles/nanocell.scss
    toc: true
    toc-title: "Nesta página"
    code-copy: true
    code-overflow: wrap
    embed-resources: true
  pdf:
    documentclass: scrartcl
    pdf-engine: xelatex
    toc: true
    number-sections: true
    include-in-header:
      - ../../styles/nanocell.tex
execute:
  echo: true
  warning: false
---

Este tutorial apresenta duas formas de executar o **CellProfiler** com o plugin **RunCellpose**:

1. **Pixi**, método recomendado, porque reúne CellProfiler, Cellpose e suas dependências em um ambiente reproduzível;
2. **Docker**, alternativa útil para pessoas que preferem utilizar o aplicativo CellProfiler Desktop e evitar o uso direto de um ambiente Python no terminal.

::: {.callout-tip}
## Qual método escolher?

Use o **Pixi** como primeira opção. Esse método utiliza um ambiente preparado no repositório oficial `CellProfiler-plugins` e reduz problemas de compatibilidade entre o CellProfiler, o Cellpose e suas dependências.

Use o **Docker** quando você não tiver familiaridade com ambientes de terminal, estiver em um computador com restrições para criação de ambientes locais ou preferir trabalhar com o CellProfiler Desktop instalado separadamente.
:::

::: {.callout-note}
## Tutorial oficial

Este material foi baseado nas instruções oficiais da página **Using plugins** e no repositório `CellProfiler-plugins`.

- [Using plugins](https://plugins.cellprofiler.org/using_plugins.html)
- [Repositório CellProfiler-plugins](https://github.com/CellProfiler/CellProfiler-plugins)
- [Tabela de plugins suportados](https://plugins.cellprofiler.org/supported_plugins.html)
:::

# Opção 1 — Instalação usando Pixi

## 1. O que este método instala

O ambiente Pixi utilizado neste tutorial reúne versões compatíveis de:

- CellProfiler;
- Cellpose;
- RunCellpose;
- Python;
- bibliotecas necessárias para executar o plugin.

Nesse fluxo, o CellProfiler é iniciado dentro do próprio ambiente Pixi. Portanto, não é necessário instalar previamente o aplicativo CellProfiler Desktop.

::: {.callout-warning}
## Versões do ambiente

O ambiente usado como exemplo é:

```text
cellprofiler428_cellpose3
```

Esse nome indica que ele foi preparado para **CellProfiler 4.2.8** e **Cellpose 3**. Antes de iniciar, verifique no repositório oficial se existe um ambiente Pixi mais recente ou mais adequado ao seu objetivo.
:::

## 2. Instalar os pré-requisitos

Você precisará de:

- Git;
- Pixi;
- um terminal.

### Git para Windows

Para este tutorial, recomendamos usar o **Git Bash** no Windows. Ele oferece um terminal semelhante ao usado em Linux e macOS e foi o ambiente em que este procedimento foi testado.

Baixe o Git para Windows em:

[Instalar Git para Windows](https://git-scm.com/install/windows)

Durante a instalação, o Git Bash será instalado junto com o Git.

::: {.callout-note}
## Por que recomendamos o Git Bash?

Os comandos deste tutorial funcionaram de forma consistente no Git Bash. Dependendo da configuração do computador, o PowerShell pode apresentar diferenças relacionadas a permissões, política de execução, interpretação de comandos ou configuração do `PATH`.

Isso não significa que o PowerShell seja incompatível, mas, para reduzir variações durante o treinamento, recomendamos executar os comandos abaixo no Git Bash.
:::

### Pixi

Instale o Pixi seguindo as instruções oficiais:

[Instalar o Pixi](https://pixi.prefix.dev/latest/installation/)

Depois de instalar, feche e abra novamente o Git Bash.

Verifique a instalação:

```bash
git --version
pixi --version
```

## 3. Clonar o repositório de plugins

No Git Bash, navegue até uma pasta onde deseja armazenar o repositório.

Por exemplo:

```bash
cd nome_da_pasta
```

Clone o repositório oficial:

```bash
git clone https://github.com/CellProfiler/CellProfiler-plugins.git
```

Entre na pasta criada:

```bash
cd CellProfiler-plugins
```

## 4. Entrar no ambiente do RunCellpose

Entre na pasta do ambiente Pixi:

```bash
cd pixi_envs/cellprofiler428_cellpose3
```

Confirme que os arquivos estão presentes:

```bash
ls
```

A saída deve incluir:

```text
pixi.toml
pixi.lock
```

## 5. Criar e ativar o ambiente

Execute:

```bash
pixi shell --frozen
```

A opção `--frozen` orienta o Pixi a usar a resolução registrada no arquivo `pixi.lock`, sem atualizar as versões.

Na primeira execução, o download pode levar alguns minutos.

Quando o ambiente estiver ativo, o terminal deverá mostrar algo semelhante a:

```text
(cellprofiler_cellpose)
```

::: {.callout-note}
## Aviso sobre `[project]`

O Pixi pode mostrar uma mensagem informando que o campo `[project]` está obsoleto e que `[workspace]` deve ser usado no lugar.

Esse aviso vem do `pixi.toml` mantido no repositório oficial e não impede o funcionamento do ambiente. Não altere o arquivo durante este tutorial, pois ele está associado ao `pixi.lock`.
:::

::: {.callout-note}
## Aviso sobre `SSL_CERT_DIR`

Em alguns computadores Windows, o Pixi pode mostrar uma mensagem semelhante a:

```text
WARN ignoring SSL_CERT_DIR
```

Caso o ambiente seja criado normalmente e o prompt mostre `(cellprofiler_cellpose)`, esse aviso pode ser ignorado.
:::

## 6. Abrir o CellProfiler

Com o ambiente ativo, execute:

```bash
python -m cellprofiler
```

A primeira inicialização pode levar algum tempo.

Sempre que quiser abrir o CellProfiler novamente:

```bash
cd CellProfiler-plugins/pixi_envs/cellprofiler428_cellpose3
pixi shell --frozen
python -m cellprofiler
```

Para sair do ambiente Pixi depois de fechar o CellProfiler:

```bash
exit
```

## 7. Configurar a pasta de plugins

Com o CellProfiler aberto:

1. acesse **CellProfiler → Preferences**;
2. localize **CellProfiler plugins directory**;
3. selecione a pasta `active_plugins` do repositório clonado;
4. salve as preferências;
5. feche e abra novamente o CellProfiler.

O caminho deve terminar em:

```text
CellProfiler-plugins/active_plugins
```

Não selecione apenas:

```text
CellProfiler-plugins
```

::: {.callout-warning}
## Erro `Could not load setup`

Esse erro ocorre quando o CellProfiler tenta usar a raiz do repositório como pasta de plugins.

Altere a configuração para:

```text
CellProfiler-plugins/active_plugins
```

Depois, salve, feche e abra novamente o CellProfiler.
:::

## 8. Verificar o RunCellpose

Depois de reiniciar o CellProfiler:

1. clique em **Add Modules**;
2. procure por **RunCellpose**;
3. adicione o módulo ao pipeline.

No campo:

```text
Run module in docker or local Python environment
```

selecione a opção correspondente ao ambiente Python local, e não Docker.

::: {.callout-note}
## Avisos sobre outros plugins

Ao iniciar o CellProfiler, podem aparecer mensagens informando que plugins como `RunImageJScript`, `RunOmnipose` ou `RunStarDist` não puderam ser carregados.

Isso ocorre porque a pasta `active_plugins` contém vários plugins, enquanto o ambiente `cellprofiler428_cellpose3` instala apenas as dependências necessárias para CellProfiler e RunCellpose com Cellpose 3.

Essas mensagens podem ser ignoradas quando o objetivo for usar apenas o RunCellpose. O critério de sucesso é o módulo **RunCellpose** aparecer no painel **Add Modules** e executar uma segmentação de teste.
:::

# Opção 2 — Instalação usando Docker

O Docker é uma alternativa para quem prefere instalar o CellProfiler Desktop e executar o Cellpose em um contêiner separado.

## 9. Instalar o CellProfiler e o Docker Desktop

1. Baixe o CellProfiler:

   [CellProfiler releases](https://cellprofiler.org/releases)

2. Baixe o Docker Desktop:

   [Docker Desktop](https://www.docker.com/products/docker-desktop/)

::: {.callout-note}
## Como esse método funciona?

O CellProfiler Desktop é executado normalmente, enquanto o módulo RunCellpose utiliza uma imagem Docker contendo o Cellpose e suas dependências.
:::

## 10. Atualizar o WSL2

O Docker Desktop utiliza o WSL2 no Windows.

Abra o PowerShell ou o Prompt de Comando como administrador e execute:

```bash
wsl --update
```

Quando terminar:

1. reinicie o computador;
2. abra o Docker Desktop;
3. aguarde até que ele esteja completamente iniciado.

## 11. Corrigir erros de virtualização

Caso o Docker mostre:

```text
Docker virtualization support not detected
```

pressione `Win + R`, digite:

```text
optionalfeatures.exe
```

e ative, quando disponíveis:

- Hyper-V;
- Plataforma de Máquina Virtual;
- Plataforma de Hipervisor do Windows;
- Subsistema do Windows para Linux.

Reinicie o computador.

Para verificar se a virtualização está habilitada:

1. abra o Gerenciador de Tarefas com `Ctrl + Shift + Esc`;
2. acesse **Desempenho → CPU**;
3. confira se aparece **Virtualização: Habilitada**.

Se estiver desabilitada, será necessário ativá-la na BIOS/UEFI.

## 12. Configurar o CellProfiler

Abra o CellProfiler Desktop e acesse:

**File → Preferences**

Ajuste as configurações:

| Configuração | Recomendação | Motivo |
|---|---|---|
| Default Input Folder / Output Folder | Use uma pasta local com caminho simples | Reduz problemas de permissão |
| Maximum number of workers | Use um valor compatível com os núcleos disponíveis | Evita sobrecarga do computador |
| Save pipeline and/or file list in addition to project | Selecione Pipeline | Mantém uma cópia independente do pipeline |

::: {.callout-tip}
## Organização das pastas

Use pastas locais, com caminhos simples e, quando possível, fora de serviços de sincronização como Google Drive ou OneDrive.

Também é recomendável utilizar as pastas padrão de entrada e saída do CellProfiler, evitando a opção *Elsewhere* quando possível.
:::

## 13. Executar o RunCellpose com Docker

1. abra o Docker Desktop;
2. deixe-o ativo em segundo plano;
3. abra o CellProfiler Desktop;
4. adicione o módulo RunCellpose;
5. localize o campo:

```text
Run module in docker or local Python environment
```

6. selecione **Docker**.

Na primeira execução, o módulo deverá baixar automaticamente a imagem Docker apropriada. Esse processo pode demorar, mas acontece apenas na primeira vez para aquela imagem.

::: {.callout-warning}
## Não fixe manualmente uma imagem antiga sem necessidade

Os nomes das imagens Docker podem mudar conforme as versões do plugin e do Cellpose são atualizadas. Prefira selecionar uma das imagens oferecidas pela versão atual do módulo RunCellpose.

Caso uma pipeline antiga informe que a imagem não está disponível, abra o módulo e selecione uma das imagens atualmente listadas.
:::

# 14. Testar a instalação

Monte uma pipeline simples com:

```text
Images
NamesAndTypes
Groups
RunCellpose
SaveImages
```

Selecione uma imagem de teste e execute a pipeline.

A instalação estará funcionando quando:

- o CellProfiler abrir normalmente;
- o RunCellpose aparecer em **Add Modules**;
- o módulo concluir a segmentação;
- os objetos segmentados forem produzidos sem erro relacionado ao Cellpose.

# 15. Solução de problemas

| Problema ou mensagem | Causa provável | O que fazer |
|---|---|---|
| `[project] is deprecated` | O ambiente oficial usa sintaxe antiga do Pixi | Ignore e não altere o manifesto durante o tutorial |
| `ignoring SSL_CERT_DIR` | Variável de certificados aponta para uma pasta sem certificados válidos | Ignore se o ambiente for criado normalmente |
| `Could not load setup` | A pasta de plugins aponta para a raiz do repositório | Selecione `CellProfiler-plugins/active_plugins` |
| `No module named jpype` | Dependência do RunImageJScript ausente | Ignore se esse plugin não será usado |
| `No module named cellpose_omni` | Dependência do RunOmnipose ausente | Ignore se esse plugin não será usado |
| `No module named stardist` | Dependência do RunStarDist ausente | Ignore se esse plugin não será usado |
| RunCellpose não aparece | Caminho incorreto ou CellProfiler aberto fora do ambiente Pixi | Confirme `active_plugins` e abra com `python -m cellprofiler` |
| Docker não inicia | Virtualização ou WSL2 não configurados | Atualize o WSL2 e verifique a virtualização |
| `Cannot connect to Docker daemon` | Docker Desktop não está ativo | Abra o Docker Desktop antes de executar a pipeline |
| Pipeline antiga não encontra a imagem Docker | O nome da imagem foi atualizado | Selecione uma imagem disponível na versão atual do módulo |

# Conclusão

Para novos usuários, o método recomendado é o **Pixi**, porque utiliza um ambiente reproduzível preparado para reunir versões compatíveis de CellProfiler e Cellpose.

O fluxo cotidiano com Pixi é:

```bash
cd CellProfiler-plugins/pixi_envs/cellprofiler428_cellpose3
pixi shell --frozen
python -m cellprofiler
```

O Docker permanece como uma alternativa útil para quem prefere trabalhar com o CellProfiler Desktop instalado separadamente ou não deseja gerenciar diretamente um ambiente Python.
