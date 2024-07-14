import { authOptions } from "@/auth";
import PricingCards from "@/components/PricingCards";
import { getServerSession } from "next-auth";




const Register = async() => {
    // get the user if they are logged in
    const session = await getServerSession(authOptions);
    
  return (
    <div className="isolate h-full overflow-hidden bg-gray-900 pb-40">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's handle your Membership {session?.user?.name ? session.user.name.split(" ")[0][0]?.toUpperCase() + session.user.name.split(" ")[0]?.slice(1) : ''} {" "}!
          </p>
        </div>
        <div className="relative">
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
      <PricingCards redirect={false}/>    
    
    </div>
  )
}

export default Register;
