import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function MenAllProducts() {
  const getAllProducts = await productByCategory("men");

  return (
    <>
      <p className="text-black pt-5 text-center font-bold fs-6 text-4xl">For Man</p>

      <CommonListing data={getAllProducts && getAllProducts.data} />;
    </>
  )
}
