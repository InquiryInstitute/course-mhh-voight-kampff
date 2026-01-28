# Season 1: Technical Setup Guide

This guide will help you set up your development environment for Season 1. Complete this **before Week 1 begins**.

---

## Quick Start (Experienced Developers)

```bash
# Clone starter repo
git clone https://github.com/InquiryInstitute/course-mhh-voight-kampff-starter.git
cd course-mhh-voight-kampff-starter

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Verify installation
python -c "import numpy; import sklearn; import transformers; print('Setup complete!')"
```

---

## Detailed Setup

### 1. Python Installation

**Required:** Python 3.10 or higher

#### Check Your Version
```bash
python3 --version
```

#### Install Python (if needed)

**macOS:**
```bash
brew install python@3.11
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install python3.11 python3.11-venv
```

**Windows:**
Download from [python.org](https://www.python.org/downloads/) and run installer.
- ✅ Check "Add Python to PATH"
- ✅ Check "Install pip"

---

### 2. Clone the Starter Repository

```bash
git clone https://github.com/InquiryInstitute/course-mhh-voight-kampff-starter.git
cd course-mhh-voight-kampff-starter
```

**Repository Structure:**
```
course-mhh-voight-kampff-starter/
├── README.md
├── requirements.txt
├── module-01-turing/
│   ├── starter.py
│   ├── tests/
│   └── data/
├── module-02-eliza/
│   ├── starter.py
│   └── tests/
├── module-03-captcha/
│   ├── starter.py
│   └── tests/
├── module-04-empathy/
│   ├── starter.py
│   └── tests/
├── module-05-biometrics/
│   ├── starter.py
│   └── tests/
├── module-06-llm-detection/
│   ├── starter.py
│   └── tests/
└── module-07-your-test/
    └── template.md
```

---

### 3. Virtual Environment

**Always use a virtual environment** to avoid dependency conflicts.

```bash
# Create virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate  # macOS/Linux
# or
venv\Scripts\activate     # Windows
```

Your prompt should now show `(venv)` at the beginning.

**To deactivate later:**
```bash
deactivate
```

---

### 4. Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

**Core Dependencies:**
```
numpy>=1.24.0
pandas>=2.0.0
scikit-learn>=1.3.0
transformers>=4.35.0
torch>=2.0.0
nltk>=3.8.0
matplotlib>=3.7.0
seaborn>=0.12.0
jupyter>=1.0.0
pytest>=7.4.0
black>=23.0.0
```

**Module-Specific:**
```
# Module 3: CAPTCHA
pillow>=10.0.0
captcha>=0.4

# Module 4: Empathy
opencv-python>=4.8.0

# Module 5: Biometrics
pynput>=1.7.0

# Module 6: LLM Detection
openai>=1.0.0
tiktoken>=0.5.0
```

---

### 5. Verify Installation

Run the verification script:

```bash
python verify_setup.py
```

Expected output:
```
✓ Python 3.11.0
✓ numpy 1.24.3
✓ pandas 2.0.3
✓ scikit-learn 1.3.0
✓ transformers 4.35.0
✓ torch 2.1.0
✓ All checks passed! You're ready for Season 1.
```

---

### 6. IDE Setup

We recommend **VS Code** with these extensions:

- Python (Microsoft)
- Pylance
- Jupyter
- GitLens

**Alternative IDEs:**
- PyCharm (Community or Professional)
- Cursor (you're probably already here!)

#### VS Code Settings

Create `.vscode/settings.json` in your project:

```json
{
  "python.defaultInterpreterPath": "./venv/bin/python",
  "python.formatting.provider": "black",
  "editor.formatOnSave": true,
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": false,
  "python.linting.flake8Enabled": true
}
```

---

### 7. GitHub Classroom

All assignments are submitted via GitHub Classroom.

#### First-Time Setup

1. **Accept the classroom invitation** (link sent via email)
2. This creates your personal assignment repository
3. Clone your assignment repo (not the starter repo)

```bash
git clone https://github.com/InquiryInstitute-S1/module-01-YOUR-USERNAME.git
```

#### Submission Workflow

```bash
# Make changes
git add .
git commit -m "Complete assignment 1.1"
git push origin main
```

Submissions are timestamped by the push time. Autograder runs on push.

#### Getting Updates

If we update the starter code:
```bash
git remote add upstream https://github.com/InquiryInstitute/course-mhh-voight-kampff-starter.git
git fetch upstream
git merge upstream/main
```

---

### 8. Running Tests

Each module includes tests. Run them to verify your implementation:

```bash
# Run all tests for a module
pytest module-01-turing/tests/

# Run a specific test
pytest module-01-turing/tests/test_classifier.py

# Run with verbose output
pytest -v module-01-turing/tests/

# Run with coverage
pytest --cov=module-01-turing module-01-turing/tests/
```

---

### 9. Jupyter Notebooks

Some exploration is done in notebooks:

```bash
# Start Jupyter
jupyter notebook

# Or use Jupyter Lab
jupyter lab
```

Notebooks are in `notebooks/` within each module folder.

---

## Troubleshooting

### "Command not found: python3"

**macOS:** Install via Homebrew: `brew install python`  
**Windows:** Reinstall Python, ensure "Add to PATH" is checked

### "pip install fails with permission error"

You're not in a virtual environment. Run:
```bash
source venv/bin/activate
```

### "torch installation fails"

For CPU-only (if you don't have a GPU):
```bash
pip install torch --index-url https://download.pytorch.org/whl/cpu
```

### "transformers download is slow"

Models are cached after first download. First run of each module may be slow.

### "Module not found" errors

Ensure your virtual environment is activated and you ran `pip install -r requirements.txt`.

### GitHub Classroom issues

1. Make sure you accepted the invitation
2. Check you're pushing to the correct repository
3. Contact us on Matrix if issues persist

---

## Getting Help

1. **Check this guide** first
2. **Search the Matrix channel** — your question may be answered
3. **Post in #tech-support** on Matrix
4. **Office hours** — Thursdays 4-6 PM Pacific

---

## Optional: GPU Setup

If you have an NVIDIA GPU and want faster training:

```bash
# Check CUDA version
nvidia-smi

# Install PyTorch with CUDA support
pip install torch --index-url https://download.pytorch.org/whl/cu118
```

GPU is **not required** for Season 1. All assignments are designed to run on CPU.

---

## Checklist

Before Week 1, verify:

- [ ] Python 3.10+ installed
- [ ] Virtual environment created and activated
- [ ] All dependencies installed (`pip install -r requirements.txt`)
- [ ] Verification script passes
- [ ] IDE set up with Python extension
- [ ] GitHub account connected to GitHub Classroom
- [ ] Can clone and push to your assignment repository
- [ ] Matrix account created and joined #s1-voight-kampff

**You're ready for Season 1!**
