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
                className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
            ></button>
            <button
                onClick={laatIn}
                className="px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-700"
            ></button>
            </div>
            
        )
    }
