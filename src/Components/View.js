import React from 'react'


export const View = ({data}) => {
    
    return data.map(book=>(
        
        <tr key={book.first}>
            <td>{book.first}</td>
            <td>{book.middle}</td>
            <td>{book.last}</td>
            <td>{book.village}</td>
            <td>{book.district}</td>
            <td>{book.state}</td>
            <td>{book.pin}</td>
            <td>{book.catle}</td>
            <td>{book.age}</td>
            <td>{book.milk}</td>
        </tr>            
    
))
}