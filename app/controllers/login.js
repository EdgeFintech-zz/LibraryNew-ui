import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    session: service('session'),

    actions: {
        login(attrs) {
            this.get('session').authenticate('authenticator:jwt', {
                email: attrs.email,
                password: attrs.password
            }).catch((e) => {
                // This does not appear to work. Posted to SO 10-15-2018. Video 44
                this.set('errors', e.errors);                
            });
        }
    }
});
