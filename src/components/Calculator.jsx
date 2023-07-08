import { useState } from "react";
import Bill from "./Bill";
import Tip from "./Tip";
import TotalBill from "./TotalBill";
import Reset from "./Reset";

const Calculator = () => {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const handleReset = () => {
    setBill("");
    setTip1("");
    setTip2("");
  };

  const tip = Math.round(bill * ((tip1 + tip2) / 2 / 100));

  return (
    <div className="calculator">
      <Bill bill={bill} onSetBill={setBill}>
        how much was the bill
      </Bill>
      <Tip tip={tip1} onSetTip={setTip1}>
        how did you like the service
      </Tip>
      <Tip tip={tip2} onSetTip={setTip2}>
        how did your friend the service
      </Tip>

      {bill && (
        <>
          <TotalBill bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
};

export default Calculator;
