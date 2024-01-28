"use client";
import {
  ChatBubbleBottomCenterIcon,
  PaperAirplaneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { qapairs } from "@/utils/qapair";
const Chatbot = () => {
  const [clicked, setClicked] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to the bottom of the messages container whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const keywordWeights = {
    payment: 2,
    types: 1,
    accept: 1,
    methods: 2,
    // ... add more keywords and their respective weights
  };

  const stopwords = new Set([
    "i",
    "me",
    "my",
    "myself",
    "we",
    "our",
    "ours",
    "ourselves",
    "you",
    "you're",
    "you've",
    "you'll",
    "you'd",
    "your",
    "yours",
    "yourself",
    "yourselves",
    "he",
    "him",
    "his",
    "himself",
    "she",
    "she's",
    "her",
    "hers",
    "herself",
    "it",
    "it's",
    "its",
    "itself",
    "they",
    "them",
    "their",
    "theirs",
    "themselves",
    "what",
    "which",
    "who",
    "whom",
    "this",
    "that",
    "that'll",
    "these",
    "those",
    "am",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "having",
    "do",
    "does",
    "did",
    "doing",
    "a",
    "an",
    "the",
    "and",
    "but",
    "if",
    "or",
    "because",
    "as",
    "until",
    "while",
    "of",
    "at",
    "by",
    "for",
    "with",
    "about",
    "against",
    "between",
    "into",
    "through",
    "during",
    "before",
    "after",
    "above",
    "below",
    "to",
    "from",
    "up",
    "down",
    "in",
    "out",
    "on",
    "off",
    "over",
    "under",
    "again",
    "further",
    "then",
    "once",
    "here",
    "there",
    "when",
    "where",
    "why",
    "how",
    "all",
    "any",
    "both",
    "each",
    "few",
    "more",
    "most",
    "other",
    "some",
    "such",
    "no",
    "nor",
    "not",
    "only",
    "own",
    "same",
    "so",
    "than",
    "too",
    "very",
    "s",
    "t",
    "can",
    "will",
    "just",
    "don",
    "don't",
    "should",
    "should've",
    "now",
    "d",
    "ll",
    "m",
    "o",
    "re",
    "ve",
    "y",
    "ain",
    "aren",
    "aren't",
    "couldn",
    "couldn't",
    "didn",
    "didn't",
    "doesn",
    "doesn't",
    "hadn",
    "hadn't",
    "hasn",
    "hasn't",
    "haven",
    "haven't",
    "isn",
    "isn't",
    "ma",
    "mightn",
    "mightn't",
    "mustn",
    "mustn't",
    "needn",
    "needn't",
    "shan",
    "shan't",
    "shouldn",
    "shouldn't",
    "wasn",
    "wasn't",
    "weren",
    "weren't",
    "won",
    "won't",
    "wouldn",
    "wouldn't",
  ]);
  const getAnswer = (userQuestion) => {
    // Preprocess the input (e.g., lowercasing, removing punctuation)
    const processedInput = userQuestion.toLowerCase().replace(/[^\w\s]/gi, "");

    let bestAnswer = "Sorry, I couldn’t understand your question,For more queries, feel free to reach out to us at 📨  contact@threewaystudio.world";
    let highestScore = 0;

    // First, try to match the entire question directly
    const directMatch = qapairs.find(
      (qaPair) => qaPair.question.toLowerCase() === processedInput
    );
    if (directMatch) {
      return directMatch.answer;
    }

    // If no direct match, proceed with keyword matching
    // Tokenize the user input (split into words)
    const inputWords = new Set(
      processedInput.split(" ").filter((word) => !stopwords.has(word))
    ); // Assuming you have a set of stopwords

    qapairs.forEach((qaPair) => {
      let score = 0;

      // Calculate the match score (number of matching keywords)
      qaPair.keywords.forEach((keyword) => {
        if (inputWords.has(keyword)) {
          score += 1; // Increment score for each matching keyword
        }
      });

      // Update best answer if this score is the highest so far and at least 2 keywords match
      if (score > highestScore && score >= 2) {
        highestScore = score;
        bestAnswer = qaPair.answer;
      }
    });

    return bestAnswer;
  };

  const addMessage = (text, sender) => {
    // Create a new message object
    const newMessage = {
      id: messages.length + 1,
      text: text,
      sender: sender,
      timestamp: new Date(),
    };

    // Update the state to include the new message
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage("");
    if (sender === "user") {
      setTimeout(() => {
        const botResponse = getAnswer(text);
        const botMessage = {
          id: messages.length + 2,
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
        };

        // Update the state to include the bot's message
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 500); // simulate a delay
    }
  };

  return (
    <div className="fixed z-[9999] bottom-6 max-w-full right-6 md:bottom-10 md:right-8 bg-[#151A1E] w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white  hover:drop-shadow-2xl  transition-all ease-in-out duration-150">
      <img
      src="/logo.svg"
        onClick={() => setClicked(!clicked)}
        className="w-8 h-8"
      />
      {clicked ? (
        <div className="fixed z-[9999] overflow-hidden h-[70vh] md:w-[400px] w-[300px]    bottom-6 right-[-24px] md:bottom-10 md:right-8 bg-[#151A1E] rounded-lg drop-shadow-lg   text-white   hover:drop-shadow-2xl  transition-all ease-in-out duration-150">
          <div className="bg-[#6C36AB] h-20 w-full flex px-4 items-center gap-x-2">
          <img
      src="/logo.svg"
        onClick={() => setClicked(!clicked)}
        className="w-12 h-12"
      />
      <div>
            <p className="text-xl font-semibold">Threeway Studio</p>
            <p className="text-md ">100+ Global Clientele Achieved!</p>

            </div>
          </div>
          <div
            className="messages-container relative mt-4 flex flex-col space-y-2 px-4 overflow-y-scroll"
            style={{ maxHeight: "48vh" }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <p
                  className={`${
                    message.sender === "user" ? "bg-green-500" : "bg-[#6C36AB]"
                  } p-4 py-2 rounded-md text-lg text-white max-w-xs`}
                >
                  {message.text}
                </p>
                <div ref={messagesEndRef} />
              </div>
            ))}
          </div>

          <div className="mt-4 absolute flex justify-center gap-x-2 bottom-0 p-4 w-full">
            <input
              type="text"
              onKeyUp={(e) => {
                console.log(e.key);
                if (e.key === "Enter") {
                  addMessage(e.target.value, "user");
                }
              }}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-full text-black outline-none w-[80%] bg-slate-100 px-4 py-2"
              placeholder="Enter The Message"
              value={message}
            />
            <button
              onClick={() => addMessage(message, "user")}
              className="bg-[#6C36AB] rounded-full p-2"
            >
              <PaperAirplaneIcon className="w-8 h-8 text-white rounded-full" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Chatbot;
