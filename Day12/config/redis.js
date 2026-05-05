import { createClient } from 'redis';


const client = createClient({
    username: 'default',
    password: 'yaIuqasjDT8vzKTTjdROB4ljLjEYvuyS',
    socket: {
        host: 'redis-16913.c212.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 16913
    }
});



export default client;