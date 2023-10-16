import { getAllProducts, getProductById } from "../src/database";

import { ProductService } from "../src/product-service";

jest.mock("../src/database.js");

test("mock modules getProductByID", () => {
  getProductById.mockImplementation((id) => {
    return {
      id: id,
      name: "product mock"
    }
  });

  const product = ProductService.findById(1);

  expect(product).toEqual({
    id: 1,
    name: "product mock"
  })
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
