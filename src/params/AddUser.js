import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min"

function AddUSer(){
    const history = useHistory();
    console.log(history);

    const location = useLocation()
    const match = useRouteMatch()
    const params = useParams();
}

export default AddUSer