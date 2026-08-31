document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("customerForm");
    const accordionHeaders = document.querySelectorAll(".accordion-headers");
    const submitButton = document.getElementById("submission-button");

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", (event) => {
            event.preventDefault();
            const section = header.parentElement;
            section.classList.toggle("active");
        });
    });
    const country = document.querySelector('select[name="country"]');
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const businessFirstName =document.getElementById("businessFirstName");
    const businessLastName =document.getElementById("businessLastName");

    const businessEmail =document.getElementById("businessEmail");
    function showError(input, message) {
        clearError(input);
        const error = document.createElement("div");
        error.className = "form-error";
        error.textContent = message;
        input.classList.add("input-error");
        input.parentElement.appendChild(error);
    }


    function clearError(input) {
        input.classList.remove("input-error");
        const existingError =
            input.parentElement.querySelector(".form-error");
        if (existingError) {
            existingError.remove();
        }
    }


    function validateRequired(input, fieldName) {
        if (!input.value.trim()) {
            showError(input, `${fieldName} is required.`);
            return false;
        }
        clearError(input);
        return true;
    }


    function validateEmail(input) {
        const emailValue = input.value.trim();

        // Basic email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValue) {
            showError(input, "Email is required.");
            return false;
        }

        if (!emailPattern.test(emailValue)) {
            showError(input, "Please enter a valid email address.");
            return false;
        }

        clearError(input);

        return true;
    }

    const requiredFields = [
        firstName,
        lastName,
        businessFirstName,
        businessLastName
    ];

    requiredFields.forEach((input) => {
        input.addEventListener("blur", () => {
            const fieldName = input.placeholder || "This field";

            validateRequired(input, fieldName);
        });

        input.addEventListener("input", () => {
            clearError(input);
        });
    });


    email.addEventListener("blur", () => {
        validateEmail(email);
    });

    email.addEventListener("input", () => {
        clearError(email);
    });


    businessEmail.addEventListener("blur", () => {
        validateEmail(businessEmail);
    });

    businessEmail.addEventListener("input", () => {
        clearError(businessEmail);
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let isValid = true;
        if (!country.value) {
            showError(country, "Please select a country.");
            isValid = false;
        } else {
            clearError(country);
        }
        if (!validateRequired(firstName, "First Name")) {
            isValid = false;
        }

        if (!validateRequired(lastName, "Last Name")) {
            isValid = false;
        }

        if (!validateEmail(email)) {
            isValid = false;
        }
        if (!validateRequired(
            businessFirstName,
            "Business First Name"
        )) {
            isValid = false;
        }

        if (!validateRequired(
            businessLastName,
            "Business Last Name"
        )) {
            isValid = false;
        }

        if (!validateEmail(businessEmail)) {
            isValid = false;
        }

        if (!isValid) {
            console.log("Form validation failed.");

            // Scroll to the first error
            const firstError =
                document.querySelector(".input-error");

            if (firstError) {
                firstError.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                firstError.focus();
            }

            return;
        }
        const customerData = {
            country: country.value,

            contact: {
                firstName: firstName.value.trim(),
                lastName: lastName.value.trim(),
                email: email.value.trim()
            },

            business: {
                firstName: businessFirstName.value.trim(),
                lastName: businessLastName.value.trim(),
                email: businessEmail.value.trim()
            }
        };

        console.log("Customer data:", customerData);

        alert("Customer setup completed successfully!");

      
        // {
        //     country: "United States",

        //     contact: {
        //         firstName: "John",
        //         lastName: "Smith",
        //         email: "john@example.com"
        //     },

        //     business: {
        //         firstName: "Jane",
        //         lastName: "Smith",
        //         email: "jane@company.com"
        //     }
        // }
      

        submitButton.disabled = true;
        submitButton.textContent = "Submitted";
    });
});
