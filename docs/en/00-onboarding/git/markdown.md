# Markdown --- First Steps (NanoCell)

[Markdown](https://en.wikipedia.org/wiki/Markdown) is a lightweight
markup language that allows you to write structured text using only
plain keyboard characters. With Markdown you can create headings, lists,
links, code blocks, tables, and many other elements without relying on a
specific editor. The goal is to keep your content easy to write, read,
and reuse across different platforms.

Markdown is widely used for personal notes, project documentation,
repository README files, GitHub Issues and Discussions, websites, study
notes, and even manuscript drafts. Instead of learning the formatting
tools of a single application, you learn a simple syntax that works in
many environments.

In this course, Markdown will be used primarily within GitHub, where it
appears in README files, project documentation, comments, Issues, Pull
Requests, and Discussions. It provides a practical way to document
decisions, describe procedures, organize ideas, and make your work
easier for others to understand.

For personal note-taking, two major approaches are common today. One
uses online platforms such as [Notion](https://www.notion.com), which
provide synchronization, collaboration, and database-like features. The
other relies on local Markdown files managed by tools such as
[Obsidian](https://obsidian.md), [Zettlr](https://www.zettlr.com),
[Visual Studio Code](https://code.visualstudio.com), or even a simple
text editor. Local files offer greater control, portability, and
independence from a specific platform, while cloud-based solutions may
provide a more polished integrated experience.

It is also worth noting that Markdown has several variants, commonly
called *flavors*. The GitHub ecosystem uses **GitHub Flavored Markdown
(GFM)**, which extends the original syntax with additional features such
as task lists and tables.

> **Training goal:** learn enough Markdown to write clear notes,
> documentation, and short technical documents.

## Where you will use Markdown

Markdown appears in many contexts:

-   📓 Personal notes (Obsidian, Notion, VS Code)
-   📁 Project documentation
-   🧪 Experimental records
-   🧬 Repository README files
-   💬 GitHub Issues and Discussions
-   📄 Static websites

In this course, you will mainly use Markdown to:

-   write README files;
-   document projects;
-   participate in GitHub Discussions;
-   record analyses and decisions.

## Tools: two common approaches

### 1. Online platforms (e.g., Notion)

-   graphical interface
-   automatic synchronization
-   easy collaboration
-   greater platform dependency

### 2. Local Markdown files (e.g., Obsidian, VS Code)

-   plain `.md` files
-   complete control over your files
-   portable and future-proof
-   works offline

There is no universally "best" solution---the choice depends on your
workflow.

## Markdown flavors

Markdown is not exactly the same everywhere.

GitHub uses **GitHub Flavored Markdown (GFM)**, which includes features
such as:

-   tables
-   task lists (`- [ ]`)
-   syntax highlighting
-   user mentions (`@username`)
-   issue references (`#123`)

Everything presented in this lesson is fully compatible with GitHub.

# Tutorial

## 1. Emphasis

Italic:

`*text*`

Bold:

`**text**`

### Exercise

Make the word **hypothesis** bold and *negative control* italic.

## 2. Headings

``` md
# Heading 1
## Heading 2
### Heading 3
```

### Exercise

Convert the following into headings and subheadings:

-   Objective
-   Materials and Methods
-   MTT Assay
-   Calcein/PI/Hoechst Assay
-   Results

## 3. Lists

``` md
- item
  - sub-item
```

``` md
1. Step one
2. Step two
```

### Exercise

Create a three-step list describing how to execute an analysis pipeline.

## 4. Links

``` md
[link text](https://example.com)
```

### Exercise

Create a link to your laboratory website.

## 5. Code

Inline code:

`pip install cellprofiler`

Code block:

``` python
def f(x):
    return x**2
```

### Exercise

Write a terminal command using inline code formatting.

## 6. Tables

``` md
| Field | Value |
|-------|-------|
| Cell line | Huh7 |
```

### Exercise

Create a simple two-column table.

## 7. Images

``` md
![Alternative text](URL)
```

### Exercise

Insert the laboratory logo as an image.

## 8. Task lists

``` md
- [ ] Perform experiment
- [x] Analyze data
```

## 9. Example README

``` md
# Project

Project description

## Objective

Explain the project's objective.

## How to use

1. Step one
2. Step two
```

## 10. Mini challenge

Create a short document containing:

-   one heading
-   one list
-   one link
-   one image

## Final checklist

-   [ ] I can use the basic Markdown syntax.
-   [ ] I can write a README file.
-   [ ] I can use Markdown confidently on GitHub.
