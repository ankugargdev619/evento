

export default function Hero(){
    return <section className="bg-bannerImg bg-no-repeat bg-cover bg-bottom h-screen md:h-[75vh] w-full">
        <div className="w-full h-full bg-blackOverlay flex flex-col items-center justify-start text-white text-center">
            <div className="px-4 pd:mx-10 mt-20 w-full py-10 md:py-16">
                <h1 className="text-4xl font-bold uppercase">The Stage is Yours, We Handle the Rest</h1>
                <br/>
                <div className="text-center">
                    <span className="text-2xl text-wrap">
                        Streamline the process for organizers to manage, sell tickets and merchandise effortlessly.<br />
                        Provide audiences with an intuitive platform to book their favorite events quickly.
                    </span>
                </div>
            </div>
            <br/>
            <br/>
            <button className="bg-brand-600 px-5 py-2 rounded mb-10 md:mb-2">Join Now</button>
        </div>
      </section>
}