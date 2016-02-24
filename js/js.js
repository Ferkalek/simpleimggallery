$(function(){
    $('#imgGallery > *').wrap('<div class="itemImg"></div>');
    $('<div id="modalWrap"><div id="modalImg"></div><div class="prev"></div><div class="next"></div></div>').insertAfter('#imgGallery');

    $('#imgGallery .itemImg').on('click', function(e){
        var srcImg = $(e.target).attr('src');
        $('#modalWrap').show();
        $('#modalImg').append('<img src="' + srcImg + '">').find('img').fadeIn(900);
    });

    $('#modalWrap .next').on('click', function(){
        var elem = $('#modalImg img');
        var curentEl = elem.attr('src');
        var nextElSrc = $('#imgGallery')
            .find('img[src="' + curentEl + '"]')
            .closest('.itemImg')
            .next()
            .find('img')
            .attr('src');

        elem.attr('src', nextElSrc);
    });

    $('#modalWrap .prev').on('click', function(){
        var elem = $('#modalImg img');
        var curentEl = elem.attr('src');
        var prevElSrc = $('#imgGallery')
            .find('img[src="' + curentEl + '"]')
            .closest('.itemImg')
            .prev()
            .find('img')
            .attr('src');

        elem.attr('src', prevElSrc);
    });
});