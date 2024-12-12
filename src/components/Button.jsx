// /src/components/Button.jsx
export default function Button({ children }) {
    return (
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg transform hover:scale-105 transition duration-300">
        {children}
      </button>
    );
  }
  