import Vue from 'vue'
import {
  extend,
  ValidationProvider,
  ValidationObserver,
  localize
} from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'
import { required, email, max } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)
extend('max', max)
// see: https://teratail.com/questions/231233
import isIP from 'validator/lib/isIP';
const validate_ip = value => isIP(String(value));

extend("ipaddr", {
        params: [],
      	validate: (value) => {
          if (validate_ip(value)) {
            return true;
          }
          return false;
        },
        message:
          "IPAddress must be valid"
        }
);

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)

localize('ja', ja)
