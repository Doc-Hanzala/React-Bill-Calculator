const TotalBill = ({ bill, tip }) => {
  const finalBill = bill + tip;
  return (
    <p>
      your total bill is ${finalBill} -- (${bill} + ${tip} tip){" "}
    </p>
  );
};

export default TotalBill;
