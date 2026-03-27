# Product Requirements Document (PRD): PromptBuilder AI

## 1. System Directives: Harness Design Methodology
You are an autonomous AI software engineer (Claude Code). You MUST strictly follow the "Harness Design" methodology to prevent context loss, ensure high-quality output, and execute tasks without needing constant human intervention.

### 1.1 Agent Roles & Workflows
*   **Planner Agent:** Understand this PRD comprehensively to grasp *what* to build before jumping into implementation details.
*   **Initializer Agent (Execute Immediately):** In your very first action, you MUST create these three tracking files in the root directory:
    1.  `feature_list.json`: A detailed list of features to implement, tracking their status (pending, in-progress, completed).
        2.  `claude-progress.txt`: A living log of your overall progress, completed tasks, and next immediate steps.
            3.  `init.sh`: A shell script defining how to set up the environment and start the local development server (e.g., Vite/React or basic HTML/JS server).
            *   **Fixed Session Routine:** For every task or new session, you must loop through this exact sequence:
                1. Read `claude-progress.txt` and `feature_list.json`.
                    2. Run tests or build checks to verify the current state.
                        3. Pick ONE feature to implement.
                            4. **Maker Phase:** Write the code.
                                5. **Reviewer Phase:** Critically review your own code for bugs, edge cases, responsive UI, and SEO adherence.
                                    6. Commit the code via Git.
                                        7. Update `feature_list.json` and `claude-progress.txt`.
                                            8. Move to the next feature.

                                            ---

                                            ## 2. Product Overview
                                            *   **Service Name:** PromptBuilder AI
                                            *   **Short Title:** AI Image Prompts
                                            *   **Topic:** A dashboard designed for users who struggle with writing complex AI image generation prompts (e.g., Midjourney, Stable Diffusion).
                                            *   **Core Mechanics:** Users will click intuitive UI buttons or dropdowns to select options across categories like "Subject", "Lighting", "Style", and "Camera Lens". 
                                            *   **Development Strategy:** The core logic is a simple string concatenation of the selected text options. Avoid overly complex backend logic; focus heavily on an intuitive, modern UI/UX layout.

                                            ---

                                            ## 3. Mandatory Requirements (Strict Adherence Required)

                                            ### 3.1 Zero-Cost Architecture
                                            The entire application must cost $0 to build, host, and maintain. Use lightweight frontend technologies (e.g., Vite + React + Tailwind CSS, or plain HTML/CSS/JS) that can be hosted on free tiers forever.

                                            ### 3.2 High Searchability (SEO Optimization)
                                            The website must be deeply optimized for search engines. 
                                            *   Implement semantic HTML5 tags.
                                            *   Include comprehensive `<title>`, `<meta name="description">`, `<meta name="keywords">`, and Open Graph (OG) tags.

                                            ### 3.3 Fully Responsive Web Design
                                            The application must be 100% responsive. Use a mobile-first approach (Tailwind CSS recommended) to ensure the layout functions perfectly on Mobile, Tablet, and Desktop screens without breaking or requiring horizontal scrolling.

                                            ### 3.4 Unobtrusive Visitor Counter
                                            *   Display "Today's Visitors" and "Total Visitors" counts.
                                            *   **Constraint:** Place this counter in an unobtrusive area (e.g., the bottom footer) so it does NOT harm or distract from the core user experience.
                                            *   Use a free, no-login third-party counter service (e.g., hits.sh, GoatCounter, or a free KV store).

                                            ### 3.5 Automated Git Management & GitHub CLI (`gh`)
                                            *   **Repository Creation:** You MUST autonomously use the GitHub CLI (`gh`) to create the remote repository. 
                                                *   Command to execute: `gh repo create promptbuilder-ai --public --source=. --remote=origin`
                                                *   **Milestone Commits & Pushes:** Every time a major milestone is reached, you MUST automatically execute `git add .`, `git commit -m "..."`, and `git push origin main`. Do not wait for human permission.

                                                ### 3.6 Anonymous Free Deployment (Vercel or Netlify)
                                                *   **Constraint:** Do NOT deploy using GitHub Pages, as it exposes the creator's GitHub ID in the URL.
                                                *   **Execution:** You MUST physically deploy the application to **Vercel** or **Netlify** using their CLI (`npx vercel --prod --yes` or `netlify deploy --prod`).
                                                *   **Action:** Do NOT just write a deployment guide. Execute the commands in the terminal and output the final live production URL.

                                                ### 3.7 Free Data Collection via Google Sheets Webhook
                                                *   We must collect the user's generated prompts for free. Do NOT just write a guide; implement the actual code.
                                                *   **Action 1:** Create a file named `GoogleAppsScript.js` containing the `doPost(e)` function needed to append incoming JSON data (prompt text, timestamp) to a Google Sheet. Instruct the user to deploy it as a Web App and provide the Webhook URL.
                                                *   **Action 2:** In the frontend app, write an asynchronous `fetch()` POST request. When the user clicks the "Calculate / Generate" button, it MUST silently send the concatenated prompt string to the Webhook URL. Keep a placeholder variable like `const WEBHOOK_URL = "";` ready.

                                                ### 3.8 Rapid Monetization (Adsterra)
                                                *   The service must generate revenue immediately. Since Google Ads approval is too slow, you MUST integrate **Adsterra** from day one.
                                                *   Designate responsive spaces in the UI for advertisements (e.g., a Top Banner under the header, or a Footer Banner) that do not break the functional layout.

                                                ### 3.9 Adsterra Ad Unit Key Injection
                                                *   Set up the exact HTML `<script>` tag structures for Adsterra ad units in the codebase.
                                                *   Leave clear placeholders (e.g., ``).
                                                *   **Action:** Pause and explicitly ask the user: *"Please create an Ad unit in your Adsterra dashboard and paste the provided script/key here."* Once the user provides it, inject it directly into the codebase and commit the change.

                                                ---

                                                ## 4. Execution Milestones
                                                *Planner Agent: Use this to populate `feature_list.json`.*

                                                *   **Milestone 1: Harness Initialization & Git Setup**
                                                    *   Create `feature_list.json`, `claude-progress.txt`, `init.sh`.
                                                        *   Initialize Git, create `.gitignore`, and execute `gh repo create`.
                                                            *   Action: Git Commit & Push.
                                                            *   **Milestone 2: UI Scaffold & SEO Setup**
                                                                *   Build the responsive frontend layout with category sections (Subject, Lighting, Style, Lens) and the result text area.
                                                                    *   Apply all SEO meta tags. Set up Adsterra placeholders.
                                                                        *   Action: Git Commit & Push.
                                                                        *   **Milestone 3: Core Logic & Webhook Integration**
                                                                            *   Implement string concatenation triggered by user selections. Add a "Copy" button.
                                                                                *   Implement the `fetch` POST logic for the Google Sheets webhook.
                                                                                    *   Action: Git Commit & Push.
                                                                                    *   **Milestone 4: Visitor Counter & Final Polish**
                                                                                        *   Integrate the unobtrusive Today/Total visitor counter in the footer.
                                                                                            *   Act as Reviewer Agent to fix any responsive or UX issues.
                                                                                                *   Action: Git Commit & Push.
                                                                                                *   **Milestone 5: Monetization Activation & Production Deployment**
                                                                                                    *   Prompt user for Adsterra keys and Google Sheets Webhook URL; inject them.
                                                                                                        *   Deploy the application using Vercel/Netlify CLI. 
                                                                                                            *   Action: Final Git Commit & Push. Update `claude-progress.txt` to COMPLETED.

                                                                                                            ---
                                                                                                            **EXECUTION TRIGGER FOR CLAUDE CODE:**
                                                                                                            Acknowledge these instructions. Immediately assume the role of the Initializer Agent. Create the 3 Harness files, initialize the repository via the `gh` CLI, and start executing Milestone 1. Do not ask for permission to begin coding.
                                                                                                            