# Cell Health — Assay categories and orthogonality

## Lesson objectives

By the end of this lesson, you should be able to:

- describe the four categories of cell health assays according to the OECD/GIVIMP framework;
- explain the biological principle of the main assays in each category;
- distinguish what each assay measures from what is commonly inferred from it;
- identify the advantages and limitations of metabolic, structural, proliferative, and image-based assays;
- understand the principle of combined live:dead assays in the context of HCI/HCA;
- discuss why orthogonal approaches increase the robustness of biological interpretation.

## 1. Non-invasive structural damage

This category includes methods that aim to identify changes in cell morphology, adhesion, distribution, or organization without destroying, fixing, or terminally labeling the cells. A classic example is morphological inspection by brightfield or phase-contrast microscopy, modalities discussed in [Microscopy — fundamentals of optics for HCA](../../10-microscopy-and-acquisition/microscopy-fundamentals/index.md).

Changes that may be observed in this category include cell rounding, cytoplasmic retraction, loss of adhesion, vacuole formation, reduced confluence, or changes in monolayer organization. These features may indicate cellular stress, cytotoxicity, or functional alterations induced by a treatment.

These observations are often qualitative when based on visual inspection, but they can be converted into quantitative metrics using HCI/HCA. In the context of HCA, this category is particularly important because morphology is no longer treated merely as a “representative image” and instead becomes a source of quantitative data, as discussed in [Microscopy — fundamentals of optics for HCA](../../10-microscopy-and-acquisition/microscopy-fundamentals/index.md).

Measurements of cell area, circularity, texture, intensity, spatial distribution, and nuclear organization can reveal sublethal alterations before conventional assays detect loss of viability. This is a distinctive advantage of HCA: morphology can function as a sensitive sensor of perturbation, even when traditional biochemical assays have not yet detected changes.

The LDH assay may also be considered operationally non-invasive because it measures enzyme released into the supernatant without necessarily destroying the remaining cells. It detects loss of plasma membrane integrity, since cells with disrupted membranes release LDH into the extracellular medium. Although useful, LDH usually provides population-level information and depends on appropriate normalization to total LDH content. It may also show high background depending on the medium, serum, cell type, and exposure time.

!!! tip "Before continuing"

    Why can cell morphology detect perturbation before traditional biochemical assays?

    What is the main limitation of the LDH assay as a measure of cytotoxicity?

## 2. Invasive structural damage: exclusion and retention dyes

Invasive structural-damage assays often use dyes that enter only cells with compromised membranes or, conversely, dyes that are retained in cells with functional membranes. This family of methods is especially important for HCI/HCA because it can generate measurements at the single-cell level.

Exclusion dyes such as trypan blue, propidium iodide (PI), ethidium bromide, and DRAQ7® are used because they do not efficiently cross intact plasma membranes. When these dyes enter the cell and label internal structures, especially nuclear DNA, the result indicates loss of membrane integrity. For PI and DRAQ7®, the most rigorous way to report results is usually “PI-positive cells (%)” or “DRAQ7-positive cells (%).” Interpretation in terms of cell death or cytotoxicity can be discussed afterward, but the figure should present what was directly measured.

!!! tip "Not all nuclear dyes behave in the same way"

    DNA-dye permeability depends on the chemical properties of the dye and the cell type being analyzed. Some nuclear dyes, such as Hoechst 33342, can cross intact plasma membranes and are therefore widely used for nuclear labeling in live cells. Other members of the Hoechst family have lower permeability and are more commonly used after cell fixation.

    Similarly, although DAPI is often described as membrane-impermeant, it may enter certain cell types or under particular experimental conditions. Therefore, nuclear labeling by DAPI should not automatically be interpreted as evidence of cell death.

DRAQ7® is particularly noteworthy because it is compatible with real-time acquisition and live-cell experiments. Because the dye does not enter healthy cells, it can remain continuously present in the medium, allowing the dynamics of membrane loss to be monitored over time. In HCA, DRAQ7® is especially useful because it provides a spatial, cell-by-cell readout and can be multiplexed with other phenotypic markers.

By contrast, dyes such as fluorescein diacetate, Calcein-AM, and Calcein Violet depend on cell entry, esterase-mediated conversion, and intracellular retention. Therefore, they report a combination of enzymatic activity, membrane integrity, and the ability to retain the fluorescent product. Calcein Violet follows a principle similar to Calcein-AM but emits in a different spectral range, allowing multiplexing with other fluorophores.

