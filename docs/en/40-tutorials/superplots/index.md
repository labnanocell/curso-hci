# SuperPlots in Python

This tutorial presents a visualization strategy that combines cell-level data with variability across biological replicates.

!!! note "Before you begin"
    To run this tutorial, you need to have [Pixi](https://pixi.sh/) installed and use an environment capable of opening notebooks, such as VS Code with the Jupyter extension or JupyterLab.

    It is also recommended to create a folder and download the files `combined.csv`, `pixi.toml`, and `pixi.lock` into the same location.

SuperPlots make it possible to show, in the same figure:

- the distribution of individual values;
- the mean of each biological replicate;
- reproducibility across independent experiments;
- statistical analysis based on the correct experimental unit.

The tutorial uses Python, Matplotlib, Seaborn, Pandas, and SciPy.

## Access the tutorial

<a href="superplots.html" target="_blank" rel="noopener" class="md-button md-button--primary">
  Open the online tutorial
</a>

<a href="superplots.pdf" target="_blank" rel="noopener" class="md-button md-button--primary">
  Download the PDF
</a>

!!! tip "How to follow the tutorial"
    We recommend opening the HTML tutorial in one browser tab and the notebook in another window, using VS Code or JupyterLab.

    In the HTML version, each code block includes a copy button. This allows you to follow the explanations and copy the cells one by one into the notebook for execution.

## Practice files

- [Example data](combined.csv)
- [`pixi.toml` file](pixi.toml)
- [`pixi.lock` file](pixi.lock)
