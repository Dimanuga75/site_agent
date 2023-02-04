const mQuery639 = window.matchMedia("(max-width: 639.98px)");
let openMemuBtn = document.querySelector(".btn__button");
let menuBox = document.querySelector(".header-hidden");
let menuBtnItem = document.querySelectorAll(".btn__button-item");
let header = document.querySelector(".wrapper__header");
let headerHidden = document.querySelector(".wrapper__header-hidden");
let mainButton = document.querySelector(".main__button");
let quizButton = document.querySelector(".questions__button.button.q4");

openMemuBtn.onclick = function () {
  header.classList.toggle("wrapper__header-active");
  headerHidden.classList.toggle("wrapper__header-hidden-active");
  menuBox.classList.toggle("header-hidden-active");
  menuBtnItem.forEach((item) =>
    item.classList.toggle("btn__button-item-active")
  );
};
mainButton.onclick = function () {
  document.querySelector(".forma__popup-wrapper").style.visibility = "visible";
  document.querySelector(".forma__popup-box2").style.transform = "scale(1)";
  body.classList.add("t-body");
  document.querySelector(".forma__popup-close").onclick = function () {
    document.querySelector(".forma__popup-wrapper").style.visibility = "hidden";
    document.querySelector(".forma__popup-box2").style.transform = "scale(0)";
    body.classList.remove("t-body");
  };
};
quizButton.onclick = function () {
  document.querySelector(".forma__popup-wrapper").style.visibility = "visible";
  document.querySelector(".forma__popup-box2").style.transform = "scale(1)";
  body.classList.add("t-body");
  document.querySelector(".forma__popup-close").onclick = function () {
    document.querySelector(".forma__popup-wrapper").style.visibility = "hidden";
    document.querySelector(".forma__popup-box2").style.transform = "scale(0)";
    body.classList.remove("t-body");
  };
};

let formaError = document.querySelector(".quiz__alert");
let inputAlert = document.querySelectorAll(".alert__item");
let body = document.querySelector("body");

function formValidate2(forma2) {
  let error = 0;
  const formReq2 = document.querySelectorAll(".req2");
  for (let index = 0; index < formReq2.length; index++) {
    const input = formReq2[index];
    if (input.classList.contains("phone__check")) {
      if (phoneTest(input)) {
        formaddError(input);
        document.querySelector(".alert__item.phone").style.transform =
          "scale(1)";
        error++;
      }
    } else if (
      input.getAttribute("type") == "checkbox" &&
      input.checked == false
    ) {
      formaddError(input);
      document.querySelector(".alert__item.checked").style.transform =
        "scale(1)";
      error++;
    }
  }
  return error;
}

document.addEventListener("DOMContentLoaded", function () {
  const forma2 = document.getElementById("forma_popup");

  forma2.addEventListener("submit", formSend2);
  async function formSend2(e) {
    e.preventDefault();
    let error = formValidate2(forma2);

    if (error === 0) {
      let data2 = new FormData(forma2);

      let responce2 = await fetch("ajax_quest.php", {
        method: "POST",
        body: data2,
      });
      if (!responce2.ok) {
        formaddError();
        document.querySelector(".forma__popup-wrapper").style.visibility =
          "hidden";
        document.querySelector(".forma__popup-box").style.transform =
          "scale(0)";
        document.querySelector(".alert__item.success").style.transform =
          "scale(1)";
        setTimeout(formremoveError, 5000);
        forma2.reset();
      } else {
        console.log(responce);
        formaddError();
        document.querySelector(".alert__item.server").style.transform =
          "scale(1)";
        //  setTimeout(formremoveError, 5000);
      }
    } else {
      //setTimeout(formremoveError, 7000);
    }
  }
});

formaError.addEventListener("click", function (e) {
  if (e.target.classList.contains("alert__btn")) {
    formremoveError();
  }
});

let countDots = 0;
let count = 1;
let dotsBox = document.querySelector(".main__slider-wrapper");
let photoItem = document.querySelectorAll(".main__photo-item");
let dotsItem = document.querySelectorAll(".main__slider-dot");
let btnDown = document.querySelector(".down");
let btnUp = document.querySelector(".up");
let currentPhotoNumder = document.querySelector(".main__slider-count-current");
let counter = photoItem.length - 1;

btnDown.onclick = function () {
  console.log("2222222222222");
  for (const item of photoItem) {
    item.classList.remove("main__photo-item-active");
  }
  for (const item of dotsItem) {
    item.classList.remove("main__slider-dot-active");
  }
  if (countDots < counter) {
    countDots = countDots + 1;
    count = count + 1;
  } else {
    countDots = 0;
    count = 1;
  }
  photoItem[countDots].classList.add("main__photo-item-active");
  dotsItem[countDots].classList.add("main__slider-dot-active");
  currentPhotoNumder.innerText = "0" + count;
};

