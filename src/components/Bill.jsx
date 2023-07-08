const Bill = ({ children, bill, onSetBill }) => {
  return (
    <div className="bill">
      <label>{children}</label>
      <input
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        type="text"
      />
    </div>
  );
};

export default Bill;
