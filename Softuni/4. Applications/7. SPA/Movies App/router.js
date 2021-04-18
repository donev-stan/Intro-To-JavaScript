const routes = {
    'home': 'home-template',
    'login': 'login-form-template',
    'register': 'register-form-template',
    'add-movie': 'add-movie-form-template',
    'details': 'movie-details-template'
};

const router = async (fullPath) => {

    let [path, id] = fullPath.split('/');
    
    console.log(path);
    console.log(id);

    let root = document.getElementById('root');
    let templateData = authService.getData();

    switch (path) { 
        case 'home':
            templateData.movies = await movieService.getAll();
            break;

        case 'logout':
            authService.logout();
            return navigate('home');

        case 'details':
            let movieDetails = await movieService.getOne(id);
            Object.assign(templateData, movieDetails);
            break;
    }
    

    let templateID = routes[path];
    let template = Handlebars.compile(document.getElementById(templateID).innerHTML);
    
    root.innerHTML = template(templateData);
};

const navigate = (path) => {
    history.pushState({}, '', path);
    router(path);
};

