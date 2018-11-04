class LoginUI {

    constructor(wrapperId, loginCB) {
        this.wrapperId = wrapperId;
        this.loginCB = loginCB;
    }

    getInputValues() {
        const email = $('#inputEmail').val();
        const password = $('#inputPassword').val();
        return { email, password,  };
    }

    clear(){
        $('#inputEmail').val('');
        $('#inputPassword').val('');
    }

    init() {
        const html = `<form id="loginForm">
            <div class="form-group">
            <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required" autofocus="autofocus">
                <label for="inputEmail">Email address</label>
            </div>
            </div>
            <div class="form-group">
            <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="required">
                <label for="inputPassword">Password</label>
            </div>
            </div>
            <div class="form-group">
            <div class="checkbox">
                <label>
                <input type="checkbox" value="remember-me">
                Remember Password
                </label>
            </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>`;
        $('#' + this.wrapperId).html(html);

        $('#loginForm').submit((event) => {
            event.preventDefault();
            this.loginCB(this);
        });
    }

}