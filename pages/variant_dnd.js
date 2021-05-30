import React, { useState } from 'react';
import styles from '../styles/Variant.module.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const variant_dnd = () => {

    const [ variants, setVariants ] = useState([
        "Great prices, fast delivery", "Hands-down the best customer service in the country", "Visit our store",
        "inbox us for all your shopping needs", "Great prices, fast delivery", "Inbox us for all your shopping needs."
    ]);

    // const [selectedVariant, setSelectedVariant] = useState([]);

    // console.log(selectedVariant)

    const onEnd = (result) => {
        console.log(result)
    }

    return (
        <div style={{ margin: "3rem"}}>
            <h4> Video Copy Variant </h4>

            <DragDropContext onDragEnd={onEnd}>
                <Droppable droppableId="characters">  
                {(provided, snapshot) => (
                    <div className="characters" ref={provided.innerRef} {...provided.droppableProps} >
                        {
                            variants.map( (item, idx) => 
                                <Draggable draggableId={(idx+200).toString()} key={idx.toString()} index={idx}>
                                    {(provided, snapshot) => 
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <div className={styles.itemStyle} > {item} </div>
                                        </div>
                                    }
                                </Draggable>
                            )
                        }
                        {provided.placeholder}
                    </div>
                )}

                </Droppable>
            </DragDropContext>

        </div>
    );
};

export default variant_dnd;