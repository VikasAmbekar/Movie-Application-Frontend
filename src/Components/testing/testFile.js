import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TestFile = ({ productId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFakeStoreProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchProductsById = async (productId) => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductsById(productId);
    } else {
      fetchFakeStoreProducts();
    }
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

TestFile.defaultProps = {
  productId: null,
};

TestFile.propTypes = {
  productId: PropTypes.number,
};

export default TestFile;
