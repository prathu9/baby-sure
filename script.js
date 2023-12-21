(function () {
  const places = Object.freeze({
    pune: {
      name: "Pune",
      number: [8, 6, 2, 3, 0, 8, 6, 0, 8, 6].join(""),
    },
    nagpur: {
      name: "Nagpur",
      number: [8, 1, 8, 1, 0, 6, 0, 0, 6, 0].join(""),
    },
    thane: {
      name: "Thane",
      number: [9, 3, 9, 3, 0, 5, 0, 5, 0, 5].join(""),
    },
  });

  const formData = {
    name: "",
    phoneNumber: "", 
    center: places.pune.name,
  };

  const bookBtn = document.querySelectorAll(".book-btn");
  const headerBckBtn = document.querySelectorAll(".header-bck-btn");
  const ivfCenterBtn = document.querySelectorAll(".ivf-center-location");

  const headerSection = document.querySelector("#header");
  const bookConcultSection = document.querySelector("#book-consult");
  const formSection = document.querySelector("#contact-section");

  headerBckBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        scrollToSection(headerSection.offsetTop);
    })
  })

  bookBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
    scrollToSection(bookConcultSection.offsetTop);
  })})

  ivfCenterBtn.forEach((ivfCenter) => {
    ivfCenter.addEventListener("click", (e) => {
      formData.center = e.target.value;
      console.log(formData)
      scrollToSection(formSection.offsetTop)
    });
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formData.name = e.target[0].value;
    formData.phoneNumber = e.target[1].value;

    const phoneNumberLen = formData.phoneNumber.length;
    if(phoneNumberLen > 10){
      const additionalNum = phoneNumberLen - 10;
      formData.phoneNumber = formData.phoneNumber.slice(additionalNum);
    }
    formData.phoneNumber = '+91-'+formData.phoneNumber;
    let url = `https://wa.me/${[9, 1, 9, 2, 8, 4, 1, 4, 9, 9, 5, 8].join(
      ""
    )}?text=Name: ${formData.name}%0aPhone number: ${formData.phoneNumber}%0aCenter: ${formData.center}%0a%0aThis message sent from wa link`;
    
    window.open(url, "_blank").focus();
  };

  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", handleFormSubmit);
})();

const scrollToSection = (top) => {
    if(!isNaN(top)){
        window.scrollTo({
            top,
            behavior: 'smooth'
        })
    }
}
