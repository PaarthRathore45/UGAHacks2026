#  **UGAHacks Chatbot Project**

---

## ** Team Members **
- **Paarth Rathore**
- **Youssef Gaballa**
- **Dhanush Meda**  
- **Asha Cole**

---

## **Purpose of the Project**

The purpose of WishCraft is to make task organization more engaging and approachable by combining productivity with light gamification. By turning real-life goals into “wishes” and rewarding progress through a boss-battle mini-game, the project aims to motivate users to stay organized and consistent. The addition of an AI chatbot further reduces friction by helping users break down and organize tasks naturally, making productivity feel less overwhelming and more interactive.

## **Tools Utilized**
- **Java**
- **Maven**
- **Gemini API**
- **TypeScript**
- **NodeJS**
- **TextScript**
- **HTML**
- **CSS**
- **JavaScript**
- **Git**
- **GitHub**
- **Visual Studio Code**

## **Problems Encountered and Solutions**

1. **Parsing Natural Language**
   - **Problem:** Extracting individual tasks from user-written paragraphs while removing filler words and maintaining task clarity.
   - **Solution:** Used the **Gemini AI API** to parse tasks and rank them by priority, then applied Java-based logic to clean and format tasks efficiently.

2. **Maven Dependency Issues**
   - **Problem:** Resolving `ClassNotFound` and import errors when integrating the Gemini API.
   - **Solution:** Properly configured the `pom.xml` file with the correct **Gemini dependency** and ensured all source files were placed in the correct directory (`src/main/java`).

3. **Handling API Key Safely**
   - **Problem:** Keeping the Gemini API key secure while allowing access during development.
   - **Solution:** Used environment variables (`GOOGLE_API_KEY`) instead of hardcoding sensitive credentials.

4. **Lack of Game Development Experience**
   - **Problem:** None of the team members had prior experience with game development.
   - **Solution:** We researched core game logic concepts and successfully implemented a functional mini-game using **TypeScript**, learning game mechanics during development.

5. **API Rate Limiting**
   - **Problem:** Encountered rate-limit restrictions when testing the Gemini API.
   - **Solution:** Reduced unnecessary requests and optimized testing workflows to stay within usage limits.

6. **Integrating Multiple Components**
   - **Problem:** Fully integrating the mini-game, main app, and AI chatbot within the hackathon timeframe was challenging.
   - **Solution:** While full integration was not completed, we successfully integrated the **AI chatbot with the main UI**, ensuring a strong and usable core experience.

## **Credits**

- **Gemini API** — Used for natural language task parsing, prioritization, and AI-powered task organization.

