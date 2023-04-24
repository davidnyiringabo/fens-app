import "./field.css";
export default function Field(props: any) {
  return (
    <div className="field">
      <label className="text-bold">{props.labelName}</label>
      <input type={props.type} name={props.name} id={props.id} />
    </div>
  );
}
