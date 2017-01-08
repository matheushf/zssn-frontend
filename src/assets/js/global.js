function setCurrentMenu(el, file) {

    $(el).find('li').each(function () {
        var link = $(this).find('a').attr('href');
        if (link == file || ( typeof link != 'undefined' && link.match(file)))
            $(this).addClass('menu-active');
        else
            $(this).removeClass('menu-active');
    });
}