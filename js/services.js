// Get all FAQ questions and answers
var faqItems = document.querySelectorAll('.faq');

// Add click event listener to each FAQ item
faqItems.forEach((item) => {
  var question = item.querySelector('.faq-question');
  var answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    // Toggle the answer's visibility
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
  console.log('Click event listener added successfully.');
});