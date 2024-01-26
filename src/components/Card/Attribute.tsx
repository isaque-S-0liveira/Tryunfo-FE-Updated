type AtrributeProps = {
  label: string;
  value: number;
};

function Atrribute({ label, value }: AtrributeProps) {
  return (
    <div className="Atrribute-container flex flex-col mb-3 ">
      <span className="att-label">{label}</span>
      <div className="att-value">
        <p>{value}</p>
      </div>
    </div>
  );
}

export default Atrribute;
