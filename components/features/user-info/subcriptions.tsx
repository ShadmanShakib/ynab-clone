"use client";
import React from "react";
import { Check } from "lucide-react";
import { map } from "underscore";
import Title from "./title";

const subscriptionList = [
  "🎵 Music",
  "📺 TV streaming",
  "💪 Fitness",
  "🎓 Online courses",
  "📖 Audio or ebooks",
  "📰 News",
  "🍖 Meal delivery",
];

type Props = {};

export default function Subcribtions({}: Props) {
  const [subcriptions, setSubcriptions] = React.useState<String[]>([]);
  return (
    <div>
      <Title>🍿 WHich of these subscriptions do you have?</Title>
      <div className="grid grid-cols-2 place-content-end place-items-center">
        {map(subscriptionList, (s, i) => (
          <button
            key={i}
            className="mb-2 flex w-96 cursor-pointer justify-between rounded-md bg-gray-100 p-4 hover:bg-gray-100"
            onClick={() => setSubcriptions([...subcriptions, s])}
          >
            {s}
            {subcriptions.includes(s) && <Check className="text-green-500" />}
          </button>
        ))}
      </div>
    </div>
  );
}
