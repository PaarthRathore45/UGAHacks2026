#  **UGAHacks Chatbot Project**

## ** Team Members **
- **Paarth Rathore**
- **Youssef Gaballa**
- **Dhanush Meda**  
- **Asha Cole**

---

## **Purpose of the Project**

---

## **Tools Utilized**
- **Java** 
- **Maven**
- **Gemini API**
- **TypeScript**
- **NodeJS**

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

