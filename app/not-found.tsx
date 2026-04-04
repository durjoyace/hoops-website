import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-950 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
      <p className="text-xl text-surface-300 mb-8">Page Not Found</p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
