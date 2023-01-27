import "./joiinput.css";

const JoiInput = (props) => {
  const { placeholder, value, onChange, schema } = props;
  const validation = schema.validate(value);
  const errorMessage = validation.error?.message;
  return (
    <div>
      <input placeholder={placeholder} onChange={onChange} />
      {errorMessage !== undefined && <span>{errorMessage}</span>}
    </div>
  );
};

export default JoiInput;
