package org.dedalus.backend.api;


import lombok.extern.slf4j.Slf4j;
import org.dedalus.backend.api.model.AnalyzeTextRequest;
import org.dedalus.backend.services.TextAnalyzerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@Slf4j
public class TextAnalyzerResource implements TextAnalyzerApi{

    @Autowired
    private  TextAnalyzerService textAnalyzerService;

    @Override
    public ResponseEntity<Map<String, Integer>> analyzeText(@RequestBody AnalyzeTextRequest request) {
        log.info("Analyzing text with type: '{}' and input: {}", request.getType(), request.getInput());

        Map<String, Integer> result = textAnalyzerService.analyze(request.getType(), request.getInput());

        return ResponseEntity.ok(result);
    }


}
