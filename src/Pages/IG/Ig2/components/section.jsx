export function Section({ title, children, className = "" }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <h2 className="text-xl font-semibold text-[#ff6b33]">{title}</h2>
      {children}
    </div>
  );
}
