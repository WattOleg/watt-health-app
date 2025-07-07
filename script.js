// Простая версия для тестирования
console.log('Скрипт загружен!');

// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    
    // Находим все карточки
    const cards = document.querySelectorAll('.feature-card');
    console.log('Найдено карточек:', cards.length);
    
    // Добавляем обработчики
    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            console.log('Нажата карточка:', index);
            
            switch(index) {
                case 0: // Сон
                    alert('🌙 Трекер сна: Текущее время ' + new Date().toLocaleTimeString());
                    break;
                case 1: // Вода
                    alert('💧 Добавлено 250мл воды!');
                    break;
                case 2: // Питание
                    alert('🍎 Дневник питания открыт!');
                    break;
            }
        });
    });
});