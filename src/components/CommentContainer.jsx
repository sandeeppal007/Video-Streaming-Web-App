import React from 'react'


const commentData = [
    {
        name: "sandeep",
        text: "lorem ipsum akskhd baksjhdui sdh",
        reply: [
            {
                name: "sandeep pal",
                text: "lorem ipsum akskhd baksjhdui sdh",
                reply: [
                    {
                        name: "aakash",
                        text: "lorem ipsum akskhd baksjhdui sdh",
                        reply: [
                            {

                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "aakash",
        text: "lorem ipsum akskhd baksjhdui sdh",
        reply: [
            {
                name: "aakash pal",
                text: "lorem ipsum akskhd baksjhdui sdh",
                reply: [
                    {
                        name: "aakash",
                        text: "lorem ipsum akskhd baksjhdui sdh",
                        reply: [
                            {
                                name: "aakash",
                                text: "lorem ipsum akskhd baksjhdui sdh",
                                reply: [
                                    {
                                        name: "aakash",
                                        text: "lorem ipsum akskhd baksjhdui sdh",
                                        reply: [
                                            {
                                                name: "aakash pal last",
                                                text: "lorem ipsum akskhd baksjhdui sdh",
                                                reply: [
                                                    {

                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "ritik",
        text: "lorem ipsum akskhd baksjhdui sdh",
        reply: [
            {
                name: "ritik pal",
                text: "lorem ipsum akskhd baksjhdui sdh",
                reply: [
                    {
                        name: "aakash",
                        text: "lorem ipsum akskhd baksjhdui sdh",
                        reply: [
                            {

                            }
                        ]
                    }
                ]
            }
        ]
    }

]


const Comment = ({ data }) => {

    const { name, text, reply } = data;
    return <div className='my-2 flex items-center gap-5 bg-gray-200 p-2 rounded'>
        <img className='w-10 border border-red-300 rounded-full h-10' src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="" />

        <div>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>

    </div>
}


const CommentList = ({ comments }) => {
    return comments.map((comment, i) => (

        <div>
    <Comment key={i*9*2} data={comment} />
<div className='ml-10  '>
<Comment key={i*2} data={comment} />
<Comment key={i*5} data={comment} />
<Comment key={i*10} data={comment} />


</div>
        </div>
    
    ) 
    
    
    )
}


const CommentContainer = () => {
    return (
        <div className='m-5 p-2 my-2'>
            <h1 className='font-bold'>Comment:</h1>

            <CommentList   comments={commentData} />
        </div>

    )
}

export default CommentContainer