import { gql } from '@apollo/client';

export default gql`
  query Program($limit: Int) {
    program(limit: $limit) {
      id
      name
      thumnail {
        url
        alt
      }
    }
}`