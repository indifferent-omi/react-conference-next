import { gql, request } from "graphql-request";

const graphqlApi = "https://api.react-finland.fi/graphql"
export const getConferances = async () => {
  const query = gql`
    query GetConferances{
        conferences{
          id,
          year,
          name,
          startDate,
          endDate,
          slogan,
          organizers{
              name,
            aboutShort,
            company,
            image{
                      url,
              title
            }
            },
          speakers{
            name,
            about,
            company,
            image{
              url,
              title
            }
          },
          sponsors{
            name,
            about,
            company,
            image{
                url,
              title
            },
            location{
              name,
              about,
              image{
                url,
                title,
              }
              city,
              address
            }
          },
          locations{
            name,
            about,
            city,
            country{
                name
            },
            address,
            image{
              url,
              title,
              
            }
            
          },
          schedules {
            day,
            description,
            intervals{
              sessions{
                  title,
                  hasTitle,
                  description,
                  day,
                  begin,
                  end
              },
            }
          }
        }
      }
    `
  const results = await request(graphqlApi, query);
  return results.conferences;
}

export const getScheduleDetails = async (id) => {
  const query = gql`
query GetScheduleDetails($id : ID!) {
  conference(id: $id){
    id
    organizer {
      name
      aboutShort
      company
      image {
        url
        title
      }
    }
    sponsors {
      name
      about
      company
      image {
        url
        title
      }
      location {
        name
        about
        image {
          url
          title
        }
        city
        address
      }
    }
    speakers {
      name
      about
      company
      image {
        url
        title
      }
    }
    locations {
      name
      about
      city
      country {
        name
      }
      address
      image {
        url
        title
      }
    },
          schedules {
            day,
            description,
            intervals{
              sessions{
                  title,
                  hasTitle,
                  description,
                  day,
                  begin,
                  end
              },
            }
          }
  }
  }
  `
  const result = await request(graphqlApi, query, { id });

  return result.conference;
} 
