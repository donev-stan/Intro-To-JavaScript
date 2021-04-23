const database = firebase.firestore();

const app = Sammy("#root", function () {
    this.use("Handlebars", "hbs");

    // Home Routes
    this.get("/home", function (context) {

        context.loggedIn = Boolean(getUserData);

        database
            .collection('offers')
            .get()
            .then(response => {
                context.offers = response.docs.map(offer => { return {id: offer.id, ...offer.data()} });
                //  => { return {...}} - we are returning an object

                extendContext(context).then(function () {
                    this.partial("./templates/home.hbs");
                });
            });
    });

    // User Routes
    this.get("/register", function (context){
        extendContext(context).then(function () {
            this.partial("./templates/register.hbs");
        });
    });

    this.post("/register", function (context) {
        const { email, password, rePassword } = context.params;

        if (password !== rePassword) return;

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential);
                this.redirect("/login");
            });
    });

    this.get("/login", function (context){
        extendContext(context).then(function () {
            this.partial("./templates/login.hbs");
        });
    });

    this.post("/login", function (context) {
        const { email, password } = context.params;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                saveUserData(userCredential);
                this.redirect('/home');
            });
    });

    this.get("/logout", function(){
        firebase
            .auth()
            .signOut()
            .then(response => {
                clearUserData();
                this.redirect('/home');
            });
    });

    // Offers Routes
    this.get("/create-offer", function (context) {
        extendContext(context).then(function () {
            this.partial("./templates/createOffer.hbs");
        });
    });

    this.get("/edit-offer", function (context){
        extendContext(context).then(function () {
            this.partial("./templates/editOffer.hbs");
        });
    });

    this.post("/create-offer", function(context) {
        const { productName, price, imageURL, description, brand } = context.params;

        database
            .collection('offers')
            .add({
                productName,
                price,
                imageURL,
                description,
                brand,
                salesman: getUserData().uid
            })
            .then(createdProduct => {
                this.redirect('/home');
            });

    });

    this.get("/details", function (context){
        extendContext(context).then(function () {
            this.partial("./templates/details.hbs");
        });
     });

    this.get("/details/:offerID", function(context) {

        const {offerID} = context.params;

        database
            .collection('offers')
            .doc(offerID)
            .get()
            .then(response => {

                const { uid } = getUserData();
                const actualOfferData = response.data();
                const imTheSalesman = actualOfferData.salesman === uid; 
                const imInTheClientsList = Boolean(actualOfferData.clients.find(id => id === uid));
                
                context.offer = {...actualOfferData, imTheSalesman, id: offerID, imInTheClientsList};

                extendContext(context).then(function(){
                    this.partial('./templates/details.hbs');
                });
            });

    });

    this.get('/edit/:offerID', function(context){
        const { offerID } = context.params; 

        database
            .collection('offers')
            .doc(offerID)
            .get()
            .then(response => {
                context.offer = {id: offerID, ...response.data()};
                
                extendContext(context).then(function() {
                    this.partial('./templates/editOffer.hbs');
                });
            });
    });

    this.post('/edit/:offerID', function(context) {
        const { offerID, productName, price, brand, description, imageURL } = context.params;

        database
            .collection('offers')
            .doc(offerID)
            .get()
            .then(response => {
                return database
                    .collection('offers')
                    .doc(offerID)
                    .set({
                        ...response.data(),
                        productName,
                        price,
                        brand,
                        description,
                        imageURL
                    })
            })
            .then(response => {
                this.redirect(`#/details/${offerID}`);
            });;

       
    });

    this.get('/delete/:offerID', function(context){

        const { offerID } = context.params; 
        
        database
            .collection('offers')
            .doc(offerID)
            .delete()
            .then(() => {
                this.redirect('#/home');
            });
    });

    this.get('/buy/:offerID', function(context) {
        const { offerID } = context.params; 

        database
            .collection('offers')
            .doc(offerID)
            .get()
            .then(response => {
                const offerData = { ...response.data() };
                offerData.clients.push(getUserData().uid);

                return database
                    .collection('offers')
                    .doc(offerID)
                    .set(offerData);

            })
            .then(() => {
                this.redirect(`#/details/${offerID}`);
            });
    });
});

(() => {
    app.run("/home");
})();

function extendContext(context) {

    const user = getUserData()
    context.loggedIn = Boolean(user);
    context.email = user ? user.email : '';


    return context.loadPartials({
        header: "./partial_templates/header.hbs",
        footer: "./partial_templates/footer.hbs",
    });
}

function saveUserData(credentials){
    const { user: {email, uid} } = credentials;
    localStorage.setItem('user', JSON.stringify({email, uid}));
}

function getUserData(){
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function clearUserData(){
    localStorage.removeItem('user');
}