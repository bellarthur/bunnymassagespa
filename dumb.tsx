{/* <div className="w-full relative overflow-hidden rounded-2xl h-[115%] group">
  <motion.img
    src={s.image}
    alt={s.alt}
    className="w-full h-full object-cover rounded-2xl select-none brightness-90 group-hover:brightness-75 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4 }}
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 bg-black/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <h3 className="text-2xl font-semibold mb-3">{s.name}</h3>
    <p className="text-sm text-gray-100 mb-4">{s.duration}</p>
    <div className="flex gap-3">
      <button
        className="px-4 py-2 rounded-full bg-primary text-white font-medium shadow-sm hover:bg-primary/80 transition"
        onClick={() => {
          if (typeof window !== "undefined") {
            const serviceSlugMap: {[key: string]: string} = {
              "Thai Massage": "thai-massage",
              "Deep Tissue Massage": "deep-tissue",
              "Swedish Massage": "swedish",
              "Nuru Massage": "nuru",
              "Sensual Massage": "sensual",
              "Erotic Massage": "erotic",
              "Swedish/Deep Tissue Nuru": "swedish-nuru",
              "Couple Massage": "couples",
            }
            const serviceSlug = serviceSlugMap[s.name] || "thai-massage"
            localStorage.setItem("selectedService", serviceSlug)
          }
          document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        Book Now
      </button>
      <Link
        href="#"
        className="px-4 py-2 rounded-full border border-white text-white font-medium shadow-sm hover:bg-white/10 transition"
      >
        Learn More
      </Link>
    </div>
  </div>
</div> */}


//    <div className="w-full">
//                     <h3 className="text-xl font-semibold text-foreground">{s.name}</h3>
//                     {/* <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
//                       {s.description}
//                     </p> */}
//                     <div className="text-foreground/90">
//                       <div>{s.duration}</div>
//                       {/* <div className="text-lg font-bold text-primary">₵{s.price}</div> */}
//                     </div>
//                     <div className="flex items-center gap-3 mt-5 w-full">

//                     <button
//                     className="px-4 py-2 rounded-full bg-primary text-white font-medium shadow-sm hover:bg-primary transition w-1/2"
                    //   onClick={() => {
                    //   // Store selected service in localStorage
                    //   if (typeof window !== "undefined") {
                    //     const serviceSlugMap: {[key: string]: string} = {
                    //     "Thai Massage": "thai-massage",
                    //     "Deep Tissue Massage": "deep-tissue",
                    //     "Swedish Massage": "swedish",
                    //     "Nuru Massage": "nuru",
                    //     "Sensual Massage": "sensual",
                    //     "Erotic Massage": "erotic", 
                    //     "Swedish/Deep Tissue Nuru": "swedish-nuru",
                    //     "Couple Massage": "couples"
                    //     }
                    //     const serviceSlug = serviceSlugMap[s.name] || "thai-massage"
                    //     localStorage.setItem("selectedService", serviceSlug)
                    //   }
                    //   // Scroll to booking section
                    //   document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                    //   }}
//                     >
//                       Book Now
//                     </button>
//                     <div className="flex justify-center items-center w-1/2">

//                      <Link href="#" className="text-white/90 underline-offset-4 font-medium hover:underline">
//                 Learn More
//               </Link>
//                     </div>
//                     </div>
//                   </div>