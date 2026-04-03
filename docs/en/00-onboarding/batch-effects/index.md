# HCA — Experimental design II: *batch effect* — how to recognize, prevent, and interpret it

## Objectives

By the end of this lesson, you should be able to:

- define *batch effect* in the context of HCA;
- distinguish treatment effect, biological effect, technical effect, and error;
- recognize signs of *batch effect* in images, controls, and phenotypic profiles;
- understand prevention strategies in experimental design;
- understand the limits of computational correction.

## 1. The fundamental equation of the experiment

A useful way to think about any experiment is to consider that the **observed phenotype** mixes different components:

$$
\textbf{Observed phenotype} =
\textit{Treatment effect} +
\textit{Biological effect} +
\textit{Technical effect} +
\textit{Error}
$$

Where:

- **treatment effect** is the perturbation of interest, such as dose, time, inhibitor, or nanomaterial;
- **biological effect** corresponds to the characteristics of the biological system, such as cell line, physiological state, genetics, and culture history;
- **technical effect** includes variations introduced by the experimental process, such as plate, operator, equipment, calibration, pipetting, and acquisition;
- **error** corresponds to the residual variation that remains, including measurement noise, variation between experimental units, and subsampling.

Our goal is to estimate the treatment effect with as little confounding as possible from technical effects and error.

## 2. What is *batch effect*?

*Batch effect* is a type of **technical effect**.

It occurs when groups of samples are processed, acquired, or analyzed in **different batches**, for example, on different days, plates, acquisition runs, or independent preparations, producing a variation that is mostly **systematic** and not biological in origin.

!!! info "*Batch effect*"
    It is a predominantly systematic, non-biological variation associated with the processing of groups of samples in distinct batches, such as different days, plates, or experimental runs.

In HCA, this is especially important for two reasons. First, because we are rarely able to keep all conditions exactly identical across plates, days, acquisition runs, or independent preparations. Second, because HCA is a sensitive technique, capable of detecting these technical variations and incorporating them into the measured profile, causing them to act as confounders in the analysis.

## 3. Where does *batch effect* come from?

*Batch effect* can arise at several stages of the experiment, for example:

- differences in culture and plating;
- variations in treatment preparation;
- slightly different incubation times;
- different operators;
- different plates;
- different reagent lots;
- reagent freeze-thaw cycles;
- microscope calibration;
- illumination source intensity;
- focus, exposure, or segmentation adjustments;
- changes in the analysis pipeline.

In other words, *batch effect* is not just “a different day.” It can appear whenever a set of samples shares a particular technical condition that distinguishes it from another batch.

## 4. Why is it so important in HCA?

In HCA, the data have a hierarchical structure:

**cell → field/site → well → plate → batch → experiment**

At the same time, the number of extracted variables is usually high, and many of them are sensitive to small technical differences. For this reason, technical signatures can affect phenotypic profiles.

A miscalibrated pipette, a difference in illumination, or a variation in stain preparation may leave a systematic “signature” in the data. And because this signature is consistent, statistical and machine learning models may learn it as if it were a real biological signal.

For this reason, in HCA, it is reasonable to start from the assumption that the data may carry some degree of *batch effect* and that this needs to be investigated.

## 5. How does *batch effect* appear in the data?

*Batch effect* can manifest in several ways:

- grouping of samples by day, plate, or operator;
- shifts in controls across plates;
- systematic differences between regions of the plate;
- batch-based separation in *embeddings* or low-dimensional projections;
- artificial increase in variability;
- apparent differences between treatments that disappear when batch is controlled for;
- disappearance of a real biological effect due to excessive technical variation.

In extreme cases, *batch effect* can make the analysis unfeasible. In less evident situations, it can be even more dangerous, because it produces plausible but incorrect conclusions. This is particularly problematic when the biological effects of interest are subtle, since *batch effect* may make them harder to identify or even mask them.

## 6. How to inspect *batch effect*?

A good practice is to have an explicit inspection routine.

### 6.1 Visual inspection of images

