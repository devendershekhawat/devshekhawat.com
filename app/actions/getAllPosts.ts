import { PublicationDocument, PublicationPostsDocument, PublicationPostsQuery, PublicationPostsQueryVariables, PublicationQuery, PublicationQueryVariables } from '@/generated/graphql';
import request from 'graphql-request';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!;
const PUBLICATION_ID = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID!;

export async function getPublicationPosts() {
    const { publication } = await request<PublicationPostsQuery, PublicationPostsQueryVariables>(
        GQL_ENDPOINT,
        PublicationPostsDocument,
        {
          id: PUBLICATION_ID
        }
    );
    if (!publication) return [];

    return publication.posts.edges.map(({ node }) => node);
}