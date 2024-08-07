const FormRow = ({ type, name, value, handleFormRowChange, label }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleFormRowChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
