function deleteElement() {
    const element = document.querySelector('ytd-popup-container');
    if (element) {
      element.remove();
    }
  }
  
  deleteElement();
  
  // In case the element loads after the initial page load, we can use a MutationObserver
  const observer = new MutationObserver(deleteElement);
  observer.observe(document.body, { childList: true, subtree: true });
  