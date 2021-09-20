import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

import { books } from './books'
import { Book } from './Book'

function BookList() {
	return (
		<section className='booklist'>
			{books.map((book) => {
				// 2 ways doing it
				//return <Book key={book.id} book={book}></Book>
				return <Book key={book.id} {...book}></Book>
			})}
		</section>
	)
}

// this is the way using destructuring props
/* const Book = (props) => {
	return (
		<article className='book'>
			<img src={props.img} alt='cat' />
			<h1>{props.title}</h1>
			<h4>{props.author}</h4>
		</article>
	)
} */

// another way of doing so
// const Book1 = () => {
// 	return (
// 		<article className='book'>
// 			<Image />
// 			<Title />
// 			<Author />
// 		</article>
// 	)
// }

/* const Image = () => {
	return (
		<img
			src='https://www.amazon.ca/images/I/41cbk72CwjL._AC_UL480_FMwebp_QL65_.jpg'
			alt='cat'
		/>
	)
}

const Title = () => {
	return <h1>The Enceladus Mission: Hard Science Fiction</h1>
}

const Author = () => {
	return (
		<h4 style={{ color: 'red', fontSize: '0.75rem', marginTop: '0.25rem' }}>
			by Brandon Q. Morris
		</h4>
	)
} */

ReactDom.render(<BookList />, document.getElementById('root'))
