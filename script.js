const loveQuotes = [
    "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.",
    "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.",
    "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    "Love is composed of a single soul inhabiting two bodies.",
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    "I have died every day waiting for you. Darling, don't be afraid. I have loved you for a thousand years. I'll love you for a thousand more.",
    "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
    "To love is nothing. To be loved is something. But to love and be loved, that's everything.",
    "Love is like the wind, you can't see it but you can feel it.",
    "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
    "Love is a game that two can play and both win.",
    "Love is an endless mystery, for it has nothing else to explain it.",
    "The best thing to hold onto in life is each other.",
    "Love is not finding someone to live with. It's finding someone you can't live without.",
    "Love isn't something you find. Love is something that finds you.",
    "Love is an irresistible desire to be irresistibly desired.",
    "The greatest thing you'll ever learn is just to love and be loved in return.",
    "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love."
]
const indexconst = new Set()
const lovesQuotes  = document.getElementById("quote")
function generateLove(){
    if (indexconst.size >= loveQuotes.length){
        indexconst.clear()
    }
    while (true){
    const randomIdx = Math.floor(Math.random() *loveQuotes.length)

    if(indexconst.has(randomIdx)) continue
    const quote = loveQuotes[randomIdx]
    lovesQuotes.innerHTML = quote;
    indexconst.add(randomIdx)
    break
}  
} 
