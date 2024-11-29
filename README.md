# AI Website Builder 🚀

An **AI-powered website builder** that uses LLM to help users describe and generate websites seamlessly. This project is a powerful wrapper for LLMs & uses WebContaineres enable users to build and execute JavaScript, TypeScript, and Node.js code directly in the browser.

No live preview as i used up all my Claude tokens 😅

## Key Features ✨

- **AI-Powered Website Generation**: Leverages LLMs to interpret user input and generate tailored website templates.
- **Browser-Native Development**: Uses **WebContainers** to run and build JavaScript, TypeScript, and Node.js code directly in the browser, eliminating the need for server-side compilation.
- **Modern Technology Stack**:
  - **Frontend**: React.js & TypeScript for a responsive and dynamic user interface.
  - **Backend**: Express.js for handling API requests and LLM interactions.
  - **WebContainers**: For browser-native code execution and bundling.
- **Real-Time Preview**: Instantly preview the generated website within the browser.


## Tech Stack 🛠️

| **Component**   | **Technology**           |
|------------------|--------------------------|
| Frontend         | React.js, Tailwind CSS  |
| Backend          | Express.js, Node.js     |
| Browser Runtime  | WebContainers           |
| AI Integration   | LLM APIs (e.g., Anthropic Claude) |
| Language Support | JavaScript, TypeScript  |


## Prerequisites ✅

Before running the project, ensure you have the following installed:

- **Node.js** (v20+)
- **pnpm**
- Modern web browser (Chrome/Edge recommended for WebContainers)

## Installation & Setup 🔧

1. Clone the Repository:
    ```bash
    cd ai-website-builder
    ```

2. Install Dependencies for frontend & backend:
    ```bash
    cd backend
    pnpm install

    cd frontend 
    pnpm install
    ```

3. Create .env file & add your API_KEY:
    ```bash
    ANTHROPIC_API_KEY=""
    ```

4. Start backend
    ```bash
    cd backend
    pnpm serve
    ```

5. Start frontend
    ```bash
    cd frontend
    pnpm build
    serve -s dist
    ```
## Screenshot

![Screenshot (481)](https://github.com/user-attachments/assets/a8ce6631-b643-49d1-8a90-5a14aafe006e)
