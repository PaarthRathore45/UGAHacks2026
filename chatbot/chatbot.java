import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;

public class chatbot {

    public static Set<String> fillerWords = new HashSet<>(Arrays.asList(
        "then", "and", "before", "after", "tomorrow", "today", "please", "also", "finally", 
        "first", "next", "lastly", "in conclusion", "to sum up", "overall", "in summary", "in brief", 
        "in short", "in a nutshell", "to put it simply", "to put it briefly", "to put it in a nutshell"
    ));
    public static void main(String[] args) {
        Path inputPath = Paths.get("input.txt");
        Path outputPath = Paths.get("output.txt");
        System.out.println("Chatbot watching input.txt for new tasks...");
        System.out.println("AI To-Do Bot with Gemini AI");
        try {
            if (Files.exists(inputPath)) {
                String input = Files.readString(inputPath).trim();
                    if (!input.isEmpty()) {
                        String output = generateTasks(input);    
                        Files.writeString(outputPath, output);
                        System.out.println(output);
                        Files.writeString(inputPath, "");
                    }
            }
        } catch (Exception e) {
            System.out.println("Error processing input.txt: " + e.getMessage());
        }
    }

    public static String generateTasks(String input) {
        Client client = new Client();
        try {
            GenerateContentResponse response =
                client.models.generateContent(
                "gemini-3-flash-preview",
                "Extract a list of tasks from this paragraph and order them by priority (most urgent or important first):\n"
                + input 
                +"\nRemove any filler words and only return the tasks as a clean numbered list.",
                null
                );
            String aiOutput = response.text();
            String[] rawTasks = aiOutput.split("[\\n,]");
            ArrayList<String> todoList = new ArrayList<>();
            for (String task : rawTasks) {
                String cleaned = cleanTask(task, fillerWords);
                if (!cleaned.isEmpty()) todoList.add(capitalize(cleaned));
            }
            StringBuilder result = new StringBuilder();
            for (int i = 0; i < todoList.size(); i++) {
                result.append((i + 1)).append(". ").append(todoList.get(i)).append("\n");
            }
            return result.toString();
        } finally {
            client.close();
        }   
    }

    //Method to capitalize the first letter of a task.
    public static String capitalize(String text) {
        text = text.trim();
        if (text.isEmpty()) return text;
        return text.substring(0, 1).toUpperCase() + text.substring(1);
    }

    // Removes leading/trailing filler words
    public static String cleanTask(String task, Set<String> fillerWords) {
        String[] words = task.trim().split("\\s+");
        int start = 0, end = words.length - 1;
        while (start <= end && fillerWords.contains(words[start].toLowerCase())) start++;
        while (end >= start && fillerWords.contains(words[end].toLowerCase())) end--;
        if (start > end) return "";
        StringBuilder cleaned = new StringBuilder();
        for (int i = start; i <= end; i++) cleaned.append(words[i]).append(" ");
        String result = cleaned.toString().trim();
        result = result.replaceFirst("^\\d+\\.\\s*", "");
        return result;
    }
} 