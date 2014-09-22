function TodoCtrl($scope) {
	$scope.totalTodos = 4;

	$scope.todos = [
		{text: 'Learn Angular JS', done: false},
		{text: 'Build an app', done: false}
	];

	$scope.addTodo = function() {
		$scope.todos.push({text: $scope.formTodoText, done: false});
	}
}