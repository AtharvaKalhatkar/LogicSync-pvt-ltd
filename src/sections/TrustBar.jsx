
import { useCountUp } from '../lib/hooks';

const TrustBar = () => {
  const [ref1, count1] = useCountUp(10, 2000);
  const [ref2, count2] = useCountUp(7, 2000);
  const [ref3, count3] = useCountUp(11, 2000);

  return (
    <div className="bg-gray-50 border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          
          <div className="flex flex-col items-center text-center" ref={ref1}>
            <span className="text-4xl font-bold text-orange mb-2">
              {count1}+
            </span>
            <span className="text-slate text-sm uppercase tracking-wider font-semibold">
              Projects Delivered
            </span>
          </div>

          <div className="flex flex-col items-center text-center" ref={ref2}>
            <span className="text-4xl font-bold text-orange mb-2">
              {count2}
            </span>
            <span className="text-slate text-sm uppercase tracking-wider font-semibold">
              Projects Ongoing
            </span>
          </div>

          <div className="flex flex-col items-center text-center" ref={ref3}>
            <span className="text-4xl font-bold text-orange mb-2">
              {count3}
            </span>
            <span className="text-slate text-sm uppercase tracking-wider font-semibold">
              Clients Served
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrustBar;
