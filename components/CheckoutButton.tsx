import Link from "next/link";

const CheckoutButton = () => {
  return (
    <div>
      {/* if subscribed show me the user is subscribed */}
      <button className=" min-w-full">
        <Link
          href={"/register"}
          className="flex  justify-center text-black mt-2 bg-slate-300 rounded-3xl p-2 hover:bg-slate-400"
        >
          Get Started today
        </Link>
      </button>
    </div>
  );
};

export default CheckoutButton;
