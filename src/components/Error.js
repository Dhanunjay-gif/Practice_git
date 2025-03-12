import { useRouteError } from "react-router";
const Error = () =>{
    const err = useRouteError();
    return (
        <div className="error">
            <h1>Oops!</h1>
            <h1 className="servererror">{err.status}</h1>
            <h4 className="pageerrormsg">Page {err.statusText}</h4>
        </div>
    )
}

export default Error;