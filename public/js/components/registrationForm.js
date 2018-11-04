class RegistrationForm{

    constructor(wrapperId, submitCB){
        this.wrapperId = wrapperId;
        this.submitCB = submitCB;
    }

    clear(){
        $('#emailField').val('');
        $('#passwordField').val('');
        $('#usernameField').val('');
    }

    init(){
        const html = `
        <form id="registerForm">
            <div class="form-group">
            <div class="form-row">
                <div class="col-md-12">
                <div class="form-label-group">
                    <input type="username" id="usernameField" class="form-control" placeholder="Username" required="required" autofocus="autofocus">
                    <label for="usernameField">Username</label>
                </div>
                </div>
            </div>
            </div>
            <div class="form-group">
            <div class="form-label-group">
                <input type="email" id="emailField" class="form-control" placeholder="Email address" required="required">
                <label for="emailField">Email address</label>
            </div>
            </div>
            <div class="form-group">
            <div class="form-row">
                <div class="col-md-6">
                <div class="form-label-group">
                    <input type="password" id="passwordField" class="form-control" placeholder="Password" required="required">
                    <label for="passwordField">Password</label>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-label-group">
                    <input type="password" id="confirmPassword" class="form-control" placeholder="Confirm password" required="required">
                    <label for="confirmPassword">Confirm password</label>
                </div>
                </div>
            </div>
            </div>
            <button class="btn btn-primary btn-block" type="submit">Register</button>
        </form>`

        $('#' + this.wrapperId).html(html)
        this.submitCB();



    }
}