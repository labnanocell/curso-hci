# Cell Health — Metrics, calculations, and graphical presentation

## Lesson objectives

By the end of this lesson, you should be able to:

- distinguish experimental measurement, mathematical processing, and biological interpretation;
- organize raw data from viability and cytotoxicity assays before analysis;
- calculate viability and cytotoxicity metrics using appropriate blank subtraction and normalization;
- understand why Y-axis terminology should reflect exactly what was measured;
- justify the use of a logarithmic concentration scale on the X-axis;
- present cell health graphs using precise terminology and panel organization.

## 1. Before calculating: what was actually measured?

The first step before calculating any metric is to identify which experimental variable was directly measured by the assay. This may seem obvious, but it is one of the main sources of confusion when interpreting results. In many papers, the experimental measurement, mathematical processing, and biological interpretation are condensed into a single figure or expression, making it difficult to distinguish what was actually observed from what was inferred.

In MTT assays, the experimental measurement is the absorbance associated with tetrazolium reduction. After blank subtraction and normalization, this signal can be expressed as a percentage of the control. From this processed value, the researcher may then infer changes in cell health. Similarly, ATP assays measure luminescence, whereas DRAQ7® or PI assays measure the number or proportion of cells positive for a membrane-impermeant marker. In all cases, biological interpretation arises only after these experimental signals have been processed and placed in context.

This distinction can be organized into three layers. The first is the **experimental measurement**: the raw signal recorded by the instrument, such as absorbance, fluorescence, luminescence, or object count. The second is **mathematical processing**: blank subtraction, normalization, and percentage calculation. The third is **biological interpretation**: the meaning assigned to the processed result. Confusing these layers is one of the most common sources of overinterpretation in cell health assays.

!!! warning "Triad: measurement, processing, interpretation"
    Always distinguish:

    - **Experimental measurement**: what the instrument recorded, such as absorbance, PI-positive cell count, or luminescence.
    - **Mathematical processing**: normalization, blank subtraction, and percentage calculation.
    - **Biological interpretation**: the biological meaning assigned to the result, such as viability, cytotoxicity, or cell death.

    The graph should show the measurement. The results should describe the trend. The discussion should interpret the biological meaning.

!!! tip "Before continuing"

    In an MTT assay, what is the experimental measurement, what is the processing step, and what is the biological interpretation?

    Why is it problematic to title a graph “Cell death (%)” when the assay measures PI positivity?

## 2. Experimental unit and data organization

Before calculating means, normalizing data, or fitting curves, it is necessary to define the experimental unit. In plate-based assays, the experimental unit is usually the well, not the individual cell and not the imaging field. Returning to the discussion in [Microscopy — fundamentals of optics for HCA](../../10-microscopy-and-acquisition/microscopy-fundamentals/index.md), imaging fields within the same well are technical subsamples. They help estimate the value of that well more accurately but do not replace independent replicates.

Therefore, for statistical analysis and curve fitting, imaging fields should ideally be aggregated at the well level first. This distinction is especially important in HCI/HCA. An experiment may generate thousands of segmented cells, but this does not mean that there are thousands of independent biological replicates. Statistical inference must respect the experimental design.

The first analysis table should contain, at a minimum, the information needed to trace each experimental measurement. This includes plate, experimental day, well, treatment, concentration, exposure time, biological replicate, and measured signal. For plate-reader assays, the signal may be absorbance, fluorescence, or luminescence. For image-based assays, the signal may be total nuclear count, number of PI-positive cells, number of Calcein-positive cells, or mean intensity per cell.

This organization prevents a common problem: beginning the analysis directly from already normalized values without preserving the original measurement. Raw data are essential for identifying acquisition errors, plate problems, technical effects, and inconsistencies between replicates.

!!! tip "Before continuing"

    Why are imaging fields within the same well not independent biological replicates?

    Why is it important to preserve raw data before normalization?

## 3. Blank subtraction and normalization

In assays based on absorbance, fluorescence, or luminescence, blank subtraction is usually required. The blank represents the contribution of all components of the experimental system to the readout except the biological phenomenon being quantified. Depending on the assay, this may include signal from the culture medium, the plate, detection reagents, or even the tested compound itself. Subtracting this value helps ensure that the result primarily reflects the biological response of interest rather than baseline contributions from the measurement system.

