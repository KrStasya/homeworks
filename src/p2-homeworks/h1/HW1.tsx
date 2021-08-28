import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'http://inskyrim.ru/wp-content/uploads/2018/02/20180219193711_1.jpg',
    name: 'Стражник',
    message: '"Дай-ка угадаю: кто-то украл твой сладкий рулет?"',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/
            }
            {/*<AlternativeMessage/>*/
            }
            <hr/>
        </div>
    )
}

export default HW1
