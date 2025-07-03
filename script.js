async function getEmoji() {
  const res = await fetch("https://emojihub.yurace.pro/api/all");
  const emojis = await res.json();
  let emojilist = "";

  emojis.forEach(emoji => {
    emojilist += `
      <div class="emoji-item">
        <span class="emoji">${emoji.htmlCode[0]}</span>
        <span class="label">${emoji.name}</span>
      </div>
    `;
  });

  document.getElementById("emoji").innerHTML = emojilist;
}
