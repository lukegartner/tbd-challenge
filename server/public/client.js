const messageContainer = document.querySelector(".message-container");

const getMessages = () => {
  fetch("/messages")
    .then((response) => response.json())
    .then((messages) => {
      messageContainer.innerHTML = messages
        .map((message) => {
          return `
             <div class="message">
             <h2>${message.title}</h2>
             <p>${message.text}</p>
        </div>
        `;
        })
        .join("");
    });
};
getMessages();
