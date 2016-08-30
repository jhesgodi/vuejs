new Vue({
  el: '#app',
  data: {
    tasks: [
      { body: 'Go to the store', done: false },
      { body: 'Go to the bank', done: false },
      { body: 'Go to the doctor', done: true },
    ]
  },
  methods: {
    toggleDoneFor: function (task) {
      task.done = !task.done;
    }
  }
});
