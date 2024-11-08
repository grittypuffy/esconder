# Esconder

![Esconder Logo](./src/assets/logo.png)

> An advanced, open-source, offline multimedia redaction software *(to prevent "oopsie" moments when files with sensitive information are shared or stored).*

# Table of Contents

1. [Why](#why)
2. [Features](#features)
    - [Offline usage with CPU and GPU specific builds](#offline-usage-with-cpu-and-gpu-specific-builds)
    - [Self-hosting](#self-hosting)
    - [Batch processing](#batch-processing)
    - [Customized redaction]("#customized-redaction)
3. [Philosophy](#philosophy)
4. [Technologies used](#technologies-used)
5. [Development](#development)
6. [Future implementation](#future-implementation)

## Why

Redaction of personally identifiable information in complex multimedia files such as audio and video is computationally intensive. Hence, cloud service providers such as Azure and AWS provide AI-based PII recognition and redaction services for multimedia files.

However, it involves transfer of data to services outside of network boundaries, making it unsuitable for critical information infrastructure or vulnerable people (such as whistleblowers, journalists, or domestic abuse victims) due to major flaws in proprietary, cloud-based solutions:

1. **Lack of control:** There's an inherent lack of control over data processing and storage as they might be indefinitely stored. A lack of transparency regarding operations might not be the thing that people who want to use solutions to safeguard their privacy need.

2. **Increased costs:** Subscription based models that charge based on usage might cause the bills to shoot up, making it infeasible for small business who wish to stay in compliance.

So, we wanted to build a redaction system exclusive for multimedia content such as audio and video with high amount of customizations for other file formats, as [Ocultar](https://ocultar.vercel.app) doesn't work for them in a customizable manner [(supports only images, text and documents)](https://github.com/grittypuffy/ocultar?tab=readme-ov-file#redaction).

## Features

### Offline usage with CPU and GPU specific builds:

Esconder is primarily designed to operate offline by a desktop application that bundles the needed API for processing files on their local system.

For low-end systems with minimal storage, a CPU-specific build is provided for lower size, whereas a GPU-specific build is provided for high-end systems with a GPU for improved accuracy. This ensures individuals aren't left out due to limitations in device capabilities.

Multiple files can be uploaded and redacted with ease for improved efficiency.

### Self-hosting

We support self-hosting on premises for enhanced productivity and efficiency in redaction. This provides the same advantages of online APIs without losing control over data transmission

### Customized redaction

Esconder is designed provide a highly customized redaction experience for improved accuracy by providing the following capabilities:

1. Redaction color for image in video segments.
2. Sensitivity of redaction: Whether all kinds of information need to be redacted or just the sensitive ones. Defaults to high, redacting all information.
3. Metadata removal: Can be turned on or off. This is enabled by default to remove potentially identifying information such as GPS information, build model, etc.
4. Frame-based or segment-based redaction for efficient audio and video redaction.

## Philosophy

### Minimalism

Esconder aims to be minimalistic yet powerful by providing the needed features with minimalistic and performant tooling such as Alpine.js for the frontend, Vite for faster builds, Bun for improved developer experience and Tauri (the heart and soul) for a minimal desktop application (compared to that of Electron) due to usage of native browser engine.

This helps in development of an accessible user interface without high reliance on JavaScript.

### Privacy

Esconder aims to safeguard privacy of end-user by designing the system for:

1. Auto-deletion of uploaded files after completion of processing with deletion of intermediary files
2. Eliminating third-party requests for anything, right from fonts (looking at you, Google Fonts)

# Technologies used

## Frontend

We have made our frontend responsive, accessible and minimal thanks to these amazing technologies:

1. Alpine.js: Minimal web framework with small build size and high performance than frameworks like React or Next. We have chosen it for its minimalism and performance. Paired up with TypeScript, it provides a great development experience.
2. Bun: Highly performant runtime for JavaScript
3. TailwindCSS and PrelineUI: For the user interface components and design for its minimalism and accessibility.
4. Vite: Faster build system for web applications.

## Backend

1. Microsoft Presidio: The heart of Esconder, it is the one responsible for redaction of PII from files.
2. FastAPI: API framework that is used for redaction and sanitization.
3. MAT2: The ally of Esconder, aiding removal of metadata from several types of files.
4. Tesseract: Used for extraction of text from image by preprocessing.
5. Lingua language detector: A Python library used for language detection from images.

## Desktop

1. Tauri: Cross-platform desktop application framework for creation of minimal, performant and secure applications with a good developer experience thanks to Rust and Bun

The frontend codebase is used in the application with slight modifications for making it compatible with desktop operating systems.

## Deployment and automation

Esconder uses Docker for easier deployments by containerization.

The builds for Tauri application are done via GitHub Actions

# Development

## Project structure

The project contains the source code for:
- Frontend: Written with Alpine.js in `src/` folder
- Backend: Written in Python and FastAPI in `src-python/` folder
- Desktop: Configuration for desktop application in `src-tauri` folder

## Dependencies

You need to make sure that the following dependencies are available on your system for development:

### Backend

1. Python 3.12 or later
2. Poetry for dependency management
3. Tesseract OCR (for video frames)
4. OpenAI-Whisper (for audio content)

### Frontend

1. Bun
2. TypeScript
3. Alpine.js

### Desktop

1. Rust
2. Bun

Make sure to use Docker for frontend and backend.

## Manual development

## Frontend

Run the project locally by development server

``` shell
bun install # Install dependencies
bun run dev # Start development server. Should be accessible at http://localhost:3000/
```

Build the frontend and preview it by

``` shell
bun run build && bun run preview
```

## Backend

Install the dependencies by creating a virtual environment

``` shell
poetry env use python3.12 # Assuming python3.12 is a valid executable, change it if needed. Minimum version of Python required for the backend is 3.12
source $(poetry env info --path)/bin/activate # Activate the virtual environment on Linux distrubutions.
poetry install
```

Start the development server by the following command in `src-python` folder

``` shell
fastapi dev src/main.py
```

This should start the development server at http://0.0.0.0:8000/

## Desktop

Install the needed dependencies

``` shell
bun install
```

Run the development build

```shell
bun run tauri dev
```

The development build starts the FastAPI server at port 8008.

# Future implementation

We aim to support redaction for languages other than English, with exclusive focus on Indian languages, as improvement of WER will help in improvement of privacy of Indian citizens.

We aim to fine-tune Presidio and Whisper for effective processing and redaction with Indian languages.
