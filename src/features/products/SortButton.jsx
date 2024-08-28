function SortButton({ label, onClick, bgColor, hoverColor, ringColor }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md ${bgColor} px-4 py-2 text-sm font-medium text-white hover:${hoverColor} focus:outline-none focus:ring-2 focus:ring-${ringColor} focus:ring-offset-2`}
    >
      {label}
    </button>
  );
}

export default SortButton;
