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

    $('.carousel').carousel({
        interval: 1000000
    })
    function onResize() {
        $('.package ul').equalHeights();
    }onResize()

} )