These dyes are often combined with cell-death markers. For example, Hoechst can provide total nuclear count, PI can indicate cells with compromised membranes, and Calcein-AM can indicate cells with esterase activity and intracellular retention. This combination is highly suitable for HCI/HCA because it transforms a simple microscopy acquisition into a multiparametric platform for cell analysis.

!!! tip "Correct terminology"

    In image-based assays, name the metric according to what was actually measured: “PI-positive cells (%),” “Calcein-positive cells (%),” or “cell count (% of control).” Terms such as “cell death,” “cytotoxicity,” or “viability” should be used as biological interpretations rather than automatic substitutes for the experimental measurement.

!!! tip "Before continuing"

    - Why are PI and DRAQ7® called exclusion dyes? Which cellular property do they exploit to generate signal?

    - What does Calcein-AM measure directly? Which biological steps must occur for a cell to become Calcein-positive?

    - Can a cell be Calcein-positive and still not be fully healthy? Explain.

    - Why is “PI-positive cells (%)” a more rigorous description of the experimental result than “cell death (%)”?

## 3. Markers of programmed cell death

The field of cell death is one of the most dynamic areas of modern cell biology. For many years, discussion was dominated by the distinction between apoptosis and necrosis. Over recent decades, however, several additional mechanisms have been described, including necroptosis, pyroptosis, ferroptosis, autophagy-dependent cell death, cuproptosis, and other regulated processes. As a result, the classification of cell death continues to evolve as new mechanisms are discovered and better understood.

In this context, it is important to understand that programmed-cell-death markers should not be viewed as definitive tests for a particular mechanism. Instead, they are tools that provide evidence about specific biological processes. Commonly used markers include caspase activation, phosphatidylserine exposure detected by Annexin V, DNA fragmentation measured by TUNEL, nuclear changes associated with chromatin condensation, and proteins associated with specific cell-death pathways.

These markers add an important mechanistic dimension to studies of cytotoxicity and cell health. In HCI/HCA, they can be combined with morphological measurements, cell counts, membrane-integrity measurements, and other phenotypic parameters to build a more comprehensive view of the cellular response. This integration is particularly valuable because different mechanisms of death may share similar markers, while the same marker may appear in distinct biological processes.

For this reason, interpretation of cell-death markers requires caution. Many events associated with cell death are temporal and transient and may occur only within specific experimental windows. In addition, some markers may be detected in cells that have not yet completed the death process or even under conditions of reversible cellular stress. Annexin V, for example, detects phosphatidylserine exposure, but Annexin V positivity alone is not sufficient to conclude that a cell is undergoing apoptosis or to determine its final fate, and this feature is shared by several mechanisms of death.

There is now broad consensus in the field that mechanistic characterization of cell death should not be based on a single marker. Recommendations from the _Nomenclature Committee on Cell Death_ (NCCD) emphasize the importance of using multiple independent lines of evidence, including morphological changes, molecular markers, functional measurements, and, when appropriate, pharmacological or genetic approaches. In other words, confidence in the interpretation increases when different observations converge on the same biological conclusion.

![The mechanisms shown represent some of the regulated cell-death programs most widely investigated in contemporary scientific literature.](../../../assets/img/cell-death-en.webp)

For the purposes of this course, the most important point is that markers of programmed cell death provide an additional layer of mechanistic information. They complement broader measures of cellular damage, such as PI, DRAQ7®, LDH, or cell loss, but they should rarely be interpreted in isolation. In real experiments, the relevant question is generally not “which marker should I use?” but rather “which independent lines of evidence converge to support my biological hypothesis?”

