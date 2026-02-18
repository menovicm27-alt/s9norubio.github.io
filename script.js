// Скрипт для кастом шифт переключателя
document.addEventListener('DOMContentLoaded', function() {
    const tgOption = document.getElementById('tgOption');
    const bioOption = document.getElementById('bioOption');
    const slider = document.getElementById('toggleSlider');

    if (tgOption && bioOption && slider) {
        tgOption.addEventListener('mouseenter', () => {
            slider.classList.remove('bio-mode');
        });

        bioOption.addEventListener('mouseenter', () => {
            slider.classList.add('bio-mode');
        });

        // Сброс на активный при уходе мыши
        document.getElementById('shiftToggle').addEventListener('mouseleave', () => {
            slider.classList.remove('bio-mode');
        });
    }
});