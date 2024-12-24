function showContent(page) {
    // Hide all content divs
    const contents = document.querySelectorAll('.container');
    contents.forEach(content => {
      content.style.display = 'none';
    });
  
    // Show the content corresponding to the clicked page
    const contentToShow = document.getElementById(`${page}-content`);
    if (contentToShow) {
      contentToShow.style.display = 'block';
    }
  }

  // Function to handle default content based on URL hash
function handleDefaultContent() {
  // Get the current URL hash
  const hash = window.location.hash;

  // Remove the '#' and set the default page if no hash is present
  const page = hash ? hash.substring(1) : 'home';

  // Show the content corresponding to the hash or default to 'home'
  showContent(page);
}

// Run the handler on page load
window.addEventListener('load', handleDefaultContent);

// Also listen for hash changes (e.g., when the user manually changes the URL hash)
window.addEventListener('hashchange', handleDefaultContent);