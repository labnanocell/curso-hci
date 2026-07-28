# Cell Health — IC50, dose–response curves, and results writing

## Lesson objectives

By the end of this lesson, you should be able to:

- understand the four-parameter logistic model used to fit dose–response curves;
- define IC50 and explain why its calculation depends on curve coverage;
- decide when to report an IC50 value, “> maximum tested concentration,” or “ND”;
- present dose–response graphs using precise terminology;
- write results and discussion sections that distinguish experimental measurement from biological interpretation;
- apply a practical framework for writing results from cell health assays.

## 1. Curve fitting and the four-parameter logistic model

IC50 represents the concentration associated with a 50% response, but this definition depends on how 100% and 0% were defined. In viability assays, we generally seek the concentration that reduces the response to 50% of the control. IC50 is therefore a parameter derived from mathematical fitting rather than a direct experimental measurement.

The most common fit is a four-parameter logistic curve, also called a variable-slope dose–response model. This model estimates four parameters: the upper plateau (maximum response, usually close to 100% of the control), the lower plateau (minimum response, which may or may not reach 0%), the curve slope (Hill slope, which describes the rate of transition), and the IC50 (the concentration at which the response reaches 50% between the two plateaus).

IC50 calculation is reliable only when the data adequately describe the curve. Ideally, there should be points near the upper plateau, points in the transition region, and points near the lower plateau. When the data cover only part of the curve, the IC50 becomes highly dependent on extrapolation, and its numerical value may appear misleadingly precise.

![Four-parameter logistic curve](../../../assets/img/curve-log-en.webp)

Unlike absorbance, fluorescence, or cell count, IC50 is not a direct experimental observation. It is a parameter estimated by fitting a mathematical curve to the available experimental data. Like any estimate, IC50 is subject to experimental variability and uncertainty in the fit. For this reason, a concentration corresponding to the IC50 will not necessarily produce exactly a 50% response in subsequent experiments, especially when experimental conditions differ between estimation and validation.

!!! tip "Before continuing"

    - Why can two experiments with the same raw data produce different IC50 values if different models are used?

    - Why does a curve that does not clearly reach both upper and lower plateaus generate less reliable IC50 estimates?

## 2. When can an IC50 be interpreted with confidence?

The decision to report a numerical IC50 value should be based on data quality, not on the convenience of presenting a number. Three main scenarios guide this decision.

In the first scenario, the response decreases from approximately 100% to below 50% within the tested concentration range. In this case, the IC50 lies within the experimental interval and may be reported numerically, provided that the fit is appropriate and the confidence interval is acceptable. This is the most suitable scenario for reporting an IC50.

In the second scenario, the response decreases but remains above 50% even at the highest tested concentration. The result indicates low cytotoxicity or only a partial effect under the evaluated conditions. In this case, the correct approach is to report that the IC50 is greater than the maximum tested concentration, for example, “IC50 > 100 µg/mL.” A numerical value projected by the fitted curve should not be treated as a reliable IC50 because it depends on extrapolation beyond the observed data.

In the third scenario, the data points are highly scattered, there is no concentration-dependent trend, or the fitted curve depends strongly on extrapolation. In this case, the IC50 should be considered not determined and reported as “ND” or “not determined within the tested range.” Reporting a numerical value in this situation may convey false precision.

![IC50 reporting scenarios](../../../assets/img/ic50-rep-en.webp)

A fourth scenario may occur when the response crosses 50%, but the curve is poorly defined because there are not enough points near the plateaus or because experimental variability is high. In such cases, although software may calculate an IC50, the value should be interpreted cautiously and always accompanied by visual inspection of the curve and the confidence interval. In addition to the estimated value, the IC50 confidence interval should be examined. Very wide intervals indicate that small changes in the data may produce substantially different estimates, reducing confidence in the parameter.

Software will usually return a numerical value when asked to fit a curve. However, the existence of a number does not guarantee that the experimental data contain enough information to support it. A reliable IC50 depends on data quality and adequate coverage of the concentration–response curve.

