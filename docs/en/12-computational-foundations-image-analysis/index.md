# Computational foundations for image analysis

### Purpose

This module introduces the computational foundations needed to follow, understand, and validate image-analysis workflows in High-Content Imaging and High-Content Analysis (HCI/HCA).

The goal is not to train programmers, but to develop autonomy in working with computational environments, notebooks, Python code, and tabular data. Throughout the module, learners will recognize basic code patterns, run analyses reproducibly, interpret error messages, perform quality checks, and assess whether the results produced by a pipeline are coherent.

The activities use examples inspired by real image-analysis pipelines, connecting each computational concept to the steps learners will encounter during the processing and interpretation of HCI/HCA data.

## **Learning outcomes**

By the end of this module, the learner will be able to:

- understand why isolated computational environments are important for reproducibility;
- recognize the role of files such as `pixi.toml`, `pixi.lock`, and Jupyter notebooks;
- run notebooks within a configured computational environment;
- identify basic Python elements, including variables, types, lists, dictionaries, conditions, loops, and functions;
- read short code snippets and explain, in general terms, what they do;
- interpret error messages and locate useful information in a *traceback*;
- understand the role of checks such as `assert`, `raise`, and *sanity checks*;
- load and explore tabular data using `DataFrame`;
- distinguish metadata columns from columns containing quantitative features;
- identify missing values, infinite values, duplicates, and other basic data problems;
- interpret metric files and recognize computationally or biologically suspicious results;
- apply the three fundamental reflexes of code-assisted analysis: **read, validate, and iterate**.

### Topics

- [Computational environment and reproducibility](computational-environment/index.md)
- [Python for reading pipelines](python-for-reading-pipelines/index.md)
- [Validation, errors, and sanity checks](validation-and-sanity-checks/index.md)
- [Tabular data and DataFrames](tabular-data/index.md)
- [Investigating results and artifacts](investigating-results/index.md)

### Module organization

The lessons were organized to follow a simple progression:

> computational environment  
> → reading code  
> → identifying errors  
> → exploring tables  
> → validating results

The concepts are presented through examples related to image analysis. The goal is for code to stop being treated as a black box and instead be understood as a sequence of operations that can — and should — be inspected.

It is not necessary to memorize all the syntax presented. More important than writing code from scratch is developing the ability to:

1. read what the code is intended to do;
2. validate what it actually produced;
3. modify it or request changes when the result does not make sense.

!!! info "About this material"

    This material was created to support training in our HCI/HCA research group. It was designed primarily for our own workflow, but it may also be useful to others who are learning or building similar workflows.

    If you find an error or inconsistency, or have suggestions for improvement, feel free to open an *issue* in the repository. If you prefer to discuss something privately, send an email.

