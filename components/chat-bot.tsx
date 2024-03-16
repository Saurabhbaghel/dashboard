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
        <div>
            <BotResponse displayedText={botResponse} />
            <ChatQuery onUpdateResponse={updateBotResponse} />
        </div>
    )
}