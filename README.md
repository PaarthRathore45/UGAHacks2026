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
   - **Problem:** Extracting individual tasks from user paragraphs and removing "filler" words.
   - **Solution:** Used the **Gemini AI API** to parse tasks and rank them by priority, combined with Java logic to clean tasks efficeiently.

2. **Maven Dependency Issues**
   - **Problem:** Resolving `ClassNotFound` and import errors for the Gemini API.  
   - **Solution:** Correctly configured `pom.xml` with the **Gemini dependency** and ensured the source files were in the proper directory (`src/main/java`).  

3. **Handling API Key Safely**
   - **Problem:** Keeping the API key safe and accessible for the application.
   - **Solution:** Used environment variables (`GOOGLE_API_KEY`) instead of hardcoding the key.  

