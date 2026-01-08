export interface Event {
    id: string;  
    title: string;
    date: string; 
    location: string;
    description?: string;
}


export default EVENTS :Event[]=[
    {        id: '1',
        title: 'Music Concert',
        date: '2024-07-15',
        location: 'Central Park',
        description: 'Join us for an evening of live music under the stars.'},
    {        id: '2',
        title: 'Art Exhibition',
        date: '2024-08-01',             
        location: 'Downtown Gallery',
        description: 'Explore contemporary art from local artists.'
    },
    {        id: '3',
        title: 'Tech Conference',
        date: '2024-09-10',
        location: 'Convention Center',
        description: 'A gathering of tech enthusiasts and professionals.'},         

        
]