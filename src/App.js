import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            This project was coded by Sarah and is open-sourced.{" "}
            <a
              href="https://github.com/sarahvue/react-weather-application"
              target="_blank"
            >
              View Repo Here.
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
