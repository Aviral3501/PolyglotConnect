import { CheckIcon } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    id: "starterId",
    href: "#",
    priceMonthly: null,
    description: "Get chatting right away with anyone,anywhere!",
    features: [
      "20 Messages Chat limit in Chats",
      "2 Participants limit in Chat",
      "3 Chat Rooms limit",
      "Supports 2 languages",
      "48-hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "proId",
    href:"#",
    priceMonthly: "₹499",
    description:"Unlock the Full Potential with Pro!",
    features: [
        "Unlimited Messages in chat",
        "Unlimited Participants in Chats",
        "Unlimited Chat Rooms",
        "Supports 10 languages",
        "Multimedia support in chats (coming soon)",
        "1-hour dedicated support response time",
        "Early accesss to new features",
    ],
  },
];

const PricingCards = (redirect: { redirect: boolean }) => {
  return (
    <div>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 ">
            {tiers.map((tier)=>(
                <div key={tier.id}
                className="flex flex-col justify-between rounded-3xl bg-slate-100 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
                    <div>
                        <h3
                        id={tier.id+tier.name}
                        className="text-base font-semibold leading-7 text-indigo-600">
                            {tier.name}
                        </h3>
                        <div className="mt-4 flex items-baseline gap-x-2">
                            {tier.priceMonthly ? (
                                <>
                                <span className="text-5xl font-bold tracking-tight text-gray-900 ">
                                    {tier.priceMonthly}
                                </span>
                                <span className="text-base font-semibold leading-7 text-gray-600">
                                /month
                                </span>
                                </>
                            ):(
                                <>
                                <span className="text-5xl font-bold tracking-tight text-gray-900">
                                    Free
                                </span>
                                </>
                            )}
                            </div>
                            
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                {tier.description}
                                </p>
                            <ul
                            role="list"
                            className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                {tier.features.map((feature)=>(
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden={true}/>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                

            ))}

        </div>
    </div>
  );
};

export default PricingCards;
