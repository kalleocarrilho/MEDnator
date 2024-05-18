# Project Name

Please provide a brief description of your project here.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.x
- pip (Python package installer)

### Setting Up a Virtual Environment

It's highly recommended to use a virtual environment (venv) for Python projects to create isolated spaces for your project, which can prevent conflicts between different versions of the same module used in different projects.

Here's how to set up a virtual environment for this project:

1. Navigate to the project directory in your terminal.
2. Create a new virtual environment inside your project directory using the venv module:
   ```
   python3 -m venv env
   ```
3. Activate the virtual environment. On macOS and Linux:
    ```
   source env/bin/activate
   ```

### Installing Dependencies
This project uses Flask version 2.3.3 due to known bugs in newer versions. To install this specific version, use pip:
    ```pip install flask==2.3.3```

Install other necessary packages by running:
    pip install <package-name>

Running the Application
After setting up, you can run the application using the following command:
    python3 ruleApi.py


## To execute the front-end, enter the configurator folder:
    cd configurator

Install the project dependencies with:
    npm install
and execute the project using:
    npm start