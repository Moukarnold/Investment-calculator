
# Investment Calculator

Investment Calculator is a simple web application that allows users to calculate how their investments will grow over time.

## Features

- Calculate investment growth based on user inputs.
- Display results in a table format.
- Reset inputs to default values.

## Usage

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server with `npm start` or `yarn start`.

## Components

- **App**: The main component that controls the application. It holds user input data and the results.
- **UserInputs**: A component responsible for user input forms. It handles user input, form submission, and resetting.
- **ResultTable**: A component to display the investment growth results in a table.

## How It Works

- Users input their current savings, yearly contributions, expected interest rate, and investment duration.
- When the "Calculate" button is clicked, the application computes the growth of the investment over time.
- The results are displayed in the "ResultTable" component, showing the total savings, yearly interest, total interest, and invested capital for each year.
- result on :https://investment-calculator-bay.vercel.app/

## Dependencies

- React
- Other dependencies are specified in the `package.json` file.
