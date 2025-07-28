document.addEventListener('DOMContentLoaded', function() {
    // إضافة تأثيرات الظهور التدريجي للعناصر
    const sections = document.querySelectorAll('.career-section');
    
    // تطبيق تأخير مختلف لكل قسم للحصول على تأثير متتابع
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
    });
    
    // إضافة تأثير التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // إضافة تأثير تفاعلي لبطاقات فرص العمل
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
        });
    });
});