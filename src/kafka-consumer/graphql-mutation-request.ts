import { GraphQLClient, gql } from 'graphql-request';

const endpoint = process.env.URL;

export async function createArchive(event: any) {

    try {

        const graphQLClient = new GraphQLClient(endpoint, {
            headers: {
                authorization: 'Bearer MY_TOKEN',
            },
        });

        const mutation = gql`
        mutation createArchive(
            $eventId: String!, 
            $eventType: String!, 
            $eventDate: String!, 
            $userId: String!, 
            $userEmail: String!) {
                createArchive(
                    createArchiveInput: { 
                        eventId: $eventId, 
                        eventType: $eventType,
                        eventDate: $eventDate
                        eventData: {
                        userId: $userId,
                        userEmail: $userEmail
                    }
                }) 
                {
                    eventId
                }
            }`;

        const variables = {
            eventId: `${event.eventId}`,
            eventType: `${event.eventType}`,
            eventData: `${event.eventData}`,
            eventDate: `${event.eventDate}`,
            userId: `${event.eventData.userId}`,
            userEmail: `${event.eventData.userEmail}`
        }

        const data = await graphQLClient.request(mutation, variables);
        console.log(JSON.stringify(data, undefined, 2));

    } catch (error) {
        console.error(`Error creating archive from incoming event : ${error}`)
    }
};