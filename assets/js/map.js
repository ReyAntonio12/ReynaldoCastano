document.addEventListener("DOMContentLoaded", (event)=> {

    setTimeout(()=>{
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact-me__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52482.499976085855!2d-86.2683424525768!3d12.12684778218993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sni!4v1692243464187!5m2!1ses-419!2sni"></iframe>                   
    `;
    }, 1000);
})