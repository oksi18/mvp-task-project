const appStatus = import.meta.env.VITE_APP_STATUS;

const element = document.createElement("h2");

element.textContent = appStatus;

document.body.appendChild(element);