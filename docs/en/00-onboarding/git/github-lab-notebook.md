# 📘 Tutorial: Using GitHub as a Lab Notebook

## 1. Create your GitHub account

Create a GitHub account using an email address that represents your
professional identity.

!!! tip "Recommendation" Use an email address based on your scientific
name, for example:

    - `firstname.lastname@gmail.com`

Avoid informal email addresses or nicknames, as this account will become
part of your professional identity.

## 2. Access your laboratory repository

The laboratory will create a project repository for you, for example:

`lcp-nanotoxicology-microplastic-label-free-mic-beatriz`

You will be invited as a collaborator.

📩 **Important**

You should receive an invitation email from GitHub.

!!! warning "Required action" - Open the invitation email. - Click
**Accept invitation**.

Until you accept the invitation, you will not have access to the
repository.

## 3. Verify that Discussions are enabled

Your Lab Notebook will be maintained using **GitHub Discussions**.

Check that:

1.  You are inside the repository.
2.  The **Discussions** tab is visible near the top of the page.

!!! warning "If Discussions is not available" Ask your supervisor to
enable the feature.

## 4. Create a new Discussion

1.  Click **Discussions**.
2.  Click **New discussion**.

## 5. Discussion categories

Initially, we will use only two categories:

-   **General** → experiment execution, analyses, and results.
-   **Ideas** → hypotheses, conceptual questions, and experimental
    planning.

!!! info "Practical rule" - Thinking → **Ideas** - Planning →
**Ideas** - Executing or analyzing → **General**

## 6. Naming a Discussion

Choose titles that are specific and easy to search later.

**Avoid**

-   Training
-   Experiment 1

**Prefer**

-   Cell culture training: Passaging
-   Cell culture training: MTT
-   Cell culture training: Mycoplasma
-   LCP -- 24 h exposure -- Dose range
-   Analysis -- LDA batch 1 vs batch 2

!!! info "Rule" One Discussion should correspond to one clearly defined
unit of work.

## 7. Structure of a scientific Lab Notebook entry

The purpose of the Lab Notebook is not simply to record what
happened---it is to document your scientific reasoning.

A good entry should contain enough information for you or another
researcher to reconstruct your reasoning and decisions.

### 1. Context

What are you doing, and why?

### 2. Question

What scientific question are you trying to answer?

### 3. Experiment type

State explicitly whether the experiment is:

-   Exploratory
-   Confirmatory

### 4. Experimental design (when applicable)

Include:

-   experimental conditions
-   controls
-   replicates
-   plate layout
-   biological, experimental, and observational units

Whenever possible, include photographs, sketches, or screenshots.

### 5. What was done

Describe the procedure objectively.

### 6. Observations / Results

Record:

-   observations
-   unexpected events
-   technical problems

Examples:

-   reagent unavailable
-   last-minute substitution
-   lost well
-   pipetting error

These events are part of the experiment and should be documented.

### 7. Interpretation

What do you think the observations mean?

### 8. Next steps

Describe the logical next step.

### 9. Questions / Decisions

Whenever supervisor input is required, mention `@labnanocell` so that a
notification email is sent.

## Continuous notebook

Unlike a final report, a Lab Notebook evolves over time.

You should:

-   create the Discussion before the experiment;
-   update it during execution;
-   add comments as new information becomes available.

This mirrors the behavior of a traditional paper laboratory notebook.

## Suggested templates

Start with a basic template such as:

``` markdown
## 🧪 Title
Cell culture training: MTT (cell density)

## 🎯 Question / Objective
What is the relationship between cell density and the MTT signal?

## 🧠 Context
Training exercise to understand assay linearity and improve cell culture skills.

## 🔬 Experiment type
Training
```

As the experiment progresses, additional sections can be added.

### Experimental design

``` markdown
## 🧪 Experimental design

- Multiple cell densities
- 96-well plate
- Cell-free control
```

### Procedure

``` markdown
## ⚙️ What was done

- Cell plating
- Incubation
- MTT (0.5 mg/mL)
- Absorbance measurement at 570 nm
```

### Observations

``` markdown
## 📊 Observations / Results

- Signal increased with cell density.
- Saturation observed at high densities.
```

### Interpretation

``` markdown
## 🔍 Interpretation

- Possible upper limit of assay linearity.
```

### Next steps

``` markdown
## ➡️ Next steps

- Test intermediate cell densities.
```

### Questions / Decisions

``` markdown
## ❓ Questions / Decisions

Which density range should be used in future experiments?

Mention: @labnanocell
```
