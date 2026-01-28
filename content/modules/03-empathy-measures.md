# Module 03: Empathy Measures

## Week 5-6 | Affective Computing & Emotion Detection

## Overview

The Voight-Kampff test measures empathic response to emotionally charged scenarios. In this module, we examine real-world attempts to measure empathy and emotion—and what they actually detect.

## Learning Objectives

- [ ] Understand the theoretical foundations of empathy measurement
- [ ] Implement basic affective computing metrics
- [ ] Analyze the gap between measured signals and actual emotion
- [ ] Critique the use of emotion detection in institutional settings

## Reading Assignment

**Primary:**
- Baron-Cohen, S. (2001). "The Reading the Mind in the Eyes Test."
- Picard, R. (1997). *Affective Computing*, Chapters 1-4.
- Ekman, P. (1992). "Are There Basic Emotions?"

**Secondary:**
- Barrett, L.F. (2017). "The Theory of Constructed Emotion."
- Crawford, K. (2021). *Atlas of AI*, Chapter 5 (Affect).

## Empathy: The Measurement Problem

### What Is Empathy?
- **Cognitive empathy**: Understanding another's mental state
- **Affective empathy**: Feeling what another feels
- **Compassionate empathy**: Motivation to help

Each requires different measurement approaches. The Voight-Kampff conflates them.

### Historical Attempts

| Test | Measures | Method |
|------|----------|--------|
| Eyes Test (Baron-Cohen) | Cognitive empathy | Photo interpretation |
| IRI (Davis) | Multiple dimensions | Self-report questionnaire |
| Facial EMG | Affective mirroring | Muscle activity |
| Skin conductance | Arousal | Galvanic response |

## Technical Implementation

### Assignment 3.1: Physiological Response Analyzer
Build a system that analyzes physiological signals for emotional arousal.

```python
class PhysiologicalAnalyzer:
    def __init__(self):
        self.baseline = None
        self.thresholds = {}
    
    def calibrate(self, baseline_data: dict):
        """
        Establish baseline readings for:
        - Heart rate variability
        - Skin conductance level
        - Pupil dilation (if available)
        - Response latency
        """
        pass
    
    def analyze_response(self, 
                         stimulus: str,
                         response_data: dict,
                         response_latency: float) -> dict:
        """
        Analyze physiological response to a stimulus.
        
        Returns:
        - arousal_score: float (deviation from baseline)
        - valence_estimate: float (positive/negative)
        - confidence: float
        - anomaly_flags: list
        """
        pass
    
    def voight_kampff_score(self, 
                            scenario_responses: list[dict]) -> dict:
        """
        Compute aggregate Voight-Kampff-style score.
        
        Consider:
        - Response pattern across scenarios
        - Consistency of emotional valence
        - Latency distribution
        - Physiological coherence
        """
        pass
```

### Assignment 3.2: Empathy Questionnaire Analysis
Analyze the Interpersonal Reactivity Index (IRI) questionnaire:

1. Obtain and complete the IRI yourself
2. Map each question to empathy dimension
3. Identify cultural/contextual assumptions
4. Propose 5 alternative questions

### Assignment 3.3: Emotion Detection Critique
Write a 1500-word analysis of commercial emotion detection:

1. Select one commercial system (Affectiva, Microsoft Azure, etc.)
2. Document its claimed capabilities
3. Analyze the research it's based on
4. Critique its application in practice

## The Voight-Kampff Connection

Dick's Voight-Kampff measures:
- **Pupil dilation** (arousal)
- **Blush response** (embarrassment/guilt)
- **Response latency** (processing time)

These are the same signals modern affective computing attempts to capture. But what do they actually measure?

## The Gap Between Signal and Meaning

### What Physiological Signals Show
- Autonomic nervous system arousal
- Metabolic state changes
- Attention allocation

### What They Don't Show
- Specific emotion (fear vs. excitement)
- Cause of arousal
- Authenticity of feeling
- Moral evaluation

### The Fundamental Problem
A sociopath can exhibit appropriate physiological responses without experiencing empathy. A traumatized person may show blunted responses while feeling deeply.

The signal is not the emotion.

## Discussion Questions

### Scientific
- Can empathy be measured without self-report?
- What is the relationship between physiological arousal and felt emotion?
- Does the act of measurement change what is measured?

### Ethical
- Should emotion detection be used in hiring? Education? Border control?
- What recourse exists for false positives?
- Who owns the emotional data collected?

### Design
- How would you design a test that doesn't conflate signal and meaning?
- Is there an unfakeable physiological signature of empathy?
- What would a fair empathy test look like?

## Faculty Dialogue

After completing readings and Assignment 3.1:
- **a.weizenbaum** — The limits of computational approaches to emotion
- **a.foucault-soci** — Surveillance and the measurement of affect
- **a.arendt** — Empathy vs. judgment in moral evaluation

---

**Assignment Due:** End of Week 6
**Next Module:** [04 - Behavioral Biometrics](./04-behavioral-biometrics.md)
