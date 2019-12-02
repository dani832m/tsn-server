import { gql } from 'apollo-server-express';

const sparepartTypeDefs = gql`
  type Sparepart {
    _id: ID
    itemNo: String!
    name: String!
    price: Float!
    priceVAT: Float
    scooterId: String
    categoryId: String
  }
  input SparepartIn {
    itemNo: String
    name: String
    price: Float
    scooterId: String
    categoryId: String
  }

  extend type Query {
    getSpareparts: [Sparepart]
    getSparepartById(_id: ID!): Sparepart
  }

  extend type Mutation {
    addSparepart(
      itemNo: String!
      name: String!
      price: Float!
      priceVAT: Float
      scooterId: String
      categoryId: String
    ): Sparepart
    updateSparepartById(_id: ID!, input: SparepartIn): Sparepart
    deleteSparepartById(_id: ID!): Sparepart
  }
`;

module.exports = sparepartTypeDefs;
