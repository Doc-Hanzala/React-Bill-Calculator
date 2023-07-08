const Tip = ({ children, tip, onSetTip }) => {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value="0">dissatisfied (0%)</option>
        <option value="5">dissatisfied (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="15">amazing (15%)</option>
      </select>
    </div>
  );
};

export default Tip;
