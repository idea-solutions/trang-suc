
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var userLogin = document.querySelector('.header-infor__user');
var btnUser = document.querySelector('.btn-user');

userLogin.addEventListener('click', function () {
    btnUser.classList.toggle('show');
})
console.log(123)



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



// collectio js
const collection = [
    {img:"../collection/image-collection.webp",
    name:"Nhẫn vòng ADV",
    price:700
    },
    {img:"../collection/image-collection.webp",
    name:"Bông tai cao cấp Biz",
    price:350
    },
    {img:"../collection/image-collection.webp",
    name:"Nhẫn ngọc trai cao cấp",
    price:700
    },
    {img:"../collection/image-collection.webp",
    name:"Vòng tay cao cấp",
    price:500
    },
    {img:"../collection/image-collection.webp",
    name:"Nhẫn vàng cao cấp",
    price:100
    },
    {img:"../collection/image-collection.webp",
    name:"Nhẫn vòng ADV",
    price:700
    },
    {img:"../collection/image-collection.webp",
    name:"Bông tai cao cấp Biz",
    price:350
    },
    {img:"../collection/image-collection.webp",
    name:"Nhẫn ngọc trai cao cấp",
    price:700
    },
    {img:"../collection/image-collection.webp",
    name:"Vòng tay cao cấp",
    price:500
    },
    {img:"../collection/image-collection.webp",
    name:"Nhẫn vàng cao cấp",
    price:100
    },
    {img:"../collection/image-collection.webp",
    name:"Nhẫn vòng ADV",
    price:700
    },
    {img:"../collection/image-collection.webp",
    name:"Bông tai cao cấp Biz",
    price:350
    },
    {img:"../collection/image-collection.webp",
    name:"Nhẫn ngọc trai cao cấp",
    price:700
    },
    {img:"../collection/image-collection.webp",
    name:"Vòng tay cao cấp",
    price:500
    },
    {img:"../collection/image-collection.webp",
    name:"Nhẫn vàng cao cấp",
    price:100
    },
] 
var contentLeft = document.querySelector('.content__left');

var htmls = collection.map(item => {
    return `
    <div class="slider-item__link content__item">
    <div class="slider-item__parent-img">
      <img class="slider-item__img" src=${item.img} alt="">
      <div class="slider-item__bag ">
          <i class="fa-solid fa-bag-shopping"></i>

      </div>   
    </div>
      <span>${item.name}</span>
      <small>${item.price}.000đ</small>
                     
</div>
    `
}).join(' ');

contentLeft.innerHTML = htmls;