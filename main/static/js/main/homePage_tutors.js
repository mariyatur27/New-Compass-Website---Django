const tutor_testimonial = [
    {
        name: "Alex Morley",
        position: "High School Student",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima unde accusantium aperiam, ipsum error modi possimus suscipit earum quasi quibusdam quis quo dolores veniam magnam culpa maxime neque labore corporis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vitae nisi delectus quisquam ad sequi aliquam molestiae. Labore similique, atque, alias, mollitia aliquam quae reiciendis suscipit eos quia itaque eius.",
        work_period: "2 years",
        color: "#b4d5f6"
    },
    {
        name: "Alex Morley",
        position: "High School Student",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima unde accusantium aperiam, ipsum error modi possimus suscipit earum quasi quibusdam quis quo dolores veniam magnam culpa maxime neque labore corporis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vitae nisi delectus quisquam ad sequi aliquam molestiae. Labore similique, atque, alias, mollitia aliquam quae reiciendis suscipit eos quia itaque eius.",
        work_period: "2 years",
        color: "#b4d5f6"
    },
    {
        name: "Alex Morley",
        position: "High School Student",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima unde accusantium aperiam, ipsum error modi possimus suscipit earum quasi quibusdam quis quo dolores veniam magnam culpa maxime neque labore corporis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vitae nisi delectus quisquam ad sequi aliquam molestiae. Labore similique, atque, alias, mollitia aliquam quae reiciendis suscipit eos quia itaque eius.",
        work_period: "2 years",
        color: "#b4d5f6"
    }
]

var location = document.getElementById('testimonial-section');

tutor_testimonial.forEach(testimonial => {
    for(let info in testimonial){
        let t_box = document.createElement('div'); t_box.classList.add('testimonial-box');
        t_box.style.color = info.color; t_box.classList.add(block.class);

        t_box.appendChild(client_sec);
        // location.appendChild(t_box);
    }
})

// for (const info in tutor_testimonial){
//     let t_box = document.createElement('div'); t_box.classList.add('testimonial-box');
//     t_box.style.color = info.color; t_box.classList.add(block.class);
        // let text_sec = document.createElement('div'); text_sec.classList.add('text-section');
        //     let t_text = document.createElement('p'); t_text.innerText = info.testimonial;
        //     text_sec.appendChild(t_text);
        // t_box.appendChild(text_sec);
        // let client_sec = document.createElement('div'); client_sec.classList.add('client-sec');
        //     let back_arr = document.createElement('div'); back_arr.innerHTML='Back';
        //     client_sec.appendChild(back_arr);
        //     let client_box = document.createElement('div'); client_box.classList.add('client-box');
        //         let icon = document.createElement('img'); icon.src=block.icon;
        //         client_box.appendChild(icon);
        //         let client_info = document.createElement('div'); client_info.classList.add('client_info');
        //             let c_name = document.createElement('h1'); c_name.innerHTML = info.name;
        //             client_info.appendChild(c_name);
        //             let c_position = document.createElement('h5'); c_position.innerHTML = info.po;
        //             client_info.appendChild(c_position);
        //         client_box.appendChild(client_info);
        //     client_sec.appendChild(client_box);
        //     let next_arr = document.createElement('div'); next_arr.innerHTML='Next';
        //     client_sec.appendChild(next_arr);
//         t_box.appendChild(client_sec);
//     location.appendChild(t_box);
// }