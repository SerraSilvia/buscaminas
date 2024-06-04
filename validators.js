export const Validators = {
    email(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    required(field) {
        return field !== '' && field !== null && field !== undefined;
    },
    upperWord(field) {
        const expRegUpper = /[A-Z]/;
        return expRegUpper.test(field);
    }
};