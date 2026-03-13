export function Input({ className = '', ...props }) {
  return (
    <input
      className={`h-11 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-500 ${className}`.trim()}
      {...props}
    />
  );
}
