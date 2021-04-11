const app = Sammy('#main', () => {
    this.get('#/home', () => {
        this.partial('');
    });
});