Even before quantitative analysis, observe:

- overall channel intensity;
- focus;
- *background*;
- artifacts;
- systematic differences between plates or between plate edges.

### 6.2 Controls across plates

Check whether negative and positive controls behave consistently across plates, days, and batches.

### 6.3 Dimensionality reduction

Project the profiles using **unsupervised** dimensionality reduction algorithms, such as **PCA** or **UMAP**, and color the points by:

- batch;
- plate;
- day;
- treatment.

If the samples group more strongly by batch than by treatment, this suggests an important technical influence.

!!! tip
    PCA and UMAP are useful exploratory tools for raising suspicion of *batch effect*, but they do not replace control inspection and quantitative analyses.

### 6.4 Quantitative metrics

In addition to visualization, it is worth quantifying:

- separation between batches;
- control stability;
- intra- and inter-plate variance;
- replicate consistency;
- preservation of the relationship between controls and treatments after correction.

## 7. Why is *batch effect* dangerous?

Because it can:

- **mimic a biological effect**;
- **hide a real effect**;
- **generate false positives**;
- **generate false negatives**;
- **confound predictive models**;
- **harm reproducibility**.

A classic scenario is when the experimental design confounds *batch* with treatment. For example:

- all controls on one plate;
- all treated samples on another plate.

In this case, any difference between plates may look like a treatment effect. And because treatment and batch vary together, it becomes very difficult, if not impossible, to separate one from the other in the analysis.

!!! info "About examples, practical numbers, and laboratory tools"
    This course was created for internal use in the laboratory. For this reason, in addition to general concepts from the field, it includes real examples, operational decisions, and some empirical *guidelines* that we developed in our routine. These values should not be interpreted as universal rules for the field, but as practical starting points to help with the planning, execution, and analysis of our experiments. At various points, you will also see references to tools developed in the laboratory, such as **HCI_Metadata_Generator_v3**. The goal is to make the content more applicable to our routine and easier to use in day-to-day work.

## 8. How to prevent *batch effect*?

Prevention begins in the experimental design. The best strategy is to structure the experiment so that the technical effect can be recognized, monitored, and, when necessary, modeled appropriately.

### 8.1 Randomization

Distribute treatments and controls in a randomized way, avoiding concentration of one condition in a single region, plate, or batch.

The logic here is simple: if a condition is grouped in only one part of the plate, or restricted to a single experimental day, any technical effect associated with that position or batch may be confused with the biological effect of interest.

**Example:** if all wells treated with nanoparticles are placed in the last columns of the plate, and those columns are more affected by evaporation, the edge effect may look like a treatment effect.

### 8.2 Blocking (*blocking*)

When you know there will be an unavoidable source of technical variation, such as different days, different plates, or distinct acquisition runs, treat this as a **block** in the experimental design.

In other words, instead of ignoring this source of variation, you explicitly recognize it and organize the experiment so that the conditions of interest are represented within each block.

**Example:** if the experiment will be carried out over two days, ideally each day should contain samples from all main conditions, including controls and treatments, rather than only a subset of them.

### 8.3 Distributed controls

Include positive and negative controls on all plates and always distribute them across the plate.

This creates a shared internal reference across batches and helps both in quality inspection and in possible later correction strategies.

This is especially important because controls act as “anchors” to interpret whether the observed variation is more related to treatment or to technical processing.

**Practical example:**
- do not place all controls on only one plate;
- do not concentrate all controls in a single region of the plate;
- repeat the main controls on all plates of the experiment.

### 8.4 Well-planned plate maps

Avoid large contiguous blocks of a single condition. Whenever possible:

- distribute replicates across the plate;
- reduce the number of adjacent replicates;
- consider edge effects;
- vary condition positions between plates;
- avoid restricting a condition to a single row, column, or quadrant.

For beginning students, this step is often difficult to visualize. For this reason, whenever possible, work with **explicit plate maps**, and not only with a list of treatments.

