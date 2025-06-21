export default function SignupForm({ switchToLogin }) {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <button onClick={switchToLogin} className="text-blue-600 hover:underline">
          Login
        </button>
      </p>
    </div>
  );
}
