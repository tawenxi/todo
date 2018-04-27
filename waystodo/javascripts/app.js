

vm = new Vue({

	el: "#app",

	data:{
		tasks:[],
		newTask:''
	},

	computed: {

		completedTask(){
			return this.tasks.filter(function(task){
				return task.completed
			});
		},
		inProcess(){
			return this.tasks.filter(function(task){
				return !task.completed
			});
		},


	},

	methods:{
		completeAll() {
			this.tasks.forEach(function(task){
				task.completed = true;
			})
		},
		clearCompleted(){
			this.tasks = this.tasks.filter(function(task){
				return !task.completed;
			})
		},

		addTask: function(e){
			e.preventDefault();

			if (!this.newTask) return;
			this.tasks.push({
				body:this.newTask,
				completed: false
			});

			this.newTask = '';
		},

		editTask(task){
			this.removeTask(task);
			this.newTask = task.body;
			this.$refs.newTask.focus();
		},

		removeTask(task){
			console.log(task)
			this.arrayRemove(this.tasks, task);
		},


		toggleTask(task) {
			task.completed = !task.completed
		},

		arrayRemove(array,obj){
			for (var i = 0; i < array.length; i++) {
				if (array[i] == obj) {
					array.splice(i,1);
				}
			}
		}
	},



});

Array.prototype.remove = function(from, to) {  
    var rest = this.slice((to || from) + 1 || this.length);  
    this.length = from < 0 ? this.length + from : from;  
    return this.push.apply(this, rest);  
};  