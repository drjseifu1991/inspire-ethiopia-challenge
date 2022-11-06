const shareData = {
    title: 'title',
    text: 'Some data',
    url: 'some url'
  }
  
  const btn = document.getElementById('share');
  const resultPara = document.querySelector('.result');
  
  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData);
      resultPara.textContent = 'Data sent successfully';
    } catch (err) {
      resultPara.textContent = `Error: ${err}`;
    }
  });
  