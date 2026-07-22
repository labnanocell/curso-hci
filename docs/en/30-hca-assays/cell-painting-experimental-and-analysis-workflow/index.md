# Cell Painting — Experimental Workflow, Profiling, and Applications

## Learning objectives

By the end of this lesson, learners will be able to:

- describe the experimental and computational analysis *workflow* of *Cell Painting*;
- discuss how morphological profiles are constructed and interpreted;
- recognize the main applications, adaptations, and limitations of *Cell Painting*.

## 1. Experimental and computational workflow

*Cell Painting* is often presented as a staining protocol, but this view is incomplete. The assay only becomes informative when the entire chain is conducted in an integrated manner, including experimental design, image acquisition, analysis, and interpretation.

The summarized *workflow* of the v3 protocol can be organized into nine steps.

1. **Cell seeding**  
   Cells are seeded at a controlled density. In the U2OS reference protocol, approximately 2,000 cells per well are seeded in 30 µL in 384-well plates. Keeping the plate at room temperature for approximately one hour before incubation helps promote a more uniform cell distribution and reduce cell accumulation in the center of the wells.

2. **Perturbation**  
   Cells are exposed to compounds, genetic perturbations, or other experimental conditions. Compounds are often evaluated after 24–48 hours, whereas genetic perturbations may require longer periods for the phenotype to become established—for example, CRISPR may require 96–144 hours, whereas ORF overexpression may require 48–72 hours. The exposure time should be defined according to the mechanism under investigation, the perturbation system, and the cellular model.

3. **MitoTracker and WGA staining**  
   In the v3 protocol, MitoTracker and WGA are added directly to the culture medium before fixation, without prior medium removal. This modification simplifies the protocol and reduces cell loss. MitoTracker is applied to live cells, whereas WGA primarily labels structures at the cell surface and within the Golgi system.

4. **Fixation**  
   Cells are fixed with PFA at a final concentration of 3.2% for approximately 20 minutes at room temperature. Fixation preserves cellular morphology and enables the subsequent staining of intracellular structures.

5. **Combined permeabilization and staining**  
   Permeabilization with Triton X-100 and staining with phalloidin, Concanavalin A, Hoechst, and SYTO 14 are performed in a combined step, generally in HBSS containing BSA.

6. **Washing and storage**  
   Plates are washed to remove unbound fluorophores and sealed for acquisition. After fixation, images can be acquired for up to two weeks with little loss of quality, provided that appropriate storage conditions are maintained. Even so, the interval between staining and acquisition should be kept as consistent as possible across plates.

7. **Image acquisition**  
   Images are acquired in five fluorescence channels, generally using a 20× objective and multiple fields of view per well. The number of fields should balance representativeness, acquisition time, and data volume.

8. **Image analysis**  
   Analysis *pipelines* typically include illumination correction, quality control, segmentation, and feature extraction. Segmentation defines which objects will be measured; therefore, errors at this stage directly affect all subsequent measurements.

9. **Profiling and statistical analysis**  
   Single-cell *features* are aggregated at the well level, normalized, filtered, and compared. Depending on the scientific question, analyses may include correlation or distance measures, dimensionality-reduction methods such as PCA and UMAP, clustering or classification approaches, and profile-quality metrics such as *Percent Replicating*, *Percent Matching*, AP, and mAP.

This *workflow* summarizes much of the logic underlying the course. The success of phenotypic profiling depends on decisions made from experimental design through biological interpretation. Errors introduced during early stages—including problems with cell density, acquisition, segmentation, or normalization—can propagate throughout the entire *workflow* and compromise the final conclusion.

!!! note
    In HCI/HCA, the transformation of images into knowledge occurs through a chain of interdependent steps. The goal is not only to minimize errors, but also to preserve, throughout the process, the relationship between the extracted measurements and their biological interpretation.

## 2. How to interpret a Cell Painting profile

A *Cell Painting* phenotypic profile, generated after image analysis, is a vector of quantitative features that describes a cell population—generally represented by a well—under a given experimental condition.

These features may include nuclear area, mitochondrial intensity, endoplasmic reticulum texture, granularity in the AGP channel, spatial correlation between channels, radial signal distribution, number of subcellular objects, and many other measurements.

Interpretation should follow a careful sequence:

**Observation**  
A set of *features* changes after the perturbation.

