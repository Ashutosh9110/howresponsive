// import { useState } from "react";
// import { motion } from "framer-motion";

// import ashu from "../assets/pixeled.png";
// import moksha from "../assets/moksha.png";

// const CardFlip = () => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   function handleFlip() {
//     if (!isAnimating) {
//       setIsFlipped(!isFlipped);
//       setIsAnimating(true);
//     }
//   }
  
//   return (
//     <div className="">
//       <div 
//         className="flip-card w-[600px] h-[360px] cursor-pointer"
//         onClick={handleFlip}
//       >
//         <motion.div
//           className="flip-card-inner relative w-full h-full"
//           initial={false}
//           animate={{ rotateY: isFlipped ? 180 : 0 }}
//           transition={{ duration: 0.6, animationDirection: "normal" }}
//           onAnimationComplete={() => setIsAnimating(false)}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <div
//             className="flip-card-front absolute w-full h-full rounded-lg p-4 border border-[#00bfff]"
//             style={{ 
//               backgroundImage: `url(${ashu})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backfaceVisibility: "hidden"
//             }}
//           >
//             <h1 className="text-2xl font-bold">Sky</h1>
//             <p>Live on top of the world</p>
//           </div>

//           <div
//             className="flip-card-back absolute w-full h-full rounded-lg p-4 border border-[#00bfff]"
//             style={{ 
//               backgroundImage: `url(${moksha})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backfaceVisibility: "hidden",
//               transform: "rotateY(180deg)"
//             }}
//           >
//             <h1 className="text-2xl font-bold">Earth</h1>
//             <p>Or in the maze of the city</p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CardFlip;