const message = `Cũng hong biết Huyền Trang có đọc nó khi ghét anh hong.\nNhưng nếu có… anh chỉ muốn em bé nhà anh biết là, lúc nào anh cũng nghĩ về em hết nè.\n\nAnh biết chúng ta đều cố gắng. Đều quan tâm. Nhưng cuộc sống vốn không bình yên như những đoạn phim tình cảm lãng mạng.\n\nĐôi lúc anh nghĩ, nếu anh để em gặp vào một thời điểm khác, thì anh có cho em nhiều thứ hơn như này không? Có yêu em giống với cách em muốn hơn không?\n\nThôi thì nếu đêm nay em cảm thấy không ổn, thì anh vẫn sẽ ở đây. Nhé!`;

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
