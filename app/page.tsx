export default function Home() {
  return (
    <div className=" h-full w-full relative ">
    
          {/* grid */}
      <div className=" absolute  inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[size:1rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_90%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {/* blob bg */}
      {/* --------------------------------------------------------------------------------------------- */}
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
                <div className=" absolute top-4 right-[15rem] h-2/6 w-1/6 translate-x-3/4 opacity-80">
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
{/* --------------------------------------------------------------------------------------------------------- */}
      {/* main content */}
      <div className="py-12 sm:py-20 lg:py-40 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Chat with Anyone, anywhere!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              You speak your language, they speak their language.{" "}
              <span className="text-red-600 dark:text-indigo-500">
                Let AI handle the translation.
              </span>
            </p>
          </div>
        </div>
      </div>
            
       



    


    </div>

    
  );
}
