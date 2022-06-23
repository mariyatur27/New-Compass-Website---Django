const tutor_testimonial = [
    {
        name: "Alex Morley",
        position: "High School Student",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima unde accusantium aperiam, ipsum error modi possimus suscipit earum quasi quibusdam quis quo dolores veniam magnam culpa maxime neque labore corporis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vitae nisi delectus quisquam ad sequi aliquam molestiae. Labore similique, atque, alias, mollitia aliquam quae reiciendis suscipit eos quia itaque eius.",
        work_period: "2 years",
        color: "#c8f8c8",
        class: 'active',
        icon: 'https://truesun.in/wp-content/uploads/2021/08/62681-flat-icons-face-computer-design-avatar-icon.png'
    },
    {
        name: "Alex Morley",
        position: "High School Student",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima unde accusantium aperiam, ipsum error modi possimus suscipit earum quasi quibusdam quis quo dolores veniam magnam culpa maxime neque labore corporis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vitae nisi delectus quisquam ad sequi aliquam molestiae. Labore similique, atque, alias, mollitia aliquam quae reiciendis suscipit eos quia itaque eius.",
        work_period: "2 years",
        color: "#f8edc8",
        class: '',
        icon: 'https://truesun.in/wp-content/uploads/2021/08/62681-flat-icons-face-computer-design-avatar-icon.png'
    },
    {
        name: "Alex Morley",
        position: "High School Student",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima unde accusantium aperiam, ipsum error modi possimus suscipit earum quasi quibusdam quis quo dolores veniam magnam culpa maxime neque labore corporis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vitae nisi delectus quisquam ad sequi aliquam molestiae. Labore similique, atque, alias, mollitia aliquam quae reiciendis suscipit eos quia itaque eius.",
        work_period: "2 years",
        color: "#b4d5f6",
        class: '',
        icon: 'https://truesun.in/wp-content/uploads/2021/08/62681-flat-icons-face-computer-design-avatar-icon.png'
    }
]

var testimonial_div = document.getElementById('testimonial-section');

tutor_testimonial.forEach(info => {
    console.log(info);
    let t_box = document.createElement('div'); t_box.classList.add('testimonial-box');
    t_box.style.backgroundColor = info.color; 
        if (info.class !== ''){
            t_box.classList.add(info.class);
        }
        let text_sec = document.createElement('div'); text_sec.classList.add('text-section');
            let t_text = document.createElement('p'); t_text.innerText = info.testimonial;
            text_sec.appendChild(t_text);
            let client_sec = document.createElement('div'); client_sec.classList.add('client-sec');
                    let client_icon = document.createElement('img'); client_icon.classList.add('client-icon');
                        client_icon.src = info.icon;
                    client_sec.appendChild(client_icon);
                    let client_info = document.createElement('div'); client_info.classList.add('client_info');
                        let c_name = document.createElement('h3'); c_name.innerHTML = info.name;
                        client_info.appendChild(c_name);
                        let c_position = document.createElement('h5'); c_position.innerHTML = info.position;
                        client_info.appendChild(c_position);
                        let c_duration = document.createElement('h6'); c_duration.innerHTML = info.work_period;
                        client_info.appendChild(c_duration);
                    client_sec.appendChild(client_info);
        t_box.appendChild(text_sec);
        t_box.appendChild(client_sec);
    testimonial_div.appendChild(t_box);
})

//Code for the slideshow
var slides = document.querySelectorAll('.testimonial-box');
let index = 0;

const activeSlide = n => {
    for(i of slides){
        i.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length){
        index = 0;
        activeSlide(index);
    }else{
        index++;
        activeSlide(index);
    }
}

setInterval(nextSlide, 6000);