// الحصول على العناصر
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const schoolCards = document.querySelectorAll('.school-card');
const noResultsMessage = document.getElementById('noResultsMessage');

// دالة البحث حسب الاسم فقط
function filterSchools() {
    const searchTerm = searchInput.value.toLowerCase();
    let anyVisible = false;

    schoolCards.forEach(card => {
        const schoolName = card.querySelector('.school-name').textContent.toLowerCase();
        const matchesSearch = schoolName.includes(searchTerm);

        card.style.display = matchesSearch ? 'flex' : 'none';

        if (matchesSearch) {
            anyVisible = true;
        }
    });

    // إظهار أو إخفاء رسالة "لا توجد نتائج"
    noResultsMessage.style.display = anyVisible ? 'none' : 'block';
}

// إضافة مستمعي الأحداث
searchInput.addEventListener('input', filterSchools);
searchButton.addEventListener('click', filterSchools);
