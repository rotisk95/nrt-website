function validateForm(selector) {
    Array.from(document.querySelectorAll(selector)).forEach(item => {
        item.addEventListener('input', (e) => {
            if(e.target.value === ''){
            item.dataset.touched = false;
            }
        });
        item.addEventListener('invalid', () => {
            item.dataset.touched = true;
        });
        item.addEventListener('blur', () => {
            if (item.value !== '') item.dataset.touched = true;
        });
    });
};

validateForm('.js-form .form-field');
// validateForm('.js-footer-form .form-field');
//  validateForm('.form-wrapper .form-field');

var modalForm = document.querySelector('.js-form');
// var footerForm = document.querySelector('.js-footer-form');
var modalFormName = '.js-form';
// var footerFormName = '.js-footer-form';

modalForm.addEventListener('submit', function(e){
    submitForm(e, modalFormName);
});

footerForm.addEventListener('submit', function(e){
    submitForm(e, footerFormName);
});

function submitForm(e, formName) {
    e.preventDefault();
    var name = $(formName + ' .js-field-name').val();
    var email = $(formName + ' .js-field-email').val();
    var message = $(formName + ' .js-field-message').val();

    var formData = {
        name: name,
        email: email,
        message: message
    };

    $.ajax({
        type: "POST",
        url: '/mail.php',
        data: formData,
        success: function () {
            // $('#contact-modal').modal('hide');
            // $('#thanks-modal').modal('show');
        },
        error: function () {
            console.log('error');
            // $('#contact-modal').modal('hide');
            // // $('#error-modal').modal('show');
            // $('#thanks-modal').modal('show');

        }
    });
}