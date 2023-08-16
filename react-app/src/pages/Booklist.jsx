//list of books 
const books = [
    {id:1,
    Name :'Physics' ,
     author :' Amewlia Hepworth ',
     img : 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL254_SR254,254_.jpg'
     },
    {id :2,
       title :'Chemistry',
     author : 'Raj Kuamar',
     img : 'https://m.media-amazon.com/images/I/41zDwHWFgeL.jpg'
     },
     {id :3,
      title : 'It starts with us',
    author : 'Raj Dhakal',
    img : 'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL254_SR254,254_.jpg'
    },


]

function BookList() {
return (
  <section className="booklist">
  {books.map((book) =>{
    return <Book Key = {book.id}  {...book}></Book>
  })}
  </section>
);
}
 
const Book = ({img , title , author}) => {
 // const {img , title , author} = props;
  return (
  
    <article className='book'>
    <img src = {img} alt ="A Book"/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    </article>
  );
};
