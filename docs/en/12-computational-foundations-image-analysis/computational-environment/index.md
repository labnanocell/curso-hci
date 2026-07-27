# Computational Environment and Reproducibility with Pixi

## Learning objectives

By the end of this lesson, the learner should be able to:

- explain why computational environments are important for reproducibility;
- identify the role of the `pixi.toml` and `pixi.lock` files;
- recognize the main sections of a `pixi.toml` file;
- install an environment provided with a project;
- distinguish between `pixi install`, `pixi shell`, and `pixi run`;
- verify that they are working in the correct folder and environment;
- add a new dependency to the project;
- recognize basic problems related to platforms and dependencies;
- relate the organization of a computational environment to an image-analysis pipeline.

# Lesson

## 1. Why do we need a computational environment?

Let us begin our journey into computational tools for image analysis.

For that, nothing is better than having a safe environment in which to work, right?

*Environments*, which we will affectionately call **envs** from now on, help solve two common problems in data science and bioinformatics.

The first is **reproducibility**.

You know that experience of trying to run someone else’s code and getting one error after another? You fix one package and another error appears. You update a library and a different conflict emerges. After a while, you feel like a squirrel trying to plug leaks in a dam while three more appear.

The second problem is **interference between projects**.

Imagine that you are analyzing a *Live Cell Painting* experiment. The pipeline works with specific versions of Python, pandas, NumPy, scikit-learn, pycytominer, and visualization libraries. Now imagine that another analysis requires a newer version of one of these libraries. You update the package and suddenly the first pipeline stops working.

A computational environment reduces this type of problem by keeping each project’s dependencies separate.

```text
Project A
├── Python 3.11
├── pandas 2.2
└── scikit-learn 1.5

Project B
├── Python 3.10
├── pandas 1.5
└── scikit-learn 1.2
```

Each project works with its own set of tools.

This also creates a safer space to:

- test code;
- run third-party pipelines;
- experiment with new libraries;
- update dependencies;
- delete and recreate the environment when something goes wrong.

!!! important "Key concept"
    A computational environment contains more than “the programs we use.” It represents part of the analysis methodology.

    Recording the environment helps someone else — or yourself a few months later — reconstruct the conditions under which the pipeline was run.

## 2. Why will we use Pixi?

There are several tools for creating computational environments, including `venv`, Conda, Mamba, Docker, and Pixi.

For a long time, we used Conda in our projects. In this course, we will mainly use **Pixi**.

Pixi allows us to:

- declare project dependencies;
- install packages from the Conda and PyPI ecosystems;
- record exact versions in a lockfile;
- work across different operating systems;
- create reusable tasks;
- run commands inside the environment without activating it manually.

The central idea is:

```text
pixi.toml
    ↓
describes the desired environment
    ↓
pixi install
    ↓
creates the environment and generates/updates pixi.lock
    ↓
pixi run
    ↓
runs commands inside that environment
```

## 3. `pixi.toml`: the environment recipe

To describe a Pixi project, we use a file called `pixi.toml`.

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

This file works as a recipe for configuring the environment. It specifies the project name, description, authors, channels, platforms, dependencies, and tasks.

!!! question "Reflection"
    Think about a pipeline used in your project.

    Which programs or libraries would be required to reproduce it?

    Does it depend only on Python, or does it also use tools such as CellProfiler, Cellpose, Fiji, R, or specific statistical-analysis libraries?

## 4. Understanding the sections of `pixi.toml`

### 4.1. `[workspace]`

```toml
[workspace]
name = "lcp-analysis-pipeline"
version = "0.1.0"
description = "Phenotypic profiling pipeline"
authors = ["Bispo"]
```

The `name` field identifies the workspace. The `version` field tracks versions of the project itself; it does not represent the Python or library versions.

### 4.2. `channels`

```toml
channels = ["conda-forge", "bioconda"]
```

`conda-forge` provides a large share of the scientific libraries used in Python. `bioconda` provides many packages for bioinformatics and life sciences.

### 4.3. `platforms`

```toml
platforms = ["linux-64", "osx-64", "osx-arm64", "win-64"]
```

| Platform | System |
|---|---|
| `linux-64` | 64-bit Linux |
| `osx-64` | macOS with an Intel processor |
| `osx-arm64` | macOS with Apple Silicon |
| `win-64` | 64-bit Windows |

!!! warning "Warning"
    Listing a platform does not automatically guarantee that every package is available for it.

A common Windows error is:

```text
The workspace does not support 'win-64'
```

The initial correction is:

```bash
pixi workspace platform add win-64
pixi install
```

### 4.4. `[dependencies]`

```toml
[dependencies]
python = ">=3.10,<3.13"
ipykernel = ">=6.0"
pandas = ">=2.0"
numpy = ">=1.26"
```

The expression `python = ">=3.10,<3.13"` accepts Python versions greater than or equal to 3.10 and lower than 3.13.

### 4.5. `[pypi-dependencies]`

```toml
[pypi-dependencies]
copairs = ">=0.5"
```

To add a Conda dependency:

```bash
pixi add pandas
```

To add a PyPI dependency:

```bash
pixi add --pypi copairs
```

### 4.6. `[tasks]`

```toml
[tasks]
check-python = "python --version"
notebook = "jupyter lab"
run-analysis = "python scripts/run_analysis.py"
```

Then run:

```bash
pixi run check-python
pixi run notebook
```

## 5. Direct and indirect dependencies

You may directly declare:

```toml
pandas = ">=2.0"
```

But pandas also depends on other packages.

```text
your project
└── pandas
    ├── numpy
    ├── python-dateutil
    └── tzdata
```

