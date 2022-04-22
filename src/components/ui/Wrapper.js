const Wrapper = props => {
  return (
    <div className="flex flex-col items-center text-center w-80 md:w-96 mx-auto">
      {props.children}
    </div>
  );
};

export default Wrapper;
