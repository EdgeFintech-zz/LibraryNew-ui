import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
    session: service('session'),

    actions: {
        login(attrs) {
            this.get('session').authenticate('authenticator:jwt', {
                email: attrs.email,
                password: attrs.password
            });
        }
    }
});
