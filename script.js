// script.js

// Add animations to section headers
document.querySelectorAll('h2').forEach((header) => {
    header.addEventListener('mouseover', () => {
      header.style.transform = 'cale(1.1)';
      header.style.transition = 'transform 0.3s ease-in-out';
    });
  
    header.addEventListener('mouseout', () => {
      header.style.transform = 'cale(1)';
    });
  });
  
  // Add accordion effect to education and experience sections
  document.querySelectorAll('.education,.experience').forEach((section) => {
    section.addEventListener('click', () => {
      section.classList.toggle('active');
    });
  });
  
  // Add hover effect to certifications
  document.querySelectorAll('.certifications li').forEach((certification) => {
    certification.addEventListener('mouseover', () => {
      certification.style.backgroundColor = '#f7f7f7';
      certification.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
  
    certification.addEventListener('mouseout', () => {
      certification.style.backgroundColor = 'transparent';
      certification.style.boxShadow = 'none';
    });
  });