This assessment is particularly important because IC50 values are often used to select concentrations for subsequent experiments. A poorly estimated value may influence the entire downstream experimental strategy. Before accepting an IC50, verify that it was determined by the observed data rather than primarily by model extrapolation.

!!! warning "An extrapolated IC50 is not a reliable IC50"

    When the curve does not reach 50% within the experimental range, the value projected by the fit is an extrapolated estimate rather than an experimentally supported IC50. Reporting this value as a reliable IC50 may convey false precision and lead to incorrect biological interpretations.

!!! tip "Before continuing"

    A treatment reduces the MTT response to 65% at the highest tested concentration (100 µg/mL). How would you report the IC50?

    Why is it problematic to report “IC50 = 250 µg/mL” when the highest tested concentration was 100 µg/mL?

    Software calculates IC50 = 48.37 µg/mL with a confidence interval of 12.1–420.5 µg/mL. What does this result suggest about the reliability of the estimate?

## 3. How to present dose–response graphs

Viability and cytotoxicity graphs should show concentration on the X-axis, preferably on a logarithmic scale, as discussed in [Metrics, calculations, and graphical presentation](../cell-health-metabolism-vs-viability/index.md). The Y-axis should indicate exactly which metric was measured or calculated, also following the principles discussed previously.

For MTT, labels such as “Metabolic activity (% control)” or “Relative metabolic activity (% control)” are generally more informative than “Cell viability (% control)” because they make the nature of the experimental measurement explicit. For ATP, “ATP levels (% control)” is more precise. For PI, “PI-positive cells (%)” is preferable. For image-based counting, “Viable cell count (% control)” is a clear option.

The graph should include individual data points for each well, the mean for each concentration with standard deviation or standard error, and, when appropriate, the fitted logistic curve. Displaying raw data is important because it allows experimental variability to be assessed and helps identify possible outliers, plate effects, or concentrations with inconsistent behavior. Visual inspection of the points is also essential for judging whether the fitted curve and estimated IC50 are truly supported by the experimental data.

Whenever possible, avoid presenting only the fitted curve and IC50 value without the experimental points. This practice makes it difficult to evaluate the quality of the fit and prevents the reader from determining whether the estimated parameter is supported by the observations. When available, it is also advisable to show the confidence interval of the fitted curve or the estimated IC50. Narrow intervals indicate greater precision, whereas wide intervals suggest greater uncertainty and should prompt a more cautious interpretation.

Line graphs or concentration–response curves are generally more appropriate than bar graphs when the goal is to show concentration dependence. Bars can obscure the trend and make comparisons between groups less intuitive. When multiple treatments are compared, each may be represented by a separate curve in the same graph, making visual comparison of the dose–response profiles easier.

!!! tip "Before continuing"

    - Why is it important to show individual well-level data points rather than only the mean and fitted curve?

    - In which situations might bar graphs be preferable to concentration–response curves?

    - Why can a graph showing only the fitted curve and IC50 value make it difficult to assess data quality?

## 4. Results describe the data; discussion interprets them

One of the most important practices in scientific writing is to distinguish experimental observation from biological inference. In the results section, the focus should be on describing what was experimentally observed. In the discussion, those observations can be integrated with hypotheses, mechanisms, and prior knowledge to generate biological interpretations.

For example, in the results section: “The percentage of PI-positive cells increased after exposure to the compound.” This sentence directly describes the experimental observation. In the discussion: “The increase in PI-positive cells suggests loss of plasma membrane integrity and increased cytotoxicity.” This sentence interprets the biological meaning of the observation.

The same logic applies to metabolic assays. In the results section: “A concentration-dependent reduction in metabolic activity measured by MTT was observed.” In the discussion: “The reduction in metabolic activity is consistent with impaired cell health after exposure to the material.”

Similarly, in the results section: “The percentage of Annexin V-positive cells increased after exposure to the compound.” In the discussion: “The increase in Annexin V-positive cells is consistent with activation of events associated with phosphatidylserine exposure, which are frequently observed during regulated cell-death processes.”

