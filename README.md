# Open-weight models for data analysis

A static, no-tracking field guide to open-weight (and a few truly open-source) models that are useful for data analysis: SQL/pandas code generation, tabular reasoning, math, tool use, and long context.

**Last updated:** 26 November 2026

Live site (GitHub Pages, once enabled): see the repository Pages URL.

## What’s in the guide

- Country of origin, developer, release date, parameter counts
- License (OSI vs custom open-weight, including MaaS revenue thresholds)
- Sourced benchmarks — primarily [Plotly DataAnalyticsBench](https://plotly.com/blog/introducing-dataanalyticsbench/) (updated 25 Nov 2026) plus official model-card figures. Missing numbers are marked **n/a**, never invented
- Install commands (Ollama, vLLM/SGLang, Hugging Face)
- Hardware / VRAM notes and approximate cloud GPU prices
- How much data a model can handle, and the agentic DuckDB/SQL pattern that lifts the limit off the context window
- A candid “safe to use” section (privacy, licenses, country-of-origin policy, safetensors, sandboxing)
- [Build on these models](build.html): a beginner guide to RAG, LoRA/QLoRA fine-tuning, and training from scratch, with a glossary, a “which approach” table, and copy-paste commands checked against official docs on 26 November 2026

## Run locally

This is a static site. Any web server works:

```bash
cd docs   # or the repository root, depending on how Pages is configured
python3 -m http.server 8080
```

Then open http://localhost:8080

## Maintainers

Scores and licenses change quickly. Before editing a card, re-fetch the official Hugging Face model card and LICENSE file. Do not copy benchmark numbers from memory or from unverified social posts.

## License of this repository

The guide text and site code in this repository are offered under the [MIT License](LICENSE). Third-party model names, trademarks, benchmark figures and excerpts remain the property of their respective owners.
