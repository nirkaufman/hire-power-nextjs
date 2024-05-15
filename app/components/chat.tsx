import React, { useEffect, useRef } from "react";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
      <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
        <div className="overflow-y-auto max-h-[calc(100vh-5rem)]">
          {messages.length > 0
              ? messages.map((m) => (
                  <div key={m.id} className="whitespace-pre-wrap p-2">
                    {m.role === "user" ? "User: " : "Hire Power Master: "}
                    <div
                        className={`p-2 rounded ${
                            m.role === "user" ? "bg-blue-300" : "bg-slate-200"
                        }`}
                    >
                      {m.content}
                    </div>
                  </div>
              ))
              : null}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit}>
          <input
              className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
          />
        </form>
      </div>
  );
}
