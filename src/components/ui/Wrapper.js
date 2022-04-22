const Wrapper = props => {
  return (
    <div className="flex flex-col items-center text-center grow overflow-x-hidden w-80 md:w-96 mx-auto my-12 px-2">
      {props.children}
    </div>
  );
};

export default Wrapper;
