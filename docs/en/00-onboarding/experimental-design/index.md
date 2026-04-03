# HCA — Experimental design (controls, replication, randomization)

**By the end of this module, you are expected to be able to:**

- distinguish more exploratory assays from more confirmatory assays in HCA;
- understand the role of the pilot assay (*assay development*) in building a robust experiment;
- select controls appropriate to the biological objective and to the nature of the perturbation under study;
- recognize the importance of replication, randomization, and sample distribution across the plate;
- identify frequent sources of technical variation in image-based assays.

**Module deliverable**

- a description of your assay as more exploratory, more confirmatory, or hybrid;
- an initial proposal for positive, negative, and vehicle control(s), when applicable;
- a preliminary definition of the number of replicates and the logic of their distribution across the plate;
- a draft *plate map* with attention to edges, control dispersion, and variation across days.

In HCA, experimental design is a central part of the quality of biological inference. Because these assays generate a large amount of data from images, small technical variations or poor *layout* choices may appear prominently in the analysis and compete with the biological effect of interest.

In this lesson, we will discuss the main elements that need to be considered before starting the experiment: the type of assay, the role of the pilot, the choice of controls, the logic of replication, randomization, and the distribution of samples across the plate.

## 1) More exploratory and more confirmatory designs

In HCA, experiments can be designed along a spectrum between more exploratory approaches and more confirmatory approaches.

### More exploratory assays

Exploratory assays are especially useful when the goal is to broadly map phenotypic responses, generate hypotheses, or identify perturbations of interest. In these cases, the analysis often relies on a multiparametric readout of the cellular response, without restricting the experiment to a single previously chosen *endpoint*.

This is common in **phenotypic profiling** strategies and, in many contexts, in **screening** experiments. Here, assays such as *Cell Painting* and *Live Cell Painting* are important examples, and in some cases we may also have label-free approaches. They allow the observation of changes in different cellular structures and properties, often related to morphology, subcellular organization, and cellular functional states.

!!! info "Important"
    Exploratory assays are not “free of bias” nor “without a question.” They are simply less driven by a single main *endpoint* and more open to the discovery of patterns, signatures, and unexpected effects.

### More confirmatory assays

Confirmatory assays, in turn, are usually designed to test more specific hypotheses, generally with *endpoints*, controls, and analysis criteria defined more clearly from the start.

This group includes, for example:

- protein translocation assays;
- internalization assays;
- protein half-life evaluation;
- migration assays;
- proliferation assays;
- cell death assays.

These experiments may use live or fixed cells, specific markers, and often have a more mechanistic nature, serving to confirm findings from exploratory assays. The common point remains the use of images as a source of quantitative data.

### Discovery vs proof of principle

The level of rigor required in controlling technical artifacts also depends on the objective of the experiment. In discovery assays, part of the findings will be filtered in later validation steps. In proof-of-principle experiments, benchmarking, or *ground truth* generation, control over position, batch, and execution effects must be even more careful, because the experiment itself already needs to support stronger conclusions.

## 2) The role of the pilot assay: *assay development*

An HCA project should begin with a **pilot assay**. At this stage, we evaluate whether the biological event of interest can in fact be studied under the conditions available in the laboratory and at the scale proposed for the experiment.

The pilot helps adjust both the experimental and analytical aspects of the assay.

### 2.1) Experimental adjustments

From an experimental perspective, the pilot helps assess:

- the available equipment, such as microscope, objective, temperature control, and acquisition stability;
- the type of labeling, including antibodies, probes, specific markers, or label-free approaches;
- the imaging modality, such as brightfield, phase contrast, fluorescence, or confocal;
- the chosen biological model, including cell lines, 2D cultures, 3D models, or cocultures;
- exposure times and collection times;
- treatment concentration;
- expected control behavior;
- the possibility of scaling the assay to the planned number of samples.

### 2.2) Analytical adjustments

From the analysis perspective, the pilot is also essential. At this stage, we adjust:

- segmentation pipelines;
- *feature* extraction;
- *quality control* (QC) criteria;
- metadata structure;
- the metrics that will be used to identify *hits*, compare profiles, or characterize controls.

!!! tip "Rule of thumb"
    A good pilot is not just for “seeing whether it works.” It is meant to reveal limitations, adjust what is still fragile, and prevent the main experiment from failing at a larger scale.

