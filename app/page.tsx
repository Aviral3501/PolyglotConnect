export default function Home() {
  return (
    <div>
     
      {/* grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:1rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_90%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {/* blob bg */}
      <div
        className="absolute flex h-full w-full overflow-hidden bg-base-100"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="h-3/6 w-2/5 translate-y-1/4 opacity-70">
          <div className="h-full w-full opacity-70 blur-2xl">
            <div className="h-full w-full blur-2xl">
              <div
                className="rotate-30 h-full w-full bg-purple-600 blur-2xl"
                style={{
                  clipPath:
                    "polygon(40% 0%, 80% 30%, 40% 80%, 20% 70%, 0% 30%)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="h-2/6 w-1/6 translate-x-3/4 opacity-80">
          <div className="h-full w-full opacity-80 blur-2xl">
            <div className="h-full w-full blur-2xl">
              <div
                className="rotate-45 h-full w-full bg-indigo-500"
                style={{
                  clipPath:
                    "polygon(60% 0%, 100% 40%, 70% 100%, 30% 100%, 0% 40%)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-3 h-2/6 w-2/6 mr-10  opacity-60 ">
          <div className="h-full w-full opacity-60 blur-2xl">
            <div className="h-full w-full blur-2xl">
              <div
                className="rotate-12 h-full w-full bg-indigo-800"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 20%, 80% 100%, 20% 100%, 0% 20%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>


      {/* main content */}
      


     
    </div>
  );
}
