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
    center: places.pune.name.toLowerCase(),
  };

  const bookBtn = document.querySelectorAll(".book-btn");
  const headerBckBtn = document.querySelectorAll(".header-bck-btn");
  const ivfCenterBtn = document.querySelectorAll(".ivf-center-location");

  const headerSection = document.querySelector("#header");
  const bookConsultSection = document.querySelector("#book-consult");
  const formSection = document.querySelector("#contact-section");

  headerBckBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
       popupSection(btn.parentElement, false);
    })
  })

  bookBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
    if(btn.parentElement === formSection){
      popupSection(formSection, false);
    }
    else{
      popupSection(bookConsultSection, true);
    }
    
  })})

  ivfCenterBtn.forEach((ivfCenter) => {
    ivfCenter.addEventListener("click", (e) => {
      formData.center = e.target.value;
      popupSection(formSection, true)
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
    let url = `https://wa.me/${places[formData.center].number}?text=Name: ${formData.name}%0aPhone number: ${formData.phoneNumber}%0aCenter: ${formData.center}`;

    window.open(url, "_blank").focus();
  };

  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", handleFormSubmit);
})();


const popupSection = (sectionElem, showElem) => {
  if(showElem){
    sectionElem.style.transform="translateY(-100%)"
  }
  else{
    sectionElem.style.transform="translateY(0%)"
  }
}
