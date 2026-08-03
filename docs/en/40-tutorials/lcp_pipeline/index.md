# Live Cell Painting (LCP): full pipeline

This tutorial walks through the **Live Cell Painting** pipeline end to end: creating the project, organizing metadata, running CellProfiler (AssayDev → Analysis), and, from there, running the Python/marimo analysis pipeline up to the Go/No-Go decision.

!!! note "Before you begin"
    You need **CellProfiler with the RunCellpose plugin** installed (see [Install CellProfiler & Cellpose](../install_cellprofiler/index.md)) and **[Pixi](https://pixi.sh/)** + **[Git](https://git-scm.com/)** installed.

    If you haven't seen the conceptual part of the method yet, start with [Live Cell Painting — History and Overview](../../30-hca-assays/live-cell-painting/index.md). This tutorial is the practical part.

The tutorial shows how to:

- create a new project from the `cookiecutter-lcp` template;
- create a new experiment (`EXPERIMENT_ID`) by copying from `templates/`;
- prepare metadata (platemap, Load Data Generator, Layout Generator, `barcode_platemap.csv`);
- load metadata into CellProfiler with the `LoadData` module;
- run AssayDev (segmentation QC) and Analysis (feature extraction);
- install the Pixi environment and run the marimo notebooks (NB01 → NB07);
- interpret quality metrics (PR, PM, mAP) and the Go/No-Go decision.

## Access the tutorial

<a href="lcp_pipeline.html" target="_blank" rel="noopener" class="md-button md-button--primary">
  Open the online tutorial
</a>

<a href="lcp_pipeline.pdf" target="_blank" rel="noopener" class="md-button md-button--primary">
  Download the PDF
</a>

!!! tip "How to follow the tutorial"
    We recommend opening the HTML tutorial in one browser tab and keeping the terminal open in another window.

    In the HTML version, each code block includes a copy button. This allows you to follow the explanations and run the commands step by step in your terminal.

## Source file

- [Markdown/Quarto source file](lcp_pipeline.qmd)
