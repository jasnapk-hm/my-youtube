import React from "react";

const commentData = [
  {
    name: "jasna",
    text: "lorem i andahbdhabsbacfdyqdadv",
    replies: [
      {
        name: "jasna",
        text: "lorem i andahbdhabsbacfdyqdadv",
        replies: [
          {
            name: "jasna",
            text: "lorem i andahbdhabsbacfdyqdadv",
            replies: [
              {
                name: "jasna",
                text: "lorem i andahbdhabsbacfdyqdadv",
                replies: [
                  {
                    name: "jasna",
                    text: "lorem i andahbdhabsbacfdyqdadv",
                    replies: [
                      {
                        name: "jasna",
                        text: "lorem i andahbdhabsbacfdyqdadv",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    name: "jasna",
    text: "lorem i andahbdhabsbacfdyqdadv",
    replies: [],
  },
  {
    name: "jasna",
    text: "lorem i andahbdhabsbacfdyqdadv",
    replies: [],
  },
];

function Comment({ data }) {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-md p-3 bg-slate-100 my-2">
      {" "}
      <img
        className="w-8 h-8 "
        src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTY1LWtsaGN3ZWNtLmpwZw.jpg"
      ></img>
      <div className="px-3">
        {" "}
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

function CommandList({ comments }) {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black">
        <CommandList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
}

function CommentsContainer() {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-lg">Comments:</h1>
      <CommandList comments={commentData} />
    </div>
  );
}

export default CommentsContainer;
