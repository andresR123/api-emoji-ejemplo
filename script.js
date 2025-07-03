async function getEmoji() {
    const res = await fetch("https://emojihub.yurace.pro/api/all")
    const emoji = await res.json()
    emojilist = ""
    console.log(emoji);
    emoji.forEach(emojig => {
        emojilist +=
        emojig.category +" "+
        emojig.group +" "+ "<br>"
});

    document.getElementById("emoji").innerHTML = emojilist

}