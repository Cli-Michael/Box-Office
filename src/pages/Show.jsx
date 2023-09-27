import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiGet } from "../misc/config";


const Show = () => {

  const {id} = useParams();

  console.log("params: ",id);

  const [show, setShow] = useState(null);
  const [isLoading, setSetIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( ()=>{

    let isMounted = true;    
  
      apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
         setTimeout(()=>{
            if(isMounted){
                setShow(results);
                setSetIsLoading(false);
            }
         },2000);
      }).catch(err => {
        if(isMounted){
            setError(err.message);
            setSetIsLoading(false);
        }
      });

      return ()=>{
        isMounted = false;
      }
  }, [id] )
    
  console.log("show",show);

  if(isLoading){
    return <div>Data is being loaded</div>
  }

  if(error){
    return <div>Error Occured: {error}</div>
  }

  return (
    <div>This is Show Page</div>
  )
}

export default Show;