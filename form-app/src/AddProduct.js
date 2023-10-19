import React, { useState } from 'react';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    productName: '',
    productDescription: '',
    productPrice: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(productData, null, 2));
    console.log(productData);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={productData.productName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Product Description:
          <input
            type="text"
            name="productDescription"
            value={productData.productDescription}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Product Price:
          <input
            type="number"
            name="productPrice"
            value={productData.productPrice}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