!!! important "Key concept"
    `pixi.toml` mainly describes what the project depends on directly.

    `pixi.lock` records the complete resolution required to make that set executable.

## 6. `pixi.lock`: the exact environment record

When Pixi resolves dependencies, it creates or updates `pixi.lock`.

In `pixi.toml`, we may write:

```toml
pandas = ">=2.0"
```

In `pixi.lock`, Pixi records the selected version, builds, source, hashes, indirect dependencies, and per-platform resolution.

```text
edit pixi.toml
        ↓
run pixi install
        ↓
pixi.lock is updated
        ↓
commit both files to Git
```

!!! warning "Warning"
    We normally do not edit `pixi.lock` manually.

## 7. Installing the environment provided with the course

In this activity, you will receive a prepared `pixi.toml`. Therefore, **you do not need to run `pixi init`**.

### Step 1 — Go to the correct folder

```bash
pwd
```

In PowerShell:

```powershell
Get-Location
```

### Step 2 — List the files

```bash
ls
```

Confirm that `pixi.toml` is present.

### Step 3 — Install the environment

```bash
pixi install
```

### Step 4 — Verify the environment

```bash
pixi run python --version
pixi run python -c "import pandas; print(pandas.__version__)"
```

!!! tip "Tip"
    During the first activities, always run `ls` before `pixi install`.

## 8. What does Pixi create in the project?

```text
project/
├── .pixi/
├── pixi.toml
├── pixi.lock
├── notebooks/
├── scripts/
└── data/
```

!!! warning "Warning"
    Do not manually edit files inside `.pixi`.

The `.pixi` folder should not normally be committed to Git. Share `pixi.toml` and `pixi.lock`.

## 9. Install, run, or activate?

| Command | Function |
|---|---|
| `pixi install` | creates or synchronizes the environment |
| `pixi run command` | runs a command inside the environment |
| `pixi shell` | opens a terminal with the environment activated |
| `exit` | exits the activated shell |

## 10. Using the environment in VS Code

Open the project with:

```bash
code .
```

You do not need to run `pixi shell` first.

In VS Code, select:

```text
Python: Select Interpreter
```

For notebooks:

```text
Select Kernel
```

Check which Python the notebook is using:

```python
import sys
print(sys.executable)
```

!!! warning "Warning"
    The VS Code integrated terminal, Python interpreter, and notebook kernel may be using different environments.

## 11. Understanding `--frozen` and `--locked`

```bash
pixi install --frozen
```

Uses the existing `pixi.lock` and does not update it.

```bash
pixi install --locked
```

Stops if `pixi.toml` and `pixi.lock` are not synchronized.

| Option | Behavior |
|---|---|
| default | may update `pixi.lock` |
| `--frozen` | uses the existing lockfile and does not update it |
| `--locked` | stops if the manifest and lockfile are out of sync |

## 12. Adding a new package

```bash
pixi add openpyxl
```

For a PyPI package:

```bash
pixi add --pypi package-name
```

Test it:

```bash
pixi run python -c "import openpyxl; print(openpyxl.__version__)"
```

!!! warning "Warning"
    Avoid using `pip install package` in a shared project without recording the dependency.

## 13. An example close to the course pipeline

```text
CSV or Parquet
      ↓
pandas
      ↓
quality control
      ↓
normalization
      ↓
feature selection
      ↓
phenotypic profile comparison
      ↓
figures and tables
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
check = "python -c \"import pandas, numpy; print('Environment ready')\""
notebook = "jupyter lab"
```

# Key concepts

- **Computational environment:** an isolated set of programs, libraries, and versions.
- **Dependency:** a program or library required by the pipeline.
- **Direct dependency:** a package explicitly declared.
- **Indirect dependency:** a package required by another dependency.
- **Manifest:** the `pixi.toml` file.
- **Lockfile:** the `pixi.lock` file.
- **Platform:** a supported operating system and architecture.
- **Task:** a standardized command run with `pixi run`.
- **Computational reproducibility:** the ability to reconstruct the conditions of an analysis.

# Exercises

## Exercise 1 — Recognizing the recipe

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

Answer:

1. What is the workspace name?
2. On which platforms should it work?
3. What are the direct dependencies?
4. Which command starts JupyterLab?
5. Does the file specify the exact pandas version?

## Exercise 2 — Adapting it to your experiment

```toml
[workspace]
name = "my-experiment"
version = "0.1.0"
description = "Environment for analyzing..."
authors = ["Your name"]
channels = ["conda-forge"]
platforms = ["osx-arm64", "osx-64", "linux-64", "win-64"]
```

Change the name, description, author, and platforms to represent your project.

## Exercise 3 — Install and verify

```bash
ls
pixi install
pixi run python --version
pixi run python -c "import pandas; print(pandas.__version__)"
```

## Exercise 4 — Predict before running

```toml
[tasks]
check-data = "python -c \"import pandas as pd; print(pd.__version__)\""
```

Before running it, describe what you expect to happen. Then run:

```bash
pixi run check-data
```


The notebook worked only on her computer. Explain why this happened, which information was not recorded, how to correct it, and which files should be shared.

# Further reading

- [Official Pixi documentation](https://pixi.sh/)
- VS Code installation and configuration tutorial;
- CellProfiler with RunCellpose tutorial;
- lesson on reading pipelines in Python;
- lesson on validation, errors, and sanity checks.

# Main messages

> A computational environment protects projects from interference between dependencies.

> `pixi.toml` describes the desired environment.

> `pixi.lock` records the exact dependency resolution.

> `pixi install` creates or synchronizes the environment.

> `pixi run` runs commands inside the environment.

> `pixi shell` opens a terminal with the environment activated.

> Correct code is not enough: we also need to record the environment in which it works.
