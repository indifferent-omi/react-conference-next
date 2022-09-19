import { gql, request } from "graphql-request";

const graphqlApi = "https://api.react-finland.fi/graphql"
export const getThemes = async () => {
  const query = gql`
    query TestQuery{
      themes{
        id,
        colors{
          primary,
          secondary,
          text,
          background
        }
  }
}
    `
  const results = await request(graphqlApi, query);
  return results.themes;
} 