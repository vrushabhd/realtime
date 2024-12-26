# Real-Time Feedback Dashboard

The **Real-Time Feedback Dashboard** is an intuitive web application designed for teams to monitor and improve employee performance. The app allows users to:

- View and edit employee performance metrics.
- Analyze team-wide productivity, collaboration, and communication trends.
- Leverage a visually appealing, responsive interface powered by Material-UI and React.

---

## Features

- **Employee Table:** Displays a list of employees and their performance metrics.
- **Performance Summary:** Provides average scores for key metrics.
- **Employee Form:** Edit employee data in real-time.
- **Theme Integration:** Seamless dark/light mode support using Material-UI's theme system.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- A backend server (refer to the API endpoint mentioned in the code).

### Clone the Repository

```bash
git clone https://github.com/vrushabhd/realtime.git
cd realtime
```

### Install Dependencies

Use npm or yarn to install the required dependencies:

```bash
npm install
# or
yarn install
```

---

## Running the Project

### Start the Development Server

Run the following command to start the app:

```bash
npm start
# or
yarn start
```

This will launch the app at `http://localhost:3000` by default.

### Backend Server

Make sure your backend server is running at `http://localhost:5000`. The app fetches employee data and updates metrics via REST API endpoints.

---

## Folder Structure

```
realtime/
├── public/             # Static assets
├── src/
│   ├── components/     # React components (EmployeeTable, EmployeeForm, PerformanceSummary)
│   ├── theme.js        # Material-UI theme configuration
│   ├── App.js          # Main app entry point
│   └── index.js        # React DOM renderer
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

---

## Customizing the Theme

The application uses Material-UI's theme configuration for colors and styles. You can modify `src/theme.js` to change the app's appearance.

---

## API Endpoints

Ensure your backend exposes the following endpoints:

- **GET /employees**: Fetch the list of employees.
- **PUT /employees/:id**: Update employee metrics.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- **React**: For building the UI.
- **Material-UI**: For elegant design components.
- **Axios**: For API requests.

