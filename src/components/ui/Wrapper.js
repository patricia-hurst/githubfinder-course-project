const Wrapper = props => {
  return (
    <div className="text-center flex-grow w-80 md:w-96 mx-auto my-12 px-2">
      {props.children}
    </div>
  );
};

export default Wrapper;
