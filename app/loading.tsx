export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 mx-auto mb-6 animate-bounce relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[2px] bg-black/30" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[2px] h-full bg-black/30" />
          </div>
        </div>
        <p className="text-gray-500 text-sm tracking-widest uppercase">Loading</p>
      </div>
    </div>
  )
}
