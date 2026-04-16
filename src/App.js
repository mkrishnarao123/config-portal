import "./App.css";
import { useEffect, useState, useReducer } from "react";

function App() {
  useEffect(() => {
    getProducts();
    // postProducts();
  }, []);
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [inputValue, setInputValue] = useReducer(searchFunctionality, "");
  async function getProducts() {
    let res = await fetch("https://dummyjson.com/products");
    let p = await res.json();
    setProducts(p.products);
    setProductList(p.products);
  }
  // async function postProducts() {
  //   let res = await fetch("https://fakestoreapi.com/products", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: "product",
  //       price: 10000,
  //       description: "hii product",
  //       image: "",
  //       category: "",
  //     }),
  //   });
  //   let data = await res.json();
  // }
  function searchFunctionality(prev, current) {
    if (current !== "") {
      const filterBySearch = products.filter((val, ind) =>
        val.title.toUpperCase().match(current.toUpperCase())
      );
      setProducts(filterBySearch);
    }
    else{
      setProducts(productList);
    }
  }
  return (
    <div className="App">
      <div className="width">
        <input
          type="text"
          value={inputValue}
          onKeyUp={(e) => setInputValue(e.target.value)}
          placeholder="Search here"
          className="width"
        ></input>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>category</th>
            <th>description</th>
          </tr>
        </thead>
        {products?.map((val) => {
          return (
            <tbody key={val.id}>
              <tr>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.category}</td>
                <td>{val.description}</td>
              </tr>
            </tbody>
          );
        })}
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default App;
