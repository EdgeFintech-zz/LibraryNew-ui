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
                // Video 44 issue. This does not appear to work. Posted to SO 10-15-2018.
                // Fixed on 1-20-2019: e.errors should be e.json.errors (breaking change from Simple Auth released)
                this.set('errors', e.json.errors);                
            });
        }
    }
});
