export default function HeroSection() {
    return (
        <section className="bg-[#F5F7FB]">
            <div className="container max-h-150 w-full h-full m-auto grid place-items-center">
                <aside className="flex flex-col items-center text-center px-6 py-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Share Your Notes, <br />
                        Grow Knowledge.
                    </h1>
                    <p className="text-lg text-gray-500 mb-6 max-w-xl">
                        Join the pool of notes contributed by thousands of students.
                    </p>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <button className="bg-[#4C7EFF] text-white text-base font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
                            Discover
                        </button>
                        <button className="border-2 border-[#4C7EFF] text-[#4C7EFF] text-base font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                            Upload Notes
                        </button>
                    </div>
                </aside>
            </div>
        </section>
    );
}
