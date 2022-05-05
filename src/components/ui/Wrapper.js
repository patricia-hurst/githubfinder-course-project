// ========================
// Added: flex-grow class
// Wrapper is used on Home.js, About.js
// ========================

const Wrapper = props => {
  return (
    <div className="text-center flex-grow w-80 md:w-96 mx-auto my-12 px-2">
      {props.children}
    </div>
  );
};

export default Wrapper;

// const Wrapper = props => {
//   return (
//     <div className="text-center w-80 md:w-96 mx-auto my-12 px-2">
//       {props.children}
//     </div>
//   );
// };

// export default Wrapper;
