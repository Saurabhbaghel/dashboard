'use client'

import React, { useState } from "react";
import ChatQuery from "./chat-query";
import { BotResponse } from "./chat-response";


export function ChatComponent() {
    const [botResponse, setBotResponse] = useState('');

    // this function updates the botResponse state
    const updateBotResponse = (queryText: string, responseText: string) => {
        // responseText = responseText + responseText

        responseText = `Human: ${queryText}\nBot: ${responseText}`

        setBotResponse(prev => `${prev}${prev ? "\n\n" : ""}${responseText}`);
    };

    return (
        <div className="grid grid-rows-5">
            <div className="grid row-span-4 w-full h-full py-5 size-full">
                <BotResponse displayedText={botResponse} />
            </div>
            <div className="w-full">
                <ChatQuery onUpdateResponse={updateBotResponse} />
            </div>
        </div>
    )
}