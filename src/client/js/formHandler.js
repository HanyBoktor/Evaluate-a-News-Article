import { checkForName } from './nameChecker'

function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let url = document.getElementById('name').value

  if (checkForName(url)) {
    console.log('start here')
    fetch('http://localhost:8081/api', {
      method: 'POST',
      credentials: 'same-origin',
      cache: 'no-cache',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ url })
    })
      .then((res) => res.json())
      .then(function (res) {
        console.log(res)
        if (res.status != 0) {
          return alert('this site have something wrong, are you sure its accepted site')
        } else {
          document.getElementById('text').textContent = res.text[0].text
          document.getElementById('polarity').textContent = res.score_tag
          document.getElementById('subjectivity').textContent = res.subjectivity
          document.getElementById('polarityCon').textContent = res.confidence
          document.getElementById('sub-con').textContent = res.irony
        }
      })
  } else {
    alert('you write wrong URL')
  }
}
export { handleSubmit }
