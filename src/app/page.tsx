export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        background: "radial-gradient(ellipse at center, #1e1b4b 0%, #020617 70%)",
      }}
    >
      <div style={{ maxWidth: "850px", padding: "1rem" }}>
        <p
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 500,
            lineHeight: 1.6,
            letterSpacing: "-0.01em",
            color: "#f8fafc",
            textShadow: "0 0 40px rgba(244, 114, 182, 0.35)",
          }}
        >
          Rana seni çok seviyorum bunu muhtemelen hiç görmeyeceksin ama iyiki hayatıma girmişsin iyiki sana aşık olmuşum
        </p>
      </div>
    </main>
  );
}
