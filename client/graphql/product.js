import gql from 'graphql-tag';


const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      department
      title
      description
      image
      category
      brand
      online
      user {
        id
        name
      }
      productVariants {
        id
        price
        quantity
        color
        size
        price
        sale
        salePrice
      }
    }
  }
`;

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $title: String!,
    $department: String!,
    $description: String!,
    $image: String!,
    $category: String,
    $brand: String
  ) {
    createProduct(
      title: $title,
      department: $department,
      description: $description,
      image: $image,
      category: $category,
      brand: $brand,
    ) {
      id
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!,
    $title: String!,
    $department: String!,
    $description: String!,
    $image: String!,
    $category: String,
    $brand: String
    $online: Boolean!
  ) {
    updateProduct(
      id: $id,
      title: $title,
      department: $department,
      description: $description,
      image: $image,
      category: $category,
      brand: $brand,
      online: $online
    ) {
      id
    }
  }
`;

export {
  PRODUCT_QUERY,
  CREATE_PRODUCT_MUTATION,
  UPDATE_PRODUCT_MUTATION
}
