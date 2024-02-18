# Frontend and Backend Automation Tool

## Description

This project is designed for automated testing of both frontend and backend components.

## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed
- Docker (optional, if applicable)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/UntHans/FrontAndBackAutomationTool.git
    ```

2. Navigate to the project directory:

    ```bash
    cd FrontAndBackAutomationTool
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running Tests

#### Frontend Tests Only

Run the frontend tests:

```bash
npm run testfe
```

#### Backend Tests Only 

Run the frontend tests:

```bash
npm run testbe
```

#### Regression Testing

Run regression tests (both frontend and backend):

```bash
npm run testregression
```

### View HTML Reports:

Once the tests are completed, HTML reports will be generated in the tests_output directory.
Open the HTML reports in your preferred web browser.

#### Example:
Front End Report: 
 ```bash
tests_output/fe/nightwatch-html-report/index.html
```
Back End Report: 
 ```bash
tests_output/be/nightwatch-html-report/index.html
```
You can navigate to these directories and open the index.html file to view detailed test reports.

### Docker (Optional)
If you have Docker installed, you can use the provided Dockerfile:

#### Build the Docker image:

```bash
docker build -t frontandbackautotool .
```

#### Run a container for frontend tests:

```bash
docker run --rm -e NIGHTWATCH_ENV=default -e NIGHTWATCH_OUTPUT=/tests_output/fe frontandbackautotool
```

#### Run a container for backend tests:

```bash
docker run --rm -e NIGHTWATCH_ENV=api_testing -e NIGHTWATCH_OUTPUT=/tests_output/be frontandbackautotool
```


#### Run regression tests in a single container:

```bash
docker run --rm -e NIGHTWATCH_ENV=default -e NIGHTWATCH_OUTPUT=/tests_output/fe frontandbackautotool \
&& docker run --rm -e NIGHTWATCH_ENV=api_testing -e NIGHTWATCH_OUTPUT=/tests_output/b
```
