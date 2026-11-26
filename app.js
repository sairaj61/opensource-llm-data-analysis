const MODELS = [
  {
    id: "kimi-k31-pro",
    name: "Kimi K3.1 Pro",
    developer: "Moonshot AI",
    country: "China",
    released: "2026-10-23",
    releasedNote: "Weights published 4 Nov 2026",
    params: "2.8T total / 104B active",
    paramsSort: 2800,
    license: "Kimi K3.1-Pro License",
    licenseKind: "custom",
    licenseNote: "Open-weight, not OSI. Internal use is free. MaaS providers over US$20M trailing-12-month revenue need a separate Moonshot agreement. Products over 100M MAU or US$20M monthly revenue must display “Kimi K3.1-Pro”.",
    commercial: "Yes, with MaaS/attribution thresholds",
    context: "1,048,576 tokens",
    contextSort: 1048576,
    dab: 42,
    headline: "DataAnalyticsBench 42/43 (tied best open-weight)",
    benches: [
      { name: "DataAnalyticsBench", score: "42/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" }
    ],
    install: {
      ollama: "Not listed as a local Ollama library model as of 26 Nov 2026. Prefer official Hugging Face weights + vLLM / SGLang on a GPU server.",
      commands: `# Hugging Face (official org)
huggingface-cli download moonshotai/Kimi-K3.1-Pro --local-dir Kimi-K3.1-Pro

# Serve with vLLM or SGLang once the official recipe for this checkpoint is installed.
# Weights are MXFP4 (quantization-aware trained), ~1.56 TB across 96 safetensors shards.`
    },
    infra: "Weights alone are about 1.56 TB (MXFP4). Plotly describes this as a GPU-server class model, not a workstation or Mac Studio job. Budget a multi-node or large NVLink server; exact consumer VRAM figures were not published on the model card.",
    dataNote: "1M-token context can hold a large schema, many query results, and long tool traces. Still run SQL/pandas on the warehouse, not inside the prompt.",
    links: {
      hf: "https://huggingface.co/moonshotai/Kimi-K3.1-Pro",
      license: "https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE"
    },
    tags: ["china", "frontier", "moe", "multimodal"]
  },
  {
    id: "hy4",
    name: "Hy4",
    developer: "Tencent Hy Team",
    country: "China",
    released: "2026-11-04",
    releasedNote: "Weights on Hugging Face by late November 2026 (repo updated 26 Nov 2026)",
    params: "770B backbone / 49B active (text)",
    paramsSort: 770,
    license: "Tencent Hy License 1.0",
    licenseKind: "custom",
    licenseNote: "Derived from Apache 2.0 but is not Apache 2.0. MaaS operators with >US$50M trailing-12-month gross revenue, or products with >100M MAU, need a separate written license. Internal use is exempt.",
    commercial: "Yes for ordinary internal/product use; large MaaS needs Tencent approval",
    context: "1,048,576 tokens",
    contextSort: 1048576,
    dab: 42,
    headline: "DataAnalyticsBench 42/43 (tied best open-weight; cheaper than Kimi on API)",
    benches: [
      { name: "DataAnalyticsBench", score: "42/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" },
      { name: "MMLU-Pro (Hy4 Base, 5-shot)", score: "73.9", source: "https://huggingface.co/tencent/Hy4", srcName: "Tencent model card (base model)" }
    ],
    install: {
      ollama: "No official local Ollama tag found on 26 Nov 2026. Use vLLM or SGLang from the model card.",
      commands: `# Official weights
huggingface-cli download tencent/Hy4 --local-dir Hy4
# FP8 variant also published: tencent/Hy4-FP8

# vLLM example from the model card (adjust tensor parallel to your GPU count)
vllm serve tencent/Hy4 \\
  --tp 8 \\
  --speculative-algorithm DFLY \\
  --port 8000 \\
  --served-model-name hy4`
    },
    infra: "Plotly estimates about 462 GB of memory at 4-bit — a DGX Station-class footprint, not a laptop. Multi-GPU / NVLink is required. The cheaper sibling, Hy4 flash, is the practical self-host option.",
    dataNote: "1M context and strong warehouse-agent scores. Prefer tool-executed SQL over stuffing tables into context.",
    links: {
      hf: "https://huggingface.co/tencent/Hy4",
      license: "https://huggingface.co/tencent/Hy4/raw/main/LICENSE"
    },
    tags: ["china", "frontier", "moe", "multimodal"]
  },
  {
    id: "minimax-m31-flash",
    name: "MiniMax M3.1 Flash",
    developer: "MiniMax",
    country: "China",
    released: "2026-10-19",
    releasedNote: "Weights followed on 23 Oct 2026",
    params: "~428B total / 23B active",
    paramsSort: 428,
    license: "MiniMax Community License",
    licenseKind: "custom",
    licenseNote: "Commercial use typically requires “Built with MiniMax M3.1-Flash” attribution. Products or services over US$20M annual revenue need prior written authorization. Read the official LICENSE before shipping.",
    commercial: "Yes below the revenue threshold, with attribution; above it, ask MiniMax",
    context: "1,048,576 tokens",
    contextSort: 1048576,
    dab: 41,
    headline: "DataAnalyticsBench 41/43 (found all five hidden-pattern questions)",
    benches: [
      { name: "DataAnalyticsBench", score: "41/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" }
    ],
    install: {
      ollama: "Prefer official local-deploy docs and Hugging Face weights; no verified local Ollama library tag on 26 Nov 2026.",
      commands: `huggingface-cli download MiniMaxAI/MiniMax-M3.1-Flash --local-dir MiniMax-M3.1-Flash
# Follow MiniMax local deploy guide:
# https://platform.minimax.io/docs/guides/local-deploy-m3-1-flash`
    },
    infra: "Plotly says this class of model can fit a 512 GB Mac Studio. Self-hosting on NVIDIA typically means a multi-GPU box. Active parameter count (23B) is much smaller than the 428B total, which helps decode cost once weights are loaded.",
    dataNote: "1M context; Plotly noted it used many queries per question while still scoring 41/43.",
    links: {
      hf: "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      docs: "https://platform.minimax.io/docs/guides/local-deploy-m3-1-flash"
    },
    tags: ["china", "frontier", "moe", "multimodal"]
  },
  {
    id: "inkling-2-small",
    name: "Inkling 2 Small",
    developer: "Thinking Machines Lab",
    country: "United States",
    released: "2026-11-09",
    releasedNote: "Weights announced available 12 Nov 2026",
    params: "594B total / 17B active",
    paramsSort: 594,
    license: "Apache 2.0 (plus acceptable-use policy)",
    licenseKind: "osi",
    licenseNote: "The 5 Nov 2026 announcement said weights would be released under Apache 2.0. Downstream write-ups also mention a Model Acceptable Use Policy. Read both on the official card before a commercial deployment.",
    commercial: "Yes under Apache 2.0; also follow the published AUP",
    context: "1,048,576 tokens",
    contextSort: 1048576,
    dab: 39,
    headline: "DataAnalyticsBench 39/43 — highest non-China open-weight score on that board",
    benches: [
      { name: "DataAnalyticsBench", score: "39/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" },
      { name: "GPQA Diamond (HF eval widget)", score: "93", source: "https://huggingface.co/thinkingmachines/Inkling-2-Small", srcName: "Hugging Face evaluation results on the model card" }
    ],
    install: {
      ollama: "No official local Ollama tag found on 26 Nov 2026. Official recipes cover SGLang, vLLM, TokenSpeed, and Unsloth.",
      commands: `huggingface-cli download thinkingmachines/Inkling-2-Small --local-dir Inkling-2-Small
# Then follow the official vLLM or SGLang recipe linked from the model card.`
    },
    infra: "Official card: NVFP4 checkpoint needs at least 500 GB aggregated VRAM (example: 2× NVIDIA B300 or 4× H200). MXFP8 needs about 800 GB (4× B300 or 8× H200). The model was trained in NVFP4; that is the recommended checkpoint.",
    dataNote: "1M context and native image input, useful for charts and screenshots alongside SQL tool use.",
    links: {
      hf: "https://huggingface.co/thinkingmachines/Inkling-2-Small",
      blog: "https://thinkingmachines.ai/news/inkling-2-small/"
    },
    tags: ["us", "frontier", "moe", "multimodal", "permissive"]
  },
  {
    id: "hy4-flash",
    name: "Hy4 flash",
    developer: "Tencent Hy Team",
    country: "China",
    released: "2026-11-16",
    releasedNote: "Weights, card and license published 18 Nov 2026",
    params: "220B total (model card) / ~12B active",
    paramsSort: 220,
    license: "Tencent Hy License 1.0",
    licenseKind: "custom",
    licenseNote: "Same family license as Hy4: not Apache 2.0. Large MaaS operators (US$50M revenue or 100M MAU) need a written Tencent license. Internal use is exempt.",
    commercial: "Yes for ordinary internal/product use; large MaaS needs Tencent approval",
    context: "1,048,576 tokens",
    contextSort: 1048576,
    dab: 39,
    headline: "DataAnalyticsBench 39/43 at US$0.13 per Plotly exam run — cheapest high-scoring open-weight API in that table",
    benches: [
      { name: "DataAnalyticsBench", score: "39/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" }
    ],
    install: {
      ollama: "No official local Ollama tag found on 26 Nov 2026. Use vLLM or SGLang; FP8 weights are published.",
      commands: `huggingface-cli download tencent/Hy4-flash --local-dir Hy4-flash
# Smaller FP8 build:
huggingface-cli download tencent/Hy4-flash-FP8 --local-dir Hy4-flash-FP8`
    },
    infra: "Standard weights are about 440.5 GB (148 shards); the official FP8 build is about 287.1 GB. Active compute is only ~12B parameters per token, but you still need a multi-GPU server to hold the weights. Far more practical than full Hy4 or Kimi K3.1 Pro.",
    dataNote: "Same 1M window as Hy4, with a much lower serving cost on Plotly's API measurements.",
    links: {
      hf: "https://huggingface.co/tencent/Hy4-flash",
      license: "https://huggingface.co/tencent/Hy4-flash/raw/main/LICENSE",
      fp8: "https://huggingface.co/tencent/Hy4-flash-FP8"
    },
    tags: ["china", "frontier", "moe", "multimodal"]
  },
  {
    id: "qwen38-27b",
    name: "Qwen3.8-27B",
    developer: "Alibaba Cloud / Qwen Team",
    country: "China",
    released: "2026-08-14",
    releasedNote: "",
    params: "27B dense (vision-language)",
    paramsSort: 27,
    license: "Apache 2.0",
    licenseKind: "osi",
    licenseNote: "Confirmed from the official LICENSE file (“Copyright 2026 Alibaba Cloud”). Commercial use, modification and redistribution are allowed under standard Apache 2.0 terms.",
    commercial: "Yes",
    context: "262,144 native; extensible to 1,000,000",
    contextSort: 262144,
    dab: 38,
    headline: "DataAnalyticsBench 38/43 — best compact dense model on that board; LiveCodeBench v6 90.3",
    benches: [
      { name: "DataAnalyticsBench", score: "38/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" },
      { name: "LiveCodeBench v6", score: "90.3", source: "https://huggingface.co/Qwen/Qwen3.8-27B", srcName: "Qwen official model card" },
      { name: "GPQA Diamond", score: "89.2", source: "https://huggingface.co/Qwen/Qwen3.8-27B", srcName: "Qwen official model card" },
      { name: "Terminal Bench 2.1 (Terminus)", score: "73.0", source: "https://huggingface.co/Qwen/Qwen3.8-27B", srcName: "Qwen official model card" },
      { name: "SWE-bench Pro", score: "61.7", source: "https://huggingface.co/Qwen/Qwen3.8-27B", srcName: "Qwen official model card" }
    ],
    install: {
      ollama: "Official Ollama library model. Default tag is an 18 GB build with a 256K context.",
      commands: `ollama pull qwen3.8:27b
ollama run qwen3.8:27b

# vLLM
vllm serve Qwen/Qwen3.8-27B

# Transformers
# pip install -U transformers
# model id: Qwen/Qwen3.8-27B`
    },
    infra: "Ollama download is 18 GB for qwen3.8:27b. Plotly reports a 64 GB Mac mini can run it and still score 38/43. A 24 GB GPU is comfortable at short context; long 256K contexts need more KV-cache headroom (often a 32–48 GB GPU or unified memory). CPU-only is possible but slow.",
    dataNote: "Native 256K, extendable to 1M with YaRN/RoPE scaling per the card. Excellent default for agentic pandas/SQL on a workstation.",
    links: {
      hf: "https://huggingface.co/Qwen/Qwen3.8-27B",
      license: "https://huggingface.co/Qwen/Qwen3.8-27B/blob/main/LICENSE",
      ollama: "https://ollama.com/library/qwen3.8"
    },
    tags: ["china", "laptop", "dense", "multimodal", "permissive"]
  },
  {
    id: "glm-53-flash",
    name: "GLM-5.3-Flash",
    developer: "Z.AI (Zhipu)",
    country: "China",
    released: "2026-08-26",
    releasedNote: "",
    params: "320B total / 18B active",
    paramsSort: 320,
    license: "MIT",
    licenseKind: "osi",
    licenseNote: "Official LICENSE on the Hugging Face repo is MIT (Copyright 2026 Z.AI Co., Ltd.). Commercial use is allowed.",
    commercial: "Yes",
    context: "Up to 1,000,000 tokens (serving/eval descriptions)",
    contextSort: 1000000,
    dab: 38,
    headline: "DataAnalyticsBench 38/43; Terminal Bench 2.1 official score 84.3",
    benches: [
      { name: "DataAnalyticsBench", score: "38/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" },
      { name: "Terminal Bench 2.1", score: "84.3", source: "https://z.ai/blog/glm-5.3-flash", srcName: "Z.AI blog / official table" },
      { name: "DeepSWE v1.1", score: "63.4", source: "https://z.ai/blog/glm-5.3-flash", srcName: "Z.AI blog / official table" },
      { name: "AutomationBench v1.0.6", score: "48.8", source: "https://z.ai/blog/glm-5.3-flash", srcName: "Z.AI blog / official table" }
    ],
    install: {
      ollama: "Ollama lists glm-5.3, including a :cloud tag. Confirm you are pulling a local weight tag, not the cloud relay, if data must stay on-prem.",
      commands: `# Official local stacks named on the model card: SGLang, vLLM, TokenSpeed, Transformers, KTransformers, Unsloth
huggingface-cli download zai-org/GLM-5.3-Flash --local-dir GLM-5.3-Flash
vllm serve zai-org/GLM-5.3-Flash`
    },
    infra: "320B total weights need a multi-GPU server even though only 18B parameters are active per token. This is a strong value model if you already have server GPUs; it is not a 16 GB laptop model.",
    dataNote: "Hybrid sparse + linear attention is designed for cheaper long-context serving, which helps agent traces and wide schemas.",
    links: {
      hf: "https://huggingface.co/zai-org/GLM-5.3-Flash",
      blog: "https://z.ai/blog/glm-5.3-flash",
      license: "https://huggingface.co/zai-org/GLM-5.3-Flash/raw/main/LICENSE"
    },
    tags: ["china", "frontier", "moe", "multimodal", "permissive"]
  },
  {
    id: "muse-spark-open",
    name: "Muse Spark Open",
    developer: "Meta",
    country: "United States",
    released: "2026-10-15",
    releasedNote: "",
    params: "816B total / 42B active",
    paramsSort: 816,
    license: "Muse Model License",
    licenseKind: "custom",
    licenseNote: "Use, modification, fine-tuning, distillation, distribution and sale are permitted, with “Built with Muse Spark Open” attribution. Companies over US$20M aggregate gross revenue must obtain a separate Meta agreement before offering model access as a service.",
    commercial: "Yes, with attribution and a MaaS revenue threshold",
    context: "1,048,576 tokens",
    contextSort: 1048576,
    dab: 38,
    headline: "DataAnalyticsBench 38/43 — Meta’s current flagship open-weight model",
    benches: [
      { name: "DataAnalyticsBench", score: "38/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" }
    ],
    install: {
      ollama: "No official local Ollama tag verified on 26 Nov 2026. Use Meta’s published get-the-model docs and the Hugging Face checkpoints.",
      commands: `huggingface-cli download meta-models/Muse-Spark-Open-816B-A42B --local-dir Muse-Spark-Open
# NVFP4 variant is also published on the same Hugging Face org.`
    },
    infra: "Frontier MoE: 816B total / 42B active. This is a multi-node or large-server deployment, not a workstation default.",
    dataNote: "1M context, multimodal. License is the main enterprise review item, not just hardware.",
    links: {
      hf: "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      blog: "https://research.meta.ai/blog/muse-spark-open"
    },
    tags: ["us", "frontier", "moe", "multimodal"]
  },
  {
    id: "deepseek-v41-flash",
    name: "DeepSeek-V4.1-Flash",
    developer: "DeepSeek",
    country: "China",
    released: "2026-09-10",
    releasedNote: "",
    params: "552B backbone / 8B prefill & 16B decode active (HF lists 763B including extras)",
    paramsSort: 552,
    license: "MIT",
    licenseKind: "osi",
    licenseNote: "Official repository and weights are MIT. Commercial use is allowed.",
    commercial: "Yes",
    context: "1,000,000 tokens",
    contextSort: 1000000,
    dab: 36,
    headline: "DataAnalyticsBench 36/43; official Terminal-Bench 2.1 90.6 and GPQA Diamond 90.9",
    benches: [
      { name: "DataAnalyticsBench", score: "36/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" },
      { name: "GPQA Diamond (instruct, max effort)", score: "90.9", source: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash", srcName: "DeepSeek official model card" },
      { name: "Terminal-Bench 2.1", score: "90.6", source: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash", srcName: "DeepSeek official model card" },
      { name: "DeepSWE v1.1 (mini-SWE)", score: "74.2", source: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash", srcName: "DeepSeek official model card" },
      { name: "HumanEval (base, 0-shot)", score: "79.4", source: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash", srcName: "DeepSeek official model card, base model table" }
    ],
    install: {
      ollama: "Confirm any Ollama tag is a local build before using it with private data. Official path is the inference folder on the model card plus deepseek-recipe for prompt encoding.",
      commands: `huggingface-cli download deepseek-ai/DeepSeek-V4.1-Flash --local-dir DeepSeek-V4.1-Flash
# See the repo's inference/ folder for weight conversion and local run steps.
# Recommended sampling from the card: temperature 1.0, top_p 0.95 or 1.0, context 1M, max_tokens >= 256K.`
    },
    infra: "Large MoE with a very small active graph (8B prefill / 16B decode) and a compressed KV cache (officially 890 bytes/token). Loading the weights still needs a multi-GPU server. Attractive if you already have that hardware and want MIT terms.",
    dataNote: "1M context and strong agent-coding numbers. Plotly’s analytics score (36/43) is behind Kimi/Hy4 even though coding benches are excellent — a reminder that SWE scores are not the same as messy-warehouse judgement.",
    links: {
      hf: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      license: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/raw/main/LICENSE"
    },
    tags: ["china", "frontier", "moe", "multimodal", "permissive"]
  },
  {
    id: "mistral-large-4",
    name: "Mistral Large 4",
    developer: "Mistral AI",
    country: "France",
    released: "2026-10-06",
    releasedNote: "Also called “Le Chonk”",
    params: "~1T total / 49B active (52B with embeddings)",
    paramsSort: 1000,
    license: "Mistral Ecosystem Open-Weight License",
    licenseKind: "custom",
    licenseNote: "Use, modification, fine-tuning, distribution and commercialization are allowed, but operating a Model-as-a-Service business requires a separate commercial license from Mistral.",
    commercial: "Yes for most product use; MaaS needs a Mistral commercial license",
    context: "1,048,576 tokens",
    contextSort: 1048576,
    dab: 32,
    headline: "DataAnalyticsBench 32/43 — leading EU open-weight general model on that board",
    benches: [
      { name: "DataAnalyticsBench", score: "32/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" }
    ],
    install: {
      ollama: "Check the Ollama library at deploy time; official weights are on Hugging Face.",
      commands: `huggingface-cli download mistralai/Mistral-Large-4-1T-A52B --local-dir Mistral-Large-4
# See https://mistral.ai/news/mistral-large-4-oss/ and the model card for the recommended serving stack.`
    },
    infra: "Trillion-parameter MoE. This is a multi-node / large-cluster model. For EU-origin models on a laptop, consider Mistral’s smaller Apache 2.0 Ministral 3 line instead (not separately scored on DataAnalyticsBench in the 25 Nov 2026 table).",
    dataNote: "1M context and image input. Analytics score trails the 2026 China and Thinking Machines leaders.",
    links: {
      hf: "https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B",
      blog: "https://mistral.ai/news/mistral-large-4-oss/",
      license: "https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B/raw/main/LICENSE"
    },
    tags: ["france", "frontier", "moe", "multimodal"]
  },
  {
    id: "nemotron-35-super-vl",
    name: "Nemotron 3.5 Super VL",
    developer: "NVIDIA",
    country: "United States",
    released: "2026-10-15",
    releasedNote: "Predecessor Nemotron 3 Super: 11 Mar 2026, 29/43 on the same board",
    params: "120B total / 12B active",
    paramsSort: 120,
    license: "OpenMDW 1.1",
    licenseKind: "custom",
    licenseNote: "NVIDIA published Nemotron 3 Super under the NVIDIA Nemotron Open Model License; the 3.5 Super VL card uses OpenMDW License Agreement v1.1. Both are open-weight licenses intended to allow commercial use, but they are not MIT/Apache. Read the license file on the official repo.",
    commercial: "Intended yes — confirm OpenMDW 1.1 for your use case",
    context: "1,048,576 tokens",
    contextSort: 1048576,
    dab: 30,
    headline: "DataAnalyticsBench 30/43; 120B/12B hybrid MoE with a 1M window",
    benches: [
      { name: "DataAnalyticsBench", score: "30/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" }
    ],
    install: {
      ollama: "Prefer NVIDIA NIM, vLLM, SGLang or TensorRT-LLM cookbooks from the official card.",
      commands: `huggingface-cli download nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16 \\
  --local-dir Nemotron-3.5-Super-VL
# FP8 / NIM paths are documented at build.nvidia.com and on the model card.`
    },
    infra: "120B total / 12B active with a 1M context. A high-memory 80–141 GB GPU pair, or several 80 GB GPUs, is the realistic self-host shape. NVIDIA also offers NIM and major cloud marketplaces.",
    dataNote: "Vision-language model, so charts and document screenshots can go in the agent loop. Analytics accuracy on Plotly lags the frontier open-weight leaders.",
    links: {
      hf: "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      nim: "https://build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b/modelcard"
    },
    tags: ["us", "moe", "multimodal"]
  },
  {
    id: "gpt-oss",
    name: "gpt-oss (120B / 20B)",
    developer: "OpenAI",
    country: "United States",
    released: "2025-08-05",
    releasedNote: "Older than the 2026 frontier models, but still the easiest permissive US option for laptops and single GPUs",
    params: "120B: 117B total / 5.1B active; 20B: 21B total / 3.6B active",
    paramsSort: 117,
    license: "Apache 2.0",
    licenseKind: "osi",
    licenseNote: "Permissive Apache 2.0 on the official OpenAI card and Hugging Face repos. Commercial use is allowed.",
    commercial: "Yes",
    context: "131,072 tokens",
    contextSort: 131072,
    dab: 27,
    headline: "DataAnalyticsBench 27/43 for gpt-oss-120b; official AIME 2025 97.9 (120B, high effort)",
    benches: [
      { name: "DataAnalyticsBench (120b)", score: "27/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" },
      { name: "AIME 2025 (120b, high effort)", score: "97.9", source: "https://openai.com/open-models/", srcName: "OpenAI open-models page" },
      { name: "AIME 2025 (20b, high effort)", score: "98.7", source: "https://openai.com/open-models/", srcName: "OpenAI open-models page" },
      { name: "GPQA Diamond (120b)", score: "80.1", source: "https://openai.com/open-models/", srcName: "OpenAI open-models page" },
      { name: "MMLU (120b)", score: "90.0", source: "https://openai.com/open-models/", srcName: "OpenAI open-models page" }
    ],
    install: {
      ollama: "First-party Ollama support. MXFP4 is native in Ollama.",
      commands: `ollama pull gpt-oss:20b
ollama run gpt-oss:20b

ollama pull gpt-oss:120b
ollama run gpt-oss:120b

# LM Studio
lms get openai/gpt-oss-120b

# Official 20B download is 14 GB; 120B is 65 GB in the Ollama library.`
    },
    infra: "Official: 20B runs in 16 GB of memory; 120B fits a single 80 GB GPU (H100 / MI300X class). Ollama sizes: 14 GB (20b) and 65 GB (120b). Harmony chat format is required.",
    dataNote: "128K context is smaller than 2026 1M-window models, but native Python tool use is a good fit for pandas/DuckDB agents. Plotly analytics score is well behind 2026 leaders — use it for private, permissive-license local work, not as the accuracy champ.",
    links: {
      hf: "https://huggingface.co/openai/gpt-oss-120b",
      hf20: "https://huggingface.co/openai/gpt-oss-20b",
      official: "https://openai.com/open-models/",
      ollama: "https://ollama.com/library/gpt-oss"
    },
    tags: ["us", "laptop", "moe", "permissive"]
  },
  {
    id: "gemma-4-31b",
    name: "Gemma 4 31B-IT",
    developer: "Google DeepMind",
    country: "United States",
    released: "2026-04-02",
    releasedNote: "Family also includes E2B, E4B, 12B Unified, and 26B A4B",
    params: "30.7B dense (31B card name)",
    paramsSort: 30.7,
    license: "Apache 2.0",
    licenseKind: "osi",
    licenseNote: "Gemma 4 moved to standard Apache 2.0 (unlike earlier Gemma terms). Confirmed in Google’s March 2026 open-source blog and model documentation.",
    commercial: "Yes",
    context: "256K tokens (31B / 12B / 26B); 128K on E2B/E4B",
    contextSort: 262144,
    dab: 26,
    headline: "DataAnalyticsBench 26/43, but official MMLU-Pro 85.2 and LiveCodeBench v6 80.0",
    benches: [
      { name: "DataAnalyticsBench", score: "26/43", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Plotly, updated 25 Nov 2026" },
      { name: "MMLU-Pro", score: "85.2%", source: "https://huggingface.co/google/gemma-4-31B-it", srcName: "Gemma 4 official card (instruction-tuned)" },
      { name: "AIME 2026 (no tools)", score: "89.2%", source: "https://huggingface.co/google/gemma-4-31B-it", srcName: "Gemma 4 official card" },
      { name: "LiveCodeBench v6", score: "80.0%", source: "https://huggingface.co/google/gemma-4-31B-it", srcName: "Gemma 4 official card" },
      { name: "GPQA Diamond", score: "84.3%", source: "https://huggingface.co/google/gemma-4-31B-it", srcName: "Gemma 4 official card" }
    ],
    install: {
      ollama: "Official Ollama library.",
      commands: `ollama pull gemma4:31b
ollama run gemma4:31b

# Smaller / laptop variants
ollama run gemma4:12b
ollama run gemma4:e4b
ollama run gemma4:26b   # 25.2B MoE, 3.8B active

# Hugging Face
# google/gemma-4-31B-it`
    },
    infra: "Ollama: gemma4:31b is 19–20 GB; gemma4:12b is about 8 GB; gemma4:e4b is about 6.6–9.5 GB; gemma4:26b is 16–19 GB. 31B wants a 24 GB GPU or 32 GB+ unified memory for comfortable context. E4B/12B are the 16 GB-class options.",
    dataNote: "Native function calling and 256K context on the mid/large sizes. Plotly analytics score is modest compared with 2026 MoE leaders; official reasoning/coding benches are much stronger. Treat those as different tests.",
    links: {
      hf: "https://huggingface.co/google/gemma-4-31B-it",
      blog: "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/",
      apache: "https://opensource.googleblog.com/2026/03/gemma-4-expanding-the-gemmaverse-with-apache-20.html",
      ollama: "https://ollama.com/library/gemma4"
    },
    tags: ["us", "laptop", "dense", "multimodal", "permissive"]
  },
  {
    id: "granite-41",
    name: "IBM Granite 4.1 (30B / 8B / 3B)",
    developer: "IBM",
    country: "United States",
    released: "2026-04-29",
    releasedNote: "",
    params: "Dense 3B, 8B and 30B (plus FP8 builds)",
    paramsSort: 30,
    license: "Apache 2.0",
    licenseKind: "osi",
    licenseNote: "Apache 2.0 with cryptographic signatures and IBM transparency disclosures. A common enterprise shortlist model.",
    commercial: "Yes",
    context: "131,072 tokens (architecture table); training extended to 512K in IBM’s write-up",
    contextSort: 131072,
    dab: null,
    headline: "HumanEval 88.41 and BFCL v3 73.68 on the official 30B instruct card (not on Plotly’s 25 Nov board)",
    benches: [
      { name: "DataAnalyticsBench", score: "n/a", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Not listed on the 25 Nov 2026 Plotly table" },
      { name: "HumanEval pass@1 (30B)", score: "88.41", source: "https://huggingface.co/ibm-granite/granite-4.1-30b", srcName: "IBM official model card" },
      { name: "HumanEval+ pass@1 (30B)", score: "85.37", source: "https://huggingface.co/ibm-granite/granite-4.1-30b", srcName: "IBM official model card" },
      { name: "MMLU-Pro 5-shot CoT (30B)", score: "64.09", source: "https://huggingface.co/ibm-granite/granite-4.1-30b", srcName: "IBM official model card" },
      { name: "BFCL v3 (30B)", score: "73.68", source: "https://huggingface.co/ibm-granite/granite-4.1-30b", srcName: "IBM official model card" },
      { name: "GSM8K 8-shot (30B)", score: "94.16", source: "https://huggingface.co/ibm-granite/granite-4.1-30b", srcName: "IBM official model card" }
    ],
    install: {
      ollama: "Official Ollama library under granite4.1.",
      commands: `ollama pull granite4.1:8b    # 5.3 GB default
ollama run granite4.1:8b

ollama pull granite4.1:30b   # 17 GB Q4_K_M default
ollama run granite4.1:30b

ollama pull granite4.1:3b    # 2.1 GB default

# Transformers
# ibm-granite/granite-4.1-30b  or  ibm-granite/granite-4.1-8b`
    },
    infra: "Ollama defaults: 3B 2.1 GB, 8B 5.3 GB, 30B 17 GB (Q4_K_M). 8B is a comfortable 16 GB laptop model; 30B wants ~24 GB GPU or 32 GB+ unified memory. CPU-only is workable for 3B/8B. FP8 builds are on Hugging Face.",
    dataNote: "Strong official tool-calling (BFCL v3) and code scores, 12 listed languages, 128K context. No DataAnalyticsBench number was published as of 25 Nov 2026, so do not invent a warehouse-analytics rank.",
    links: {
      hf: "https://huggingface.co/ibm-granite/granite-4.1-30b",
      docs: "https://www.ibm.com/granite/docs/models/granite4-1",
      ollama: "https://ollama.com/library/granite4.1/tags"
    },
    tags: ["us", "laptop", "dense", "enterprise", "permissive"]
  },
  {
    id: "qwen3-coder-next",
    name: "Qwen3-Coder-Next",
    developer: "Alibaba Cloud / Qwen Team",
    country: "China",
    released: "2026-02-02",
    releasedNote: "Coding-agent specialist, not a general chat default",
    params: "80B total / 3B active",
    paramsSort: 80,
    license: "Apache 2.0",
    licenseKind: "osi",
    licenseNote: "Apache 2.0, commercial use allowed.",
    commercial: "Yes",
    context: "262,144 tokens",
    contextSort: 262144,
    dab: null,
    headline: "SWE-Bench Verified 70.6–71.3 with only 3B active parameters",
    benches: [
      { name: "DataAnalyticsBench", score: "n/a", source: "https://plotly.com/blog/introducing-dataanalyticsbench/", srcName: "Not listed on the 25 Nov 2026 Plotly table" },
      { name: "SWE-Bench Verified (SWE-Agent)", score: "70.6", source: "https://arxiv.org/html/2603.00729v1", srcName: "Qwen3-Coder-Next technical report" },
      { name: "SWE-Bench Verified (OpenHands)", score: "71.3", source: "https://arxiv.org/html/2603.00729v1", srcName: "Qwen3-Coder-Next technical report" }
    ],
    install: {
      ollama: "Ollama and community blogs have referred to a qwen3-coder-next tag; confirm the digest against Qwen/Qwen3-Coder-Next before production use.",
      commands: `huggingface-cli download Qwen/Qwen3-Coder-Next --local-dir Qwen3-Coder-Next
# Designed for coding-agent harnesses (Claude Code, Qwen Code, Cline, OpenHands, etc.).`
    },
    infra: "80B total but only 3B active, so it is much cheaper to decode than a dense 70B once the weights fit in memory. Still larger than a 16 GB laptop default unless aggressively quantized and possibly offloaded.",
    dataNote: "Best used as the code-generation brain in a pandas/DuckDB/SQL agent, not as a general analyst chat model. Pair it with a SQL sandbox.",
    links: {
      hf: "https://huggingface.co/Qwen/Qwen3-Coder-Next",
      blog: "https://qwen.ai/blog?id=qwen3-coder-next",
      paper: "https://arxiv.org/html/2603.00729v1"
    },
    tags: ["china", "coding", "moe", "permissive"]
  }
];

const SPECIALISTS = [
  {
    name: "OLMo 3 (7B / 32B)",
    country: "United States (Ai2)",
    license: "Apache 2.0",
    note: "Fully open stack (weights + training artefacts under Apache 2.0). Context length 65,536 tokens on the official 7B/32B cards. Not listed on Plotly DataAnalyticsBench as of 25 Nov 2026, so no warehouse-analytics score is given here. Choose this when auditability of the training pipeline matters more than peak accuracy.",
    link: "https://huggingface.co/allenai/Olmo-3-1125-32B",
    blog: "https://allenai.org/blog/olmo3"
  },
  {
    name: "TabPFN-2.5",
    country: "Germany (Prior Labs)",
    license: "TABPFN-2.5 License v1.1 (weights are not Apache 2.0)",
    note: "A tabular foundation model, not an LLM. It classifies or regresses directly on tables rather than writing pandas. Code is Apache 2.0; 2.5 weights are free for non-commercial testing and research. Production, client work, revenue-generating use and hosted services need a commercial license from Prior Labs. Useful beside an LLM, not as a replacement for SQL agents.",
    link: "https://huggingface.co/Prior-Labs/tabpfn_2_5",
    docs: "https://docs.priorlabs.ai/models"
  }
];

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function licenseBadge(kind, label) {
  const cls = kind === "osi" ? "osi" : kind === "restricted" ? "restricted" : "custom";
  return `<span class="badge ${cls}">${escapeHtml(label)}</span>`;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function dabCell(v) {
  if (v == null) return `<span class="num">n/a</span>`;
  return `<span class="num">${v}/43</span>`;
}

let sortKey = "dab";
let sortDir = "desc";
let countryFilter = "all";
let licenseFilter = "all";
let query = "";

function filtered() {
  return MODELS.filter((m) => {
    if (countryFilter !== "all") {
      const map = { us: "United States", china: "China", france: "France" };
      if (m.country !== map[countryFilter]) return false;
    }
    if (licenseFilter === "osi" && m.licenseKind !== "osi") return false;
    if (licenseFilter === "custom" && m.licenseKind === "osi") return false;
    if (query) {
      const hay = `${m.name} ${m.developer} ${m.country} ${m.license} ${m.headline}`.toLowerCase();
      if (!hay.includes(query.toLowerCase())) return false;
    }
    return true;
  }).sort((a, b) => {
    const dir = sortDir === "asc" ? 1 : -1;
    if (sortKey === "name") return a.name.localeCompare(b.name) * dir;
    if (sortKey === "country") return a.country.localeCompare(b.country) * dir;
    if (sortKey === "released") return a.released.localeCompare(b.released) * dir;
    if (sortKey === "params") return ((a.paramsSort || 0) - (b.paramsSort || 0)) * dir;
    if (sortKey === "context") return ((a.contextSort || 0) - (b.contextSort || 0)) * dir;
    const av = a.dab == null ? -1 : a.dab;
    const bv = b.dab == null ? -1 : b.dab;
    if (av !== bv) return (av - bv) * dir;
    return a.name.localeCompare(b.name);
  });
}

function renderTable() {
  const rows = filtered();
  const tb = $("#model-tbody");
  tb.innerHTML = rows.map((m) => `
    <tr>
      <td><a href="#${m.id}">${escapeHtml(m.name)}</a></td>
      <td class="country">${escapeHtml(m.country)}</td>
      <td>${escapeHtml(m.developer)}</td>
      <td class="num">${escapeHtml(m.released)}</td>
      <td>${escapeHtml(m.params)}</td>
      <td>${licenseBadge(m.licenseKind, m.license)}</td>
      <td>${escapeHtml(m.context)}</td>
      <td>${dabCell(m.dab)}</td>
      <td>${escapeHtml(m.headline)}</td>
    </tr>
  `).join("") || `<tr><td colspan="9">No models match those filters.</td></tr>`;

  $$("th[data-key]").forEach((th) => {
    th.setAttribute("aria-sort", th.dataset.key === sortKey ? (sortDir === "asc" ? "ascending" : "descending") : "none");
  });
}

function renderCards() {
  const root = $("#model-cards");
  root.innerHTML = MODELS.map((m) => {
    const benches = m.benches.map((b) =>
      `<li><strong>${escapeHtml(b.name)}:</strong> ${escapeHtml(b.score)} — <a href="${b.source}">${escapeHtml(b.srcName)}</a></li>`
    ).join("");
    const links = Object.entries(m.links).map(([k, href]) =>
      `<a href="${href}">${escapeHtml(k)}</a>`
    ).join("");
    return `
      <article class="card" id="${m.id}">
        <h3>${escapeHtml(m.name)}</h3>
        <p class="sub">${escapeHtml(m.developer)} · ${escapeHtml(m.country)} · released ${escapeHtml(m.released)}${m.releasedNote ? ` (${escapeHtml(m.releasedNote)})` : ""}</p>
        <dl class="facts">
          <div><dt>Parameters</dt><dd>${escapeHtml(m.params)}</dd></div>
          <div><dt>License</dt><dd>${licenseBadge(m.licenseKind, m.license)}</dd></div>
          <div><dt>Commercial use</dt><dd>${escapeHtml(m.commercial)}</dd></div>
          <div><dt>Context</dt><dd>${escapeHtml(m.context)}</dd></div>
          <div><dt>DataAnalyticsBench</dt><dd>${m.dab == null ? "n/a" : m.dab + "/43"}</dd></div>
        </dl>
        <p>${escapeHtml(m.licenseNote)}</p>
        <h4>Benchmarks</h4>
        <ul>${benches}</ul>
        <h4>Install / run</h4>
        <p>${escapeHtml(m.install.ollama)}</p>
        <div class="copy-row">
          <pre><code>${escapeHtml(m.install.commands)}</code></pre>
          <button class="copy-btn" type="button" data-copy>Copy</button>
        </div>
        <h4>Infrastructure</h4>
        <p>${escapeHtml(m.infra)}</p>
        <h4>How much data</h4>
        <p>${escapeHtml(m.dataNote)}</p>
        <p class="links">${links}</p>
      </article>
    `;
  }).join("");
}

function renderSpecialists() {
  $("#specialists").innerHTML = SPECIALISTS.map((s) => `
    <article class="card">
      <h3>${escapeHtml(s.name)}</h3>
      <p class="sub">${escapeHtml(s.country)} · ${escapeHtml(s.license)}</p>
      <p>${escapeHtml(s.note)}</p>
      <p class="links">${s.link ? `<a href="${s.link}">model</a>` : ""}${s.blog ? ` <a href="${s.blog}">blog</a>` : ""}${s.docs ? ` <a href="${s.docs}">docs</a>` : ""}</p>
    </article>
  `).join("");
}

function bind() {
  $("#search").addEventListener("input", (e) => { query = e.target.value; renderTable(); });
  $$(".filters [data-country]").forEach((btn) => {
    btn.addEventListener("click", () => {
      countryFilter = btn.dataset.country;
      $$(".filters [data-country]").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      renderTable();
    });
  });
  $$(".filters [data-license]").forEach((btn) => {
    btn.addEventListener("click", () => {
      licenseFilter = btn.dataset.license;
      $$(".filters [data-license]").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      renderTable();
    });
  });
  $$("th[data-key]").forEach((th) => {
    th.addEventListener("click", () => {
      if (sortKey === th.dataset.key) sortDir = sortDir === "asc" ? "desc" : "asc";
      else { sortKey = th.dataset.key; sortDir = th.dataset.key === "name" || th.dataset.key === "country" ? "asc" : "desc"; }
      renderTable();
    });
  });
  document.body.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    const code = btn.parentElement.querySelector("code")?.innerText || "";
    try {
      await navigator.clipboard.writeText(code);
      btn.textContent = "Copied";
      setTimeout(() => { btn.textContent = "Copy"; }, 1500);
    } catch {
      btn.textContent = "Select text";
    }
  });
}

renderTable();
renderCards();
renderSpecialists();
bind();
