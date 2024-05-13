const { expect, test } = require('@playwright/test');

// Add task
test('Test user can add task', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/');
    await page.fill('#task-input', 'Test Task');
    await page.click('#add-task');
    const createdTask = await page.content('.task');
    expect(createdTask).toContain('Test Task');
});

// Delete task
test('Test user can delete task', async ({ page }) => {
    // Add
    await page.goto('http://127.0.0.1:5500/');
    await page.fill('#task-input', 'Test Task');
    await page.click('#add-task');

    // Del
    await page.click('.task .delete-task');

    const task = await page.$$eval('.task',
        task => task.map(task => task.textContent));
    expect(task).not.toContain('Test Task');
});

// Verify if a user can mark a task as complete
test('Test user can mark task as complete', async ({ page }) => {
    // Add
    await page.goto('http://127.0.0.1:5500/');
    await page.fill('#task-input', 'Test Task');
    await page.click('#add-task');

    // Mark task as Complete
    await page.click('.task .task-complete');

    const completedTask = await page.$('.task.completed');
    expect(completedTask).not.toBeNull();
});

// Verify if a user can filter
test('Test user can filter task', async ({ page }) => {
    // Add
    await page.goto('http://127.0.0.1:5500/');
    await page.fill('#task-input', 'Test Task');
    await page.click('#add-task');

    // Mark task as Complete
    await page.click('.task .task-complete');

    // Filter the task
    await page.selectOption('#filter', 'Completed')
    const inompletedTask = await page.$('.task:not(.completed)');
    expect(inompletedTask).toBeNull();
});