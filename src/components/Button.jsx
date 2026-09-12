
export default function Button({ children, variant = 'primary', onClick, className = '' }) {
  const base = 'px-6 py-2 rounded font-medium transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-primary/90'
      : 'border border-neutral text-neutral hover:bg-neutral/10';
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}> {children} </button>
  );
}
