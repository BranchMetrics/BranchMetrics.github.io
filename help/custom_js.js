/* Code required for Google ReCaptcha on the Case submission page */
  function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
      var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
      elems["ts"] = JSON.stringify(new Date().getTime());
      document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    } 
  } 
  setInterval(timestamp, 500); 

/* When the user clicks on the button,
  toggle between hiding and esp-showing the dropdown content */
  function espDropdownTrigger(type) {
    let div = document.getElementById(type);
    div.classList.toggle("esp-show");
    div.getElementsByTagName("input")[0].focus();
  }

  function espFilter(type) {
    var input, filter, ul, li, partner, i;
    div = document.getElementById(type);
//     div = document.getElementById(document.getElementsByClassName("esp-show")[0].id);
    input = div.getElementsByTagName("input")[0];
    filter = input.value.toLowerCase();

    if(type == 'espLinks'){
      partner = div.getElementsByTagName("tr");
      i = 1;
    }
    else if(type == 'espList'){
      partner = div.getElementsByTagName("tr");
      i = 0;
    }
    else if(type == 'espCTD'){
      partner = div.getElementsByTagName("a");
      i = 0;
    }
    
    for (i; i < partner.length; i++) {
      txtValue = partner[i].getElementsByTagName('img')[0].alt;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        partner[i].style.display = "";
      } else {
        partner[i].style.display = "none";
      }
    }
  }

// when clicked outside of dropdown, close dropdown
  $(document).mouseup(function (e) {
    let container = $(".esp-dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.esp-dropdown-content').removeClass('esp-show');
     }
  });
