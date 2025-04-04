// Auto-close other dropdowns when one is opened
document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      document.querySelectorAll('details').forEach((d) => {
        if (d !== detail) d.open = false;
      });
    }
  });
});