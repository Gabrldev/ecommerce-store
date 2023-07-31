import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";



export const revalidate = 0;


async function HomePage() {
  const products = await getProducts({isFeatured: true});
  const billboards = await getBillboard("3b533a90-59ee-4c90-8520-7ca5f7682d29");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
        <div className="flex flex-col gap-x-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