**Example:**
- inefficient: 8 replicates of the same condition all together;
- better: replicates distributed in different regions of the plate, with controls spread among them.

### 8.5 Consistent experimental routine

Standardize as much as possible:

- plating;
- timing;
- reagents;
- incubation;
- acquisition;
- analysis.

This does not eliminate *batch effect*, but it reduces the magnitude of the problem and makes it easier to interpret.

In HCA, small differences may be detected by the assay and appear in quantitative profiles. For this reason, operational consistency is not just “organization”: it is part of the analytical quality of the experiment.

### 8.6 Complete metadata

Without good metadata, you cannot properly detect or model *batch effect*. It is important to collect a variety of information about your experiment:

- date;
- operator;
- plate;
- reagent lot;
- instrument;
- acquisition settings;
- pipeline version;
- relevant observations.

In addition, in our routine, we use [**HCI_Metadata_Generator_v3**](https://docs.google.com/spreadsheets/d/1qLVhBZXnamTXAmbJX-mvfrMBHy7giindIiN7zh0uzC4/edit?usp=sharing), a tool developed in the laboratory, to help standardize the organization of this information. The detailed use of this tool will be discussed in another topic of the course, but it is already important to understand what kinds of information it was designed to organize.

Main groups of information that it helps structure:

- experiment and batch identification;
- assay/panel used;
- cell line;
- perturbation type;
- *timepoints*;
- plating density and volume;
- number of replicates per condition;
- controls used and number of wells per control;
- number of doses and dose unit, when applicable;
- plate size and model;
- number of *sites* per well;
- *platemap* reference;
- who performed plating, staining, and acquisition;
- cell origin;
- quality control information, such as mycoplasma;
- additional observations and protocol deviations.

This type of metadata is essential because it allows reconstruction of the experimental context and investigation of whether an observed variation may be associated with technical factors rather than with the treatment itself.

## 9. And afterwards: can it be corrected?

Sometimes, partially. There are methods for reducing *batch effect*, such as:

- **ComBat**;
- **Harmony**;
- approaches based on latent representation;
- some *deep learning* methods.

These methods can be useful, but they have important limits.

### 9.1 Correction does not replace experimental design

If *batch* and treatment are confounded, correction may fail or remove true biological signal together with technical noise.

### 9.2 The algorithm does not “know” what biology is

These methods model patterns in the data. By themselves, they do not understand what is true biological effect and what is technical artifact.

### 9.3 The case of ComBat

Methods such as ComBat tend to work better when there is adequate overlap between conditions and batches. In other words, when the model can observe equivalent conditions distributed across different *batches*.

If all controls are in one batch and all treatments in another, there is not enough information to separate technical effect from biological effect reliably.

!!! warning
    Computational correction can help, but it does not recover information that the experimental design failed to preserve.

## 10. Closing remarks

*Batch effect* is a type of systematic technical effect that can profoundly distort the interpretation of HCA experiments.

It should not be treated only as an analysis problem, but as a problem of **experimental design, execution, quality control, and interpretation**.

The best correction for *batch effect* begins before data collection.

!!! warning
    Do not leave it to “fix later.” Computational methods may reduce the problem, but they do not save a poorly designed experiment.

## Lesson summary

- *batch effect* is a systematic, non-biological variation associated with different processing batches;
- in HCA, it is especially important because many variables are sensitive to small technical changes;
- it can mimic biological signal, hide real effects, or generate spurious associations;
- prevention depends on randomization, blocking, distributed controls, standardization, and good metadata;
- computational correction can help, but it depends on a well-planned experiment.

## Exercises

### Exercise 1 — Conceptual

Explain, in your own words, the difference between:

- treatment effect;
- biological effect;
- technical effect;
- error.

Then answer:

1. Why is *batch effect* considered a type of technical effect?
2. Why is it especially important in HCA?
3. Why can a subtle *batch effect* be more dangerous than a very evident *batch effect*?
4. Why does computational correction not replace good experimental design?

!!! tip
    Try to answer without simply repeating the definition. The goal here is to show that you understood the logic of the problem.

### Exercise 2 — Discussion of experimental scenarios

Read the two scenarios below. Then, for each case, discuss:

- what the main risks of *batch effect* are;
- which experimental design decisions help;
- which decisions make the problem worse;
- what the pros and cons of the possible choices would be;
- what you would do in that context and why.

#### Scenario A — Fewer plates, fewer days, more concentration of conditions

You are going to test a nanomaterial in a cell line. The experiment will have:

- 1 negative control;
- 1 positive control;
- 4 treatment doses;
- 4 replicates per condition;
- acquisition in a 96-well plate.

You realize that you can fit everything into **a single plate**, but to make setup easier you are considering organizing it like this:

- controls in one corner of the plate;
- low doses in one region;
- high doses in another;
- replicates of the same condition always side by side.

**Questions for discussion:**

1. What are the practical advantages of this organization?
2. What risks does it create for interpretation of the results?
3. How could edge effects or gradients across the plate interfere?
4. Is it worth giving up a “nice-looking” organization in order to distribute conditions better?
5. How would you reorganize this map?

#### Scenario B — More than one experimental day, with a non-obvious decision

You need to repeat an experiment in **two plates**, but you can only carry it out on **two different days**.  
The experiment will have:

- negative control;
- positive control;
- 3 treatments;
- 1 *timepoint*;
- 4 replicates per condition on each day.

The team is discussing two strategies:

**Strategy 1**  
- Day 1: half of the conditions  
- Day 2: the other half of the conditions

**Strategy 2**  
- Day 1: all conditions  
- Day 2: all conditions again

Strategy 1 seems easier to execute. Strategy 2 seems better for comparison, but requires more organization.

**Questions for discussion:**

1. Which strategy tends to be more robust against *batch effect*?
2. In what situation could Strategy 1 compromise the analysis?
3. What is the role of controls in each of these strategies?
4. If there is a difference between the days, in which strategy would this be easier to detect?
5. Is there any practical situation in which Strategy 1 could still be acceptable? What additional precautions would be necessary?

!!! warning
    In this exercise, there is not just one “correct” answer. The goal is to discuss experimental reasoning and identify practical trade-offs.

### Exercise 3 — Outline of your experiment

Now think about your own experiment. If you do not yet have a defined experiment, use the guide scenario below.

#### Option A — Your real experiment

Briefly describe:

- what the biological question is;
- what the biological model is;
- what the treatments are;
- what the controls are;
- how many plates you intend to use;
- whether the experiment will be performed on one or more days;
- which sources of technical variation you can already foresee.

Then propose:

1. how you would distribute treatments and controls across the plate(s);
2. how you would deal with the need for more than one batch, if that happens;
3. which metadata you consider indispensable for interpreting the experiment;
4. which points in your design are still vulnerable to *batch effect*.

#### Option B — Guide scenario for those who do not yet have a defined experiment

Plan an HCA experiment with the following characteristics:

- cell line: Huh-7;
- treatment: a compound with potential cytotoxic effect;
- conditions:
  - negative control;
  - positive control;
  - 4 doses of the compound;
- 4 replicates per condition;
- 96-well plate;
- acquisition over 2 days;
- 9 sites per well.

Based on this:

1. draw a general strategy for distributing the conditions;
2. say how you would organize the two experimental days;
3. explain how the controls would be distributed;
4. list the main metadata you would record;
5. identify at least 3 potential sources of *batch effect*;
6. propose at least 3 preventive measures.

!!! tip
    Do not worry about finding the “perfect” design. The most important thing here is to justify your decisions.

## Further reading

1. [Tackling the widespread and critical impact of batch effects in high-throughput data](https://www.nature.com/articles/nrg2825)
2. [Batch Effect Confounding Leads to Strong Bias in Performance Estimates Obtained by Cross-Validation](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0100335)
3. [Evaluating batch correction methods for image-based cell profiling](https://www.nature.com/articles/s41467-024-50613-5)
