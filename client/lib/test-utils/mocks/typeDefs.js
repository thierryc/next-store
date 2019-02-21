import {
  fakeUser, fakeImage, fakeProduct, fakeVariant, fakeCartItem,
} from '../utils';


const mockUser = fakeUser();
const mockImage = fakeImage();
const mockProduct = fakeProduct();
const mockVariant = fakeVariant();
const mockCartItem = fakeCartItem();

const mockImageVariables = {
  cloudinary_id: mockImage.cloudinary_id,
  name: mockImage.name,
  height: mockImage.height,
  width: mockImage.width,
  transformation: mockImage.transformation,
  image_url: mockImage.image_url,
  large_image_url: mockImage.large_image_url
};

const mockShopProductsVariables = {
  name: mockUser.name,
  orderBy: 'createdAt_DESC',
  skip: 0,
  first: 1
 };


export {
  mockUser,
  mockImage, mockImageVariables,
  mockProduct, mockShopProductsVariables,
  mockVariant,
  mockCartItem,
};