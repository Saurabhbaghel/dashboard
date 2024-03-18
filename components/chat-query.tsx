'use client';

import React, { FormEvent, useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

  

// export function BotResponseArea({ displayedText }) {
//   return (
//     <div className="grid w-full h-full py-5 size-20">
//         <Textarea disabled value={displayedText} />
//     </div>
//   );
// }


export default function ChatQuery({ onUpdateResponse }) {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  
  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  };
  
  const handleButtonClick = async () => {
      setIsLoading(true); // Start loading
      try {
          const response = await fetch('/api/bot', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ question: inputValue })
          });
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const res = await response.json();
          console.log(res);
          onUpdateResponse(inputValue, res.Bot);
          setInputValue(''); // Clear the input box after sending
      } catch (error) {
          console.error("Failed to fetch: ", error);
      } finally {
          setIsLoading(false); // Stop loading regardless of response success
      }
  };

  return (
      <div className="flex w-full  space-x-2">
          <Input
              type="text"
              placeholder="Query"
              value={inputValue}
              onChange={handleInputChange}
              name="question"
          />
          {isLoading ? (
              <ButtonLoading />
          ) : (
              <Button onClick={handleButtonClick} className="h-full w-40">Send</Button>
          )}
      </div>
  );
}
 
 
export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-full w-4 animate-spin fill=currentColor" />
      Please wait
    </Button>
  )
}

// export default function ChatQuery({ onUpdateResponse }) {
//     const [inputValue, setInputValue] = useState('');
    
//     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//       setInputValue(e.target.value);
//     };
    
//     let formData = new FormData();
//     formData.append('question', inputValue)

//     const handleButtonClick = async () => {
//     //   console.log(inputValue);
//       const response = await fetch('/api/bot', {
//         method: 'POST',
//         // body: formData,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({question: inputValue})
//       })
//     //   console.log(response)
//       const res = await response.json();
//       console.log(res)
//       const botResponse = res.Bot
//       onUpdateResponse(res.Bot);
//       setInputValue('')             // to remove the input from the input box after hitting send button

//     };
  
//     return (
//       <div className="flex w-full max-w-sm items-center space-x-2">
//         <Input
//           type="text"
//           placeholder="What do you want to know?"
//           value={inputValue}
//           onChange={handleInputChange}
//           name="question"
//         />
//         <Button onClick={handleButtonClick}>Send</Button>
//       </div>
//     );
//   }


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
  

  