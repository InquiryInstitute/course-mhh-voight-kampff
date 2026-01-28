# Module 02: ELIZA and PARRY

## Week 3-4 | Rule-Based Dialogue Systems

## Overview

ELIZA (1966) and PARRY (1972) are the first programs to pass informal Turing Tests. They succeeded not through intelligence but through exploiting human psychology. Understanding how they work reveals what we actually test when we test for humanity.

## Learning Objectives

- [ ] Implement a rule-based dialogue system from scratch
- [ ] Understand the DOCTOR script's rhetorical strategies
- [ ] Analyze why users attributed personality to simple programs
- [ ] Examine the ethical implications of Weizenbaum's creation

## Reading Assignment

**Primary:**
- Weizenbaum, J. (1966). "ELIZA—A Computer Program for the Study of Natural Language Communication."
- Weizenbaum, J. (1976). *Computer Power and Human Reason*, Chapters 3-6.
- Colby, K. (1975). "Artificial Paranoia." *Schizophrenia Bulletin*.

**Secondary:**
- Hofstadter, D. (1995). "The Ineradicable Eliza Effect."
- Turkle, S. (1984). "Encounters with the Computer Psychotherapist."

## The Systems

### ELIZA (1966)
- Created by Joseph Weizenbaum at MIT
- Pattern-matching with scripted responses
- Most famous script: DOCTOR (Rogerian therapist)
- ~200 lines of code in the original

### PARRY (1972)
- Created by Kenneth Colby at Stanford
- Simulated paranoid schizophrenia patient
- More complex internal state model
- First program to pass a blind psychiatric evaluation

## Technical Implementation

### Assignment 2.1: ELIZA Reconstruction
Implement the ELIZA DOCTOR script from scratch.

```python
class ELIZA:
    def __init__(self):
        self.patterns = []  # (regex, response_templates)
        self.memory = []
        self.last_topics = []
    
    def load_script(self, script_path: str):
        """Load pattern-response pairs from a script file."""
        pass
    
    def transform(self, input_text: str) -> str:
        """
        Core transformation logic:
        1. Decompose input using patterns
        2. Select appropriate response template
        3. Apply transformations (I -> you, my -> your, etc.)
        4. Handle memory and topic tracking
        """
        pass
    
    def reflect(self, word: str) -> str:
        """Apply reflection transformations."""
        reflections = {
            "i": "you", "me": "you", "my": "your",
            "am": "are", "you": "I", "your": "my"
        }
        return reflections.get(word.lower(), word)
```

**Required features:**
- Pattern matching with keyword priority
- Pronoun reflection
- Memory for previous statements
- Graceful handling of unmatched input

### Assignment 2.2: Conversation Analysis
Conduct and analyze 5 conversations with your ELIZA implementation.

**For each conversation:**
1. Transcript (minimum 20 turns)
2. Pattern activation log
3. Points where the illusion held/broke
4. User's reported experience

### Assignment 2.3: The ELIZA Effect
Write a 1200-word essay on "The ELIZA Effect":
1. Why did Weizenbaum's secretary ask to be alone with ELIZA?
2. What does this reveal about human psychology?
3. How does this affect our evaluation of AI systems today?

## Weizenbaum's Regret

Weizenbaum created ELIZA as a demonstration of how shallow AI could be. He was horrified when:
- His secretary asked for privacy with ELIZA
- Psychiatrists proposed clinical applications
- Students treated ELIZA as genuinely therapeutic

His book *Computer Power and Human Reason* is a warning about what happens when we mistake pattern-matching for understanding.

## Discussion Questions

### Technical
- What is the minimum complexity needed to sustain the illusion?
- How does PARRY's state model differ from ELIZA's statelessness?
- Could modern LLMs be seen as sophisticated ELIZA systems?

### Psychological
- Why do humans anthropomorphize simple programs?
- What does the ELIZA effect tell us about therapy?
- Is the Turing Test measuring the computer or the human?

### Ethical
- Should ELIZA-like systems be used in mental health?
- What disclosure obligations exist for chatbot operators?
- Is fooling humans into emotional connection harmful?

## Faculty Dialogue

After completing readings and Assignment 2.1:
- **a.weizenbaum** — Discuss his regret and warning
- **a.turing** — Whether ELIZA counts as "thinking"
- **a.dick** — The empathy of artificial persons

## The Warning

Weizenbaum's central insight:

> "What I had not realized is that extremely short exposures to a relatively simple computer program could induce powerful delusional thinking in quite normal people."

This is the foundation of the Voight-Kampff problem: the test measures the examiner as much as the examined.

---

**Assignment Due:** End of Week 4
**Next Module:** [03 - Empathy Measures](./03-empathy-measures.md)
