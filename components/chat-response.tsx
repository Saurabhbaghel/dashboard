import { Textarea } from "./ui/textarea";


export function BotResponse({ displayedText }) {
  return (
    <div className="grid w-full h-full py-5 size-20">
        <Textarea disabled value={displayedText} className="w-full h-full" style={{overflowY: 'auto'}} />
    </div>
  );
}