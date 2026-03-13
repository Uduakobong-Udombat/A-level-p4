import './globals.css';

export const metadata = {
  title: 'Python Programming Tutor',
  description: 'An interactive app for learning Python lists, standard algorithms, recursion, stack unwinding, clear output, and testing.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
