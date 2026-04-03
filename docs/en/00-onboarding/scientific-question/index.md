# From hypothesis to experiment

**By the end of this module, you are expected to be able to:**

- formulate a testable and operationalizable hypothesis;
- distinguish exploration from confirmation and correlation from intervention;
- correctly identify the experimental unit and the experiment’s $n$;
- recognize the risks of pseudoreplication, confounding, and *overclaim*;
- translate the biological question into an analyzable design.

**Module deliverable**

- a hypothesis written in the format “If X, then Y (measured by Z), compared with W”;
- definition of $H_0$ and $H_1$;
- identification of the biological, experimental, and observational units;
- brief classification of the experiment as exploratory, confirmatory, or pilot.

---

In recent years, our laboratory has focused on high-content analysis (*high-content analysis*) in image-based assays (*image-based analysis*). This requires people with predominantly biological backgrounds to venture into somewhat “obscure” areas such as computing, statistics, and data engineering.

On this journey, it is easy to get lost among code, files, spreadsheets, metadata, and graphs. The antidote is simple: **always return to the biological question** (and the hypothesis it generates). It is your guiding light.

![Map of the HCI/HCA adventure](../../assets/img/hci-adventure-map.webp)

**Question → experimental design → acquisition → QC → analysis → interpretation → communication → reproducibility**

This module is the first step of that journey. In it, we will review fundamental concepts to ensure that the biological question is well formulated and can be operationalized clearly. This is essential for building an experimental design capable of testing the proposed hypothesis, which in turn will guide acquisition, quality control, image analysis, and the other stages of the project.

---

## Hypothesis is a fundamental principle

The path is long, and everything begins with a well-formulated hypothesis.

!!! info "Hypothesis"
    A **testable statement** about how a perturbation (X) affects an observable outcome (Y), under defined conditions.

A good hypothesis is clear enough that you can complete the sentence:

> **If X, then Y (measured by Z), compared with W.**

This format already forces a first level of hypothesis operationalization, because it makes explicit the perturbation of interest (X), the expected outcome (Y), how it will be measured (Z), and against which reference or control (W).

In the more formal form, we speak of:

- **Null hypothesis** ($H_0$): there is no effect/difference in the defined parameter (effect = 0).
- **Alternative hypothesis** ($H_1$): there is an effect/difference (effect ≠ 0, or effect > 0 / < 0, if directional).

!!! quote "Example (microplastics in Huh-7)"
    “Microplastics cause morphological changes in Huh-7 cells.”

    - $H_0$: there is no morphological change (difference = 0) relative to the control, within the expected variability  
    - $H_1$: there is a morphological change (difference ≠ 0) relative to the control

In the context of HCA/HCI, this also requires operationalization: that is, translating the hypothesis into something that can be observed, measured, and compared explicitly. In other words, it is not enough to say that “there is an effect”; it is necessary to say which effect, measured how, compared with what, and in which unit of analysis.

!!! tip "Practical tip"
    In HCA, it is almost always worth writing down **how** you will operationalize “change”: for example, change in the **phenotypic profile** versus control (distance, separation in embedding, classifier, etc.).

### “Hypothesis-driven” vs “data-driven”
With the arrival of the “omics” era and large-scale assays, a more **data-driven** (agnostic, exploratory) approach became common, focused on discovering patterns and generating hypotheses.

In HCI/HCA, you will use both:

- sometimes a more **classical** approach (testing a specific hypothesis)
- sometimes a more **exploratory** approach
- and often a mixture of both

The important thing is to know **which mode you are in**, so that you do not draw overly strong conclusions at the wrong time.

---

## Not all experiments are the same

Let us think about experiments in two “modes”:

### Exploratory experiments
They are used to **discover patterns**, map variability, and generate/refine hypotheses.

- they shine in: scale, discovery, hypothesis generation
- they can betray you in: confounders (batch, plate, density, time, segmentation bias), multiple comparisons, and overclaim

!!! warning "Honest rule"
    Exploration is essential — but confirmatory conclusions require a confirmatory design (with a clear plan and criteria).

### Confirmatory experiments
They are used to **test a specific hypothesis** with:

- a main endpoint (what you measure)
- an experimental unit (what the $n$ is)
- QC/exclusion criteria
- an analysis plan

