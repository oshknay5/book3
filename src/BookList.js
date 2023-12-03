
import { useState } from "react";
import dataBook from "./dataBook";

 function BookList(){

    const [book, setBook]=useState(dataBook)

    return( <div>
        {book.map((bookItem =>{
            const {id, image, nameBook, author, description, showMore }= bookItem;
            return(
                <div key={id} className="container-book">
                     <div>
                         <img src={image} width='200px'/>
                     </div>
                      <div>
                        <h2>{nameBook}</h2>
                        <h3>{author}</h3>
                        <p>{description} </p>
                      </div>
                </div>
            )
        }))}

    </div>
    );
 }
 export default BookList;