Separating observation from interpretation increases scientific rigor and reduces the risk of overinterpretation. The further a conclusion is from the variable originally measured, the greater the need for caution and complementary evidence.

!!! info "Overinterpretation as a source of incorrect conclusions"

    In quantitative science, interpreting beyond what an assay actually measures is one of the most common sources of incorrect conclusions. MTT measures reducing capacity; PI measures membrane permeability; ATP measures energetic state. Each assay provides partial evidence, and the biological interpretation should be proportional to the evidence available.

!!! tip "Before continuing"

    - Why is the statement “the compound induced apoptosis” inappropriate if Annexin V was the only assay used?
    - At what point does a biological interpretation stop being a description of the data and become an inference?

## 5. A practical framework for writing results

An efficient way to write the results section for cell health assays is to follow a logical sequence with five elements: (1) why the assay was performed, (2) what was measured, (3) the overall trend observed, (4) the comparison between the main groups, and (5) the IC50 or the reason why it was not determined.

This structure can be adapted to any assay. Consider the following complete example using MTT:

“To evaluate the initial impact of the nanoparticles on cell health, metabolic activity was quantified by MTT after 24 h of exposure. A concentration-dependent reduction in metabolic activity was observed after exposure to AgNPs, whereas AuNPs remained close to control values across most of the tested range. Logistic fitting indicated an IC50 of 22.6 µg/mL for AgNPs. For AuNPs, the response did not reach 50% within the experimental range; therefore, the IC50 was reported as >100 µg/mL.”

This example presents the metric, trend, comparison, and IC50 interpretation without overstating the biological conclusion. The same structure can be applied to image-based assays:

“Cell-count-based viability was assessed by imaging after Hoechst and PI staining. The number of viable cells was calculated as the difference between total nuclei and PI-positive nuclei, followed by normalization to the untreated control. Treatment X reduced viable cell count (% control) in a concentration-dependent manner, whereas treatment Y did not show a relevant reduction within the tested range.”

This text makes it clear that the metric derives from cell counting and avoids confusing the result with total fluorescence intensity or metabolic assays. The same logic applies to cytotoxicity assays based on nuclear markers:

“Exposure to treatment X increased the percentage of PI-positive cells in a concentration-dependent manner.”

This wording is preferable to “Treatment X increased cell death in a concentration-dependent manner” because it describes the experimental observation rather than replacing it with a biological interpretation.

!!! tip "A practical structure for writing results"

    1. What was the experimental question?
    2. Which metric was used?
    3. What overall trend was observed?
    4. Which groups differed from one another?
    5. Is there a relevant derived parameter such as IC50, EC50, or CC50?

    If a reader can answer these five questions after reading the paragraph, the main information has probably been communicated clearly.

!!! tip "Before continuing"

    Apply the five-element framework to write a results paragraph for a luminescent ATP assay.

    Why does the second example, the image-based assay, specify how the metric was calculated, whereas the first example, MTT, does not require the same level of detail?

## 6. Connecting results and discussion

In the discussion, the focus shifts from describing isolated observations to integrating the experimental evidence into a coherent biological interpretation. This is where one discusses what reduced metabolic activity or increased PI positivity may suggest about cell health. It is also where results from orthogonal assays are integrated, as discussed in [Assay categories and orthogonality](../cell-health-orthogonal-assays/index.md).

For example: “A concentration-dependent reduction in metabolic activity accompanied by an increase in PI-positive cells and a decrease in cell count provides converging evidence of impaired cell health. Although none of these assays alone is sufficient to define a mechanism of action, agreement across different dimensions of the response increases confidence in the biological interpretation.” This type of statement shows that the author understands the limitations of the assays and seeks converging evidence to support the interpretation.

Cautious language is important in the discussion. Terms such as “suggests,” “is consistent with,” “may indicate,” or “supports” communicate that the interpretation is based on partial evidence, whereas categorical terms such as “demonstrates” or “proves” should be reserved for situations in which the evidence is robust and convergent. The strength of the language should be proportional to the strength of the available evidence. The more indirect the measurement and the fewer the independent lines of evidence, the more cautious the interpretation should be.

