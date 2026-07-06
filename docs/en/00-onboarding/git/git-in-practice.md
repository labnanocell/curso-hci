# HCA --- Git in Practice (Connecting Your Computer to the Project)

## Learning objectives

-   Connect your local computer (Windows / Git Bash) to the project
    repository.
-   Understand the local ↔ GitHub workflow.
-   Perform your first **commits** and **pushes**.
-   Learn what should and should not be versioned.
-   Create the directory structure for a new experiment.

## 1. What changes now?

Until now you have mainly interacted with GitHub through the web
interface, especially by using **Discussions** as your digital Lab
Notebook.

From this point on, GitHub becomes integrated into your local workflow.
You will edit files on your computer and synchronize them with the
remote repository.

Your project now has two synchronized layers:

-   a local copy (your computer or the laboratory workstation);
-   a remote copy (GitHub).

Git is responsible for keeping these two copies synchronized in a
traceable way.

!!! info "Connection with the course" Discussions document the
**scientific reasoning**, while commits document the **technical
evolution** of the project.

## 2. Conceptual workflow

The basic workflow is:

1.  Modify files locally.
2.  Record the changes with a **commit**.
3.  Send the changes to GitHub with **push**.

This cycle is repeated continuously throughout the project.

## 3. Preparing your environment

The laboratory uses **Git Bash** as the primary command-line interface.

Check that Git is installed:

``` bash
git --version
```

If a version number is displayed, Git is correctly installed.

## 4. Cloning the repository (SSH recommended)

### 4.1 Copy the repository URL

Your supervisor will invite you to the project's private repository.

Open the repository, click **Code**, choose **SSH**, and copy the
repository URL.

### 4.2 Generate an SSH key (once per computer)

``` bash
ssh-keygen -t ed25519 -C "your_email"
```

Accept the default options.

### 4.3 Start the SSH agent

``` bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### 4.4 Copy your public key

``` bash
cat ~/.ssh/id_ed25519.pub
```

Copy the complete key.

### 4.5 Add the key to GitHub

Go to:

-   Settings
-   SSH and GPG keys
-   New SSH key

Paste the key and save it.

### 4.6 Test the connection

``` bash
ssh -T git@github.com
```

If authentication succeeds, SSH is correctly configured.

## 5. Clone the repository

On Windows laboratory computers, work on the **D:** drive.

``` bash
cd /d
mkdir your_name
cd your_name
git clone git@github.com:labnanocell/PROJECT.git
```

Enter the repository:

``` bash
cd repository-name
```

Check its status:

``` bash
git status
```

A clean repository should display:

``` text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

## 6. Your first commit

Edit a simple file such as `README_project_en.md`.

Then run:

``` bash
git status
git add .
git commit -m "update: Initial project description"
git push
```

Suggested commit prefixes:

-   `add`
-   `update`
-   `fix`
-   `refactor`

!!! tip "Practical rule" **Commit** records changes. **Push** shares
them.

## 7. Working on multiple computers

Always begin by updating your local repository:

``` bash
git pull
```

At the end of your work session:

``` bash
git push
```

This keeps all computers synchronized.

## 8. Creating a new experiment

Recommended naming convention:

``` text
YYYY_MM_DD_CellLine_Treatment_Condition
```

Example:

``` text
2025_06_Huh7_NPPS_24h
```

Git Bash:

``` bash
EXP=2025_06_Huh7_NPPS_24h
```

Windows Command Prompt:

``` cmd
set EXP=2025_06_Huh7_NPPS_24h
```

Create the directory structure.

### Git Bash

``` bash
mkdir -p images/$EXP/images
mkdir -p images/$EXP/illum

mkdir -p workspace/metadata/$EXP/platemap
mkdir -p workspace/load_data_csv/$EXP

mkdir -p workspace/pipelines/$EXP

mkdir -p workspace/assaydev/$EXP/outlines_qc
mkdir -p workspace/analysis/$EXP/analysis

mkdir -p workspace/backend/$EXP
mkdir -p workspace/profiles/$EXP

mkdir -p workspace_dl/$EXP/notebooks
```

### Windows

``` cmd
mkdir "images\%EXP%\images"
mkdir "images\%EXP%\illum"

mkdir "workspace\metadata\%EXP%\platemap"
mkdir "workspace\load_data_csv\%EXP%"

mkdir "workspace\pipelines\%EXP%"

mkdir "workspace\assaydev\%EXP%\outlines_qc"
mkdir "workspace\analysis\%EXP%\analysis"

mkdir "workspace\backend\%EXP%"
mkdir "workspace\profiles\%EXP%"

mkdir "workspace_dl\%EXP%\notebooks"
```

Verify that the directories were created correctly using `tree`.

Then copy your files into the appropriate locations:

-   Raw images → `images/$EXP/images/`
-   Illumination correction → `images/$EXP/illum/`
-   Plate maps → `workspace/metadata/$EXP/`
-   `LoadData.csv` → `workspace/load_data_csv/$EXP/`
-   CellProfiler pipelines → `workspace/pipelines/$EXP/`

## 9. Integrating with the Lab Notebook

Whenever you start a new experiment, create a corresponding **GitHub
Discussion** documenting:

-   the biological question;
-   the experimental design;
-   decisions made;
-   observations during execution.

The repository stores the files, while Discussions document the
scientific reasoning.

!!! info "Key idea" Every experiment exists in two places:

    - Repository → files
    - Discussions → scientific reasoning

## 10. Daily workflow

Use Git continuously.

Whenever you:

-   organize files;
-   modify notebooks;
-   update pipelines;
-   add metadata;

consider creating a new commit.

## 11. Wrap-up

You have now connected your local computer to the laboratory workflow.

From now on your project combines:

-   technical traceability (**commits**);
-   scientific traceability (**Discussions**).

Together these provide an organized and reproducible research history.

## Exercises

1.  Clone your project repository.

2.  Edit a simple file.

3.  Run:

    -   `git status`
    -   `git add .`
    -   `git commit`
    -   `git push`

4.  Verify the changes on GitHub.

5.  Create a Discussion describing:

    -   what you did;
    -   the main difficulty you encountered;
    -   what you learned.

6.  Create the directory structure for a fictional experiment using the
    recommended naming convention.
