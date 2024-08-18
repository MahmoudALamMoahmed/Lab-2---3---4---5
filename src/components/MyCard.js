import { Link } from "react-router-dom";

function MyCard(props) {
  return (

      <div className="card m-auto " style={{ width: "300px",border:"1px solid black" }}>
        <img src={props.image} className="card-img-top m-auto" alt="..." style={{width:"300px",height:"240px"}} />
        <hr/>
        <div className="card-body">
        {props.title && (
            <h4 className="card-text">
               {props.title}
            </h4>
          )}
          {props.bio && (
            <p className="card-text fs-4">
               {props.bio}
            </p>
          )}

          {props.address && (
            <h5 className="card-text">
              <b>Date :</b> {props.address}
            </h5>
          )}
          {props.num && (
            <p className="card-text">
              <b> {props.num}</b>
            </p>
          )}

          {props.url && (
            <Link to={props.url} className="btn btn-primary">
              Go Details
            </Link>
          )}
          
        </div>
      </div>

  );
}

export default MyCard;
