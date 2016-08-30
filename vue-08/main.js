Vue.component('tasks', {
  template: '#tasks-template',
  props: ['list'],
  methods: {
    toggleDoneFor: function (task) {
      task.done = !task.done;
    }
  }
});

new Vue({
  el: '#app',
  data: {
    tasks: [
      { body: 'Go to the store', done: false },
      { body: 'Go to the bank', done: false },
      { body: 'Go to the doctor', done: true },
    ]
  }
});
