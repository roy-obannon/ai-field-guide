# AI Field Guide

A personal, public learning site about AI engineering, built with Astro Starlight and the Flexoki theme (light mode only). Pages live in `src/content/docs/`:

- `modules/`: the ordered course
- `concepts/`: atomic notes, one idea each, linked densely to each other
- `exercises/`: teach-backs, drills, and debates, with the owner's answers and critiques
- `open-questions.md`: the owner's evolving opinions, revised with dates

Internal links use the base path: `/ai-field-guide/concepts/<slug>/`. Run `npm run build` before committing; it fails on any broken internal link. Mark a contested concept with a `sidebar.badge` of `Contested` (variant `caution`). Commit and push only when the owner approves.

## Working with the owner's writing

The owner is practicing their writing. When they edit pages, review their changes against the style guide below and explain each finding with a `file:line` reference. Do not rewrite their prose unless they ask.

## Style guide

These rules apply to everything written for this site.

### Voice

- Write in the owner's voice: professional and expert, but familiar and personal. The site is a personal undertaking, and readers (starting with the owner) should feel at home in it.
- Minimize passive voice. Use it only when the actor is unknown, unimportant, or obvious and the thing acted upon is the real subject.
- Do not end a sentence with a preposition: move the preposition earlier ("the model the answer depends on" → "the model on which the answer depends") or rephrase. The particle of a phrasal verb ("log in," "set up," "turn on," "figure out") is not a preposition and may end a sentence.

### Capitalization

- Use title case for the titles of things: page titles, article and book titles, and planned module names. Follow Chicago style: capitalize major words, including short verbs such as "Is"; lowercase articles, coordinating conjunctions, and prepositions ("a," "and," "in," "of," "vs."); capitalize both parts of a hyphenated term ("Test-Time Compute").
- Whenever text uses a title verbatim, including link text and sidebar labels, use the title-cased form. A term used as an ordinary noun in a sentence ("the model's context window") is not a title and stays lowercase.
- Use sentence case for headings. When a heading contains a colon, keep the first word after the colon lowercase unless it is a proper noun ("The pattern underneath: progressive disclosure"). Exception: after a label that numbers a section or names its kind ("Part A:", "Step 2:", "Opinion:"), capitalize the first word, because what follows is the section's title ("Part A: How the machine works").

### Punctuation and symbols

- Use the Oxford comma.
- Separate the items of a series with semicolons when any item contains its own comma. Use semicolons between all the items, including before the final "and" or "or" (the semicolon version of the Oxford comma). If the series becomes hard to read, turn it into a bulleted list.
- Also use a semicolon to join two closely related independent clauses without a conjunction, including before a transitional word such as "however" or "therefore" (followed by a comma).
- Use colons rather than em dashes.
- Arrows (→), "vs.", "e.g.", and "i.e." are fine.
- Type an em dash as `—` (or `---`). Never use `--`: the site renders it as an en dash.

### Contractions

- Do not use contractions.

### Emphasis

- Use bold only for a critical fact, or for a term at the point where it is defined.

### Quotations and key ideas

- Use a Markdown blockquote (`> `) for a quotation from a source, followed by a footnote citation.
- Use a Starlight aside (`:::note[Title]` … `:::`) for a key idea that is not intuitive or that the reader must keep in mind.

### Anecdotes

- Anecdotes and colloquial examples are the exception to the professional register: em dashes and contractions are welcome there.

### Citations

- Cite sources with footnotes, formatted in Chicago notes style.
- The first note for a source is a full note: the author, the title (in quotation marks, linked to the source), the publication (in italics), and the publication date.
- Every later note for the same source on the same page is a shortened note: the author's surname and the title only.

  ```md
  [^1]: Lakshay Nasa, ["Context Engineering vs. Prompt Engineering,"](https://example.com/article#section-one) *DataHub*, April 20, 2026.
  [^2]: Nasa, ["Context Engineering vs. Prompt Engineering."](https://example.com/article#section-two)
  ```

- A note ends with a period. When the note ends with a quoted title, the period goes inside the closing quotation mark (US style), so nothing follows the link.

- When quoting one section of a long source, link to that section's anchor.
- Prefer primary sources: official documentation, papers, and the original author's own writing. Among those, prefer open-source projects (such as Hugging Face) and independent experts (such as Simon Willison) over AI vendors. Use a blog or a vendor article only when no primary source covers the point.
- Do not cite OpenAI or Sam Altman. When OpenAI's terminology has to be mentioned, describe it without citing them.
- A web page with no publication date gets an access date instead ("accessed November 17, 2026"). Set the name of a website in roman type, without italics or quotation marks (*DataHub* is italic because it is a blog; "Claude Platform Docs" is not).
- To cite several sources in one note, separate them with semicolons. A short comment may follow the citations.

  ```md
  [^1]: Hugging Face, ["Chat Templates,"](https://example.com/a) Transformers Documentation, accessed November 17, 2026; Anthropic, ["Prompting Best Practices,"](https://example.com/b) Claude Platform Docs, accessed November 17, 2026. The Hugging Face guide shows a system prompt converted into ordinary tokens.
  ```
- Write footnote definitions at the end of the file, with no heading. The build moves them to the end of the page under an automatic "Sources" heading and omits the "↩" return links.

### End-of-page sections

- End a page with a horizontal rule (`---`) and a "Related" section that lists internal links to related pages on this site. Keep sources out of "Related": they belong in the footnotes.

### Spelling

- Use US spelling.