**Comparison**  
The morphological profile of the treatment moves away from the control or approaches a known reference.

**Interpretation**  
The observed pattern may be compatible with a particular cellular state, mechanism of action, or phenotypic response.

**Limitation**  
Morphological similarity does not, by itself, prove mechanistic identity.

For example, if a compound produces a profile similar to that of known lysosomotropic compounds, we may state that the pattern is compatible with lysosomal alterations. However, based on *Cell Painting* alone, we should not conclude which specific molecular mechanism is involved—for example, that the compound activates autophagy, blocks autophagic flux, or induces apoptosis. Such conclusions require orthogonal assays.

## 3. Main applications

Because *Cell Painting* produces a quantitative description of the cellular state, it can be used whenever the scientific question can be reformulated as a comparison between phenotypic profiles.

One of its best-known applications is grouping compounds by mechanism of action. Compounds with similar mechanisms may produce similar morphological signatures, particularly when evaluated at comparable concentrations, exposure times, and cellular contexts. Unknown compounds can therefore be compared with reference libraries to generate mechanistic hypotheses through similarity, an approach known as *guilt by association*.

Another important application is the identification of disease signatures. Cells derived from disease models can be compared with control cells, and compound libraries can be evaluated according to their ability to shift the altered profile toward the healthy profile. In this context, the objective is not simply to kill cells or alter a single pathway, but to reverse a phenotypic state, an approach known as *phenotypic recovery*.

*Cell Painting* can also be applied in toxicology. Morphological profiles may reveal mitochondrial, lysosomal, nuclear, proliferative, or structural alterations before later outcomes, such as an evident loss of viability, become detectable. This is particularly relevant for studies of sublethal toxicity.

| Application | Description | Typical interpretation |
|---|---|---|
| **Mechanism-of-action grouping** | Groups compounds with similar morphological signatures | Similar profiles may indicate related mechanisms, processes, or pathways |
| **Disease-signature identification** | Compares healthy cells with disease models | Compounds can be prioritized according to their ability to shift an altered profile toward a healthy profile |
| **Library enrichment** | Selects compounds with phenotypic diversity | Reduces redundancy and increases morphological coverage |
| **Generation of target or mechanism hypotheses** | Compares unknown compounds with annotated references | Prioritizes potential targets, pathways, or mechanisms for validation |
| **Toxicological profiling** | Identifies sublethal phenotypic alterations | May reveal patterns compatible with mitochondrial, lysosomal, structural, or proliferative alterations |
| **Gene-function analysis** | Compares perturbations produced by CRISPR, ORF, or RNAi | Reveals relationships among genes, pathways, and cellular states |
| **Cross-modality integration** | Relates morphological profiles to gene expression or other assays | Enables integration of imaging, transcriptomics, and other readouts |
| **Virtual screening** | Queries profiles in public databases | Enables the identification of phenotypically similar perturbations |

!!! tip
    In many applications, the central *Cell Painting* question can be formulated as follows: "Which known profile does this perturbation resemble?"

## 4. Large datasets and phenotypic atlases

The growth of *Cell Painting* has been driven not only by the protocol itself, but also by the creation of large public datasets. These resources make it possible to compare new perturbations with broad reference collections, test computational methods, and develop profile-quality metrics.

The *JUMP Cell Painting Consortium* represents one of the most important milestones in this phase. The project generated a large collection of images and morphological profiles involving chemical and genetic perturbations produced across multiple experimental sites. In addition to its scale, its importance lies in cross-laboratory standardization, reproducibility assessment, and the development of references for profile comparison.

Other datasets, including those produced by Bray and colleagues, Recursion, and the CPJUMP1 project, have also contributed to the development of the field. At the same time, resources such as the *Cell Painting Gallery* have made images and profiles from different projects available through a public repository.

This point is important for interpretation. When using *Cell Painting*, we are not merely producing images from an isolated experiment. In many cases, we are generating profiles that can be compared with existing phenotypic atlases.

## 5. Adaptations and variants

Although *Cell Painting* was designed as a generic and untargeted assay, adaptations may be useful when there is a specific biological question or a technical limitation associated with the experimental model.

