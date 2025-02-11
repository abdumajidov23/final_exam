import Hero from "../../components/hero/Hero"
import MovingText from "../../components/MovingText";
import Products from "../../components/products/Products"
import { useGetProductsQuery } from "../../redux/api/product-api";
import HomeLoading from "../loading/HomeLoading";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery({});
  

  return (
    <div className="container">
      {isLoading ? (
        <HomeLoading />
      ) : (
        <>

          <Hero />
          {data && (
            <Products
            data={data}
            title=""
            />
          )}
        </>
      )}
    </div>
  );
}

export default Home