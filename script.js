const message = `Cũng hong biết cái này có tới được với plin hong.\nNhưng nếu có… thì cho ndi được nói xin lỗi nè, chắc ndi nhắn Locket hay TikTok Linh cũng xem rùi.\n\nNhưng bao nhiêu cho đủ đúng hong.\n\nSự thiếu tôn trọng lúc đó là cái sai lớn nhất của ndi, và chỉ có thế xin lỗi thôi.\n\nVề việc chứng minh ndi sẽ sửa sai bằng hành động và thái độ ớ, thì trước đó ndi muốn bù cho Linh một món quà nào đó xinh xắn, nếu được. Và đêm vui vẻ nhe, cô váo, à hông, "lói cho juan vào, cô giáo", nhỉ!`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