For example, in adipocytes, replacing mitochondrial staining with BODIPY to highlight lipid droplets may be more biologically informative. In viral models, an antibody against a viral protein may be incorporated into the panel. In blood cells, the protocol must be adapted for non-adherent cells. In *label-free* approaches, computational models may extract profiles directly from brightfield images or attempt to predict images corresponding to fluorescence channels.

These adaptations expand the use of the method, but they introduce an important choice: the more extensively the protocol is modified, the lower its comparability with public datasets and reference protocols may become. Adaptations should therefore be justified by the biological question and experimentally validated.

| Variant | Modification | Objective | Important consideration | Link |
|---|---|---|---|---|
| **LipocyteProfiler** | Adapts the panel to include BODIPY and represent lipid droplets | Investigate metabolic states in adipocytes and hepatocytes | Increases biological relevance for metabolic models but alters comparability with the classical protocol | [Laber et al., 2023](https://doi.org/10.1016/j.xgen.2023.100346) |
| **Viral labeling** | Adds or replaces a stain with an antibody against a viral protein | Integrate viral infection into the morphological profile | Makes the assay more targeted and requires validation of the additional stain | [Rietdijk et al., 2021](https://doi.org/10.1186/s12915-021-01086-1) |
| **Cell Painting PLUS** | Uses iterative cycles of staining, acquisition, and elution | Increase the number of structures measured and organelle specificity | Generates more information but increases experimental and analytical complexity | [von Coburg et al., 2025](https://doi.org/10.1038/s41467-025-58765-8) |
| **MitoBrilliant** | Replaces MitoTracker with another mitochondrial probe | Provide an alternative mitochondrial stain | Requires validation of concentration, spectral compatibility, and profile equivalence | [MitoBrilliant protocol](https://www.tocris.com/resources/protocols/mitobrilliant-probes/mitobrilliant-protocol) |
| **Phalloidin in another channel** | Uses phalloidin conjugated to a different fluorophore | Separate actin from the AGP channel or free an additional spectral range | Changes the channel composition and may affect comparison with reference profiles | [Alternate dyes for image-based profiling assays](https://doi.org/10.1101/2025.02.19.639058) |
| **Blood Cell Painting** | Adapts sample preparation, staining, and analysis for PBMCs and other non-adherent cells | Perform morphological profiling of immune cells | Requires adjustments to cell adhesion, fixation, segmentation, and interpretation of heterogeneous cell populations | [Blood Cell Painting](https://doi.org/10.1101/2024.05.17.594648) |
| **Label-free / brightfield** | Extracts representations directly from transmitted-light images or predicts fluorescence channels | Reduce staining, preserve live cells, and enable longitudinal analysis | Strongly depends on the training dataset, validation, and the model's ability to generalize | [Cross-Zamirski et al., 2022](https://doi.org/10.1038/s41598-022-12914-x) |

!!! warning
    Adapting *Cell Painting* is not simply a matter of replacing a dye. Each modification may alter segmentation, intensity distributions, correlations between channels, feature selection, and profile comparability.

## 6. Limitations of Cell Painting

*Cell Painting* is a powerful approach, but it should not be treated as a tool capable of automatically revealing any cellular mechanism. Its strength lies in phenotypic comparison; its limitation lies precisely in the distance between a morphological profile and its molecular cause.

The first limitation is that similar profiles do not prove identical mechanisms. Two compounds may generate similar morphologies through different pathways. Likewise, similar mechanisms may produce different profiles depending on dose, exposure time, cell line, or physiological state. The absence of similarity should therefore also be interpreted cautiously.

The second limitation is its dependence on experimental quality. Inappropriate cell density, plate-edge effects, saturation, poor focus, illumination variation, cell loss during washing, and differences between reagent lots may produce artificial signatures. In high-content datasets, technical effects may be larger than the biological effects of interest.

The third limitation is segmentation. Because *features* are extracted from segmented objects, any error in the identification of nuclei, cells, or subcellular compartments propagates into the analysis. Poor segmentation may produce profiles that appear robust but are biologically invalid.

The fourth limitation is that not every biological alteration generates a detectable morphological change. Some molecular responses are transient, subtle, or do not translate into alterations captured by the assay channels. Therefore, the relationship among the investigated time points, the dynamics of the cellular response, and the biological mechanisms of interest must be considered during experimental design and analysis.

Finally, *Cell Painting* should rarely be used in isolation to support strong mechanistic conclusions. It is excellent for generating hypotheses, comparing cellular states, conducting screens, and prioritizing conditions, but conclusions about specific mechanisms require validation through orthogonal assays.

## 7. Closing remarks

The value of *Cell Painting* does not depend solely on its fluorophore panel. It emerges from the integration of experimental design, protocol execution, image acquisition, segmentation, feature extraction, profile construction, and biological interpretation.

This chain makes it possible to compare perturbations, identify reproducible signatures, and generate hypotheses about mechanisms, cellular states, or toxicity. At the same time, it means that technical errors introduced at early stages may propagate and produce profiles that appear informative but are biologically invalid.

A good *Cell Painting* experiment should therefore be evaluated not only by the visual quality of its images, but also by replicate reproducibility, the separation of biological signals from technical effects, and the consistency of its conclusions with orthogonal assays.

### Key concepts

- *Cell Painting* is an experimental and computational chain, not merely a staining protocol.
- Images are converted into quantitative measurements of segmented cells and cellular compartments.
- Single-cell *features* are aggregated and normalized to construct representative profiles for each well or condition.
- Profiles can be compared to identify bioactivity, phenotypic similarity, recovery of cellular states, and relationships among perturbations.
- Morphological similarity generates hypotheses but does not prove mechanistic identity.
- Protocol adaptations must balance biological relevance and comparability with public references.
- Profile reliability depends on experimental design, acquisition, segmentation, quality control, and orthogonal validation.

### Exercises

1. Explain, in your own words, the difference between a conventional high-content screen and a morphological profiling assay such as *Cell Painting*.
2. Describe how the experimental and computational stages of *Cell Painting* are connected, and provide an example of how an early-stage error could affect the final profile.
3. An unknown compound produces a morphological profile similar to those of known lysosomotropic compounds. What can you conclude? What can you not yet conclude?
4. Select one of the applications presented in this lesson and describe how its scientific question could be reformulated as a comparison between phenotypic profiles.
5. Which experimental problems could generate an artificial phenotypic signature in a *Cell Painting* experiment?
6. Select one *Cell Painting* variant and discuss the balance between biological relevance and comparability with public datasets.

## Links and recommended reading

### Essential protocols

- [Original Cell Painting protocol — Bray et al., 2016](https://doi.org/10.1038/nprot.2016.105)  
  Describes the classical panel of six fluorophores acquired in five channels, as well as the experimental and computational *workflow* of the assay.

- [Optimized v3 protocol — Cimini et al., 2023](https://doi.org/10.1038/s41596-023-00840-9)  
  Updated version of the protocol, including guidance on optimization, automation, quality control, and profile evaluation.

### Public data and resources

- [Cell Painting Gallery](https://cellpainting-gallery.s3.amazonaws.com/index.html)  
  Public repository of images and profiles produced by different morphological profiling projects.

- [CPJUMP1 — three million images and profiles](https://doi.org/10.1038/s41592-024-02241-6)  
  Dataset containing matched chemical and genetic perturbations, useful for training and comparing computational methods.

- [JUMP Cell Painting Dataset](https://doi.org/10.1101/2023.03.23.534023)  
  Large reference dataset containing more than 136,000 chemical and genetic perturbations.

### Software and analysis

- [CellProfiler](https://cellprofiler.org/)  
  Open-source software for image correction, cell segmentation, and feature extraction.

- [CellProfiler Analyst](https://cellprofileranalyst.org/)  
  Tool for exploring, classifying, and inspecting phenotypes extracted from images.

- [pycytominer](https://github.com/cytomining/pycytominer)  
  Library for normalization, feature selection, and construction of morphological profiles.

### Further reading

- [Cell Painting: a decade of discovery and innovation in cellular imaging — Seal et al., 2024](https://doi.org/10.1038/s41592-024-02528-8)  
  Broad review of the evolution, applications, and challenges of *Cell Painting*.

- [Image-based profiling for drug discovery — Chandrasekaran et al., 2021](https://doi.org/10.1038/s41573-020-00117-w)  
  Perspective on image-based profiling, drug discovery, and machine learning.

- [Cell Painting Gallery: an open resource for image-based profiling — Weisbart et al., 2024](https://doi.org/10.1038/s41592-024-02399-z)  
  Describes the organization and objectives of the public *Cell Painting Gallery* repository.
