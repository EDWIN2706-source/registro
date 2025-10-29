(function() {
  'use strict';
  window.addEventListener('load', function() {
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }else {
            event.preventDefault();
          window.location.href = "SESION.HTML";
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();