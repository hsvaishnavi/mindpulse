export default function JournalList({ entries }) {
  return (
    <div>
      <h2>Journal History</h2>

      {entries.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        entries.map((entry) => (
          <div
            key={entry.id}
            style={{
              border: "1px solid gray",
              marginTop: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <p><b>Date:</b> {entry.date}</p>
            <p><b>Mood:</b> {entry.mood}</p>
            <p>{entry.text}</p>
          </div>
        ))
      )}
    </div>
  );
}