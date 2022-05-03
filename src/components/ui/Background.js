const Background = props => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-800">
      {props.children}
    </div>
  );
};

export default Background;
