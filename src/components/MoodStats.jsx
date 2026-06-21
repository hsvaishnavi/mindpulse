export default function MoodStats({ entries }) {
  const count = (mood) =>
    entries.filter((e) => e.mood === mood).length;

  const happy = count("happy");
  const sad = count("sad");
  const angry = count("angry");
  const calm = count("calm");
  const anxious = count("anxious");
  const boring = count("boring");

  const total = entries.length;

  let insight = "Start journaling to see insights";

  if (total > 0) {
    if (happy >= sad) {
      insight = "🙂 Your mood trend is mostly positive";
    } else {
      insight = "😐 You may be going through a stressful phase";
    }
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>📊 Mood Analytics</h2>

      <p>😊 Happy: {happy}</p>
      <p>😢 Sad: {sad}</p>
      <p>😡 Angry: {angry}</p>
      <p>😌 Calm: {calm}</p>
      <p>😰 Anxious: {anxious}</p>
      <p>🥱Boring:{boring}</p>

      <h4>{insight}</h4>
    </div>
  );
}