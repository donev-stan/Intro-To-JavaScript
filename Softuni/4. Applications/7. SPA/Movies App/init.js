function addEventListeners(){

    const navTemplate = Handlebars.compile(document.getElementById('navigation-template').innerHTML);
    Handlebars.registerPartial('navigation-template', navTemplate);
    
    const movieCardTemplate = Handlebars.compile(document.getElementById('movie-card-template').innerHTML);
    Handlebars.registerPartial('movie-card', movieCardTemplate);

    navigate('home');
}
addEventListeners();

function navigateHandler(e){
    e.preventDefault();

    // if(e.target.classList.contains('nav-link') == false) return;
    if (e.target.tagName != 'A') return;

    let url = new URL(e.target.href);
    // console.log(url);

    navigate(url.pathname.slice(1)); // slice(1) to remove the dash - /login
}

function onLoginSubmit(e){
    e.preventDefault();

    let formData = new FormData(document.forms['login-form']);

    let email = formData.get('email');
    let password = formData.get('password');

    authService
        .login(email, password)
        .then(data => {
            navigate('home');
        });
}

function onAddMovieSubmit(e){
    e.preventDefault();

    let formData = new FormData(document.forms['add-movie-form']);

    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');


    movieService['add']({title, description, imageUrl}).then(res => navigate('home'));
    
}