After blank subtraction, the response can be normalized to the untreated control. This step transforms the signal into a percentage of the control, facilitating comparisons across plates, independent experiments, and acquisition days. In many cell health assays, such as MTT, MTS, XTT, WST-1, resazurin, or ATP, normalization uses the same mathematical operation:

$$
\text{Normalized response (% control)} = \frac{\text{treated signal} - \text{blank signal}}{\text{control signal} - \text{blank signal}} \times 100
$$

It is important to note that the formula is identical for all these assays. What changes is not the calculation, but the biological meaning of the result. In other words, the same mathematical transformation can be applied to absorbance, fluorescence, or luminescence, but each measurement still reflects a different cellular property.

In MTT assays, the result represents relative metabolic activity. In resazurin assays, it represents relative reducing capacity. In ATP assays, it represents relative energetic content. Because interpretation depends on the variable originally measured, the Y-axis label should reflect the assay-specific metric. For this reason, labels such as “Metabolic activity (% control)” for MTT or “ATP levels (% control)” for ATP are generally more informative than using “Cell viability (% control)” indiscriminately.

!!! tip "Before continuing"

    - When is blank subtraction necessary before normalization?
    - If two different assays, such as MTT and ATP, are normalized in the same way, why should their Y-axes have different names?
    - What remains the same and what changes when the same normalization formula is applied to an ATP assay and an MTT assay?

## 4. Viability based on cell counting

In image-based assays, viability may be calculated from cell counts. A common example is the combined Hoechst, PI, and Calcein-AM assay discussed in [Assay categories and orthogonality](../cell-health-orthogonal-assays/index.md). In this case, Hoechst labels total nuclei, PI labels cells with loss of membrane integrity, and Calcein-AM can indicate cells with esterase activity and intracellular dye retention.

A viability metric may be derived from the number of viable cells per well. One common calculation is:

$$
\text{viable cells} = \text{Hoechst-positive nuclei} - \text{PI-positive nuclei}
$$

Relative viability can then be calculated as:

$$
\text{Viable cell count (% control)} = \frac{\text{treated viable cells}}{\text{control viable cells}} \times 100
$$

“Viable cell count (% control)” is more precise than simply “cell viability” because it makes clear that the metric is derived from image-based cell counting. It also distinguishes this result from assays based on total intensity, such as MTT or total Calcein fluorescence.

It is important to note that this metric does not report only the fraction of viable cells within a well; it also incorporates changes in the total number of cells present. Consequently, reductions in this measure may reflect cell death, cytostasis, loss of adhesion, or combinations of these phenomena.

One advantage of image-based analysis is that the same acquisition can generate multiple metrics simultaneously. From a single Hoechst/PI/Calcein-AM assay, it is possible to calculate total cell number, PI-positive cells, Calcein-positive cells, viable cells, fraction of dead cells, and several morphological parameters.

!!! tip "Before continuing"

    Why is “Viable cell count (% control)” more precise than “Cell viability (% control)” for image-based assays?

    A researcher calculates viability as (total nuclei − PI-positive nuclei) / (control total nuclei − control PI-positive nuclei) × 100. What does this metric represent biologically?

## 5. Quantifying marker-positive cells

For assays such as PI or DRAQ7®, the most direct metric is generally the percentage of positive cells. In this case, the calculation should reflect exactly what was measured.

$$
\text{PI-positive cells (%)} = \frac{\text{PI-positive nuclei}}{\text{Hoechst-positive nuclei}} \times 100
$$

This metric describes the experimental observation: the fraction of cells positive for PI staining. In this case, Hoechst provides the denominator corresponding to the total number of cells detected in the analyzed field or well. In the results section, this is the most rigorous way to present the data. Biological interpretation can follow later, particularly in the discussion. An increase in PI-positive cells is consistent with loss of plasma membrane integrity and increased cytotoxicity, but PI alone does not distinguish specific cell-death mechanisms.

!!! tip "Describe the measurement; interpret later"

    In graphs and results, preferably describe the experimental measurement: “PI-positive cells (%),” “DRAQ7-positive cells (%),” or “Annexin V-positive cells (%).”

    Biological interpretation can be presented afterward. For example, an increase in PI-positive cells may be interpreted as increased membrane permeability consistent with cellular damage or cytotoxicity.

    Separating experimental observation from biological interpretation increases scientific rigor and reduces the risk of overinterpretation.

