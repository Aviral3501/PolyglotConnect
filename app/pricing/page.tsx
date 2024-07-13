import PricingCards from "@/components/PricingCards";
import Link from "next/link";

type Props = {};

function PricingPage(){
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className=" mx-auto max-w-7xl px-6 pb-96 pt-10 text-center sm:pt-15 lg:px-8">
        <div className=" mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Thre right price for you,{" "}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
        </div>
        <div className="relative mt-6 ">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            {" "}
            We are 99% sure we have a plan to match 100% of your needs
          </p>
         
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <defs>
              <radialGradient
                id="radial-gradient-pricing"
                cx="50%"
                cy="50%"
                r="50%"
              >
                <stop offset="0%" stopColor="#7775D6" />
                <stop offset="100%" stopColor="#E935C1" />
              </radialGradient>
              <filter
                id="blur-filter"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
              <feGaussianBlur stdDeviation="50" />
              </filter>
            </defs>
            <ellipse
              cx="604"
              cy="512"
              rx="604"
              ry="512"
              fill="url(#radial-gradient-pricing)"
              filter="url(#blur-filter)"
            />
          </svg>
        </div>
      </div>

      <div className=" flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <PricingCards redirect={true}/>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;








