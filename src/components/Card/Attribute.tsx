type AtrributeProps = {
  label: string;
  value: number;
  attrFontSize:string;
};

function Atrribute({ label, value, attrFontSize }: AtrributeProps) {
  return (
    <div className="Atrribute-container flex flex-col mb-3 ">
      <span style={ { fontSize: attrFontSize } } className="att-label">{label}</span>
      <div className="att-value">
        <p>{value}</p>
      </div>
    </div>
  );
}

export default Atrribute;
