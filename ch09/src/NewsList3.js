import { Routes, NavLink, Route } from 'react-router-dom'
import NewsListTopic from './NewListTopic'

var contents = [
   { id: 1, title: '기사제목1', description: '기사내용. 어쩌고 저쩌고...' },
   { id: 2, title: '기사제목2', description: '기사내용. 어쩌고 저쩌고...' },
   { id: 3, title: '기사제목3', description: '기사내용. 어쩌고 저쩌고...' },
]

function NewsList3() {
   var list = []
   for (var i = 0; i < contents.length; i++) {
      list.push(
         <li key={contents[i].id}>
            <NavLink to={'/newsList/' + contents[i].id}>{contents[i].title}</NavLink>
         </li>
      )
   }
   return (
      <div>
         <h2>뉴스기사</h2>
         <ul>{list}</ul>
         <Routes>
            {/* 여기에 코드 작성 */}
            <Route path="/:newsList" element={<NewsListTopic />}></Route>
         </Routes>
      </div>
   )
}

export default NewsList3
