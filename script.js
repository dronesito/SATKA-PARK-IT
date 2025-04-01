document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        // Прокручиваем к элементу, на который ссылается якорь
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth', // Плавная прокрутка
            block: 'start' // Устанавливаем, что элемент должен быть вверху окна
        });
    });
});


function toggleMenu() {
    const menu = document.querySelector('.popup-menu');
    const overlay = document.getElementById('overlay');

    // Переключаем класс active для меню и оверлея
    menu.classList.toggle('active');
    overlay.classList.toggle('active'); // Добавляем управление классом для оверлея

    // Управляем отображением оверлея
    if (menu.classList.contains('active')) {
        overlay.style.display = 'block'; // Показываем оверлей
        setTimeout(() => {
            overlay.style.opacity = '1'; // Устанавливаем непрозрачность
        }, 10); // Небольшая задержка для активации анимации
    } else {
        overlay.style.opacity = '0'; // Убираем непрозрачность
        setTimeout(() => {
            overlay.style.display = 'none'; // Скрываем оверлей после анимации
        }, 300); // Ждем окончания анимации перед скрытием
    }
}









function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Для плавной прокрутки
    });
}
// Показать кнопку "Наверх", когда пользователь прокручивает вниз
window.onscroll = function() {
    const button = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"; // Показать кнопку
    } else {
        button.style.display = "none"; // Скрыть кнопку
    }
};


document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function checkFadeIn() {
        fadeElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }
    // Проверяем элементы при загрузке страницы
    checkFadeIn();
    // Проверяем элементы при прокрутке
    window.addEventListener('scroll', checkFadeIn);
});


document.querySelectorAll('.development-block').forEach(function(block) {
    block.addEventListener('mouseenter', function() {
        block.classList.add('hovered'); // Добавляем класс при наведении
    });
    block.addEventListener('mouseleave', function() {
        block.classList.remove('hovered'); // Убираем класс при уходе курсора
    });
});

























document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll('.block');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    let currentIndex = 0;
    function showBlocks(index) {
        blocks.forEach(block => {
            block.classList.remove('active'); // Убираем класс active у всех блоков
            block.style.display = 'none'; // Скрываем блоки
        });
        // Показываем активные блоки
        for (let i = index; i < index + 3 && i < blocks.length; i++) {
            blocks[i].style.display = 'block'; // Показываем блоки
            setTimeout(() => {
                blocks[i].classList.add('active'); // Добавляем класс active для анимации
            }, 10); // Небольшая задержка для запуска анимации
        }
        // Обновляем состояние стрелок
        updateArrowState();
    }
    function updateArrowState() {
        if (currentIndex === 0) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }
        if (currentIndex >= blocks.length - 3) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }
    function init() {
        showBlocks(currentIndex);
        // Проверяем ширину окна
        if (window.innerWidth >= 768) {
            nextButton.addEventListener('click', function() {
                if (currentIndex < blocks.length - 3) {
                    currentIndex += 3;
                    showBlocks(currentIndex);
                }
            });
            prevButton.addEventListener('click', function() {
                if (currentIndex > 0) {
                    currentIndex -= 3;
                    showBlocks(currentIndex);
                }
            });
        } else {
            // Убираем обработчики событий для мобильных устройств
            nextButton.removeEventListener('click', function() {});
            prevButton.removeEventListener('click', function() {});
        }
    }
    // Инициализация
    init();
    // Обновляем обработчики событий при изменении размера окна
    window.addEventListener('resize', function() {
        init();
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    
    // Проверяем сохраненное состояние темы в localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.toggle('dark-theme', currentTheme === 'dark');
    }
    themeToggleButton.addEventListener('click', function() {
        // Переключаем класс темной темы
        document.body.classList.toggle('dark-theme');
        // Сохраняем текущее состояние темы в localStorage
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const screens = document.querySelectorAll('.scrin, .tx');
    function checkVisibility() {
        screens.forEach(screen => {
            const rect = screen.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                screen.classList.add('visible'); // Добавляем класс для анимации
            }
        });
    }
    // Проверяем видимость при загрузке страницы
    checkVisibility();
    // Проверяем видимость при прокрутке
    window.addEventListener('scroll', checkVisibility);
});






document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');
    function checkVisibility() {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible'); // Добавляем класс для анимации
            }
        });
    }
    // Проверяем видимость при загрузке страницы
    checkVisibility();
    // Проверяем видимость при прокрутке
    window.addEventListener('scroll', checkVisibility);
});


document.getElementById('next-button').addEventListener('click', function() {
    const container = document.getElementById('news-container');
    container.scrollBy({
        top: 0,
        left: container.clientWidth, // Прокрутка на ширину контейнера
        behavior: 'smooth' // Плавная прокрутка
    });
});


function toggleDropdown() {
    const dropdown = document.getElementById("theme-dropdown");
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
}
function setTheme(theme) {
    document.body.className = theme; // Устанавливаем класс для body
    const dropdown = document.getElementById("theme-dropdown");
    dropdown.style.display = "none"; // Скрываем выпадающее меню
}
// Пример изменения темы
document.body.classList.add('light'); // По умолчанию светлая тема




