const loginForm = new LoginUI(
    'loginContainer',
    (loginUI) => {
        const { email, password } = loginUI.getInputValues();
        loginUser(
            email,
            password,
            (response) => {
                console.log('success', response);
            },
            (error) => {
                console.log('something went wrong', error);
            });
    }
);
loginForm.init();