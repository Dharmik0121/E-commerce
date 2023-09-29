import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function WomenAllProducts() {
  const getAllProducts = await productByCategory("women");

  return <>
    <p className="text-black pt-5 text-center font-bold fs-6 text-4xl">For Women</p>
    <CommonListing data={getAllProducts && getAllProducts.data} />
  </>;
}
