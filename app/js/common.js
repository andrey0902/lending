document.addEventListener('DOMContentLoaded', function () {
    console.log('load111');
    $('#test').selectize({
        scrollDuration: 80,
        onInitialize: function(){
            console.log('asdfalsdjf')

        },
        onDropdownOpen:  function(){
            console.log('asdfalsdjf')

        }
    });
    $(".dropdown-menu-scrollbar").mCustomScrollbar({
        theme:"minimal-dark",
        mouseWheel:{ preventDefault:true }
    });
} )