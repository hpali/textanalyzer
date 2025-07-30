package org.dedalus.backend.api;


import lombok.extern.slf4j.Slf4j;
import org.dedalus.backend.api.model.AnalyzeTextRequest;
import org.dedalus.backend.services.TextAnalyzerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@Slf4j
public class TextAnalyzerResource implements TextAnalyzerApi{

    @Autowired
    private  TextAnalyzerService textAnalyzerService;

    @Override
    public ResponseEntity<Map<String, Integer>> analyzeText(@RequestBody AnalyzeTextRequest request) {
        log.info("Analyzing text with type: '{}' and input: {}", request.getType(), request.getInput());
        try {
            return ResponseEntity.ok(textAnalyzerService.analyze(request.getType(), request.getInput()));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }


}
