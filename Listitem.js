import React from 'react';
import './Listitem.css';
import FlipMove from 'react-flip-move'

function Listitem(props){
    const items = props.items;
    const listItems = items.map(item =>{
        return <div className="list" key={item.key}>
            <p>{item.text}
                <span>
                    <button
                     onClick={ () => props.deleteItem(item.key)}>X</button>
                </span>
            </p>
        </div>
    })
    return(
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

export default Listitem;