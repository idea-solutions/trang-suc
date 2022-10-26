
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



var userLogin = document.querySelector('.header-infor__user');
var btnUser = document.querySelector('.btn-user');

userLogin.addEventListener('click', function () {
    btnUser.classList.toggle('show');
})



var headerNavigation = document.querySelector('.header-navigation')
const media = [
    window.matchMedia('(min-width:64rem'),
    window.matchMedia('(min-width:42.375rem) and (max-width:63.938rem'),
    window.matchMedia('(max-width:42.25rem'),
    window.matchMedia('(max-width:25.813rem'),
]
if(media[0].matches) {
    
} if(media[1].matches) {
    window.addEventListener('scroll', function() {
        if(window.scrollY > 126) {
            headerNavigation.classList.add('header-navigation--is-stuck')
            
        }else{
            headerNavigation.classList.remove('header-navigation--is-stuck')
        }
   })
}
if(media[2].matches) {

    var headerLinkIconMobileLeft = document.querySelectorAll('.header-link__icon-mobile-left');
    var headerNavigationList = document.querySelector('.header-navigation__list--mobile');
 
    headerLinkIconMobileLeft.forEach((icon,index) => {
        icon.addEventListener('click', function(e) {
           
            if(icon.classList.contains('active')) {
                headerLinkIconMobileLeft[1].classList.toggle('active')
                headerLinkIconMobileLeft[0].classList.toggle('active')
                
            }
            if(headerLinkIconMobileLeft[0].classList.contains('active')) {               
                headerNavigationList.style.transform = ' translateX(0%)';
            }else{
                headerNavigationList.style.transform = ' translateX(-100%)';      

            }
        })
       
    })


    var mobileUser = document.querySelector('.mobile-user');
    var isBoolean = false;
    mobileUser.addEventListener('click',function () {
            isBoolean = !isBoolean;
           
                $('.btn-user__mobile').animate([
            
                    { transform: 'translateX(-0px) translateY(5px)' },
                     {transform:' translateX(-107px) translateY(5px)'},
                    
                ], {
                    duration:500,
                    iterations:1,
                }
                
                )
        if($('.btn-user__mobile').classList.contains('show')) {
            $('.btn-user__mobile').classList.remove('show')
        }else{
            $('.btn-user__mobile').classList.add('show')
        }
    })

}
if(media[3].matches) {

}

function showVND(element) {
    element.classList.toggle('show-vnd');
}