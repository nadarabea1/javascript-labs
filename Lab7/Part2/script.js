document.getElementById('addTaskButton').addEventListener('click', function() {
    var taskName = document.getElementById('taskInput').value;

    if (taskName !== '') {
        var taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskName}</span>
            <button class="done">^_^</button>
            <button class="delete">x</button>
        `;

        document.getElementById('taskList').appendChild(taskItem);

        document.getElementById('taskInput').value = '';

        taskItem.querySelector('.done').addEventListener('click', function() {
                    taskItem.querySelector('.done').style.display = 'none';
        });

        taskItem.querySelector('.delete').addEventListener('click', function() {
            taskItem.remove();
        });
    }
});