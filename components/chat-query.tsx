'use client';

import React, { FormEvent, useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

  

// export function BotResponseArea({ displayedText }) {
//   return (
//     <div className="grid w-full h-full py-5 size-20">
//         <Textarea disabled value={displayedText} />
//     </div>
//   );
// }

export default function ChatQuery({ onUpdateResponse }) {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
    
    let formData = new FormData();
    formData.append('question', inputValue)

    const handleButtonClick = async () => {
    //   console.log(inputValue);
      setInputValue('')             // to remove the input from the input box after hitting send button
      const response = await fetch('/api/bot', {
        method: 'POST',
        // body: formData,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({question: inputValue})
      })
    //   console.log(response)
      const res = await response.json();
      console.log(res)
      const botResponse = res.Query
      onUpdateResponse(res.Query);

    };
  
    return (
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="What do you want to know?"
          value={inputValue}
          onChange={handleInputChange}
          name="question"
        />
        <Button onClick={handleButtonClick}>Send</Button>
      </div>
    );
  }


// export default function QueryAreaWithButton() {

//     const [submitted, setSubmitted] = useState(false);
//     const [responseText, setResponseText] = useState('');
//     const [displayedText, setDisplayedText] = useState('');

//     async function onSubmit(event: FormEvent<HTMLFormElement>) {
//         event.preventDefault();

//         const formData = new FormData(event.currentTarget);
//         const response = await fetch('/api/bot', {
//             method: 'POST',
//             body: formData,
//         });

//         const data = await response.json();
//         // console.log(data)
//         setSubmitted(true);
//         setResponseText(data.Query);   // assuming 'data.Query' contains the response
//         // reset displayed text
//         setDisplayedText('');
//         // display the response character by character
//         // displayResponseCharacterByCharacter(data.Query)
//     }
//   return (
//     <form onSubmit={onSubmit}>
//         <div className="flex w-full max-w-sm items-center space-x-2">
//             <Input type="text" name="question" placeholder="Query" />
//             <Button type="submit">Submit</Button>
//         </div>
//     </form>

//   )
// }



// function displayResponseCharacterByCharacter(response) {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       if (index < response.length) {
//         setDisplayedText((prev) => prev + response.charAt(index));
//         index++;
//       } else {
//         clearInterval(intervalId); // Stop the interval when done
//       }
//     }, 100); // Adjust the speed by changing the delay, here 100ms
  
//   return (
//     <div>
//         {submitted ? (
//             <BotResponseArea displayedText={displayedText} />
//         ) : (
//             <form onSubmit={onSubmit}>
//                 <input type="text" name="question" placeholder="Ask a question" />
//                 <button type="submit">Submit</button>
//             </form>
//         ) 
//         }
//     </div>
//   );
//     }


// export function QueryAreaWithButton() {
//     async function onSubmit(event: FormEvent<HTMLFormElement>) {
//         event.preventDefault()

//         const formData = new FormData(event.currentTarget)
//         const response = await fetch('/api/bot', {
//             method: 'POST',
//             body: formData,
//         })

//         console.log(formData)
//         const data = await response.json()
//     }
//     return (
//         <div className="grid w-full h-13 gap-2 size-5">
//             <Textarea placeholder="Type your query here." />
//             <Button className="w-full">Send</Button>
//         </div>
//     )
// }

// export function ChatBot() {
    // return (
    //   <div className="space-y-8">
    //     <div className="flex items-center">
    //       <Avatar className="h-9 w-9">
    //         <AvatarImage src="/avatars/01.png" alt="Avatar" />
    //         <AvatarFallback>OM</AvatarFallback>
    //       </Avatar>
    //       <div className="ml-4 space-y-1">
    //         <p className="text-sm font-medium leading-none">Olivia Martin</p>
    //         <p className="text-sm text-muted-foreground">
    //           olivia.martin@email.com
    //         </p>
    //       </div>
    //       <div className="ml-auto font-medium">+$1,999.00</div>
    //     </div>
    //     <div className="flex items-center">
    //       <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
    //         <AvatarImage src="/avatars/02.png" alt="Avatar" />
    //         <AvatarFallback>JL</AvatarFallback>
    //       </Avatar>
    //       <div className="ml-4 space-y-1">
    //         <p className="text-sm font-medium leading-none">Jackson Lee</p>
    //         <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
    //       </div>
    //       <div className="ml-auto font-medium">+$39.00</div>
    //     </div>
    //     <div className="flex items-center">
    //       <Avatar className="h-9 w-9">
    //         <AvatarImage src="/avatars/03.png" alt="Avatar" />
    //         <AvatarFallback>IN</AvatarFallback>
    //       </Avatar>
    //       <div className="ml-4 space-y-1">
    //         <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
    //         <p className="text-sm text-muted-foreground">
    //           isabella.nguyen@email.com
    //         </p>
    //       </div>
    //       <div className="ml-auto font-medium">+$299.00</div>
    //     </div>
    //     <div className="flex items-center">
    //       <Avatar className="h-9 w-9">
    //         <AvatarImage src="/avatars/04.png" alt="Avatar" />
    //         <AvatarFallback>WK</AvatarFallback>
    //       </Avatar>
    //       <div className="ml-4 space-y-1">
    //         <p className="text-sm font-medium leading-none">William Kim</p>
    //         <p className="text-sm text-muted-foreground">will@email.com</p>
    //       </div>
    //       <div className="ml-auto font-medium">+$99.00</div>
    //     </div>
    //     <div className="flex items-center">
    //       <Avatar className="h-9 w-9">
    //         <AvatarImage src="/avatars/05.png" alt="Avatar" />
    //         <AvatarFallback>SD</AvatarFallback>
    //       </Avatar>
    //       <div className="ml-4 space-y-1">
    //         <p className="text-sm font-medium leading-none">Sofia Davis</p>
    //         <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
    //       </div>
    //       <div className="ml-auto font-medium">+$39.00</div>
    //     </div>
    //   </div>
    // )
//   }
  

  