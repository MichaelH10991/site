let comment_array = []

// class for creating comments
class Comment {
  constructor(date, text){
    this.date = date;
    this.text = text;
  }
}

function submit() {
  comment_array.push(getComment())
  let comment_container = document.createElement("DIV")
  comment_container.innerHTML = getComment()
  document.getElementById("jumbo").appendChild(comment_container)
}

function getComment() {
  let date = getDate()
  let text = document.getElementById("comment-box").value
  comment = new Comment(date, text)
  return `You said "${comment.text}" on ${comment.date}`
}

// a booky class that creates a custom date
class CustomDate{
  constructor(){
    this.options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'
    }
    this.today = new Date();
  }
}

function getDate(){
  let date = new CustomDate()
  return date.today.toLocaleDateString('en-US', date.options)
}
