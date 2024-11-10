const timetable = document.getElementById('timetable');
timetable.addEventListener('click', function (event) {
  if (event.target.classList.contains('timetable-cell')) {
    const teacher = event.target.dataset.teacher;
    const subject = event.target.dataset.subject;
    window.location.href = `teacher-details.html?teacher=${teacher}&subject=${subject}`;
  }
});
