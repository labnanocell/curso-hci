# Cell Health — Concepts of viability, cytotoxicity, and cytostasis

## Lesson objectives

By the end of this lesson, you should be able to:

- understand the concept of cell health in the context of HCI/HCA;
- distinguish cell viability, cytotoxicity, cytostasis, and sublethal perturbation;
- organize cell health assays according to the OECD/GIVIMP framework;
- explain why different assays may produce different results for the same experimental condition;
- recognize technical interferences that may compromise the interpretation of cell health assays.

## 1. What does it mean to assess cell health?

In cell biology experiments, one of the first steps after exposing cells to a perturbation, such as a drug, nanoparticle, or extract, is often to evaluate how the cells are functioning. This evaluation is commonly referred to as a cell health assessment and represents one of the first layers of biological characterization in toxicology, pharmacology, and quantitative cell biology studies.

Although the term “cell viability” is widely used, it often oversimplifies a complex biological phenomenon. A cell may retain active metabolism while still showing several alterations, including changes in morphology, oxidative stress, mitochondrial damage, loss of polarity, altered proliferation, or phenotypic reorganization. Likewise, different assays may produce different responses for the same experimental condition because they measure different cellular properties.

In the context of HCI/HCA, this distinction is particularly important. Sublethal phenotypes often emerge before any evident loss of viability. This means that the absence of obvious cytotoxicity does not imply the absence of biological perturbation. Returning to the previous discussion, the image is the experimental data, and if the image captures only one dimension of the cellular state, conclusions based on that single dimension may be incomplete or misleading.

!!! info "Dimensions of the cellular state"
    Cell health assays do not measure a single property called “viability.” They measure different dimensions of the cellular state, such as metabolism, membrane integrity, growth, cell mass, mitochondrial function, lysosomal function, or positivity for cell death markers. Each dimension addresses a different question about the cellular system.

!!! tip "Before continuing"
     - Why can the term *cell viability* be an oversimplification?
     - In the context of HCA, why does the absence of cytotoxicity not guarantee the absence of biological perturbation?

## 2. Cell viability, cytotoxicity, and cytostasis

Although these terms are often used interchangeably in the literature, cell viability and cytotoxicity do not represent exactly the same biological concept. **Cell viability** generally refers to the preservation of a functional or structural property compatible with living cells, whereas **cytotoxicity** refers to damage induced by a perturbation, often associated with loss of function, integrity, or cell survival.

Cell viability assays generally evaluate the preservation of a given cellular function relative to an untreated control. In many cases, the experimental signal is normalized to the control and expressed as a percentage of relative viability. These assays use parameters such as metabolic activity, enzymatic activity, cellular content, organelle integrity or function, and cell number as indirect measures of cellular fitness. Results are often presented as concentration–response curves, in which viability tends to decrease as the concentration of the tested agent increases. This concept will be explored in greater detail in the next lesson.

Cytotoxicity assays, in contrast, aim to detect cellular damage, loss of plasma membrane integrity, release of intracellular components, or entry of molecules that are normally excluded by viable cells. These events are often interpreted as evidence of cell death or advanced cellular damage. However, in most cases, they do not directly identify the specific mechanism of cell death involved. Results are often presented as concentration–response curves, in which cytotoxicity tends to increase as the concentration of the tested agent increases. This concept will be explored in greater detail in the next lesson.

There is also a third important situation: cytostasis. In this case, cells do not necessarily die, but they reduce or stop their proliferative capacity. As a result, one may observe a decrease in cell number, total DNA content, incorporation of proliferation markers such as EdU, or cellular biomass, without necessarily observing acute cell death. Cytostasis is frequently overlooked in simplified interpretations of viability assays, but it represents a biologically relevant response in several experimental contexts, including anticancer drug development, biomaterial evaluation, and toxicology studies.

![Cell health concepts](../../../assets/img/cell-health-en.webp)

