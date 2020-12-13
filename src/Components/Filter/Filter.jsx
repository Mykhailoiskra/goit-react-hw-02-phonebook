const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find a contact
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

export default Filter;
