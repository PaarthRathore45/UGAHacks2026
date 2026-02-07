import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;
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
        Client client = new Client();
        try{
            Scanner scanner = new Scanner(System.in);
            System.out.println("AI To-Do Bot with Gemini AI");
            System.out.println("Type a paragraph of tasks. Type 'exit' to quit.");
            while(true){
                System.out.println("\nEnter your tasks:");
                String input = scanner.nextLine();
                if (input.equalsIgnoreCase("exit")) break;
                //GenAI to create task list
                GenerateContentResponse response =
                    client.models.generateContent(
                    "gemini-3-flash-preview",
                    "Extract a list of tasks from this paragraph and order them by priority (most urgent or important first):\n"
                    + input 
                    +"\nRemove any filler words and only return the tasks as a clean numbered list.",
                    null
                    );
                String aiOutput = response.text();
                System.out.println("\nRaw AI output:");
                System.out.println(aiOutput);

                String[] rawTasks = aiOutput.split("[\\n,]");
                ArrayList<String> todoList = new ArrayList<>();
                for (String task : rawTasks) {
                    String cleaned = cleanTask(task, fillerWords);
                    if (!cleaned.isEmpty()) {
                        todoList.add(capitalize(cleaned));
                    }
                }
                System.out.println("\nYour To-Do List:");
                for (int i = 0; i < todoList.size(); i++) {
                    System.out.println((i + 1) + ". " + todoList.get(i));
                }   
            }
            scanner.close();

        }   finally {
                client.close();
            }
        System.out.println("Goodbye!");
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
