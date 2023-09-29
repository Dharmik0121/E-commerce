import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function KidsAllProducts() {
  const getAllProducts = await productByCategory("kids");

  return <>
    <p className="text-black pt-5 text-center font-bold fs-6 text-4xl">For Kids</p>

    <CommonListing data={getAllProducts && getAllProducts.data} />;
  </>
}
