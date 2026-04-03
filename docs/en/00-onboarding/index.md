# Onboarding

## 0) Overview

### Purpose
To train graduate students capable of carrying out the full cycle of an HCA/HCI project with rigor and reproducibility:

**Question → experimental design → acquisition → QC → analysis → interpretation → communication → reproducibility**

![HCI/HCA adventure map](../assets/img/hci-adventure-map.webp)

### Expected outcomes
The person is able to:

- Design an HCA assay (e.g., *Live Cell Painting*) with proper controls and *batch effect* mitigation.
- Acquire images with coherent parameters and justify acquisition choices.
- Implement QC (*Quality Control*) and exclusion criteria (image and/or well) and document the rationale.
- Build a segmentation/measurement pipeline (e.g., CellProfiler) and integrate metadata.
- Generate phenotypic profiles, normalize data, diagnose batches, and produce reproducible reports.
- Train baseline models (and advanced ones when necessary) with proper validation.
- Deliver reproducible artifacts (repository + environment + notebooks + README + figures).

### Operational principles of the course

- **Rigor > speed:** first make it work, then optimize.
- **Reproducibility from day 1:** environment, versions, seeds, organized data.
- **Learn by doing:** each module ends with an assessable deliverable.
- **Dual track:** 
    1. biology/microscopy/assay and 
    2. data/software/ML, converging in projects.

### Topics

- [Introduction to High-Content Imaging and High-Content Analysis](intro/index.md)
- [Scientific question and operationalization](scientific-question/index.md)
- [Experimental design I: controls, replication, and randomization](experimental-design/index.md)
- [Experimental design II: *batch effect* — how to recognize, prevent, and interpret it](batch-effects/index.md)

!!!info "About this material"
    This material was created to support the training of our research group in HCI/HCA. It was designed primarily for our own workflow, but it may also be useful for others who are learning or organizing similar workflows.
    If you find any errors, inconsistencies, or have suggestions for improvement, feel free to open an *issue* in the repository. If you would prefer to discuss something privately, please send an email.
