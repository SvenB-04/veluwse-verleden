"use client";

import Image from "next/image";

export default function Home() {
    const images = [
        {
            title: "1. vorming van de landschap en de jagers en verzamelaars",
            url: "/1.jagers-en-verzamelaars",
            image: "/public/jagers.png"
        },
        {
            title: "2. de eerste boeren en hun grafheuvelritueel",
            url: "/2.grafheuvels",
            image: "veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg"
        },
        {
            title: "3. oog in oog met de Romeinen",
            url: "/3.oog-in-oog-met-de-romeinen",
            image: "veluwse-verleden/public/ROM_ABV_KLEUR_DEF.jpg"
        },
        {
            title: "4. de ijzersterke middeleeuwen",
            url: "/4.de-ijzersterke-middeleeuwen",
            image: "/public/middeleeuwen.png"
        },
        {
            title: "5. hoe de mens in het landschap ingreep en het veluws natuurgebied ontstond",
            url: "/5.hoe-de-mens-in-het-landschap-ingreep-en-het-veluws-natuurgebied-ontstond",
            image: "/public/ontstond.png"
        },
        {
            title: "6. beken, sprengen en watermolens in het veluws landschap",
            url: "/6.beken-sprengen-en-watermolens-in-het-veluws-landschap",
            image: "/public/watermolen.png"
        },
        {
            title: "7. het argrarisch landschap van de veluwe",
            url: "/7.het-agrarisch-landschap-van-de-veluwe",
            image: "/public/agrarisch.png"
        },
        {
            title: "8. oorlog, vrede en veiligheid op de veluwe",
            url: "/8.oorlog-vrede-en-veiligheid-op-de-veluwe",
            image: "/public/oorlog.png"
        }
    ];

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
            <h1 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
                Websites
            </h1>
            <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
                {images.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800">
                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                {item.title}
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
