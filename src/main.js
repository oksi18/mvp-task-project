import posthog from "posthog-js";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://904d61df092fe56fb37c4fb3f7b312bb@o4511479148642304.ingest.de.sentry.io/4511479228727376",

  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1.0,

  replaysSessionSampleRate: 1.0,

  replaysOnErrorSampleRate: 1.0,

  environment: "development",
});

Sentry.setUser({
  id: "12345",
  email: "student@example.com"
});

posthog.init("phc_kmuuXQBkLSYyjq4VvM7RpvPenfV7cT646DNSmxrGW6QA", {
  api_host: "https://eu.i.posthog.com",
  person_profiles: "always"
});

const appStatus = import.meta.env.VITE_APP_STATUS;

document.body.innerHTML = `
  <header>
    <h1>UniDone</h1>
    <p>Student Deadline Manager</p>
    <h3>${appStatus}</h3>
  </header>

  <div class="container">
    <h2>Додати завдання</h2>

    <input type="text" id="subject" placeholder="Назва предмету">

    <select id="type">
      <option>Лабораторна</option>
      <option>Практична</option>
      <option>Курсова</option>
    </select>

    <input type="date" id="deadline">

    <button id="add-task-btn">Додати завдання</button>

    <button id="break-world-btn">Break the world</button>

    <button id="urgent-btn" style="display:none;">Only Urgent</button>

    <ul id="task-list"></ul>
  </div>
`;

const addButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

const breakButton = document.getElementById("break-world-btn");

breakButton.addEventListener("click", () => {
  throw new Error("Sentry Test Error: Something went wrong!");
});

addButton.addEventListener("click", () => {
  const subject = document.getElementById("subject").value;
  const type = document.getElementById("type").value;
  const deadline = document.getElementById("deadline").value;

  const li = document.createElement("li");
  li.textContent = `${subject} | ${type} | ${deadline}`;

  taskList.appendChild(li);

  posthog.capture("task_created", {
    subject,
    type,
    deadline
  });
});

posthog.onFeatureFlags(() => {
  if (posthog.isFeatureEnabled("show-urgent-filter")) {
    document.getElementById("urgent-btn").style.display = "block";
  }
});