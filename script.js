// Function to show content with a slide-in transition
function showContent(page) {
  // Remove the active class from all content sections
  const contents = document.querySelectorAll('.container');
  contents.forEach(content => {
    content.classList.remove('active');
    content.style.display = 'none'; // Ensure hidden content doesn't interfere with layout
  });

  // Show and activate the selected content
  const contentToShow = document.getElementById(`${page}-content`);
  if (contentToShow) {
    contentToShow.style.display = 'block'; // Ensure it's part of the layout
    setTimeout(() => {
      contentToShow.classList.add('active'); // Add active class for slide-in effect
    }, 10); // Small delay to trigger the transition
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

  // Make the body visible after determining the correct page
  document.body.style.visibility = 'visible';
}

// Run the handler on page load
window.addEventListener('load', handleDefaultContent);

// Also listen for hash changes (e.g., when the user manually changes the URL hash)
window.addEventListener('hashchange', handleDefaultContent);
