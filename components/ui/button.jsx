export function Button({ className = '', variant = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-50';
  const styles =
    variant === 'outline'
      ? 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
      : 'border border-slate-900 bg-slate-900 text-white hover:bg-slate-800';

  return <button className={`${base} ${styles} ${className}`.trim()} {...props} />;
}
