import { PublicationDocument, PublicationQuery, PublicationQueryVariables } from '@/generated/graphql';
import request from 'graphql-request';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!;
const PUBLICATION_ID = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID!;

export async function getPublication() {
    const { publication } = await request<PublicationQuery, PublicationQueryVariables>(
        GQL_ENDPOINT,
        PublicationDocument,
        {
          id: PUBLICATION_ID
        }
    );
    return publication;
}