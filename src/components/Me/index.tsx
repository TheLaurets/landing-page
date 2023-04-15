import Image from "next/image"

export const Me = () => {
    return (
        <section className="w-full h-screen my-10 max-sm:mt-5" id="about">
            <div className="flex flex-row items-center mt-2 mb-9">
                <h2 className="text-secondary text-2xl font-bold max-sm:text-1xl">
                    <span className="text-primary mr-4 max-sm:mr-2">1.</span>
                    About Me
                </h2>
                <hr className="bg-tertiary w-1/2 opacity-25 mx-6 max-sm:mx-3" />
            </div>
            <div className="flex flex-row justify-between max-sm:flex-col">
                <div className="w-1/2 text-tertiary  max-sm:w-full text-justify">
                    <p className="mb-3">
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p className="mb-3">
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    </p>
                    <p className="mb-3">
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                    </p>
                    <p className="mb-3">
                        Here are a few technologies I’ve been working with recently:
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-center max-sm:w-full max-sm:mt-4">
                    <Image
                        width={288}
                        height={288}
                        src="https://github.com/iludolf.png"
                        alt="Avatar"
                        className="border-solid border-2 border-tertiary shadow-lg  animate-[morphing_32s_infinite] z-10 grayscale-100 contrast-75 brightness-90 hover:grayscale-0 hover:contrast-100 hover:brightness-100"
                    />
                    <div
                        className="absolute w-72 h-72  order-solid border-2 border-primary shadow-lg  animate-[morphing_20s_infinite]"
                    />
                </div>
            </div>
        </section>
    )
}
