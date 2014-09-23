function TodoCtrl($scope) {

	$scope.todos = [
		{text: 'Go get the shopping', done: false},
		{text: 'Take kids to school', done: false},
		{text: 'Assemble the Avengers', done: true},
		{text: 'Meditate', done: false},
		{text: 'Finish website project with Jim', done: false},
		{text: 'Build a To Do list using Angular', done: true}
	];

	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	}

	$scope.addTodo = function() {
		$scope.todos.push({text: $scope.formTodoText, done: false});
		$scope.formTodoText = '';
	}

	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todo) {
			return !todo.done;
		});
	};
};