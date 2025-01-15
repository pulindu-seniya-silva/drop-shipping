export default function ProductPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8 pb-20 gap-8">
      <h1 className="text-5xl font-bold text-white">Product Page</h1>
      <p className="text-2xl text-white opacity-80 mt-4">Exciting things are on the way!</p>
      <div className="mt-8 p-8 bg-white rounded-xl shadow-lg text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Coming Soon...</h2>
        <p className="text-lg text-gray-600 mt-2">Stay tuned for more amazing products!</p>
      </div>
    </div>
  );
}
