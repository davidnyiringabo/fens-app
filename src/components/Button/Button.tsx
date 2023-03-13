import "./button.css";
export default function Button(props: any) {
  console.log(props);
  return (
    <div className="button">
      <input type="submit" value={props.buttonValue} />
    </div>
  );
}
