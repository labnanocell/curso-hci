---
title: "SuperPlots in Python (Matplotlib + Seaborn)"
subtitle: "HCI/HCA Course"
author: "NanoCell Interactions Lab"
date: today
lang: en

format:
  html:
    theme:
      - cosmo
      - ../styles/nanocell.scss
    code-copy: true
    code-overflow: wrap
    toc: true
    toc-title: "On this page"
    embed-resources: true

  pdf:
    documentclass: scrartcl
    pdf-engine: xelatex
    toc: true
    number-sections: true
    include-in-header:
      - ../styles/nanocell.tex
---

This tutorial shows how to make [**SuperPlots**](https://rupress.org/jcb/article/219/6/e202001064/151717/SuperPlots-Communicating-reproducibility-and), figures that communicate _both_ single-cell variability and experiment-level reproducibility.

> Core idea: plot all cell-level measurements (small points), overlay **replicate means** as large, outlined markers colored by replicate, and run stats **on the replicate means** (not on single cells).

To illustrate how important transparent data visualization has become in current publishing standards, consider the following feedback we received after submitting a manuscript to the [*Journal of Cell Science*](https://journals.biologists.com/jcs):


> **For best practice and transparency, and to allow better assessment of the quality of the data and whether the data support the conclusions, we strongly recommend that you:**  
> 1. Use graphs that allow the reader to see the true data spread (i.e. box and whisker plots, super plots, etc. See [PMID: 32346721](https://track.editorialmanager.com/CL0/https:%2F%2Fpubmed.ncbi.nlm.nih.gov%2F32346721%2F/1/010f019f7f8bc50f-6b3d40a2-2963-4a40-a99d-d3f9198af9a3-000000/gG4LO0WAA0gSEbEc9e7va3Uly_iMZbTo5ASzGs_sNdk=258) for more information.). If using box-and-whisker plots, please also state what the whiskers represent. See [here](https://track.editorialmanager.com/CL0/https:%2F%2Fwww.graphpad.com%2Fsupport%2Ffaq%2Ffive-ways-to-plot-whiskers-in-box-and-whisker-plots%2F/1/010f019f7f8bc50f-6b3d40a2-2963-4a40-a99d-d3f9198af9a3-000000/WXOg7ddJ6wuKzMvO_5Rfe7HI8NT3x4GYqJm4IgacFOM=258) for helpful information.  
> 2. Use appropriate statistics with the sample size representing biological replicates rather than technical replicates  
> 3. Provide, if using western blots, one additional supplementary figure (as a single PDF or TIFF file). It will not contribute towards your supplementary figure limit. If you provided this at submission and named it 'Blot transparency', please now number this supplementary figure and combine it with the rest of the supplementary material pdf. Please ensure that you cite this figure in your Materials & Methods section, ideally in the western blots paragraph.

## Step 1: Create the Pixi environment

This tutorial uses [Pixi](https://pixi.sh/) to create a reproducible Python environment. Pixi installs Python and all required packages from a single configuration file, so you do not need to create or activate a Conda environment manually. If you are using the Pixi environment provided for the HCI course, you do not need to follow the environment-creation steps below. The course environment already includes all packages required for this tutorial. If you are working outside the course environment or are testing the SuperPlots tutorial independently, follow the instructions below.

Create a new folder for the tutorial and enter it:

```bash
mkdir superplots-tutorial
cd superplots-tutorial
```

Create a file named `pixi.toml` with the following content:

```toml
[workspace]
name = "superplots-tutorial"
version = "0.1.0"
description = "Minimal environment for plotting complete datasets and SuperPlots"
channels = ["conda-forge"]
platforms = ["linux-64", "osx-64", "osx-arm64", "win-64"]

[dependencies]
python = ">=3.10,<3.13"
pandas = ">=2.0"
numpy = ">=1.24"
matplotlib = ">=3.7"
seaborn = ">=0.12"
scipy = ">=1.11"
ipykernel = ">=6.0"
jupyterlab = ">=4.0"

[tasks]
notebook = "jupyter lab"
```

Your folder should now contain:

```text
superplots-tutorial/
└── pixi.toml
```

## Step 2: Install the environment

From the folder containing `pixi.toml`, run:

```bash
pixi install
```

Pixi will create the environment and generate a `pixi.lock` file containing the resolved package versions. Keep both `pixi.toml` and `pixi.lock` with the tutorial to make the environment reproducible.

## Step 3: Open the project in your favorite app

### Step 3a: Open the project in VSCode

Open the tutorial folder in VSCode:

```bash
code .
```

### 3b: Open the project in JupyterLab

Run:

```bash
pixi run notebook
```

This command starts JupyterLab inside the Pixi environment with all required packages available.

Alternatively, you can run JupyterLab directly:

```bash
pixi run jupyter lab
```

## Optional: open an activated shell

It is not necessary to activate the environment before running the tutorial. Pixi can execute commands directly with `pixi run`.

If you prefer to work inside an activated shell, use:

```bash
pixi shell
```

To leave the environment, run:

```bash
exit
```

## Verify the installation

Create a notebook and run:

```python
import matplotlib
import numpy
import pandas
import scipy
import seaborn

print("Environment ready.")
```

If the cell runs without errors, the environment is ready for the tutorial.



## Step 2: Organize your data

Your table should be **long format** with (at least) these columns:

- `Treatment` – condition label (e.g., `Control`, `Drug`)
- `Replicate` – biological replicate ID (e.g., `R1`, `R2`, `R3`)
- `Value` – single-cell measurement (e.g., `Speed`, `Area`, etc.)

If your measurement column is named something else (e.g., `Speed`), just update the code below.

### Minimal CSV template (copy/paste to `combined.csv`)

```csv
Treatment,Replicate,Value 
Control,R1,10.1 
Control,R1,11.3 
Control,R1,9.9 
Control,R2,12.0 
Control,R2,11.6 
Drug,R1,7.2 
Drug,R1,8.1 
Drug,R2,9.0 
Drug,R2,8.6
```

> **Tip:** For _paired_ designs (e.g., Control vs Drug measured on the **same** replicate lines or days), make sure the same `Replicate` IDs appear under each treatment.



## Step 3: Load and sanity-check

```python
import pandas as pd  

combined = pd.read_csv("combined.csv") 
assert {"Treatment","Replicate","Value"}.issubset(combined.columns), "Columns missing!" 

print(combined.groupby(["Treatment","Replicate"]).size())
```

- Check for typos in treatment or replicate labels.
- Ensure replicates intended to be paired have the same IDs across treatments.



## Step 4: Compute replicate means (for stats & big markers)

```python
ReplicateAverages = (     
    combined     
    .groupby(["Treatment","Replicate"], as_index=False)["Value"]     
    .mean()     
    .rename(columns={"Value":"RepMean"}) 
    ) 

ReplicateAverages.head()
```



## Step 5: Choose and run the right statistical test

SuperPlots emphasize **testing on replicate means**.

- **Paired t-test**: same replicates appear in both treatments (e.g., `R1`,`R2`,`R3` in Control _and_ Drug).
- **Welch’s t-test** (unpaired): different replicate IDs or unequal `n`.

```python
import numpy as np
from scipy import stats

# Example: compare exactly two treatments (e.g., "Control" vs "Drug")
treatments = ["Control", "Drug"]  # change if needed

pivot = ReplicateAverages.pivot_table(
    index="Replicate",
    columns="Treatment",
    values="RepMean"
)

# Detect pairing feasibility
paired_ok = all(t in pivot.columns for t in treatments) and pivot[treatments].dropna().shape[0] >= 2

if paired_ok:
    df = pivot[treatments].dropna()
    stat, pvalue = stats.ttest_rel(df[treatments[0]], df[treatments[1]])
    test_used = "paired t-test (on replicate means)"
else:
    grp = [ReplicateAverages.loc[ReplicateAverages["Treatment"]==t, "RepMean"] for t in treatments]
    stat, pvalue = stats.ttest_ind(grp[0], grp[1], equal_var=False)
    test_used = "Welch’s t-test (on replicate means)"

print(test_used, "p =", pvalue)

```

_(Optional) Effect size on replicate means:_

``` Python
def cohens_d(a, b):
    a, b = np.asarray(a), np.asarray(b)
    na, nb = len(a), len(b)
    sa, sb = np.var(a, ddof=1), np.var(b, ddof=1)
    sp = np.sqrt(((na-1)*sa + (nb-1)*sb) / (na+nb-2))
    return (np.mean(b) - np.mean(a)) / sp

if paired_ok:
    # For paired designs, report mean of differences as well
    diff = df[treatments[1]] - df[treatments[0]]
    print("Mean of paired differences =", diff.mean())
else:
    d = cohens_d(grp[0], grp[1])
    print("Cohen’s d =", d)

```



## Step 6: Make the SuperPlot

Small points = single cells; large outlined points = replicate means (colored by replicate). Optional: connect paired replicate means with lines.

``` Python
import matplotlib.pyplot as plt
import seaborn as sns

sns.set(style="whitegrid", context="talk")

fig, ax = plt.subplots(figsize=(7,6))

# 1) Single-cell swarm (light alpha so replicates stand out later)
sns.swarmplot(
    data=combined, x="Treatment", y="Value",
    hue=None, dodge=False, size=3, alpha=0.6, ax=ax
)

# 2) Overlay replicate means as big, outlined markers, colored by replicate
#    (We plot them on top; keep legend manageable)
mean_ax = sns.swarmplot(
    data=ReplicateAverages, x="Treatment", y="RepMean",
    hue="Replicate", dodge=True, size=12, edgecolor="k", linewidth=1.5, ax=ax
)

# Clean up legends (keep only replicate legend)
handles, labels = mean_ax.get_legend_handles_labels()
if handles:
    ax.legend(handles, labels, title="Replicate", frameon=True, loc="best")
else:
    ax.legend_.remove()

# 3) Optional: connect paired replicate means across treatments
if paired_ok:
    # x positions for treatments in order they appear on the x-axis:
    xpos = {t:i for i,t in enumerate(sorted(ReplicateAverages["Treatment"].unique()))}
    for rep, sub in ReplicateAverages.groupby("Replicate"):
        if set(treatments).issubset(set(sub["Treatment"])):
            x1, y1 = xpos[treatments[0]], float(sub.loc[sub["Treatment"]==treatments[0], "RepMean"])
            x2, y2 = xpos[treatments[1]], float(sub.loc[sub["Treatment"]==treatments[1], "RepMean"])
            ax.plot([x1, x2], [y1, y2], lw=1.25, alpha=0.85)

# Labels & title
ax.set_xlabel("Treatment")
ax.set_ylabel("Value")
ax.set_title("SuperPlot: single cells + replicate means")

# 4) Annotate p-value above the two groups (simple placement)
ymax = max(combined["Value"].max(), ReplicateAverages["RepMean"].max())
line_y = ymax + 0.05*(ymax if ymax != 0 else 1)
ax.plot([0, 0, 1, 1], [line_y, line_y*1.02, line_y*1.02, line_y], lw=1.5, c="k")
ax.text(0.5, line_y*1.04, f"p = {pvalue:.3g}\n{test_used}", ha="center", va="bottom")

plt.tight_layout()
plt.show()

```

> **Color consistency across treatments:** using `hue="Replicate"` ensures the same replicate keeps the same color in all conditions.



## Step 7: Save publication-ready figures

``` Python
plt.savefig("superplot.png", dpi=300, bbox_inches="tight")
plt.savefig("superplot.svg", bbox_inches="tight")  # vector

```



## Step 8: Wrap it into a reusable function

Drop this into a script/notebook and call `make_superplot(...)` for different datasets.

``` Python
def make_superplot(
    df, value_col="Value", treatment_col="Treatment", replicate_col="Replicate",
    treatments=None, connect_paired=True, outfile=None, figsize=(7,6)
):
    import numpy as np
    import pandas as pd
    import matplotlib.pyplot as plt
    import seaborn as sns
    from scipy import stats

    if treatments is None:
        treatments = list(df[treatment_col].unique())
        if len(treatments) != 2:
            raise ValueError("This helper currently supports exactly two treatments. Provide `treatments=[A,B]`.")

    # Replicate means
    rep_means = (
        df.groupby([treatment_col, replicate_col], as_index=False)[value_col]
          .mean()
          .rename(columns={value_col:"RepMean"})
    )

    # Stats on replicate means
    pivot = rep_means.pivot_table(index=replicate_col, columns=treatment_col, values="RepMean")
    paired_ok = all(t in pivot.columns for t in treatments) and pivot[treatments].dropna().shape[0] >= 2
    if paired_ok:
        sub = pivot[treatments].dropna()
        stat, pvalue = stats.ttest_rel(sub[treatments[0]], sub[treatments[1]])
        test_used = "paired t-test (replicate means)"
    else:
        g0 = rep_means.loc[rep_means[treatment_col]==treatments[0], "RepMean"]
        g1 = rep_means.loc[rep_means[treatment_col]==treatments[1], "RepMean"]
        stat, pvalue = stats.ttest_ind(g0, g1, equal_var=False)
        test_used = "Welch’s t-test (replicate means)"

    sns.set(style="whitegrid", context="talk")
    fig, ax = plt.subplots(figsize=figsize)

    sns.swarmplot(data=df, x=treatment_col, y=value_col, hue=None, size=3, alpha=0.6, ax=ax)
    mean_ax = sns.swarmplot(
        data=rep_means, x=treatment_col, y="RepMean",
        hue=replicate_col, dodge=True, size=12, edgecolor="k", linewidth=1.5, ax=ax
    )

    handles, labels = mean_ax.get_legend_handles_labels()
    if handles:
        ax.legend(handles, labels, title="Replicate", frameon=True, loc="best")
    else:
        ax.legend_.remove()

    if connect_paired and paired_ok:
        xpos = {t:i for i,t in enumerate(sorted(rep_means[treatment_col].unique()))}
        for rep, sub in rep_means.groupby(replicate_col):
            if set(treatments).issubset(set(sub[treatment_col])):
                x1 = xpos[treatments[0]]
                x2 = xpos[treatments[1]]
                y1 = float(sub.loc[sub[treatment_col]==treatments[0], "RepMean"])
                y2 = float(sub.loc[sub[treatment_col]==treatments[1], "RepMean"])
                ax.plot([x1, x2], [y1, y2], lw=1.25, alpha=0.85)

    ax.set_xlabel("Treatment")
    ax.set_ylabel(value_col)
    ax.set_title("SuperPlot: single cells + replicate means")

    ymax = max(df[value_col].max(), rep_means["RepMean"].max())
    line_y = ymax + 0.05*(ymax if ymax != 0 else 1)
    ax.plot([0, 0, 1, 1], [line_y, line_y*1.02, line_y*1.02, line_y], lw=1.5, c="k")
    ax.text(0.5, line_y*1.04, f"p = {pvalue:.3g}\n{test_used}", ha="center", va="bottom")

    plt.tight_layout()
    if outfile:
        plt.savefig(outfile, dpi=300, bbox_inches="tight")
    return fig, ax, {"pvalue": float(pvalue), "test": test_used, "replicate_means": rep_means}

```

Usage:

``` Python
fig, ax, stats_info = make_superplot(
                combined,
                value_col="Value",
                treatment_col="Treatment",
                replicate_col="Replicate",    
                treatments=["Control","Drug"],
                connect_paired=True,
                outfile="superplot.png")
print(stats_info)

```



## Step 9: Common variants

- **Different metric name**: Change `value_col` to your column (e.g., `"Speed"`).
- **Log scale**: `ax.set_yscale("log")` (after plotting).
- **More than two treatments**: Still show all as swarms + replicate means; for stats, compare pairs (e.g., Dunnett vs control) by looping treatments and correcting for multiple testing (e.g., Benjamini–Hochberg).



## Step 10: Reproducibility tips

- Keep raw single-cell data and the replicate-mean table you used for stats.
- Fix random states where relevant (not needed for `swarmplot`, but good practice elsewhere).
- Export both figure (`.png`, `.svg`) and the `ReplicateAverages` table for the Methods/Source Data.



### FAQ

- **Why test on replicate means?** Because replicates are the unit of biological independence. Testing on thousands of single cells would inflate _n_ and understate uncertainty.
- **Paired or unpaired?** If the same biological replicate appears across conditions, use **paired**; otherwise, use **Welch’s** (unpaired).

