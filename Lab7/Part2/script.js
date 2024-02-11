function getSavedTasks() {
            const savedTasks = localStorage.getItem('tasks');
            return savedTasks ? JSON.parse(savedTasks) : [];
        }

        // Function to save tasks to local storage
        function saveTasks(tasks) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        // Function to display tasks from local storage
        function displaySavedTasks() {
            const taskList = document.getElementById('taskList');
            const savedTasks = getSavedTasks();

            savedTasks.forEach(taskName => {
                const taskItem = document.createElement('li');
                taskItem.innerHTML = `
                    <span>${taskName}</span>
                    <button class="done">^_^</button>
                    <button class="delete">x</button>
                `;
                taskList.appendChild(taskItem);
                attachTaskEvents(taskItem);
            });
        }

        // Function to attach events to task items
        function attachTaskEvents(taskItem) {
            taskItem.querySelector('.done').addEventListener('click', function() {
                taskItem.querySelector('.done').style.display = 'none';
            });

            taskItem.querySelector('.delete').addEventListener('click', function() {
                taskItem.remove();
                saveTasks(getTaskNames());
            });
        }

        // Function to get all task names currently displayed
        function getTaskNames() {
            const taskItems = document.querySelectorAll('#taskList li');
            const taskNames = [];
            taskItems.forEach(item => {
                taskNames.push(item.querySelector('span').textContent);
            });
            return taskNames;
        }

        document.getElementById('addTaskButton').addEventListener('click', function() {
            const taskName = document.getElementById('taskInput').value.trim();

            if (taskName !== '') {
                const taskItem = document.createElement('li');
                taskItem.innerHTML = `
                    <span>${taskName}</span>
                    <button class="done">^_^</button>
                    <button class="delete">x</button>
                `;
                document.getElementById('taskList').appendChild(taskItem);

                attachTaskEvents(taskItem);

                // Save tasks to local storage
                const tasks = getTaskNames();
                tasks.push(taskName);
                saveTasks(tasks);

                document.getElementById('taskInput').value = '';
            }
        });

        // Display saved tasks when the page loads
        document.addEventListener('DOMContentLoaded', function() {
            displaySavedTasks();
        });
