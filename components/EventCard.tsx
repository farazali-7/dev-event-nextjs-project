import { Event } from "@/lib/events.data";
import Image from "next/image";

interface props{
    event :Event
}

export default function EventCard({event}:props){
    const {id ,title ,date,location,description} =event;
return(
    <div>
       <h1>{ title}</h1>

<Image  src={`/images/events/${id}.jpg`} alt={title} width={300} height={200}/>
       <p>{date}</p>
       <p>{location}</p>
       {description && <p>{description}</p>}
    </div>
)    
}