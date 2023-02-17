
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})


fetch('https://www.balldontlie.io/api/v1/teams')
    .then((response) => response.json())
    .then(json => {
        json.data.forEach(user => {
            const template = document.getElementById("news-template").content.cloneNode(true);
            template.querySelector('.news-title').innerText = user.full_name;
            template.querySelector('.news-content').innerText = user.conference + "ern Conference";
            let link = template.querySelector('.btn').href;
            link = link.replace('abr',user.abbreviation);
            link = link.replace('city',user.city);
            link = link.replace('nickname', user.name);
            template.querySelector('.btn').href = link;
            document.querySelector('#news-list').appendChild(template);
        });
       });


let form = document.getElementById('contactForm')

       if(localStorage.getItem('username') && localStorage.getItem('password')){
           document.getElementById('username').value = localStorage.getItem('username')
           document.getElementById('password').value = localStorage.getItem('password')
       }

       form.addEventListener('submit',(e) => {
           e.preventDefault()
           let username = document.getElementById('username').value;
           let password = document.getElementById('password').value;

           localStorage.setItem('username',username)
           localStorage.setItem('password', password)

           alert("Your details are saved in local storage")


       })


       let user6 = window.localStorage.getItem('username')
       console.log(user6)