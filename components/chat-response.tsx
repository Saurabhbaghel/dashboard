import { Textarea } from "./ui/textarea";


export function BotResponse({ displayedText }) {
  return (
        <Textarea disabled value={displayedText} className="w-full h-full" style={{overflowY: 'auto'}} />
  );
}