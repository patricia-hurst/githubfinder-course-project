const Wrapper = props => {
  return (
    <div className="text-center grow w-80 md:w-96 mx-auto">
      {props.children}
    </div>
  );
};

export default Wrapper;
