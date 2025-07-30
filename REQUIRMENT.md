###  Frontend Part

_Implement an Angular application that meets the following requirements:_

- A user can enter text and start the analysis by clicking a button.
- The logic provided in the `TextAnalyzer.java` class should be reused in the TypeScript implementation. The code should be refactored into a “good enough” maintainable state.
- Write test(s) to verify the output of the text analysis logic.
- The analysis results should be displayed in a human-readable format in the UI.
- Previous results should remain visible.
- Implement a toggle switch to change the application behavior between online and offline modes:

    - **Offline**: The application uses its internal (TypeScript) implementation of the Text Analyzer.
    - **Online**: The application uses the backend REST API to analyze the input.

---

###  Backend Part

_Implement a Java backend server with a RESTful API (Spring Boot is allowed) that provides the functionality of the Text Analyzer._

The `TextAnalyzer` logic should also be refactored to a clean, maintainable state.
