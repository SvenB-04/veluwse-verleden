"use client";
type KledingBovenKnoppenprops = {
    laatUit: () => void;
    laatIn: () => void;
}

export default function KledingBovenKnoppen({
    laatIn,
    laatUit,
    }: KledingBovenKnoppenprops) {
        return (
            <div>
                <button
                onClick={laatUit}
                className="px-4 py-2 bg-red-600 rounded-4xl hover:bg-red-700 items-left justify-left mr-3"
            >stuur terug</button>
            <button
                onClick={laatIn}
                className="px-4 py-2 bg-green-600 text-black rounded-4xl hover:bg-green-700 items-right justify-right ml-3"
            >laat binnen</button>
            </div>
            
        )
    }
