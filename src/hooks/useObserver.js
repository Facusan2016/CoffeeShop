import { useEffect, useRef, useState } from "react";

export default function useObserver(options){ //This hook was extracted from internet

    const [elements, setElements] = useState([]); 
    const [entries, setEntries] = useState([]);

    const observer = useRef( new IntersectionObserver(function(observedEntries){
        setEntries(observedEntries); //I set an intersection observer to each one of the entries.
    }, options));

    useEffect(() => {
      const currentObserver = observer.current;
      currentObserver.disconnect();

      if(elements.length > 0){ //Then activate the observe 
        elements.forEach(element => currentObserver.observe(element));
      }
    
      return function cleanUp(){ //And adding a cleanup function to disconnect the observers from the entries.
        if(currentObserver){
            currentObserver.disconnect();
        }
      }
    }, [elements])
   
    return [observer.current, setElements, entries];
}