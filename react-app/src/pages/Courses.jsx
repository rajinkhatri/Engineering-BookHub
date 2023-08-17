//list of books 
import './Courses.css'
import { Link } from 'react-router-dom';

const books = [
  {
    id: 1,
    title: 'Computer Engineering',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39hNzv3FSQ6S1GT7uUavk_f1KI4YKYiFGCBGH23df&s'
  },
  {
    id: 2,
    title: 'Electronics Engineering',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxHytpbA0pxba0cLmn6GxtUrTkR-JrTzYGQGAhnYVEJDTiM7Xh7XERTuJEEl1vY1HSGI&usqp=CAU'
  },
  {
    id: 3,
    title: 'Civil Engineering',
    img: 'https://media.istockphoto.com/id/1334138265/photo/surveyor-equipment-surveyor-u2019s-telescope-at-construction-site-or-surveying-for-making.webp?b=1&s=170667a&w=0&k=20&c=vjiiz_J1QYdGA_uGCyyjS5ubRi_5kaVDlk_IyqjW2V8='
  },
  {
    id: 4,
    title: 'Civil Engineering',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL254_SR254,254_.jpg'
  },
  {
    id: 5,
    title: 'Civil Engineering',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL254_SR254,254_.jpg'
  },
  {
    id: 6,
    title: 'Civil Engineering',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL254_SR254,254_.jpg'
  },

]

function Courses() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book Key={book.id}  {...book}></Book>
      })}
    </section>
  );
}

const Book = ({ img, title }) => {
  // const {img , title , author} = props;
  return (
    <div className="container" script={{width: '200px', backgroundColor: 'black'}}>
    <article className='book'>
      <Link to="/year"> <img src={img} alt="A Book" /> </Link>
      <h3>{title}</h3>
    </article>
    </div>
  );
};
export default Courses;