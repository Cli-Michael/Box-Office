import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiGet } from "../misc/config";


const Show = () => {

  const {id} = useParams();

  console.log("params: ",id);

  const [show, setShow] = useState(null);

  useEffect( ()=>{
      apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
         setShow(results);
      })
  }, [id] )
    
  console.log("show",show);

  return (
    <div>This is Show Page</div>
  )
}

export default Show;