import { useEffect, useState } from "react";
import { getEntries, saveEntries } from "./utils/storage";

import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";
import MoodStats from "./components/MoodStats";

function App() {
  const [entries, setEntries] = useState([]);

  // Load saved data on first load
  useEffect(() => {
    const data = getEntries();
    setEntries(data);
  }, []);

  // Add new entry
  const addEntry = (entry) => {
    const updated = [entry, ...entries];
    setEntries(updated);
    saveEntries(updated);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🌙 MindPulse</h1>

      {/* INPUT SECTION */}
      <JournalForm onAdd={addEntry} />

      {/* ANALYTICS SECTION */}
      <MoodStats entries={entries} />

      {/* HISTORY SECTION */}
      <JournalList entries={entries} />
    </div>
  );
}

export default App;