!!! info "Further reading"

    The field of cell death evolves rapidly, and marker selection should be based on current specialized literature. Before designing mechanistic experiments, it is advisable to consult reference documents from the Nomenclature Committee on Cell Death (NCCD), which discuss definitions, limitations, and good practices for interpreting the main markers used in the field.

    Recommended reading:

    - Galluzzi, L., Aaronson, S., Abrams, J. et al. [Guidelines for the use and interpretation of assays for monitoring cell death in higher eukaryotes.](https://doi.org/10.1038/cdd.2009.44) Cell Death Differ 16, 1093–1107 (2009).
    - Galluzzi, L., Vitale, I., Aaronson, S. et al. [Molecular mechanisms of cell death: recommendations of the Nomenclature Committee on Cell Death 2018.](https://doi.org/10.1038/s41418-017-0012-4) Cell Death Differ 25, 486–541 (2018).
    - Vitale, I., Pietrocola, F., Guilbaud, E. et al. [Apoptotic cell death in disease—Current understanding of the NCCD 2023.](https://doi.org/10.1038/s41418-023-01153-w) Cell Death Differ 30, 1097–1154 (2023).

!!! tip "Before continuing"

    - Why is activation of a single marker rarely sufficient to define a cell-death mechanism?

    - What does it mean to say that cell-death characterization should be based on converging evidence?

    - If a paper claims to have demonstrated apoptosis using only Annexin V, which questions would you ask before accepting that conclusion?

## 4. Cell growth, proliferation, and biomass

The category of **cell growth, proliferation, and biomass** is fundamental because many treatments reduce the final number of cells not by inducing rapid cell death, but by slowing or stopping proliferation. This scenario corresponds to cytostasis, a concept discussed in [Concepts of viability, cytotoxicity, and cytostasis](../cell-health-fundamentals/index.md).

In HCI/HCA, cell counting is usually performed through nuclear segmentation using markers such as Hoechst 33342 or DAPI. The number of cells per well can be used as a measure of cell density and, when compared with the control, can provide information about population growth or cell loss. Returning to the discussion in [Microscopy — fundamentals of optics for HCA](../../10-microscopy-and-acquisition/microscopy-fundamentals/index.md), it is important to remember that the experimental unit remains the well. Individual cells are observations within that experimental unit and are not independent replicates.

Nucleoside-incorporation assays such as BrdU and EdU serve as proxies for DNA synthesis and allow estimation of the fraction of proliferating cells. They are particularly useful when the question involves the cell cycle, population expansion, or cytostasis. EdU has an operational advantage over BrdU because it does not require DNA denaturation for detection, simplifying the protocol and better preserving cell morphology.

It is important to remember that EdU or BrdU incorporation does not exclusively reflect cell proliferation. Under certain conditions, labeled nucleosides may also be incorporated during DNA-repair processes. Although this phenomenon generally represents a small fraction of the total signal, it should be considered when interpreting experiments involving genotoxic agents or conditions associated with DNA damage.

Another way to estimate growth is by measuring cellular components proportional to total cell mass. Sulforhodamine B (SRB), crystal violet, total protein content, and DNA content are examples of this approach. These assays can be simple and robust, but they usually reflect population biomass rather than the exact number of living cells.

Even MTT can be used to infer cell growth in specific experimental designs. In this case, the signal is measured immediately before exposure to the treatment (time zero) and again after the experimental period. Comparing these two time points allows relative changes in the cell population to be evaluated over time. An increase in signal generally suggests population growth, maintenance of the signal may indicate cytostasis, and a reduction may reflect cell loss or cytotoxicity. This example illustrates how experimental design can substantially change the information obtained from the same assay.

As always, interpretation of this category requires caution. Reduced cell growth is often a sensitive indicator of cellular impairment, but it is not equivalent to cell death. A culture may contain fewer cells because cell death occurred, because proliferation was reduced, because cells lost adhesion to the culture surface, or even because cells increased in size without dividing.

Similarly, metabolic changes may alter tetrazolium reduction without necessarily reflecting proportional changes in cell number. Each of these situations has distinct biological implications and may require complementary approaches for correct interpretation.

!!! tip "Before continuing"

    - Why is a reduction in cell count not synonymous with cytotoxicity?

    - What is the main advantage of EdU over BrdU in HCI/HCA experiments?

    - A treatment reduces cell count by 50% but does not change the percentage of PI-positive cells. Which biological hypotheses could explain this result?

## 5. Metabolism and cell function

The fourth category includes assays based on metabolism and cell function. These methods are very popular because they are fast, scalable, and compatible with multiwell plates. However, they generally measure cell function rather than cell death directly.

Tetrazolium assays such as MTT, MTS, XTT, WST-1, and WST-8 are based on the reduction of tetrazolium salts by metabolically active cells, generating products that can be detected by absorbance. The MTT assay, described by Mosmann in 1983, uses a tetrazolium salt that is reduced by NAD(P)H-dependent cellular reducing systems, generating insoluble formazan crystals. Although mitochondrial activity contributes substantially to this process, MTT reduction is not exclusively mitochondrial. Several derivatives were later developed—MTS, XTT, WST-1, and WST-8—to overcome limitations of the original assay, such as by generating more soluble and operationally simpler products. Resazurin, commercially known as Alamar Blue in some formulations, follows a similar logic: it is reduced to resorufin by metabolically active cells, generating a fluorescent product.

!!! warning "MTT measures metabolism, not viability directly"

    A reduction in MTT signal does not necessarily indicate cell death. The assay measures the reducing/metabolic capacity of the cellular system. Metabolic alterations may occur independently of cell death, especially in experiments involving mitochondria, oxidative stress, or metabolic reprogramming. In addition, changes in the cell cycle can modify the signal observed in tetrazolium-based assays because cells in different proliferative states have distinct energetic demands and metabolic activities.

Assays based on mitochondrial membrane potential, such as TMRE, JC-1, or potential-dependent TMRM, assess a specific dimension of mitochondrial function. TMRE (tetramethylrhodamine ethyl ester) is a cationic dye that accumulates in polarized mitochondria. When mitochondrial membrane potential is lost, TMRE accumulation decreases. This makes the assay particularly useful for detecting early mitochondrial dysfunction, often before irreversible cell-death events. In HCA, TMRE is especially valuable because it provides subcellular functional information and can be combined with other phenotypic measurements. However, loss of TMRE should not be interpreted as direct evidence of cell death because mitochondrial changes may be reversible.

!!! warning "Interpreting MitoTracker"

    Dyes from the MitoTracker family are widely used to visualize and quantify mitochondria, but interpreting their signal requires caution. Depending on the variant used, the signal may reflect mitochondrial mass, membrane potential, dye retention, or a combination of these factors.

    For this reason, increases or decreases in fluorescence intensity should not automatically be interpreted as increased or decreased mitochondrial activity. Whenever possible, MitoTracker-based measurements should be complemented with specific functional assays such as TMRE/TMRM, oxygen consumption, ATP production, or other markers of mitochondrial function.

Luminescent ATP assays measure total ATP content in a cell population through the luciferin–luciferase reaction. Because ATP is rapidly lost in metabolically compromised cells, this assay is highly sensitive and has a broad dynamic range, which makes it widely used in high-throughput screening. However, it remains a population-level measure of energetic state rather than a direct measure of cell death. Transient metabolic alterations may reduce ATP without causing irreversible cytotoxicity. Reductions in ATP content may also occur in situations of reduced proliferation or metabolic reprogramming without necessarily indicating irreversible cell death.

Neutral Red Uptake (NRU) is an organelle-function assay based on the uptake and accumulation of Neutral Red dye in the lysosomes of viable cells. Metabolically active cells with preserved lysosomal function accumulate the dye, which can then be extracted and measured spectrophotometrically. A major advantage of NRU is that it is relatively simple, inexpensive, and has a long history of use in standardized protocols, including toxicological assessment.

!!! warning "NRU and lysosomal interference"

    Neutral Red Uptake measures lysosomal uptake and accumulation in functional cells. If the treatment directly affects lysosomes, endocytosis, vesicular acidification, or intracellular trafficking, a decrease in signal may reflect lysosomal alteration rather than global loss of viability. This limitation is especially relevant for nanomaterials, particles, and compounds that interact with endosomes and lysosomes. In many nanotoxicology studies, lysosomal alterations may be part of the mechanism of action, making NRU informative but also potentially susceptible to ambiguous interpretation.

!!! tip "Before continuing"

    - Why should MTT and ATP not be called “cell-death assays”?

    - A nanomaterial reduces NRU signal. Give one interpretation that does not involve global loss of viability.

    - Why should loss of TMRE signal not be interpreted as irreversible cell death?

    - A treatment reduces ATP and TMRE but does not change cell count or the percentage of PI-positive cells. Which biological hypotheses would you propose to explain this result?

## 6. Orthogonal assays: combining dimensions

Assay selection should begin with the biological question and the expected type of perturbation. If the goal is to assess membrane damage, PI, DRAQ7®, or LDH are more directly informative. If the goal is to assess metabolic function or energetic state, MTT, resazurin, ATP, or TMRE may be more appropriate. If the goal is to detect cytostasis or altered growth, cell counting, EdU, or DNA content are more informative.

A single measurement is rarely sufficient to conclude robustly that a treatment is cytotoxic. Combining orthogonal measurements increases confidence because it reduces the likelihood that the result is explained solely by technical interference or by one isolated dimension of cell physiology. When methods that evaluate different properties point in the same biological direction, the interpretation becomes substantially more robust.

A strong strategy is to combine a population-level measurement with an image-based measurement. For example, MTT or resazurin can be combined with nuclear counting and PI. Alternatively, ATP can be combined with DRAQ7®, or TMRE can be combined with cell count and morphology. These approaches help identify situations in which a specific assay is affected by technical interference or unexpected biological responses.

In the context of HCI/HCA, a particularly informative combination is the integration of cell count, PI-positive cells, Calcein-AM intensity or positivity, and high-content analysis. This strategy allows reduced metabolic function, loss of membrane integrity, reduced cell number, and phenotypic remodeling to be distinguished—four dimensions that are often conflated when a single assay is used.

!!! tip "Before continuing"

    - Why is a single “viability” measurement rarely sufficient to conclude that a treatment is cytotoxic?

    - Propose an orthogonal combination of assays to determine whether a nanomaterial is cytotoxic, explaining what each measurement contributes to the interpretation.

    - If MTT decreases but PI and nuclear count remain unchanged, which biological or technical hypotheses could explain the result?

## 7. Closing remarks

In this lesson, we explored the four categories of cell health assays according to the OECD/GIVIMP framework: non-invasive structural alterations, invasive structural alterations, cell growth, and metabolism/cell function. For each category, we discussed widely used assays, the cellular properties they measure, and the limitations associated with their interpretation.

We saw that metabolic assays such as MTT and resazurin measure metabolic activity and reducing capacity rather than cell death directly; that exclusion dyes such as PI and DRAQ7® provide information about membrane permeability but do not independently define the mechanism or fate of the cell; and that markers associated with cell-death mechanisms, such as Annexin V, provide complementary mechanistic information but should rarely be interpreted in isolation.

Throughout the lesson, we reinforced a central idea: *the experimental measurement is not synonymous with the biological interpretation*. Understanding exactly what each assay measures is essential to avoid simplistic conclusions and to select appropriate experimental strategies. We also discussed how combining orthogonal measurements substantially strengthens conclusions by integrating different dimensions of the cellular response.

In the next lesson, we will address how to transform the experimental signals from these assays into quantitative metrics: how to normalize data, calculate viability and cytotoxicity, select appropriate controls, and construct figures with correct terminology and interpretation.

### Exercises

1. Compare the biological principles of TMRE, Neutral Red Uptake, and DRAQ7®. What does each measure, and why may they produce different results for the same treatment?
2. Explain why a reduction in MTT signal does not necessarily imply cell death, citing at least two alternative biological mechanisms.
3. Describe how a combined live:dead assay using Hoechst, PI, and Calcein-AM can produce multiple metrics from the same image. Which metrics can be derived?
4. Discuss the advantages of combining metabolic assays with image-based assays when assessing cytotoxicity.
5. Classify the following assays according to the OECD/GIVIMP categories: LDH, EdU, SRB, MTT, Neutral Red Uptake, Calcein-AM, nuclear counting by HCI, TMRE, and Annexin V.
6. A researcher observes that a compound reduces MTT signal but does not increase the proportion of PI-positive cells. Propose a biological interpretation and suggest complementary assays to test it.
7. A paper concludes that a compound is cytotoxic because it reduced MTT signal by 50%. Which additional information would you seek before accepting that conclusion?

### Further reading

- OECD. [*Guidance Document on Good In Vitro Method Practices (GIVIMP)*.](https://www.oecd.org/en/publications/guidance-document-on-good-in-vitro-method-practices-givimp_9789264304796-en.html) OECD Series on Testing and Assessment No. 286, 2018.
- Riss TL, Moravec RA, Niles AL, Duellman S, Benink HA, Worzella TJ, Minor L. [*Cell Viability Assays*.](https://www.ncbi.nlm.nih.gov/books/NBK144065/) Assay Guidance Manual, 2016.
- Mosmann T. [Rapid colorimetric assay for cellular growth and survival: application to proliferation and cytotoxicity assays](https://doi.org/10.1016/0022-1759\(83\)90303-4). *Journal of Immunological Methods* 65(1–2):55–63, 1983.
- Borenfreund E, Puerner JA. [Toxicity determined in vitro by morphological alterations and neutral red absorption.](https://doi.org/10.1016/0378-4274\(85\)90046-3) *Toxicology Letters* 24(2):119–124, 1985.
- Vitale, I., Pietrocola, F., Guilbaud, E. et al. [Apoptotic cell death in disease—Current understanding of the NCCD 2023.](https://doi.org/10.1038/s41418-023-01153-w) *Cell Death Differ* **30**, 1097–1154 (2023).