!!! tip "Before continuing"

    - Why is “PI-positive cells (%)” a more rigorous description than “Cell death (%)”?

    - An increase from 5% to 40% PI-positive cells is observed. How would you describe this result without using the term “cell death”?

    - What additional information would be needed to support the interpretation that the increase in PI-positive cells corresponds to increased cytotoxicity?

## 6. Concentration on the X-axis: logarithmic scale

Concentration–response curves should present concentration on a logarithmic X-axis. This facilitates visualization of responses occurring across different orders of magnitude and improves interpretation of the transition region of the curve.

A logarithmic scale is particularly important when concentrations are designed as serial dilutions, such as 0.1, 1, 10, and 100 µg/mL. In these cases, the visual spacing between points should reflect the ratio between concentrations rather than the absolute difference. Many biological responses depend on proportional changes in concentration rather than only on absolute differences. For example, increasing a concentration from 0.1 to 1 µg/mL represents the same relative change as increasing it from 10 to 100 µg/mL: both are tenfold increases. A logarithmic scale preserves this proportional relationship, making concentration–response curves more informative.

Without a logarithmic scale, low-concentration points become compressed near the origin, whereas high-concentration points dominate the graph, distorting perception of the dose–response relationship. However, a concentration of zero cannot be represented on a logarithmic scale. The untreated control may be shown in the legend with its standard deviation or as a separate point labeled “Control,” “Untreated,” or “0” on a separate categorical axis, but never as log(0).

!!! warning "Never use log(0)"

    A concentration of zero is undefined on a logarithmic scale. The untreated control should be presented separately, for example in the legend, in a complementary graph, or as a distinct category such as “Control” or “Untreated,” but never as log(0) on the X-axis.

!!! tip "Before continuing"

    - Why should serial dilutions such as 0.1, 1, 10, and 100 be shown on a logarithmic scale?

    - How would you represent the untreated control in a graph with a logarithmic X-axis?

    - In a concentration series of 0.1, 1, 10, and 100 µg/mL, which pairs of points represent the same proportional change in concentration?

## 7. How to present cell health graphs

One of the most important practices in data presentation is ensuring that the Y-axis describes exactly what was measured. This principle may seem simple, but it is often violated in the literature. Metabolic assays are frequently presented as “cell viability,” whereas measures of membrane permeability are sometimes labeled directly as “cell death.”

The correct Y-axis terminology should reflect the calculated metric. For MTT, labels such as “Metabolic activity (% control)” or “Relative metabolic activity (% control)” are generally more informative than “Cell viability (% control)” because they explicitly state the nature of the experimental measurement. For ATP, “ATP levels (% control)” is more precise. For PI, “PI-positive cells (%)” is preferable. For image-based counting, “Viable cell count (% control)” is a clear option. The table below summarizes examples of Y-axis labels that more directly reflect the calculated metric in different cell health assays.

| **Assay** | **Experimental measurement** | **Recommended Y-axis label** |
| --- | --- | --- |
| MTT and other tetrazolium salts | Absorbance associated with tetrazolium reduction | Metabolic activity (% control) |
| Luminescent ATP | Luminescence associated with ATP | ATP levels (% control) |
| PI | PI-positive cells | PI-positive cells (%) |
| DRAQ7® | DRAQ7-positive cells | DRAQ7-positive cells (%) |
| Annexin V | Annexin V-positive cells | Annexin V-positive cells (%) |
| EdU | EdU-positive cells | EdU-positive cells (%) |
| Image-based cell counting | Number of viable cells per well | Viable cell count (% control) |
| Calcein-AM | Calcein-positive cells or Calcein-AM intensity | Calcein-positive cells (%) or Calcein-AM intensity (% control) |
| TMRE | TMRE intensity | Relative mitochondrial membrane potential (% control) |
| Neutral Red Uptake | Absorbance from accumulated Neutral Red | Neutral Red Uptake (% control) |

