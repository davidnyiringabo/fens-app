import { Link } from "react-router-dom";
export const Card=(props:any)=>{
    return(
        <div className="card">
            <div className="icon">
                {props.svg}
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
    return(
    <div className="card">
        <div>
        <h3>{props.title}</h3>
        <p>{props.price}</p>
        <p>{props.desc}</p>
        </div>
        <div className="text">
              <ul>
                  <li>{props.feature0}</li>
                  <li>{props.feature1}</li>
                  <li>{props.feature2}</li>
                  <li>{props.feature1}</li>
                  <li>{props.feature2}</li>
              </ul>
        </div>
        <Link to='/signup'>Get started</Link>

    </div>)
}
export const Icon=(props:any)=>{
    return  <div className="media icon">{props.icon}</div>
 
}