Integration with orthogonal assays strengthens the discussion because it reduces the possibility that the interpretation depends on a single dimension of the cellular state. When MTT, PI, and cell count point in the same direction, confidence in the interpretation increases substantially. When assays diverge, the divergence itself may provide important mechanistic information. For example, reduced metabolic activity without a corresponding increase in PI-positive cells may indicate early metabolic changes, cytostasis, cellular adaptation, or other sublethal effects. In such cases, disagreement between assays should not automatically be treated as experimental error, but rather as a biological hypothesis that deserves further investigation.

!!! info "From observation to interpretation"

    Results answer:

    - What was measured?
    - What was the magnitude of the effect?
    - Was the effect statistically significant?

    Discussion answers:

    - What might these results mean biologically?
    - How do they relate to the literature?
    - What are the limitations of the interpretation?
    - Do independent assays converge on the same conclusion?

!!! tip "Before continuing"

    Why is it important to use cautious language such as “suggests” or “is consistent with” when discussing cell health assays?

    If MTT indicates reduced metabolic activity but PI does not show an increase in positive cells, how would you interpret this divergence in the discussion?

    In which situation might divergence between two assays be more informative than agreement between them?

## 7. Closing remarks

In this lesson, we completed the cycle by discussing concentration–response curve fitting, critical interpretation of IC50, and strategies for communicating results rigorously. In the next lessons, we will expand this logic to the context of *High-Content Imaging*, exploring how images are segmented, how cellular features are computationally extracted, and how these measurements can be transformed into multiparametric phenotypic profiles.

We also discussed that writing results requires a strict separation between experimental measurement and biological interpretation. The graph shows the measurement, the results describe the trend, and the discussion interprets the biological meaning. This simple rule, when applied consistently, substantially improves the rigor of scientific communication.

Throughout this module, we repeatedly emphasized the distinction between experimental measurement, mathematical processing, and biological interpretation. This separation provides a useful framework for analyzing any cell health assay: first, we understand what was measured; then, how the data were transformed into a quantitative metric; and only afterward do we discuss their biological meaning.

We also saw that no single assay captures cell health completely. Interpretation becomes more robust when different independent measurements converge on the same conclusion and more informative when they diverge, revealing distinct dimensions of the cellular response.

!!! info "Main message of the module"

    No assay directly measures “cell health.”

    Assays measure specific properties of the biological system, such as metabolic activity, membrane permeability, energetic content, proliferation, or morphology.

    Biological interpretation arises from integrating these measurements with the experimental context and independent evidence. The further the conclusion is from the variable originally measured, the greater the need for caution.

### Exercises

1. A treatment reduces the MTT signal to 65% at the highest tested concentration (100 µg/mL). How would you report the IC50? Justify your answer.
2. A PI assay shows an increase from 5% to 40% positive cells. Write a results paragraph describing this observation without using the term “cell death.”
3. Why should the untreated control not be plotted as $\log(0)$ on a concentration–response curve?
4. In which situations should an IC50 be reported as “ND”?
5. Rewrite the sentence “The treatment killed 50% of the cells according to MTT” using more precise language that distinguishes experimental measurement from biological interpretation.
6. Explain the difference between experimental measurement, mathematical processing, and biological interpretation using an MTT assay as an example.

### Further reading

- GraphPad Prism — [How exactly are IC50 and EC50 defined?](https://www.graphpad.com/support/faq/50-of-what-how-exactly-are-ic50-and-ec50-defined/)
- Riss TL, Moravec RA, Niles AL, Duellman S, Benink HA, Worzella TJ, Minor L. [*Cell Viability Assays*.](https://www.ncbi.nlm.nih.gov/books/NBK144065/) Assay Guidance Manual, 2016.
- Bray MA et al. [Cell Painting, a high-content image-based assay for morphological profiling.](https://doi.org/10.1038/nprot.2016.105) *Nature Protocols* 11:1757–1772, 2016.
- [Pycytominer](https://pycytominer.readthedocs.io) documentation
- [CellProfiler](https://cellprofiler.org) documentation
