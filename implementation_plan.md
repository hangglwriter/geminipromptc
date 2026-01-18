# Implementation Plan - Gemini Prompt Gallery

## Goal Description
Build a visual "Prompt Gallery" for corporate training, where users can see high-quality outputs and copy the corresponding Gemini prompts. The goal is to replicate the "Masonry Grid + Modal Detail" experience of the reference site using **React + Vite + Vanilla CSS**.

## User Review Required
> [!IMPORTANT]
> **Tech Stack**: We are proceeding with **React + Vite** and **Vanilla CSS** (no Tailwind) to ensure a premium, custom look.
> **Data**: We will use a local `prompts.json` file as our database.

## Proposed Changes

### 1. Project Setup
#### [NEW] [Scaffold Project]
- Initialize React + Vite project (`npm create vite@latest`).
- Clean up default boilerplate.
- Setup `src/assets` for images.

### 2. Design System & Styling (Vanilla CSS)
- **Goal**: Create a premium "Corporate Creative" theme.
#### [NEW] [index.css](file:///c:/project/geminipromptc/src/index.css)
- Define CSS Variables for colors (Deep Blue/Purple, White, Grey), spacing, and typography.
- Reset styles and global font setup (Inter/Pretendard).

### 3. Data Structure
#### [NEW] [prompts.json](file:///c:/project/geminipromptc/src/data/prompts.json)
- Create the JSON schema:
  ```json
  [
    {
      "id": 1,
      "title": "Cold Email Draft",
      "category": "Marketing",
      "image": "/images/email-sample.jpg",
      "prompt": "Write a cold email...",
      "description": "High conversion template"
    }
  ]
  ```

### 4. Component Implementation
#### [NEW] [Card.jsx](file:///c:/project/geminipromptc/src/components/Card.jsx)
- Usage: `Card({ prompt, onClick })`
- Style: Masonry/Grid item, hover effects (lift/glow).

#### [NEW] [Modal.jsx](file:///c:/project/geminipromptc/src/components/Modal.jsx)
- Usage: `Modal({ prompt, onClose })`
- Style: Full-screen overlay or large center modal.
- Features: Close button, background dimming.

#### [NEW] [FilterBar.jsx](file:///c:/project/geminipromptc/src/components/FilterBar.jsx)
- Usage: Department buttons (Marketing, Sales, etc.).

### 5. Main Application Logic
#### [MODIFY] [App.jsx](file:///c:/project/geminipromptc/src/App.jsx)
- State: `selectedCategory`, `selectedPrompt` (for modal), `searchQuery`.
- Layout: Header -> FilterBar -> Grid (Cards) -> Modal (conditional render).

## Verification Plan

### Automated Tests
- `npm run dev` to ensure build success.
- Verify no console errors during navigation.

### Manual Verification
1. **Landing**: Open app, ensure all cards load.
2. **Filtering**: Click "Marketing", verify only marketing cards show.
3. **Modal**: Click a card, verify modal opens with correct data.
4. **Copy**: Click "Copy Prompt", paste into notepad to verify clipboard content.
