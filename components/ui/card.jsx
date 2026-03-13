export function Card({ className = '', ...props }) {
  return <div className={`border border-slate-200 bg-white ${className}`.trim()} {...props} />;
}

export function CardHeader({ className = '', ...props }) {
  return <div className={`p-6 ${className}`.trim()} {...props} />;
}

export function CardTitle({ className = '', ...props }) {
  return <h2 className={`font-semibold tracking-tight text-slate-900 ${className}`.trim()} {...props} />;
}

export function CardDescription({ className = '', ...props }) {
  return <p className={`mt-1 text-sm text-slate-500 ${className}`.trim()} {...props} />;
}

export function CardContent({ className = '', ...props }) {
  return <div className={`px-6 pb-6 ${className}`.trim()} {...props} />;
}