In our context, *Live Cell Painting* often falls into the **exploratory** category (it generates hypotheses), and then you confirm them with more specific interventions — or with a confirmatory design within HCI itself, if the plan is well defined.

### And what about pilot experiments?
A **Pilot Experiment** is something else: usually smaller scale, a standardization and calibration stage.
Typical objectives:

- get positive/negative controls right
- estimate variability and effect size
- decide on a reasonable number of wells/plates ($n$)
- validate whether the assay “responds” and whether QC is consistent

Do not underestimate the pilot experiment; without well-defined conditions, your experiment will usually fail before it gets going.

---

## Correlational vs interventional

Another useful distinction:

- **Correlational/observational:** you observe associations and patterns (without cleanly manipulating a causal factor).
- **Interventional:** you manipulate a variable (X) in a controlled way to strengthen causal inference.

We will use correlations all the time (e.g., comparing phenotypic profiles, evaluating dose–response, exploring *clusters*). They are powerful — and also dangerous (confounders). See classic examples of spurious correlations: [Spurious correlations](https://www.tylervigen.com/spurious-correlations).

Interventions help when you need to support causality/MoA:

- well-controlled dose/time
- phenotype rescue (*recovery*)
- knockdown/overexpression
- controlled environmental changes (serum, matrix, stress, co-pollutants)
- randomization/blocking (reduces confounders)
- inhibitors as a mechanistic test

---

## The fundamental equation of experimental design and the unit of analysis

!!! quote
    “A well-designed experiment (1) can isolate the effects of interest from other factors that may influence the outcome, (2) replicates the right aspect of the experiment, and (3) can generalise the results…”  
    *Stanley E. Lazic — Experimental Design for Laboratory Biologists*

The central idea is that your observed result mixes different components:

$$
\mathbf{Result} =
\mathrm{Treatment\ effect} +
\mathrm{Biological\ effect} +
\mathrm{Technical\ effect} +
\mathrm{Error}
$$

- **Treatment effect:** the perturbation of interest (nanomaterial, dose, time, inhibitor, etc.)
- **Biological effect:** characteristics of the model (lineage, state, genetics, history) that influence the phenotype
- **Technical effect:** plate, day, operator, pipetting, instrumentation, batch effects, etc.
- **Error:** the noise that remains (including variation between experimental units, treatment error, measurement error, and subsampling)

!!! tip "Aphorism"
    *Hope for the best, but plan for the worst.*

Why distinguish errors?

1) To know **where to act** to reduce noise (more experimental units? more measurements? better calibration?)
2) To test hypotheses correctly: **the n for the test comes from the experimental unit**, not from the number of cells/images.

We also have two classical tools to reduce bias and confounders:

- **Blocking:** balancing conditions within “blocks” (day, plate, operator)
- **Blinding:** analyzing without knowing the condition, when possible

---

## Replication, pseudoreplication, and your n

If you use 10 rats born from 2 mothers and take several biochemical/genetic measurements, what is your biological $n$? Often it is not 10. This is the kind of confusion that generates **pseudoreplication**.

To avoid falling into this, internalize three concepts:

- **Biological unit:** what you want to generalize about (e.g., donor, population, species, model)
- **Experimental unit:** the smallest unit that receives treatment independently (where you randomize)
- **Observational unit:** where you measure (cells, fields, images…)

!!! tip "Tip for defining your n"
    *The sample size is where you randomize.*

In HCA, it is common that:

- experimental unit = **well** (treatment applied per well)
- observational unit = **cells/images** within the well

This implies a crucial point: **more cells do not increase the experimental $n$** — they increase the precision of the estimate *within* the well.

---

## Exercises (for today)

1) **Hypothesis in 2 lines**  
   Write your hypothesis in the format: “If X, then Y (measured by Z), compared with W.”

2) **Operational $H_0$/$H_1$**  
   Define $H_0$ and $H_1$ using a metric you truly intend to use (e.g., profile distance versus control, cell count, etc.).

3) **What is your n?**  
   For your experiment: biological, experimental, and observational unit. What is the experimental $n$?

4) **Exploratory or confirmatory?**  
   Say which part of your project is exploration and which is confirmation. What can you conclude in each one?

## For further reading (optional)
- [What exactly is ‘N’ in cell culture and animal experiments?](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.2005282)
- [Evaluating batch correction methods for image-based cell profiling](https://www.nature.com/articles/s41467-024-50613-5)