btnUp.onclick = function () {
  console.log("11111111111");
  for (const item of photoItem) {
    item.classList.remove("main__photo-item-active");
  }
  for (const item of dotsItem) {
    item.classList.remove("main__slider-dot-active");
  }
  if (countDots === 0) {
    countDots = counter;
    count = counter + 1;
  } else {
    countDots = countDots - 1;
    count = count - 1;
  }
  photoItem[countDots].classList.add("main__photo-item-active");
  dotsItem[countDots].classList.add("main__slider-dot-active");
  currentPhotoNumder.innerText = "0" + count;
};

let siteQuiz = document.querySelector(".site-cost__box");
let siteCostDots = document.querySelectorAll(".site-cost__dots");
let numberDots = 0;
let siteCostQuizItem = document.querySelectorAll(".questions__item");

siteQuiz.addEventListener("click", function (e) {
  if (e.target.classList.contains("questions__button") && numberDots < 3) {
    siteCostQuizItem.forEach((item) =>
      item.classList.remove("questions__item-active")
    );
    numberDots = numberDots + 1;
    siteCostDots[numberDots].classList.add("site-cost__dots-active");
    siteCostQuizItem[numberDots].classList.add("questions__item-active");
  }
});

let workButton = document.querySelector(".work__button");
let workItem = document.querySelectorAll(".work__case-item");
let workBtnBox = document.querySelector(".work__btn");

workButton.onclick = function () {
  workItem.forEach((item) => (item.style.display = "block"));
  workBtnBox.style.marginTop = "6.5rem";
  if (mQuery639.matches) {
    workBtnBox.style.marginTop = "3rem";
  }
};

function formValidate(forma) {
  let error = 0;
  const formReq = document.querySelectorAll(".req");
  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    if (input.classList.contains("phone__check")) {
      if (phoneTest(input)) {
        formaddError(input);
        document.querySelector(".alert__item.phone").style.transform =
          "scale(1)";
        error++;
      }
    } else if (
      input.getAttribute("type") == "checkbox" &&
      input.checked == false
    ) {
      formaddError(input);
      document.querySelector(".alert__item.checked").style.transform =
        "scale(1)";
      error++;
    }
  }
  return error;
}

function formaddError() {
  formaError.style.visibility = "visible";
  body.classList.add("t-body");
}

function formremoveError() {
  formaError.style.visibility = "hidden";
  inputAlert.forEach((item) => (item.style.transform = "scale(0)"));
  body.classList.remove("t-body");
}
function phoneTest(input) {
  return !/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(input.value);
}

document.addEventListener("DOMContentLoaded", function () {
  const forma = document.getElementById("forma");

  forma.addEventListener("submit", formSend);
  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(forma);

    if (error === 0) {
      let data = new FormData(forma);

      let responce = await fetch("ajax_quest.php", {
        method: "POST",
        body: data,
      });
      if (!responce.ok) {
        formaddError();
        document.querySelector(".alert__item.success").style.transform =
          "scale(1)";
        //  setTimeout(formremoveError, 7000);
        forma.reset();
      } else {
        console.log(responce);
        formaddError();
        document.querySelector(".alert__item.server").style.transform =
          "scale(1)";

        //  setTimeout(formremoveError, 7000);
      }
    } else {
      //setTimeout(formremoveError, 7000);
    }
  }
});

formaError.addEventListener("click", function (e) {
  //  e.preventDefault();
  if (e.target.classList.contains("alert__btn")) {
    formremoveError();
  }
});

function formValidate3(forma3) {
  let error = 0;
  const formReq3 = document.querySelectorAll(".req3");
  for (let index = 0; index < formReq3.length; index++) {
    const input = formReq3[index];
    if (input.classList.contains("phone__check")) {
      if (phoneTest(input)) {
        formaddError(input);
        document.querySelector(".alert__item.phone").style.transform =
          "scale(1)";
        error++;
      }
    } else if (
      input.getAttribute("type") == "checkbox" &&
      input.checked == false
    ) {
      formaddError(input);
      document.querySelector(".alert__item.checked").style.transform =
        "scale(1)";
      error++;
    }
  }
  return error;
}

document.addEventListener("DOMContentLoaded", function () {
  const forma3 = document.getElementById("forma3");

  forma3.addEventListener("submit", formSend3);

  async function formSend3(e) {
    e.preventDefault();
    let error = formValidate3(forma3);
    if (error === 0) {
      let data3 = new FormData(forma3);

      let responce3 = await fetch("ajax_quest.php", {
        method: "POST",
        body: data3,
      });
      if (!responce3.ok) {
        formaddError();
        document.querySelector(".forma__popup-wrapper").style.visibility =
          "hidden";
        document.querySelector(".forma__popup-box").style.transform =
          "scale(0)";
        document.querySelector(".alert__item.success").style.transform =
          "scale(1)";
        setTimeout(formremoveError, 5000);
        forma3.reset();
      } else {
        console.log(responce);
        formaddError();
        document.querySelector(".alert__item.server").style.transform =
          "scale(1)";
        //  setTimeout(formremoveError, 5000);
      }
    } else {
      //setTimeout(formremoveError, 7000);
    }
  }
});
