import { useParams } from 'react-router-dom'

var contents = [
   { id: 1, title: '기사제목1', description: '기사내용. 어쩌고 저쩌고...' },
   { id: 2, title: '기사제목2', description: '기사내용. 어쩌고 저쩌고...' },
   { id: 3, title: '기사제목3', description: '기사내용. 어쩌고 저쩌고...' },
]

function NewsListTopic() {
   var params = useParams // 여기에 코드 작성
   var topic_id = params.topic_id // 여기에 코드 작성
   var selected_topic = {
      title: 'Sorry',
      description: 'Not Found',
   }
   for (var i = 0; i < contents.length; i++) {
      if (contents[i].id === Number(topic_id)) {
         selected_topic = contents[i]
         break
         //   여기에 코드 작성
      }
   }
   console.log(params)
   return (
      <div>
         <h3>{selected_topic.title}</h3>
         {/*여기에 코드 작성*/}
         {selected_topic.description}
      </div>
   )
}

export default NewsListTopic
