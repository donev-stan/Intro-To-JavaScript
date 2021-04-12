const userModel = firebase.auth();

const router = Sammy('#main', function() {

    this.use('Handlebars', 'hbs');

    // GET
    this.get('/home', function(context) {

        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            const { uid, email } = JSON.parse(userInfo);
            context.loggedIn = true;
            context.email = email;
        }

        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs'
        }).then(function() {
            this.partial('../templates/home/home.hbs');
        });
    });

    this.get('/about', function() {

        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            const { uid, email } = JSON.parse(userInfo);
            context.loggedIn = true;
            context.email = email;
        }

        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs'
        }).then(function() {
            this.partial('../templates/about/about.hbs');
        });
    });

    this.get('/login', function() {
        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs',
            'loginForm': '../templates/login/loginForm.hbs'
        }).then(function() {
            this.partial('../templates/login/loginPage.hbs');
        });
    });

    this.get('/register', function() { 
        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs',
            'registerForm': '../templates/register/registerForm.hbs'
        }).then(function() {
            this.partial('../templates/register/registerPage.hbs');
        });
    });

    this.get('/logout', function(context) {
        userModel.signOut()
            .then(response => {
                localStorage.removeItem('userInfo');
                context.redirect('/home');
            })
            .catch(error => console.error(error));

        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs',
            'team': '../templates/catalog/team.hbs'
        }).then(function() {
            this.partial('../templates/catalog/teamCatalog.hbs');
        });
    });

    this.get('/catalog', function(context) {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            const { uid, email } = JSON.parse(userInfo);
            context.loggedIn = true;
            context.email = email;
        }

    });


    // POST
    this.post('/register', function(context) {
        const { email, password, repeatPassword } = context.params;

        userModel.createUserWithEmailAndPassword(email, password)
            .then(createdUser => {
                this.redirect('/login');
            })
            .catch(error => console.error(error));
    });

    this.post('/login', function(context) {
        const { email, password } = context.params;

        userModel.signInWithEmailAndPassword(email, password)
            .then(({user: {uid, email}}) => {
                localStorage.setItem('userInfo', JSON.stringify({uid, email})); 
                context.redirect('/home');
            })
            .catch(error => console.error(error));
    });

});


(() => {
    router.run('/home');
})();