Later in the course, we will go deeper into QC, metadata, and analysis topics. Here, the most important point is to understand that these elements should already be considered and optimized during the assay development phase.

## 3) Controls

Thinking about experimental design almost always starts with controls. In HCA, this is even more important, because controls do not only help determine whether “there was an effect or not”: they also help anchor the biological interpretation and assess whether the assay is responding coherently.

### 3.1) Untreated, vehicle, negative, and positive controls

Although these terms are sometimes mixed in everyday use, they are not exactly the same thing.

- **Untreated control**: basal condition, with no addition of the perturbation of interest.
- **Vehicle control**: condition that receives only the solvent or vehicle used to solubilize the treatment.
- **Negative control**: condition that ideally does not meaningfully alter the basal phenotypic state under the assay conditions.
- **Positive control**: a condition known to induce a biologically relevant effect for the phenomenon under study.

For example, if a compound is dissolved in DMSO, it may be necessary to include a vehicle control with the same DMSO concentration used in the treated samples.

### 3.2) Use more than one control whenever possible

Whenever possible, it is advantageous to use more than one control. This is particularly useful when the experiment seeks to evaluate a pathway, process, or biological state that may be induced by different perturbations.

For example, we may use:

- more than one molecule that activates or inhibits the same pathway;
- more than one reference control for cell death;
- more than one control for a known phenotypic state.

For project development in the laboratory, it is valuable for well-characterized positive controls to be accumulated over time, as this strengthens the development of future assays.

### 3.3) The nature of the control should match the nature of the perturbation

Ideally, the controls should be of a similar nature to the objects of interest.

If the experiment evaluates a small-molecule library, ideally the controls should also be small molecules. If the experiment evaluates siRNA, ideally it should include controls compatible with this type of perturbation, such as a *scramble siRNA*.

In some cases, it may be informative to compare different types of perturbation, such as a small molecule and a CRISPR approach. However, these comparisons require caution, because the response time, effect kinetics, and even the biological mechanism may be very different. In such cases, orthogonal assays help support the comparison.

### 3.4) Biologically realistic controls

A particularly important point in HCA is that the positive control needs to be **biologically informative**, and not merely “strong” from a statistical point of view.

If your treatment of interest is expected to generate subtle changes in phenotypic profile, an extremely aggressive control — for example, a very high concentration of a strong inducer of cell death — may be useful to show that the assay responds, but it may be poorly informative as a reference for interpreting the expected effects.

!!! warning "Caution"
    An excessively strong positive control may amplify the mathematical contrast of the assay, but not necessarily improve its biological relevance.

For this reason, during *assay development*, it is common to test dilutions of the positive control in order to find more realistic concentrations for that biological model and for the effect range one wishes to study.

### 3.5) Stability, preparation, and solvent

A useful strategy to reduce variability is to prepare a larger batch of control solutions and freeze enough aliquots for several experiments. This helps reduce errors introduced by weighing, pipetting, and repeated preparation.

Of course, this is only valid when the control is chemically or biologically stable during the storage period. This stability should be checked with the supplier, the reagent documentation, or in the literature.

In addition, it is important to consider the solvent. Many molecules are hydrophobic and require solvents such as DMSO. In these cases:

- the final solvent concentration must be carefully controlled;
- the vehicle control must reflect this concentration;
- volatile solvents, such as ethanol, require additional caution, as small variations in volume may alter the final concentration of the compound.

## 4) Replication

Replication is one of the main tools for estimating variability and supporting inference. In HCA, this is especially important because the large number of cells and images may give a false sense of robustness, even when the number of independent experimental units is small.

### 4.1) Biological and technical replicates

**True biological replicates** are essential for estimating the systemic variability of the assay and evaluating the consistency of the observed effects across different executions of the experiment.

**Technical replicates**, in contrast, help reduce uncertainty within the same execution, but they do not replace biological replication.

In HCA, this is particularly important because:

- more images do not mean more biological replication;
- more cells per well do not increase the number of independent experimental units;
- consistency across days and across assay executions is part of the robustness assessment.

### 4.2) How many replicates should be used?

There is no universally correct number of replicates. The appropriate number depends on several factors, including:

- expected effect size;
- assay variability;
- project scale;
- exploratory or confirmatory objective;
- cost and material availability.

