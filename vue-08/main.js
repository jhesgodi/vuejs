Vue.component('tasks', {
  template: '#tasks-template',
  props: ['list'],
  methods: {
    addTask: function () {
      if (this.newTask) {
        this.list.push(this.createTask(this.newTask));
        this.newTask = null;
      }
    },
    toggleDoneFor: function (task) {
      task.done = !task.done;
    },
    isDone: function (task) {
      return task.done;
    },
    inProgress: function (task) {
      return !this.isDone(task);
    },
    removeTask: function (task) {
      this.list.$remove(task);
    },
    clearDone: function () {
      this.list = this.list.filter(this.inProgress);
    },
    createTask: function (body) {
      return { body: body.trim(), done: false };
    }
  },
  data: function () {
    return {
      newTask: null
    };
  },
  computed: {
    remaining: function () {
      return this.list.filter(this.inProgress).length;
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
