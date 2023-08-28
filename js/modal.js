class ReusableModal {
  constructor({ titleText, messageText }) {
    // Constructor to initialize modal properties
    this.titleText = titleText;
    this.messageText = messageText;
  }

  createopenModal() {
    // Create the main modal container element
    this.modalElement = document.createElement("div");
    this.modalElement.classList.add("modal");
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      this.modalElement.classList.add("open");
    }, 400);

    // Create the content container inside the modal
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    this.modalElement.appendChild(modalContent);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");

    const svgIcon = document.createElement("img");
    svgIcon.src = "./assets/close.svg";

    closeButton.appendChild(svgIcon);

    closeButton.addEventListener("click", () => {
      this.closeModal();
    });
    modalContent.appendChild(closeButton);

    // Create and set the title text
    const titleText = document.createElement("p");
    titleText.classList.add("title-text");
    titleText.textContent = this.titleText;
    modalContent.appendChild(titleText);

    // create and set the paragraph text

    const messageText = document.createElement("p");
    messageText.classList.add("message-text");
    messageText.textContent = this.messageText;
    modalContent.appendChild(messageText);

    // function for Input creation, with label and pl
    function createInputWithLabel(
      type,
      placeholder,
      labelText,
      inputId,
      ariaLabel
    ) {
      const inputLabel = document.createElement("label");
      inputLabel.textContent = labelText;

      const input = document.createElement("input");
      input.setAttribute("type", type);
      input.setAttribute("placeholder", placeholder);
      input.setAttribute("id", inputId);

      if (ariaLabel) {
        input.setAttribute("aria-label", ariaLabel);
      }

      inputLabel.setAttribute("for", inputId);

      const labelContainer = document.createElement("div");
      labelContainer.appendChild(inputLabel);

      const inputContainer = document.createElement("div");
      inputContainer.appendChild(labelContainer);
      inputContainer.appendChild(input);

      return inputContainer;
    }

    // Create the form element
    const form = document.createElement("form");
    form.id = "EbookForm";
    modalContent.appendChild(form);

    // Create name inputs
    const nameContainer = document.createElement("div");
    nameContainer.classList.add("name-container");

    nameContainer.appendChild(
      createInputWithLabel(
        "text",
        "Bob",
        "First Name",
        "first-name-input",
        "First Name Input"
      )
    );
    nameContainer.appendChild(
      createInputWithLabel(
        "text",
        "Burgers",
        "Last Name",
        "last-name-input",
        "Last Name Input"
      )
    );

    form.appendChild(nameContainer);

    // Create email input
    const emailContainer = document.createElement("div");
    emailContainer.classList.add("email-container");
    emailContainer.appendChild(
      createInputWithLabel(
        "email",
        "bob@burgers.com",
        "Email",
        "email-input",
        "Email Input"
      )
    );

    form.appendChild(emailContainer);

    // Create the button and message container
    const buttonAndMessageContainer = document.createElement("div");
    buttonAndMessageContainer.classList.add("button-and-message-container");

    // Create the submit button
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("aria-label", "Submit the form");
    submitButton.classList.add("submit-button");
    submitButton.textContent = "Submit";

    // Add the submit button to the new container
    buttonAndMessageContainer.appendChild(submitButton);

    // Add the button and message container to the form
    form.appendChild(buttonAndMessageContainer);

    // Add submit event listener to the form
    form.addEventListener("submit", (event) => {
      const nameInputs = form.querySelectorAll('input[type="text"]');
      const emailInput = form.querySelector('input[type="email"]');
      let nameFieldsValid = true;
      let emailFieldValid = true;

      nameInputs.forEach((nameInput) => {
        if (nameInput.value.trim().length < 2) {
          nameFieldsValid = false;
          nameInput.classList.add("input-error");
        }
      });

      if (emailInput.value.trim().length < 2) {
        emailFieldValid = false;
        emailInput.classList.add("input-error");
      }

      if (!nameFieldsValid || !emailFieldValid) {
        event.preventDefault();
        return;
      }

      // Prevent the form from submitting, do validation first
      event.preventDefault();

      const inputElements = document.querySelectorAll("input");
      inputElements.forEach((input) => {
        input.disabled = true;
      });

      submitButton.style.backgroundColor = "#38C983";
      submitButton.textContent = "Sent";

      const submittedMessage = document.createElement("p");
      submittedMessage.textContent = "Check your inbox for the download link";
      buttonAndMessageContainer.appendChild(submittedMessage);

      submitButton.disabled = true;

      console.log("Form submitted");
    });

    // Append the modal element to the body to make it visible
    document.body.appendChild(this.modalElement);
  }
  closeModal() {
    // Method to close the modal
    document.body.removeChild(this.modalElement);
    document.body.style.overflow = "auto";
  }
}
