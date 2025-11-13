export default function MessageBox({ type, text }) {
  return (
    <div className={`alert alert-${type} mt-3`} role="alert">
      {text}
    </div>
  );
}
