# Live Cell Painting (LCP): pipeline completo

Este tutorial percorre o pipeline de **Live Cell Painting** de ponta a ponta: criar o projeto, organizar metadados, rodar o CellProfiler (AssayDev → Analysis) e, a partir daí, rodar o pipeline de análise em Python/marimo até a decisão de Go/No-Go.

!!! note "Antes de começar"
    Você precisa ter **CellProfiler com o plugin RunCellpose** instalado (veja [Instalar CellProfiler & Cellpose](../install_cellprofiler/index.md)) e **[Pixi](https://pixi.sh/)** + **[Git](https://git-scm.com/)** instalados.

    Se você ainda não viu a parte conceitual do método, comece por [Live Cell Painting — Histórico e Visão geral](../../30-ensaios-de-hca/live-cell-painting/index.md). Este tutorial é a parte prática.

O tutorial mostra como:

- criar um projeto novo a partir do template `cookiecutter-lcp`;
- criar um novo experimento (`EXPERIMENT_ID`) copiando de `templates/`;
- preparar metadados (platemap, Load Data Generator, Layout Generator, `barcode_platemap.csv`);
- carregar os metadados no CellProfiler com o módulo `LoadData`;
- rodar o AssayDev (QC de segmentação) e a Analysis (extração de features);
- instalar o ambiente Pixi e rodar os notebooks marimo (NB01 → NB07);
- interpretar as métricas de qualidade (PR, PM, mAP) e a decisão Go/No-Go.

## Acessar o tutorial

<a href="lcp_pipeline.html" target="_blank" rel="noopener" class="md-button md-button--primary">
  Abrir o tutorial online
</a>

<a href="lcp_pipeline.pdf" target="_blank" rel="noopener" class="md-button md-button--primary">
  Baixar o PDF
</a>

!!! tip "Como acompanhar o tutorial"
    Recomendamos abrir a versão HTML em uma aba do navegador e manter o terminal aberto em outra janela.

    Na versão HTML, cada bloco de código tem um botão de cópia. Isso permite acompanhar as explicações e copiar os comandos, um a um, para rodar no seu terminal.

## Arquivo-fonte

- [Arquivo Markdown/Quarto do tutorial](lcp_pipeline.qmd)
