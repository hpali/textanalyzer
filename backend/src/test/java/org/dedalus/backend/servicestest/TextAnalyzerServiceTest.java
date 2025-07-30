package org.dedalus.backend.servicestest;

import lombok.extern.slf4j.Slf4j;
import org.dedalus.backend.services.TextAnalyzerService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

@Slf4j
@SpringBootTest
public class TextAnalyzerServiceTest {

    @Autowired
    public TextAnalyzerService textAnalyzerService;


    @Test
    public void testCountVowels() {

        String input = "HelloWorld";

        Map<String, Integer> responsVowels = textAnalyzerService.countVowels(input);
        assertEquals(0, responsVowels.get("a"));
        assertEquals(1, responsVowels.get("e"));
        assertEquals(0, responsVowels.get("i"));
        assertEquals(2, responsVowels.get("o"));
        assertEquals(0, responsVowels.get("u"));

        input = "AaEeOoIiUu";
        responsVowels = textAnalyzerService.countVowels(input);
        assertEquals(2, responsVowels.get("a"));
        assertEquals(2, responsVowels.get("e"));
        assertEquals(2, responsVowels.get("i"));
        assertEquals(2, responsVowels.get("o"));
        assertEquals(2, responsVowels.get("u"));

        input = "";
        responsVowels = textAnalyzerService.countVowels(input);
        assertEquals(0, responsVowels.get("a"));
        assertEquals(0, responsVowels.get("e"));
        assertEquals(0, responsVowels.get("i"));
        assertEquals(0, responsVowels.get("o"));
        assertEquals(0, responsVowels.get("u"));
    }


    @Test
    public void testCountConsonants() {

        String input = "HelloWorld!";

        Map<String, Integer> responsConsonants = textAnalyzerService.countConsonants(input);
        assertEquals(1, responsConsonants.get("H"));
        assertEquals(3, responsConsonants.get("L"));
        assertEquals(1, responsConsonants.get("W"));
        assertEquals(1, responsConsonants.get("R"));
        assertEquals(1, responsConsonants.get("D"));
        assertEquals(0, responsConsonants.get("G"));

        input = "HhJjZzKkLl!";
        responsConsonants = textAnalyzerService.countConsonants(input);
        assertEquals(2, responsConsonants.get("H"));
        assertEquals(2, responsConsonants.get("L"));
        assertEquals(2, responsConsonants.get("Z"));
        assertEquals(2, responsConsonants.get("J"));

        input = "";
        responsConsonants = textAnalyzerService.countConsonants(input);
        assertEquals(0, responsConsonants.get("H"));
        assertEquals(0, responsConsonants.get("L"));
        assertEquals(0, responsConsonants.get("Z"));
        assertEquals(0, responsConsonants.get("J"));

    }

    @Test
    public void testCountNotVowels() {

        String input = "2*HelloWorld!";

        Map<String, Integer> responsConsonants = textAnalyzerService.countNotVowels(input);
        assertEquals(1, responsConsonants.get("H"));
        assertEquals(3, responsConsonants.get("L"));
        assertEquals(1, responsConsonants.get("W"));
        assertEquals(1, responsConsonants.get("R"));
        assertEquals(1, responsConsonants.get("D"));
        assertEquals(0, responsConsonants.get("G"));
        assertEquals(1, responsConsonants.get("!"));
        assertEquals(1, responsConsonants.get("2"));
        assertEquals(1, responsConsonants.get("*"));

        input = "HhJjZzKkLl!";
        responsConsonants = textAnalyzerService.countNotVowels(input);
        assertEquals(2, responsConsonants.get("H"));
        assertEquals(2, responsConsonants.get("L"));
        assertEquals(2, responsConsonants.get("Z"));
        assertEquals(2, responsConsonants.get("J"));
        assertEquals(1, responsConsonants.get("!"));

        input = "";
        responsConsonants = textAnalyzerService.countNotVowels(input);
        assertEquals(0, responsConsonants.get("H"));
        assertEquals(0, responsConsonants.get("L"));
        assertEquals(0, responsConsonants.get("Z"));
        assertEquals(0, responsConsonants.get("J"));

    }

}
