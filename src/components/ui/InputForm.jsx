const InputForm = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  color,
  required,
}) => {
  const labelColor = color === "red" ? "text-red-600" : "text-gray-600";
  const requiredIndicator = required ? (
    <span className="text-red-600 ml-1">*required</span>
  ) : null;

  return (
    <div className="mb-4">
      <label htmlFor={id} className={`block text-md font-medium ${labelColor}`}>
        {label} {requiredIndicator}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm`}
        required={required}
      />
    </div>
  );
};

export default InputForm;
