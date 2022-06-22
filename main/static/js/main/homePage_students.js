// Testimonial Section

//Object with Info
const testimonials = [
    {
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi nulla veniam dolore enim eum sit ipsa fuga alias corporis, pariatur vero cumque, eaque repudiandae amet quam eveniet nobis labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis doloremque esse nostrum nemo maiores quo. Ipsa delectus sit, illum laborum cum ipsum neque, consequuntur in voluptatem iste quis obcaecati.",
        client_name: "Sarah Parr",
        client_state: "Parent",
        icon: "",
        background_color: "#ecfef5",
        class: "active"
    },
    {
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi nulla veniam dolore enim eum sit ipsa fuga alias corporis, pariatur vero cumque, eaque repudiandae amet quam eveniet nobis labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis doloremque esse nostrum nemo maiores quo. Ipsa delectus sit, illum laborum cum ipsum neque, consequuntur in voluptatem iste quis obcaecati.",
        client_name: "Sarah Parr",
        client_state: "Parent",
        icon: "",
        background_color: "#d6e0ff",
        class: ""
    },
    {
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi nulla veniam dolore enim eum sit ipsa fuga alias corporis, pariatur vero cumque, eaque repudiandae amet quam eveniet nobis labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis doloremque esse nostrum nemo maiores quo. Ipsa delectus sit, illum laborum cum ipsum neque, consequuntur in voluptatem iste quis obcaecati.",
        client_name: "Sarah Parr",
        client_state: "Parent",
        icon: "",
        background_color: "#fef5ff",
        class: ""
    },
    {
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod commodi nulla veniam dolore enim eum sit ipsa fuga alias corporis, pariatur vero cumque, eaque repudiandae amet quam eveniet nobis labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis doloremque esse nostrum nemo maiores quo. Ipsa delectus sit, illum laborum cum ipsum neque, consequuntur in voluptatem iste quis obcaecati.",
        client_name: "Sarah Parr",
        client_state: "Parent",
        icon: "",
        background_color: "#fef9d5",
        class: ""
    }
]

var testimonial_div = document.getElementById('testimonial-slides');

for (const block of testimonials) {
    console.log(block)
    let t_box = document.createElement('div'); t_box.classList.add('testimonial-box');
    t_box.style.color = block.background_color; t_box.classList.add(block.class);
        let text_sec = document.createElement('div'); text_sec.classList.add('text-section');
            let t_text = document.createElement('p'); t_text.innerText = block.testimonial;
            text_sec.appendChild(t_text);
        t_box.appendChild(text_sec);
        let client_sec = document.createElement('div'); client_sec.classList.add('client-sec');
            let back_arr = document.createElement('div'); back_arr.innerHTML='Back';
            client_sec.appendChild(back_arr);
            let client_box = document.createElement('div'); client_box.classList.add('client-box');
                let icon = document.createElement('img'); icon.src=block.icon;
                client_box.appendChild(icon);
                let client_info = document.createElement('div'); client_info.classList.add('client_info');
                    let c_name = document.createElement('h1'); c_name.innerHTML = block.client_name;
                    client_info.appendChild(c_name);
                    let c_position = document.createElement('h5'); c_position.innerHTML = block.client_state;
                    client_info.appendChild(c_position);
                client_box.appendChild(client_info);
            client_sec.appendChild(client_box);
            let next_arr = document.createElement('div'); next_arr.innerHTML='Next';
            client_sec.appendChild(next_arr);
        t_box.appendChild(client_sec);
    testimonial_div.appendChild(t_box);
}