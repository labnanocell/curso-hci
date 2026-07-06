# HCA --- Basic Git for Graduate Students

## Objectives

In this module, you will learn **how Git and GitHub will be used
throughout your graduate training** to organize projects, document
scientific progress, and facilitate collaboration between students and
supervisors.

The goal is **not** to turn you into a software developer or cover every
Git feature. Instead, the objective is much more practical: to provide a
structured, traceable, and collaborative way to manage files, scripts,
notes, documentation, and research projects.

This module should be read together with the course section on project
organization, as Git and project organization go hand in hand.

!!! info "Structure of this module" This lesson focuses on the
**concepts** behind Git and GitHub: why we use them, how repositories
are organized, and the role of both the student and the supervisor.

    The practical steps—creating a GitHub account, accessing the repository, and using GitHub Discussions as a Lab Notebook—are covered in the companion tutorials:

- [📘 Tutorial: Using GitHub as a Lab Notebook](github-lab-notebook.md)
- [📘 Git in Practice: Connecting Your Computer to the Project](git-in-practice.md)
- [📘 Markdown — First Steps](markdown.md)

## Why use Git during graduate school?

Throughout your graduate studies you will likely work with:

-   experimental documentation
-   protocols
-   intermediate figures and results
-   multiple versions of the same manuscript, script, or analysis
-   analysis scripts
-   notebooks
-   metadata tables

Without version control, it is very common to end up with situations
such as:

-   files named `analysis_final_really_final_v3.py`
-   multiple copies of the same folder
-   uncertainty about what changed between two versions
-   lost history
-   difficulty supervising or collaborating
-   poor traceability of project development

Git solves these problems by recording changes over time. GitHub
provides the online platform where repositories are hosted, shared,
reviewed, and organized.

In this course, Git and GitHub are presented as essential tools for
**scientific and computational workflow hygiene**.

## Git and GitHub: what is the difference?

**Git** is the version control system responsible for tracking changes
in a project.

**GitHub** is the platform where Git repositories are hosted, shared,
reviewed, and collaboratively maintained.

In simple terms:

-   **Git** records the history of your project.
-   **GitHub** hosts that history and makes collaboration much easier.

## Student access

Each student should create **one personal GitHub account** that will
accompany them throughout their scientific career.

Use a long-term professional email address as the primary account email
(for example, `firstname.lastname@gmail.com`). When available, add your
institutional email as a secondary address.

!!! tip "Practical rule" Create **one professional GitHub account** and
keep it throughout your career. Add additional email addresses when
necessary instead of creating multiple accounts.

## Repository organization

During graduate school you will normally work with two different
repositories.

### 1. Personal repository

This is your sandbox for learning, testing ideas, experimenting with new
tools, and writing exploratory scripts or notebooks.

Typical contents include:

-   Git practice
-   exploratory notebooks
-   small scripts
-   automation tests
-   workflow experiments

Its purpose is to let you learn without affecting your formal research
project.

### 2. Project repository

The project repository is the **official repository** for a research
project and also functions as the project's **digital Lab Notebook**.

Repositories are created by the laboratory using our Cookiecutter
template and shared with the student after creation.

They contain:

-   project organization
-   documentation
-   analysis scripts
-   notebooks
-   metadata
-   protocols
-   processed results
-   manuscripts and supporting material

Unlike the personal repository, this repository must remain organized,
reproducible, and fully traceable.

## Personal vs. project repository

### Personal repository

Use it to:

-   learn Git
-   test commands
-   experiment with tools
-   create drafts
-   develop autonomy

### Project repository

Use it for:

-   real scientific work
-   project documentation
-   data analysis
-   metadata
-   collaboration
-   maintaining a reproducible project history

!!! tip "Think of it this way" Your **personal repository** is your
training ground.

    Your **project repository** is your formal scientific workspace.

## GitHub in our laboratory

GitHub serves two complementary purposes.

### Repository

Stores:

-   scripts
-   notebooks
-   metadata
-   documentation
-   plate maps
-   processed outputs

### Discussions

GitHub Discussions function as the laboratory's **digital Lab
Notebook**, where you document:

-   scientific questions
-   experimental design
-   experimental progress
-   analyses
-   decisions
-   problems encountered
-   conclusions
-   interactions with your supervisor

!!! tip "In short" **Files live in the repository.**

    **Scientific reasoning lives in Discussions.**

## What goes where?

  -----------------------------------------------------------------------
  Location                   Typical contents
  -------------------------- --------------------------------------------
  Personal repository        Training, exploratory analyses, tests

  Project repository         Official analyses, notebooks, metadata,
                             protocols

  GitHub Discussions         Questions, rationale, decisions, experiment
                             log

  Institutional Google Drive Large files, presentations, shared documents
  -----------------------------------------------------------------------

!!! info "Important" Google Drive is useful for sharing large files, but
GitHub remains the primary location for project traceability.

## What should *not* be stored on GitHub?

Avoid committing:

-   raw image datasets
-   very large files
-   sensitive data
-   temporary files
-   virtual environments
-   caches
-   passwords, tokens, and credentials

The `.gitignore` file is designed to prevent these files from being
tracked.

## Summary

During your graduate training you will work with:

-   **one personal repository** for learning and experimentation;
-   **one or more project repositories** for formal scientific work.

Together with GitHub Discussions, these repositories provide a complete
and reproducible history of your research.

The goal is not simply to use GitHub, but to adopt good practices in:

-   organization
-   traceability
-   collaboration
-   reproducibility
-   scientific and computational workflow hygiene

## Further reading

For the practical tutorials accompanying this lesson:

- [📘 Tutorial: Using GitHub as a Lab Notebook](github-lab-notebook.md)
- [📘 Git in Practice: Connecting Your Computer to the Project](git-in-practice.md)
- [📘 Markdown — First Steps](markdown.md)

Additional resources:

-   https://gitimmersion.com/
-   https://github.com/nisalgunawardhana/Github-for-beginners
