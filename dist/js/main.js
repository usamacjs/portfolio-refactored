// Smooth Scrolling
$("#main-navv a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 130
      },
      800
    );
  }
});

$('body').scrollspy({ target: '#main-navv' });