# Module 05: LLM Detection

## Week 9-10 | Detecting Machine-Generated Text

## Overview

The modern Voight-Kampff problem: distinguishing human-written text from LLM output. This is the contemporary manifestation of the Turing Test—and it may be unsolvable.

## Learning Objectives

- [ ] Understand the statistical properties of LLM-generated text
- [ ] Implement detection methods (statistical and ML-based)
- [ ] Analyze why detection is fundamentally difficult
- [ ] Examine the implications of unreliable detection

## Reading Assignment

**Primary:**
- Mitchell, E. et al. (2023). "DetectGPT: Zero-Shot Machine-Generated Text Detection."
- Kirchner, J. et al. (2023). "New AI classifier for indicating AI-written text."
- Sadasivan, V. et al. (2023). "Can AI-Generated Text be Reliably Detected?"

**Secondary:**
- Gehrmann, S. et al. (2019). "GLTR: Statistical Detection of Generated Text."
- Papers on watermarking approaches (Kirchenbauer et al., 2023)

## The Detection Problem

### Why It Matters
- Academic integrity
- Journalism authenticity
- Legal document provenance
- Democratic discourse

### Why It's Hard
- LLMs are trained on human text (distribution overlap)
- Detection becomes training signal for improvement
- Paraphrasing defeats most detectors
- False positive cost is high

### Current Approaches

| Method | Principle | Weakness |
|--------|-----------|----------|
| Statistical | Token probability analysis | Paraphrase defeats |
| Perplexity | LLM "surprise" at text | Model-dependent |
| Stylometric | Writing style analysis | Humans vary too |
| Watermarking | Hidden statistical signal | Requires cooperation |
| Zero-shot | Compare to model outputs | Arms race |

## Technical Implementation

### Assignment 5.1: Statistical Detector
Build a statistical LLM detection system.

```python
class LLMDetector:
    def __init__(self, reference_model: str = "gpt2"):
        self.tokenizer = None
        self.model = None
        self.load_model(reference_model)
    
    def load_model(self, model_name: str):
        """Load reference language model for perplexity computation."""
        pass
    
    def compute_perplexity(self, text: str) -> float:
        """
        Compute perplexity of text under reference model.
        Lower perplexity = more "expected" = more likely machine-generated
        
        Note: This is inverted from the intuition that 
        "surprising" = human. LLMs produce low-perplexity text.
        """
        pass
    
    def compute_burstiness(self, text: str) -> float:
        """
        Compute burstiness of token probabilities.
        
        Human text shows more variance in "surprise" levels.
        LLM text is more uniformly probable.
        """
        pass
    
    def detect_gpt(self, text: str, perturbation_count: int = 100) -> dict:
        """
        DetectGPT approach:
        1. Generate perturbations of the text
        2. Compare log probabilities
        3. Machine text shows characteristic curvature
        
        Returns:
        - score: float (probability of machine generation)
        - confidence: float
        - perturbation_analysis: dict
        """
        pass
    
    def stylometric_features(self, text: str) -> dict:
        """
        Extract stylometric features:
        - Sentence length distribution
        - Vocabulary richness
        - Function word frequency
        - Punctuation patterns
        - Paragraph structure
        """
        pass
    
    def ensemble_predict(self, text: str) -> dict:
        """
        Combine multiple detection methods.
        
        Returns:
        - prediction: str ('human' | 'machine' | 'uncertain')
        - confidence: float
        - method_scores: dict
        - explanation: str
        """
        pass
```

### Assignment 5.2: Adversarial Evaluation
Test your detector's robustness:

1. Generate 20 texts with different LLMs (GPT-4, Claude, Llama, etc.)
2. Apply various evasion techniques:
   - Paraphrasing
   - Adding deliberate errors
   - Style transfer
   - Sentence shuffling
3. Document detection rates before/after evasion
4. Analyze which techniques are most effective

### Assignment 5.3: The Impossibility Argument
Write a 1500-word essay addressing:

1. Is reliable LLM detection theoretically possible?
2. What are the fundamental limits?
3. What should institutions do given unreliable detection?
4. How does this relate to the Voight-Kampff's limitations?

## The Arms Race

### Detection → Evasion → Detection
Every detection method creates pressure for evasion:
1. Statistical detection → LLMs trained to vary token probabilities
2. Stylometric detection → LLMs trained to mimic human style variation
3. Watermarking → Open-source models without watermarks

### The Convergence Problem
As LLMs improve, their output distribution converges with human text distribution. At the limit, detection becomes impossible by definition.

### What Remains
If statistical detection fails, what's left?
- Provenance tracking (who wrote when)
- Process verification (witnessed creation)
- Trust networks (reputation systems)
- Accepting uncertainty

## Discussion Questions

### Technical
- Is there an information-theoretic limit to detection accuracy?
- What role should calibration play in detection systems?
- How do you handle the base rate problem?

### Institutional
- Should schools use detection tools with known false positive rates?
- What is the appropriate standard of evidence?
- How do you handle accusations based on probabilistic detection?

### Philosophical
- If detection is impossible, does authorship still matter?
- What is the value of human-written text if it can't be verified?
- How does this change education, journalism, law?

## Faculty Dialogue

After completing readings and Assignment 5.1:
- **a.turing** — The modern Turing Test
- **a.shannon** — Information-theoretic limits of detection
- **a.weizenbaum** — Whether the distinction matters

## The Voight-Kampff's Failure Mode

In Dick's novel, Rachael Rosen's test is complicated by:
- Implanted memories creating genuine responses
- Corporate optimization for test performance
- The examiner's own uncertainty

LLM detection faces the same problems:
- Training on human text creates genuine statistical overlap
- Commercial optimization for human-likeness
- The detector's fundamental uncertainty

The test may fail not because the machine becomes human, but because the distinction becomes unmeasurable.

---

**Assignment Due:** End of Week 10
**Next Module:** [06 - Your Test](./06-your-test.md)
