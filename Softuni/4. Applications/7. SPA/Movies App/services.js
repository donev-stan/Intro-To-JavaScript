const apiKey = 'AIzaSyD_6VpJVLkoFm0yuIyZ_BvwbimMEB4Tr5Y';
const signInWithPasswordURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
const databaseURL = `https://team-manager---routing-default-rtdb.firebaseio.com`;

const request = async (url, method, body) => {
    let options = {
        method,
        headers: { 'content-type': 'application/json' },
    };

    if (body){
        Object.assign(options, {
            body: JSON.stringify(body)
        });
    }

    let response = await fetch(url, options);
    let data = await response.json();
    return data;
};


const authService = {
    async login(email, password){
        let response = await fetch(signInWithPasswordURL, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email, password})
        });
        let data = await response.json();
        localStorage.setItem('auth', JSON.stringify(data));
        return data;
    },

    getData(){

        try {
            let data = JSON.parse(localStorage.getItem('auth'));
            return {
                isAuthenticated: Boolean(data.idToken),
                email: data.email
            };
        } catch (error) {
            return {
                isAuthenticated: false,
                email: ''
            }
        }
        
    },

    logout(){
        localStorage.removeItem('auth');
    }

};

const movieService = {
    async add(movieData) {
        let response = await request(`${databaseURL}/movies.json`, 'POST', movieData);
        return response;
    },
    
    async getAll() {
        let response = await request(`${databaseURL}/movies.json`, 'GET');

        // let resultWithKey = Object.keys(response).map(key => ({key, ...response[key]}));
        let resultWithKey = Object.keys(response).map(key => Object.assign(response[key], {key}));

        return resultWithKey;
    },

    async getOne(id) {
        let response = await request(`${databaseURL}/movies/${id}.json`, 'GET');

        return response;  
    }
};