!!! warning "A reduction in signal is not the same as cell death"
    **A reduction in signal in a viability assay does not necessarily indicate cell death.** It may reflect reduced metabolic activity, interruption of cell proliferation, changes in mitochondrial function, loss of adhesion to the substrate, reduced cellular biomass, or even technical interference between the treatment and the detection method. Interpreting any decrease in signal as direct evidence of cytotoxicity is one of the most common sources of incorrect conclusions in cell biology and toxicology studies.

!!! tip "Before continuing"

    - A compound reduces the signal of an MTT assay by 40%. Is this result sufficient to conclude that cell death occurred? Why?
    - List at least three biological or technical explanations that could account for this reduction in signal without cell death.
    - What is the difference between cytotoxicity and cytostasis? How could each affect the result of a viability assay?
    - Why can two treatments produce the same reduction in viability while representing completely different biological responses?

## 3. Organizing assays according to the OECD/GIVIMP framework

The Organisation for Economic Co-operation and Development ([OECD](https://www.oecd.org/)) is an international organization that brings together member countries to develop recommendations, guidelines, and technical standards in several areas, including science, the environment, health, and chemical safety assessment. In toxicology and alternative methods, OECD documents are widely used by researchers, regulatory agencies, and industry as references for the development, validation, and application of *in vitro* methods.

One of these documents is **GIVIMP** ([*Guidance Document on Good In Vitro Method Practices*](https://www.oecd.org/en/publications/guidance-document-on-good-in-vitro-method-practices-givimp_9789264304796-en.html)), which provides recommendations for experimental planning, quality control, interpretation of results, and reliability of cell-based assays. The document organizes viability and cytotoxicity methods into categories based on the cellular property being evaluated. This approach is particularly useful for teaching because it avoids grouping all assays under the generic label of “viability” and emphasizes that different methods measure distinct aspects of cell health.

The general framework can be organized into four major groups. The first group, non-invasive structural damage, includes assessments that look for evidence of cellular alteration without necessarily destroying, fixing, or terminally staining the cells. The second group, invasive structural damage, uses dyes that enter only cells with compromised membranes or, conversely, dyes that are retained in cells with functional membranes. The third group, cell growth, includes measurements of proliferation and biomass. The fourth group, metabolism and cell function, includes assays based on metabolic activity, energetic state, and organelle function.

Each assay category addresses a different question about the state of the cell, and this distinction should be reflected both in the experimental design and in the terminology used in graphs, tables, and interpretation of results. An assay that measures metabolic activity, for example, does not answer exactly the same question as an assay that measures membrane integrity or cell proliferation.

This classification is particularly useful in HCI/HCA because many of these properties can be measured simultaneously at the single-cell level. Instead of producing only one average value per well, image analysis makes it possible to quantify and relate cell number, morphology, fluorescence intensity, subcellular localization, and positivity for specific markers within the same multiparametric approach. As a result, it becomes possible to distinguish phenomena such as cytotoxicity, cytostasis, and subtle functional changes that would often be indistinguishable in conventional assays based on a single aggregated measurement.

![OECD/GIVIMP categories](../../../assets/img/oecd-givimp-categ-en.webp)

!!! tip "Before continuing"

    - Two papers report a 50% reduction after cell treatment. One used MTT and the other used LDH. How would you interpret these numerically identical results?
    - Why can it be problematic to group all assays under the generic label of “viability”?
    - If a treatment reduces EdU incorporation but does not alter PI exclusion or the Calcein-AM signal, what biological hypothesis would you propose to explain this result?
    - In an HCI/HCA experiment, what additional information would you seek to distinguish cytotoxicity from cytostasis?

## 4. Why different assays produce different results

One of the most common sources of misinterpretation in cell health experiments is the assumption that all assays measure the same biological phenomenon. In reality, each method observes a specific cellular property, such as metabolic activity, membrane integrity, proliferation, or cell number. Because these properties may be affected differently by a treatment, it is not unusual for two assays to produce apparently contradictory results for the same experimental condition. Understanding what each assay actually measures is therefore more important than memorizing the name or protocol used.

A compound may reduce intracellular ATP levels without causing cell lysis. A nanoparticle may alter mitochondrial metabolism without changing cell number. An extract may increase the metabolic activity measured by an assay without promoting cell proliferation. Likewise, sublethal phenotypes may often be detected at earlier time points or lower concentrations than those required to produce detectable changes in conventional viability or cytotoxicity assays.

These discrepancies do not necessarily represent experimental errors. On the contrary, they are a direct consequence of the fact that each assay captures a different dimension of the cellular state. In addition, the cellular response is dynamic: changes in metabolism, proliferation, morphology, or membrane integrity may emerge at different times after exposure to a treatment. Understanding this multidimensional and temporal nature of the cellular response is essential for correctly interpreting experimental results.

This is one of the reasons why multiparametric approaches such as HCI/HCA and Cell Painting can reveal cellular responses that would go unnoticed in assays based on a single measurement.

It is also necessary to consider interference between the tested item and the readout method. Compounds that absorb or scatter light may interfere with absorbance measurements, fluorescent compounds may interfere with fluorescence-based readouts, reducing agents may directly reduce MTT or resazurin, and nanomaterials may adsorb dyes, scatter light, or interact with reagents. Returning to the discussion in [Microscopy — fundamentals of optics for HCA](../../10-microscopy-and-acquisition/microscopy-fundamentals/index.md), these technical effects add to the biological signal and may compromise data interpretation if they are not controlled.

For this reason, appropriate controls are an essential part of any cell health assay. Frequently used controls include cell-free controls, untreated-cell controls, vehicle controls such as DMSO, positive and negative controls, controls for optical or chemical interference, and cell-density controls.

Some of these controls should be included in nearly every experiment, whereas others may be performed during method validation or whenever experimental interference is suspected. In many cases, a single assessment is sufficient to determine the concentration range within which a given interference remains acceptable. The choice of assay and interpretation of results should consider not only the biological question of interest, but also the limitations and possible sources of interference associated with the method used.

!!! tip "Before continuing"

    - A fluorescent compound is tested in a resazurin assay. In what ways could it interfere with the readout? How would you experimentally test this possibility?

    - In which situations is a cell-free control essential for interpreting the results?

## 5. Closing remarks

In this lesson, we saw that cell health assessment is a multidimensional process and that terms such as “viability” and “cytotoxicity” often simplify complex biological phenomena. Viability, cytotoxicity, and cytostasis represent distinct biological situations, and confusing them can lead to incorrect interpretations.

We also discussed how the framework proposed in the OECD/GIVIMP document helps separate assays according to the type of information they provide: non-invasive structural damage, invasive structural damage, cell growth, and metabolism/cell function. This classification prevents all results from being treated generically as “viability.”

Finally, we saw that different assays may produce different results because they capture different dimensions of the cellular state, and that technical interferences may compromise interpretation if they are not controlled. In the next lesson, we will explore each assay category in detail, examining what each method actually measures and how assays can be combined orthogonally.

### Exercises

1. Explain the difference between cell viability, cytotoxicity, and cytostasis using a hypothetical example in which a treatment produces cytostasis without cytotoxicity.

2. A researcher treats cells with a compound and observes a 50% reduction in the MTT signal but no PI-positive cells. Discuss at least two possible biological interpretations that do not involve cell death.

3. Classify the following assays according to the OECD/GIVIMP categories: LDH, EdU, SRB, MTT, Neutral Red Uptake, Calcein-AM, and nuclear counting by HCI.

4. A nanomaterial is tested in a resazurin assay and produces a reduction in signal. Which experimental control would be essential to distinguish a biological effect from technical interference?

### Further reading

- OECD. [*Guidance Document on Good In Vitro Method Practices (GIVIMP)*.](https://www.oecd.org/en/publications/guidance-document-on-good-in-vitro-method-practices-givimp_9789264304796-en.html) OECD Series on Testing and Assessment No. 286, 2018.
- Riss TL, Moravec RA, Niles AL, Duellman S, Benink HA, Worzella TJ, Minor L. [*Cell Viability Assays*.](https://www.ncbi.nlm.nih.gov/books/NBK144065/) Assay Guidance Manual, 2016.
