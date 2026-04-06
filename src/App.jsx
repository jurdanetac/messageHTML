import { useState } from "react";

const App = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const baseURL = "/?";

  const label = urlParams.get("label");
  const message = urlParams.get("message");

  const [labelInput, setLabelInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  return (
    <form method="GET">
      {label ? (
        <p>Label: {label}</p>
      ) : (
        <input
          type="text"
          value={labelInput}
          onChange={(event) => setLabelInput(event.target.value)}
        />
      )}
      {message ? (
        <p>Message: {message}</p>
      ) : (
        <input
          type="text"
          value={messageInput}
          onChange={(event) => setMessageInput(event.target.value)}
        />
      )}

      {!message || !label ? (
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();

            let builtURL = baseURL;

            // append label
            if (labelInput) {
              builtURL += `label=${labelInput}&`;
            } else {
              builtURL += `label=${label}&`;
            }

            // append label
            if (messageInput) {
              builtURL += `message=${messageInput}`;
            } else {
              builtURL += `message=${message}`;
            }

            window.location.href = builtURL;
          }}
        >
          Submit
        </button>
      ) : (
        <button
          type="button"
          onClick={(event) => {
            window.location.href = baseURL;
          }}
        >
          Reset
        </button>
      )}
    </form>
  );
};

export default App;
