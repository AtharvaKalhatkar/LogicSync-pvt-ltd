import { useEffect } from 'react';
import Products from '../sections/Products';
import CustomCTA from '../sections/CustomCTA';

function ProductsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-4">Our Products</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy">
            Products Built for Real Businesses
          </h1>
          <p className="text-slate text-lg mt-4 max-w-3xl mx-auto">
            Each product is built around a specific industry workflow — solving real problems that business owners face every day.
          </p>
        </div>
      </section>
      <Products />
      <CustomCTA />
    </main>
  );
}

export default ProductsPage;
