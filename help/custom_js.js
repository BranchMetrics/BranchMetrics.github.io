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

  $( window ).on( "load", function() {
    /* if on the ue search table page */
    if (window.location.pathname.indexOf('email-partners-list') >= 0) {
      $('#espList a').each(function() {
        var dataHref = $(this).attr('href');
        $(this).attr('data-href', dataHref);
        $(this).attr('href', '#');
      });
    }
    
    // if on the universal email integration page, look at localstorage and populate dropdowns search field with value in local storage
    if (window.location.pathname.indexOf('universal-email-integration-guide') >= 0){
      if (localStorage.getItem('csp')!=null){
        let cspName = localStorage.getItem('csp');
        $('#espCTD input').val(cspName);
        $('#espLinks input').val(cspName);
        espFilter('espCTD');
        espFilter('espLinks');
      }
    }

    // partner click from single column dropdown 
    $('#espList a').on( "click", function() {
      let cspName = $(this).find('img').attr('alt');
      localStorage.setItem('csp', cspName);
      window.location.href = $(this).attr('data-href');
    })
  });