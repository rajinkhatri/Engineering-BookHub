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
    title: 'Automobile Engineering',
    img: 'https://www.examyear.com/wp-content/uploads/2023/01/automobile-engineering.jpg'
  },
  {
    id: 5,
    title: 'Mechanical Engineering',
    img: 'https://images.wondershare.com/mockitt/ux-beginner/mechanical-engineering.jpeg'
  },
  {
    id: 6,
    title: 'Industrial Engineering',
    img: 'https://i.ytimg.com/vi/Ww9hDlwjeF4/maxresdefault.jpg'
  },
  {
    id: 7,
    title: 'Architecture',
    img: 'data:image/jpeg;base64,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'
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