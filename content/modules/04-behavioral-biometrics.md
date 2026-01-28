# Module 04: Behavioral Biometrics

## Week 7-8 | Keystroke Dynamics & Behavioral Patterns

## Overview

Modern humanity verification increasingly relies on behavioral biometrics: how you type, move your mouse, hold your phone. This module examines these systems as implicit Voight-Kampff tests running continuously in the background.

## Learning Objectives

- [ ] Understand behavioral biometric principles
- [ ] Implement a keystroke dynamics analyzer
- [ ] Analyze the assumptions embedded in behavioral verification
- [ ] Examine the surveillance implications of continuous authentication

## Reading Assignment

**Primary:**
- Monrose, F. & Rubin, A. (2000). "Keystroke Dynamics as a Biometric for Authentication."
- Antal, M. et al. (2015). "Mouse Dynamics Biometric Authentication."
- Zhu, T. et al. (2017). "Gait Recognition from Mobile Phone Sensors."

**Secondary:**
- Nissenbaum, H. (2010). *Privacy in Context*, Chapter 4.
- Zuboff, S. (2019). *The Age of Surveillance Capitalism*, Chapter 8.

## The Behavioral Signature

### What Behavioral Biometrics Measure
- **Keystroke dynamics**: Timing between key presses and releases
- **Mouse movements**: Velocity, curvature, hesitation patterns
- **Touch patterns**: Pressure, swipe gesture characteristics
- **Gait analysis**: Walking rhythm from accelerometer data
- **Voice patterns**: Speaking rhythm, intonation, pauses

### Why They Work
Every person has idiosyncratic motor patterns:
- Habitual timing rhythms
- Characteristic hesitations
- Learned automaticities
- Physical constraints (finger length, hand size)

### Why They Fail
- Fatigue, illness, intoxication alter patterns
- Context affects behavior (new keyboard, stress)
- Patterns can be learned and mimicked
- Training data may not represent actual population

## Technical Implementation

### Assignment 4.1: Keystroke Dynamics System
Build a keystroke dynamics authentication system.

```python
class KeystrokeDynamics:
    def __init__(self):
        self.user_profiles = {}
        self.features = ['dwell_time', 'flight_time', 'digraph_latency']
    
    def record_typing(self, user_id: str, text: str, events: list[dict]):
        """
        Record keystroke events during typing.
        
        Events format:
        {'key': 'a', 'event': 'press', 'timestamp': 1234567.890}
        {'key': 'a', 'event': 'release', 'timestamp': 1234567.920}
        """
        pass
    
    def extract_features(self, events: list[dict]) -> dict:
        """
        Extract timing features:
        - dwell_time: How long each key is held
        - flight_time: Time between releasing one key and pressing next
        - digraph_latency: Time between specific two-key combinations
        - typing_speed: Characters per second
        - error_rate: Backspace frequency
        """
        pass
    
    def build_profile(self, user_id: str, samples: list[dict]) -> dict:
        """Build statistical profile from multiple typing samples."""
        pass
    
    def authenticate(self, claimed_id: str, sample: dict) -> dict:
        """
        Compare typing sample against claimed identity.
        
        Returns:
        - match_score: float (0-1)
        - confidence: float
        - anomalies: list of deviations from profile
        """
        pass
    
    def detect_bot(self, sample: dict) -> dict:
        """
        Detect automated/scripted typing.
        
        Bot indicators:
        - Too consistent timing
        - No errors
        - Unnatural patterns
        """
        pass
```

### Assignment 4.2: Data Collection & Analysis
Collect your own keystroke data:

1. Record yourself typing 10 different texts (minimum 100 chars each)
2. Vary conditions: morning/night, focused/distracted
3. Build your own profile
4. Test against yourself under different conditions
5. Document false rejection rate

### Assignment 4.3: Evasion Analysis
Explore the limits of behavioral biometrics:

1. Research known evasion techniques
2. Attempt to modify your typing pattern to evade your profile
3. Document what succeeded and what failed
4. Analyze implications for security assumptions

## The Continuous Voight-Kampff

### Implicit Testing
Traditional biometrics authenticate at a point in time. Behavioral biometrics authenticate continuously—every keystroke, every mouse movement is a test.

### What This Means
- No explicit consent for each test
- Constant surveillance as authentication
- Behavioral deviation as suspicion
- The machine becomes the examiner

### Philosophical Implications
If your behavioral signature is your identity:
- What happens when you're not "yourself"?
- Can your identity be stolen by mimicking behavior?
- Does constant testing change behavior?

## Discussion Questions

### Technical
- What is the theoretical minimum data needed to identify someone?
- How do you handle legitimate behavioral change (injury, aging)?
- Can LLMs generate humanlike behavioral signatures?

### Privacy
- Should users know when they're being behaviorally monitored?
- Who owns your behavioral data?
- What recourse exists for false rejections?

### Power
- Who decides what "normal" behavior looks like?
- How do behavioral systems encode ableism?
- What happens to neurodivergent users?

## Faculty Dialogue

After completing readings and Assignment 4.1:
- **a.foucault-soci** — The panopticon of continuous authentication
- **a.shannon** — Information content of behavioral patterns
- **a.turing** — Whether behavioral imitation constitutes identity

## The Examiner Never Sleeps

In Dick's world, the Voight-Kampff examiner is a person who administers a discrete test. In our world, the examiner is algorithmic, continuous, invisible.

You are being tested right now.

---

**Assignment Due:** End of Week 8
**Next Module:** [05 - LLM Detection](./05-llm-detection.md)
