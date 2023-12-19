(function () {
  const places = Object.freeze({
    pune: {
      name: "Pune",
      number: [8,6,2,3,0,8,6,0,8,6].join(""),
    },
    nagpur: {
      name: "Nagpur",
      number: [8,1,8,1,0,6,0,0,6,0].join(""),
    },
    thane: {
        name:"Thane",
        number: [9,3,9,3,0,5,0,5,0,5].join("")
    }
  });
console.log(places)
  const ivfCenterBtn = document.querySelectorAll(".ivf-center-location");

  const formData = {
    name: "",
    phoneNumber: "", //pattern="((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}"
    center: places.pune.name,
  };

  ivfCenterBtn.forEach((ivfCenter) => {
    ivfCenter.addEventListener("click", () => {
      formData.center = ivfCenter.getAttribute("data-ivf-center");
    });
  });
//919284149958
  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      formData.name = e.target[0].value;
      formData.phoneNumber = e.target[1].value;
      
      let url = `https://wa.me/${[9,1,9,2,8,4,1,4,9,9,5,8].join("")}?text=
      Name: ${formData.name}%0aPhone number: ${formData.phoneNumber}%0a
      Center: ${formData.center}%0a%0aThis message sent from wa link`
      console.log(formData);
      window.open(url, '_blank').focus();
    } catch (err) {
      console.log(err);
    }
  };

  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", handleFormSubmit);
})();
