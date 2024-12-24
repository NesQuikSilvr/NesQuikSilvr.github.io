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