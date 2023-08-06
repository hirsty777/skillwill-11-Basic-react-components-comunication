import React from 'react'

const BookCard = ({name, description, characters, image, action}) => {
  return (
    <div className='book-card'>
        <div className='book-image'>
            <img src={image} alt={name} />
        </div>
        <div className='book-name'>
            <h1>{name}</h1>
        </div>
        <div className='book-description'>
            <strong>Description: </strong>{description}
        </div>
        <div className='book-characters'>
            {/* when we loop thru characters,check if character isn`t last one add "," if it`s last add "." */}
            <strong>Characters: </strong>{characters.map((el,index,arr)=> index!==arr.length-1? `${el}, `:`${el}.`)}
        </div>
        <div className='btn'>
            <button onClick={()=>action(name, characters)}>Console</button>
        </div>
    </div>
  )
}

export default BookCard