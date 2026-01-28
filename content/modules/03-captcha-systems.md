# Module 03: CAPTCHA Systems

## Week 5-6 | The Automated Turing Test

## Overview

CAPTCHA — "Completely Automated Public Turing test to tell Computers and Humans Apart" — is the most widely deployed humanity test in history. Billions of people prove their humanity daily through these challenges. In this module, we build our own, study how they fail, and question why this ritual exists.

## Learning Objectives

- [ ] Understand the evolution of CAPTCHA systems
- [ ] Implement text-based and image-based challenges
- [ ] Analyze the accessibility vs. security tradeoff
- [ ] Critique the political economy of automated testing

## Reading Assignment

**Primary:**
- von Ahn, L. et al. (2003). "CAPTCHA: Using Hard AI Problems for Security."
- Bursztein, E. et al. (2014). "The End is Nigh: Generic Solving of Text-based CAPTCHAs."

**Secondary:**
- W3C. "Inaccessibility of CAPTCHA" (Web Accessibility Initiative)
- Cloudflare. "Turnstile: A user-friendly, privacy-preserving alternative to CAPTCHA"

## The History of Proving You're Human

### The Problem (1999-2003)
Early web forms were flooded by bots. Spam, fraud, ticket scalping. The solution: make humans do something "easy for humans, hard for computers."

### Generation 1: Distorted Text (2000-2010)
```
[̶̡͇̗̙̼̟͙̱̲̳̞̌͂̇̆̐͊̑̇̚W̸̛̳̩͇̱̹̋̔̈́̏̉̆̚2̵̢͔͇͎̘̣̥̮̈́͛̒̉̋̀̀͝d̶̰̼̺̦̱̫͇̻̾̇̿̓̂͜͠K̵͎̠̘̤̈́̾͌̾̕͜7̶̧̹̰̞͙͓̀̈̏͛́̀̚]
```
- OCR was weak
- Humans could read distorted text
- Assumption: OCR was "hard AI"

**Why it failed:** Deep learning made OCR trivial. By 2014, neural networks broke text CAPTCHAs at >99% accuracy.

### Generation 2: Image Classification (2010-2020)
```
"Select all images with traffic lights"
[Grid of 9 images]
```
- Leveraged ImageNet-hard problems
- Also trained Google's self-driving car
- Free labor, packaged as security

**Why it failed:** Image classifiers got good. Adversarial services emerged ($2-3 per 1000 solves).

### Generation 3: Behavioral Analysis (2018-present)
```
reCAPTCHA v3: No visible challenge
Turnstile: "Just checking..."
```
- Analyzes mouse movement, timing, browsing history
- Risk score, not binary pass/fail
- You're always being tested; you just don't see it

**What this reveals:** The test moved from explicit challenge to invisible surveillance.

## Technical Implementation

### Assignment 3.1: Text CAPTCHA Generator

Build a system that generates distorted text challenges.

```python
from PIL import Image, ImageDraw, ImageFont
import random

class TextCaptchaGenerator:
    def __init__(self, width=200, height=60):
        self.width = width
        self.height = height
        self.fonts = []  # Load fonts
    
    def generate(self, length=6) -> tuple[Image.Image, str]:
        """
        Generate a CAPTCHA image and return (image, solution).
        
        Requirements:
        - Random alphanumeric string
        - Distorted/rotated characters
        - Background noise (lines, dots)
        - Variable fonts and sizes
        """
        pass
    
    def add_noise(self, image: Image.Image) -> Image.Image:
        """Add visual noise to make OCR harder."""
        pass
    
    def distort_character(self, char: str, font) -> Image.Image:
        """Render a single character with random distortion."""
        pass
```

**Deliverable:** Generator that produces 1000 unique CAPTCHAs. Include 100 samples in submission.

### Assignment 3.2: Image CAPTCHA System

Build an image-selection challenge.

