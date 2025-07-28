// ملف JavaScript لصفحة الاتصال

document.addEventListener('DOMContentLoaded', function() {
    // تفعيل الأكورديون في قسم الأسئلة الشائعة
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            // إغلاق جميع العناصر المفتوحة
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // تبديل حالة العنصر الحالي
            item.classList.toggle('active');
        });
    });
    
    // معالجة إرسال نموذج الاتصال
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // الحصول على قيم الحقول
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // التحقق من صحة البيانات
            if (!name || !email || !subject || !message) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            
            // في التطبيق الحقيقي، هنا سيتم إرسال البيانات إلى الخادم
            // لكن في هذا المثال سنعرض رسالة نجاح فقط
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
            
            // إعادة تعيين النموذج
            contactForm.reset();
        });
    }
});