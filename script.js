document.addEventListener('DOMContentLoaded', () => {
    // 獲取模式切換按鈕和 body 元素
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // 檢查是否有儲存的使用者偏好，如果沒有則預設為深色
    // 這個部分是額外優化，如果不需要可以移除
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    // 為按鈕添加點擊事件監聽器
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            // 切換 body 元素的 light-mode class
            body.classList.toggle('light-mode');

            // 儲存使用者偏好到 localStorage
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});
