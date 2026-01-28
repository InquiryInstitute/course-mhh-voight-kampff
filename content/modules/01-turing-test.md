# Module 01: The Turing Test

## Week 1-2 | System Study & Implementation

## Overview

Alan Turing's 1950 paper "Computing Machinery and Intelligence" proposed the "imitation game" as a test for machine intelligence. We begin here because it is the ur-test—the foundation upon which all subsequent humanity tests are built.

## Learning Objectives

- [ ] Understand Turing's original formulation and its context
- [ ] Analyze the test's assumptions about intelligence and humanity
- [ ] Implement a conversation evaluation classifier
- [ ] Critique the test's limitations from multiple perspectives

## Reading Assignment

**Primary:**
- Turing, A. (1950). "Computing Machinery and Intelligence." *Mind*, 59(236), 433-460.
- Weizenbaum, J. (1976). *Computer Power and Human Reason*, Chapter 1-2.

**Secondary:**
- French, R. (1990). "Subcognition and the Limits of the Turing Test."
- Searle, J. (1980). "Minds, Brains, and Programs." (The Chinese Room)

## The Test as Specified

### Original Formulation
1. Human interrogator (C) communicates via text with two respondents
2. One respondent is human (A), one is machine (B)
3. Machine's goal: convince C it is human
4. Human's goal: convince C it is human
5. Success: machine fools interrogator at rate comparable to human

### Key Design Choices
- **Modality**: Text-only (removes physical cues)
- **Duration**: Unspecified (5 minutes? 5 hours?)
- **Evaluation**: Binary classification by human judge
- **Criteria**: Implicit—whatever convinces the interrogator

## Technical Implementation

### Assignment 1.1: Conversation Corpus Analysis
Build a classifier that distinguishes human-human conversations from human-machine conversations.

```python
# Starter framework
class ConversationClassifier:
    def __init__(self):
        self.features = []
        self.model = None
    
    def extract_features(self, conversation: list[dict]) -> dict:
        """
        Extract features from a conversation transcript.
        
        Features to consider:
        - Response latency patterns
        - Vocabulary diversity
        - Coherence across turns
        - Topic drift patterns
        - Error patterns (typos, corrections)
        - Pragmatic markers (hedging, politeness)
        """
        pass
    
    def train(self, labeled_conversations: list[tuple[list, int]]):
        """Train on labeled conversation data."""
        pass
    
    def predict(self, conversation: list[dict]) -> float:
        """Return probability that conversation involves a machine."""
        pass
```

### Assignment 1.2: Interrogator Strategy
Design and document an interrogation strategy for the Turing Test.

**Requirements:**
- 10 questions minimum
- Rationale for each question
- Expected human vs. machine response patterns
- Scoring rubric

### Assignment 1.3: Critical Analysis
Write a 1500-word analysis addressing:
1. What does the Turing Test actually measure?
2. What assumptions does it embed about intelligence?
3. How would you modify it to test for something different?

## Discussion Questions

### Philosophical
- Is imitation sufficient for intelligence?
- Does passing the test prove anything about consciousness?
- What does "thinking" mean in Turing's formulation?

### Technical
- Why text-only? What is lost and gained?
- How long must the test run to be meaningful?
- What training data would optimize a machine for passing?

### Political
- Who administers the test? Who is tested?
- What are the consequences of passing or failing?
- How does the test encode cultural assumptions?

## Faculty Dialogue

After completing readings and Assignment 1.1:
- **a.turing** — Discuss the original formulation and intent
- **a.weizenbaum** — Explore ELIZA's unexpected success
- **a.searle** — Debate the Chinese Room objection

## Historical Context

### The Imitation Game's Origins
Turing's paper was written in 1950, before:
- The term "artificial intelligence" (1956)
- Any working chatbot
- The internet
- Neural networks (as we know them)

He anticipated objections we still debate:
- The theological objection
- The "heads in the sand" objection  
- Lady Lovelace's objection
- The argument from consciousness

### Why It Persists
Despite decades of critique, the Turing Test remains the default frame for AI evaluation because:
1. It requires no theory of mind
2. It is operationally simple
3. It appeals to common sense
4. No better alternative has achieved consensus

## Peer Review Focus

When reviewing peer submissions for this module:
- Does the classifier use principled feature selection?
- Is the interrogation strategy grounded in theory?
- Does the analysis engage with the readings?
- Are limitations acknowledged?

---

**Assignment Due:** End of Week 2
**Next Module:** [02 - ELIZA and PARRY](./02-eliza-parry.md)
