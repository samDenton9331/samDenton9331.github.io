function change_page_home() {
  window.location.href = "index.html";
}

function change_page_introduction() {
  window.location.href = "Introduction.html";
}

function change_page_about_me() {
  window.location.href = "about_me.html";
}

function change_page_resume() {
  window.location.href = "resume.html";
}

function change_page_coop_1() {
  window.location.href = "ottawa_coop_1.html";
}

function change_page_coop_3() {
  window.location.href = "ottawa_coop_3.html";
}

function change_page_contact() {
  window.location.href = "contact_information.html";
}

function change_page_work_terms() {
  window.location.href = "work_terms.html";
}

function pageLoaded() {
  console.log("load");
  document.body.className = document.body.className.replace("fade-out", "");

  document.querySelector(".Title_Text").style.opacity = 1;
  setTimeout(function() {
    document.querySelector(".button-panel").style.opacity = 1;
  }, 2000);
  document.body.className = document.body.className.replace("fade-out", "");

  try {
    document.querySelector(".Title_Text").style.opacity = 1;
    setTimeout(function() {
      document.querySelector(".button-panel").style.opacity = 1;
    }, 2000);
  } catch (error) {
    console.log("not the title page");
  }


}

window.onload = pageLoaded;
