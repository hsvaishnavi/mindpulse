import { useState } from "react";

export default function JournalForm({ onAdd }) {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("");

  const handleSubmit = () => {
    if (!text || !mood) {
      alert("Please fill all fields");
      return;
    }

    const entry = {
      id: Date.now(),
      text,
      mood,
      date: new Date().toLocaleDateString(),
    };

    onAdd(entry);

    setText("");
    setMood("");
  };

  return (
    <div>
      <h2>Write Journal</h2>

      {/* MOOD SELECT */}
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="">Select Mood</option>
        <option value="happy">😊 Happy</option>
        <option value="sad">😢 Sad</option>
        <option value="angry">😡 Angry</option>
        <option value="calm">😌 Calm</option>
        <option value="anxious">😰 Anxious</option>
      </select>

      <br /><br />

      {/* TEXT AREA */}
      <textarea
        rows="5"
        placeholder="Write your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Save Entry
      </button>
    </div>
  );
}