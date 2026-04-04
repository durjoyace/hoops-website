export default function Loading() {
  return (
    <div className="min-h-screen bg-surface-950 flex flex-col items-center justify-center">
      <div className="h-12 w-12 rounded-full border-4 border-surface-700 border-t-brand-500 animate-spin" />
      <p className="mt-4 text-surface-400 text-sm">Loading...</p>
    </div>
  );
}
