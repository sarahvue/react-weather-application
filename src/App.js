import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
        <footer>
          <p>
            This project was coded by Sarah and is open-sourced.{" "}
            <a
              href="https://github.com/sarahvue/react-weather-application"
              target="_blank"
              rel="noreferrer"
            >
              View Repo Here.
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
