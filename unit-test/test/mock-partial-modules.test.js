import { getAllProducts, getProductById } from "../src/database";

import { ProductService } from "../src/product-service";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");

  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn()
  }
});

test.failing("mock modules getProductByID", () => {
  ProductService.findById(1);
});

test("mock modules getAllProducts", () => {
  const products_result = [{
    id: 1,
    name: "product mock"
  }, {
    id: 2,
    name: "product mock 2"
  }, {
    id: 3,
    name: "product mock 3"
  }];
  getAllProducts.mockImplementation(() => {
    return products_result;
  });

  const products = ProductService.findAll();

  expect(products).toEqual(products_result)

});
