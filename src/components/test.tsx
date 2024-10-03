import React, { useState } from "react";
// Optional: Include custom CSS for additional styling if needed

const Test: React.FC = () => {
  // State to keep track of the card positions
  const [positions, setPositions] = useState(["card1", "card2", "card3"]);

  // Function to handle the swTesting of card positions
  const swapCard = (card: string) => {
    const newPositions = [...positions];
    const indexOfCard1 = newPositions.indexOf("card1");
    const indexOfClickedCard = newPositions.indexOf(card);

    // Swap the clicked card with card1
    [newPositions[indexOfCard1], newPositions[indexOfClickedCard]] = [
      newPositions[indexOfClickedCard],
      newPositions[indexOfCard1],
    ];
    setPositions(newPositions);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative" style={{ width: "600px", height: "200px" }}>
        {/* Card 1 */}
        <div
          className={`absolute transform transition-all duration-500 ease-in-out ${
            positions[0] === "card1"
              ? "translate-x-0"
              : positions[1] === "card1"
                ? "translate-x-[200px]"
                : "translate-x-[400px]"
          }`}
        >
          <div className="flex h-40 w-40 items-center justify-center rounded bg-blue-500 text-white shadow-lg">
            CARD 1
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`absolute transform transition-all duration-500 ease-in-out ${
            positions[0] === "card2"
              ? "translate-x-0"
              : positions[1] === "card2"
                ? "translate-x-[200px]"
                : "translate-x-[400px]"
          }`}
        >
          <div className="flex h-40 w-40 flex-col items-center justify-center rounded bg-green-500 text-white shadow-lg">
            <span> CARD 2 </span>
            {/* Button to move Card2 to position 1 */}
            <button
              onClick={() => swapCard("card2")}
              className="mt-4 rounded bg-white px-4 py-2 text-gray-700 shadow"
            >
              Move to Position 1
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`absolute transform transition-all duration-500 ease-in-out ${
            positions[0] === "card3"
              ? "translate-x-0"
              : positions[1] === "card3"
                ? "translate-x-[200px]"
                : "translate-x-[400px]"
          }`}
        >
          <div className="flex h-40 w-40 flex-col items-center justify-center rounded bg-red-500 text-white shadow-lg">
            <span> CARD 3 </span>
            {/* Button to move Card3 to position 1 */}
            <button
              onClick={() => swapCard("card3")}
              className="mt-4 rounded bg-white px-4 py-2 text-gray-700 shadow"
            >
              Move to Position 1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
