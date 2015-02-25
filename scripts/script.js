$(document).ready(function(){
    $('#small_img a').click(function(e){
        $('#big_img img').hide().attr('src', $(this).attr('href'));
        $('#big_img img').load(function(){
            $(this).fadeIn(2000);
        });
        e.preventDefault();
    });

});