In many small- and medium-scale assays, between 2 and 4 replicates per condition are used in more exploratory stages. For subtler effects, or for confirmatory objectives, larger numbers are often required.

!!! note "Important message"
    Do not turn replicate numbers into a fixed rule. In HCA, the ideal number depends on the biological system, the type of effect, and the analytical sensitivity of the assay.

### 4.3) Control replicates

Controls, especially negative controls, usually require a relatively larger number of wells distributed across the plate. This helps capture the basal variation of the assay and gives greater robustness to comparisons between groups.

In many 96-well plate experiments, it is common to use an important fraction of the plate for controls, especially when the question is more sensitive to subtle profile variations.

### 4.4) Sensitivity and validation

In many exploratory contexts, we adopt a more sensitive design that seeks to reduce the chance of missing real biological effects. In these cases, part of the false positives may later be filtered through orthogonal validation or more specific assays.

This does not mean relaxing criteria without justification, but rather recognizing that, in exploratory stages, it may be preferable to preserve sensitivity and leave part of the confirmation to the next stage.

## 5) Randomization, *plate mapping*, and *edge effects*

The distribution of conditions across the plate is one of the most important points of experimental design in HCA. It helps reduce positional biases, technical effects, and misleading interpretations.

### 5.1) Plate choice

Before distributing the groups, it is necessary to decide in which plate format the experiment will be performed. This choice depends on factors such as:

- amount of sample available;
- number of conditions to be tested;
- degree of automation in plating and washing;
- experiment scale;
- assay robustness in the desired format.

The most common plates in HCA are 96- and 384-well plates. In lower-scale contexts with less automation, 96-well plates are often particularly relevant.

### 5.2) Randomization begins at plating

In manually plated 96-well experiments, randomization begins even before treatment addition. The way cells are counted, resuspended, and distributed can already introduce technical patterns across the plate.

Some important precautions include:

- keeping the counting method consistent across experiments;
- periodically resuspending the cells during plating to reduce sedimentation;
- using multichannel or repeater pipettes correctly;
- checking calibration and technical mastery of the equipment;
- considering strategies that reduce volume error, such as reverse pipetting, when applicable.

It is also important to avoid plating in a rigid and continuous row- or column-wise order, as this may introduce technical gradients across the plate.

### 5.3) Distribution of conditions across the plate

The position of groups across the plate directly influences experiment quality. Whenever possible:

- spread controls across different regions of the plate;
- avoid concentrating all replicates of one condition in the same block;
- distribute groups across distinct areas;
- use different maps on different experimental days.

!!! tip "Rule of thumb"
    Never place many replicates of the same condition too close to one another.

This strategy helps reduce the risk that position, evaporation, or plating effects will be confused with the biological effect of interest.

### 5.4) *Plate map* as a traceability structure

In HCA experiments, the *plate map* should not be treated only as a visual organization figure of the plate. It also needs to function as a traceability structure for the experiment.

Whenever possible, each experimental plate should have its own map associated with a unique identifier, such as the plate barcode, allowing the reconstruction of:

- which conditions were distributed in each well;
- at which concentration;
- from which experimental origin;
- on which plate and on which day that condition was used.

This is particularly important in automated experiments, in *screenings*, and in any situation in which the same condition may appear on multiple plates or on multiple different days.

!!! info "Good practice"
    Do not rely on a single generic map for multiple plates. In more complex experiments, each plate should have its own experimental and documentary identity.

### 5.5) Varying layouts: desirable, but with operational feasibility

Whenever possible, it is desirable to vary the position of conditions across plates or across experimental days, in order to reduce the chance that position effects will be confused with the biological effect of interest.

However, this variation needs to be balanced with the operational feasibility of the experiment. In some contexts, generating multiple layouts increases:

- cost;
- automation complexity;
- metadata burden;
- the risk of manual error or traceability error.

Therefore, the best design is not always the most “random possible,” but rather the most robust one that still remains executable, documentable, and reproducible.

!!! warning "Caution"
    Manually performed randomization strategies may seem attractive, but they also increase the risk of pipetting error, *plate map* error, and loss of traceability. In many cases, a somewhat less ambitious randomization, but one that is well documented and reproducible, is preferable to a “perfect” randomization executed in a fragile way.

