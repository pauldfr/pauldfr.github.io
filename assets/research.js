document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(option => {
      option.setAttribute('aria-pressed', String(option === button));
    });
    document.querySelectorAll('.research-group').forEach(section => {
      section.hidden = category !== 'all' && section.id !== category;
    });
  });
});
