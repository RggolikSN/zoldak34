// Функция для проверки статуса стрима и отображения предпросмотра
function checkStreamStatus() {
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.getElementById('status-text');
    const streamPlayer = document.getElementById('stream-player');
    
    // В реальном приложении здесь должен быть запрос к Twitch API
    // Для демонстрации используем случайный статус
    const isOnline = Math.random() < 0.5; // 50% шанс, что стрим онлайн
    
    if (isOnline) {
        // Стрим онлайн - показываем предпросмотр
        statusDot.classList.add('online');
        statusText.textContent = 'Стрим онлайн';
        
        // Создаем предпросмотр стрима с реальным плеером Twitch
        streamPlayer.innerHTML = `
            <div class="stream-preview-content">
                <div style="width:100%;height:100%;position:relative;">
                    <div style="width:100%;height:100%;background:linear-gradient(45deg, #191927, #9146FF);display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;text-align:center;padding:1rem;">
                        <i class="fab fa-twitch" style="font-size:3rem;margin-bottom:1rem;color:#9146FF;"></i>
                        <h3>Стрим активен</h3>
                        <p>zoldak34 сейчас в прямом эфире</p>
                        <div style="margin-top:1rem;display:flex;gap:1rem;">
                            <button class="twitch-link" style="margin:0;" onclick="window.open('https://www.twitch.tv/zoldak34', '_blank')">
                                Смотреть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Стрим офлайн - показываем заглушку
        statusDot.classList.remove('online');
        statusText.textContent = 'Стрим офлайн';
        
        streamPlayer.innerHTML = `
            <div class="stream-placeholder">
                <i class="fab fa-twitch"></i>
                <h3>Предпросмотр стрима</h3>
                <p>Когда стрим активен, здесь будет отображаться его предпросмотр</p>
            </div>
        `;
    }
}

// Функция для получения реального статуса стрима с Twitch API
async function getRealStreamStatus() {
    try {
        // В реальном приложении здесь должен быть запрос к Twitch API
        // Для этого нужен Client ID и токен доступа
        // Это примерная реализация:
        
        /*
        const clientId = 'YOUR_CLIENT_ID';
        const accessToken = 'YOUR_ACCESS_TOKEN';
        const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=zoldak34`, {
            headers: {
                'Client-ID': clientId,
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
        const data = await response.json();
        return data.data && data.data.length > 0;
        */
        
        // Временно используем случайный статус
        return Math.random() < 0.5;
    } catch (error) {
        console.error('Ошибка при проверке статуса стрима:', error);
        return false;
    }
}

// Проверяем статус стрима при загрузке страницы
document.addEventListener('DOMContentLoaded', checkStreamStatus);

// Обновляем статус стрима каждые 60 секунд
setInterval(checkStreamStatus, 60000);