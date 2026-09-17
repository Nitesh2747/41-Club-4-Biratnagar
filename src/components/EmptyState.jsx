export default function EmptyState({ icon: Icon, title, body }) {
  return (
    <div className="empty">
      <Icon size={22} strokeWidth={1.6} />
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
