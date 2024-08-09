document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('new-task');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(input.value);
        input.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete';
        deleteBtn.addEventListener('click', function() {
            list.removeChild(li);
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
    }
});