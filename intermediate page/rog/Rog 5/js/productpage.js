$(document).ready(function(){
    $('#search').click(function(){
      $('.menu-item').addClass('active')
      $('.search-form').addClass('active')
      $('.close').addClass('active')
      $('.title ul li a.logo1').addClass('active')
      $('#search').hide()
    })
    $('.close').click(function(){
      $('.menu-item').removeClass('active')
      $('.search-form').removeClass('active')
      $('.close').removeClass('active')
      $('.title ul li a.logo1').removeClass('active')
      $('#search').show()
    })
    $('#bars').click(function(){
        $('.menu ul').toggleClass('active')
        $('.menu ul li').toggleClass('active')
    })
  })
$(document).on('click','.image',function(){
    $(this).addClass('active').siblings().removeClass('active')
})


