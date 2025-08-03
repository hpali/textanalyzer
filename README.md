## TextAnalyzer

**TextAnalyzer** is a monorepo application with a Spring Boot backend  
and an Angular frontend. The API endpoint and its `POST` method are defined in the `api.yml` file.

The application analyzes input text and, depending on the selected mode, counts and displays the number of **vowels**, 
**consonants**, or **non-vowel letters** (from the English alphabet) that appear in the text.

---

##  Tools Used During Development

### Core Technologies
- **Java**: 21
- **Spring Boot**: 3.5.3
- **Angular**: 19.1.0
- **Node.js**: 22.14.0
- **npm**: 10.2.5
- **Maven**: 3.9.4

### Stack / Libraries
- **PrimeNG**: 19.1.9 — UI component library for Angular
- **Frontend OpenAPI Tools**: ^2.21.4 — Generates TypeScript client stubs
- **Backend OpenAPI Generator Maven Plugin**: 7.14.0 — Generates Spring Boot interfaces from OpenAPI specs

### Recommended IDE
- **IntelliJ IDEA** — For full-stack development (Spring Boot + Angular support)

##  How to Run the Application

### Backend (Spring Boot)

- Change directory: `cd textanalyzer/backend`
- Build the project: `mvn clean install`
- Run the backend application: `mvn spring-boot:run` or use your IDE

### Frontend (Angular)

- Change directory: `cd textanalyzer/frontend`
- Install dependencies: `npm install`
- Generate the TypeScript API client: `npm run generate:api`
- Start the development server: `npm run start`


### Local URLs

- The backend will be available at: `http://localhost:8080`
- The frontend will be available at: `http://localhost:4200`

##  Testing

###  Backend Tests (Spring Boot)

Run tests using Maven:

- Change directory: `cd textanalyzer/backend`
- Run unit tests: `mvn  test`
- _**IntelliJ IDEA Tip:**_  
  Right-click on the `backend` directory and select **Run 'All Tests'**  
  to automatically execute all unit tests in the project.


### Manual API Test (Optional)

You can test the `/analyze` REST endpoint manually using an IDE like IntelliJ:

Example request in `test.http`:


### Example HTTP Request
```
POST http://localhost:8080/analyze 
Content-Type: application/json 

Accept: application/json 
  {
   "type": "vowels", 
   "input": "HelloWorld" 
  } 
```  


###  Frontend Tests (Angular)

- Change directory: `cd textanalyzer/frontend`
- Run  tests: `npm  test`




