{
  const remove = document.getElementById('remove')
  const save = document.getElementById('save')

  const textarea = document.getElementById('text')
  if(textarea === null || !('value' in textarea)){
    throw new Error()
  }
  
  window.addEventListener('load',()=>{
    let value = localStorage.getItem('value')
    textarea.value = value
  })

  save?.addEventListener('click',()=>{
    let text;
    text = textarea.value
    localStorage.setItem('value',text)

    console.log(localStorage)
  })

  remove?.addEventListener('click',()=>{
    // if(textarea && 'value' in textarea)
    textarea.value = ''
    localStorage.clear()
  })


}