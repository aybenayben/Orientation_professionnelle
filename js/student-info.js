document.addEventListener('DOMContentLoaded', function() {
    const studentForm = document.getElementById('studentInfoForm');
    
    // إضافة تأثيرات الظهور التدريجي للنموذج
    const formSection = document.querySelector('.student-form-section');
    formSection.style.opacity = '0';
    formSection.style.transform = 'translateY(20px)';
    formSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        formSection.style.opacity = '1';
        formSection.style.transform = 'translateY(0)';
    }, 200);

    // معالجة تقديم النموذج
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // جمع بيانات النموذج
        const formData = {
            fullName: document.getElementById('fullName').value,
            studentId: document.getElementById('studentId').value,
            educationLevel: document.getElementById('educationLevel').value,
            specialization: document.getElementById('specialization').value,
            careerPath: document.getElementById('careerPath').value,
            interests: document.getElementById('interests').value
        };

        // حفظ البيانات في التخزين المحلي
        localStorage.setItem('studentInfo', JSON.stringify(formData));

        // عرض رسالة نجاح
        alert('تم حفظ معلوماتك بنجاح!');

        // إعادة توجيه الطالب إلى صفحة المسارات المهنية المناسبة
        window.location.href = 'careers.html';
    });

    // تأثير الشريط العلوي عند التمرير
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.boxShadow = 'none';
        }
    });
});