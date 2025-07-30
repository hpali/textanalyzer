package org.dedalus.backend.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Slf4j
@Service
public class TextAnalyzerService {

    private final Map<String, Function<String, Map<String, Integer>>> analyzers = new HashMap<>();

    public TextAnalyzerService() {
        analyzers.put("vowels", this::countVowels);
        analyzers.put("nonaeiou", this::countNotVowels);
        analyzers.put("consonants", this::countConsonants);
    }

    // Vowel counting method
    public Map<String, Integer> countVowels(String input) {

        Map<String, Integer> vowels = new HashMap<>();
        vowels.put("a", 0);
        vowels.put("e", 0);
        vowels.put("o", 0);
        vowels.put("u", 0);
        vowels.put("i", 0);

        char[] chars = input.toCharArray();

        for (char aChar : chars) {
            String letter = String.valueOf(aChar).toLowerCase();
            if (vowels.containsKey(letter)) {
                vowels.put(letter, vowels.get(letter) + 1);
            }
        }

      return vowels;
    }

    // Not vowels counting method
    public Map<String, Integer> countNotVowels(String input) {
        Map<String, Integer> notVowels = new HashMap<>();
        char[] chars = input.toCharArray();

        for (char c = 32; c <= 126; c++) {
            if (c != 'a' && c != 'A'
                    && c != 'e' && c != 'E'
                    && c != 'i' && c != 'I'
                    && c != 'o' && c != 'O'
                    && c != 'u' && c != 'U') {
                notVowels.put(String.valueOf(c).toUpperCase(), 0);
            }
        }

        for (char aChar : chars) {
            String letter = String.valueOf(aChar).toUpperCase();
            if (notVowels.containsKey(letter)) {
                notVowels.put(letter, notVowels.get(letter) + 1);
            }
        }

        notVowels.forEach((key, value) -> log.info("Letter '{}' appears {} times", key, value));

        return notVowels;
    }

    // consonants counting method
    public Map<String, Integer> countConsonants(String input) {
        Map<String, Integer> consonants = new HashMap<>();
        char[] chars = input.toCharArray();

        for (char c = 32; c <= 126; c++) {
            if (c != 'a' && c != 'A'
                    && c != 'e' && c != 'E'
                    && c != 'i' && c != 'I'
                    && c != 'o' && c != 'O'
                    && c != 'u' && c != 'U'
                    && Character.isLetter(c)) {
                consonants.put(String.valueOf(c).toUpperCase(), 0);
            }
        }

        for (char aChar : chars) {
            String letter = String.valueOf(aChar).toUpperCase();
            if (consonants.containsKey(letter)) {
                consonants.put(letter, consonants.get(letter) + 1);
            }
        }

        consonants.forEach((key, value) -> log.info("Letter '{}' appears {} times", key, value));

        return consonants;
    }

    public Map<String, Integer> analyze(String type, String input) {
        log.info("Starting analysis for type: {}", type);

        Function<String, Map<String, Integer>> analyzer = analyzers.get(type.toLowerCase());

        if (analyzer == null) {
            throw new IllegalArgumentException("Unknown analysis type: " + type);
        }

        return analyzer.apply(input);
    }

}
