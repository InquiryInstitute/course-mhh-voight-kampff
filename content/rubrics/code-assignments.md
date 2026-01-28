# Code Assignment Rubric

*Season 1: Voight-Kampff*

---

## Overview

Code assignments are evaluated on four dimensions: **Functionality**, **Code Quality**, **Documentation**, and **Inquiry Engagement**.

This is not a software engineering course. Working code that demonstrates conceptual understanding is valued over polished production code.

---

## Scoring

| Dimension | Pass | Revise | Fail |
|-----------|------|--------|------|
| Functionality | Core requirements met | Partial implementation | Does not run / major bugs |
| Code Quality | Readable, reasonable structure | Some issues, fixable | Incomprehensible |
| Documentation | Clear explanation of approach | Minimal explanation | No documentation |
| Inquiry | Engages with "why" questions | Surface-level engagement | Purely mechanical |

**Overall:**
- **Pass:** Pass in all 4 dimensions, OR Pass in 3 + Revise in 1
- **Revise:** Pass in 2 + Revise in 2, OR other combinations
- **Fail:** Fail in any dimension

---

## Dimension Details

### 1. Functionality (40%)

**Pass:**
- Code runs without errors on provided test cases
- Produces expected outputs for standard inputs
- Handles edge cases reasonably (may not be perfect)
- Core algorithm/logic is correct

**Revise:**
- Code runs but produces incorrect outputs
- Missing key functionality
- Crashes on edge cases
- Logic errors that can be identified and fixed

**Fail:**
- Code does not run
- Fundamental misunderstanding of the task
- Plagiarized or AI-generated without understanding

**Questions we ask:**
- Does it work?
- Does it do what the assignment asked?
- Can we run it and see sensible results?

---

### 2. Code Quality (20%)

**Pass:**
- Variables and functions have meaningful names
- Code is organized into logical sections/functions
- No unnecessarily duplicated code
- Comments explain non-obvious parts
- Follows basic Python conventions (PEP 8 spirit, not letter)

**Revise:**
- Code works but is hard to follow
- Poor naming or organization
- Some duplicated logic
- Missing comments on complex sections

**Fail:**
- Code is incomprehensible
- Single giant function with no structure
- Variable names like `x`, `data1`, `thing`
- No comments on code that needs explanation

**Questions we ask:**
- Could another student understand this?
- Could you explain this code in office hours?
- Is this the kind of code you'd want to maintain?

---

### 3. Documentation (20%)

**Pass:**
- README or header explains what the code does
- Instructions for running the code
- Description of approach/algorithm
- Acknowledgment of limitations
- Sources cited (including AI assistance)

**Revise:**
- Minimal README
- Missing setup instructions
- No explanation of approach
- No acknowledgment of limitations

**Fail:**
- No documentation
- Documentation doesn't match code
- Misleading or false claims

**Required elements:**
```markdown
# Assignment X.Y: [Title]

## Approach
[Brief description of your approach and why you chose it]

## Running the Code
[How to run, what inputs are expected]

## Limitations
[What doesn't work, edge cases, known issues]

## AI Assistance
[What AI tools you used and how]

## Sources
[Papers, tutorials, code you referenced]
```

---

### 4. Inquiry Engagement (20%)

This dimension is unique to this course. We want to see that you engaged with the *meaning* of what you built, not just the mechanics.

**Pass:**
- Reflects on what the implementation reveals about the concept
- Asks interesting questions about limitations or implications
- Connects implementation to course themes
- Shows genuine curiosity

**Revise:**
- Surface-level reflection
- Treats assignment as purely technical exercise
- No connection to broader themes
- Generic observations

**Fail:**
- No reflection
- Pure code dump
- Dismissive of conceptual questions

**Example of Pass-level engagement:**

> "Building this CAPTCHA generator made me realize how much we rely on the assumption that distortion = difficulty. But the distortion that makes it hard for OCR also makes it hard for humans with visual impairments. I'm not sure there's a way to make this 'fair' — the more I think about it, the more it seems like CAPTCHAs are fundamentally about excluding someone."

**Example of Revise-level engagement:**

> "This assignment taught me how to use PIL for image manipulation."

---

## Common Pitfalls

### Leads to Revise:
- Submitting AI-generated code you don't understand
- No testing of your own code
- Ignoring the reflection component
- Copying code from tutorials without attribution

### Leads to Fail:
- Submitting code that doesn't run at all
- Plagiarizing from classmates
- Lying about AI assistance
- Submitting nothing

---

## The Revise Process

If you receive Revise:

1. You'll get specific feedback on what needs improvement
2. You have 1 week to resubmit
3. Revised submission can earn Pass (not "high pass" — just Pass)
4. Second Revise on same assignment = Fail

---

## Academic Integrity

### AI Assistance Policy

You MAY:
- Use ChatGPT, Copilot, etc. for code suggestions
- Use AI to explain concepts or debug
- Generate boilerplate code with AI

You MUST:
- Document all AI assistance
- Understand every line of code you submit
- Be able to explain your code in office hours

You MAY NOT:
- Submit AI-generated code you don't understand
- Use AI to write your reflection/documentation
- Claim AI-assisted work as entirely your own

### Collaboration Policy

You MAY:
- Discuss approaches with classmates
- Help each other debug
- Share resources and references

You MAY NOT:
- Share code directly
- Submit identical or near-identical solutions
- Have someone else write your code

---

## Questions?

If you're unsure whether something is acceptable:
1. Ask in Matrix #tech-support
2. Bring it up in office hours
3. When in doubt, disclose and document

We'd rather you over-disclose than under-disclose.
