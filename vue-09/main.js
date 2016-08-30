Vue.component('alert', {
  template: '#alert-template',
  props: ['type'],
  data: function () {
    return {
      show: true
    };
  },
  computed: {
    classNames: function () {
      return {
        'alert': true,
        [`__${this.type}`]: !!this.type
      };
    }
  },
});

new Vue({
  el: 'body',
});