A useful strategy is to visually separate metabolic and cytotoxicity assays into different panels. For example, Panel A may show MTT with the Y-axis “Metabolic activity (% control),” Panel B ATP with “ATP levels (% control),” Panel C PI with “PI-positive cells (%),” and Panel D the live:dead assay with “Viable cell count (% control).” This organization helps the reader immediately understand which biological dimensions are being evaluated.

Line graphs or concentration–response curves are generally more appropriate than bar graphs when the objective is to show concentration dependence. Bar graphs can obscure the trend and make comparisons between groups less intuitive. In HCA experiments, it is often useful to also present absolute cell number, number of segmented objects, cellular distribution, and variability between wells, especially when changes in cell density may influence subsequent phenotypic analyses. Curves also make it easier to visualize response-transition regions and are essential for mathematical fitting used to estimate parameters such as IC50, EC50, or CC50.

In HCA experiments, it is often useful to present not only the primary metric but also contextual information such as total cell number, cell-size distribution, variability between wells, or percentage of cells positive for specific markers. These data support interpretation and help identify experimental artifacts or secondary treatment effects.

!!! info "Practical rule"

    The Y-axis should describe the calculated metric rather than only the desired biological interpretation.

    Always ask:

    1. What was measured?
    2. How were the data processed?
    3. Does the Y-axis label reflect that metric?

!!! tip "Before continuing"

    Give one example of a problematic Y-axis label and explain why it is problematic.

    Why are concentration–response curves preferable to bar graphs for showing concentration dependence?

## 8. Closing remarks

In this lesson, we saw that transforming an experimental signal into a biologically interpretable metric involves a sequence of conceptual and mathematical steps. Before calculating any value, it is necessary to understand what the assay actually measured. Next, processing steps such as blank subtraction, definition of the experimental unit, and normalization to appropriate controls must be considered. Only after these steps can biological meaning be assigned to the results.

Throughout the lesson, we reinforced the distinction between experimental measurement, mathematical processing, and biological interpretation. We saw that the same mathematical operation can be applied to completely different assays, but the biological meaning of the result continues to depend on the variable originally measured. For this reason, the terminology used in axes, tables, and results should reflect the calculated metric precisely and transparently.

We also discussed good practices for graphical presentation of cell health data, including the use of logarithmic scales for concentration–response curves, appropriate Y-axis terminology, and organization of different biological dimensions into separate panels. These decisions are not merely aesthetic: **they communicate how the experiment was performed and help prevent incorrect interpretations**.

In the next lesson, we will address concentration–response curve fitting, calculation and interpretation of parameters such as IC50, EC50, and CC50, and how to present and interpret these results rigorously while maintaining the distinction between experimental observation and biological inference.

### Exercises

1. Explain why “PI-positive cells (%)” is a more rigorous description than “Cell death (%).”
2. Discuss the advantages and limitations of normalization to the untreated control.
3. Compare “Metabolic activity (% control)” and “Viable cell count (% control).” Which cellular properties does each metric represent?
4. Explain why luminescent ATP assays do not directly measure cell viability and propose a more precise Y-axis label.
5. Propose a figure layout containing MTT, PI, and TMRE for a toxicology experiment, indicating the Y-axis label for each panel.
6. Two assays, MTT and ATP, were normalized using exactly the same mathematical formula. Explain why their Y-axes should not necessarily have the same name.
7. A graph labels the Y-axis as “Cell death (%),” but the data were obtained by MTT. Which conceptual problems can this choice create?
8. A concentration series of 0.1, 1, 10, and 100 µg/mL was shown on a linear scale. Explain why this choice may make the concentration–response curve more difficult to interpret.

### Further reading

- Riss TL, Moravec RA, Niles AL, Duellman S, Benink HA, Worzella TJ, Minor L. [*Cell Viability Assays*.](https://www.ncbi.nlm.nih.gov/books/NBK144065/) Assay Guidance Manual, 2016.
- GraphPad Prism — [How exactly are IC50 and EC50 defined?](https://www.graphpad.com/support/faq/50-of-what-how-exactly-are-ic50-and-ec50-defined/)
- Schmied, C., Nelson, M.S., Avilov, S. et al. [Community-developed checklists for publishing images and image analyses.](https://doi.org/10.1038/s41592-023-01987-9) *Nature Methods* **21**, 170–181 (2024).
