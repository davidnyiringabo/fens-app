import { Link } from "react-router-dom";
export const Card=(props:any)=>{
    return(
        <div className="card">
            <div className="icon">
                <i></i>
            </div>
            <div className="text">
                <h3>
                    {props.name}
                </h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}
export const Card2 = (props:any)=>{
    let feature0;
    let feature1;
    let feature2;
    return(
    <div className="card">
        <h3>{props.title}</h3>
        <div className="text">
              <p>{props.price}</p>
              <p>{props.desc}</p>
              <ul>
                  <li>{props.feature0}</li>
                  <li>{props.feature1}</li>
                  <li>{props.feature2}</li>
              </ul>
              <Link to='/signup'>Get started</Link>
        </div>
    </div>)
}