### 5.6) *Edge effects*

The **edge effect** is a recurring problem, especially in 96-well plates. Edge wells are more affected by temperature variation and evaporation, which can alter volume, solute concentration, and cell behavior.

A common way to deal with this is to avoid using edge wells for the main experimental conditions and to fill them with sterile water or buffer, so that they function as sacrifice wells.

In some situations, these wells may also be used for microscope parameter adjustment or auxiliary observations, but always with the awareness that they are more strongly influenced by evaporation and therefore are not ideal for the main experimental comparison.

### 5.7) Additional measures to reduce *edge effect*

In addition to avoiding experimental use of the edges and filling those wells with sterile water or buffer, other measures may help reduce the *edge effect*, such as:

- better control of incubator humidity;
- opening the incubator as little as possible;
- maintaining a consistent handling routine across experiments;
- considering additional measures to stabilize the plate microenvironment, when applicable to the system used.

The goal is not to completely eliminate the technical effect, but to reduce its magnitude and make its influence more predictable.

### 5.8) Variation across days

In addition to spreading the conditions across the plate, it is important to vary the maps across different experimental days. This helps decouple biological effects from positional effects and better captures technical components in the later analysis.

In HCA, position, evaporation, plating, or acquisition effects often appear clearly in dimensionality reduction analyses, *clustering*, or profile comparisons. For this reason, distributing samples across distinct regions and varying this arrangement across days is a central strategy.

### 5.9) An important practical detail

Leaving the plate for about 20 minutes at room temperature before placing it in the incubator may improve plating homogeneity, which may be useful for later analysis. As always, this routine should be standardized and reproduced consistently.

## 6) *Batch effects*

Even with good experimental design, technical effects will still be present. In HCA, this includes variation associated with:

- experiment day;
- operator;
- pipette used;
- plate position in the incubator;
- reagent lot;
- acquisition session;
- handling differences.

These factors may appear in the final result and, in some cases, compete directly with the biological effect we want to study.

Tools that help mitigate *batch effects* include:

- randomization;
- spatial distribution of conditions;
- different maps on different days;
- appropriate use of controls;
- consistent preparation of reagents and controls;
- standardized experimental routine;
- good plate and metadata traceability.

!!! info "Central message"
    The goal of experimental design is not to completely eliminate the technical effect, but to minimize it and make its influence more identifiable and manageable.

## 7) Closing remarks

In HCA, experimental design, analysis, and biological interpretation are deeply connected. An experiment may have excellent images and still produce fragile conclusions if the controls are inadequate, if plate distribution is poor, or if technical variability dominates the biological signal.

For this reason, before starting an experiment, it is always worth asking:

- is the assay more exploratory, more confirmatory, or hybrid?
- do the controls really represent the phenomenon I want to observe?
- is the replication sufficient to support the inference I want to make?
- does the *plate map* help protect the experiment against position and batch effects?
- has the pilot assay already revealed the main limitations of the system?
- is the chosen design truly executable and traceable in the laboratory context?

These questions do not eliminate all the uncertainty of the experiment, but they make its design much more robust and much more honest.

## Exercises (for today)

1) **Exploratory, confirmatory, or hybrid?**  
   Classify your experiment as more exploratory, more confirmatory, or hybrid. Justify your answer in 3–5 lines.

2) **Thinking about controls**  
   Propose, for your experiment, at least:
   - one untreated control;
   - one vehicle control, if applicable;
   - one positive control;
   - one negative control.  
   Explain why they are appropriate for your biological question.

3) **Biologically realistic control**  
   Think about a very aggressive positive control and a more realistic positive control for your system. Which one would make more sense for your current objective? Why?

4) **Replication and *layout***  
   Make an initial draft of your experiment indicating:
   - number of replicates per group;
   - where the controls will be placed on the plate;
   - how you intend to avoid grouping replicates too closely;
   - whether there will be *plate map* variation across days;
   - how this map will be documented for each experimental plate.

## For further reading (optional)

- [Assay Development Guidelines for Image-Based High Content Screening, High Content Analysis and High Content Imaging](https://www.ncbi.nlm.nih.gov/books/NBK100913/)
- [Advanced Assay Development Guidelines for Image-Based High Content Screening and Analysis](https://www.ncbi.nlm.nih.gov/books/NBK126174/)
