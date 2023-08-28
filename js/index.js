const modal = new ReusableModal({
  titleText: "We need some details",
  messageText:
    "Tell us a little about yourself to download the free e-book! Don’t worry, we never share these details with anyone else. ",
});

document.getElementById("openModal").addEventListener("click", () => {
  modal.createopenModal();
});
