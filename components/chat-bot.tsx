'use client'

import React, { useState } from "react";
import ChatQuery from "./chat-query";
import { BotResponse } from "./chat-response";


export function ChatComponent() {
    const [botResponse, setBotResponse] = useState('');

    // this function updates the botResponse state
    const updateBotResponse = (responseText: string) => {
        // responseText = responseText + responseText
        setBotResponse(prev => `${prev}${prev ? "\n\n" : ""}${responseText}`);
    };

    return (
        <div className="grid grid-rows-3">
            <div className="grid row-span-2 w-full h-full py-5 size-100">
                <BotResponse displayedText={botResponse} />
            </div>
                <ChatQuery onUpdateResponse={updateBotResponse} />
        </div>
    )
}