import { Products } from "@/types";
import ProductCard from "./ProductCard";

type Props = {
  data: Products
}

const Featured = ({data}: Props) => {
  return (
    <div className="w-full overflow-x-scroll text-gold">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {data.map((item) => (
          <ProductCard key={item._id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Featured