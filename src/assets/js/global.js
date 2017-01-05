$(function () {
    setCurrentMenu($('.menu-tabs'));
});

function setCurrentMenu(el) {
    var path = window.location.pathname;
    var file = path.split('/');
    file = file[file.length - 1];

    if (path == '/') {
        $(this).addClass('menu-active');
        return false;
    }

    $(el).find('li').each(function () {
        var link = $(this).find('a').attr('href');
        if (link == path || ( typeof link != 'undefined' && link.match(file)))
            $(this).addClass('menu-active');
    });
}