```python
class ImageCaptchaGenerator:
    def __init__(self, image_dataset_path: str):
        self.images = {}  # category -> list of images
        self.load_dataset(image_dataset_path)
    
    def generate_challenge(self, 
                          target_category: str,
                          grid_size: int = 9) -> dict:
        """
        Generate an image selection challenge.
        
        Returns:
        {
            "prompt": "Select all images with traffic lights",
            "images": [Image, Image, ...],  # grid_size images
            "solution": [0, 3, 7],  # indices of correct images
            "difficulty": "medium"
        }
        """
        pass
    
    def verify_response(self, 
                       challenge: dict, 
                       selected_indices: list[int]) -> bool:
        """
        Verify user's selection.
        
        Consider:
        - Exact match vs. partial credit?
        - Edge cases (ambiguous images)?
        - Timeout?
        """
        pass
```

**Dataset:** Use a subset of ImageNet or CIFAR-100. Document your categories.

### Assignment 3.3: Accessibility Analysis

Write a 1500-word analysis addressing:

1. **Audit 3 Commercial Systems**
   - reCAPTCHA v2/v3
   - hCaptcha
   - Cloudflare Turnstile
   
2. **For Each:**
   - How does it handle screen readers?
   - What about motor impairments?
   - Cognitive accessibility?
   - Audio alternatives — are they actually usable?

3. **The Fundamental Tension**
   - If it's accessible to humans with disabilities...
   - ...is it also accessible to bots?
   - Is there a solution, or is this inherent?

4. **Propose an Alternative**
   - Design a challenge that is:
     - Accessible to users with disabilities
     - Resistant to automated solving
     - Privacy-preserving
   - Or argue why this is impossible

## The Political Economy of CAPTCHA

### Who Benefits?

| Actor | Benefit |
|-------|---------|
| **Website owners** | Reduced spam/fraud |
| **Google/Cloudflare** | Free training data |
| **Security researchers** | Employment |
| **CAPTCHA-solving services** | $1B+ industry |
| **Users** | ...security? |

### The reCAPTCHA Deal

When you solve a reCAPTCHA, you are:
1. Proving you're human (the stated purpose)
2. Training Google's AI (unstated)
3. Being tracked across the web (unstated)
4. Subsidizing Google's products (unstated)

Is this a fair exchange?

### The Invisible Test

reCAPTCHA v3 and Turnstile have no visible challenge. They assign a "humanity score" based on:
- Browser fingerprint
- Mouse movement patterns
- Browsing history
- Time on page
- Network characteristics

You are being tested constantly. You just don't know it.

## Discussion Questions

### Technical
- Can any challenge remain "hard for computers" as AI improves?
- What is the half-life of a CAPTCHA design?
- Is behavioral biometrics the inevitable endpoint?

### Ethical
- Should users know when they're being tested?
- Is invisible testing more or less invasive than explicit challenges?
- Who should own the training data generated by CAPTCHA solving?

### Political
- CAPTCHAs discriminate against users with disabilities. Is this acceptable collateral damage?
- Is there a right to access the web anonymously?
- What happens when bots are better than humans at all challenges?

### Design
- Could a CAPTCHA be designed that doesn't degrade accessibility?
- What if we tested for something other than visual/motor skills?
- Is there a "fair" CAPTCHA?

## The Voight-Kampff Connection

Dick's Voight-Kampff and CAPTCHA share a structure:
- An institution needs to distinguish humans from machines
- A test is designed based on current assumptions about machine limitations
- The test works until machines improve
- The test is redesigned, the cycle repeats

**Key difference:** Voight-Kampff tests empathy. CAPTCHA tests pattern recognition.

What would a CAPTCHA that tests empathy look like?

## Faculty Dialogue

After completing readings and Assignment 3.1:
- **a.turing** — Is CAPTCHA a Turing Test in reverse?
- **a.weizenbaum** — The ethics of systems that test humanity
- **a.foucault** — CAPTCHA as disciplinary technology

## Resources

### Datasets
- CIFAR-100: https://www.cs.toronto.edu/~kriz/cifar.html
- ImageNet (subset): Request access via course
- CAPTCHA breaking datasets: [links in starter repo]

### Libraries
- Pillow (image generation)
- OpenCV (image processing)
- captcha (Python library)

### Papers
- All readings available in course shared drive
- Additional papers in `/readings/module-03/`

---

**Assignment Due:** End of Week 6
**Next Module:** [04 - Empathy Measures](./04-empathy-measures.md)
