# rest-y
## Lab 28

- User enters an API URL
- Chooses a REST Method
- Clicks the “Go” button
- Application fetches data from the URL given, with the method specified
- Displays the response headers and results separately
- Both headers and results should be “pretty printed” JSON

### Implementation Details
- index.js - Entry Point
- app.js - Container
    - Holds state: Count and Results Array
    - A class method that can update state
    - Renders 2 Child Components
- <Form />
    - Expects a function to be sent to it as a prop
    - Renders a URL entry form
    - A selection of REST methods to choose from (“get” should be the default)
    - On submit
        - Send the API results back to the <App> using the method sent down in props
- <Results />
    - Expects the count, headers, results to be sent in as props
    - Renders the count
    - Renders the Result Headers as “pretty” JSON
    - Renders the Result Body as “pretty” JSON 
### Tests
    - Write mount/enzyme tests for end to end testing

### Stretch Goal
- Add a “loading” indicator or icon in the Headers/Results area when the user submits the form
- Replace it with the results when they come in

---

